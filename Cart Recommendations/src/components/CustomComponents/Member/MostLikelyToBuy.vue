<template>
  <div class="contant-box-main">
    <div class="contant-header">
      <h6><img src="../../../image/star-icon.png" alt="" />Most likely to buy</h6>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="articles-tab"
            data-bs-toggle="tab"
            data-bs-target="#articles"
            type="button"
            role="tab"
            aria-controls="articles"
            aria-selected="false"
          >
            Articles
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="cart-tab"
            data-bs-toggle="tab"
            data-bs-target="#cart"
            type="button"
            role="tab"
            aria-controls="cart"
            aria-selected="true"
          >
            Cart composition
          </button>
        </li>
      </ul>
    </div>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade" id="articles" role="tabpanel" aria-labelledby="articles-tab">
        <div class="contant-details">
          <div class="overflow-auto no-pagination">
            <b-table id="my-table" :items="temp_items" small></b-table>
            <Pagination
              :fields="fields"              
              :items="items"
              :perPage="perPage"
              @paginate="paginateItems"
            />
          </div>
        </div>
      </div>
      <div class="tab-pane fade show active" id="cart" role="tabpanel" aria-labelledby="cart-tab">
        <div class="pie-table">
          <DoughnutChart :chartData="testData" :options="options" class="canvas-outer"/>
          <div>
            <ul class="ul-table">
              <li v-for="(data, index) in testData.datasets[0]['data']" v-bind:key="data">
                <div class="detail-title">
                  <span
                    :style="{'background-color': testData.datasets[0]['backgroundColor'][index]}"
                  ></span>
                  <p>{{ testData.labels[index] }}</p>
                </div>
                <span class="percentage-data">{{ data }} %</span>
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
            <tr v-for="(data, index) in testData.datasets[0]['data']" v-bind:key="data">
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
<script lang="ts">
import {defineComponent, onMounted, ref, reactive, toRefs} from 'vue'
import {DoughnutChart, useDoughnutChart} from 'vue-chart-3'
import Pagination from '@/components/CustomComponents/Pagination.vue'
import {Chart, ChartData, ChartOptions, registerables} from 'chart.js'
Chart.register(...registerables)
export default defineComponent({
  name: 'MostLikelyToBuy',
  components: {DoughnutChart, Pagination},
  setup() {
    const state = reactive({
      temp_items: [] as any,
      items: [] as any,
      fields: [] as any,
      perPage: 10 as number,
    })
    state.fields = ['Product name', 'Сategory']
    state.items = [
      {No: 1, Product_name: 'Basket 26 l color blue', Сategory: 'Avfallshantering'},
      {No: 2, Product_name: 'Skopa plast 900 ml', Сategory: 'Food Packaging'},
      {No: 3, Product_name: 'Engångshadskar för korttidsanvändning', Сategory: 'Skyddsutrustning & Arbet'},
      {No: 4, Product_name: 'Basket 26 l color blue', Сategory: 'Avfallshantering'},
      {No: 5, Product_name: 'Skopa plast 900 ml', Сategory: 'Food Packaging'},
      {No: 6, Product_name: 'Basket 26 l color blue', Сategory: 'Avfallshantering'},
      {No: 7, Product_name: 'Skopa plast 900 ml', Сategory: 'Food Packaging'},
      {No: 8, Product_name: 'Engångshadskar för korttidsanvändning', Сategory: 'Skyddsutrustning & Arbet'},
      {No: 9, Product_name: 'Basket 26 l color blue', Сategory: 'Avfallshantering'},
      {No: 10, Product_name: 'Skopa plast 900 ml', Сategory: 'Food Packaging'},
    ]
    const testData = {
      numbers: ['1', '2', '3', '4', '5'],
      labels: ['Avfallshantering', 'Food Packaging', 'Skyddsutrustning & Arbet', 'Avfallshantering', 'Food Packaging'],
      datasets: [
        {
          data: [100, 87, 35, 27, 6],
          backgroundColor: ['#C2CAFF', '#9AA2FF', '#868EFF', '#727AFF', '#5E66FA'],
        },
      ],
    }
    const options = ref({
      responsive: true,
      plugins: {
        legend: {
          display: false,          
        },        
      },
    });

    const {doughnutChartProps, doughnutChartRef} = useDoughnutChart({
      chartData: testData,
      options: options
    })
    return {testData, options,...toRefs(state)}
  },
  methods: {
    paginateItems(value: any) {
      this.temp_items = value
    },
  },
})
</script>
<style>

</style>