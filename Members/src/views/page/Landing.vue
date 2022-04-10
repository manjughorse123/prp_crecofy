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

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import '@/assets/styles/common.css'
export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
}
</script>
