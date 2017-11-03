<template>
	<div>
		<swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide v-for="(page, index) in pages" :key="index + '_iconswiper_item'">
			    <div class="icon-container">
			    	<div class="icon-wrapper" v-for="item in page">
		    			<img :src="item.imgUrl" alt="一日游" class="icon-img">
		    			<p class="icon-title">{{item.title}}</p>
		    		</div>
			    </div>
		    </swiper-slide>
		    <div class="swiper-pagination icon-pagination"  slot="pagination"></div>
		</swiper>
		<div class="recommend border-topbottom">
	  		<div class="recommend-item" v-for="(item, index) in recommendInfo" :class="{' border-right': index == 0}">
	  			{{item.title}}
	  		</div>
  		</div>
	</div>
  	
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data(){
		return{
			swiperInfo:[{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
				title:"景点门票",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
				title:"动植物园",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
				title:"故宫",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
				title:"一日游",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
				title:"必游榜单",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png",
				title:"秋色美",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
				title:"游乐场",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
				title:"泡温泉",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
				title:"城市观光",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
				title:"玻璃栈道",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
				title:"名胜古迹",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
				title:"周边游",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
				title:"自然风光",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
				title:"古水北镇",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
				title:"景点讲解",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
				title:"全部",
				link:""
			}],
			recommendInfo:[{
				icon:"",
				"title":"附近",
				link:""
			},{
				icon:"",
				"title":"5折泡温泉",
				link:""
			}],
	        swiperOption: {
		        autoplay: false,
		        direction: 'horizontal',
		        autoHeight: true,
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        observeParents: true
	        }
		}
	},
	computed: {
		pages: function() {
			var pages = [];
			for(var i = 0; i < this.swiperInfo.length; i++) {
				var page = Math.floor(i / 8);
				if(!pages[page]) {
					pages[page] = [];
				}
				pages[page].push(this.swiperInfo[i]);
			}
			return pages;
		}
	}
}
</script>

<style scoped>
	.icon-container{
		overflow: hidden;
		height: 2.88rem;
		padding-bottom: .4rem;
	}
	.icon-wrapper{
		overflow: hidden;
		padding-top: 15px;
		width: 25%;
		float: left;
	}
	.icon-img{
		display: block;
		width: .66rem;
		margin: 0 auto;
	}
	.icon-title{
		margin-top: .2rem;
		text-align: center;
		color: #212121;
		font-size: .28rem;
	}
	.icon-pagination{
		bottom: .1rem;
	}
	.recommend{
		display: flex;
	}
	.recommend-item{
		flex: 1;
		line-height: 1rem;
		text-align: center;
	}
	
</style>
