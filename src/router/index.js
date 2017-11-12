import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/pages/detail/Detail'
import VisitorImg from '@/pages/detail/VisitorImg'
import NowMap from '@/components/NowMap'
import AMap from 'vue-amap';

Vue.use(Router)
Vue.use(AMap)

AMap.initAMapApiLoader({
  key: 'YOUR_KEY',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

export default new Router({
  routes: [
    {
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
    }
  ]
})
