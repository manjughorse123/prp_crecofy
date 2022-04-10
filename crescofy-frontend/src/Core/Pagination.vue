<template>
     <nav class="main-pagination" aria-label="Page navigation example">
            <div class="main-title">
              showed
              {{ (page - 1) * perpage + 1 > count ? 0 : (page - 1) * perpage + 1 }}
              to
              {{ page * perpage > count ?count : page * perpage }}
              out of {{ count?count:0 }} {{name}}
            </div>
            <div class="main-pagination">
              <ul class="pagination">
                <li class="page-item">
                  <button
                    type="button"
                    class="page-link"
                    v-if="page != 1"
                    @click="decrementpage"
                  >
                    &#8592;
                  </button>
                </li>

                <li class="page-item">
                  <button
                    type="button"
                    class="page-link"
                    @click="setpage(1)"
                    v-if="page > 1"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    class="page-link"
                    @click="setpage(2)"
                    v-if="page == 3"
                  >
                    2
                  </button>
                  <button class="page-link" v-if="page > 3">...</button>
                  <button
                    type="button"
                    :class="
                      page == pageNumber ? 'page-link-active' : 'page-link'
                    "
                    v-for="pageNumber in totalPages.slice(page - 1, page + 2)"
                    @click="setpage(pageNumber)"
                    :key="pageNumber"
                  >
                    {{ pageNumber }}
                  </button>
                </li>
                <li>
                  <button class="page-link" v-if="page < totalPages.length - 3">
                    ...
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="page-link"
                    @click="setpage(totalPages.length)"
                    :key="pageNumber"
                    v-if="page < totalPages.length - 2"
                  >
                    {{ totalPages.length }}
                  </button>
                </li>

                <li class="page-item">
                  <button
                    type="button"
                    @click="incrementpage"
                    v-if="page < totalPages.length"
                    class="page-link"
                  >
                    &#8594;
                  </button>
                </li>
              </ul>
            </div>
          </nav>
</template>
<script>
export default {
    name: 'pagination',
    props:{
        page:{
            required:true,
            type: Number
        },
        totalPages:{
            required:true,
            type:Array
        },
        count:{
             required:true,
            type:Number
        },
        name:{
            required:true,
            type:String
        },
        incrementpage:{
            required:true,
            type:Function
        },
         decrementpage:{
            required:true,
            type:Function
        },
         setpage:{
            required:true,
            type:Function
        },
        perpage:{
          required:true,
            type:Number
        }

    },
}
</script>