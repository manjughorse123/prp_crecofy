<template>
  <div class="p-grid p-nogutter">
    <div class="popupContainer">
      <div class="logo p-mb-5">
        <img src="@/assets/images/logo.svg" />
      </div>
      <div class="popupContent">
        <div class="title">Reset Your Passord</div>
        <div class="subTitle p-mt-4">Please set the new password for your account</div>
        <div class="p-grid p-nogutter p-mt-5 inputContainer">
          <div class="inputTitle p-mb-2">New Password</div>
          <Password
            v-model="value3"
            toggleMask
            class="p-col-12"
            placeholder="Enter new password"
          ></Password>
        </div>
        <div class="p-grid p-nogutter p-mt-3 inputContainer">
          <div class="inputTitle p-mb-2">Confirm Password</div>
          <Password
            v-model="value3"
            toggleMask
            class="p-col-12"
            placeholder="Confirm new password"
          ></Password>
        </div>
        <div class="p-grid p-nogutter p-mt-4 buttonContainer">
          <Button label="Set new Password" class="p-mr-4 popupBtnLeft" />
          <Button label="Sign in" class="p-button-text popupBtnRight" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SignIn',
  // methods: {
  //   redirect(): string {
  //     return this.$router.push(this.$route.query.redirect || '/landing')
  //   },
  // },
}
</script>
<style scoped>
.title {
  font-size: 24px;
}
</style>
