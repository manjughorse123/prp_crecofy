<template>
  <div id="sidebar">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="Logo" />
      </div>
      <div class="d-flex justify-content-between flex-column navigations">
        <ul class="list-unstyled">
          <li><DashboardIcon />Dashboard</li>
          <li class="active"><AnalyticsIcon />Analytics</li>
          <li><CartIcon />Cart</li>
          <li><OfferIcon />Offers</li>
          <li><CampaignIcon />Campaigns</li>
          <li><MembersIcon />Members</li>
          <li><AudienceIcon />Audience</li>
        </ul>
        <ul class="list-unstyled bottom-navigation">
          <li>
            <div class="user">
              <div class="image">
                <img src="../../assets/images/user.png" alt="User" />
              </div>
              <div class="name">userwitre</div>
              <span>Admin</span>
            </div>
          </li>
          <li><AdminIcon />Admins</li>
        </ul>
      </div>
  </div>
</template>

<script>
import DashboardIcon from './icons/dashboard.vue'
import AnalyticsIcon from './icons/analytics.vue'
import CartIcon from './icons/cart.vue'
import OfferIcon from './icons/offers.vue'
import CampaignIcon from './icons/campaigns.vue'
import MembersIcon from './icons/members.vue'
import AudienceIcon from './icons/audience.vue'
import AdminIcon from './icons/admins.vue'


export default {
  name: 'Sidebar',
  components: {
    DashboardIcon,
    AnalyticsIcon,
    CartIcon,
    OfferIcon,
    CampaignIcon,
    MembersIcon,
    AudienceIcon,
    AdminIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>