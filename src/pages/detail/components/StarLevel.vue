<template>
	<div class="detail-star-level-main">
		<span class="iconfont detail-level-smile">&#xe645;</span>
		<span class="iconfont detail-level-star">&#xe61a;&#xe61a;&#xe61a;&#xe61a;&#xe61a;</span>
		<span class="detail-level-point">5.0分</span>
		<router-link to="'/'" class="detail-level-appraise-num">
			155167评论 
			<span class="iconfont detail-level-icon-right">&#xe60b;</span>
		</router-link>
	</div>
</template>

<script></script>

<style scoped>
	.detail-star-level-main{
		margin-bottom: .2rem;
    	background-color: #fff;
    	height: .8rem;
    	line-height: .8rem;
	}
	.detail-level-smile{
		position: relative;
    	top: .08rem;
    	display: inline-block;
    	width: .36rem;
    	height: .36rem;
    	margin-left: .2rem;
    	margin-right: .1rem;
    	color: #00afc7;
	}
	.detail-level-star{
		display: inline-block;
    	position: relative;
    	top: .04rem;
    	width: 1.4rem;
    	height: .28rem;
    	color: #00afc7;
	}
	.detail-level-point{
		display: inline-block;
    	margin-left: .1rem;
    	color: #00afc7;
	}
	.detail-level-appraise-num{
		display: block;
		float: right;
    	margin-bottom: .2rem;
    	color: #9e9e9e;
	}
	.detail-level-icon-right{
		display: inline-block;
    	line-height: .28rem;
    	font-size: .28rem;
    	margin-left: .16rem;
    	margin-right: .2rem;
    	color: #9e9e9e;
	}
</style>