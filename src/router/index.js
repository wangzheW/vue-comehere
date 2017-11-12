import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/index'
import Promote from '@/pages/promote/Index'

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
      path:"/promote",
      name:'Promote',
      component: Promote
    }
  ]
})
