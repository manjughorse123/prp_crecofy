<template>
  <div class="dashboard-top-section">
    <div class="dts-row">
      <div class="dts-box-outer">
        <div class="dts-box">
          <span>{{counterBoard.campaigns}}</span>
          <h6>Campaigns</h6>
        </div>
      </div>
      <div class="dts-box-outer">
        <div class="dts-box">
          <span>{{counterBoard.members}}</span>
          <h6>Members</h6>
        </div>
      </div>
      <div class="dts-box-outer">
        <div class="dts-box">
          <span>{{counterBoard.offers}}</span>
          <h6>Offers</h6>
        </div>
      </div>
      <div class="dts-box-outer">
        <div class="dts-box">
          <span>{{counterBoard.products}}</span>
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
        <ArticlesTranding></ArticlesTranding>
      </div>
      <div class="dbs-box-outer">
        <ArticlesAudience></ArticlesAudience>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import ArticlesCategory from '@/components/CustomComponents/Dashboard/ArticlesCategory.vue'
import ArticlesTranding from '@/components/CustomComponents/Dashboard/ArticlesTranding.vue'
import ArticlesAudience from '@/components/CustomComponents/Dashboard/ArticlesAudience.vue'
export default defineComponent({
  name: 'Dashboard',
  components: {ArticlesCategory, ArticlesTranding, ArticlesAudience},
  data() {
    return {
      counterBoard: {
        campaigns: 154,
        members: 9974,
        offers: 712,
        products: 530,
      }
    }
  },
})
</script>