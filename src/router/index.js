import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/index'
import Onedaytour from '@/pages/onedaytour/index'
import VueLazyload from 'vue-lazyload'
Vue.use(Router)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})

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
      path:"/onedaytour",
      name: 'onedaytour',
      component: Onedaytour
    }
  ]
})
