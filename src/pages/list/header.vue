<template>
	<div>
		<header class="header">
			<div class="header-left" @click="handleReturnClick">
  				<div class="return iconfont">&#xe624;</div>
  			</div>
  			<div class="header-title">
  				<input type="text" class="search-text"  placeholder="输入城市或景点" v-model="value" :value="value"/>
  				<span class="search-del" v-show="value != '' " @click="handledelClick"></span>
  			</div>
  			<div class="header-right">
	  			<span class="header-city">搜索</span>  			
  			</div>
		</header>
	</div>
	
</template>

<script>

export default {
	data () {
	    return {
	    	value: "北京"
	    }
	},
	methods:{
		handleReturnClick() {
			this.$router.go(-1);
		},
		handledelClick() {
			this.value = ""
		}
		
	}
 
}
</script>


<style scoped>
	.header {
	    position: relative;
	    z-index: 5;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: box;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    color: #fff;
	    text-align: center;
	}
	.header-left {
	    display: inline-block;
	    width: .4rem;
	    padding: 0 .2rem; 
	    color: #fff;
	    font-size: .36rem;
	    line-height: .88rem;
	    text-align: left;
	}
	.return{
		display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;  
	}
	.header-title {
		position: relative;
		height: .6rem;
		margin: .14rem 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		box-flex: 1;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
	    padding: 0 .6rem 0 .2rem;	
	}
	.search-text{
		display: block;
		position: relative;
	    width: 100%;
	    height: .4rem;
	    line-height: .4rem;
	    padding: .1rem 0;
	    border: 0;
	    font-family: "Microsoft Yahei",Arial;
	    font-size: .28rem;
	    border-radius: .06rem;
	}
	.search-del{	
		position: absolute;
	    top: .04rem;
	    right: 0;
	    width: .58rem;
	    height: .58rem;	
	    background: url(//simg1.qunarzz.com/piao/images/touch/v2/sprites.png) -.48rem .05rem no-repeat;
	    background-size: 3rem 3rem;
	}
	.header-city {
		line-height: .88rem;
    	padding: 0 .25rem;
    	color: #fff;
    	text-align: center;
    }
  
	
   
</style>
