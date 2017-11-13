<template>
<div>
	<header>
		<img class="header-img" :src="headerCon.imgUrl">
		<div class="header-infocon">
       		<span class="header-infocon-left">
       		{{headerCon.starting}}
       		</span>
        	<span class="header-infocon-right">
        	{{headerCon.travel}}
        	</span>
    	</div>
	</header>
		<div class="header-infocon-con">
    		<h3 class="con-name">
    			{{headerCon.title}}
    		</h3>
		<div class="infocon-pricecon">
        	<em class="infocon-price">&yen;</em>
        	<span class="infocon-pricetext">{{headerCon.price}}</span>
        	<span class="infocon-price-gary">起</span>
        	<span class="infocon-booking">可订明日</span>
        	<span class="infocon-solding">已售:{{headerCon.saleNum}}</span>
    	</div>
		<div class="infocon-tagcon" >
	    	<div class="infocon-tagcon-item"  v-for="item in headerCon.condition" :key="headerCon.condition.id">
	        	<span class="infocon-tag-icon iconfont icon-duigou"></span>
	        	<span class="infocon-tag-desc">{{item.con}}</span>
	    	</div>
	    </div>
	</div>
</div>
</template>

<script>
	export default{
		props: ['headerCon'],
		
		
	}

	


</script>

<style scoped>
	header{
	    overflow: hidden;
    	position: relative;
    	height: 4rem;
	}
	.header-img{
		width: 100%;
		min-height: 4rem;
	}
	.header-infocon{
		overflow: hidden;
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    font-size: 0;
	}
	.header-infocon-left{
		margin-left: .2rem;
	}
	.header-infocon-right{
		margin-right: .2rem;
    	float: right;
	}
	.header-infocon-left, .header-infocon-right{
		overflow: hidden;
	    display: inline-block;
	    height: .34rem;
	    margin-bottom: .22rem;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .34rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.header-infocon-con{
		position: relative;
	    margin-top: -.1rem;
	    padding: .2rem .2rem 0 .2rem;
	    background: #fff;
	    border-radius: .1rem .1rem 0 0;
	    height: 2.12rem;
	}
	.con-name{
		overflow: hidden;
	    color: #212121;
	    font-size: .36rem;
	    line-height: .44rem;
	    text-overflow: ellipsis;
	}
	.infocon-pricecon{
		overflow: hidden;
	    margin: .16rem 0;
	    height: .48rem;
	}
	.infocon-price{
		color: #ff8300;
    	font-size: .24rem;
	}
	.infocon-pricetext{
		color: #ff8300;
    	font-size: .48rem;
	}
	.infocon-price-gary{
		color: #9e9e9e;
    	font-size: .24rem;
	}
	.infocon-booking{
	    color: #616161;
	    font-size: .24rem;
	    margin-left: .2rem;
	}
	.infocon-solding{
		color: #616161;
	    float: right;
	    height: .24rem;
	    margin-top: .2rem;
	    font-size: .24rem;
	}
	.infocon-tagcon{
		overflow: hidden;
	    padding-bottom: .2rem;
	    font-size: 0;
	}
	.infocon-tagcon-item{
		margin-right: .2rem;
		float: left;
	    height: .34rem;
	    font-size: .24rem;
	    line-height: .34rem;
	}
	.infocon-tag-icon{
	    margin-right: .04rem;
	    color: #00afc7;
	    font-size: .24rem;
	    vertical-align: -.02rem;
	}
	.infocon-tag-desc{
	    color: #616161;
	}
</style>