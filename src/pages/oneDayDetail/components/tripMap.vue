<template>
	<div class="detailMap-con">
		<baidu-map class="map" :center="{lng: 116.3969705008, lat: 39.9992972362}" :zoom="12">
  		</baidu-map>
	</div>

</template>

<script>
	import Vue from 'vue'
	import BaiduMap from 'vue-baidu-map'
	
	Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'KiWuvx2Owev2M11Kt5Pq5MjrR2P0G4dp'
})

</script>

<style scoped>
	.detailMap-con{
		height: 3.5rem;
	    padding: .2rem .2rem .1rem .2rem;
	    overflow: hidden;
	    margin-bottom: .2rem;
	    position: relative;
	    background: #fff;
	}
	.map{
		height: 3.4rem;
		width: 100%;
	}
</style>