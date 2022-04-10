<template>
  <div class="top-three-box">
    <div class="ttb-inner">
      <div class="ttb-header">
        <h6><img src="@/../public/assets/images/star-icon.png" alt="" />Top 3 articles in Audience</h6>
      </div>
      <div class="most-sold-box">
        <div class="most-sold-title">
          <h3>Most sold</h3>
          <a href="#" class="view-more-btn"
            >View <img src="@/../public/assets/images/right-sky.png" alt=""
          /></a>
        </div>
        <div class="most-sold-bars">
          <div class="most-sold-bars-wrap" v-for="(item,index) in audiences.results" :key="index">
            <div class="msbw-title">
              <div class="msbw-title-top">
                <p>{{item.name}}</p>
                <span>{{0}}%</span>
              </div>
              <div class="msbw-title-bottom">
                <p>{{"-"}}</p>
              </div>
            </div>
            <div class="msbw-bar">
              <span style="width: 99%"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="highest-value-box">
        <div class="most-sold-title">
          <h3>Highest value</h3>
          <a href="#" class="view-more-btn"
            >View <img src="@/../public/assets/images/right-sky.png" alt=""
          /></a>
        </div>
        <div class="highest-values">
          <ul>
            <li v-for="(item,index) in audienceArticle.higestValue" :key="index">
              <p>{{item.name}}</p>
              <span>{{item.ratio}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="highest-value-box">
        <div class="most-sold-title">
          <h3>Trending</h3>
          <a href="#" class="view-more-btn"
            >View <img src="@/../public/assets/images/right-sky.png" alt=""
          /></a>
        </div>
        <div class="highest-values">
          <ul>
            <li v-for="(item, index) in audienceArticle.trending" :key="index">
              <p>{{item.name}}</p>
              <h6><img src="@/../public/assets/images/green-up.png"  v-if="item.title == 'up'" alt="">
                <img src="@/../public/assets/images/red-down.png" v-else-if="item.title == 'down'" alt="">
                <img src="@/../public/assets/images/gray-right.png"  v-else alt="">
              {{item.ratio}}%</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArticlesAudience',
  props: {
    audiences: Array,
  },
  data() {
    return {
      audienceArticle: {
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
        trending: [

          {
            name: 'Skopa plast 450 ml',
            ratio: 32,
            title: 'up',
          },
          {
            name: 'Skopa plast 900 ml',
            ratio: 32,
            title: 'down',
          },
          {
            name: 'Skopa plast 1000 ml',
            ratio: 32,
            title: 'stable',
          },
        ]
      },
    }
  },
  mounted () {
    
  },
  // methods: {
  //   onChange: function () {
  //     this.callback().then(res => {
  //       this.audience = res.results;
  //     });
  //   }
  // }
}
</script>
<style>
</style>
