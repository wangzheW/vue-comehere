<template>
	<header class="header">
  		<a class="header-left"><</a>
  		<div class="header-title">输入城市/景点/游戏主题</div>
  		<div class="header-right">
  			<span class="nav-city">北京</span>
  			<i class="header-right-arrow"></i>
  		</div>
  	</header>
</template>

<script>

	export default {
  
	}

</script>

<style scoped>
 	.header{
 		position:relative;
 		width:100%;
 		background:#00bcd4;
 		text-align:center;
 		color:#fff;
 		height: .88rem
 	}
 	.header-left{
 		float:left;
 		width: .4rem;
 		line-height: .88rem;
 		padding: 0 .2rem;
 		color: #fff;
 		font-size: .36rem;
 		text-align: left;
 	}
 	.header-title{
 		position:absolute;
 		top:.14rem;
 		left:.8rem;
 		right:1.28rem;
 		line-height:.6rem;
 		background: #fff;
 		color:#ccc;
 		border-radius:.06rem;
 	}
 	.header-right{
 		width: 1.28rem;
 		float: right;
 		line-height:.88rem;
 	}
 	.nav-city:after{
 		border-left: .14rem solid transparent;  
    	border-right: .14rem solid transparent;  
   	 	border-top: .14rem solid #fff;  
    	content: "";  
    	position: relative;
    	left: .04rem;
    	top: .24rem;       
 	}
</style>
