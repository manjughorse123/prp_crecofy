<template>
  <div>
    <div id="recommendations" class="row p-0 ps-5 pt-2">
      <div class="col-lg-6 col-md-6">
        <p class="con-heading">Connected Products</p>
      </div>
      <div class="col-lg-3 col-md-3 align-middle">
        <p class="con-heading">Product connection</p>
      </div>
      <div class="col-lg-3 col-md-3"></div>
    </div>

    <!-- <section v-for="user in users.length" :key="user.f1"> -->
    <div
      id="recommendations"
      class="row ps-5 p-0"
      v-for="products in connectedProducts.results"
      :key="products.product_ids"
    >
      <ProductCard
        :author="{
          list:products.product_ids,
          per: Math.round(products.correlation) + '%',
        }"
      />
      <!-- <h1>{{user.persentage}}</h1> -->
      <!-- </section> -->
    </div>

    <div id="recommendations" class="row ps-5 p-0">
      <div class="main-articles-sold row">
          <Pagination
            :page="page"
            :totalPages="totalPages"
            :name="'connected Productes'"
            :count="connectedProducts.count?connectedProducts.count:0"
            :incrementpage="incrementpage"
            :decrementpage="decrementpage"
            :setpage="setpage"
            :perpage="5"
          />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
// import Pagination from "./Pagination.vue";
import Pagination from "../../Core/Pagination";
import { mapActions , mapGetters} from "vuex";
import { CONNECTED_PRODUCTS,LIST_PRODUCTS } from "@/Core/store/action-types";

export default {
  name: "ConProduct",
  components: {
    ProductCard,
    Pagination,
  },

  data() {
    return {
      connectedProducts: [],
      page: 1,
      totalPages: [],
    };
  },
  computed:{
      ...mapGetters("product",['productsList'])
  },
  methods: {
    ...mapActions("product", [CONNECTED_PRODUCTS,LIST_PRODUCTS]),
    initConnectedProduct() {
      let options = { page:this.page};
      this[CONNECTED_PRODUCTS](options).then((res) =>{
       this.connectedProducts =res
      this.totalPages = Array(Math.ceil(res.count / 5))
          .fill(0)
          .map((e, i) => i + 1)
      })
    }
    ,
    initProducts(){
     this[LIST_PRODUCTS]({persist: true,params:null}) 
    },
    incrementpage() {
      this.page = this.page + 1;
    },
    decrementpage() {
      this.page = this.page - 1;
    },
    setpage(page) {
      this.page = page;
    }
  },
  created() {
    this.initConnectedProduct();
    this.initProducts();
  },
};
</script>
