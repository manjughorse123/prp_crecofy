<template>
<div>
 <div class="vld-parent">
      <loading v-model:active="isLoading" :is-full-page="fullPage" />
    </div>
    <MainMenu />
    <TopBar title="Analytics" :author="{
    home: 'Home',
    cart: 'Analytics'
  }"
   />
    <div class="dashboard-top-section">
        <div class="dts-row">
            <div class="dts-box-outer">
                <div class="dts-box">
                    <span>{{generalMetrics.totalCompaigns}}</span>
                    <h6>Active Campaigns</h6>
                </div>
            </div>
            <div class="dts-box-outer">
                <div class="dts-box">
                    <span>{{generalMetrics.totalMembers}}</span>
                    <h6>Customers</h6>
                </div>
            </div>
            <div class="dts-box-outer">
                <div class="dts-box">
                    <span>{{generalMetrics.totalOffers}}</span>
                    <h6>Active Offers</h6>
                </div>
            </div>
            <div class="dts-box-outer">
                <div class="dts-box">
                    <span>{{generalMetrics.totalProducts}}</span>
                    <h6>Products</h6>
                </div>
            </div>
        </div>
    </div>
    <div class="dashboard-bottom-section">
        <div class="dbs-row">
            <div class="dbs-box-outer">
                <ArticlesCategory></ArticlesCategory>
            </div>
            <div class="dbs-box-outer">
                <ArticlesTranding
                        :dateRange="dateFilterParams"
                        :articles="articles"
                        dataParam="sold_items"
                        sortParam="-sold_items"
                        limit="3">
                </ArticlesTranding>
            </div>
            <div class="dbs-box-outer">
                <ArticlesAudience
                        :audiences="audiences"
                ></ArticlesAudience>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { LIST_ARTICLES,
        TRENDING_ARTICLES,
        LIST_AUDIENCE,
        GET_METRICS } from '@/Core/store/action-types';
    import TopBar from "../Menu/TopBar.vue";
    import MainMenu from "../Menu/MainMenu.vue";
    import ArticlesCategory from "./components/ArticlesCategory";
    import ArticlesTranding from "./components/ArticlesTranding";
    import ArticlesAudience from "./components/ArticlesAudience";
    import {DATE_FORMAT} from "../Core/helpers/utils";
    import Loading from "vue-loading-overlay";
    import "vue-loading-overlay/dist/vue-loading.css";
    export default {
        name: "Home",
        components: {
            TopBar,
            ArticlesCategory,
            ArticlesTranding,
            ArticlesAudience,
            MainMenu,
              Loading,
        },
        data () {
            return {
                 isLoading: true,
                counterBoard: {
                    campaigns: 154,
                    members: 9974,
                    offers: 712,
                    products: 530,
                },
                generalMetrics: {
                      totalOrders: 0,
                        totalCompaigns: 0,
                        totalOffers: 0,
                        totalMembers: 0,
                        totalProducts: 0,
                },
                predefindedDates: {
                    'Yesterday': [window.moment().subtract(1, 'days'), window.moment()],
                    'Last 7 Days': [window.moment().subtract(6, 'days'), window.moment()],
                    'Last 30 Days': [window.moment().subtract(29, 'days'), window.moment()],
                    'This Month': [window.moment().startOf('month'), window.moment().endOf('month')],
                    'This Year': [window.moment().startOf('year'),
                        window.moment().endOf('year')]
                },
                dateFilterParams: {},
                articles: {},
                audiences: {}
            }
        },
        methods: {
            ...mapActions('article', [LIST_ARTICLES, TRENDING_ARTICLES]),
            ...mapActions('metrics', [GET_METRICS]),
            ...mapActions('audience', [LIST_AUDIENCE]),
            onDateChange(start, end) {
                this.dateFilterParams = {
                    date_after: start.format(DATE_FORMAT),
                    date_before: end.format(DATE_FORMAT),
                }
                this.initMetrics();
                this.getArticles();
                this.getAudiences();
            },
            async initMetrics() {
                let params = this.dateFilterParams
                params.is_active = 1
                await this[GET_METRICS](params).then(res => {
                    this.generalMetrics = res;
                });
            },
            async getArticles() {
                let params = this.dateFilterParams;
                params.order ='-sold_items';
                params.limit = 3;
                params.direction = 'up';
                await this[LIST_ARTICLES]({params: params, persist: true}).then(res => {
                    this.articles = res.results;
                });
            },
            async getAudiences() {
                let params = this.dateFilterParams;
                params.limit = 3;
                await this[LIST_AUDIENCE]({params: params, persist: true}).then(res => {
                    this.audiences = res.results;
                });
            }
        },
        created() {
            this.initDateRange = [
                this.predefindedDates['This Month'][0],
                this.predefindedDates['This Month'][1]
            ]
            this.onDateChange(this.initDateRange[0], this.initDateRange[1]);
            // this.$root.$refs.Dashboard = this;
        },
        mounted() {
            setTimeout(() => {
                this.isLoading = false;
            }, 2000)
        }
    };
</script>

