<template>

		<div class="useDetail-group" id="useGroup" >
    <h3 class="useDetail-group-title border-bottom">使用说明</h3>
    <div class="useDetail-content" style="height: auto;">
        <h4 class="content-title">出团信息</h4>
        <p class="content-desc">商家会在出游前1天的20点前与您确认出团信息。若您在超过此时间预订，商家会在您预订成功后10分钟内与您确认出团信息。</p>
        <h4 class="content-title">预订须知</h4>
        <p class="content-desc">（故宫实行实名制购票，参观故宫的成人游客请带好身份证，1.2米以上的儿童请携带户口本，方便购票；成人无证件不可参观，请理解；暑期及节假日外，故宫景点每周一闭馆)。</p>
        <div class="hideBlock" v-show="isShow">
        <h4 class="content-title">使用说明</h4>
        <p class="content-desc">无需咨询，请直接提交订单，网上支付，我社以我社以系统订单为准，统一给导游派发游客名单，无需纸质凭证， 导游会在提前一天17:00-20:00以电话或短信的形式和您联系，请保持预定时手机畅通，如未接到出行通知，请致电去哪客服</p>
        <h4 class="content-title">注意事项</h4>
        <p class="content-desc">周六日、节假日、暑期，八达岭高速经常遇有堵车，请游客耐心等候，如因堵车原因，无法正点到达景区游览，游览时间往后顺延，敬请谅解！如因堵车原因，造成景区无法游览，我们只能抱歉的退还未产生的费用，比如：门票或餐费，敬请谅解！</p>
    </div></div>
    <div class="useDetail-more" @click="showToggle">
        <span id="moreUse" >{{conText}}使用说明</span><span class="useDetail-iconfont iconfont ":class="{'icon-xia':active,'icon-shang':!active}"></span>

    </div>
    
</div>
	

</template>

<script >
	 // mounted:{
	 // 		// var Hide = document.getElementById("hideMore");
	 // 		// var HideBlock = document.getElementByClassName("hideBlock");
	
	 // }
	 	export default {

	 		data() {
	 			return {
	 				isShow: false,
		 			conText: "更多",
		 			active: true,
		 			
	 			}
	 		},

	 		
	 		methods: {

	 			showToggle: function() {
	 				     this.isShow = !this.isShow  
						 this.active = !this.active
	 				   	 // if(!this.more) {
	 				   	 // 	this.hide
	 				   	 // 	}
	 				   	 	if(this.conText == "更多") {
	 				   	 		this.conText = "收起";
	 				   	 	}else{
	 				   	 		this.conText = "更多";
	 				   	 	}
	 				   	 

	 				   	 
		               
		 	}
	 	}
	}


</script>

<style scoped>
	.userDetail{
		background:#fff;
	}
	.useDetail-group{
		margin-top: .2rem;
	    padding: .01rem 0;
	    background-color: #fff;
	}
	.useDetail-group-title{
		overflow: hidden;
	    position: relative;
	    height: .84rem;
	    padding: 0 .2rem;
	    color: #212121;
	    font-size: .32rem;
	    line-height: .84rem;
	    text-indent: .16rem;
	}
	.useDetail-group-title::before {
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
	.useDetail-group-title::after{
		content: " ";
	    position: absolute;
	    top: .28rem;
	    left: .2rem;
	    width: .06rem;
	    height: .28rem;
	    background: #00bcd4;
   	 	border-radius: .06rem;
   	 	border-bottom: 1px solid #f5f5f5;
	}
	.useDetail-content{
		overflow: hidden;
	    padding: 0 .24rem;
	    color: #616161;
	    font-size: .28rem;
	    line-height: .4rem;
	}
	.content-title{
	    padding: .24rem 0 .1rem;
	    color: #ff8300;
	    font-size: .3rem;
	    line-height: .42rem;
	}
	.content-desc{
		color: #616161;
	    word-wrap: break-word;
	    white-space: normal;
	    word-break: break-word;
	}
	.useDetail-more{
		position: relative;
	    padding: .24rem 0 .3rem;
	    height: .4rem;
	    color: #616161;
	    font-size: .28rem;
	    line-height: .4rem;
	    text-align: center;
	}
	
</style>