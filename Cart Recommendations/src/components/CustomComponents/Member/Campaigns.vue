<template>
  <div class="contant-box-main">
    <div class="contant-header">
      <h6><img src="../../../image/campaigns-icon.png" alt="" />Campaigns</h6>
    </div>
    <div class="contant-details">
      <div class="overflow-auto">
        <table class="table table-sm" id="my-table">
          <thead>
            <tr>
              <th scope="col" v-for="f in fields" v-bind:key="f.id">
                {{ f.split('_').join(' ') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in temp_items" v-bind:key="item.id">
              <td class="font-light-text">{{ item.id }}</td>
              <td>{{ item.campaign_name }}</td>
              <td class="font-light-text">{{ item.offer_name }}</td>
              <td class="font-light-text">{{ item.audience }}</td>
              <td><button class="status-active">Active</button></td>
            </tr>
          </tbody>
        </table>
        <Pagination :fields="fields" :items="items" :perPage="perPage" @paginate="paginateItems" class="pagination-wrp" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref, reactive, toRefs} from 'vue'
import Pagination from '@/components/CustomComponents/Pagination.vue'
export default defineComponent({
  name: 'Campaigns',
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
    state.fields = ['ID', 'Campaign name', 'Offer name', 'Audience', 'Status']
    state.items = [
      {id: 1, campaign_name: 'Campaign no 1', offer_name: 'Flintstone', audience: 'Flintstone'},
      {id: 2, campaign_name: 'Campaign no 2', offer_name: 'Flintstone', audience: 'Flintstone'},
      {id: 3, campaign_name: 'Campaign no 3', offer_name: 'Flintstone', audience: 'Flintstone'},
      {id: 4, campaign_name: 'Campaign no 4', offer_name: 'Flintstone', audience: 'Flintstone'},
      {id: 5, campaign_name: 'Campaign no 5', offer_name: 'Flintstone', audience: 'Flintstone'},
      {id: 6, campaign_name: 'Campaign no 6', offer_name: 'Flintstone', audience: 'Flintstone'},
      {id: 7, campaign_name: 'Campaign no 7', offer_name: 'Flintstone', audience: 'Flintstone'},
      {id: 8, campaign_name: 'Campaign no 8', offer_name: 'Flintstone', audience: 'Flintstone'},
      {id: 9, campaign_name: 'Campaign no 9', offer_name: 'Flintstone', audience: 'Flintstone'},
      {id: 10, campaign_name: 'Campaign no 10', offer_name: 'Flintstone', audience: 'Flintstone'},
      {id: 11, campaign_name: 'Campaign no 11', offer_name: 'Flintstone', audience: 'Flintstone'},
      {id: 12, campaign_name: 'Campaign no 12', offer_name: 'Flintstone', audience: 'Flintstone'},
      {id: 13, campaign_name: 'Campaign no 13', offer_name: 'Flintstone', audience: 'Flintstone'},
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