<template>
  <div id="header">
    <button class="toggle-btn" @click="toggleFun()"></button>
    <div class="title-details">
      <h2>{{title}}</h2>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">{{author.home}}</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{author.cart}}</li>
          <!-- <li class="breadcrumb-item active" aria-current="page">Library</li> -->
        </ol>
      </nav>
    </div>
    <div v-if="currentUrl == '/Cart'" id="product-tabs">
    <div class="toolbar-holder p-2" >
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb p-2">
          <li class="breadcrumb-item">Sort by</li>
        </ol>
      </nav>
     <div class=" select-holder "   >
                <select class="nav-dropdown">
                  <option>Most Common Combinations</option>
                  <option>Most Common Combinations</option>
                  <option>Most Common Combinations</option>
                  <option>Most Common Combinations</option>
                </select>
            </div>
  </div>
  </div>
  </div>
</template>

<script>



export default {
  name: 'Header',
  props:['title', 'author'],
  
  mounted(){

  },
  data(){
    return {show,
        currentUrl:window.location.pathname,
    }
  },


  methods: {
    toggleFun: function() {
      document.getElementById('app').classList.toggle("collapsed");
    },
//     setUrl(){
//       var currentUrl = window.location.pathname;
// console.log("url",currentUrl)
//     }
    
  }
}

let show = false;


// let show = false;
// var pathArray = window.location.pathname.split('/');
// if(pathArray[1] == "cart"){
//   show = true;
//   console.log(show)
// }

// console.log(pathArray[1])
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>