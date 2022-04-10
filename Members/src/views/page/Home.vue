<template>
  <Header />
  <div class="p-grid p-nogutter">
    <div class="p-col-fixed">
      <Sidebar />
    </div>
    <div class="p-col p-15 router-area">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Sidebar,
  },
}
</script>
