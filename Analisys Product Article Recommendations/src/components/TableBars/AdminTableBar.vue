<template>
    <div class="row position-set">
              <div class="col-lg-3 col-md-6 ">
                <div id="datatable_wrapper">
     </div>
          </div>

        <div class="col-lg-3 col-md-6  inc-indx">
  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio0" autocomplete="off" checked>
  <label class="btn btn-outline-primary custom-btn" for="btnradio0">All</label>

  <input type="radio" class="btn-check" name="btnradio"  v-on:click="setStatus('active')" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary custom-btn" for="btnradio1">Active</label>

  <input type="radio" class="btn-check" name="btnradio"  v-on:click="setStatus('pending')" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary custom-btn" for="btnradio2">Inactive</label>


</div></div>

        <div class="col-lg-3 col-md-6 res-date-field dt-col inc-indx">



    <!-- <div v-if="currentUrl == '/Offers'"> -->

           
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
</div>   <!-- </div> -->


            </div>

        <div class="col-lg-3 col-md-6  res-create-btn d-flex justify-content-end inc-indx">
            <button type="button" class="btn btn-primary create-btn" data-bs-toggle="button" autocomplete="off">
             <AddIcon />
<span class="ms-2">Add new admin</span></button>
            </div>

     </div>  
</template>

<script>
import AddIcon from "../layout/icons/add.vue";

export default {
    name:"AdminsTableBar",
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