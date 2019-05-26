<template>
    <div>
        <brake/>      
        <div class="card"><card/></div>
        <span class="tip">德布脑内为你找到了约2344条结果</span>
        <div class="search-page" v-for="item in searchResultList" :key="item.id">          
            <div>
                 <contentText :title="item.title" :text="item.text" :num="item.num" :author="item.author" :time="item.time"/>
            </div>
        </div>
    </div>
</template>

<script>
import card from './../components/base/card'
import brake from './../components/base/brake'
import contentText from './../components/contentText'
const DB=require("./../common/search.json")
export default {
    data(){
    return{
      searchResultList:[]
    }
  },
  computed: {
    search(){
      console.log("this.$route-->",this.$route)
      return this.$route.params.searchText
    }
  },
  created() {
    this.doSearchResult()
  },
//   beforeRouteUpdate(to,from,next){
//     next()
//     this.doSearchResult();
//   },
  methods:{
    doSearchResult(){
      const { searchText } =this.$route.params
      if(DB.hasOwnProperty(searchText)) {
        this.searchResultList=DB[searchText]
      }
      else{
        searchResultList=[]
      }
  
    }
  },
  components:{
    contentText,
    brake,
    card
  },
}
</script>

<style>
.search-page{
    width: 80%;
    margin: 0 auto;
}
.tip{
    width:80%;
    display: inline-block;
    color: #757575;
    font-weight: normal;
    margin-left: 140px;
    margin-top: 10px;
    font-size: 13px;
    padding-bottom: 8px;
    border-bottom: #d6d6d6 1px solid;
}
.card{
    width:870px;
    margin:0 auto;
    padding-top: 10px;
}
</style>


