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
		<!-- <div class="recommend border-topbottom">
	  		<div class="recommend-item" v-for="(item, index) in recommends" :class="{' border-right': index == 0}">
	  			{{item.title}}
	  		</div>
  		</div> -->
	</div>
  	
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data(){
		return{
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
			for(var i = 0; i < this.icons.length; i++) {
				var page = Math.floor(i / 8);
				if(!pages[page]) {
					pages[page] = [];
				}
				pages[page].push(this.icons[i]);
			}
			return pages;
		}
	},
	props:["icons"]
}
</script>

<style scoped>
	.icon-container{
		overflow: hidden;
		height: 2.88rem;
		padding-bottom: .4rem;
		background: #fff;
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
		background: #fff;
	}
	.recommend-item{
		flex: 1;
		line-height: 1rem;
		text-align: center;
	}
	
</style>
