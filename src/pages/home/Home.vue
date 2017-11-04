<template>
  	<div>
		<index-header/>
		<index-swiper/>
		<index-swiper-nav/>
		<index-prompt/>
		<index-hot-list/>
		<index-weekend-list/>
	</div>
</template>

<script>

	import header from "./Header.vue";
	import swiper from "./Swiper.vue";
	import swiperNav from "./SwiperNav";
	import prompt from "./Prompt";
	import hotList from "./HotList";
	import weekendList from "./WeekendList";

	export default {
		data(){
			return{
	       
			}
		},
		components: {
			"index-header": header,
			"index-swiper": swiper,
			"index-swiper-nav": swiperNav,
			"index-prompt": prompt,
			"index-hot-list": hotList,
			"index-weekend-list": weekendList
		}
	}
</script>