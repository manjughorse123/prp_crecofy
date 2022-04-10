<template>
  <div class="contant-box-main">
    <div class="contant-header">
      <h6>
        <img
          src="./../../../public/assets/images/campaigns-icon.png"
          alt=""
        />Campaigns
      </h6>
    </div>
    <div class="contant-details">
      <div class="overflow-auto">
        <table class="table table-sm" id="my-table">
          <thead>
            <tr>
              <th scope="col" v-for="f in fields" v-bind:key="f.id">
                {{ f.split("_").join(" ") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.results" v-bind:key="item.id">
              <td class="font-light-text">{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td class="font-light-text">{{ item.offer.name }}</td>
              <td class="font-light-text">{{ item.audience.name }}</td>
              <td>
              <button class="status-active-btn" v-show="item.is_active===true">Active</button>
                  <button class="status-pending" v-show="item.is_active===false &&  item.is_archive===false">Pending</button>
                  <button class="status-expired" v-show="item.is_archive===true">Expired</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination
          :page='page'
          :totalPages='totalPages'
          :name='"Campaigns"'
          :count='items.count?items.count:0'
          :incrementpage='incrementpage'
          :decrementpage='decrementpage'
          :setpage='setpage'
          :perpage="10"
          />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

import { LIST_MEMBER_CAMPAIGNS } from "@/Core/store/action-types";
import Pagination from "../../Core/Pagination"
export default {
  name: "Campaigns",
  components: {
    Pagination
  },
  data() {
    return {
      page: 1,
      totalPages: [],
      fields: ["ID", "Campaign name", "Offer name", "Audience", "Status"],
      items: [
        //  {id: 1, campaign_name: 'Campaign no 1', offer_name: 'Flintstone', audience: 'Flintstone'},
        // {id: 2, campaign_name: 'Campaign no 2', offer_name: 'Flintstone', audience: 'Flintstone'},
        // {id: 3, campaign_name: 'Campaign no 3', offer_name: 'Flintstone', audience: 'Flintstone'},
        // {id: 4, campaign_name: 'Campaign no 4', offer_name: 'Flintstone', audience: 'Flintstone'},
        // {id: 5, campaign_name: 'Campaign no 5', offer_name: 'Flintstone', audience: 'Flintstone'},
        // {id: 6, campaign_name: 'Campaign no 6', offer_name: 'Flintstone', audience: 'Flintstone'},
      ],
    };
  },
  methods: {
    ...mapActions("member", [LIST_MEMBER_CAMPAIGNS]),
    InItMemberCampaignDetails(search = null, status = null) {
      if (this?.$route?.params?.memberId && this.$route.params.memberId != "") {
        const memberId = this.$route.params.memberId;
        const payload = {
          params: {
            page: this.page,
            search: search,
            status: status,
          },
          objId: memberId,
        };
        console.log("campaign=>", payload);
        this[LIST_MEMBER_CAMPAIGNS](payload).then((res) => {
          console.log("campaignDetails=>", res);
          this.items = res;
          var total = Math.ceil(res.count / 10);
          console.log("total=>", total);
          this.totalPages = Array(total)
            .fill(0)
            .map((e, i) => i + 1);
        }).catch(e=>{
          console.log("error=>",e)
        })
      }
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
  },
  mounted() {
    this.InItMemberCampaignDetails();
  },
  watch: {
    page() {
      this.InItMemberCampaignDetails();
    },
  },
};
</script>
<style>
.page-item {
  display: flex;
}
.page-link-active{
	color: #5E66FA;
    border: 1px solid #E2E2E2 !important;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    padding: 8px 13px !important;
}
</style>