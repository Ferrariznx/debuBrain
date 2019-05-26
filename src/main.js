// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VRouter from 'vue-router'
import VueResource from 'vue-resource'
import Layout from './components/Layout'
import IndexPage from './pages/IndexPage'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/details/analysis'
import DetailCountPage from './pages/details/count'
import DetailPubPage from './pages/details/publish' 
import DetailForPage from './pages/details/forecast'
import OrderListPage from './pages/orderList'
import articalPage from './pages/articlePage'
import jsPage from './pages/article/jsPage'
import backPage from './pages/article/backPage'
import aiPage from './pages/article/aiPage'
import searchPage from './pages/searchPage'
// Vue.config.productionTip = false
Vue.use(VRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
let router=new VRouter({
  mode:'history',
  routes:[
  {
    path:'/',
    component:IndexPage
  },
  {
    path:'/orderList',
    component:OrderListPage
  },
  {
    path:'/article',
    component:articalPage,
    redirect:'/article/js',
    children:[
      {
        path:'js',
        component:jsPage
      },
      {
        path:'back',
        component:backPage
      },
      {
        path:'ai',
        component:aiPage
      }
    ]
  },
  {
    path:'/detail',
    component:DetailPage,
    redirect:'/detail/analysis',
    children:[
      {
        path:'analysis',
        component:DetailAnaPage
      },
      {
        path:'count',
        component:DetailCountPage
      },
      {
        path:'forecast',
        component:DetailForPage
      },
      {
        path:'publish',
        component:DetailPubPage
      }
    ]
  },
  {
    path:'/search/:searchText',
    component:searchPage
  }
]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
