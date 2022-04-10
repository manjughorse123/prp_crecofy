<template>
  <div>
    <FormModal
      :modalId="editModalId"
      :campaignToEdit="editedResource"
      :modalType="1"
    />
    <FormModal :modalId="createModalId" :modalType="2" />
    <div>
      <div class="vld-parent">
        <loading v-model:active="isLoading" :is-full-page="fullPage" />
      </div>

      <MainMenu />
      <TopBar
        title="Campaigns"
        :author="{
          home: 'Home',
          cart: 'Campaigns',
        }"
      />
      <div id="recommendations" class="row p-0 ps-4 pt-2">
        <div class="main-articles-sold row pt-2 pb-4 mb-0"></div>
      </div>

      <div id="recommendations" class="row p-0 ps-4 mb-5">
        <div class="main-articles-sold row pt-2 pb-4 mb-0">
          <CampaignsTableBar />

          <table class="table" id="datatable">
            <thead>
              <tr class="t-headinhg">
                <th>ID</th>
                <th>Name</th>
                <th>Offer</th>
                <th>Audience</th>
                <!-- <th>Date Range</th> -->
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody class="tb-style">
              <tr v-for="item in campaigns.results" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.offer.name }}</td>
                <td>{{ item.audience.name }}</td>
                <!-- <td>{{item.data_range}}</td> -->
                <td>
                  <button
                    v-bind:class="
                      item.is_active === true
                        ? 'status-active-btn'
                        : item.is_pending === true
                        ? 'status-pending'
                        : item.is_archive === true
                        ? 'status-expired'
                        : 'status-pending'
                    "
                  >
                    {{
                      item.is_active === true
                        ? "Active"
                        : item.is_pending === true
                        ? "Pending"
                        : item.is_archive === true
                        ? "Expired"
                        : "Pending"
                    }}
                  </button>
                </td>
                <td class="btn-align">
                  <div class="">
                    <button class="action-btns ms-2">
                      <PenIcon v-on:click="editCampaign(item)" />
                    </button>
                    <button class="action-btns ms-2">
                      <DeleteIcon v-on:click="deleteCampaign(item)" />
                    </button>
                    <button class="action-btns ms-2">
                      <CopyIcon v-on:click="duplicateCampaign(item)" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import MainMenu from "../Menu/MainMenu.vue";
import TopBar from "../Menu/TopBar.vue";
import DeleteIcon from "../icons/cancel";
import CopyIcon from "../icons/copy";
import PenIcon from "../icons/pen.vue";
import CampaignsTableBar from "./components/CampaignsTableBar.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import StatusMixin from "@/Core/mixins/StatusMixin";
import GlobalGridMixin from "@/Core/mixins/GlobalGridMixin";
import { deleteItem } from "@/Core/helpers/gridUtils";
import FormModal from "./components/FormModal";
import { mapGetters, mapActions } from "vuex";
import { subject } from "@casl/ability";
import { RESOURCE_NAME } from "./campaign.vars";

import {
  LIST_CAMPAIGNS,
  DELETE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  CREATE_CAMPAIGN,
  DUPLICATE_CAMPAIGN,
} from "@/Core/store/action-types";
import { DATE_FORMAT } from "../Core/helpers/utils";

