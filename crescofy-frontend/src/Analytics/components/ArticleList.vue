<template>
    <div id="product-list">
        <input type="text" class="form-control" v-model="$parent.searchTerm" v-on:keypress="$parent.searchArticle">
        <Multiselect
                v-model="value"
                mode="tags"
                :options="options"
                :searchable="true"
                :createTag="false"
                trackBy="name"
                label="name"
                @deselect="onDeselect"
                @select="onSelect"
        />
        <ul v-if="$parent.articleLength" class="w-full rounded bg-white border border-gray-300 px-4 py-2 space-y-1 absolute z-10" style="height: 178px; overflow-y: auto;">
            <li v-for="article in $parent.searchArticles" :key="article.name" @click="$parent.selectArticle(article.name, article.id)" class="cursor-pointer hover:bg-gray-100 p-1">
                {{ article.name }}`
            </li>
        </ul>

        <div class="toolbar-holder">
            <button class="btn btn-primary">Analyze</button>
        </div>
        <p>Start enter the article name and then select from matches list</p>
    </div>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
<script>
    import Multiselect from '@vueform/multiselect'
    export default {
        name: 'ArticleList',
        components: {
            Multiselect,
        },
        data() {
            return {
                value: null,
                options: [
                    {'value': 1, 'name': 'Batman'},
                    {'value': 2, 'name': 'Robin'},
                    {'value': 3, 'name': 'Joker'},
                    ]
            }
        },
        methods: {
            onDeselect(option) {
                console.log('deselectOption')
                console.log(option)
            },
            onSelect(option) {
                console.log('selectOption')
                console.log(option)
            }
        },
        created() {
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
