<template>
	<div class="index-prompt">
		<div class="index-prompt-top">
			<div class="index-prompt-top-left">
				<span class="index-prompt-iconfont iconfont">&#xe611;</span>
				<span>定位失败</span>	
			</div>
			<div class="index-prompt-top-right">
				<router-link :to="PromptTopLink" class="index-prompt-top-value">
					<span class="iconfont">&#xe64d;</span>
					<span>{{PromptTopText}}</span>
				</router-link>
			</div>
		</div>
		<div class="index-prompt-bottom">
			<div v-for="item in PromptBottomData" :key="item.id" class="index-prompt-bottom-con">
				<div class="index-prompt-bottom-active">
					<p class="index-prompt-bottom-active-title">
						<router-link :to="item.link" class="index-prompt-bottom-active-link">{{item.activeTitle}}</router-link>
					</p>
					<p class="index-prompt-bottom-active-value">
						<router-link :to="item.link" class="index-prompt-bottom-active-link">{{item.activeValue}}</router-link>
					</p>
				</div>
				<router-link :to="item.link">
					<img :src="item.imgUrl" alt="" class="index-prompt-bottom-img">
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>

	import "../../assets/font/iconfont.css";
	import imgLeft from "../../assets/imgs/index-prompt-left.jpg";
	import imgRight from "../../assets/imgs/index-prompt-right.jpg";

	export default{
		data() {
			return {
				PromptTopLink: "/PromptActiveLink",
				PromptTopText: "5折泡温泉",
				PromptBottomData: [{
					id: 1,
					link: "/PromptActiveLink/1",
					activeTitle: "精选温泉",
					activeValue: "5折开泡",
					imgUrl: imgLeft
				},{
					id: 2,
					link: "/PromptActiveLink/2",
					activeTitle: "金秋大促",
					activeValue: "门票1元起",
					imgUrl: imgRight
				}]
			}
		}
	}

</script>

<style scoped>
	.index-prompt{
		width: 100%;
		height: 2.6rem;
		background: #f5f5f5;
	}
	.index-prompt-top{
		box-sizing: border-box;
		width: 100%;
		height: 1rem;
		border-top: .02rem solid #e0e0e0;
		background: #fff;
	}
	.index-prompt-top-left{
		float: left;
		box-sizing: border-box;
		width: 50%;
		height: 1rem;
		line-height: 1rem;
		border-right: .02rem solid #e0e0e0;
    	font-size: .28rem;
    	color: #212121;
    	text-align: center;
	}
	.index-prompt-top-right{
		float: left;
		width: 50%;
		height: 1rem;
		line-height: 1rem;
		font-size: .28rem;
    	color: #212121;
    	text-align: center;
	}
	.index-prompt-iconfont{
		display: inline-block;
		margin-right: .05rem;
    	color: #616161;
    	font-size: .32rem;
	}
	.index-prompt-top-value{
		color: #212121;
	}
	.index-prompt-bottom{
		box-sizing: border-box;
		width: 100%;
		height: 1.4rem;
		margin-top: .2rem;
		border-bottom: .02rem solid #e0e0e0;
		background: #fff;
	}
	.index-prompt-bottom-con{
		box-sizing: border-box;
		float: left;
		width: 50%;
		height: 1.4rem;
		border-right: .02rem solid #e0e0e0;
		text-align: center;
	}
	.index-prompt-bottom-active{
		width: 50%;
		float: left;
	}
	.index-prompt-bottom-img{
		float: left;
	}
	.index-prompt-bottom-active-title{
		margin-top: .2rem;
	}
	.index-prompt-bottom-active-title .index-prompt-bottom-active-link{
		color: red;
		font-size: .32rem;
	}
	.index-prompt-bottom-active-value .index-prompt-bottom-active-link{
		color: #ccc;
		line-height: .6rem;
	}
	.index-prompt-bottom-img{
		margin: .16rem 0 0 .3rem;
	}
</style>