export default {
  name: "Campaigns",
  components: {
    MainMenu,
    TopBar,
    CampaignsTableBar,
    DeleteIcon,
    PenIcon,
    CopyIcon,
    Loading,
    FormModal,
  },
  mixins: [StatusMixin, GlobalGridMixin],
  computed: {
    ...mapGetters("campaign", ["campaignsList"]),
    ...mapGetters("user", ["userProfile"]),
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  data: function () {
    return {
      isLoading: true,
      fullPage: true,
      totalPages: [],
      Status: "pending",
      predefindedDates: {
        Yesterday: [window.moment().subtract(1, "days"), window.moment()],
        "Last 7 Days": [window.moment().subtract(6, "days"), window.moment()],
        "Last 30 Days": [window.moment().subtract(29, "days"), window.moment()],
        "This Month": [
          window.moment().startOf("month"),
          window.moment().endOf("month"),
        ],
        "This Year": [
          window.moment().startOf("year"),
          window.moment().endOf("year"),
        ],
      },
      params: { persist: true},
      page:1,
      campaigns: {},
      createModalId: "createDialog",
      editModalId: "editDialog",
      editedResource: {},
    };
  },
  methods: {
    setStatus: function (statusVal) {
      delete this.params.is_active;
      delete this.params.is_pending;
      delete this.params.is_archive;
      if (statusVal === "active") {
        this.params.is_active = 1;
      } else if (statusVal === "expired") {
        this.params.is_archive = 1;
      } else if (statusVal === "pending") {
        this.params.is_pending = 1;
      }
      this.initCampaigns();
    },
    ...mapActions("campaign", [
      LIST_CAMPAIGNS,
      UPDATE_CAMPAIGN,
      DELETE_CAMPAIGN,
      DUPLICATE_CAMPAIGN,
      CREATE_CAMPAIGN,
    ]),

    onDateChange(start, end) {
      this.params = {
        date_after: start.format(DATE_FORMAT),
        date_before: end.format(DATE_FORMAT),
        page: 1,
        persist: true,
      };
      this.initCampaigns();
    },
    initCampaigns() {
      let options = this.params;
      let _this = this;
      this[LIST_CAMPAIGNS](options).then((res) => {
        this.campaigns = res;
        this.totalPages = Array(Math.ceil(res.count / 10))
          .fill(0)
          .map((e, i) => i + 1)
        if (!$.fn.DataTable.isDataTable("#datatable")) {
          setTimeout(() => {
            $("#datatable").DataTable({
            });
          });
        } else {
          _this.isLoading = true;
          $("#datatable").DataTable().destroy();
          setTimeout(function () {
            $("#datatable").DataTable();
            _this.isLoading = false;
          }, 2000);
        }
      });
    },
    getOffersByCampaign(offers) {
      let offerNameArray = [];
      $.each(offers, function (index) {
        offerNameArray.push(offers[index].name);
      });
      return offerNameArray.join(", ");
    },
    getAudienceByCampaign(audiences) {
      let audienceNameArray = [];
      $.each(audiences, function (index) {
        audienceNameArray.push(audiences[index].name);
      });
      return audienceNameArray.join(", ");
    },
    showCreateDialog() {
      window.$(`#${this.createModalId}`).modal("toggle");
    },
    editCampaign(item) {
      this.onUpdateItem(RESOURCE_NAME, window.$(`#${this.editModalId}`), item);
    },
    deleteCampaign(item) {
      deleteItem(
        this.$alertify,
        this.$ability,
        this[DELETE_CAMPAIGN],
        RESOURCE_NAME,
        item
      );
    },
    duplicateCampaign(item) {
      let hasPermission = this.$ability.can(
        "duplicate",
        subject(RESOURCE_NAME, item)
      );
      if (!hasPermission) {
        this.$alertify.notify("Action Forbidden!", "error", 3);
      } else {
        let confirmMsg = `This action will duplicate ${item.name} ${RESOURCE_NAME}. Are you sure?`;
        this.$alertify.confirm(
          "Please Confirm Your Action",
          confirmMsg,
          () => {
            this[DUPLICATE_CAMPAIGN](item.id).then(() =>
              this.$alertify.notify(
                "Campaign successfully duplicated.",
                "success",
                3
              )
            );
          },
          () => {}
        );
      }
    },
  },
  created() {
    /*this.initDateRange = [
                this.predefindedDates['This Year'][0],
                this.predefindedDates['This Year'][1]
            ]
            this.onDateChange(this.initDateRange[0], this.initDateRange[1]);*/
    this.initCampaigns();
  },
  watch:{
      page(){
          this.initCampaigns();
      }
  },
  datatableInputStyle() {
    $("#datatable_filter input").attr(
      "placeholder",
      "Search by the email or member ID"
    );
    $("#datatable_filter input").attr("class", "searchIn");
    $("#datatable_filter input").focus(function () {
      $("#datatable_filter input").removeClass("searchIn");
      $("#datatable_filter input").addClass("searchOut");
    });
    if (!$("#datatable_filter input").val()) {
      $("#datatable_filter input").addClass("searchIn");
      $("#datatable_filter input").removeClass("searchOut");
    }
  },
};
</script>

<style style="css">
* {
  font-family: Lexend;
  font-style: normal;
}

.custom-btn {
  border-color: #e8e9eb;
}

.custom-btn:hover {
  background-color: #5e66fa;
  border-color: #5e66fa;
}

.custom-btn:active {
  background-color: #5e66fa;
}

.create-btn {
  background-color: #5e66fa;
  border-color: #5e66fa;
}

.btn-check:active + .btn-outline-primary,
.btn-check:checked + .btn-outline-primary,
.btn-outline-primary.active,
.btn-outline-primary.dropdown-toggle.show,
.btn-outline-primary:active {
  background-color: #5e66fa;
  border-color: #5e66fa;
}

.dt-col {
  margin-top: -24px;
}

.dt-col > label {
  font-size: 11px;
  font-family: Lexend;
  font-style: normal;
  font-weight: 500;
  color: #3f3f40;
}

.searchIn {
  background: url("/images/search.png") no-repeat scroll left center / 15px auto;
}

.searchOut {
  background: none;
}

.dataTables_info {
  font-size: 13px !important;
  color: #aaabad !important;
}

.dataTables_length {
  display: none;
}

.dataTables_filter {
  float: left !important;
}

.dataTables_filter input {
  width: 338px !important;
}

#datatable_filter > label {
  font-size: 0;
}

#datatable_filter > label > input {
  width: 278px;
  height: 38px;
  font-size: 20px;
  margin-bottom: 18px;
}

#datatable_filter > label > input,
input::-webkit-input-placeholder {
  font-family: Lexend;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #aaabad;
}

.position-set {
  position: absolute;
  width: 92%;
}

.t-headinhg {
  color: #aaabad;
  font-family: Lexend;
  font-style: normal;
  font-weight: 500;
  font-size: 11px !important;
}

