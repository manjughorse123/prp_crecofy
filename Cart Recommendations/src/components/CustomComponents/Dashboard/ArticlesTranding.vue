<template>
  <div class="top-three-box">
    <div class="ttb-inner">
      <div class="ttb-header">
        <h6><img src="../../../image/star-icon.png" alt="" />Top 3 articles Tranding</h6>
      </div>
      <div class="most-sold-box">
        <div class="most-sold-title">
          <h3>Most sold</h3>
          <a href="#" class="view-more-btn"
            >View <img src="../../../image/right-sky.png" alt=""
          /></a>
        </div>
        <div class="most-sold-bars">
          <div class="most-sold-bars-wrap" v-for="(item,index) in trandingArticle.mostSold">
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
            >View <img src="../../../image/right-sky.png" alt=""
          /></a>
        </div>
        <div class="highest-values">
          <ul>
            <li v-for="(item,index) in trandingArticle.higestValue">
              <p>{{item.name}}</p>
              <span>{{item.ratio}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="highest-value-box">
        <div class="most-sold-title">
          <h3>Connected</h3>
          <a href="#" class="view-more-btn"
            >View <img src="../../../image/right-sky.png" alt=""
          /></a>
        </div>
        <div class="highest-values connected-values">
          <ul>
            <li v-for="(item,index) in trandingArticle.connected">
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
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
export default defineComponent({
  name: 'ArticlesCategory',
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
      }
    }
  },
})
</script>
<style>
</style>