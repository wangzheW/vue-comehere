<template>
	<div class="detail-back-main">
		<router-link to="/" class="detail-back-btn" id="detBackHome">
			<span class="iconfont icon-fanhui detail-back-btn-icon"></span>
		</router-link>
	</div>
</template>

<script>
	export default {
		mounted() {
			window.addEventListener('scroll', this.menu)
		},
		methods: {
			menu() {
				this.scroll = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
    			var btn = document.getElementById("detBackHome")
    			if(this.scroll > 0){
    				btn.style.display = "none";
    			}else{
    				btn.style.display = "block";
    			}
			}
		},
		beforeDestroy(){
			window.removeEventListener("scroll",this.menu)
		}
	}
</script>

<style scoped>
	.detail-back-btn{
		position: absolute;
		z-index: 3;
		left: .1rem;
		top: .1rem;
		width: .72rem;
		height: .72rem;
		line-height: .72rem;
		border-radius: 50%;
		background: rgba(0,0,0,0.5);
		text-align: center;
	}
	.detail-back-btn-icon{
		color: #fff;
	}
</style>