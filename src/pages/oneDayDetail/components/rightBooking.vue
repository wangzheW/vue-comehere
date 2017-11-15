<template>
<div>
	<div class="oneDay-booking" v-show="isShow">
		<div class="booking-info">
    		<h5 class="booking-title">
    			<p class="booking-ellipsis">
    				[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游
				</p>
			</h5>
    	<p class="booking-price">
        	<span class="price-yen">¥<em class="price-num" id="spucategory-price">208</em></span>
        	<span id="price-text">起/份</span>
        	<span mp-role="cashBack"></span>
    	</p>
	</div>
	<div class="order-content">
		<div>
			<div class="specifications-con">
				<div class="booking-temp">
					<div class="booking-calendar border-top">
						<h6 class="booking-note">
							日期选择
						</h6>
					<div class="booking-datecard clrfix">
						<span class="datecard datecard-disabled">
							<em class="datecard-name  ">
								今天
							</em>
							<strong class="datecard-detail first-date">
								11月10日
							</strong>
						</span>
						<span class="datecard datecard-actived">
							<em class="datecard-name datecard-name-second">
								明天
							</em>
							<strong class="datecard-detail datecard-detail-second">
								11月11日
							</strong>
						</span>
						<span class="datecard">
							<em class="datecard-name">
								后天
							</em>
							<strong class="datecard-detail ">
								11月12日
							</strong>
						</span>
						<span class="datecard datecard-wait">
							<em class="datecard-name datecard-name-last"  >
								其他日期
							</em>
							<strong class="datecard-detail"></strong>
						</span>
					</div>
				</div>
				<div class="booking-select border-top">
					<h6 class="booking-note">
						人群
					</h6>
					<div class="booking-textcard clrfix" mp-role="textList">
						<span class="play-date play-date-active adult">
							成人
						</span>
						<span class="play-date ">
							儿童
						</span>
					</div>
				</div>
				<div class="booking-select border-top">
					<h6 class="booking-note ">
						发车时间
					</h6>
				<div class="booking-textcard clrfix" >
					<span class="play-date play-date-active starting-time">
						07:30
					</span>
				</div>
			</div>
			<div class="booking-select mpf-border-top">
				<h6 class="booking-note">
					用餐
				</h6>
				<div class="booking-textcard clrfix" >
					<span class="play-date play-date-active eating">
						含餐
					</span>
				</div>
			</div>
			<div class="booking-select border-top booking-select-last">
				<h6 class="booking-note">
					服务语言
				</h6>
			<div class="booking-textcard clrfix" mp-role="textList">
				<span class="play-date play-date-active chinese">
					中文
				</span>
			</div>
		</div>
	</div>
		<div style="position: absolute; z-index: 100; width: 7px; bottom: 2px; top: 2px; right: 1px; pointer-events: none; transition-property: opacity; transition-duration: 350ms; overflow: hidden; opacity: 0;">
			<div style="position: absolute; z-index: 100; background: padding-box padding-box rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.9); box-sizing: border-box; width: 100%; border-radius: 3px; pointer-events: none; transition-property: transform; transition-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1); transform: translate(0px, 0px) translateZ(0px); height: 298px;">			
			</div>
		</div>
	</div>
	
</div>
</div>
	<div class="back iconfont icon-chahaozhuanhuan" @click="handleBookingView"></div>
</div><div class="booking-btn" id="control-booking" @click="handleGetBookingView">
		立即预订
	</div>
</div>
</template>

<script>
	export default{
		data() {

			return{
				isShow:false

			}
		},

		methods: {

			handleGetBookingView: function() {
				this.isShow = true
			},
			handleBookingView: function() {
			
				this.isShow = false
			}
		}




	}

</script>

<style scoped>
	.oneDay-booking {
		position: fixed;
	    z-index: 92;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 10.67rem;
	    background: #fff;
	}
	.booking-info {
		padding: 0 .2rem;
	}
	.booking-title {
	    margin-right: .6rem;
	    padding: .3rem 0 .1rem 0;
	    font-size: .34rem;
	    line-height: .4rem;
	}
	.booking-ellipsis {
	    overflow: hidden;
	    width: 100%;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.booking-price, .price-text {
		color: #9e9e9e;
	    font-size: .24rem;
	    line-height: .48rem;
	}
	.price-yen {
		color: #ff8300;
    	margin-right: .06rem;
	}
	.price-num {
		margin-left: .06rem;
    	font-size: .36rem;
	}
	.specifications-con {
	    height: 8.352rem;
    	overflow: hidden;
	}
	.booking-temp {
		transition-property: transform;
		transform-origin: 0px 0px 0px; 
		transform: translate(0px, -17px) scale(1) translateZ(0px);
	}
	.booking-calendar {
	    margin: .18rem .2rem 0 .2rem;
    	padding-bottom: .3rem;
	}
	.booking-note {
		padding-top: .1rem;
	    line-height: .66rem;
	    color: #333;
	    font-size: .26rem;
	}
	.datecard:first-child {
	    margin-left: 0;
	}
	.datecard {
		box-sizing: border-box;
	    float: left;
	    width: 22.5%;
	    height: .86rem;
	    margin-left: 3.33%;
	    overflow: hidden;
	    display: inline-block;
	    border: .02rem solid #bdbdbd;
	    background: #fff;
	    text-align: center;
	    border-radius: .1rem;

	}
	.datecard:nth-child(2){
		position: relative;
	    border-color: #00bcd4;
	    color: #fff;
	    background: #00bcd4;
	}
	.datecard-name {
		padding-top: .08rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .36rem;
        display: block;
   		width: 100%;
   		
	}
	.datecard:first-child{
		border-color:#dedede;
	}
	.datecard-name-second{
		color:#fff;
	}
	.datecard:first-child .datecard-name, .datecard-detail{
		color: #dedede!important
	}
	
	.datecard-name-last {
		line-height: .6rem;
	}
	.datecard-detail{
		padding-bottom: .06rem;
	    color: #888;
	    font-size: .24rem;
	    line-height: .32rem;

	}
	.clrfix:after {
	    content: " ";
	    display: block;
	    visibility: hidden;
	    height: 0;
	    clear: both;
	}
	.booking-select {
	    margin: 0 .2rem;
    	padding-bottom: .3rem;
	}

	.booking-select-last {
		padding-bottom: .6rem;
	}
	.booking-textcard {
		margin-top: -.15rem;
	}
	.play-date {
		display: inline-block;
	    float: left;
	    margin-right: .2rem;
	    margin-top: .15rem;
	    border: .02rem solid #c7ced4;
	    padding: 0 .2rem;
	    line-height: .53rem;
	    background: #fff;
	    font-size: .28rem;
	    border-radius: .1rem;
	}
	.adult, .chinese, .starting-time, .eating {
		color:#fff;
		position: relative;
	    border-color: #00bcd4;
	    color: #fff;
	    background: #00bcd4;
	}
	.booking-btn {
		display: block;
	    width: 100%;
	    border: 0 none;
	    background: #ff9800;
	    color: #fff;
	    font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
	    text-align: center;
	    bottom: 0;
	    height: 1rem;
	    position: fixed;
	    z-index: 100;
	}
	.back {
		position: absolute;
	    top: 0;
	    right: 0;
	    width: .88rem;
	    height: 1rem;
	    color: #9e9e9e;
	    font-size: .4rem;
	    line-height: 1rem;
	    text-align: center;
	}
</style>