<template>
<transition name="slide-fade">
	<div class="mpw-dock" v-show="see">
		
		<div class="mp-typefilter-outer">
			<ul class="mp-typefilter">

				<li class="mp-typefilter-item":class="{'mp-typefilter-itemcolor':1 == color}"@click="handleListColorChange(1)">
					<span class="iconfont icon-leimupinleifenleileibie"></span>
					<div class="mp-typefilter-info">全部分类</div>
				</li>
				<li class="mp-typefilter-item"@click="handleListColorChange(2)":class="{'mp-typefilter-itemcolor': 2 == color}">
					<span class="iconfont icon-loudou"></span>
					<div class="mp-typefilter-info">筛选</div>
				</li>
				<li class="mp-typefilter-item"@click="handleListColorChange(3)":class="{'mp-typefilter-itemcolor': 3 == color}">
					<span class="iconfont icon-shangxiajiantou"></span>
					<div class="mp-typefilter-info">推荐排序</div>
				</li>

			</ul>
			<div class="list-select border-top"v-show="1 == color">
				<div class="list-select-con">
					<div class="list-select-left">
						<div class="list-left-swiper">
							<ul class="list-left" >
								<li class="list-left-items border-right" v-for="(item, index) in itemtitle" :class="{itemactive:index == active}" @click="handleBGcolorChange(index,item.itemtitle,item.total)" :key="item.id">{{item.itemtitle}}
									<span class="items-num">{{item.total}}</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="list-select-right border-left">
						<!-- {{itemsinfo}} -->
						<div class="list-right-listpage">
							<ul class="listpage-con">
								<li class="listpage-item"@click="handleSelectType(active + 'type')">
									全部{{title}}
									<span class="listpage-num">{{num}}</span> 
								</li>
								<li class="listpage-item" v-for="(item, index) in list" @click="handleSelectType(active + 'type'+ index)">
									{{item.typename}}
									<span class="listpage-num">{{item.num}}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
	</transition>
</template>
<script>
import Bscroll from 'better-scroll'
	export default	{
		props: ["itemtitle",'itemrightlist'],
		data() {
			return ({
				color:"",		
				scroll: null,
				scrollright:null,
				see:true,
				active: "",
				sign:10,
				title:"",
				num:"",
				list:""
			})
		},
		mounted() {
			this.scroll = new Bscroll('.list-left-swiper', {
				scrollY:true,
				scrollbar:true,
				bounceTime:200
			})
			this.scrollright = new Bscroll('.list-right-listpage', {
				scrollY:true,				
				bounceTime:200
			})
			// window.onscroll = this.handleScroll;
			window.addEventListener('scroll', this.handleScroll);		  
		},
		updated() {
			this.scroll.refresh();
			this.scrollright.refresh();
		},
		beforeDestroy(){
		 	 window.removeEventListener("scroll",this.handleScroll)
		},

		methods: {
			handleScroll() {
				var scrollTop = window.pageYOffset;
				if(scrollTop > this.sign) {
			   		this.sign = scrollTop;
			   		if(this.color){
			   			this.see = true;
			   		}else{
			   		this.see = false;
			   		}
			   	}
			   	if(scrollTop < this.sign){
			   		this.sign = scrollTop;
			   			this.see = true;
			   	}
			},
			handleListColorChange(id) {				
				if(!this.color){
					this.color = id;
				}else{
					if(this.color == id){
						this.color = "";
					}else{
						this.color = id;
					}
				}		
			},
			handleBGcolorChange(index, title, num) {
				this.active = index;
				this.title = title;
				this.num = num;
				if(index == 0) {
					return ""
				}
				this.list = this.itemrightlist[index-1].spotname;

			},
			handleSelectType(num) {
				this.color = false;
			}
		}
	}
</script>
<style scoped>

	.slide-fade-enter-active {
	  transition: all .3s ease;
	}
	.slide-fade-leave-active {
	  transition: all .5s ease;
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
	  transform: translateY(0.88rem);
	  /*opacity: 0;*/
	}
	.mpw-dock{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 0.88rem;	
	}
	.mp-typefilter-outer{
		position: relative;
		height: 0.88rem;
		width: 100%;
	}
	.mp-typefilter{
		position: absolute;
		left: 0;
		bottom: 0;
		height: 0.78rem;
		width: 100%;
		padding-top: 0.1rem;
		z-index: 11;
		background: rgba(0,0,0,.8);
	}
	.mp-typefilter-item{
		float: left;
		display: inline-block;
		width: 33%;
		height: 0.88rem;
		color: #fff;
		text-align: center;
	}
	.mp-typefilter-itemcolor{
		color: #00afc7;
	}
	.mp-typefilter-item>span{
		font-size: .36rem;
	}
	.mp-typefilter-info{
		padding-top: 0.04rem;
		font-size: .24rem;
	}
	.list-select{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 6rem;
		background: #000;
	}
	.list-select-con{
		height: 5.12rem;
		width: 100%;
		background: #f4f5f6;
		display: flex;
		position: relative;
		overflow: hidden;
	}	
	.list-select-left{
		height: 5.12rem;
		width: 40%;
		position: relative;
		/*overflow: hidden;*/
	}
	.list-select-right{
		position: relative;
		height: 5.12rem;
		flex: 1; 
		background: #fff;
		padding-left: .2rem;
	}
	.list-left-swiper{
		height: 5.12rem;
		width: 100%;
		position: absolute;
		z-index: 11;
	}
	.list-left-items{
		padding: .24rem .72rem .24rem .2rem;
		font-size: .28rem;
		line-height: .4rem;
		position: relative;
	}
	.items-num{
		position: absolute;
		right: 0.2rem;
		top: 0.25rem;
	}
	.itemactive{
		background: #fff;
	}
	.list-right-listpage{
		height: 5.12rem;
		width: 100%;
		position: relative;
		background: #fff;
		overflow: hidden;
	}
	.listpage-con{
		height: 5.13rem;
		width: 100%;
		position: absolute;
		z-index: 11;
		overflow: hidden;
	}
	.listpage-item{
		padding: .24rem .72rem .24rem .1rem;
		position: relative;
	}
	.listpage-num{
		position: absolute;
		right: 0.2rem;
		top:0.3rem;
		font-size: .24rem;
	}

</style>
<style>
	.list-left-swiper .bscroll-vertical-scrollbar{
		right: -148%!important;
	}
</style>