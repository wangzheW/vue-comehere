<template>
<div id="allTicketCon">
	<div class="ticket-main" v-for="conItem in ticketInfo" :key="conItem.id">
		<h2 class="tic-title">
			<span :class="conItem.titleIcon" class="tic-title-title-icon"></span>
			{{conItem.title}}
		</h2>
		<div class="tic-con" v-for="item in conItem.ticketValue" v-if="item.id < conItem.close" :key="item.id">
			<ul class="tic-con-for">
				<div class="ticket-border-line"></div>
				<li class="tic-item">
					<p class="tic-item-tip">
						<span class="tic-item-title">{{item.title}}</span>{{item.tip}}
					</p>
					<div class="tic-item-more">
						<div class="tic-item-money">
							￥<span class="tic-item-money-num">{{item.money}}</span>
						</div>
						<div class="tic-item-down">
							起<span class="iconfont tic-item-down-icon">&#xe647;</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="tic-more-btn" @click="handleClick($event)" v-if="conItem.ticketValue.length > 2">
			<div class="ticket-border-line"></div>
			查看剩余产品<span class="iconfont tic-more-btn-icon">&#xe647;</span>
		</div>
	</div>
</div>
</template>

<script>
	export default {

		props: ['ticketInfo'],

		data() {
			return {
				num: 3,
			}
		},

		methods: {
			handleClick(e) {
				e.target.style.display = "none";
				var boxs = document.getElementById("allTicketCon").children;
				for(let i = 0; i < boxs.length; i++){
					boxs[i].index = i;
				}
				this.ticketInfo[e.target.parentNode.index].close = 999;
			}
		}

	}
</script>

<style scoped>
	.ticket-main{
		width: 100%;
		background: #fff;
		margin-bottom: .2rem;
	}
	.tic-title{
		height: .88rem;
		line-height: .88rem;
		padding: 0 .2rem;
    	color: #333;
    	font-size: .32rem;
	}
	.ticket-border-line{
		width: 100%;
    	height: 1px;
    	background: #f0f0ef;
	}
	.tic-title-title-icon{
		color: #00bcd4;
	}
	.tic-item{
		overflow: hidden;
		margin-bottom: -.02rem;
    	padding: .24rem .2rem;
	}
	.tic-item-tip{
		float: left;
		width: 5.3rem;
		line-height: .32rem;
		font-size: .24rem;
		color: #888;
	}
	.tic-item-title{
		display: inline-block;
		margin: .1rem .1rem .14rem .1rem;
    	color: #333;
    	font-size: .3rem;
    	line-height: .48rem;
	}
	.tic-item-more{
		overflow: hidden;
		float: right;
		line-height: .64rem;
	}
	.tic-item-money{
		float: left;
    	color: #ff9800;
    	font-size: .24rem;
	}
	.tic-item-money-num{
		margin-left: .04rem;
    	font-size: .36rem;
	}
	.tic-item-down{
		float: left;
		margin-left: .04rem;
		color: #9e9e9e;
		font-size: .18rem;
	}
	.tic-item-down-icon{
		color: #bbb;
		font-size: .24rem;
	}
	.tic-more-btn{
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		color: #616161;
		text-align: center;
		font-size: .28rem;
	}
</style>