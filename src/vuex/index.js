import Vuex from 'vuex'
import Vue from 'vue'
import promote from '../pages/promote/module.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		promote: promote
	}
})
