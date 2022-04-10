<template>
  <div class="container">
    <MembersCard />
    <MembersTable />
  </div>
</template>
<script lang="ts">
import MembersCard from './Members/MembersCard.vue'
import MembersTable from './Members/MembersTable.vue'
export default {
  name: 'Member',
  components: {
    MembersCard,
    MembersTable,
  },
}
</script>
<style scoped>
.container {
  background: #e5e5e5;
  width: 100%;
  height: auto;
}
</style>
