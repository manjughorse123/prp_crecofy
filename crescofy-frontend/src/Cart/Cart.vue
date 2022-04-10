<template>
  <div>
    <div class="vld-parent">
      <loading v-model:active="isLoading" :is-full-page="fullPage" />
    </div>
    <TopBar />
    <MainMenu
      title="Automated Recommendations"
      :author="{
        home: 'Home',
        cart: 'Cart',
      }"
    />
    <!-- <Products /> -->
    <ConProduct />
    <!-- <Recommendations /> -->
    <!-- <pagination/> -->
  </div>
</template>

<script>
// import { reactive } from "vue";
// import { Modal, Toast } from "bootstrap";

import MainMenu from "../Menu/MainMenu.vue";
import TopBar from "../Menu/TopBar.vue";
//import Products from "./components/Products.vue";
import ConProduct from "./components/ConProduct.vue";
// import Recommendations from "./components/Recommendations"
// import Pagination from '../components/Pagination.vue';
import "vue-loading-overlay/dist/vue-loading.css";
import Loading from "vue-loading-overlay";
export default {
  name: "Cart",
  components: {
    TopBar,
    // Products,
    MainMenu,
    ConProduct,
    Loading,
    // Recommendations
    // Pagination
    // ConnectedProducts
  },
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>