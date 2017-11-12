import Vue from 'vue'
import App from './app/App'
import router from './router'
import FastClick from 'fastclick'

import VueResource from 'vue-resource'
import store from './vuex'

FastClick.attach(document.body);

Vue.config.productionTip = false


Vue.use(VueResource)


window.bus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


