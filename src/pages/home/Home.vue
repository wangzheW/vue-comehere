<template>
  	<div>
		<index-header/>
		<imgs-swiper/>
		<icons-swiper/>
		<index-position/>
		<index-selected/>
		<hot-list/>
	</div>
</template>

<script>

import header from "./Header.vue";
import imgswiper from "./imgswiper.vue";
import iconswiper from "./iconswiper.vue";
import position from "./position.vue";
import selected from "./selected.vue";
import hotList from "./hotlist.vue";

export default {
	data(){
		return{
	       
		}
	},
	components: {
		"index-header":header,
		"imgs-swiper":imgswiper,
		"icons-swiper":iconswiper,
		"index-position":position,
		"index-selected":selected,
		"hot-list":hotList
	}
}
</script>

<style scoped>

</style>
