<template>
  	<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide>
		    <div class="icon-container">
		    	<div class="icon-wrapper" v-for="item in swiperInfo">
	    			<img :src="item.imgUrl" alt="一日游" class="icon-img">
	    			<p class="icon-title">{{item.title}}</p>
	    		</div>
		    </div>
	    </swiper-slide>
	    <div class="swiper-pagination icon-pagination"  slot="pagination"></div>
	</swiper>
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
	}
}
</script>

<style scoped>
	.icon-container{
		overflow: hidden;
		padding-bottom: .4rem;
	}
	.icon-wrapper{
		overflow: hidden;
		padding-top: 15px;
		width: 25%;
		float: left;
	}
	.icon-img{
		width: .66rem;
		display: block;
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
	
</style>
