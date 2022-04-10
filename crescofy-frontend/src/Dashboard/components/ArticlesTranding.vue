<template>
  <div class="top-three-box">
    <div class="ttb-inner">
      <div class="ttb-header">
        <h6><img src="@/../public/assets/images/star-icon.png" alt="" />Top 3 articles Trending</h6>
      </div>
      <div class="most-sold-box">
        <div class="most-sold-title">
          <h3>Most sold</h3>
          <a href="javascript:void(0);" class="view-more-btn"
            >View <img src="@/../public/assets/images/right-sky.png" alt=""
          /></a>
        </div>
        <div class="most-sold-bars">
          <div class="most-sold-bars-wrap" v-for="(item,index) in articles" :key="index">
            <div class="msbw-title">
              <div class="msbw-title-top">
                <p>{{item.name}}</p>
                <span>{{item.sold_items}}</span>
              </div>
              <div class="msbw-title-bottom">
                <p>{{item.gtin}}</p>
              </div>
            </div>
            <div class="msbw-bar">
              <span :style="{ width: (item.sold_items / item.product) + '%' } "></span>
            </div>
          </div>
        </div>
      </div>
      <div class="highest-value-box">
        <div class="most-sold-title">
          <h3>Highest value</h3>
          <a href="javascript:void(0);" class="view-more-btn"
            >View <img src="@/../public/assets/images/right-sky.png" alt=""
          /></a>
        </div>
        <div class="highest-values">
          <ul>
            <li v-for="(item,index) in trandingArticle.higestValue" :key="index">
              <p>{{item.name}}</p>
              <span>{{item.ratio}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="highest-value-box">
        <div class="most-sold-title">
          <h3>Connected</h3>
          <a href="javascript:void(0);" class="view-more-btn"
            >View <img src="@/../public/assets/images/right-sky.png" alt=""
          /></a>
        </div>
        <div class="highest-values connected-values">
          <ul>
            <li v-for="(item,index) in trandingArticle.connected" :key="index">
              <p>{{item.name}}</p>
              <h5 v-if="item.ratio == 'high'" class="high-connected">High</h5>
              <h5 v-else-if="item.ratio == 'medium'" class="medium-connected">Medium</h5>
              <h5 v-else-if="item.ratio == 'low'" class="low-connected">Low</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArticlesTrending',
  props: {
    title: String,
    articles: Array,
  },
  data() {
    return {
      trandingArticle: {
        mostSold: [
          {
            name: 'Engångshadskar för korttidsanvändning',
            ratio: 99,
            title: 'Avfallshantering',
          },
          {
            name: 'Skopa plast 900 ml',
            ratio: 68,
            title: 'Avfallshantering',
          },
          {
            name: 'Basket 26 l color blue',
            ratio: 67,
            title: 'Avfallshantering',
          },
        ],
        higestValue: [

          {
            name: 'Skopa plast 450 ml',
            ratio: 240,
          },
          {
            name: 'Skopa plast 900 ml',
            ratio: 120,
          },
          {
            name: 'Skopa plast 1000 ml',
            ratio: 60,
          },

        ],
        connected: [
          {
            name: 'Skopa plast 450 ml',
            ratio: 'high',
          },
          {
            name: 'Skopa plast 900 ml',
            ratio: 'low',
          },
          {
            name: 'Skopa plast 1000 ml',
            ratio: 'medium',
          },
        ]
      },
      tooltipNote: `Splits selected time range to 2 equal parts. Compare items sold in first period to the second period.`,
      trendType: 'up',
      //apiParams: {order: this.sortParam, limit: this.limit, direction: this.trendType},
    }
  },
  mounted() {
    this.onChange();
  },
  methods: {
    onChange: function () {
      //console.log(this.articles);
      /*let params = {...this.apiParams, ...this.dateRange};
      this.callback({params: params, persist: true}).then(res => {
        this.mostSold = res.results;
      });*/
      //this.mostSold = this.articles
    }
  },
  created() {
  }
}
</script>
<style>
</style>
