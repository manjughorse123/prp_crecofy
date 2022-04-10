<template>
    <div>
        <div id="product-tabs">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="product-tab" data-bs-toggle="tab" data-bs-target="#product"
                            type="button" role="tab" aria-controls="product" aria-selected="true"
                            v-on:click="tabChange('product')">Products
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="articles-tab" data-bs-toggle="tab" data-bs-target="#articles"
                            type="button" role="tab" aria-controls="articles" aria-selected="false"
                            v-on:click="tabChange('article')">Articles
                    </button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="product" role="tabpanel" aria-labelledby="product-tab">
                    <ProductList/>
                </div>
                <div class="tab-pane fade" id="articles" role="tabpanel" aria-labelledby="articles-tab">
                    <ArticleList/>
                </div>
            </div>
        </div>
        <Recommendations :selected-articles="selectedArticles" :rec-articles="recArticles"
                         v-if="tabSelected === 'article'"/>
        <ProductRecommendations :selected-products="selectedProducts" :rec-products="recProducts"
                                v-if="tabSelected === 'product'"/>
    </div>
</template>

<script>
    import $ from "jquery";
    import Recommendations from './Recommendations.vue';
    import ProductRecommendations from "./ProductRecommendations";
    import ProductList from './ProductList.vue';
    import ArticleList from './ArticleList.vue';
    import {mapActions} from 'vuex';
    import {
        LIST_ARTICLES_ALL,
        RECOMMENDED_ARTICLES,
        LIST_PRODUCTS_ALL,
        RECOMMENDED_PRODUCTS
    } from '@/Core/store/action-types';
    import {computed} from 'vue'

    export default {
        name: 'ProductTabs',
        data() {
            return {
                articles: {},
                products: {},
                searchTerm: '',
                searchProductTerm: '',
                searchArticles: [],
                searchProducts: [],
                selectedArticles: [],
                selectedProducts: [],
                recArticles: {},
                recProducts: {},
                tabSelected: 'product'
            }
        },
        components: {
            Recommendations,
            ProductList,
            ArticleList,
            ProductRecommendations
        },
        methods: {
            ...mapActions('article', [LIST_ARTICLES_ALL, RECOMMENDED_ARTICLES]),
            ...mapActions('product', [LIST_PRODUCTS_ALL, RECOMMENDED_PRODUCTS]),
            async getArticles() {
                let _this = this;
                await this[LIST_ARTICLES_ALL]().then(res => {
                    _this.articles = res;

                })
            },
            searchArticle() {
                let _this = this
                _this.searchArticles = computed(() => {
                    if (_this.searchTerm.value === '') {
                        return []
                    }
                    let matches = 0
                    return _this.articles.filter(article => {
                        if (article.name.toLowerCase().includes(_this.searchTerm.toLowerCase()) && matches < 10) {
                            matches++
                            return article
                        }
                    })
                });
            },
            selectArticle(article, id) {
                this.selectedArticles.push({
                    'name': article,
                    'id': id
                })
                this.searchTerm = ''
                this.searchArticles = []
                this.getRecArticles();
            },
            removeArticle(id) {
                this.selectedArticles = this.selectedArticles.filter((item) => item.id !== id);
                this.getRecArticles();
            },
            async getRecArticles() {
                let _this = this;
                let articleIds = [];
                $.each(_this.selectedArticles, function (index, item) {
                    articleIds.push(item.id)
                })
                await this[RECOMMENDED_ARTICLES](articleIds).then(res => {
                    _this.recArticles = res.results;
                })
            },
            async getProducts() {
                let _this = this;
                await this[LIST_PRODUCTS_ALL]().then(res => {
                    _this.products = res;
                })
            },
            searchProduct() {
                let _this = this
                _this.searchProducts = computed(() => {
                    if (_this.searchProductTerm.value === '') {
                        return []
                    }
                    let matches = 0
                    return _this.products.filter(product => {
                        if (product.name.toLowerCase().includes(_this.searchProductTerm.toLowerCase()) && matches < 10) {
                            matches++
                            return product
                        }
                    })
                });
            },
            selectProduct(product, id) {
                this.selectedProducts.push({
                    'name': product,
                    'id': id
                })
                this.searchProductTerm = ''
                this.searchProducts = []
                this.getRecProducts();
            },
            removeProduct(id) {
                this.selectedProducts = this.selectedProducts.filter((item) => item.id !== id);
                this.getRecProducts();
            },
            async getRecProducts() {
                let _this = this;
                let productIds = [];
                $.each(_this.selectedProducts, function (index, item) {
                    productIds.push(item.id)
                })
                await this[RECOMMENDED_PRODUCTS](productIds).then(res => {
                    _this.recProducts = res.results;
                })
            },
            tabChange(tab) {
                this.tabSelected = tab
            }
        },
        computed: {
            articleLength() {
                return this.searchArticles.length
            },
            productLength() {
                return this.searchProducts.length
            }
        },
        created() {
            this.getArticles(),
                this.getProducts()
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
