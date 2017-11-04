<template>
	
	<header class="header">
		<a class="header-left iconfont">&#xe624;</a>
		<div class="header-title" >
			<div class="header-input-iconfont-con">
				<span class="header-input-iconfont iconfont">&#xe632;</span>
			</div>
			<span class="single-line">输入城市/景点/游玩主题</span>			
		</div>
		<div class="header-right" >
			<span class="header-city">北京</span>
		</div>
	</header>

</template>

<script>

import "../../assets/font/iconfont.css";

export default {
	
}

</script>

<style scoped>
	.header{
		position: relative;
	    overflow: hidden;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	}
	.header-left{
		float: left;
	    display: block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    margin: .02rem 0 0 -0.08rem;
	    margin-top: 0.02rem;
	    color: #fff;
	    font-size: .40rem;
	    text-align: left;
	}
	.header-title{
	    position: relative;
	    margin: .14rem 1.32rem .14rem .8rem;
	    background: #fff;
	    height: .6rem;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.header-input-iconfont-con{
		float: left;
		margin-left: .12rem;
		width: .28rem;
		height: .28rem;
	}
	.header-input-iconfont{
	    color: #ccc;
	    font-size: .38rem;
	}
	.header-right{
		position: absolute;
		top: 0;
		right: 0;
		margin-right: .02rem;
		line-height: .88rem;
		width: 1.28rem;
		text-align: center;
	}
	.single-line{
		display: inline-block;
	    overflow: hidden;
	    position: absolute;
	    left: .3rem;
	    top: 0;
	    width: 3.6rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    text-align: center;
	    color: #ccc;
	}
	.header-city{
		display:block;
		overflow:hidden;
		width: 1rem;
        height: .88rem; 
		line-height: 0.88rem;
		color: #fff;
        word-break:keep-all;
        white-space:nowrap;
        text-overflow:ellipsis;
	}
	.header-city:after{
		position: relative;
		left: .04rem;
  		top: .24rem;
  		content: "";
 		border-left: .14rem solid transparent;  
    	border-right: .14rem solid transparent;  
   		border-top: .14rem solid #fff;       
 	}
</style>

