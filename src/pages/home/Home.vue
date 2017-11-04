<template>
  	<div class="main">
		<index-header/>
		<imgs-swiper :data="swiperInfo" />
		<icons-swiper :icons="iconInfo" :recommends="recommendInfo"/>
		<ads/>
	</div>
</template>

<script>

import header from "./Header.vue";
import imgswiper from "./imgswiper.vue";
import iconswiper from "./iconswiper.vue";
import ads from "./ads.vue";


export default {
	created:function() {
		this.$http.get('/static/index.json').then(response => {
			this.swiperInfo = response.body.data.swiperInfo;
			this.iconInfo = response.body.data.iconInfo;
			this.recommendInfo = response.body.data.recommendInfo;
		},response => {
			console.log("get index data error");
		})

	},
	data(){
		return{
	       swiperInfo: [],
	       iconInfo: [],
	       recommendInfo: []
		}
	},
	components: {
		"index-header": header,
		"imgs-swiper": imgswiper,
		"icons-swiper": iconswiper,
		"ads": ads
	}
}
</script>

<style scoped>
	.main{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		min-height: 100%;
		background: #f5f5f5;
	}
</style>
