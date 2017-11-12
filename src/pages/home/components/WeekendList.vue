<template>
	<div class="index-weekend">
		<h2 class="index-weekend-title">周末去哪儿</h2>
		<div v-for="item in weekendListInfo" :key="item.id" class="index-weekend-list">
			<router-link :to="item.link">
				<div class="index-weekend-img-con">
					<img :src="item.imgUrl" :alt="item.title" class="index-weekend-img">
				</div>
				<div class="index-weekend-text">
					<p class="index-weekend-text-title">{{item.title}}</p>
					<p class="index-weekend-text-value">{{item.value}}</p>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['weekendListInfo']
	}
</script>

<style scoped>
	.index-weekend-title{
		height: .8rem;
		line-height: .8rem;
    	padding-left: .26rem;
    	color: #212121;
	}
	.index-weekend-list{
    	margin-bottom: .1rem;
	}
	.index-weekend-img-con{
		height: 0;
    	padding-bottom: 37.4375%;
	}
	.index-weekend-img{
		width: 100%;
	}
	.index-weekend-text{
		padding: .14rem .2rem .2rem .2rem;
	}
	.index-weekend-text-title{
    	padding-right: 1.4rem;
    	line-height: .48rem;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	color: #212121;
    	font-size: .28rem;
	}
	.index-weekend-text-value{
    	padding-right: 1.4rem;
    	line-height: .42rem;
    	overflow: hidden;
    	white-space: nowrap;
  	  	text-overflow: ellipsis;
  	  	color: #616161;
    	font-size: .24rem;
	}
</style>