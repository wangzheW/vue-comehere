<template>
  	<div>
		<index-header/>
		<imgs-swiper/>
		<icons-swiper/>
		<index-activity/>
	</div>
</template>

<script>

import header from "./Header.vue";
import imgswiper from "./imgswiper.vue";
import iconswiper from "./iconswiper.vue";
import activity from "./Activity.vue";


export default {
	data(){
		return{
	       
		}
	},
	components: {
		"index-header":header,
		"imgs-swiper":imgswiper,
		"icons-swiper":iconswiper,
		"index-activity":activity,
		"icons-swiper":iconswiper
	}
}
</script>

<style scoped>

</style>
