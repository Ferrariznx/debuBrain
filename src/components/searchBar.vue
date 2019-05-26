<template>
    <div class="round-search-bar">
        <input class="input-search" v-model="searchText" placeholder="搜索问题和关键字"  @keydown.enter='doSearch'>
        <button class="btn-search" @click='doSearch' >
            <img class="icon-search" src="./../assets/search.png">
        </button>
    </div>
</template>

<script>
import Util from "@/common/Util"
export default {
    data(){
        return{
            searchText:''
        }
    },
    methods:{
        doSearch(){
            console.log(this.$router)
            Util.searchAPI(this.$router,this.searchText)
        }
    }
}
</script>

<style  scoped>

.round-search-bar{
    width:400px;
    position:relative;
    display:inline-block;
    top:-27px;
} 
.input-search{
    width:400px;
    height:50px;
    border-radius:25px;
    border:1px solid #e7e7e7;
    padding:20px;
    box-sizing:border-box;
    outline:none;
    font-size:1.3em;
}
.btn-search{
    cursor:pointer;
    height:60px;
    position:absolute;
    right:15px;
    background:none;
    top:50%;
    transform:translateY(-60%);
    border:none;
    outline:none;
}
.icon-search{
    width:30px;
    height:30px; 
}
</style>