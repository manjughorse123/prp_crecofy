<template>
  <div class="p-grid p-nogutter">
    <div class="popupContainer">
      <div class="logo p-mb-5">
        <img src="@/assets/images/logo.svg" />
      </div>
      <div class="popupContent">
        <div class="title">Sign in</div>
        <div class="p-grid p-nogutter p-mt-5 inputContainer">
          <div class="inputTitle p-mb-2">Name</div>
          <InputText type="text" v-model="value" placeholder="Enter your email" />
        </div>

        <div class="p-grid p-nogutter p-mt-3 inputContainer">
          <div class="inputTitle p-mb-2">Password</div>
          <Password
            v-model="value3"
            toggleMask
            class="p-col-12"
            placeholder="Enter your password"
          ></Password>
        </div>

        <div class="p-field-checkbox p-mt-3">
          <Checkbox name="Remember Me" v-model="rememberMe" :binary="true" />
          <label class="chkboxLabel"> Remember Me</label>
        </div>

        <div class="p-grid p-nogutter p-mt-3 buttonContainer">
          <Button label="Forgot Password" class="p-button-text" />
          <Button label="Sign in" icon="pi pi-arrow-right" iconPos="right" class="submitBtn" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SignIn',
  data(): unknown {
    return {
      rememberMe: true,
    }
  },
}
</script>
<style scoped>
.buttonContainer {
  display: flex;
  flex-direction: row;
}
.p-button-text {
  padding: 0px !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  color: #5e66fa !important;
  height: 44px;
}
.submitBtn {
  margin-left: auto !important;
  height: 44px;
  background: #5e66fa !important;
  border: 1px solid #5e66fa !important;
  font-size: 15px !important;
  padding: 14px !important;
  border-radius: 4px !important;
  font-weight: 500 !important;
}
</style>
