<template>
  <div class="home">
      <b-container fluid class="p-0">
        <b-row>
          <b-col cols="12">
              <div class="margin-left-custom">
                <Sidebar />
                <Header />
                <ProductTabs />
              </div>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./layout/Header"
import Sidebar from "./layout/Sidebar"
import ProductTabs from "./ProductTabs"

export default {
  name: 'Home',
  components: {
    Header,
    Sidebar,
    ProductTabs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
