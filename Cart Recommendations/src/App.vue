<!-- eslint-disable vue/max-attributes-per-line vue/singleline-html-element-content-newline -->
<template>
  <div class="main-wrapper">
    <SideBar></SideBar>
    <div class="main-contant">
      <Header></Header>
      <div class="main-contant-box">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import Header from './components/CustomComponents/Header.vue'
import SideBar from './components/CustomComponents/SideBar.vue'
import Dashboard from '@/pages/Dashboard.vue'

export default defineComponent({
  name: 'App',
  components: {Header, SideBar, Dashboard},
})
</script>

<style>
</style>