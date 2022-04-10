<template>
    <Sidebar />
    <Header />
    <Products />
</template>

<script>
    import { reactive } from "vue";
    import { Modal, Toast } from "bootstrap";
    import Header from "../components/layout/Header.vue";
    import Sidebar from "../components/layout/Sidebar.vue";
    import Products from "../components/Products.vue";

    export default {
        name: "Home",
        components: {
            Header,
            Products,
            Sidebar
        },
    };
</script>