<template>
  <div class="main-contant-box-inner">
    <div class="contant-box">
      <ProfileDetails></ProfileDetails>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import ProfileDetails from '@/components/CustomComponents/Profile/ProfileDetails.vue'

export default defineComponent({
  name: 'Member',
  components: {ProfileDetails},
})
</script>