<template>
	<div>
		<div class="list-con">
			<ul class="view-list page">
				<li class="sight-group" v-for="(item, id) in this.pages[index]" :key="item.id">
					<div class="item-content">
						<div class="sight-info">
							<a href="">

								<div class="sight-imgcon">
									<router-link to="/list">
										<img class="sight-img" :src="item.imgSrc"/>
									</router-link>
									<span class="list-bookingflag-today">
					    				<span class="list-bookingtext">可订今日</span>
					    			</span>
								</div>

								<div class="sight-detail">
									<h3 class="sight-name">{{item.scenic}}</h3>
									<span class="tag-word" v-if="item.hot">热</span>
									<span class="sight-price">￥
										<em>{{item.price}}</em>
										<span class="lowprice-text">起</span>
									</span>
									<div class="sight-comments">
										<span class="mpf-starlevel">
											<span class="mpg-iconfont mpf-starlevel-gain" :style="item.star">★★★★★</span>
						    				<span class="mpg-iconfont mpf-starlevel-total">★★★★★</span>
										</span>
										<span class="comments-totalnum">{{item.comment}}</span>
									</div>

									<div class="sight-location">
						    			<span class="sight-address">{{item.location}}</span>
						    		</div>

								</div>
							</a>
						</div>

						<div class="sight-ticket-item border-top">
							<a href="" class="mpg-linkarea">
								<h4 class="ticket-name">{{item.tourGuide}}</h4>
								<span class="ticket-qunarprice">¥
									<em>{{item.tourPrice}}</em>
								</span>
							</a>
						</div>

						<div class="sight-ticket-item border-top">
							<a href="" class="mpg-linkarea">
								<h4 class="ticket-name">{{item.navigation}}</h4>
								<span class="ticket-qunarprice">¥
									<em>{{item.navigationPrice}}</em>
								</span>
							</a>
						</div>
					</div>
				</li> 
			</ul>	

			<div class="moreinfo">
				<div class="pagination">
					<a v-bind:class="{pageup:isActiveUp}" @click="handlePageUp">上一页</a>
					<span class="page-num">{{index+1}}</span>
					<a v-bind:class="{pagedown:isActiveDown}" @click="handlePageDown">下一页</a>
				</div>
				<div class="page-text">来这儿门票</div>
			</div> 

		</div>
	</div>		
</template>

<script>

export default {
	
	data() {
		return {
			index : 0,
			isActiveUp: false,
			isActiveDown: false
		}
	},
	props: ["listcon"],
	updated() {
		if(this.index <= 0) {
			this.isActiveUp = true
		}else{
			this.isActiveUp = false
		}
		if(this.index >= this.pages.length - 1) {
			this.isActiveDown = true
		}else{
			this.isActiveDown = false
		}
	},
	methods: {
		handlePageUp() {
			this.index -- ;
			if(this.index <= 0) {
				this.index = 0;
			}
			window.scrollTo(0,0);
		},
		handlePageDown() {
			this.index ++ ;
			if(this.index >= this.pages.length) {
				this.index = this.pages.length - 1;
			}
			window.scrollTo(0,0);
		}
	},
	computed: {
		 pages() {
            const pages = [];
            for (var i = 0; i < this.listcon.length; i++) {
                let page = Math.floor(i/10);
                if(!pages[page]){
                    pages[page] = [];
                }
                pages[page].push(this.listcon[i])
            }
            return pages;
        }
	}
}
</script>

