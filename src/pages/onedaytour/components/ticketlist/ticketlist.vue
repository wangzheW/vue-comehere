<template>
		<div class="ticketCon">
			<ul class="ticket-list">
				<li class="ticket-list-item" v-for="item in spotitemlist" :key="item.id">
					<router-link to="/oneDayDetail" class="routedetail">
					<div class="ticket-list-imgcon">
						<img class="ticket-list-img" v-lazy="item.imgUrl" alt="">
						<span class="ticket-list-bookingflag" v-if="item.bookingflag">
							<span class="ticket-list-bookingtext">可定明日</span>
						</span>
					</div>
					<div class="ticket-list-productinfo">
						<h4 class="ticket-list-producttitle">{{item.producttitle}}</h4>
						<div class="mp-list-taglist">
							<span class="mp-list-tagitemlight border-right"v-if="item.zero">北京出发</span>
							<span class="mp-list-tagitem border-right"v-if="item.costself">无自费</span>
							<span class="mp-list-tagitem"v-if="item.shopping">无购物</span>
						</div>
						<div class="mp-list-priceinfo">
							<span class="pricetap">￥</span><i class="priceweight">{{item.price}}</i><span class="pricelow">起</span>
						</div>
						<div class="mp-list-moreinfo">
							<span class="mp-list-text border-left">已售{{item.volume}}</span>
						</div>
					</div>
					</router-link>
				</li>
			</ul>
		</div>
</template>
<script>
	export default	{
		props: ["spotitemlist"]
	}
</script>
<style scoped>
	.ticketCon{
			min-height: 15rem;
		}
	.ticket-list-item{
		/*display: flex;*/
		width: 100%;
	}
	.routedetail{
		display: flex;
		width: 100%;
	}
	.ticket-list-imgcon{
		width: 1.6rem;
		height: 1.6rem;
		margin: 0.2rem;
		/*float: left;*/
		position: relative;
	}
	.ticket-list-img{
		height: 100%;
		width: 100%;
		opacity: 0;
	}
	.ticket-list-img[lazy=loading] {
    /*your style here*/
    	opacity: 0;
    	/*background: red;*/
    	/*transition: opacity 2s;*/
	  }
	  .ticket-list-img[lazy=error] {
	    /*your style here*/
	  },
	  .ticket-list-img[lazy=loaded] {
	    /*your style here*/
	    opacity: 1;
	    transition: opacity 4s;
	  }
	.ticket-list-productinfo{
		/*background: pink;*/
		flex: 1;
		padding: .2rem .2rem .2rem 0;
		position: relative;
	}
	.ticket-list-producttitle{
		font-size: .3rem;
		line-height: .36rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
	}
	.mp-list-taglist{
		font-size: .24rem;
		padding-top: .06rem;
	}
	.mp-list-tagitemlight{
		color: #00bcd4;
		padding:  0 .1rem;
	}
	.mp-list-tagitem{
		padding:  0 .1rem;
	}
	.mp-list-priceinfo{
		position: absolute;
		right: 0.3rem;
		bottom: 0.3rem;	
	}
	.pricetap{
		color: #ff8300;
		font-size: .24rem;
		font-weight: 900;
	}
	.priceweight{
		color: #ff8300;
		font-size: .32rem;
		font-weight: 900;
	}
	.pricelow{
		font-size: .24rem;
		color: #aaa;
	}
	.mp-list-moreinfo{
		position: absolute;
		bottom: 0.2rem;
		left: 0;
		font-size: .24rem;
		color: #aaa;
	}
	.mp-list-text{
		padding: 0 .02rem;
	}
	.ticket-list-bookingflag{
		position: absolute;
		left: -0.04rem;
		top: -0.04rem;
		background: #00bcd4;
		line-height: .24rem;
		padding: .02rem;
	}
	.ticket-list-bookingtext{
		display: block;
		font-size: .24rem;
		color: #fff;
		line-height: .24rem;
		transform: scale(.83);
	}
	.ticket-list-bookingflag::after{
		content: "";
	    position: absolute;
	    top: 0;
	    right: -.1rem;
	    width: 0;
	    height: 0;
	    border-top: .14rem solid #00bcd4;
	    border-bottom: .14rem solid #00bcd4;
	    border-right: .1rem solid transparent;
	}

</style>