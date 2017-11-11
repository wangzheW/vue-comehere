import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/index'
import Detail from '@/pages/detail/Detail'
import visitorImg from '@/pages/detail/visitorImg'

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
      path: '/detail',
      name: 'Detail',
      component: Detail,
      children: [{
        path: 'visitorImg',
        component: visitorImg
      }]
    }
  ]
})
