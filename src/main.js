import Vue from 'vue'
import App from './app/App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
// import Vuex from 'vuex'
import store from './vuex'

FastClick.attach(document.body);


Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
// Vue.use(Vuex);

window.bus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


