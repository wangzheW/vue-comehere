<template>
	<div>
		<div calss="activity-top">
			<p class="activity-nearby activity-nearby-left iconfont">&#xe611;  附近</p>
			<p class="activity-nearby iconfont">&#xe64d;  5折泡温泉</p>
		</div>
		<div class="activity-bottom">
			<dl>
				<dt><img src="https://pages.c-ctrip.com/dm/untitled/20170124/H5.jpg"></dt>
				<dd><span>你的附近</span></br><span>特权日</span></dd>
			</dl>
			<dl>
				<dt><img src="https://pages.c-ctrip.com/dm/yunying/old_h2_tqr.jpg"></dt>
				<dd><span>你的附近</span></br><span>特权日</span></dd>
			</dl>
		</div>
	</div>
</template>


<script>
	import "../../assets/font/iconfont.css";
	
</script>


<style scoped>
.activity-top{
	margin-bottom:0.1rem;
}
.activity-nearby{
	float: left;
	width: 49.8%;
	height: 0.8rem;
	font-size: 0.2rem;
	text-align: center;
	line-height: 0.8rem;
	border-top: 0.02rem solid #f5f5f5;
}
.activity-nearby-left{
	border-right: 0.02rem solid #f5f5f5;
}
.activity-bottom dl{
	float: left;
	width: 49.8%;
	height:0.8rem;
}
.activity-bottom dl dt{
	float: right;
	width: 50%;
}
.activity-bottom dl dd{
	float: left;
	width: 50%;
	text-align: center;
}
.activity-bottom dl dd span{
	line-height: 0.4rem;
}
.activity-bottom dl dd span:nth-child(1){
	font-size: 0.1rem;
	color: red;
}
.activity-bottom dl dd span:nth-of-type(2){
	font-size: 0.05rem;
	color: #000;
}
.activity-bottom dt img{
	width: 100%;
	height: 0.8rem;
}
</style>

