<template>
  <div class="product-recommendations-section">
    <div class="prs-top">
      <div class="prst-top">
        <div class="prst-tags">
          <ul>
            <li v-for="(product, index) in selectedProducts" :key="index">
              <p>
                {{ getProdById(product).name
                }}<span class="remove-tags" @click="removeProduct(product)"
                  ><img src="../../image/remove-light.png"
                /></span>
              </p>
            </li>
            <li>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="../../image/plus-gray.png" />
                </button>
                <div
                  class="dropdown-menu dropdoen-show-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    class="dropdown-item"
                    v-for="product in products"
                    :key="product.id"
                    @click="AddSelectedProduct(product.id)"
                    >{{ product.name }}</a
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
        <h2
          class="tags-pr"
          v-if="
            JSON.stringify(
              $route.params.list ? $route.params.list.map((i) => Number(i)) : []
            ) == JSON.stringify(selectedProducts)
          "
        >
          {{ $route.params.corr ? $route.params.corr : null }}
        </h2>
      </div>
      <div class="prst-bottom">
        <button
          type="button"
          data-toggle="collapse"
          data-target="#mostsoldarticles"
          aria-expanded="false"
          class="msa-btn collapsed"
          aria-controls="mostsoldarticles"
        >
          Most sold articles
          <img src="../../image/down-sky.png" alt="" />
        </button>

        <div class="msa-content collapse" id="mostsoldarticles">
          <div class="sold-articles-section">
            <div
              class="sold-articles-box"
              v-for="(product, index) in selectedProducts"
              :key="index"
            >
              <div class="sold-articles-box-title">
                <h6>{{ getProdById(product).name }}</h6>
                <button
                  type="button"
                  data-toggle="collapse"
                  :data-target="'#' + getProdById(product).name"
                  aria-expanded="false"
                  class="collapsed"
                  :aria-controls="getProdById(product).name"
                  @click="initMostSoldArticle(product)"
                >
                  <span class="hide-articles">Hide articles</span>
                  <span class="show-articles">Show articles</span>
                  <img src="../../image/right-sky.png" alt="" />
                </button>
              </div>
              <div
                class="sold-articles-details collapse"
                :id="getProdById(product).name"
              >
                <div class="table-responsive-lg">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Article number</th>
                        <th scope="col">Article name</th>
                        <th scope="col">Probability to sell</th>
                        <th scope="col">Show details1</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(articles, index) in mostsoldarticles[product]"
                        :key="index"
                      >
                        <td>{{ articles.article__id }}</td>
                        <td>{{ articles.article__name }}</td>
                        <td><h6 class="high-article">High</h6></td>
                        <td>
                          <a href="#" class="add-article-btn"
                            ><img src="../../image/plus-sky.png" /> Add
                            article</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="prs-bottom">
        <div class="contant-box-main">
          <div class="contant-header">
            <h6>
              <img src="../../image/recommended-icon.png" alt="" />Recommended
            </h6>
          </div>
          <div class="recommended-section">
            <div class="recommended-section-row">
              <div
                class="recommended-section-table"
                v-for="(conn_articles, index) in connectedArticles.results"
                :key="index"
              >
                <button
                  type="button"
                  data-toggle="collapse"
                  :data-target="'#recommended' + index"
                  aria-expanded="true"
                  class="collapsed"
                  :aria-controls="'recommended' + index"
                  @click="
                    initArticleBoughtTogather(
                      articleObjToID(conn_articles.articles)
                    )
                  "
                >
                  <span class="hide-articles">Hide</span>
                  <span class="show-articles">Show</span>
                  <img src="../../image/right-sky.png" alt="" />
                </button>
                <div class="table-responsive-lg">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Article number</th>
                        <th scope="col">Article Name</th>
                        <th scope="col">Сategory</th>
                        <th scope="col">Article connection</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(article, index) in conn_articles.articles"
                        :key="article.id"
                      >
                        <td>{{ article.id }}</td>
                        <td>{{ article.name }}</td>
                        <td>{{ article.product }}</td>
                        <td
                          :rowspan="conn_articles.articles.length"
                          v-show="index == 0"
                          class="article-connection"
                        >
                          {{ Math.round(conn_articles.correlation) }}%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class="recommended-section-details collapse"
                  :id="'recommended' + index"
                >
                  <h6>Recommended associated articles</h6>
                  <div class="table-responsive-lg">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Article name</th>
                          <th scope="col">Category</th>
                          <th scope="col">Probability to sell</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(articles, index) in boughtTogatherArticles[
                            articleObjToID(conn_articles.articles)
                          ]"
                          :key="index"
                        >
                          <td>{{ articles.article_id }}</td>
                          <td>{{ articles.article_name }}</td>
                          <td>{{ articles.category }}</td>
                          <td><h6 class="high-article">High</h6></td>
                          <td>
                            <a href="#" class="add-article-btn"
                              ><img src="../../image/plus-sky.png" /> Add
                              article</a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Pagination
            v-if="this.selectedProducts && this.selectedProducts.length >= 2"
            :page="page"
            :totalPages="totalPages"
            :name="'conected articles'"
            :count="connectedArticles.count?connectedArticles.count:0"
            :incrementpage="incrementpage"
            :decrementpage="decrementpage"
            :setpage="setpage"
            :perpage="5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapActions, mapGetters } from "vuex";
