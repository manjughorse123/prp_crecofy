<template>
    <div>
    <div class="vld-parent">
      <loading v-model:active="isLoading" :is-full-page="'true'" />
    </div>
        <TopBar title="Article Recommendations"  :author="{
            home: selectedProducts? initProductNameList():'',
            cart: 'Cart'
        }"/>
        <MainMenu />
        <!-- <Products /> -->
        <!-- <ConProduct /> -->
        <Recommendations />
        <!-- <pagination/> -->
    </div>
</template>

<script>
    // import { reactive } from "vue";
    // import { Modal, Toast } from "bootstrap";
    
    import MainMenu from "../Menu/MainMenu.vue";
    import TopBar from "../Menu/TopBar.vue";
    // import Products from "./components/Products.vue";
    //import ConProduct from "./components/ConProduct.vue";
    import Recommendations from "./components/Recommendations"
// import Pagination from '../components/Pagination.vue';
import "vue-loading-overlay/dist/vue-loading.css";
import Loading from "vue-loading-overlay";
import {mapGetters} from 'vuex'
    export default {
        name: "CartRecommendation",
        components: {
            TopBar,
            // Products,
            MainMenu,
            // ConProduct,
            Recommendations,
                Loading
                // Pagination
            // ConnectedProducts
        },
        data(){
            return{
                isLoading: true,
                productNames:''
            }
        },
        computed: {
            ...mapGetters("product", [
      "selectedProducts","getProdById"])
        },
        created(){
             setTimeout(() => {
         this.isLoading = false;
      }, 2000);
        },
        methods: {
            initProductNameList(){
                 this.productNames=''
                 this.selectedProducts.map(id=>{
                   this.productNames = this.productNames + '  ' + this.getProdById(id).name  
                 })
                 return this.productNames
            }
        },
        
    };
</script>