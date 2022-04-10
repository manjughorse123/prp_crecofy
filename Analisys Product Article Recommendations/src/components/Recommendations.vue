<template>
  <div id="recommendations">
    <h2>Product recommendations</h2>
    <div class="main-articles-sold">
      <div class="top-section">
      <div class="badges">
        <span class="badge bg-primary">Förpackningsmaterial <a href="#"><CancelIcon /></a></span>
        <span class="badge bg-primary">Packtejp, Häftapparater &amp; Limp  <a href="#"><CancelIcon /></a></span>
        <span class="badge bg-primary">Kartonger &amp; Transportlådor  <a href="#"><CancelIcon /></a></span>
        <button class="btn btn-outline-dark mx-2">+</button>
      </div>
      <p class='persentage'>54%</p>
      </div>
      <div class="toggle-holder">
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#soldarticles" aria-expanded="false" aria-controls="soldarticles">
          More sold articles
        </button>
        <div class="collapse recommended-collapse" id="soldarticles">
          <div class="inner-collapse">
            <div class="holder">
              <h3><RecommendedIcon /> Recommended</h3>
              <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#articleone" aria-expanded="false" aria-controls="articleone">
                <div class="toggle-head">
                    <div class="table-layout">
                      <div class="table-head">
                        <div>Article number</div>
                        <div>Article Name</div>
                        <div>Сategory</div>
                      </div>
                      <div class="table-body">
                        <div class="table-holder">
                          <div>00139</div>
                          <div>Tejp, påsförslutning Röd 66 m x 12 mm, 6 st</div>
                          <div>Förpackningsmaterial</div>
                        </div>
                        <div class="table-holder">
                          <div>00139</div>
                          <div>Påsförslutare röd 12 mm</div>
                          <div>Packtejp, Häftapparater & Limp</div>
                        </div>
                      </div>
                    </div>
                    <div class="article-connection">
                      <div class="article-head">Article connection</div>  
                      <div class="value">50%</div>
                    </div>
                </div>
              </button>
              <div class="collapse" id="articleone">
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
                          <div>20536</div>
                          <div>Basket 26 l color blue</div>
                          <div>Förpackningsmaterial</div>
                          <div class="bold-text text-success">High</div>
                          <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                        </div>
                        <div class="table-holder">
                          <div>12072</div>
                          <div>Skopa plast 900 ml</div>
                          <div>Packtejp, Häftapparater & Limp</div>
                          <div class="bold-text text-warning">Medium</div>
                          <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                        </div>
                        <div class="table-holder">
                          <div>17147</div>
                          <div>Påsförslutare röd 12 mm</div>
                          <div>Packtejp, Häftapparater & Limp</div>
                          <div class="bold-text text-danger">Low</div>
                          <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#articletwo" aria-expanded="false" aria-controls="articletwo">
                <div class="toggle-head">
                    <div class="table-layout">
                      <div class="table-head">
                        <div>Article number</div>
                        <div>Article Name</div>
                        <div>Сategory</div>
                      </div>
                      <div class="table-body">
                        <div class="table-holder">
                          <div>00139</div>
                          <div>13/8 staples 5000 pcs packing tape</div>
                          <div>Förpackningsmaterial</div>
                        </div>
                        <div class="table-holder">
                          <div>00139</div>
                          <div>Häftpistol Universal</div>
                          <div>Packtejp, Häftapparater & Limp</div>
                        </div>
                      </div>
                    </div>
                    <div class="article-connection">
                      <div class="article-head">Article connection</div>  
                      <div class="value">50%</div>
                    </div>
                </div>
              </button>
              <div class="collapse" id="articletwo">
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
                          <div>20536</div>
                          <div>Basket 26 l color blue</div>
                          <div>Förpackningsmaterial</div>
                          <div class="bold-text text-success">High</div>
                          <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                        </div>
                        <div class="table-holder">
                          <div>12072</div>
                          <div>Skopa plast 900 ml</div>
                          <div>Packtejp, Häftapparater & Limp</div>
                          <div class="bold-text text-warning">Medium</div>
                          <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                        </div>
                        <div class="table-holder">
                          <div>17147</div>
                          <div>Påsförslutare röd 12 mm</div>
                          <div>Packtejp, Häftapparater & Limp</div>
                          <div class="bold-text text-danger">Low</div>
                          <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#articlethree" aria-expanded="false" aria-controls="articlethree">
                <div class="toggle-head">
                    <div class="table-layout">
                      <div class="table-head">
                        <div>Article number</div>
                        <div>Article Name</div>
                        <div>Сategory</div>
                      </div>
                      <div class="table-body">
                        <div class="table-holder">
                          <div>00139</div>
                          <div>Tejp, påsförslutning Röd 66 m x 12 mm, 6 st</div>
                          <div>Förpackningsmaterial</div>
                        </div>
                        <div class="table-holder">
                          <div>00139</div>
                          <div>Påsförslutare röd 12 mm</div>
                          <div>Packtejp, Häftapparater & Limp</div>
                        </div>
                      </div>
                    </div>
                    <div class="article-connection">
                      <div class="article-head">Article connection</div>  
                      <div class="value">50%</div>
                    </div>
                </div>
              </button>
              <div class="collapse" id="articlethree">
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
                          <div>20536</div>
                          <div>Basket 26 l color blue</div>
                          <div>Förpackningsmaterial</div>
                          <div class="bold-text text-success">High</div>
                          <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                        </div>
                        <div class="table-holder">
                          <div>12072</div>
                          <div>Skopa plast 900 ml</div>
                          <div>Packtejp, Häftapparater & Limp</div>
                          <div class="bold-text text-warning">Medium</div>
                          <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                        </div>
                        <div class="table-holder">
                          <div>17147</div>
                          <div>Påsförslutare röd 12 mm</div>
                          <div>Packtejp, Häftapparater & Limp</div>
                          <div class="bold-text text-danger">Low</div>
                          <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <b-button v-b-toggle="'collapse-3'" variant="primary">More sold articles</b-button> -->
      </div>  
      <!-- <b-collapse class="recommended-collapse" id="collapse-3">
          <div class="inner-collapse">
            <h3><RecommendedIcon /> Recommended</h3>
            <b-button v-b-toggle="'collapse-2'" class="">
              <div class="toggle-head">
                <div class="table-layout">
                  <div class="table-head">
                    <div>Article number</div>
                    <div>Article Name</div>
                    <div>Сategory</div>
                  </div>
                  <div class="table-body">
                    <div class="table-holder">
                      <div>00139</div>
                      <div>Tejp, påsförslutning Röd 66 m x 12 mm, 6 st</div>
                      <div>Förpackningsmaterial</div>
                    </div>
                    <div class="table-holder">
                      <div>00139</div>
                      <div>Påsförslutare röd 12 mm</div>
                      <div>Packtejp, Häftapparater & Limp</div>
                    </div>
                  </div>
                </div>
                <div class="article-connection">
                  <div class="article-head">Article connection</div>  
                  <div class="value">50%</div>
                </div>
              </div>
            </b-button>
            <b-collapse id="collapse-2">
                <b-card>
                    <strong class="mb-4 d-block">Recommended associated products</strong>
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
                            <div>00139</div>
                            <div>Tejp, påsförslutning Röd 66 m x 12 mm, 6 st</div>
                            <div>Förpackningsmaterial</div>
                            <div class="bold-text text-success">High</div>
                            <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                          </div>
                          <div class="table-holder">
                            <div>00139</div>
                            <div>Påsförslutare röd 12 mm</div>
                            <div>Packtejp, Häftapparater & Limp</div>
                            <div class="bold-text text-warning">Medium</div>
                            <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                          </div>
                          <div class="table-holder">
                            <div>00139</div>
                            <div>Påsförslutare röd 12 mm</div>
                            <div>Packtejp, Häftapparater & Limp</div>
                            <div class="bold-text text-danger">Low</div>
                            <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                </b-card>
            </b-collapse>
            <b-button v-b-toggle="'collapse-4'" class="">
              <div class="toggle-head">
                <div class="table-layout">
                  <div class="table-head">
                    <div>Article number</div>
                    <div>Article Name</div>
                    <div>Сategory</div>
                  </div>
                  <div class="table-body">
                    <div class="table-holder">
                      <div>00139</div>
                      <div>Tejp, påsförslutning Röd 66 m x 12 mm, 6 st</div>
                      <div>Förpackningsmaterial</div>
                    </div>
                    <div class="table-holder">
                      <div>00139</div>
                      <div>Påsförslutare röd 12 mm</div>
                      <div>Packtejp, Häftapparater & Limp</div>
                    </div>
                  </div>
                </div>
                <div class="article-connection">
                  <div class="article-head">Article connection</div>  
                  <div class="value">50%</div>
                </div>
              </div>
            </b-button>
          <b-collapse id="collapse-4">
                <b-card>
                    <strong class="mb-4 d-block">Recommended associated products</strong>
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
                            <div>00139</div>
                            <div>Tejp, påsförslutning Röd 66 m x 12 mm, 6 st</div>
                            <div>Förpackningsmaterial</div>
                            <div class="bold-text text-success">High</div>
                            <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                          </div>
                          <div class="table-holder">
                            <div>00139</div>
                            <div>Påsförslutare röd 12 mm</div>
                            <div>Packtejp, Häftapparater & Limp</div>
                            <div class="bold-text text-warning">Medium</div>
                            <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                          </div>
                          <div class="table-holder">
                            <div>00139</div>
                            <div>Påsförslutare röd 12 mm</div>
                            <div>Packtejp, Häftapparater & Limp</div>
                            <div class="bold-text text-danger">Low</div>
                            <div class="button-holder"><button class="btn btn-outline-primary"><span>+</span> Add article</button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                </b-card>
            </b-collapse>
          </div>
      </b-collapse> -->
    </div>

    
  </div>
</template>

<script>

import CancelIcon from './layout/icons/cancel.vue'
import RecommendedIcon from './layout/icons/recommended.vue'

export default {
  name: 'Recommendations',
  components: {
    CancelIcon,
    RecommendedIcon
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>