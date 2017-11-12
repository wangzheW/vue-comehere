<template>
		<div class="menu-right-wrapper" v-show="menuShow">
			<div class="menu-item-right">
				<div class="item-right" v-for="item in menuRightInfo" @click="handleMenuRightItemClick(item.itemtitle)" :data-showItem="item.itemtitle">
					<span class="item-right-num">{{item.subnum}}</span>
					{{item.itemtitle}}
				</div>
			</div>
		</div>
</template>

<script>

import IScroll from 'better-scroll'

export default {
	mounted() {
		this.createIscroll();
	},
	updated() {
		this.scroll3.refresh();	
	},
	data() {
		return {
			scroll3: null
		}
	},
	props:["menuRightInfo","menuShow"],	
	methods: {
		createIscroll() {
			this.scroll3 = new IScroll('.menu-right-wrapper', {
				probeType:3,
				scrollX:false, 
				scrollY:true, 
				scrollbar: true
			});
			this.scroll3.on("scroll", function() {
				console.log(this.y);
			})
		},
		handleMenuRightItemClick(res) {
			//console.log(res)
			window.bus.$emit("menuRightClick", res);
		}
	}	
}
</script>


<style scoped>
	.menu-right-wrapper{
		width: 50%;
		height: 4.8rem;
		background: #f1f1f1;
		overflow: hidden;
		position: absolute;
		right: 0;
		top: .8rem;
	}
	.menu-item-right{
		width: 100%;
		min-height: 100%;
		font-size: 12px;
		background: #f1f1f1;
	}
	.item-right{
		height: .8rem;
		line-height: .8rem;
		padding-left: .3rem;
		color: #212121;
	}
	.item-right-num{
		float: right;
	    margin-right: .2rem;
	    color: #9e9e9e
	}
</style>