import {
  SELECTED_PRODUCTS,
  DELETE_SELECTED_PRODUCT,
  LIST_PRODUCTS,
  CONNECTED_ARTICLES,
  BOUGHT_TOGATHER_ARTICLES,
  MOST_SOLD_ARTICLES,
} from "@/Core/store/action-types";
import Pagination from "../../Core/Pagination";
export default {
  name: "Recommendations",
  components: {
    Pagination,
  },
  data() {
    return {
      products: [],
      connectedArticles: [],
      page: 1,
      totalPages: [],
      boughtTogatherArticles: {},
      mostsoldarticles: {},
    };
  },
  computed: {
    ...mapGetters("product", [
      "selectedProducts",
      "getProdById",
      "productsList",
    ]),
  },
  created() {
    this.initProducts();
  },
  methods: {
    ...mapActions("product", [
      SELECTED_PRODUCTS,
      DELETE_SELECTED_PRODUCT,
      LIST_PRODUCTS,
    ]),
    ...mapActions("article", [
      CONNECTED_ARTICLES,
      BOUGHT_TOGATHER_ARTICLES,
      MOST_SOLD_ARTICLES,
    ]),
    AddSelectedProduct(id) {
      this[SELECTED_PRODUCTS](id).then(() => {
        this.setProducts();
      });
    },
    removeProduct(id) {
      this[DELETE_SELECTED_PRODUCT](id).then(() => {
        this.setProducts();
        delete this.mostsoldarticles[id];
      });
    },
    initProducts() {
      this[LIST_PRODUCTS]({ persist: true, params: null }).then(() => {
        this.setProducts();
      });
    },
    setProducts() {
      this.products = this.productsList
      // this.selectedProducts
      //   ? this.productsList.filter(
      //       (item) => !this.selectedProducts.includes(item.id)
      //     )
      //   : this.productsList;
      this.initConnectedArticles();
    },
    articleObjToID(obj) {
      let article_ids = [];
      obj.map((ob) => {
        article_ids.push(ob.id);
      });
      return article_ids;
    },
    initConnectedArticles() {
      if (this.selectedProducts) {
        if (this.selectedProducts.length >= 2) {
          this[CONNECTED_ARTICLES]({
            product_ids: this.selectedProducts,
            page: this.page,
          }).then((resp) => {
            this.totalPages = Array(Math.ceil(resp.count / 5))
              .fill(0)
              .map((e, i) => i + 1);
            this.connectedArticles = resp;
          });
        } else {
          this.$alertify.notify(
            `Please select atleast 2 products for recommendation. `,
            "error",
            3
          );
          this.connectedArticles = [];
        }
      } else {
        this.$alertify.notify(
          `Please select atleast 2 products for recommendation. `,
          "error",
          3
        );
      }
    },
    initArticleBoughtTogather(article_ids) {
      if (this.boughtTogatherArticles[article_ids]) {
        return;
      }
      this[BOUGHT_TOGATHER_ARTICLES](article_ids).then((resp) => {
        this.boughtTogatherArticles[article_ids] = resp;
      });
    },
    initMostSoldArticle(product_id) {
      if (this.mostsoldarticles[product_id]) {
        return;
      }
      this[MOST_SOLD_ARTICLES](product_id).then((resp) => {
        this.mostsoldarticles[product_id] = resp;
      });
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
  watch: {
    page() {
      $(".recommended-section-table button[data-toggle=collapse]").addClass(
        "collapsed"
      );
      $(".recommended-section-table button[data-toggle=collapse]").attr(
        "aria-expanded",
        "false"
      );
      $(".recommended-section-details").addClass("collapse");
      $(".recommended-section-details").removeClass("show");
      this.initConnectedArticles();
    },
  },
};
</script>
<style>
.remove-tags .add-tags {
  cursor: pointer;
}
</style>