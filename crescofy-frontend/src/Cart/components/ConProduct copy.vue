<template>
<div>
  <div  id="recommendations" class="row p-0 ps-5 pt-2" >
      <div class="col-lg-6 col-md-6"><p class="con-heading">Connected Products</p></div>
      <div class="col-lg-3 col-md-3 align-middle" ><p class="con-heading">Connected Products</p></div>
      <div class="col-lg-3 col-md-3"></div>
  </div>
    
    <!-- <section v-for="user in users.length" :key="user.f1"> -->
     <div  id="recommendations" class="row ps-5 p-0"  v-for="user in users" :key="user.li" >  
    <ProductCard :author="{
        list: user.li,
        per: user.percentage
    }" />
   <!-- <h1>{{user.persentage}}</h1> -->
    <!-- </section> -->
   </div>

  <div  id="recommendations" class="row ps-5 p-0" >
    
    <div class="main-articles-sold row">
    <pagination/>
    </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import Pagination from './Pagination.vue';
 

    export default {
      
        name: "ConProduct",
        components: {
            ProductCard,
                Pagination,
        },
        
        data(){
          return {
            users:[
              {
                li:["FörpackningsmaterialPacktejp","Häftapparater & LimpKartonger","Transportlådor"],
               percentage:"54%"
               
               },
              {
                li:["FörpackningsmaterialPacktejp","Häftapparater & LimpKartonger","Transportlådor"],
               percentage:"54%"
               
               },
              {
                li:["FörpackningsmaterialPacktejp","Häftapparater & LimpKartonger","Transportlådor"],
               percentage:"54%"
               
               },
              {
                li:["FörpackningsmaterialPacktejp","Häftapparater & LimpKartonger","Transportlådor"],
               percentage:"54%"
               
               },
             

             
            ]
          }
        }
        
     
    };
</script>
