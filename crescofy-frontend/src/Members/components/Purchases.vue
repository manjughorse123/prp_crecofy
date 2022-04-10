<template>
  <div class="contant-box-main">
    <div class="contant-header">
      <h6><img src="./../../../public/assets/images/purchases-icon.png" alt="" />Purchases</h6>
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
            <tr v-for="item in items.results" v-bind:key="item.id">
              <td class="font-light-text">{{ item.id }}</td>
              <td class="font-light-text">{{item.timestamp}}</td>
              <td class="font-light-text">{{ item.article }}</td>
              <td class="font-light-text">{{ item.count }}</td>
              <td class="font-light-text">{{ item.item_price }}</td>
              <td class="font-light-text"><button class="eye-view"><img src="../../../public/assets//images/eyeicon.png" alt="" /></button></td>
            </tr>
          </tbody>
        </table>
        <Pagination
          :page='page'
          :totalPages='totalPages'
          :name='"Purchases"'
          :count='items.count?items.count:0'
          :incrementpage='incrementpage'
          :decrementpage='decrementpage'
          :setpage='setpage'
          :perpage="10"
          />
        <!-- <Pagination :fields="fields" :items="items" :perPage="perPage" @paginate="paginateItems" /> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Pagination from "../../Core/Pagination"
import { LIST_MEMBER_PURCHASES } from "@/Core/store/action-types";
export default {
  name: 'Purchases',
  components: {
     Pagination
  },
  data() {
    return {
       page: 1,
      totalPages: [],
      fields: ['id','Date', 'Total articles', 'Total items', 'Total price'," "],
      items: [
          // {id: 41153, date: '17/02/2021', total_articles: '1', total_items: '1', total_price: '100'},
          // {id: 41152, date: '17/02/2021', total_articles: '5', total_items: '10', total_price: '500'},
          // {id: 41151, date: '17/02/2021', total_articles: '7', total_items: '8', total_price: '90'},
          // {id: 41150, date: '17/02/2021', total_articles: '3', total_items: '3', total_price: '30'},
          // {id: 4114, date: '17/02/2021', total_articles: '2', total_items: '5', total_price: '25'},
          // {id: 41153, date: '17/02/2021', total_articles: '1', total_items: '1', total_price: '100'},
          // {id: 41152, date: '17/02/2021', total_articles: '5', total_items: '10', total_price: '500'},
          // {id: 41151, date: '17/02/2021', total_articles: '7', total_items: '8', total_price: '90'},
          // {id: 41150, date: '17/02/2021', total_articles: '3', total_items: '3', total_price: '30'},
        ],
      }
  },
  methods:{
      ...mapActions("member", [LIST_MEMBER_PURCHASES]),
    InItMemberPurchaseDetails() {
      if (this?.$route?.params?.memberId && this.$route.params.memberId != "") {
        const memberId = this.$route.params.memberId;
        const payload = {
          params: {
            page: this.page,
          },
          objId: memberId,
        };
        
        this[LIST_MEMBER_PURCHASES](payload).then((res) => {
          console.log("PurchaseDetails=>", res);
          this.items = res;
          var total = Math.ceil(res.count / 10);
          console.log("total=>", total);
          this.totalPages = Array(total)
            .fill(0)
            .map((e, i) => i + 1);
        }).catch(e=>{
          console.log("error=>",e)
        })
      }
    },
     incrementpage(){
      this.page=this.page+1;
    },
    decrementpage(){
      this.page=this.page-1;
    },
    setpage(page){
       this.page=page;
    }
  },

  mounted() {
    this.InItMemberPurchaseDetails()
  }
}

</script>