import axios from 'axios'
import { SET_DATA, AXIOS_GET_DATA } from './types'

export default {
	state: {
		swiperInfo: [],
		swiperNavInfoFirst: [],
		swiperNavInfoSecond: [],
		hotMoreLink: "",
		hotListInfo: [],
		weekendListInfo: [],
		PromptTopLink: "",
		PromptTopText: "",
		PromptBottomData: []
	},

	mutations: {
		[SET_DATA](state, payload){
			state.swiperInfo = payload.swiperInfo;
			state.swiperNavInfoFirst = payload.swiperNavInfoFirst;
			state.swiperNavInfoSecond = payload.swiperNavInfoSecond;
			state.hotMoreLink = payload.hotInfo[0].hotMoreLink;
			state.hotListInfo = payload.hotInfo[0].hotListInfo;
			state.weekendListInfo = payload.weekendListInfo;
			state.PromptTopLink = payload.promptInfo[0].PromptTopLink;
			state.PromptTopText = payload.promptInfo[0].PromptTopText;
			state.PromptBottomData = payload.promptInfo[0].PromptBottomData;
		}
	},

	actions: {
		//contxt指自己
		[AXIOS_GET_DATA](context) {
			axios.get('/static/home.json')
				.then((response) => {
					context.commit(SET_DATA, response.data.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
}