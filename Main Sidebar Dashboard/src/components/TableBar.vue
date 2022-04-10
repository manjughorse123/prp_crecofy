<template>
    <div class="row position-set">
              <div class="col-lg-3">
                <div id="datatable_wrapper">
     </div>
          </div>

        <div class="col-lg-3 inc-indx">
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

        <div class="col-lg-3 dt-col inc-indx">



    <div v-if="currentUrl == '/Offers'">

            <label >Date Range</label>
              <div class="input-group input-daterange">  <input type="text" class="form-control date-input" name="daterange" value="01/01/2018 - 01/15/2018" readonly /> </div>
   </div>
    <div v-if="currentUrl == '/Admins'">

        <label >Role</label>
           <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Select articles
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
  </div>

            </div>

        <div class="col-lg-3 d-flex justify-content-end inc-indx">
            <button type="button" class="btn btn-primary create-btn" data-bs-toggle="button" autocomplete="off">
             <AddIcon />
<span class="ms-2">Create new offer</span></button>
            </div>

     </div>  
</template>

<script>
import AddIcon from "../components/layout/icons/add.vue";
import {routes} from "../router/index"

export default {
    name:"TableBar",
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