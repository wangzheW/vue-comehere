<template>
	<div class="detail-show">
		<div class="detail-all-img" id="allImgCon" ref="abc">
			<swiper :options="swiperOption">
				<swiper-slide v-for="item in allImgInfo" :key="item.id">
					<img :src="item.imgUrl" :alt="showImg.imgAlt" class="detail-swiper-img">
					<p class="detail-swiper-page">
						<span class="detail-swiper-page-now">{{item.id}}</span>
						/
						<span class="detail-swiper-page-all">10</span>
					</p>
				</swiper-slide>
			</swiper>
		</div>
		<div class="detail-show-img-con" @click="handleShow">
			<img :src="showImg.imgUrl" :alt="showImg.imgAlt" class="detail-show-img">
		</div>

		<div class="detail-show-info">
			<div class="detail-show-info-text">{{showImg.title}}</div>
			<div class="detail-show-info-imgs">
				<span class="detail-show-info-imgs-icon iconfont">&#xe612;</span>
				<em class="detail-show-info-imgs-num">{{allImgInfo.length}}</em>
			</div>
		</div>
	</div>
</template>

<script>
	
	import "../../../assets/font/iconfont.css";
	import {swiper, swiperSlide} from 'vue-awesome-swiper';

	export default {

		props: ['showImg', 'allImgInfo'],

		data() {
			return {
				swiperOption: {
					direction: 'horizontal',
                    autoHeight: true,
                    observeParents: true,
                    controller: true
				}
			}
		},

		components: {
			swiper,
			swiperSlide
		},

		mounted() {
			var allImgCon = document.getElementById("allImgCon");
			allImgCon.addEventListener("click", this.handleHide.bind(this));
		},

		methods: {
			handleShow(){
				var allImgCon = document.getElementById("allImgCon");
				allImgCon.style.display = "block";
			},
			handleHide(){
				this.$refs.abc.style = "display=none"
			}
		}
	}

</script>

<style scoped>
	.detail-show{
		position: relative;
		width: 100%;
	}
	.detail-show:after{
		content: " ";
    	display: block;
   	 	position: absolute;
    	bottom: 0;
    	left: 0;
    	width: 100%;
    	min-height: .6rem;
    	background-color: transparent;
    	background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
	}
	.detail-show-img-con{
    	height: 0;
    	width: 100%;
    	padding-bottom: 55%;
	}
	.detail-show-img{
		width: 100%;
		vertical-align: top;
	}
	.detail-show-info{
		position: absolute;
    	right: .2rem;
    	bottom: .26rem;
    	left: .2rem;
    	min-height: .4rem;
	}
	.detail-show-info-text{
		position: relative;
    	z-index: 1;
    	margin-right: 1.4rem;
    	line-height: .4rem;
    	color: #fff;
    	font-size: .32rem;
    	text-shadow: 0 1px 2px rgba(0,0,0,0.70);
	}
	.detail-show-info-imgs{
		position: absolute;
    	right: 0;
    	top: 0;
    	width: 1.2rem;
    	height: .4rem;
    	background: rgba(0,0,0,.5);
    	border-radius: .2rem;
    	font-size: .24rem;
    	color: #fff;
    	line-height: .4rem;
    	text-align: center;
	}
	.detail-show-info-imgs-icon{
		position: relative;
    	top: .02rem;
	}
	.detail-show-info-imgs-num{
		margin-left: .1rem;
	}

	.detail-all-img{
		display: none;
		position: absolute;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		height: 400%;
		line-height: 400%;
		background: #000;
		padding-top: 3rem;
	}
	.detail-swiper-img{
		width: 100%;
	}
	.detail-swiper-page{
		margin-top: 1.4rem;
		text-align: center;
		color: #fff;
	}
	.detail-swiper-page-now,.detail-swiper-page-all{
		display: inline-block;
	}
	.detail-swiper-page-now{
		margin-right: .04rem;
	}
</style>