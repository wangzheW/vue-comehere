<template>
  	<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide v-for="item in swiperInfo">
	    	<div class="img-wrapper">
	    		<img class="swiper-img" :src="item.imgUrl" alt="来这儿门票">
	    	</div>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data(){
		return{
			swiperInfo:[{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/f5/57137c621d75ba02.jpg_640x200_b984ddf7.jpg",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/16/249e5d9c533f6e02.jpg_640x200_9d63493e.jpg",
				link:""
			},{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/16/1d7693c6bd8abd02.png_640x200_43c308dd.png",
				link:""
			}],
	        swiperOption: {
	        	loop:true,
		        autoplay: 3000,
		        direction: 'horizontal',
		        autoHeight: true,
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        observeParents: true
	        }
		}
	}
}
</script>

<style scoped>
	.img-wrapper{
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.swiper-img{
		width: 100%;
	}
</style>
