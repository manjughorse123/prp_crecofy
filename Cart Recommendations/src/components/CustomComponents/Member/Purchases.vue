<template>
  <div class="contant-box-main">
    <div class="contant-header">
      <h6><img src="../../../image/purchases-icon.png" alt="" />Purchases</h6>
    </div>
    <div class="contant-details">
      <div class="overflow-auto">
        <table class="table table-sm" id="my-table">
          <thead>
            <tr>
              <th scope="col" v-for="f in fields" v-bind:key="f.id">
                {{ f.split('_').join(' ') }}
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in temp_items" v-bind:key="item.id">
              <td class="font-light-text">{{ item.id }}</td>
              <td class="font-light-text">{{ item.date }}</td>
              <td class="font-light-text">{{ item.total_articles }}</td>
              <td class="font-light-text">{{ item.total_items }}</td>
              <td class="font-light-text">{{ item.total_price }}</td>
              <td class="font-light-text"><button class="eye-view"><img src="../../../image/eyeicon.png" alt="" /></button></td>
            </tr>
          </tbody>
        </table>
        <Pagination :fields="fields" :items="items" :perPage="perPage" @paginate="paginateItems" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref, reactive, toRefs} from 'vue'
import Pagination from '@/components/CustomComponents/Pagination.vue'
export default defineComponent({
  name: 'ProfileDetails',
  components: {
    Pagination,
  },
  setup() {
    // mounted
    const state = reactive({
      temp_items: [] as any,
      items: [] as any,
      fields: [] as any,
      perPage: 10 as number,
    })
    state.fields = ['id','Date', 'Total articles', 'Total items', 'Total price']
    state.items = [
      {id: 41153, date: '17/02/2021', total_articles: '1', total_items: '1', total_price: '100'},
      {id: 41152, date: '17/02/2021', total_articles: '5', total_items: '10', total_price: '500'},
      {id: 41151, date: '17/02/2021', total_articles: '7', total_items: '8', total_price: '90'},
      {id: 41150, date: '17/02/2021', total_articles: '3', total_items: '3', total_price: '30'},
      {id: 4114, date: '17/02/2021', total_articles: '2', total_items: '5', total_price: '25'},
      {id: 41153, date: '17/02/2021', total_articles: '1', total_items: '1', total_price: '100'},
      {id: 41152, date: '17/02/2021', total_articles: '5', total_items: '10', total_price: '500'},
      {id: 41151, date: '17/02/2021', total_articles: '7', total_items: '8', total_price: '90'},
      {id: 41150, date: '17/02/2021', total_articles: '3', total_items: '3', total_price: '30'},
      {id: 4114, date: '17/02/2021', total_articles: '2', total_items: '5', total_price: '25'},
      {id: 4115, date: '17/02/2021', total_articles: '6', total_items: '8', total_price: '200'},
      {id: 4116, date: '17/02/2021', total_articles: '3', total_items: '2', total_price: '300'},
      {id: 4117, date: '17/02/2021', total_articles: '7', total_items: '6', total_price: '400'},
    ]
    return {...toRefs(state)}
  },
  methods: {
    paginateItems(value: any) {
      this.temp_items = value
    },
  },
})
</script>