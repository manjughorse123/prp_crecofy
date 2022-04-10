<template>
  <div>


<div class="vld-parent">
        <loading   v-model:active="isLoading"
               
                 :is-full-page="fullPage"/>


        
    </div>


    
    <Sidebar />
    <Header
      title="Campaigns"
      :author="{
    home: 'Home',
    cart: 'Campaigns'
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
            <tr v-for="item in campaigns" :key="item.id">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>{{item.offer}}</td>
              <td>{{item.audience}}</td>
              <!-- <td>{{item.data_range}}</td> -->
              <td><button v-bind:class="(item.status =='ACTIVE') ?'status-active-btn':(item.status =='PENDING')?'status-pending':(item.status =='EXPIRED')?'status-expired':''">{{item.status}}</button></td>
              <td class="btn-align">
                <div class="">
                  <button class="action-btns">
                    <EyeIcon />
                  </button>
                  <button class="action-btns ms-2">
                    <PenIcon />
                  </button>
                  <button class="action-btns ms-2">
                    <CopyIcon />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

    import Sidebar from "../components/layout/Sidebar.vue";
    import Header from "../components/layout/Header.vue";
    // import AddIcon from "../components/layout/icons/add.vue";
    import EyeIcon from "../components/layout/icons/eye.vue";
    import PenIcon from "../components/layout/icons/pen.vue";
    import CopyIcon from "../components/layout/icons/copy.vue";
    import CampaignsTableBar from "../components/TableBars/CampaignsTableBar.vue";

import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/css/jquery.dataTables.min.css"
import axios from 'axios';
import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';


    export default {
        name: "Campaigns",
        components: {
            Header,
            Sidebar,
            CampaignsTableBar,
            // AddIcon,
            EyeIcon,
            PenIcon,
            CopyIcon,
            Loading,

        },
          mounted(){

    setTimeout(() => {
        $('#datatable').dataTable({
            "ordering": false
        })


    $(document).ready(function() {
        $(function() {
            $('input[name="daterange"]').daterangepicker({
                "startDate": "01/01/2020",
                "endDate": "17/01/2020",
                opens: 'center',
                locale: {
                    format: 'DD/MM/YYYY'
                }
            });
        });
            $('#datatable_filter input').attr("placeholder", $.parseHTML("     Search by the email or member ID")[0].data);
        $('#datatable_filter input').attr("class", 'searchIn')
        $('#datatable_previous').html('<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L1 6M1 6L6 1M1 6L11 6" stroke="#E8E9EB" stroke-width="1.25" stroke-linecap="round"/></svg>')
        $('#datatable_next').html('<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L11 6M11 6L6 1M11 6L1 6" stroke="#E8E9EB" stroke-width="1.25" stroke-linecap="round"/></svg>')
    });

       $("#datatable_filter input").focus(function() {
        $('#datatable_filter input').removeClass("searchIn")
        $('#datatable_filter input').addClass("searchOut")
    });
    if(!$("#datatable_filter input").val()){
        $('#datatable_filter input').addClass("searchIn")
        $('#datatable_filter input').removeClass("searchOut")
      }

this.isLoading = false;
}, 2000);
  },
  data: function() {


        return {
             isLoading: true,
                fullPage: true,
            campaigns:[{
              id:'1',
              name:'10% off offer',
              offer:"10% off",
              audience:"Audience 20+",
              // data_range:"24-11-2021 - 24-12-2021",
              status:'ACTIVE' // active //exipired 
            },
            {
              id:'2',
              name:'15% off offer',
              offer:"15% off",
              audience:"Audience 20+",
              // data_range:"24/11/2021 - 24/12/2021",
              status:'EXPIRED' // active //exipired 
            },
            {
              id:'3',
              name:'20% off offer',
              offer:"20% off",
              audience:"Audience 20+	",
              // data_range:"24/11/2021 - 24/12/2021",
              status:'PENDING' // active //exipired 
            },
            {
              id:'4',
              name:'25% off offer',
              offer:"25% off",
              audience:"Audience 20+",
              // data_range:"24/11/2021 - 24/12/2021",
              status:'ACTIVE' // active //exipired 
            },
            
            ] ,
            Status:"pending",





        }

    },

      methods: {
    setStatus: function (message) {
      this.Status = message;
    }
  }




    };


{

  }
</script>

<style>
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

.searchIn{
  background:url(../assets/images/search.png) no-repeat scroll left center / 15px auto;
}

.searchOut{
background:none; 
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
  display:flex;
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

.positio-icon-btn{
  float: right;
}
.btn-align{
  text-align:end !important;
}


@media only screen and (max-width: 900px) {
  #datatable_filter > label > input {
  width: 278px;
  height: 38px;
  font-size: 20px;
  margin-bottom: 75px !important;
}

.res-create-btn{
  justify-content: left !important;
  margin-top: 24px !important;
}

.res-date-field{
  margin-top: 0px !important;
}

}
</style>
