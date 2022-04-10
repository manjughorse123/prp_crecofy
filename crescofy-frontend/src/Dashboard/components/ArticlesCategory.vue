<template>
  <div class="top-three-box">
    <div class="ttb-inner">
      <div class="ttb-header">
        <h6><img src="@/../public/assets/images/star-icon.png" alt="" />Top 3 articles in Category</h6>
      </div>
      <div class="most-sold-box">
        <div class="most-sold-title">
          <h3>Most sold</h3>
          <a href="#" class="view-more-btn"
            >View <img src="@/../public/assets/images/right-sky.png" alt=""
          /></a>
        </div>
        <div class="most-sold-bars">
          <div class="most-sold-bars-wrap" v-for="(item,index) in topArticle.mostSold" :key="index">
            <div class="msbw-title">
              <div class="msbw-title-top">
                <p>{{item.name}}</p>
                <span>{{item.ratio}}%</span>
              </div>
              <div class="msbw-title-bottom">
                <p>{{item.title}}</p>
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
            <li v-for="(item,index) in topArticle.higestValue" :key="index">
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
            <li v-for="(item,index) in topArticle.trending" :key="index">
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
  name: 'ArticlesCategory',
  data() {
    return {
      topArticle: {
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
      }
    }
  },
}
</script>
<style>
</style>
