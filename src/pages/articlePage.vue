<template>
  <div class="article-wrap">
    <div class="article-left">
        <div class="left-block">
            <h2><i class="el-icon-loading"></i>&nbsp;&nbsp;近期热门</h2>
            <ul>
                <h3>技术文章<span class="h3-line">  ———————</span></h3>
                <router-link v-for="item in list" :to="{ path: item.url }" :key='item.id' 
                active-class="active" 
                @click="toggleActive(item.name)"
                tag="li">
                  <img :src="item.src" alt="" width="15px;" class="left-img">
                  {{item.name}}
                </router-link>

            </ul>
        </div>       
    </div>
    <div class="right-block">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          list:[
                    {   
                        src: require('../assets/icon/js.png'),
                        name:'前端',
                        url:'/article/js'
                    },
                    {
                        src: require('../assets/icon/back.png'),
                        name:'后端',
                        url:'/article/back',
                        
                    },
                    {
                        src: require('../assets/icon/ai.png'),
                        name:'人工智能',
                        url:'/article/ai',
                        hot:true
                    },
                    {
                        src: require('../assets/icon/area.png'),
                        name:'区块链',
                        url:'/article/area'
                    },
                    {
                        src: require('../assets/icon/wx.png'),
                        name:'小程序',
                        url:'www.baidu.com'
                    },
                    {
                        src: require('../assets/icon/safe.png'),
                        name:'安全',
                        url:'www.baidu.com'
                    },
                    {
                        src: require('../assets/icon/ios.png'),
                        name:'ios',
                        url:'www.baidu.com'
                    },
                    {
                        src: require('../assets/icon/tool.png'),
                        name:'工具',
                        url:'www.baidu.com'
                    },
                ],
            nowFocus:''
      }
  },
  methods:{
    toggleActive(now){
      console.log(now)
      this.nowFocus=now
    }
  }
}
</script>

<style>
.right-title{
    display: inline-block;
    width:100%;
    font-size: 35px;
    font-weight: bold;
    margin-top: 15px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
}

.article-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.article-left {
  float: left;
  width: 240px;
  text-align: left;
}
.right-block {
  float: left;
  width: 900px;
}
.left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.left-block .hr {
  margin-bottom: 20px;
}
.left-block h2 {
  background: #009a61;
  color: #fff;
  padding: 10px 15px;
  border-radius: 6px;
  font-weight: bold;
}
.left-block h3 {
  font-size: 14px;
  color: #212121;
}
.left-block ul {
  padding: 10px 15px;
  text-shadow: 0 0 black;
    background-color: white;
    line-height: 30px;
    color: #757575;
    padding-left: 30p;
    font-size: 14px;
    
}
.left-block li {
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
}
.left-block li:hover {

}
.left-img{
  display:inline-block;
  vertical-align: middle;
}
.left-aa{
  
  display: inline-block;
  margin-left: 10px;
}
.h3-line{
  color: #d4d4d4;
}
.active{
  background-color: #00ee95;
  color: #fff;
  font-weight: bold;
}

</style>
