<template>
<div>
     <TopBar
        title="Members"
        :author="{
          home: memberDetails?memberDetails.name:'',  
          cart: 'Members',
        }"
      />
     <div class="vld-parent">
            <loading v-model:active ="isLoading"
                     :is-full-page="fullPage"/>
        </div>
    <div class="main-contant-box">
    <div class="main-contant-box-inner">
        <div class="contant-box">
        <ProfileDetails></ProfileDetails>
        </div>
        <div class="contant-box">
        <MostLikelyToBuy></MostLikelyToBuy>
        </div>
        <div class="contant-box">
        <Campaigns></Campaigns>
        </div>
        <div class="contant-box">
        <Purchases></Purchases>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import ProfileDetails from './components/ProfileDetails.vue'
import MostLikelyToBuy from './components/MostLikelyToBuy.vue'
import Campaigns from './components/Campaigns.vue'
import Purchases from './components/Purchases.vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import TopBar from "../Menu/TopBar.vue";
import { mapGetters } from "vuex";
export default {
  name: 'MemberDetails',
  components: {ProfileDetails, Campaigns, Purchases, MostLikelyToBuy, Loading,TopBar},
  data() {
    return {
      isLoading:true,
      name:''
    }
  },
  methods: {
    getName(value){
      return value
    }
  },
   computed: {
    ...mapGetters("member", ["memberDetails"]),
  },
  mounted() {
    setTimeout(() => {
                this.isLoading = false;
            }, 1000);
  },
}
</script>

