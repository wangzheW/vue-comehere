import axios from 'axios'
import { AXIOS_GET_DATA, SET_DATA } from './types'

export default {
	state: {
		showImg: {},
		allImgInfo: [],
		buyTipInfo: "",
		recommendInfo: [],
		ticketInfo: [],
		commentInfo: [],
		moreInfo: []
	},

	mutations: {
		[SET_DATA](state, payload) {
			//console.log(payload.showImgInfo[0]);
			state.showImg = payload.showImgInfo[0].showImg;
			state.allImgInfo = payload.showImgInfo[0].allImg;
			state.buyTipInfo = payload.buyTipInfo;
			state.recommendInfo = payload.recommendInfo;
			state.ticketInfo = payload.ticketInfo;
			state.commentInfo = payload.commentInfo;
			state.moreInfo = payload.moreInfo;
		}
	},

	actions: {
		[AXIOS_GET_DATA](context) {
			axios.get('/static/detail.json')
				.then((response) => {
					context.commit(SET_DATA, response.data.data)
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
}