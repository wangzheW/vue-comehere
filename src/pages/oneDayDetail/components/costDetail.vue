<template>
	<div class="costDetail" id="feeGroup">
		<h3 class="costDetail-explain border-bottom">费用及退款说明</h3>
			<div class="costDetail-content">
           	 <h4 class="costDetail-title">费用包含</h4>
            	<div class="costDetail-border costDetail-list">
              	  <div class="costDetail-item border-top">
                   	 <h4 class="costDetail-item-title border-right">门票</h4>
                   	 <p class="costDetail-item-desc">
                   	 行程中所含的景点首道大门票:故宫（赠送珍宝馆）+八达岭长城
                   	 </p>
                </div>
                <div class="costDetail-item border-top">
                    <h4 class="costDetail-item-title border-right">交通</h4>
                    <p class="costDetail-item-desc">全程空调旅游车</p>
                </div>
                <div class="costDetail-item border-top">
                    <h4 class="costDetail-item-title border-right">用餐</h4>
                    <p class="costDetail-item-desc">行程内午餐费用</p>
                </div>
                <div class="costDetail-item border-top">
                    <h4 class="costDetail-item-title border-right">导游服务</h4>
                    <p class="costDetail-item-desc">中文导游费用（自由活动期间除外）</p>
                </div>
                <div class="costDetail-item border-top border-bottom">
                    <h4 class="costDetail-item-title border-right">儿童价说明</h4>
                    <p class="costDetail-item-desc">身高0.8m-1.4m需提交儿童价格：含半价门票+餐费+导服+车费（1.2以下免门票，导游现退半价门票）<br>身高1.4m以上（含1.4m)需提交成人价格，如有学生证件请出示给导游，现场退学生半价门票<br>身高0.8m以下儿童且不需要占座则无须按儿童价格提交</p>
                </div>
            </div>
            <h4 class="costDetail-title">费用不含</h4>
            <div class="mp-border costDetail-list">
           		<div class="costDetail-item border-top">
                    <h4 class="costDetail-item-title border-right">八达岭往返滑车或缆车</h4>
                    <p class="costDetail-item-desc">八达岭往返滑车140元；缆车140元/人</p>
                </div>
               
                <div class="costDetail-item border-top border-bottom">
                    <h4 class="costDetail-item-title border-right border-bottom">其他</h4>
                    <p class="costDetail-item-desc">其他个人消费</p>
                </div>
            </div>
            <h4 class="costDetail-title">退款说明</h4>
            <p class="mp-prddetail-desc" mp-role="refundCon">退款时间：使用日期截止前1天12:00前可以申请退款; <br>1）出行前一天12:00之前申请退款无手续费。。 </p>
    </div>
	</div>

</template>

<script>
	

</script>

<style scoped>
	.costDetail{
		background: #fff;
	}
	.costDetail-explain{
		overflow: hidden;
	    position: relative;
	    height: .84rem;
	    padding: 0 .2rem;
	    color: #212121;
	    font-size: .32rem;
	    line-height: .84rem;
	    text-indent: .16rem;
	}
	.costDetail-explain::before {
   		content: '';
	    position: absolute;
	    z-index: 2;
	    top: 4px;
	    left: .28rem;
	    width: 8px;
	    height: 12px;
	    border-radius: 4px;
	    background-color: #fff;
	}
	.costDetail-explain::after{
		content: " ";
	    position: absolute;
	    top: .28rem;
	    left: .2rem;
	    width: .06rem;
	    height: .28rem;
	    background: #00bcd4;
	    -webkit-border-radius: .06rem;
	    -moz-border-radius: .06rem;
   	 	border-radius: .06rem;
	}
	.costDetail-content{
		overflow: hidden;
	    padding: 0 .24rem;
	    color: #616161;
	    font-size: .28rem;
	    line-height: .4rem;
	}
	.costDetail-title{
		padding: .24rem 0 .1rem;
	    color: #ff8300;
	    font-size: .3rem;
	    line-height: .42rem;
	}
	.costDetail-border::before {
	    width: 200%;
	    height: 200%;
	    -webkit-transform: scale(.5);
	    -moz-transform: scale(.5);
	    -ms-transform: scale(.5);
	    -o-transform: scale(.5);
	    transform: scale(.5);
	}
	.costDetail-item{
		overflow: hidden;
	    position: relative;
	    color: #212121;
	    background: #f5f5f5;
	    font-size: .28rem;
	    line-height: .4rem;
	}
	.border-top::before{
	    left: 0;
	    width: 100%;
	    height: 1px;
        border-top: 1px solid #e0e0e0;
        transform-origin: 0 0;
	}
	.border-bottom::before{
		top: 0;
	    width: 100%;
	    height: 1px;
        border-bottom: 1px solid #e0e0e0;
        transform-origin: 0 0;
	}
	.costDetail-item-title{
		position: absolute;
	    top: 50%;
	    padding: .2rem 0;
	    width: 1.8rem;
	    text-align: center;
        transform: translateY(-50%);
	}
	.border-right::before{
		top: 0;
	    width: 100%;
	    height: 1px;
        border-right: 1px solid #e0e0e0;
        transform-origin: 0 0;
	}
	.costDetail-item-desc{
		margin-left: 1.8rem;
	    padding: .2rem;
	    background: #fff;
	    color: #616161;
	}
</style>