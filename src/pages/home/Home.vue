<template>
  	<div>
		<index-header/>
		<index-swiper :swiperInfo="swiperInfo"/>
		<index-swiper-nav :swiperNavInfoFirst="swiperNavInfoFirst" :swiperNavInfoSecond="swiperNavInfoSecond"/>
		<index-prompt :PromptTopLink="PromptTopLink" :PromptTopText="PromptTopText" :PromptBottomData="PromptBottomData"/>
		<index-hot-list :hotMoreLink="hotMoreLink" :hotListInfo="hotListInfo"/>
		<index-weekend-list :weekendListInfo="weekendListInfo"/>
	</div>
</template>

<script>

	import header from './components/Header'
	import swiper from './components/Swiper'
	import swiperNav from './components/SwiperNav'
	import prompt from './components/Prompt'
	import hotList from './components/HotList'
	import weekendList from './components/WeekendList'
	import { AXIOS_GET_DATA } from './types'
	import { mapState, mapActions } from 'vuex'

	export default {
		computed: mapState({
			swiperInfo: (state) => {
				//把store下的state下的home中的swiperInfo映射给swiperInfo
				return state.home.swiperInfo;
			},
			swiperNavInfoFirst: (state) => {
				return state.home.swiperNavInfoFirst;
			},
			swiperNavInfoSecond: (state) => {
				return state.home.swiperNavInfoSecond;
			},
			hotMoreLink: (state) => {
				return state.home.hotMoreLink;
			},
			hotListInfo: (state) => {
				return state.home.hotListInfo;
			},
			weekendListInfo: (state) => {
				return state.home.weekendListInfo
			},
			PromptTopLink: (state) => {
				return state.home.PromptTopLink
			},
			PromptTopText: (state) => {
				return state.home.PromptTopText
			},
			PromptBottomData: (state) => {
				return state.home.PromptBottomData
			}
		}),

		components: {
			"index-header": header,
			"index-swiper": swiper,
			"index-swiper-nav": swiperNav,
			"index-prompt": prompt,
			"index-hot-list": hotList,
			"index-weekend-list": weekendList
		},

		mounted(){
			/*if(!this.swiperInfo.length){
				this.getHomeData();
			}*/
			!this.swiperInfo.length && this.getHomeData();
		},

		methods: mapActions({//发送给Actions
			getHomeData: (dispatch) => {
				dispatch(AXIOS_GET_DATA);
			}
		})
	}
</script>