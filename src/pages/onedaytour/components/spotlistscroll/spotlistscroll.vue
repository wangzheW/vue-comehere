<template>
	<div class="mp-tagfilter-outer">
		<div class="mp-tagfilter-list" :class="{'mp-tagfilter-list-unfold':unfold}">
			<h4 class="mp-spot" v-show="spot">游玩景点<span class="mp-spot-many">(可多选)</span></h4>
			<span :class="{iconfont:true,'icon-xia':gate,'icon-shang':!gate}" @click="handleTourSpot"></span>
			<div class="mp-tagfilter-contain">
				<div class="mp-tagfilter-wrapper">
					<ul class="tagfilter-listcon">
						<li class="tagfilter-list" :class="{'mp-tagfilter-selected':selectedChange(index)}" v-for="(items, index) in spotlist" :key="items.id"@click="handleBgchange(index)">
							<span class="tagfilter-listinfo border">{{items.spot}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="coverpage" v-show="cover" @click="handleTourSpot"></div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default {
		props: ['spotlist'],
		data() {
			return ({
				spot:false,
				gate:true,
				unfold:false,
				cover:false,
				scroll:null,
				selected: -1,
				listarray: []
			})
		},

		methods: {
			selectedChange(num) {
				var flag = false;
				for (var i = 0; i < this.listarray.length; i++) {
					if(this.listarray[i] == num) {
						flag = true;
					}
				}
				return flag;
			},
			handleBgchange: function(index) {
				for (var i = 0; i < this.listarray.length; i++) {
					if(this.listarray[i] == index) {
						this.listarray.splice(i, 1)
						return false;
					}
				}
				this.listarray.push(index)
			},
			handleTourSpot: function() {
				this.spot = !this.spot;
				this.gate = !this.gate;
				this.unfold = !this.unfold;
				const that = this;
				this.scroll.options.scrollX = false;
				this.scroll.options.scrollY = true;
				this.cover = !this.cover;
				// if(this.spot){
				// 	this.scroll.options.scrollX = false;
				// 	this.scroll.options.scrollY = true;
				// }else{
				// 	this.scroll.options.scrollX = true;
				// 	this.scroll.options.scrollY = false;
				// }
				this.scroll.destroy();
				this.scroll = null;

				if(this.spot){
					this.scroll = new BScroll('.mp-tagfilter-contain',{
								scrollX: false,
								scrollY: true
									})
				}else{
					this.scroll = new BScroll('.mp-tagfilter-contain',{
								scrollX: true,
								scrollY: false
							})
				}	
				setTimeout(function () {
			        that.scroll.refresh();
			    }, 0)
			}
		},
		updated() {
			this.scroll.refresh();
		},
		mounted() {
			this.scroll = new BScroll('.mp-tagfilter-contain',{
								scrollX: true,
								scrollY: false,
								probeType: 3
							})
		}
	}
</script>
<style scoped>
	.mp-tagfilter-outer{
		height: 0.88rem;
		background: #e5e7e8;
		position: relative;
	}
	.mp-tagfilter-list{
		padding-right: .8rem;
		min-height: 0.66rem;
		/*padding: 0.08rem 0.12rem;*/
		overflow: hidden;
		/*float: left;*/
		position: relative;
		z-index: 6;
		background: #e5e7e8;
	}
	.mp-tagfilter-list-unfold{
		margin: 0;
		padding: 0;
	}
	.mp-tagfilter-contain{
		overflow: hidden;
		height: .64rem;
		padding: 0.08rem 0.12rem;
	}
	.mp-tagfilter-list-unfold .mp-tagfilter-contain{
		overflow: hidden;
		height: 6rem;
		width: 100%;
	}
	.mp-tagfilter-wrapper{
		float: left;
	}
	.tagfilter-listcon{
		float: left;
		white-space: nowrap;
		/*height: .64rem;*/
		font-size: 0;
	}
	.mp-tagfilter-list-unfold .tagfilter-listcon{
		float: left;
		white-space: normal;
		/*height: .64rem;*/
		font-size: 0;
	}
	.tagfilter-list{
		display: inline-block;
		font-size: .28rem;
		padding: .04rem .08rem;
		/*line-height: 1;*/
		position: relative;
	}
	.mp-tagfilter-list-unfold .tagfilter-list{

		padding: .08rem .08rem;
		/*line-height: 1;*/
	}
	.tagfilter-listinfo{
		display: block;
		line-height: .56rem;
		padding: 0 .22rem;
		background: #fff;
		border-radius: .04rem;
	}
	.coverpage{
		position: fixed;
		left: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,.45);
		z-index: 5;
	}
	.tagfilter-listvalcon{
		float: left;	
		height: .64rem;
		font-size: 0;
	}	
	.mp-spot{
		font-size: .28rem;
		height: .8rem;
		line-height: .8rem;
		padding-left: .2rem;
	}
	.mp-spot-many{
		font-size: .24rem;
	}
	.icon-xia{
		position: absolute;
		right: 0;
		top: 0;
		display: block;
		height: .8rem;
		width: .8rem;
		color: #bbb;
		line-height: .8rem;
		text-align: center;
		background: #e5e7e8; 
		z-index: 10;
	}
	.icon-shang{
		position: absolute;
		right: 0;
		top: 0;
		display: block;
		height: .8rem;
		width: .8rem;
		color: #bbb;
		line-height: .8rem;
		text-align: center;
		background: #e5e7e8; 
		z-index: 10;
	}
	.oneday-page{
		background: #f5f5f5;
	}
	.mp-tagfilter-selected .border::before{
		
		border-color: #00afc7;
	}
	.mp-tagfilter-selected::after{
		content: '√';
		display: block;
	    position: absolute;
	    z-index: 12;
	    width: .18rem;
	    height: .18rem;
	    right: .08rem;
	    bottom: .04rem;
	    color: #fff;
	    background: #28a9b9;
	    font-family: 'mpiconfont';
	    speak: none;
	    font-size: .24rem;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
	}
	
</style>