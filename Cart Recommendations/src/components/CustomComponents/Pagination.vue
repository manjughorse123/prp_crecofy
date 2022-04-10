<template>
  <div class="pagination-wrp">
    <span
      >Showed {{ (currentPage - 1) * perPage + 1 }} to {{ lastRecord }} of
      {{ items.length }} purchases</span
    >
    <ul class="pagination">
      <li class="page-item" :class="{disabled: currentPage == 1}">
        <button class="page-link" @click="changePage(currentPage - 1)"><img src="../../image/left_arrow.png" alt="" /></button>
      </li>
      <li
        class="page-item"
        v-for="i in totalPages"
        v-bind:key="i"
        :class="{active: currentPage == i}"
      >
        <button class="page-link" @click="changePage(i)">{{ i }}</button>
      </li>
      <li class="page-item" :class="{disabled: totalPages == currentPage}">
        <button class="page-link" @click="changePage(currentPage + 1)"><img src="../../image/right_arrow.png" alt="" /></button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs} from 'vue'
export default defineComponent({
  name: 'TablePagination',
  props: {
    fields: {
      required: true,
      type: Array,
    },
    items: {
      required: true,
      type: Array,
    },
    perPage: {
      required: true,
      type: Number,
    },
  },
  emits: ['paginate'],
  setup(props, context) {
    // mounted
    const state = reactive({
      currentPage: 1 as string | number,
      temp_items: [] as any,
      totalPages: 0 as string | number,
      lastRecord: 0 as number,
    })
    onMounted(() => {
      state.totalPages = Math.ceil(props.items.length / props.perPage)
      changePage(1)
    })
    const changePage = (page: number) => {
      state.temp_items = []
      state.currentPage = page
      for (
        var i = (state.currentPage - 1) * props.perPage;
        i < state.currentPage * props.perPage;
        i++
      ) {
        if (props.items[i]) {
          state.lastRecord = i + 1
          state.temp_items.push(props.items[i])
        }
      }
      context.emit('paginate', state.temp_items)
    }
    return {changePage, ...toRefs(state)}
  },
})
</script>