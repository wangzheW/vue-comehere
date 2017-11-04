<template>

		<ul class="selected-link">
				<li class="selected-left">
					<router-link to="www.baidu.com">
						<img :src="imgUrl" class="selected-img"/>
					</router-link>
				</li>
				<li class="selected-right">
					<router-link to="www.baidu.com">
						<img :src="imgUrl1" class="selected-img"/>
					</router-link>
				</li>
		</ul>
		
</template>

<script>
	export default {
		data() {
			return{
				imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png",
				imgUrl1:"http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png"
			}
		}
	}
</script>

<style>
	.selected-link{
		width: 100%;		
	}
	.selected-left{
		width: 50%;
		height: 1.4rem;
		border-top: 0.02rem solid #ccc;
		float: left;
		text-align: center;
		line-height: 0.98rem;
		background: #fff;
		margin-top: .2rem;
	}
	.selected-right{
		width:50%;
		height: 1.4rem;
		border-top: 0.02rem solid #ccc;
		float: left;
		text-align: center;
		line-height: 0.98rem;
		background: #fff;
		margin-top: .2rem;
	}
	.selected-img{
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