.tb-style {
  font-family: Lexend;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #3f3f40;
  border-block-color: #f0f1f3;
}

.t-headinhg > th {
  border-block-color: white !important;
}

.table {
  border-bottom: none !important;
}

.tb-style > tr {
  height: 55px !important;
}

td {
  vertical-align: middle;
  align-items: center;
}

.tb-style > tr:hover {
  background-color: #f6f6f7;
}

.inc-indx {
  z-index: 9998 !important;
}

.action-btns {
  background: #ffffff;

  /* Borders */
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
  border-radius: 3px;
  min-width: 36px;
  min-height: 36px;
}

.text-position-custom {
  display: flex;
  text-align: end;
}

.status-active-btn {
  border: none;
  width: 59px;
  height: 23px;
  background: rgba(11, 201, 132, 0.1);
  border-radius: 4px;
  font-family: Lexend;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  color: #0bc984;
}

.status-expired {
  border: none;
  width: 67px;
  height: 23px;
  font-family: Lexend;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  color: #ec4424;
  background: rgba(236, 68, 36, 0.1);
  border-radius: 4px;
}

.status-pending {
  border: none;
  width: 71px;
  height: 23px;
  font-family: Lexend;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  color: #f29d4f;
  background: rgba(242, 157, 79, 0.1);
  border-radius: 4px;
}

#datatable_previous {
  border: 1px solid #f0f1f2;
  border-radius: 5px 0px 0px 5px;
}

#datatable_next {
  border: 1px solid #f0f1f2;
  border-radius: 0px 5px 5px 0px;
  margin-left: 0px;
}

.paginate_button.current {
  background: linear-gradient(to bottom, white 0%, #ffffff 100%) !important;
  background-color: rgb(255, 255, 255);
  border: 1px solid #f0f1f2 !important;
  margin-left: 0px !important;
}

.current {
  color: #5e66fa !important;
}

#datatable_info {
  margin-top: 15px;
}

#datatable_paginate {
  margin-top: 10px;
}

.date-input {
  background-color: white !important;
  font-weight: normal;
  font-size: 15px;
  color: #3f3f40;
}

.positio-icon-btn {
  float: right;
}

.btn-align {
  text-align: end !important;
}

.inc-index {
  z-index: 998 !important;
}

/* Start:: Datatable pagination custom style */

#datatable_previous {
  border: 1px solid #ddd;
  border-radius: 3px 0 0 3px !important;
  width: 36px;
  overflow: hidden;
  display: inline-flex;
  margin-right: -1px;
}

a#datatable_previous:before {
  content: "← ";
  position: relative;
  margin-right: 23px;
  /*content: url(../../public/assets/images/arrow-pointing-to-left.png);*/
}

#datatable_next {
  border: 1px solid #ddd;
  border-radius: 0 3px 3px 0 !important;
  margin-left: 0;
  width: 36px;
  overflow: hidden;
  display: inline-flex;
}

a#datatable_next:before {
  content: " →";
  position: relative;
  margin-right: 23px;
  /*content: url(../../public/assets/images/arrow-pointing-to-right.png);*/
}

.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
  color: #fff !important;
  border: 1px solid #ddd;
  background-color: #ddd;
  background: linear-gradient(180deg, #ddd 0, #ddd);
}

.dataTables_wrapper .dataTables_paginate .paginate_button.current,
.dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
  color: #5f66fa !important;
  border: 1px solid #ddd;
  background-color: #fff;
  background: linear-gradient(180deg, #fff 0, #fff);
}

.dataTables_wrapper .dataTables_paginate .paginate_button.disabled,
.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active,
.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover {
  cursor: default;
  color: #666 !important;
  border: 1px solid #ddd !important;
  background: transparent !important;
  box-shadow: none;
  /*filter: brightness(0) invert(0.5);*/
}

.dataTables_wrapper .dataTables_paginate #datatable_next:hover {
  background: transparent !important;
  color: #666 !important;
  /*filter: brightness(0) invert(0.5);*/
  border: 1px solid #ddd !important;
}

.dataTables_wrapper .dataTables_paginate #datatable_previous:hover {
  background: transparent !important;
  color: #666 !important;
  /*
            filter: brightness(0) invert(0.5);*/
  border: 1px solid #ddd !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button {
  box-sizing: border-box;
  display: inline-block;
  min-width: 1.5em;
  padding: 0.5em 1em;
  margin-left: 0px !important;
  text-align: center;
  text-decoration: none !important;
  cursor: pointer;
  *cursor: hand;
  color: #333 !important;
  border: 1px solid #ddd !important;
  /* border-radius: 2px; */
  font-size: 12px;
  line-height: 18px;
  margin-right: -1px;
}

/* END:: Datatable pagination custom style */

@media only screen and (max-width: 900px) {
  #datatable_filter > label > input {
    width: 278px;
    height: 38px;
    font-size: 20px;
    margin-bottom: 75px !important;
  }

  .res-create-btn {
    justify-content: left !important;
    margin-top: 24px !important;
  }

  .res-date-field {
    margin-top: 0px !important;
  }
}
</style>
