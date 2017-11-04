import Vue from 'vue'
import App from './app/App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'


FastClick.attach(document.body);

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
