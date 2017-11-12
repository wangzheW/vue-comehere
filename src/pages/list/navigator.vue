<template>
	<div>
		<div class="nav" :class="{'nav-position': navStyle}">

			<div class="primary-nav border-topbottom">
				<div class="primary-item border-right" @click="handleClassifyClick">
					<span>{{allclassfiy}}</span>
					<span class="classify-show"></span>
					<span class="classify-hide"></span>
				</div>
				<div class="primary-item" @click="handleRecommendClick">
					<span>{{allrecommend}}</span>
					<span class="classify-show"></span>
					<span class="classify-hide"></span>	
				</div>
			</div>

			<div class="menu-wrapper-left" v-show="menuShow">
				<div class="menu-item-left">
					<div :class='{"menu-item":true, "border-bottom":true, "checked":check[id]}' v-for="(item, id) in menuItemInfo" @click="handleMenuItemClick(id)">
						<img class="menu-item-icon" :src="item.icon">
						{{item.title}}
						<span class="menu-item-num">{{item.itemnum}}</span>
					</div>
				</div>
			</div>

		
			<div class="recommend-wrapper" v-show="recommendShow">
				<div class="recommend-scroll" @click="handleRecommendItemClick">
					<div class="recommend border-bottom"  @click="handlerecommendChecked(recommendA)">{{recommendA}}</div>
					<div class="recommend border-bottom"  @click="handlerecommendChecked(recommendB)">{{recommendB}}</div>
					<div class="recommend border-bottom"  @click="handlerecommendChecked(recommendC)">{{recommendC}}</div>
				</div>
			</div>
			
			<menuright :menuRightInfo="menuRightInfo" :menuShow="menuShow" @menuRightClick="handlemenuRightItemClick"></menuright>
		</div>
	</div>
	
</template>

<script>

import IScroll from 'better-scroll'
import menuright from './menuright'

export default {
	data () {
	    return {
	    	i: 0,
	    	allclassfiy:"全部分类",
	    	allrecommend: "推荐排序",
	    	recommendA: "推荐排序",
	    	recommendB: "离我最近",
	    	recommendC: "人气最高",
	    	navStyle: false,
	    	menuRightInfo: [],
	    	check: [true],
	    	scroll1: null,
	    	scroll2: null
	    }
	},

	created() {
		var height = 44;
		window.onscroll = function() {
			var sTop = document.body.scrollTop || document.documentElement.scrollTop;
			if( sTop > height) {
				this.navStyle = true;
			}else{
				this.navStyle = false;
			}
		}.bind(this)
	},

	mounted() {
		var that = this;
		this.createIscroll();
		window.bus.$on("menuRightClick", function(res){
			that.allclassfiy = res;
		})
	},

	updated(){
		this.scroll1.refresh();
        this.scroll2.refresh();	
	},

	props: ["menuShow", "menuItemInfo", "recommendShow"],

	methods:{
		createIscroll() {
			this.scroll1 = new IScroll('.menu-wrapper-left', {
				scrollX:false, 
				scrollY:true
			})
			this.scroll2 = new IScroll('.recommend-wrapper', {
				scrollX:false, 
				scrollY:true
			})
		},
		handleClassifyClick() {
			this.$emit("classifyClick");
		},
		handleRecommendClick() {
			this.$emit("recommendClick");	
		},
		handleMenuItemClick(id){
	  		this.check = [];
	  		this.check[id] = true;
	  		this.i = id;
		  	this.$http.get('/static/list.json').then(response => {
	        this.menuRightInfo = response.body.data.menuItemInfo[this.i].content;
		    }, response => {
		        console.log("get list data error");
		    })
		},
		handleRecommendItemClick(res) {	
			this.$emit("recommendItemClick");
		},
		handlerecommendChecked(arr) {
			this.allrecommend = arr;
		},
		handlemenuRightItemClick() {
			this.$emit("menuRightItemClick");
		}	
	},
	components: {
		"menuright" : menuright
	},
	destroyed() {
		window.onscroll = null;
	}
}
</script>

<style scoped>
	.nav{
		position: absolute;
		width: 100%;
		z-index:5;
	}
	.nav-position{
		position: fixed;
		top: 0;
		left: 0;
	}
	.primary-nav{
		display: flex;
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		font-size: .28rem;
		background: #fff;
	}
	.primary-item{
		flex: 1;
		position: relative;
		text-align: center;
	}
	.classify-show{
		display: inline-block;
		border: .08rem solid transparent;
		border-top-color: #666;	
	}
	/*一级导航样式*/
	.mask{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 0;
		background: rgba(0,0,0, .35);
	}
	/*右侧推荐排序导航栏*/
	.recommend-wrapper{
		overflow: hidden;
		width: 100%;
		height: 2.38rem;
		background: #fff;
	}
	.recommend-scroll{
		height: 2.4rem;
	}
	.recommend{
		height: .8rem;
		line-height: .8rem;
		text-align: center;
	}
	.recommend-checked{
		background: #f1f1f1;
	}
	/*左侧menu*/
	.menu-wrapper-left{
		overflow: hidden;
		width: 50%;
		height: 4.8rem;
		background: #fff;
	}
	.menu-item-left{
		width: 100%;
		min-height: 100%;
		background: #fff;	
	}
	.menu-item{
		height: .8rem;
		line-height: .8rem;
		font-size: 12px;
	}
	.menu-item-icon{
		vertical-align: middle;
		width: .3rem;
	    height: .3rem;   
	    margin-right: .1rem;
	    padding-left: .3rem;
	}
	.menu-item-num{
		float: right;
   		margin-right: .2rem;
    	font-size: .24rem;
    	color: #9e9e9e;
	}
	.checked{
		background: #f1f1f1;
	}
	
</style>
