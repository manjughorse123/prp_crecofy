<template>
    <div id="product-list">
        <input type="text" class="form-control" v-model="$parent.searchProductTerm" v-on:keypress="$parent.searchProduct">
        <ul v-if="$parent.productLength" class="w-full rounded bg-white border border-gray-300 px-4 py-2 space-y-1 absolute z-10" style="height: 178px; overflow-y: auto;">
            <li v-for="product in $parent.searchProducts" :key="product.name" @click="$parent.selectProduct(product.name, product.id)" class="cursor-pointer hover:bg-gray-100 p-1">
                {{ product.name }}`
            </li>
        </ul>
        <div class="toolbar-holder">
            <!--<div class="select-holder">
                <select>
                  <option>Product</option>
                  <option>Product</option>
                  <option>Product</option>
                  <option>Product</option>
                </select>
            </div>-->
            <button class="btn btn-primary">Analyze</button>
        </div>
        <p>Start enter the product name and then select from matches list</p>
    </div>
</template>

<script>

export default {
  name: 'ProductList',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
