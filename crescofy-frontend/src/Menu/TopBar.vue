<template>
    <!-- <div id="header" v-if="userProfile.email"> -->
    <div id="header">
        <div v-if="(currentUrl === '/') || (currentUrl === '/dashboard')" class="dashboard-header">
            <h2>
                Recommendations Dashboard <span>Home</span>
            </h2>
            <div class="input-group input-daterange ml-auto">
                <label>Date range</label><input id="icon-date" type="text" ref="dashboardDate" class="form-control daterange" readonly name="daterange" :value="selectedDateRange"/>
            </div>
        </div>
        <div v-else-if="(currentUrl === '/Campaigns')" class="dashboard-header">
            <h2>
                Campaigns <span><router-link to="/dashboard">Home</router-link> > Campaigns</span>
            </h2>
        </div>
        <div v-else-if="(currentUrl === '/Offers')" class="dashboard-header">
            <h2>
                Offers <span><router-link to="/dashboard">Home</router-link> > Offers</span>
            </h2>
        </div>
         <div v-else-if="(currentUrl === '/Cart/Recommendations')" class="dashboard-header">
            <h2>
               Article Recommendations <span><router-link to="/dashboard">Home</router-link> > <router-link to="/Cart">Cart</router-link> >{{author.home}}</span>
            </h2>
        </div>
         <div v-else-if="(currentUrl === '/Cart')" class="dashboard-header">
            <h2>
               Automated Recommendations <span><router-link to="/dashboard">Home</router-link> > Cart</span>
            </h2>
        </div>
        <div v-else-if="(currentUrl === '/Members')" class="dashboard-header">
            <h2>
                Members <span><router-link to="/dashboard">Home</router-link> > Members</span>
            </h2>
        </div>
        <div v-else-if="(currentUrl === '/analytics')" class="dashboard-header">
            <h2>
                Analytics <span><router-link to="/dashboard">Home</router-link> > Analytics</span>
            </h2>
        </div>
        <div v-else-if="(currentUrl.includes('/Members/') )" class="dashboard-header">
            <h2>
                {{author.home}} <span><router-link to="/dashboard">Home</router-link> > <router-link to="/Members">Members</router-link></span>
            </h2>
        </div>
        <div v-else>
            <button class="toggle-btn" @click="toggleFun()"></button>
            <div class="title-details">
                <h2>{{title}}</h2>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#"></a></li>
                        <!-- <li class="breadcrumb-item"><a href="#">{{auth.dashboard}}</a></li> -->

                        <!-- <li class="breadcrumb-item active" aria-current="page">{{author.cart}}</li> -->
                        <li class="breadcrumb-item active" aria-current="page"></li>
                        <!-- <li class="breadcrumb-item active" aria-current="page">Library</li> -->
                    </ol>
                </nav>
            </div>
        </div>

        <!--<div v-if="currentUrl == '/Cart'" id="product-tabs">
            <div class="toolbar-holder p-2">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb p-2">
                        <li class="breadcrumb-item">Sort by</li>
                    </ol>
                </nav>
                <div class=" select-holder ">
                    <select class="nav-dropdown">
                        <option>Most Common Combinations</option>
                        <option>Most Common Combinations</option>
                        <option>Most Common Combinations</option>
                        <option>Most Common Combinations</option>
                    </select>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import {LOGOUT} from '@/Core/store/action-types';
    import {UserRoleMixin} from '@/Core/mixins/UserRoleMixin';
    import {DATE_FORMAT} from "../Core/helpers/utils";

    export default {
        name: 'TopBar',
        computed: {
            ...mapGetters('user', ['userProfile'])
        },
        mixins: [UserRoleMixin],
        methods: {
            ...mapActions('user', [LOGOUT]),
            signOut() {
                this[LOGOUT](this.$ability);
                this.$router.push('/login');
            }
        },
        props:{
          author:{
              required: true,
              type: Object
          }
        },
        data: function () {
          return {
              currentUrl: '',
              predefindedDashboardDates: {
                  'Yesterday': [window.moment().subtract(1, 'days'), window.moment()],
                  'Last 7 Days': [window.moment().subtract(6, 'days'), window.moment()],
                  'Last 30 Days': [window.moment().subtract(29, 'days'), window.moment()],
                  'This Month': [window.moment().startOf('month'), window.moment().endOf('month')],
                  'This Year': [window.moment().startOf('year'),
                      window.moment().endOf('year')]
              },
              selectedDateRange: ''
          }
        },
        created () {
            this.currentUrl = this.$route.path
        },
        mounted () {
            this.datepicker = window.$(this.$refs.dashboardDate);
            let _this = this;
            this.datepicker.daterangepicker({
                autoUpdateInput: false,
                ranges: _this.predefindedDashboardDates,
                locale: {
                    format: 'DD/MM/YYYY'
                },
            });
            //  this.$root.$refs.Dashboard.onDateChange);
            this.selectedDateRange = this.predefindedDashboardDates['This Month'][0].format(DATE_FORMAT) + " - " + this.predefindedDashboardDates['This Month'][1].format(DATE_FORMAT)
        }

    }
</script>

<style>
    .head-logo {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .dashboard-header {
        width: 100%;
        display: flex;
    }
    .dashboard-header label {
        margin-right: 8px;
        color: gray;
    }
    .dashboard-header .input-group {
        width: 25%;
        justify-content: center;
        align-items: center;
    }
    .dashboard-header h2 {
        font-size: 18px;
        line-height: 24px;
        font-weight: 500px;
    }
    .dashboard-header h2 span {
        display: block;
        font-size: 14px;
        margin-top: 5px;
        color: gray;
        font-weight: 300;
    }
</style>
