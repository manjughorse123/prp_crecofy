<template>
  <div class="p-grid header p-nogutter">
    <div class="image-container p-col-fixed">
      <img src="@/assets/images/header/image.png" class="header-icon" />
    </div>
    <div class="content p-col p-text-lef padd-left-right">
      <span class="arrow-container">
        <img src="@/assets/images/header/left-arrow-header.svg" />
      </span>
      <div class="member padd-left-right">
        <h2>Members</h2>
        <!-- <div>
          <Breadcrumb :home="home" :model="items" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Header',
  // data() {
  //   return {
  //     home: {
  //       icon: ' pi pi-home ',
  //       to: '/',
  //     },
  //     items: [
  //       {
  //         label: ' Computer ',
  //       },
  //       {
  //         label: ' Notebook ',
  //       },
  //       {
  //         label: ' Accessories ',
  //       },
  //       {
  //         label: ' Backpacks ',
  //       },
  //       {
  //         label: ' Item ',
  //       },
  //     ],
  //   }
  // },
}
</script>

<style scoped>
.header {
  height: 72px;
}
.image-container {
  width: 88px;
  margin-right: 1px;
  height: inherit;
  background: #ffffff;
}
.header-icon {
  position: absolute;
  left: 22px;
  top: 14px;
}
.content {
  background: #ffffff;
  display: flex;
  align-items: center;
}
.member h2 {
  color: #3f3f40;
  font-family: Lexend;
}
.padd-left-right {
  padding: 0px 20px !important;
}
</style>
