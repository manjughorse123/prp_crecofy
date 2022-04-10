<template>
  <div class="main-articles-sold row">
    <!-- <h1>{{author.list}}</h1> -->

    <div class="col-lg-6 col-md-6 col-6 p-0 pt-2 pb-2">
      <div class="row" v-for="li in author.list" :key="li">
        <p class="con-card-text">
          <span class="dash-icon"></span>{{ getProdById(li).name}}
        </p>
      </div>
      <!-- <p class="con-card-text"><span class="dash-icon"></span>{{li.lsec}}</p>
<p class="con-card-text"><span class="dash-icon"></span>{{li.lthree}}</p> -->
    </div>

    <div class="col-lg-3 col-md-3 align-middle pt-2 pb-2">
      <p class="con-persentage">{{ author.per }}</p>
    </div>
    <div class="col-lg-3 col-md-3 p-3">

       <router-link class="con-btn" :to="{name:'Recommendations' ,params:{corr:this.author.per,list:this.author.list}}">
       <button class="con-btn" @click="recommendationsPage">
        Recommendations
      </button>
       </router-link>
      
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import { SELECTED_PRODUCTS } from "@/Core/store/action-types";
export default {
  name: "ProductCard",
  props: ["author"],
  computed: {
    ...mapGetters("product", ["getProdById"]),
  },
  methods: {
    ...mapActions("product", [SELECTED_PRODUCTS]),
    recommendationsPage() {
      this[SELECTED_PRODUCTS](this.author.list);
      // this.$router.push({
      //   name: "Recommendations",
      //   params:{corr:this.author.per,
      //   list:this.author.list}
      // });
    },
    // productIdToName(list){
    //   var tempList=[]
    //   list.map((data)=>{
    //         tempList.push(this.getProdById(data).name)
    //   })
    //   console.log("list=======>",tempList)
    //   return tempList
    // }
  },
};
</script>