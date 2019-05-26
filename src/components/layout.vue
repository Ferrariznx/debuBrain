<template>
    <div>
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
          <img src="../assets/name.png" width="30px">
         </router-link> 
         
        <div class="sBar"  ><search-bar></search-bar></div>
         
        <div class="head-nav">
          <ul class="nav-list">
            <li v-if=" username!=='' "> {{ username }} </li>
            <li class="nav-pile">|</li>
            <li v-if=" username!=='' " @click="quit">退出</li>
            <li v-if=" username==='' " @click="logClick">登录</li>
            <li class="nav-pile" v-if=" username==='' ">|</li>
            <li @click="regClick" v-if=" username==='' ">免费注册</li>
            <li class="nav-pile" >|</li>
            <li @click="aboutClick">关于本站</li>
            <li class="nav-pile">|</li>
          </ul>
        </div>  
      </div>
    </div>
    <poster v-if="showPost" @closePost="closePost"></poster>
    <div class="container">
      
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      
    </div>
    <div class="app-foot">
      <p>© All designed By 德布脑内</p>
    </div>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      hello about
    </my-dialog>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>
  </div>
</template>

<script>
import Dialog from './base/dialog'
import LogForm from './logForm'
import RegForm from './regForm'
import searchBar from './searchBar'
import poster from './poster'
export default {
  components:{
    MyDialog:Dialog,
    LogForm,
    RegForm,
    searchBar,
    poster
  },
  data(){
    return {
      isShowAboutDialog:false,
      isShowLogDialog:false,
      isShowRegDialog:false,
      username:'',
      showPost:true
    }
  },
  methods:{
    aboutClick(){
      this.isShowAboutDialog=true
    },
    logClick(){
      this.isShowLogDialog=true
    },
    regClick(){
      this.isShowRegDialog=true
    },
    closeDialog(attr){
      this[attr]=false
    },
    onSuccessLog(data){
      this.closeDialog('isShowLogDialog')
      this.username=data.username
    },
    quit(){
      this.username=''
    },
    closePost(){
      console.log("xx")
      this.showPost=false
    }
  }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  font-family: inherit;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
.nav-list li:hover{
  color: #1fa059;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 16px;
  color: #444;
}
.sBar{
  height: 100px;
  width: 400px;
  margin-top:-160px;
  margin-left: 130px;
  display: inline-block;
}
.app-head {
  background: #fff;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
  border-top: 3px solid #408080; 
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 170px;
  margin-top: 10px;
}
.head-nav {
  font-size: 18px;
  color: #3c3c3c;
  font-weight: bold;
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 30px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #0099ED;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #13227a;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>

