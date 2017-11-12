import axios from 'axios'

export default {
	state: {
		index: 0,
		cityIndex: 0,
		subject: [],
		hotCity: [],
		countryOuterInfo: [],
		domesticOrForeignreign: []
	},
	mutations: {
		setdata(state, payload) {
			state.countryOuterInfo = payload
			state.subject = payload[state.index].hotCity[state.cityIndex].subject
			state.hotCity = payload[state.index].hotCity
		},
		CountryOrOuter(state, payload) {
			console.log(state.countryOuterInfo[payload].hotCity[0].subject)
			state.subject = state.countryOuterInfo[payload].hotCity[0].subject
			state.index = payload
			state.hotCity = state.countryOuterInfo[payload].hotCity
		},
		changeCityIndex(state, payload) {
			state.cityIndex = payload
			state.subject = state.countryOuterInfo[state.index].hotCity[payload].subject
		}
	},
	actions: {
		getCountryOuterData(context) {
			axios.get('/static/promote.json')
				.then((res) => {
					if(res.status == 200) {
						this.countryOuterInfo = res.data.data.domesticOrForeign;
						this.countryOuterInfo[0].active = true;
						this.countryOuterInfo[0].hotCity[0].active = true;
						this.countryOuterInfo[1].hotCity[0].active = true;
						context.commit("setdata", this.countryOuterInfo)
					}else {
						this.handleGetDataErr("错误的状态码")
					}
				})
		}
		// countryOrOuter(context, res) {
		// 	console.log(context, res)
		// 	// setMessageAction (newValue) {
		// 	//     if (this.debug) console.log('setMessageAction triggered with', newValue)
		// 	//     // this.state.message = newValue
		// 	// 	context.commit("setdata", this.countryOuterInfo);
		// 	// },
		// 	// clearMessageAction () {
		// 	//     if (this.debug) console.log('clearMessageAction triggered')
		// 	// 	this.state.message = ''
		// 	// }
		// }
	}
	// getters: {
	// 	getSubject: function(state) {
	// 		console.log(state)
	// 		// var index = state.promote.index;
	// 		var cityIndex = state.promote.countryOuterInfo[index].cityIndex;
	// 		// return state.promote.countryOuterInfo[index].hotCity[cityIndex].subject
	// 	} 
	// }
}