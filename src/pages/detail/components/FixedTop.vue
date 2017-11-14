<template>
	<div class="fixed-top-main" id="detailFixedTop">
		<h1 class="fixed-top-main-title">
			<router-link to="/" class="fixed-top-back">
				<span class="iconfont icon-fanhui fixed-top-back-btn"></span>
			</router-link>
			故宫	
		</h1>
	</div>
</template>

<script>
	export default {
		mounted() {
			window.addEventListener('scroll', this.handleScroll);
		},

		methods: {
			handleScroll() {
				this.scroll = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
				let title = document.getElementById("detailFixedTop");
				let flag = this.scroll / 190;
				if(flag === 0){
					title.style.display = "none";
				}else if(flag > 0 && flag < 1){
					title.style.display = "block";
					title.style.opacity = flag;
				}else if(flag > 1){
					title.style.display = "block";
					title.style.opacity = 1;
				}
			}
		},
		beforeDestroy(){
			window.removeEventListener("scroll",this.handleScroll)
		}

	}
</script>

<style scoped>
	.fixed-top-main{
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: .88rem;
		line-height: .88rem;
		background: #00bcd4;
	}
	.fixed-top-main-title{
		position: relative;
		font-size: .36rem;
		text-align: center;
		color: #fff;
	}
	.fixed-top-back{
		position: absolute;
		display: block;
		width: .8rem;
		height: .88rem;
		line-height: .88rem;
	}
	.fixed-top-back-btn{
		font-size: .36rem;
		color: #fff;
	}
</style>