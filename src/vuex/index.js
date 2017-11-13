import Vuex from 'vuex'
import Vue from 'vue'
import oneDayDetail from '../pages/oneDayDetail/module.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
	oneDayDetail: oneDayDetail
   
  }
})
