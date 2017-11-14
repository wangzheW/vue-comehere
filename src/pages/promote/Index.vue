<template>
	<div>
	  	<promote-header />
	  	<div class="promote-main">
	 		<promote-countryouter />
	 		<promote-banner />
	 		<promote-city />
	 		<promote-subjectdir />
	 		<div>
	 			<promote-seckill />
	 			<promote-nowait />
	 		</div>
		</div>
	</div>
</template>

<script>
	import header from './components/Header.vue'
	import countryouter from './components/Countryouter.vue'
	import banner from './components/Banner.vue'
	import city from './components/City.vue'
	import subjectdir from './components/Subjectdir.vue'
	import seckill from './components/Seckill.vue'
	import nowait from './components/Nowait.vue'



	export default {
		components: {
			'promote-header': header,
			'promote-countryouter': countryouter,
			'promote-banner': banner,
			'promote-city': city,
			'promote-subjectdir': subjectdir,
			'promote-seckill': seckill,
			'promote-nowait': nowait
		}
	}
</script>

<style scoped>
	.promote-main{
		position: relative;
    	width: 100%;
    	min-height: 14rem;
    	background: #7bdafe;
    	overflow: hidden;
	}
</style>



