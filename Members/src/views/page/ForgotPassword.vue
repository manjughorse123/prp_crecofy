<template>
  <div class="p-grid p-nogutter">
    <div class="popupContainer">
      <div class="logo p-mb-5">
        <img src="@/assets/images/logo.svg" />
      </div>
      <div class="popupContent">
        <div class="title">Forgot Your Passord</div>
        <div class="subTitle p-mt-4">
          Please enter the email you are registered with, We'll send the password recovery link here
        </div>
        <div class="p-grid p-nogutter p-mt-5 inputContainer">
          <div class="inputTitle p-mb-2">Email</div>
          <InputText type="text" v-model="value" placeholder="Enter your email" />
        </div>
        <div class="p-grid p-nogutter p-mt-4 buttonContainer">
          <Button label="Reset Password" class="p-mr-4 popupBtnLeft" />
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
