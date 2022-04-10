<template>
  <div class="contant-box-main profile-edit-box">
    <div class="profile-details">
      <div class="profile-details-left">
        <div class="pd-image">
          <img src="../../../image/profile-big.png" alt="" />
        </div>
        <div class="pd-text">
          <span>Email</span>
          <h3>{{userDetail.email}}</h3>
          <p>{{userDetail.role}}</p>
        </div>
      </div>
      <button class="logout-btn"><img src="../../../image/long_right.png" alt="" />Log out</button>
    </div>
    <div class="contant-header">
      <h6><img src="../../../image/lock-icon.png" alt="" />Change password</h6>
    </div>
    <div class="contant-details">
      <form class="profile-form">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label class="form-label w-100">Current password</label>
              <div class="password-field">
                <input
                  v-bind:type="[showPassword.indexOf(1) > 0 ? 'text' : 'password']"
                  class="form-control"
                  v-model="password"
                  placeholder="Your current password"
                />
                <div class="control">
                  <button type="button" class="button" @click="toggleShow(1)">
                    <span
                      class="eye-iocon"
                      :class="{
                        'eye-off': showPassword.indexOf(1) > 0,
                        'eye-on': showPassword.indexOf(1) < 0,
                      }"
                    >
                      <img src="../../../image/eyeicon.png" alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="form-label w-100">New password</label>
              <div class="password-field">
                <input
                  v-bind:type="[showPassword.indexOf(2) > 0 ? 'text' : 'password']"
                  class="form-control"
                  v-model="new_password"
                  placeholder="Enter new password"
                />
                <div class="control">
                  <button type="button" class="button" @click="toggleShow(2)">
                    <span
                      class="eye-iocon"
                      :class="{
                        'eye-off': showPassword.indexOf(2) > 0,
                        'eye-on': showPassword.indexOf(2) < 0,
                      }"
                    >
                      <img src="../../../image/eyeicon.png" alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="form-label w-100">Confirm password</label>
              <div class="password-field">
                <input
                  v-bind:type="[showPassword.indexOf(3) > 0 ? 'text' : 'password']"
                  class="form-control"
                  v-model="confirm_password"
                  placeholder="Confirm new password"
                />
                <div class="control">
                  <button type="button" class="button" @click="toggleShow(3)">
                    <span
                      class="eye-iocon"
                      :class="{
                        'eye-off': showPassword.indexOf(3) > 0,
                        'eye-on': showPassword.indexOf(3) < 0,
                      }"
                    >
                      <img src="../../../image/eyeicon.png" alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-btns">
              <button type="button" class="cancle-btn">Cancel</button>
              <button type="submit" class="save-btn">Change</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
export default defineComponent({
  name: 'ProfileDetails',
  data() {
    return {
      showPassword: [0],
      password: null,
      new_password: null,
      confirm_password: null,
      userDetail: {
        'email': 'witre@email.com',
        'role': 'Admin',
      }
    }
  },
  methods: {
    toggleShow(id: any) {
      let i = this.showPassword.indexOf(id)
      if (i > 0) {
        this.showPassword.splice(i, 1)
      } else {
        this.showPassword.push(id)
      }
    },
  },
})
</script>
<style>
</style>