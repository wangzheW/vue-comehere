<template>
	<div class="comment-swiper">
		<div id="comSwiper">
			<swiper :options="swiperOption" class="comment-slide-con" id="comSlideCon" ref="aaa">
	    		<swiper-slide v-for="item in imgInfo" :key="item.id" class="det-com-slide">
	    			<img :src="item.imgUrl" alt="" class="swiper-img">
	    		</swiper-slide>
  			</swiper>
		</div>
  		<p class="swiper-page">
  			<span class="swiper-page-now">{{num}}</span>
  			<span>/</span>
  			<span>{{imgInfo.length}}</span>
  		</p>
	</div>
</template>

<script>
	import {swiper, swiperSlide} from "vue-awesome-swiper";

	export default {

		props: ['commentInfo'],

		components:{
			swiper,
			swiperSlide
		},

		data() {
			return {
				num: 1,
				imgInfo: this.commentInfo[this.$route.query.id].imgInfo,
				swiperOption: {
					direction: 'horizontal',
					autoHeight: true,
					observeParents: true
      			}
			}
		},

		mounted() {
			this.handleSlideChange();
			var swiperCon = document.getElementById("comSwiper");
			swiperCon.addEventListener('click', this.handleBack);
			var showImgs = document.getElementsByClassName("swiper-img");
		},

		methods: {
			handleSlideChange() {
				console.log(1);
				var that = this;
				const mySwiper = new Swiper('.comment-slide-con',{
					onTouchEnd: function(swiper,index){
						/*var slides = document.getElementsByClassName("det-com-slide");
						var activeSlide = document.getElementsByClassName("det-com-slide swiper-slide-active");
						for(var i = 0; i < slides.length; i++){
							slides[i].index = i;
							for(var i = 0; i < slides.length; i++){
								console.log(1);
								if(activeSlide == slides[i]){
									console.log(2);
									that.num = slides[i] + 1;
									return 0;
								}
							}
						}*/
						console.log(index);
						console.log(swiper);
						console.log(swiper.activeIndex);
						that.num = swiper.activeIndex;
					}
				});
			},

			handleBack() {
				history.go(-1);
			}
		}
	}
	
</script>

<style scoped>
	.comment-swiper{
		overflow: hidden;
		width: 100%;
		height: 18rem;
		background: #000;
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
	}
	.swiper-img{
		width: 100%;
		margin-top: 3.6rem;
	}
	.swiper-page{
		color: #fff;
		text-align: center;
		margin-top: 2.8rem;
	}
</style>