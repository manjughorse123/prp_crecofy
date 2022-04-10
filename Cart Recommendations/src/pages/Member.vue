<template>
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
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import ProfileDetails from '@/components/CustomComponents/Member/ProfileDetails.vue'
import MostLikelyToBuy from '@/components/CustomComponents/Member/MostLikelyToBuy.vue'
import Campaigns from '@/components/CustomComponents/Member/Campaigns.vue'
import Purchases from '@/components/CustomComponents/Member/Purchases.vue'

export default defineComponent({
  name: 'Member',
  components: {ProfileDetails, MostLikelyToBuy, Campaigns, Purchases},
})
</script>