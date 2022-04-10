<template>
    <div class="row position-set">
              <div class="col-lg-3 col-md-6">
                <div id="datatable_wrapper">
     </div>
          </div>

        <div class="col-lg-3 col-md-6 inc-indx">
  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio0" autocomplete="off" checked>
  <label class="btn btn-outline-primary custom-btn" for="btnradio0">All</label>

  <input type="radio" class="btn-check" name="btnradio"  v-on:click="setStatus('active')" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary custom-btn" for="btnradio1">Active</label>

  <input type="radio" class="btn-check" name="btnradio"  v-on:click="setStatus('pending')" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary custom-btn" for="btnradio2">Pending</label>

  <input type="radio" class="btn-check" name="btnradio" v-on:click="setStatus('expired')" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary custom-btn" for="btnradio3">Expired</label>
</div></div>

        <div class="col-lg-3 col-md-6 res-date-field dt-col inc-indx">



    <!-- <div v-if="currentUrl == '/Offers'"> -->

            <label >Date Range</label>
              <div class="input-group input-daterange">  <input id="icon-date" type="text" class="form-control date-input" name="daterange" value="01/01/2018 - 01/15/2018" readonly /> </div>
   <!-- </div> -->


            </div>

        <div class="col-lg-3 col-md-6 res-create-btn d-flex justify-content-end inc-indx">
            <button type="button" class="btn btn-primary create-btn" data-bs-toggle="button" autocomplete="off">
             <AddIcon />
<span class="ms-2">Create new offer</span></button>
            </div>

     </div>  
</template>

<script>
import AddIcon from "../layout/icons/add.vue";

export default {
    name:"OffersTableBar",
    components:{
        AddIcon,
    },

    data:function() {
    
       
        return {
           
            show: false,
            currentUrl:window.location.pathname,
         
            
      
            
        }
        
    },

}





</script>

<style >
#icon-date{
     background:url(../../assets/images/calendar.png) no-repeat scroll left center / 15px auto;
  background-position: 95%; 
}

</style>