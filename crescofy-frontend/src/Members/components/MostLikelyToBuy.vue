<template>
  <div class="contant-box-main">
    <div class="contant-header">
      <h6>
        <img src="./../../../public/assets/images/star-icon.png" alt="" />Most
        likely to buy
      </h6>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            :class="article ? 'nav-link active' : 'nav-link'"
            id="articles-tab"
            data-bs-toggle="tab"
            data-bs-target="#articles"
            type="button"
            role="tab"
            aria-controls="articles"
            aria-selected="false"
            @click="article = true"
          >
            Articles
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            :class="!article ? 'nav-link active' : 'nav-link'"
            id="cart-tab"
            data-bs-toggle="tab"
            data-bs-target="#cart"
            type="button"
            role="tab"
            aria-controls="cart"
            aria-selected="true"
            @click="article = false"
          >
            Cart composition
          </button>
        </li>
      </ul>
    </div>
    <div class="tab-content" id="myTabContent">
      <div
        :class="article ? 'tab-pane fade show active' : 'tab-pane fade'"
        id="articles"
        role="tabpanel"
        aria-labelledby="articles-tab"
      >
        <div class="contant-details">
          <div class="overflow-auto no-pagination">
            <table class="table table-sm" id="my-table">
              <thead>
                <tr>
                  <th scope="col" v-for="f in fields" v-bind:key="f.id">
                    {{ f.split("_").join(" ") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" v-bind:key="item.id">
                  <td class="font-light-text">{{ item.article__id }}</td>
                  <td>{{ item.article__name }}</td>
                  <td class="font-light-text">
                    {{ item.article__product__category__name }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        :class="!article ? 'tab-pane fade show active' : 'tab-pane fade'"
        id="cart"
        role="tabpanel"
        aria-labelledby="cart-tab"
      >
        <div class="pie-table">
          <DoughnutChart
            :chartData="testData"
            :options="options"
            class="canvas-outer"
          />
          <div>
            <ul class="ul-table">
              <li
                v-for="(data, index) in testData.datasets[0]['data']"
                v-bind:key="data"
              >
                <div class="detail-title">
                  <span
                    :style="{
                      'background-color':
                        testData.datasets[0]['backgroundColor'][index],
                    }"
                  ></span>
                  <p>{{ testData.labels[index] }}</p>
                </div>
                <span class="percentage-data"
                  >{{ Math.round((data * 100) / totalCount) }} %</span
                >
              </li>
            </ul>
          </div>
        </div>
        <table class="table table-sm likey_buy_table">
          <thead>
            <tr>
              <th></th>
              <th class="id-category" scope="col">Category</th>
              <th scope="col">Total Products</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(data, index) in testData.datasets[0]['data']"
              v-bind:key="data"
            >
              <td class="category_number">{{ testData.numbers[index] }}</td>
              <td class="category_label">{{ testData.labels[index] }}</td>
              <td class="category_data font-light-text">{{ data }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { mapActions } from "vuex";
import {
  MEMBER_ARTICLES,
  CATEGORIESVISECOUNT,
} from "@/Core/store/action-types";
Chart.register(...registerables);

export default {
  name: "MostLikelyToBuy",
  components: { DoughnutChart },
  data() {
    return {
      article: true,
      params: {
        persist: true,
      },
      fields: ["No.", "Article Name", "Сategory"],
      chartData: [],
      totalCount: 0,
      items: [],
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      testData: {
        numbers: [],
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
              "#C2CAFF",
              "#9AA2FF",
              "#868EFF",
              "#727AFF",
              "#5E66FA",
            ],
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions("article", [MEMBER_ARTICLES]),
    ...mapActions("product", [CATEGORIESVISECOUNT]),
    InItArticleDetails() {
      if (this?.$route?.params?.memberId && this.$route.params.memberId != "") {
        const memberId = this.$route.params.memberId;
        this[MEMBER_ARTICLES](memberId)
          .then((resp) => {
            this.items = resp;
          })
          .catch((err) => {
            console.log("error=>", err);
          });
      }
    },
    InItCategoriesViseCount() {
      if (this?.$route?.params?.memberId && this.$route.params.memberId != "") {
        const memberId = this.$route.params.memberId;
        this[CATEGORIESVISECOUNT]({ id: memberId })
          .then((res) => {
            1;
            this.testData.numbers = Array(Math.ceil(res.length))
              .fill(0)
              .map((e, i) => i + 1);
            res.map((item) => {
              this.testData.labels.push(item.category__name);
              this.chartData.push(item.total);
              this.totalCount += item.total;
            });
            this.testData.datasets[0].data = this.chartData;
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
  },

  mounted() {
    this.InItCategoriesViseCount();
    this.InItArticleDetails();
    // setTimeout(() => {
    //   this.InItCategoriesViseCount();
    //   this.InItArticleDetails();
    // }, 4000);
  },
};
</script>
<style>
</style>