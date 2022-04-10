<template>
  <div>
    <TopBar
      title="Members"
      :author="{
        home: 'Home',
        cart: 'Members',
      }"
    />
    <MemberModal
      :modalId="createModalId"
      :modalType="2"
      :initmembers="getCounterCount"
    ></MemberModal>
    <div class="vld-parent">
      <loading v-model:active="isLoading" :is-full-page="fullPage" />
    </div>
    <div>
      <div class="dashboard-top-section">
        <div class="row">
          <div class="col-md-4">
            <div class="dts-box">
              <span>{{ counterBoard.total_members }}</span>
              <h6>Total Members</h6>
            </div>
          </div>
          <div class="col-md-4">
            <div class="dts-box">
              <div>
                <div class="dts-title">{{ counterBoard.new_members }}</div>
                <div class="main___box">
                  <div class="top__title">New Members</div>
                  <div class="bottom__title">
                    <span
                      >+{{
                       total_member_count!==0
                          ? Math.round((counterBoard.new_members / total_member_count) * 100)
                          : 0
                      }}%
                    </span>
                    <span>from {{ date }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="dts-box">
              <span>{{ counterBoard.member_purchase }}</span>
              <h6>Member Purchases</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="contant-box-main">
        <div class="data-heading-wrp">
          <div class="data-heading">
            <div class="search-box-wrp">
              <input
                type="text"
                v-model="search"
                class="form-control"
                name=""
                placeholder="Search by the name or member ID"
              />
            </div>
            <div class="tab-box-wrp">
              <ul>
                <!-- <li :class="status == 'all' ? 'active' : ''"  @click="changeStatus('all')">All</li>
                        <li :class="status == 'active' ? 'active' : ''" @click="changeStatus('active')">Active</li>
                        <li :class="status == 'in-active' ? 'active' : ''" @click="changeStatus('in-active')">Inctive</li> -->
                <li
                  @click="changeStatus('all')"
                  :class="status == 'all' ? 'active' : ''"
                >
                  All
                </li>
                <li
                  @click="changeStatus('active')"
                  :class="status == 'active' ? 'active' : ''"
                >
                  Active
                </li>
                <li
                  @click="changeStatus('in-active')"
                  :class="status == 'in-active' ? 'active' : ''"
                >
                  Inactive
                </li>
              </ul>
            </div>
          </div>
          <div class="data-heading-btn">
            <button @click="showCreateDialog">+ Add new member</button>
          </div>
        </div>
        <div class="table-wrp overflow-auto">
          <table class="table my-table-wrp table-sm" id="my-table">
            <thead>
              <tr>
                <th scope="col" v-for="f in fields" v-bind:key="f.id">
                  <div
                    class="table-head"
                    v-if="f === 'Name'"
                    @click="sortTable()"
                  >
                    {{ f.split("_").join(" ") }}
                    <span>
                      <span :class="sortCount == 2 ? 'sort-active' : ''"
                        >&#8595;</span
                      >
                      <span :class="sortCount == 3 ? 'sort-active' : ''"
                        >&#8593;</span
                      >
                    </span>
                  </div>
                  <div class="table-head" v-else>
                    {{ f.split("_").join(" ") }}
                  </div>
                  <tr></tr>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in items.results"
                v-bind:key="item.id"
                :class="item.is_active ? 'active-row' : 'inactive-row'"
              >
                <td class="font-light-text">{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td class="font-light-text">{{ item.email }}</td>
                <td class="font-light-text">{{ item.phone }}</td>
                <td class="font-light-text">{{ item.sex }}</td>
                <td class="font-light-text">{{ item.birth_date }}</td>
                <td>
                  <button class="status-active" v-if="item.is_active">
                    Active
                  </button>
                  <button class="status-inactive" v-else>Inactive</button>
                </td>
                <td class="font-light-text ">
                  <table class="main-button--table" width="50">
                    <tr>
                      <td width="50%">
                        <button class="eye-view" @click="detail(item)">
                          <img
                            src="./../../public/assets/images/eyeicon.png"
                            alt=""
                          />
                        </button>
                      </td>
                      <td width="50%">
                        <button
                          class="delete-profile"
                          @click="deleteMember(item)"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.75 16.5H5.25C4.42157 16.5 3.75 15.8284 3.75 15V5.25H2.25V3.75H5.25V3C5.25 2.17157 5.92157 1.5 6.75 1.5H11.25C12.0784 1.5 12.75 2.17157 12.75 3V3.75H15.75V5.25H14.25V15C14.25 15.8284 13.5784 16.5 12.75 16.5ZM5.25 5.25V15H12.75V5.25H5.25ZM6.75 3V3.75H11.25V3H6.75Z"
                              fill="#EC4424"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </table>
                </td>
                <!-- <td class="font-light-text"><button class="eye-view" @click="editMember(item)"><img src="./../../public/assets/images/coolicon.png" alt="" /></button></td> -->
              </tr>
            </tbody>
          </table>
          <Pagination
            :page="page"
            :totalPages="totalPages"
            :name="'Members'"
            :count="items.count?items.count:0"
            :incrementpage="incrementpage"
            :decrementpage="decrementpage"
            :setpage="setpage"
            :perpage="10"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {
  LIST_MEMBERS,
  DELETE_MEMBER,
  LIST_RECENT_MEMBERS,
  LIST_ORDERS,
} from "@/Core/store/action-types";
import TopBar from "../Menu/TopBar.vue";
import { RESOURCE_NAME } from "./member.vars";
import { deleteItem } from "@/Core/helpers/gridUtils";
import MemberModal from "./components/FormModal.vue";
import Pagination from "../Core/Pagination";
import "vue-loading-overlay/dist/vue-loading.css";
import Loading from "vue-loading-overlay";
export default {
  name: "Members",
  components: {
    MemberModal,
    Loading,
    TopBar,
    Pagination,
  },
  data() {
    return {
      asc: null,
      des: null,
      isLoading: true,
      params: null,
      page: 1,
      totalPages: [],
      search: null,
      pages: [],
      ascending: false,
      nameSort: false,
      sortCount: 1,
      sortColumn: "",
      counterBoard: {
        total_members: 0,
        new_members: 0,
        member_purchase: 0,
      },
      date: null,
      total_member_count: 0,
      fields: [
        "ID",
        "Name",
        "Email",
        "Phone",
        "Gender",
        "Date Of Birth",
        "Status",
        "",
        "",
      ],
      items: [],
      recentMember: [],
      status: "all",
      showModal: false,
      createModalId: "createDialog",
    };
  },

  methods: {
    ...mapActions("member", [LIST_MEMBERS, DELETE_MEMBER, LIST_RECENT_MEMBERS]),
    ...mapActions("order", [LIST_ORDERS]),
    showCreateDialog() {
      window.$(`#${this.createModalId}`).modal("toggle");
    },
    initMembers() {
      let options = {
        persist: true,
        params: {
          q: this.search == "" ? null : this.search,
          is_active:
            this.status == "all"
              ? null
              : this.status == "active"
              ? true
              : false,
          page: this.page,
          asc: this.asc,
          des: this.des,
        },
      };
      console.log("options", options);
      this[LIST_MEMBERS](options).then((resp) => {
        this.counterBoard.total_members = resp.count;
        if (this.status === "all" && !this.search)
          this.total_member_count = resp.count;
        this.items = resp;
        this.totalPages = Array(Math.ceil(resp.count / 10))
          .fill(0)
          .map((e, i) => i + 1);
      });
    },
    detail(item) {
      this.showModal = true;
      this.$router.push({
        name: "MemberDetail",
        params: { memberId: item.id },
      });
    },
    editMember(item) {
      console.log(item);
    },
    deleteMember(item) {
      deleteItem(
        this.$alertify,
        this.$ability,
        this[DELETE_MEMBER],
        RESOURCE_NAME,
        item
      );
      setTimeout(() => {
        this.initMembers();
      }, 2000);
    },
    changeStatus(state) {
      this.status = state;
    },
    getCounterCount() {
      let options = this.params;
      this[LIST_RECENT_MEMBERS](options).then((resp) => {
        this.counterBoard.new_members = resp.length;
        this.recentMember = resp;
      });
    },
    getPurchaseCount() {
      let options = { params: null };
      this[LIST_ORDERS](options)
        .then((resp) => {
          console.log("resp=>", resp);
          this.counterBoard.member_purchase = resp.count;
        })
        .catch((err) => {
          console.log("err=>", err);
          this.counterBoard.member_purchase = 0;
        });
    },
    sortTable() {
      this.sortCount++;
      if (this.sortCount > 3) this.sortCount = 1;
      if (this.sortCount === 1) {
        this.asc = null;
        this.des = null;
      } else if (this.sortCount === 2) {
        this.asc = true;
        this.des = null;
      } else if (this.sortCount === 3) {
        this.asc = null;
        this.des = true;
      } else {
        return 0;
      }
    },
    getdate() {
      var d = new Date();
      d.setMonth(d.getMonth() - 1);
      this.date = d
        .toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
        .replace(/ /g, " ");
    },
    incrementpage() {
      this.page = this.page + 1;
    },
    decrementpage() {
      this.page = this.page - 1;
    },
    setpage(page) {
      this.page = page;
    },
  },
  mounted() {
    this.getCounterCount();
    this.getPurchaseCount();
    //this.initMembers();
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    this.getdate();
  },
  watch: {
    search() {
      this.page = 1;
      this.initMembers();
    },
    status() {
      this.page = 1;
      this.initMembers();
    },
    page() {
      this.initMembers();
    },
    sortCount() {
      this.page = 1;
      this.initMembers();
    },
    recentMember() {
      this.initMembers();
    },
  },
};
</script>
<style scoped>
.dashboard-top-section .dts-box {
  background: #ffffff;
  padding: 40px 25px;
  max-height: 150px;
  height: 100%;
}
.dashboard-top-section .dts-box span {
  color: #5e66fa;
  font-weight: 600;
  line-height: 24px;
}
.dashboard-top-section .dts-box h6 {
  margin: 0;
  color: #3f3f40;
  font-weight: 500;
  font-size: 18px;
}
.data-heading-wrp {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
}

.data-heading-wrp .data-heading {
  position: relative;
}

.data-heading-wrp .data-heading-btn button {
  background: #5e66fa;
  border-radius: 4px;
  font-style: normal;
  font-size: 15px;
  line-height: 150%;
  border: 0;
  color: #fff;
  font-weight: 400;
  padding: 11px 19px;
}
.search-box-wrp {
  position: relative;
  min-width: 300px;
  display: inline-block;
  margin-right: 20px;
}
.search-box-wrp input {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  color: #aaabad;
}
.search-box-wrp input::placeholder {
  color: #aaabad;
}
.tab-box-wrp {
  position: relative;
  display: inline-block;
}
.tab-box-wrp ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
}
.tab-box-wrp ul li {
  background: #fff;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  color: #3f3f40;
  list-style-type: none;
  border: 1px solid #e2e2e2;
  padding: 9px 20px;
  cursor: pointer;
}
.tab-box-wrp ul li:first-child {
  border-radius: 4px 0px 0px 4px;
}
.tab-box-wrp ul li:last-child {
  border-radius: 0px 4px 4px 0px;
}
.tab-box-wrp ul li.active {
  background: #5e66fa;
  color: #fff;
  border: 1px solid #5e66fa;
}
.table-wrp table tr:hover {
  background: #f6f6f7;
}
button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}
.sort-active {
  font-weight: bold;
  color: #000000;
  font-size: 12px;
}
.main___box {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 0px;
}

.main___box .top__title {
  font-size: 18px;
}

.main___box .bottom__title span {
  font-size: 15px !important;
  margin-bottom: 0 !important;
}

.main___box span {
  margin: 0 !important;
  font-weight: normal !important;
}

.main___box span:nth-child(1) {
  color: #0bc984 !important;
  margin-right: 5px !important;
}

.main___box span:nth-child(2) {
  color: #aaabad !important;
}

.dashboard-top-section .dts-box span {
  margin-bottom: 0 !important;
}

.dts-title {
  color: #5e66fa;
  font-weight: 600;
  line-height: 43px;
  margin-bottom: 0 !important;
  font-size: 54px;
}

table.main-button--table button.eye-view {
    margin: auto;
}

table.main-button--table  td {
    padding: 0;
}

@media only screen and (max-width: 1199px) {
  .main___box{display: block;}
}


@media only screen and (max-width: 991px) {
  .dashboard-top-section .dts-box{padding: 20px 20px;}
}



@media only screen and (max-width: 767px) {
  .dashboard-top-section .dts-box{
    max-height: initial;
    height: auto;
    margin-bottom: 10px;
    }
}
</style>