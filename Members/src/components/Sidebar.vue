<template>
  <div class="container">
    <div class="sidebar"></div>
    <router-link to="/app/dashboard" v-slot="{ isActive }">
      <div class="p-p-2 border-top">
        <div>
          <img v-if="isActive" src="@/assets/images/sidebar/dashboard-selected.svg" />
          <img v-else src="@/assets/images/sidebar/dashboard.svg" />
        </div>
        <span class="menu-item-text">Dashboard</span>
      </div>
    </router-link>
    <router-link to="/app/analytics" v-slot="{ isActive }">
      <div class="p-p-2">
        <div>
          <img v-if="isActive" src="@/assets/images/sidebar/analytics-selected.svg" />
          <img v-else src="@/assets/images/sidebar/analytics.svg" />
        </div>
        <span class="menu-item-text">Analytics</span>
      </div>
    </router-link>

    <router-link to="/app/cart" v-slot="{ isActive }">
      <div class="p-p-2">
        <div>
          <img v-if="isActive" src="@/assets/images/sidebar/cart-selected.svg" />
          <img v-else src="@/assets/images/sidebar/cart.svg" />
        </div>
        <span class="menu-item-text">Cart</span>
      </div>
    </router-link>

    <router-link to="/app/offers" v-slot="{ isActive }">
      <div class="p-p-2">
        <div>
          <img v-if="isActive" src="@/assets/images/sidebar/offers-selected.svg" />
          <img v-else src="@/assets/images/sidebar/offers.svg" />
        </div>
        <span class="menu-item-text">Offers</span>
      </div>
    </router-link>

    <router-link to="/app/compaings" v-slot="{ isActive }">
      <div class="p-p-2">
        <div>
          <img v-if="isActive" src="@/assets/images/sidebar/compaing-selected.svg" />
          <img v-else src="@/assets/images/sidebar/compaing.svg" />
        </div>
        <span class="menu-item-text">Compaings</span>
      </div>
    </router-link>

    <router-link to="/app/members" v-slot="{ isActive }">
      <div class="p-p-2">
        <div>
          <img v-if="isActive" src="@/assets/images/sidebar/members-selected.svg" />
          <img v-else src="@/assets/images/sidebar/members.svg" />
        </div>
        <span class="menu-item-text">Members</span>
      </div>
    </router-link>

    <router-link to="/app/audience" v-slot="{ isActive }">
      <div class="p-p-2">
        <div>
          <img v-if="isActive" src="@/assets/images/sidebar/audience-selected.svg" />
          <img v-else src="@/assets/images/sidebar/audience.svg" />
        </div>
        <span class="menu-item-text">Audience</span>
      </div>
    </router-link>

    <div class="user-profile-bottom">
      <div class="p-p-2">
        <div><img class="img-cricle" src="@/assets/images/sidebar/user.svg" /></div>
        <div class="menu-item-text">User Write</div>
        <div class="menu-item-text">Admin</div>
      </div>
      <router-link to="/app/admin" v-slot="{ isActive }">
        <div class="p-p-2">
          <div>
            <img v-if="isActive" src="@/assets/images/sidebar/admin-selected.svg" />
            <img v-else src="@/assets/images/sidebar/admin.svg" />
          </div>
          <span class="menu-item-text">Admins</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Sidebar',
}
</script>
<style scoped>
.sidebar {
  height: 0px;
  background-image: url('@/assets/images/sidebar/admin-selected.svg'),
    url('@/assets/images/sidebar/dashboard-selected.svg'),
    url('@/assets/images/sidebar/analytics-selected.svg'),
    url('@/assets/images/sidebar/cart-selected.svg'),
    url('@/assets/images/sidebar/offers-selected.svg'),
    url('@/assets/images/sidebar/compaing-selected.svg'),
    url('@/assets/images/sidebar/members-selected.svg'),
    url('@/assets/images/sidebar/audience-selected.svg'),
    url('@/assets/images/sidebar/members-selected.svg');
}
.container {
  width: 88px;
  height: calc(100vh - 72px);
  color: #49494a;
  text-align: center;
  background-color: #ffffff;
  position: relative;
}
.container a {
  text-decoration: none;
  color: #49494a;
}
.container .router-link-active {
  color: #5e66fa;
}
.container .menu-item-text {
  text-align: center;
  font-family: Lexend;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
}
.container .user-profile-bottom .menu-item-text {
  color: #3f3f40;
}
.user-profile-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e8e9eb;
}
.img-cricle {
  border-radius: 50%;
}
.border-top {
  border-top: 1px solid #e8e9eb;
}
</style>
