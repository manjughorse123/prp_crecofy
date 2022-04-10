<template>
    <div>
        <div class="vld-parent">
            <loading v-model:active="isLoading"
                     :is-full-page="fullPage"/>
        </div>
        <MainMenu/>
        <TopBar
                title="Analytics"
                :author="{ home: 'Home', cart: 'Analytics'}"
        />
        <div id="products">
            <div class="title-details">
                <ProductTabs/>
            </div>
        </div>
    </div>

</template>

<script>
    //import $ from "jquery";
    import MainMenu from "../Menu/MainMenu.vue";
    import TopBar from "../Menu/TopBar.vue";
    import ProductTabs from "./components/ProductTabs";
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: 'Products',
        components: {
            ProductTabs,
            MainMenu,
            TopBar,
            Loading
        },
        data: function () {
            return {
                isLoading: true,
                fullPage: true,
            }
        },
        mounted() {
            this.isLoading = false;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
