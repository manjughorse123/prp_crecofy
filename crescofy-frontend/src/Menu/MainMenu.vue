<template>
    <!-- leftbar-tab-menu -->
    <div id="sidebar">
        <div class="logo">
            <img src="@/../public/assets/images/logo1.png" alt="Logo"/>
        </div>
        <div class="d-flex justify-content-between flex-column navigations" v-if="userProfile.email">

            <ul class="list-unstyled">
                <li class="icon-hov">
                    <router-link to="/dashboard" :active-class="(currentUrl === '/') || (currentUrl === '/dashboard') ? 'active' : ''">
                        <DashboardIcon/>
                         Dashboard
                    </router-link>
                </li>
                <li class="icon-hov">
                    <router-link to="/analytics">
                        <AnalyticsIcon/>
                        Analytics
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Cart" :active-class="this.currentUrl.includes('/Cart') ? 'active' : ''">
                        <CartIcon/>
                         Cart
                    </router-link>
                </li>
                <li class="icon-hov">
                    <router-link to="Offers" :active-class="(currentUrl === '/Offers') ? 'active' : ''">
                        <OfferIcon/>
                         Offers
                    </router-link>
                </li>
                <li class="icon-hov">
                    <router-link to="/Campaigns" :active-class="(currentUrl === '/Campaigns') ? 'active' : ''">
                        <CampaignIcon/>
                        Campaigns
                    </router-link>
                </li>
                <li class="icon-hov">
                    <router-link to="/Members" :active-class=" 'active'">
                        <MembersIcon/>
                        Members
                    </router-link>
                </li>
                <li class="icon-hov">
                    <router-link to="/dashboard">
                        <AudienceIcon/>
                        Audience
                    </router-link>
                </li>
            </ul>
            <ul class="list-unstyled bottom-navigation">
                <li>
                    <div class="user">
                        <div class="image">
                            <img src="@/../public/assets/images/user.png" alt="User"/>
                        </div>
                        <div class="name">userwitre</div>
                        <span>Admin</span>
                    </div>
                </li>

                <li class="icon-hov">
                    <router-link to="Admins">
                        <AdminIcon/>
                        Admins
                    </router-link>
                </li>

            </ul>
        </div>
    </div>
    <!-- end leftbar-tab-menu-->
</template>

<script>
    import {mapGetters} from 'vuex';
    import DashboardIcon from '../icons/dashboard.vue'
    import AnalyticsIcon from '../icons/analytics.vue'
    import CartIcon from '../icons/cart.vue'
    import OfferIcon from '../icons/offers.vue'
    import CampaignIcon from '../icons/campaigns.vue'
    import MembersIcon from '../icons/members.vue'
    import AudienceIcon from '../icons/audience.vue'
    import AdminIcon from '../icons/admins.vue'

    export default {
        name: 'MainMenu',
        components: {
            DashboardIcon,
            AnalyticsIcon,
            CartIcon,
            OfferIcon,
            CampaignIcon,
            MembersIcon,
            AudienceIcon,
            AdminIcon
        },
        computed: {
            ...mapGetters('user', {userProfile: 'userProfile'})
        },
        created () {
            this.currentUrl = this.$route.path
            console.log(this.currentUrl ,'/Cart/Recommendations',this.currentUrl.includes('/Cart'))
        },
        data: function () {
            return {
                currentUrl: ''
            }
        }
    }
</script>

<style>
    .nav-left-bar {
        padding-top: 25px;
    }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navigations {
        overflow: scroll;
    }
    .list-unstyled li {
        padding: 0 0 !important;
    }
    .list-unstyled li a {
        color: #303e67;
        padding: 10px 0;
    }
    .list-unstyled li .active{
        color: #5F66FA !important;
        background: #f6f6f7 !important;
        width: 100%;
    }
    .list-unstyled li svg:hover {
        stroke: #5F66FA !important;
        fill: #5F66FA !important;
    }
    .list-unstyled li .active svg {
        stroke: #5F66FA !important;
        fill: #5F66FA !important;
    }
</style>
