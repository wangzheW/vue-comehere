<template>
	<div class="detail-main">
		<detail-show-img :showImg="showImg" :allImgInfo="allImgInfo"/>
		<detail-base/>
		<detail-star-level/>
		<detail-buy-tip :buyTipInfo="buyTipInfo"/>
		<div class="detail-container-main">
			<detail-recommend :recommendInfo="recommendInfo"/>
			<detail-ticket :ticketInfo="ticketInfo"/>
			<router-view :commentInfo="commentInfo"></router-view>
			<detail-comment :commentInfo="commentInfo"/>
		</div>
		<detail-will-like/>
		<detail-back-home/>
		<detail-fixed-top/>
	</div>
</template>

<script>
	
	import showImg from './components/ShowImg'
	import base from './components/Base'
	import starLevel from './components/StarLevel'
	import buyTip from './components/BuyTip'
	import recommend from './components/Recommend'
	import ticket from './components/Ticket'
	import comment from './components/Comment'
	import willLike from './components/willLike'
	import backHome from './components/BackHome'
	import fixedTop from './components/FixedTop'
	import { AXIOS_GET_DATA } from './types'
	import { mapState, mapActions } from 'vuex'

	export default {

		components: {
			'detail-show-img': showImg,
			'detail-base': base,
			'detail-star-level': starLevel,
			'detail-buy-tip': buyTip,
			'detail-recommend': recommend,
			'detail-ticket': ticket,
			'detail-comment': comment,
			'detail-will-like': willLike,
			'detail-back-home': backHome,
			'detail-fixed-top': fixedTop
		},

		computed: mapState({
			showImg: (state) => {
				return state.detail.showImg
			},
			allImgInfo: (state) => {
				return state.detail.allImgInfo
			},
			buyTipInfo: (state) => {
				return state.detail.buyTipInfo
			},
			recommendInfo: (state) => {
				return state.detail.recommendInfo
			},
			ticketInfo: (state) => {
				return state.detail.ticketInfo
			},
			commentInfo: (state) => {
				return state.detail.commentInfo
			},
			moreInfo: (state) => {
				return state.detail.moreInfo
			}
		}),

		mounted() {
			!this.allImgInfo.length && this.getData();
		},

		methods: mapActions({
			getData: (dispatch) => {
				dispatch(AXIOS_GET_DATA);
		 	}
		})
		
	}

</script>

<style scoped>
	.detail-main{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		min-height: 100%;
		background: #f5f5f5;
		color: #212121;
    	font-size: .28em;
    	line-height: 1;
	}
</style>