<template>
<div>
    <Sidebar />
    <Header title="Automated Recommendations"  :author="{
    home: 'Home',
    cart: 'Cart'
  }"/>
    <!-- <Products /> -->
    <ConProduct />
    <!-- <pagination/> -->
</div>
</template>

<script>
    import { reactive } from "vue";
    import { Modal, Toast } from "bootstrap";
    import Header from "../components/layout/Header.vue";
    import Sidebar from "../components/layout/Sidebar.vue";
    import Products from "../components/Products.vue";
    import ConProduct from "../components/ConProduct.vue";
// import Pagination from '../components/Pagination.vue';

    export default {
        name: "Cart",
        components: {
            Header,
            Products,
            Sidebar,
            ConProduct,
                // Pagination
            // ConnectedProducts
        },
    };
</script>