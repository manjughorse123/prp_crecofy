<template>
  <header class="main-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="header-inner">
            <!-- <a href="#" class="back-page"><img src="../../image/back-page.png" alt="" /></a> -->
            <div class="backpage-name">
              <HeaderDetail></HeaderDetail>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import HeaderDetail from './HeaderDetail.vue'
export default defineComponent({
  name: 'Header',
  components: {HeaderDetail},
})
</script>
<style>
</style>