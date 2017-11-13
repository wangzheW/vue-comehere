<template>
	<div class="detail-tip-main">
		<div class="all-screen-tip" id="allScreenTip">
			<div class="all-screen-tip-value">
				<span class="iconfont all-screen-tip-value-ico">&#xe614;景区公告</span>
			</div>
			<p class="all-screen-tip-value-text">{{buyTipInfo.value}}</p>
			<span class="all-screen-tip-button" @click="handleClose">X</span>
		</div>
		<p class="detail-tip-con" @click="handleOpen">
			<span class="iconfont detail-tip-icon-talk">&#xe614;</span>
			{{buyTipInfo.value}}
			<span class="iconfont detail-tip-icon-right">&#xe60b;</span>
		</p>
	</div>
</template>

<script>
	export default {
		props: ['buyTipInfo'],
		methods: {
			handleOpen(){
				const tip = document.getElementById("allScreenTip");
				tip.style.display = "block";
			},
			handleClose(){
				const tip = document.getElementById("allScreenTip");
				tip.style.display = "none";
			}
		}
	}
</script>

<style scoped>
	.detail-tip-main{
    	height: .88rem;
    	line-height: .88rem;
    	color: #f1441a;
    	margin-bottom: .2rem;
    	background-color: #fdeede;
	}
	.detail-tip-con{
		position: relative;
		padding-left: .23rem;
		overflow: hidden;
		padding-right: .6rem;
    	white-space: nowrap;
    	text-overflow: ellipsis;
	}
	.detail-tip-icon-talk{
		color: #f67353;
    	margin-right: .1rem;
	}
	.detail-tip-icon-right{
		position: absolute;
		top: 0;
		right: .2rem;
    	color: #c7bcaf;
	}

	.all-screen-tip{
		display: none;
		position: fixed;
		top: -2rem;
		z-index: 10;
		width: 100%;
		height: 150%;

		overflow: hidden;
		background: rgba(255,255,255,0.9);
		text-align: center;
	}
	.all-screen-tip-value{
		margin-top: 3.8rem;
	}
	.all-screen-tip-value-ico{
		font-size: .44rem;
	}
	.all-screen-tip-value-text{
		line-height: .46rem;
    	color: #333;
    	font-size: .28rem;
    	margin-top: .5rem;
	}
	.all-screen-tip-button{
		display: inline-block;
		width: .3rem;
		height: .3rem;
		line-height: .32rem;
		margin-top: 5.6rem;
		border-radius: 50%;
		border: .02rem #333 solid;
		color: #333;
	}
</style>