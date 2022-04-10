<template>
  <div>
    <div class="vld-parent">
      <loading v-model:active="isLoading" :is-full-page="fullPage" />
    </div>
       <FormModal
      :modalId="editModalId"
      :campaignToEdit="editedResource"
      :modalType="1"
    />
    <FormModal :modalId="createModalId" :modalType="2" />
     <MainMenu />
      <TopBar
        title="Campaigns"
        :author="{
          home: 'Home',
          cart: 'Campaigns',
        }"
      />
    <div>
      <div class="contant-box-main">
        <div class="data-heading-wrp">
          <div class="data-heading">
            <div class="search-box-wrp">
              <input
                type="text"
                class="form-control"
                v-model="search"
                name=""
                placeholder="Search by the campaign name or ID"
              />
            </div>
            <div class="tab-box-wrp">
              <ul>
                <li @click="changeStatus('all')"  :class="status == 'all' ? 'active' : ''">All</li>
                <li @click="changeStatus('active')"  :class="status == 'active' ? 'active' : ''">Active</li>
                <li @click="changeStatus('pending')"  :class="status == 'pending' ? 'active' : ''">Pending</li>
                <li @click="changeStatus('expired')"  :class="status == 'expired' ? 'active' : ''">Expired</li>
              </ul>
            </div>
          </div>
          <div class="data-heading-btn">
            <button @click="showCreateDialog">+ create new campiagn</button>
          </div>
        </div>
        <div class="table-wrp overflow-auto">
          <table class="table my-table-wrp table-sm" id="my-table">
            <thead>
              <tr>
                 <th scope="col" v-for="f in fields" v-bind:key="f.id" >
                   <div class="table-head">{{ f.split("_").join(" ") }}</div>
                 </th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="campaign in  campaigns.results"
                v-bind:key="campaign.id"
                class='active-row'>
                
                <td >{{campaign.id}}</td>
                <td>{{campaign.name}}</td>
                <td class="font-light-text">{{campaign.offer.name}}</td>
                <td class="font-light-text">{{campaign.audience.name}}</td>
           
                <td>
                  <button class="status-active-btn" v-show="campaign.is_active===true">Active</button>
                  <button class="status-pending" v-show="campaign.is_active===false && campaign.is_archive===false">Pending</button>
                  <button class="status-expired" v-show="campaign.is_archive===true">Expired</button> 
                  <!-- <button class="status-inactive" v-else>Inactive</button> -->
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
          <Pagination
          :page='page'
          :totalPages='totalPages'
          :name='"Campaigns"'
          :count='campaigns.count?campaigns.count:0'
          :incrementpage='incrementpage'
          :decrementpage='decrementpage'
          :setpage='setpage'
          :perpage="10"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainMenu from "../Menu/MainMenu.vue";
import TopBar from "../Menu/TopBar.vue";
import DeleteIcon from "../icons/cancel";
import CopyIcon from "../icons/copy";
import PenIcon from "../icons/pen.vue";
import Pagination from "../Core/Pagination"
import FormModal from "./components/FormModal";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import {mapActions } from "vuex";
import {
  LIST_CAMPAIGNS,
//   DELETE_CAMPAIGN,
//   UPDATE_CAMPAIGN,
//   CREATE_CAMPAIGN,
//   DUPLICATE_CAMPAIGN,
} from "@/Core/store/action-types";
export default {
  name: "Campaign",
  components: {
   MainMenu,
    TopBar,
    //CampaignsTableBar,
    DeleteIcon,
    PenIcon,
    CopyIcon,
    Pagination,
    Loading,
    FormModal,
  },
  data() {
    return {
      fields: [
        "ID",
        "Name",
        "Offer",
        "Audiance",
        "Status",
        "",
      ],
      isLoading: true,
      campaigns:[],
      params:{ persist: true},
      status:'all',
      search:'',
      page: 1,
      totalPages: [],
      createModalId: "createDialog",
      editModalId: "editDialog",
    };
  },
  methods: {
        ...mapActions("campaign", [
      LIST_CAMPAIGNS,
    //   UPDATE_CAMPAIGN,
    //   DELETE_CAMPAIGN,
    //   DUPLICATE_CAMPAIGN,
    //   CREATE_CAMPAIGN,
    ]),
    initCampaigns(){
         let options = {
         persist: null,
          q: this.search == "" ? null : this.search,
          is_active:this.status =='active'?1:(this.status =='pending'?0:null),
          is_archive:this.status =='expired'?1:(this.status =='pending'?0:null),
          page: this.page,
      };
         this[LIST_CAMPAIGNS](options).then((res) => {
         this.campaigns = res;
         this.totalPages = Array(Math.ceil(res.count / 10))
          .fill(0)
          .map((e, i) => i + 1);
         console.log(this.campaigns);
         });
    },
      showCreateDialog() {
      window.$(`#${this.createModalId}`).modal("toggle");
    },
    changeStatus(state) {
      this.status = state;
    },
    incrementpage(){
      this.page=this.page+1;
    },
    decrementpage(){
      this.page=this.page-1;
    },
    setpage(page){
       this.page=page;
    }
  }
  ,
  mounted() {
      this.initCampaigns();
       setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  watch:{
      status(){
           this.page = 1;
           this.initCampaigns();
      },
      search(){
         this.page = 1
          this.initCampaigns();
      },
      page(){
          this.initCampaigns();
      }
  }

};
</script>
<style>
.dashboard-top-section .dts-box {
  background: #ffffff;
  padding: 40px;
}
.dashboard-top-section .dts-box span {
  color: #5e66fa;
  font-weight: 600;
  font-size: 54px;
  line-height: 43px;
  /* margin-bottom: 15px; */
}
.dashboard-top-section .dts-box h6 {
  margin: 0;
  color: #3f3f40;
  font-weight: 500;
  font-size: 18px;
}
.data-heading-wrp {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
}

.data-heading-wrp .data-heading {
  position: relative;
}

.data-heading-wrp .data-heading-btn button {
  background: #5e66fa;
  border-radius: 4px;
  font-style: normal;
  font-size: 15px;
  line-height: 150%;
  border: 0;
  color: #fff;
  font-weight: 400;
  padding: 11px 19px;
}
.search-box-wrp {
  position: relative;
  min-width: 300px;
  display: inline-block;
  margin-right: 20px;
}
.search-box-wrp input {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  color: #aaabad;
}
 .search-box-wrp input::placeholder {
  color: #aaabad;
}
.tab-box-wrp {
  position: relative;
  display: inline-block;
}
.tab-box-wrp ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
}
.tab-box-wrp ul li {
  background: #fff;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  color: #3f3f40;
  list-style-type: none;
  border: 1px solid #e2e2e2;
  padding: 9px 20px;
  cursor: pointer;
}
.tab-box-wrp ul li:first-child {
  border-radius: 4px 0px 0px 4px;
}
.tab-box-wrp ul li:last-child {
  border-radius: 0px 4px 4px 0px;
}
.tab-box-wrp ul li.active {
  background: #5e66fa;
  color: #fff;
  border: 1px solid #5e66fa;
}
.table-wrp table tr:hover {
  background: #f6f6f7;
}
button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}
.sort-active {
  font-weight: bold;
  color: #000000;
  font-size: 12px;
}
</style>