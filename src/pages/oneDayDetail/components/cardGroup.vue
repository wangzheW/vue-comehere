<template>
	<div class="daily-group" ref="stairs" @click="getScrollTop">
        <div class="daily-outter">
            <div class="daily-inner">
                <div class="daily-item">
                    <div class="daily-title">
                        <span class="daily-iconfont iconfont icon-gongjiaoche"></span>
                        <span>交通</span>
                    </div>
                    <div class="daily-content">汽车往返</div>
                </div>
                <div class="daily-item">
                    <div class="daily-title">
                        <span class="daily-iconfont iconfont icon-canju"></span>
                        <span>用餐</span>
                    </div>
                    <div class="daily-content">包含餐食</div>
                </div>
               
            </div>
        </div>
        <div class="summary-head">
            <h3 class="summary-title">行程亮点</h3>
        </div>
        <div class="card-content">
            <p class="card-desc">
                ★登八达岭长城，逛故宫，一天饱览两大“双遗”景点
			<br>★品尝京城老字号庆丰包子；，坐拥北京绚烂的穹顶
			<br>★专业导游陪同讲解，无任何强制购物和隐性消费
            </p>
        </div>
    </div>

</template>


<script>
	
	export default{
		data() {
			return{

				scrollTop:''
			} 

		},

		methods:{
		getScrollTop: function() {
			this.scrollTop = this.$refs.stairs.scrollTop
			console.log()
		}

	}
}
</script>

<style scoped>
	.daily-group{
		margin-top: .2rem;
	    background-color: #fff;
	    padding: 0 .2rem;
	}
	.daily-outter{
		padding: .24rem 0;
	}
	.daily-inner{
		background-color: #f5f5f5;
	    border-radius: .1rem;
	    padding: .2rem;
	    height: 0.9rem;
	}
	.daily-item{
		position: relative;
	    zoom: 1;
	    overflow: hidden;
	    margin-bottom: .2rem;
	}
	.daily-title{
		position: absolute;
	    width: 1.2rem;
	    color: #212121;
	}
	.daily-iconfont{
		color: #919191;
  	  	margin-right: .1rem;
	}
	.daily-content{
	    padding-left: 1.2rem;
    	line-height: .36rem;
    	color: #616161;
	}
	.summary-head{
		margin-top: .1rem;
	}
	.summary-title{
	    color: #616161;
    	font-size: .4rem;
	}
	.card-content{
		padding: .24rem 0 .3rem 0;
    	border-bottom: 1px dashed #dadada;
	}
	.card-desc{
		color: #616161;
	    font-size: .28rem;
	    line-height: .44rem;
	    max-height: 1.32rem;
	    overflow: hidden;
	    width: 100%;
	    white-space:nowrap;
	    text-overflow:ellipsis; 
	    overflow:hidden;
	}
	.trip-title{

	}
</style>