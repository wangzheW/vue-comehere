<template>
	<div class="will-like-main">
		<h2 class="wl-title">
			<span class="wl-title-line"></span>看了该景点的人还看了
		</h2>
		<div class="wl-border-line"></div>
		<div class="wl-con">
			<div class="wl-item" v-for="item in moreInfo" :key="item.key">
				<router-link :to="item.link" class="wl-item">
					<img :src="item.imgUrl" alt="" class="wl-img">
					<div class="wl-text">
						<div class="wl-text-title">
							{{item.title}}<span class="wl-text-title-a">{{item.level}}</span>
						</div>
						<div class="wl-text-money">
							<em class="wl-text-money-mark">￥</em>
							<span class="wl-text-money-num">{{item.money}}</span>
							起
						</div>
						<div class="wl-comment-level">
							<span :class="item.star" class="wl-comment-level-icon"></span>
							<span class="wl-comment-num">{{item.num}}条评论</span>
						</div>
						<div class="wl-text-address">{{item.address}}</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>

	import { mapGetters } from 'vuex'

	export default{

		computed: mapGetters(['moreInfo'])

	}
</script>

<style scoped>
	.will-like-main{
		width: 100%;
		background: #fff;
	}
	.wl-title{
		padding: 0 .2rem;
    	height: .88rem;
    	line-height: .88rem;
    	color: #333;
    	font-size: .3rem;
	}
	.wl-title-line{
		display: inline-block;
		width: .06rem;
    	height: .25rem;
    	background: #1ba9ba;
    	margin-right: .14rem;
	}
	.wl-border-line{
		width: 100%;
		height: 1px;
		background: #f0f0ef;
	}
	.wl-img{
		margin: .2rem .2rem 0 .2rem;
    	width: 1.62rem;
    	height: 1.62rem;
    	float: left;
	}
	.wl-text{
		position: relative;
		padding-top: .2rem;
    	margin-left: 2.02rem;
    	height: 1.8rem;
	}
	.wl-text-title{
		position: absolute;
    	top: .2rem;
		left: 0;
		right: 1.5rem;
		height: .4rem;
		line-height: .4rem;
		font-size: .3rem;
		color: #212121;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.wl-text-title-a{
		color: #adadad;
	}
	.wl-text-money{
		position: absolute;
		right: .2rem;
		top: .2rem;
		line-height: .4rem;
		vertical-align: baseline;
		color: #9e9e9e;
	}
	.wl-text-money-mark,.wl-text-money-num{
		color: #ff9800;
	}
	.wl-text-money-num{
		font-size: .36rem;
	}
	.wl-comment-level{
		position: absolute;
    	top: 1rem;
    	left: 0;
	}
	.wl-comment-level-icon{
		display: inline-block;
    	position: relative;
    	width: 1.4rem;
    	height: .28rem;
		color: #00afc7;
	}
	.wl-comment-num{
		margin-left: .1rem;
    	line-height: .28rem;
    	font-size: .24rem;
    	vertical-align: middle;
    	color: #9e9e9e;
	}
	.wl-text-address{
		position: absolute;
		bottom: .24rem;
		left: 0;
		padding: 0 .04rem 0 .1rem;
		color: #9e9e9e;
		font-size: .24rem;
	}
</style>