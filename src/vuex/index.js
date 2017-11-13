
import Vue from 'vue'
import Vuex from 'vuex'
import detail from '../pages/detail/module'
import home from '../pages/home/module'
import promote from '../pages/promote/module.js'


Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		home: home,
		detail: detail,
		promote: promote
	},
	state: {
		defaultCity: "北京"
	},
	getters: {
		getCity: function(state) {
			return state.defaultCity 
		}
	},
	mutations: {
		setCity (state, city) {
			state.defaultCity = city
		}
	},
	actions: {
		changeCity: function(context) {
			setTimeout(function() {
				context.commit("setCity", "南京")
			}, 1000);

		}
	}
})
