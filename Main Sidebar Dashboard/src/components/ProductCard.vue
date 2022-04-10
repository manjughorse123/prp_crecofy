<template>
    <div class="main-articles-sold row" >
        <!-- <h1>{{author.list}}</h1> -->
   
        <div class="col-lg-6 col-md-6 col-6 p-0 pt-2 pb-2"  >
 <div class="row" v-for="li in author.list" :key="li">
<p class="con-card-text"><span class="dash-icon"></span>{{li}}</p>
</div>
<!-- <p class="con-card-text"><span class="dash-icon"></span>{{li.lsec}}</p>
<p class="con-card-text"><span class="dash-icon"></span>{{li.lthree}}</p> -->
</div>

        <div class="col-lg-3 col-md-3 align-middle pt-2 pb-2" ><p class='con-persentage'>{{author.per}}</p></div>
        <div class="col-lg-3 col-md-3 p-3"><button class="con-btn">Recommendations</button></div>

    </div>
    
</template>


<script>
 

    export default {
        name: "ProductCard",
        props:["author"]
       
     
    };
</script>