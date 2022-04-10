<template>
  <div class="container-fluid flex-shrink-0 mb-4">
    <MainMenu/>
    <TopBar/>
    <router-view />
  </div>
</template>

<script>
import TopBar from '@/Menu/TopBar.vue';
import MainMenu from '@/Menu/MainMenu.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    MainMenu
  }
}
</script>

<style>

</style>