<style scoped>
	.list-con{
		position: relative;
	    top: .78rem;
	    z-index: 1;
	}
	.border-top::before {
    	border-top: 1px dashed #c9cccd;
	}
	.sight-group{	
	    margin-bottom: .2rem;
	    background: #fff;
	}
	.sight-info {
		padding: .2rem;
	}
	.sight-imgcon {
		float: left;
		position: relative;
		width: 1.6rem;
    	height: 1.6rem;
	}
	.sight-img {
		opacity: 1;
		transition: opacity 400ms;
		width: 1.6rem;
    	height: 1.6rem;
	}
	.list-bookingflag-today {
		position: absolute;
	    left: -.04rem;
	    top: -.04rem;
	    height: .24rem;
	    line-height: .24rem;
	    padding: .02rem;
		background: #fa8514;
	    color: #fff;
	}
	.list-bookingflag-today::after {
		position: absolute;
	    top: 0;
	    right: -.1rem;
	    width: 0;
	    height: 0;
		content: "";
		border-top: .14rem solid #fa8514;
    	border-bottom: .14rem solid #fa8514;
    	border-right: .1rem solid transparent;
	}
	.list-bookingtext {
		display: block;
		transform: scale(.83);
    	font-size: .24rem;	
	}
	.sight-detail {
		overflow: hidden;
		position: relative;
		height: 1.6rem;
	    padding-left: .2rem;
	}
	.sight-name{
		float: left;
		overflow: hidden;
	    max-width: 60%;
	    line-height: .36rem;
	    color: #212121;
	    font-size: .32rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.tag-word{
		display: inline-block;
		width: .3rem;
	    height: .3rem;
	    line-height: .3rem;
	    margin-left: .06rem;
	    background: #ff1200;
	    color: #fff;
	    font-size: .24rem;
	    text-align: center;
	}
	.sight-price {
	    position: absolute;
	    top: 0;
	    right: 0;
	    height: .36rem;
	    color: #ff8300;
	    font-size: .2rem;
	}
	.sight-price em {
    	font-size: .36rem;
	}
	.lowprice-text {
    	color: #9e9e9e;
	}
	.sight-comments {
		height: .64rem;
	    margin-top: .38rem;
	    line-height: .64rem;
	}	
	.mpf-starlevel {
		display: inline-block;
		position: relative;
		width: 1.2rem;
	    height: .24rem;
	    font-size: .24rem;   	
	}
	.mpf-starlevel-gain, .mpf-starlevel-total {
		overflow: hidden;
	    position: absolute;
	    top: 0;
	    left: 0;
	}
	.mpf-starlevel-gain {
		z-index: 2;
    	color: #00bcd4;
	}
	.mpf-starlevel-total {
    	color: #ddd;
	}
	.mpg-iconfont {
		line-height: 1;
		speak: none;
		font-family: monospace;
	    font-style: normal;
	    font-weight: bold;
	    font-variant: normal;
	    text-transform: none;
	    -webkit-font-smoothing: antialiased;
	}
	.mpf-starlevel-total {
		color: #ddd;
		z-index: 1;
	}
	.comments-totalnum{
		position: relative;
	    top: -.04rem;
	    margin-left: .06rem;
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	.sight-location {
	    position: absolute;
	    bottom: 0;
	    white-space: nowrap;
	    color: #9e9e9e;
	    font-size: 0; 
	}
	.sight-address {
		font-size: .24rem;
	}
	.sight-ticket-item {
	    position: relative;
	    height: .9rem;
	    margin: 0 .2rem;
	}
	.mp-page .mpg-linkarea {
	    display: block;
	    height: 100%;
	    color: inherit;
	}
	.ticket-name {
	    overflow: hidden;
	    margin-right: 1.2rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .9rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.ticket-qunarprice {
	    overflow: hidden;
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: 1.2rem;
	    height: .9rem;
	    color: #ff8300;
	    font-size: .2rem;
	    line-height: .9rem;
	    text-align: right;
	}
	.ticket-qunarprice em {
    	font-size: .36rem;
	}
	/*分页*/
	.moreinfo {
		margin: .2rem 0;
	    color: #00afc7;
	    line-height: .82rem;
	    text-align: center;
	}
	.pageup {
		display: inline-block;
	    width: 1.4rem;
	    line-height: .6rem;
	    border: .02rem solid #00afc7;
	    border-radius: .06rem;
	    background: #fff;
	    color: #00afc7;   
	}
	.pagedown{
		display: inline-block;
	    width: 1.4rem;
	    border: .02rem solid #00afc7;
	    background: #fff;
	    color: #00afc7;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.page-num {
		line-height: .6rem;
	    padding: 0 15px;
		color: #212121; 
	}
	.page-text {
		padding-top: .2rem;
	    line-height: .3rem;
	    font-size: .3rem;
	}
</style>
