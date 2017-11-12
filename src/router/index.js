import Vue from 'vue'
import Router from 'vue-router'
import VisitorImg from '@/pages/detail/VisitorImg'
import NowMap from '@/components/NowMap'
import AMap from 'vue-amap';
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'
import List from '@/pages/list/index'
import City from '@/pages/city/index'
import Onedaytour from '@/pages/onedaytour/index'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})
Vue.use(Router)
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: 'YOUR_KEY',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail,
      children: [{
        path: 'visitorImg',
        component: VisitorImg
      }]
    },{
      path: '/nowmap',
      name: 'NowMap',
      component: NowMap
    },{
    	path:"/list",
    	name: 'List',
    	component: List
    },{

      path:"/onedaytour",
      name: 'onedaytour',
      component: Onedaytour
    },{
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
