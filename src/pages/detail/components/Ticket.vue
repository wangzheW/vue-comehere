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
						<div class="tic-item-down" @click="handleShowHide($event)">
							起<span class="iconfont tic-item-down-icon">&#xe647;</span>
						</div>
					</div>
				</li>
				<ul class="tic-hide-list">
					<li class="tic-hide-item" v-for="item in conItem.hideInfo" :key="item.id">
						<div class="tic-hide-text">
							<span class="tic-hide-text-title">{{item.title}}</span>
							<p class="tic-hide-text-tip">{{item.tip}}</p>
							<ul>
								<li class="tic-hide-tip-con">
									<span class="iconfont icon-shijian tic-hide-text-icon"></span>{{item.iconOV}}
								</li>
								<li class="tic-hide-tip-con">
									<span class="iconfont icon-duigou tic-hide-text-icon"></span>{{item.iconTV}}
								</li>
							</ul>
						</div>
						<div class="tic-hide-button">
							<p class="tic-hide-money">
								<span class="tic-hide-money-mark">￥</span>{{item.money}}
							</p>
							<div class="tic-hide-btn">预订</div>
						</div>
					</li>
				</ul>
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
				num: 3
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
			},

			handleShowHide(e){
				//this.$store.dispatch
			}
		}

	}
</script>

<style scoped>
	.tic-hide-list{
		display: none;
		float: left;
		width: 100%;
		background: #f5f5f5;
	}
	.tic-hide-item{
		padding: .25rem;
	}
	.tic-hide-text{
		float: left;
		width: 70%;
	}
	.tic-hide-text-title{
		display: inline-block;
		overflow: hidden;
		line-height: .34rem;
		max-width: 2.5rem;
		padding: 0 .2rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #666;
	}
	.tic-hide-text-tip{
		color: #888;
		font-size: .24rem;
		line-height: .36rem;
		padding-bottom: .08rem;
	}
	.tic-hide-tip-con{
		float: left;
		line-height: .32rem;
		margin-right: .24rem;
		color: #616161;
		font-size: .24rem;
		white-space: nowrap;
	}
	.tic-hide-text-icon{
		display: inline-block;
		margin-right: .08rem;
		color: #1ba9ba;
		font-size: .2rem;
	}
	.tic-hide-button{
		box-sizing: border-box;
		width: 30%;
		padding-left: .2rem;
		float: left;
		text-align: center;
	}
	.tic-hide-money{
		width: 100%;
		height: .32rem;
		line-height: .3rem;
		color: #ff9800;
	}
	.tic-hide-money-mark{
		display: inline-block;
		margin-right: .04rem;
		font-size: .24rem;
		line-height: .28rem;
	}
	.tic-hide-btn{
		height: .6rem;
		background: #ff9800;
		color: #fff;
		font-size: .28rem;
		line-height: .6rem;
	}



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
		overflow: hidden;
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		color: #616161;
		text-align: center;
		font-size: .28rem;
	}
</style>