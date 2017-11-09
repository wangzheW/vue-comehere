<template>
	<div class="comment-main">
		<h2 class="comment-title">
			<span class="comment-title-line"></span>用户评论
		</h2>
		<div class="comment-border-line"></div>
		<ul class="comment-item-con">
			<li class="comment-item" v-for="valItem in commentInfo" :key="valItem.id">
				<h3 class="comment-item-title">
					<span :class="valItem.star" class="comment-item-icon"></span>
					<span class="comment-visitor">
						<em class="comment-visitor-name">{{valItem.name}}</em>
						<i class="comment-visitor-time">{{valItem.time}}</i>
					</span>
				</h3>
				<p class="comment-visitor-value">{{valItem.value}}</p>
				<div class="comment-vistor-img-con">
					<span class="comment-vistor-img-all">共{{valItem.imgInfo.length}}张</span>
					<img v-for="imgItem in valItem.imgInfo" v-if="imgItem.id < 7" :key="imgItem.id" :src="imgItem.imgUrl" class="comment-vistor-img"/>
				</div>
			</li>
		</ul>
		<router-link to="/" class="comment-look-all-link">
			查看全部评论<span class="iconfont icon-you"></span>
		</router-link>
		<!--<div class="comment-swipe">
			<swiper :options="swiperOption" class="comment-slide-con">
	    		<swiper-slide v-for="item in commentInfo[1].imgInfo" :key="item.id">
	    			<img :src="item.imgUrl" alt="" class="swiper-img">
	    		</swiper-slide>
  			</swiper>
		</div>-->
	</div>
</template>

<script>

	import {swiper, swiperSlide} from "vue-awesome-swiper";

	export default {
		props: ['commentInfo'],

		components:{
			swiper,
			swiperSlide
		},

		data() {
			return {
				swiperOption: {
					direction: 'horizontal',
					autoHeight: true,
					observeParents: true
      			}
			}
		}
	}
</script>

<style scoped>
	.comment-swipe{
		display: none;
		position: absolute;
		left: 0;
		top: -10rem;
		z-index: 10;
		width: 100%;
		height: 30rem;
		background: #000;
		opacity: .6;
	}
	.swiper-img{
		width: 100%;
		margin-top: 10rem;
	}
	.comment-main{
		position: relative;
		width: 100%;
		background: #fff;
	}
	.comment-title{
		padding: 0 .2rem;
    	height: .88rem;
    	line-height: .88rem;
    	color: #333;
    	font-size: .3rem;
	}
	.comment-title-line{
		display: inline-block;
		width: .06rem;
    	height: .25rem;
    	background: #1ba9ba;
    	margin-right: .14rem;
	}
	.comment-border-line{
		width: 100%;
		height: 1px;
		background: #f0f0ef;
	}
	.comment-item{
		padding: .1rem .2rem .3rem .2rem;
	}
	.comment-item-title{
		margin-top: .1rem;
    	line-height: .6rem;
    	text-align: right;
	}
	.comment-item-icon{
		display: block;
		float: left;
		color: #00bcd4;
		font-size: .28rem;
	}
	.comment-visitor-value{
    	line-height: .42rem;
    	font-size: .26rem;
    	color: #616161;
	}
	.comment-vistor-img-con{
		position: relative;
		width: 100%;
		margin: .2rem 0 .1rem 0;
		zoom: 1;
    	overflow: hidden;
	}
	.comment-vistor-img{
		width: 31.3%;
		float: left;
		margin: 0 1% .1rem 1%;
	}
	.comment-vistor-img-all{
		display: block;
		position: absolute;
		bottom: .3rem;
		right: 0;
		width: .94rem;
		height: .4rem;
		line-height: .4rem;
		background: rgba(0,0,0,0.5);
		border-top-left-radius: .2rem;
    	border-bottom-left-radius: .2rem;
		color: #fff;
		text-align: right;
	}
	.comment-look-all-link{
		display: block;
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		color: #616161;
    	text-align: center;
    	font-size: .26rem;
	}
	.comment-look-all-link .iconfont{
		display: inline-block;
		margin-left: .1rem;
		font-size: .2rem;
	}
</style>