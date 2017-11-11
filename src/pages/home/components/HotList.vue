<template>
	<div class="index-hot-list">
		<h2 class="index-hot-list-title">热销推荐</h2>
		<div class="index-hot-list-show">
			<ul class="index-hot-list-show-con">
				<li v-for="item in hotListInfo" :key="item.id" class="index-hot-list-show-item">
					<router-link :to="item.link">
						<div class="index-hot-list-show-con-img-con">
							<img :src="item.imgUrl" :alt="item.title" class="index-hot-list-show-con-img">
						</div>
						<div class="index-hot-list-show-con-text-con">
							<div class="index-hot-list-show-con-text-title">{{item.title}}</div>
							<div class="index-hot-list-show-con-text-value">{{item.value}}</div>
							<div class="index-hot-list-show-con-text-price">
								<span class="index-hot-list-show-con-text-price-mark">￥</span>
								<span class="index-hot-list-show-con-text-price-new">{{item.price}}</span>
								起
							</div>
						</div>
					</router-link>
				</li>
			</ul>
			<div class="index-hot-list-show-more">
				<router-link :to="hotMoreLink" class="index-hot-list-show-more-link">
					查看所有产品
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['hotMoreLink', 'hotListInfo']
	}
</script>

<style scoped>
	.index-hot-list{
		width: 100%;
		font-size: .28rem;
	}
	.index-hot-list-title{
		height: .8rem;
		line-height: .8rem;
		padding-left: .26rem;
		background: #f5f5f5;
		color: #212121;
	}
	.index-hot-list-show-item{
    	height: 1.4rem;
    	padding: .24rem;
    	border-bottom: .02rem solid #e0e0e0;
	}
	.index-hot-list-show-con-img-con{
		float: left;
		width: 1.4rem;
		height: 1.4rem;
	}
	.index-hot-list-show-con-img{
		width: 100%;
	}
	.index-hot-list-show-con-text-con{
		margin-left: 1.6rem;
	}
	.index-hot-list-show-con-text-title{
    	margin-top: .04rem;
    	margin-bottom: .1rem;
    	color: #212121;
    	font-size: .3rem;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
	}
	.index-hot-list-show-con-text-value{
    	margin-bottom: .1rem;
    	height: .4rem;
    	line-height: .4rem;
    	color: #9e9e9e;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
	}
	.index-hot-list-show-con-text-price{
		color: #9e9e9e;
    	font-size: .24rem;
	}
	.index-hot-list-show-con-text-price-mark{
		color: #ff8300;
	}
	.index-hot-list-show-con-text-price-new{
    	padding: 0 .04rem;
		font-size: .36rem;
		color: #ff8300;
	}
	.index-hot-list-show-more-link{
		display: block;
		width: 100%;
		height: .88rem;
		line-height: .88rem;
		text-align: center;
	}
</style>