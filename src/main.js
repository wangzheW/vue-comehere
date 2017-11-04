import Vue from 'vue'
import App from './app/App'
import router from './router'
import FastClick from 'fastclick'
//import VueAwesomeSwiper from 'vue-awesome-swiper';//全局引入插件

//Vue.use(VueAwesomeSwiper);//使用插件

FastClick.attach(document.body);

//Vue.config.productionTip = false;//产品模式

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
