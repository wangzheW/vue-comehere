<template>
	<div class="detail-base-main">
		<div class="detail-base-address">
			<p class="detail-base-text">
				<span class="iconfont detail-base-text-left">&#xe611;</span>
				北京市东城区景山前街4号
				<span class="iconfont detail-base-text-right">&#xe60b;</span>
			</p>
		</div>
		<router-link to="'/'" class="detail-base-intro">
			<p class="detail-base-text detail-base-text-intro">
				<span class="iconfont detail-base-text-left">&#xe612;</span>
				查看景点简介及开放时间
				<span class="iconfont detail-base-text-right">&#xe60b;</span>
			</p>
		</router-link>
	</div>
</template>

<script></script>

<style scoped>
	.detail-base-main{
		position: relative;
    	top: -.1rem;
    	padding: .1rem .2rem 0 .2rem;
    	margin-bottom: .1rem;
    	background: #fff;
    	border-radius: .1rem .1rem 0 0;
	}
	.detail-base-address,.detail-base-intro{
		display: block;
    	position: relative;
    	height: .88rem;
    	color: #212121;
    	line-height: .88rem;
	}
	.detail-base-text{
		overflow: hidden;
    	padding-right: .56rem;
    	white-space: nowrap;
    	text-overflow: ellipsis;
	}
	.detail-base-text-intro:before{
		content: "";
		display: block;
		left: 0;
    	width: 100%;
    	height: 1px;
    	background: #f0f0ef;
	}
	.detail-base-text-left{
		margin-right: .2rem;
    	color: #9e9e9e;
	}
	.detail-base-text-right{
		position: absolute;
    	right: 0;
    	top: .04rem;
    	color: #b9b9b9;
    	font-size: .24rem;
    	line-height: .28rem;
	}
</style>