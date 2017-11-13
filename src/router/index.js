import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/index'
import Detail from '@/pages/oneDayDetail/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path:"/list",
    	name: 'List',
    	component: List
    },{
      path:"/oneDayDetail",
      name: 'Detail',
      component: Detail
    }
  ]
})
