<template>
  	<div class="promote-header">
		<a class="promote-header-back" href="javascript:window.history.back();" id="msgoback">
			<span class="iconfont">&#xe624;</span>
		</a>
		<h1 class="promote-header-tittle">金秋大促</h1>
		<a class="promote-header-bar promote-header-logo" href="../../../index.html">
			<span class="promote-iconfont-head iconfont">&#xe607;</span><span class="promote-index-head">首页</span>
		</a>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
	.promote-header{
		position: relative;
	    background: #1ba9ba;
	    text-align: center;
	    color: #fff;
	    border-bottom: #1b7a8b .02rem solid;
	    height: .88rem;
	    line-height: .88rem;
	}
	.promote-header a {
    	color: #fff;
	}

	.promote-header-back {
	    z-index: 91;
	    left: 0;
	    font-size: .32rem;
	}
	.promote-header-back, .promote-header-bar {
	    position: absolute;
	    top: 0;
	    width: .88rem;
	    height: .88rem;
	}
	.promote-header .promote-header-tittle {
	    overflow: hidden;
	    margin: 0 1rem;
	    font-weight: normal;
	    font-size: .32rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.promote-header-logo {
		display: block;
		line-height: .88rem;
		right: 0;
	    font-size: .24rem;
	}
	.promote-iconfont-head{
		font-size: .55rem;
		font-weight: 300;
		display: block;
    	height: auto;
    	margin-top: -0.1rem;
	}
	.promote-index-head {
		display: block;
    	margin-top: -0.5rem;
	}

</style>



