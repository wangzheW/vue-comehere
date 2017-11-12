<template>
	<div @click="handleBackPrev">
		<div class="now-map-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
	</div>
</template>

<script>
	export default {
		methods: {
			handleBackPrev() {
				history.go(-1)
			}
		}
	}
</script>

<style>
	.now-map-wrapper{
		width: 100%;
		height: 15rem;
	}
</style>