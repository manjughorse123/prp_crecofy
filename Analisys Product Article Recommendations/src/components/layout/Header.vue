<template>
  <div id="header">
    <button class="toggle-btn" @click="toggleFun()"></button>
    <div class="title-details">
      <h2>Analytics</h2>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Admin</a></li>
          <li class="breadcrumb-item active" aria-current="page">Manage</li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleFun: function() {
      document.getElementById('app').classList.toggle("collapsed");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>