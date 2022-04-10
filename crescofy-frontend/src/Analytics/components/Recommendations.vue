<template>
    <div id="recommendations">
        <h2>Article recommendations</h2>
        <div class="main-articles-sold">
            <div class="top-section">
                <div class="badges">
                    <span class="badge bg-primary" v-for="article in selectedArticles" :key="article.name">{{ article.name }}<a
                            href="javascript:void(0);" v-on:click="$parent.removeArticle(article.id)"><CancelIcon/></a></span>
                    <!--<button class="btn btn-outline-dark mx-2">+</button>-->
                </div>
                <!--<p class='persentage'>54%</p>-->
            </div>
            <div class="toggle-holder">
                <!--<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#soldarticles"
                        aria-expanded="false" aria-controls="soldarticles">
                    More sold articles
                </button>-->
                <div class="recommended-collapse" id="soldarticles">
                    <div class="inner-collapse">
                        <div class="">
                            <h3>
                                <RecommendedIcon/>
                                Most sold with articles
                            </h3>
                            <div v-if="recArticles.length === 0" style="margin-bottom: 20px;">
                                <span>No records found</span>
                            </div>
                            <div v-for="recArticle in recArticles" :key="recArticle.id" style="margin-bottom: 20px;">
                                <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                                        :data-bs-target="'#article' + recArticle.id" aria-expanded="false"
                                        :aria-controls="'#article' + recArticle.id">
                                    <div class="toggle-head">
                                        <div class="table-layout">
                                            <div class="table-head">
                                                <div>Article number</div>
                                                <div>Article Name</div>
                                                <div>Сategory</div>
                                            </div>
                                            <div class="table-body">
                                                <div class="table-holder">
                                                    <div>{{ recArticle.id }}</div>
                                                    <div>{{ recArticle.name }}</div>
                                                    <div>{{ " - " }}</div>
                                                </div>
                                                <!--<div class="table-holder">
                                                  <div>00139</div>
                                                  <div>Påsförslutare röd 12 mm</div>
                                                  <div>Packtejp, Häftapparater & Limp</div>
                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="article-connection">
                                            <div class="article-head">Article connection</div>
                                            <div class="value">{{ recArticle.percent.toFixed(2) }}%</div>
                                        </div>
                                    </div>
                                </button>

                                <div class="collapse" :id="'article' + recArticle.id">
                                    <div class="py-4">
                                        <strong class="mb-4 d-block text-left">Recommended associated products</strong>
                                        <div class="toggle-head-inner">
                                            <div class="table-layout">
                                                <div class="table-head">
                                                    <div>ID</div>
                                                    <div>Article Name</div>
                                                    <div>Сategory</div>
                                                    <div>Probability to sell</div>
                                                </div>
                                                <div class="table-body">
                                                    <div class="table-holder">
                                                        <div>{{ recArticle.id }}</div>
                                                        <div>{{ recArticle.name }}</div>
                                                        <div>{{'-' }}</div>
                                                        <div class="bold-text text-success">High</div>
                                                        <div class="button-holder">
                                                            <button class="btn btn-outline-primary"><span>+</span> Add
                                                                article
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <!--<div class="table-holder">
                                                      <div>12072</div>
                                                      <div>Skopa plast 900 ml</div>
                                                      <div>Packtejp, Häftapparater & Limp</div>
                                                      <div class="bold-text text-warning">Medium</div>
                                                      <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                                                    </div>-->
                                                    <!--<div class="table-holder">
                                                      <div>17147</div>
                                                      <div>Påsförslutare röd 12 mm</div>
                                                      <div>Packtejp, Häftapparater & Limp</div>
                                                      <div class="bold-text text-danger">Low</div>
                                                      <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                                                    </div>-->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

    import CancelIcon from '../../icons/cancel.vue'
    import RecommendedIcon from '../../icons/recommended.vue'

    export default {
        name: 'Recommendations',
        props: ['selectedArticles', 'recArticles'],
        data() {
            return {}
        },
        components: {
            CancelIcon,
            RecommendedIcon
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
