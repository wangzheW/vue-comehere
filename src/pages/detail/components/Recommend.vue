<template>
	<div class="recommend-main">
		<h2 class="rec-title">
			<span class="iconfont rec-title-icon">&#xe64f;</span>
			去哪儿推荐
		</h2>
		<div class="rec-con">

			<div v-for="item in recommendInfo" :key="item.id" class="rec-ticket-con">
				<div class="rec-ticket-text">
					<p class="rec-ticket-title">{{item.value}}</p>
					<ul class="rec-ticket-tip">
						<li class="rec-ticket-tip-value">
							<span :class="item.choseIcon" class="rec-ticket-tip-value-icon"></span>{{item.chose}}
						</li>
						<li class="rec-ticket-tip-value">
							<span :class="item.conditionIcon" class="rec-ticket-tip-value-icon"></span>{{item.condition}}
						</li>
						<li class="rec-ticket-tip-value">
							<span :class="item.otherIcon" class="rec-ticket-tip-value-icon"></span>{{item.other}}
						</li>
					</ul>
				</div>
				<div class="rec-ticket-money">
					<p class="rec-ticket-money-num">
						<span class="rec-ticket-money-mark">￥</span>
						{{item.money}}
					</p>
					<div class="rec-ticket-money-btn">{{item.btn}}</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		props: ['recommendInfo']
	}
</script>

<style scoped>
	.recommend-main{
		width: 100%;
		background: #fff;
		margin-bottom: .2rem;
	}
	.rec-title{
		height: .88rem;
		line-height: .88rem;
		padding: 0 .2rem;
		color: #333;
    	font-size: .32rem;
    	border-bottom: 1px solid #dadada;
	}
	.rec-title-icon{
		font-size: .42rem;
		color: red;
	}
	.rec-ticket-con{
		overflow: hidden;
		width: 100%;
		padding: .2rem .2rem .24rem .2rem;
	}
	.rec-ticket-text{
		float: left;
		width: 70%;
		line-height: .36rem;
		padding: .08rem 0;
    	color: #333;
    	font-size: .32rem;
	}
	.rec-ticket-title{
		width: 100%;
    	line-height: .52rem;
    	margin-right: .1rem;
    	padding: 0;
    	font-size: .3rem;
    	color: #333;
	}
	.rec-ticket-tip{
		padding: .04rem 0 .08rem 0;
	}
	.rec-ticket-tip-value{
		float: left;
		margin-right: .24rem;
		color: #616161;
    	font-size: .24rem;
    	line-height: .32rem;
    	white-space: nowrap;
	}
	.rec-ticket-tip-value-icon{
		display: inline-block;
		margin-right: .08rem;
    	color: #1ba9ba;
    	font-size: .2rem;
	}

	.rec-ticket-money{
		width: 30%;
		float: right;
	}
	.rec-ticket-money-num{
		font-size: .32rem;
    	line-height: .3rem;
    	text-align: center;
		color: #ff9800;
	}
	.rec-ticket-money-mark{
		display: inline-block;
		line-height: .28rem;
		font-size: .24rem;
	}
	.rec-ticket-money-btn{
		width: 1.61rem;
		height: .6rem;
    	background: #ff9800;
    	color: #fff;
    	font-size: .28rem;
    	line-height: .6rem;
    	border-radius: .06rem;
    	text-align: center;
	}
</style>