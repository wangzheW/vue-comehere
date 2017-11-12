<template>
	<div class="index-weekend">
		<h2 class="index-weekend-title">周末去哪儿</h2>
		<div v-for="item in weekendItems" :key="item.id" class="index-weekend-list">
			<router-link :to="item.link">
				<div class="index-weekend-img-con">
					<img :src="item.imgUrl" :alt="item.title" class="index-weekend-img">
				</div>
				<div class="index-weekend-text">
					<p class="index-weekend-text-title">{{item.title}}</p>
					<p class="index-weekend-text-value">{{item.value}}</p>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				weekendItems: [{
					id: 1,
					link: "/weekendList/1",
					imgUrl: "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
					title: "北京温泉排行榜",
					value: "细数北京温泉，温暖你的冬天"
				},{
					id: 2,
					link: "/weekendList/2",
					imgUrl: "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
					title: "寻找北京的皇城范儿",
					value: "数百年的宫廷庙宇，至今依旧威严霸气"
				},{
					id: 3,
					link: "/weekendList/3",
					imgUrl: "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
					title: "北京必游TOP10",
					value: "来北京必去的景点非这些地方莫属"
				},{
					id: 4,
					link: "/weekendList/4",
					imgUrl: "http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg",
					title: "登高望远秋色佳",
					value: "山顶满眼彩色，此情此景醉了"
				},{
					id: 5,
					link: "/weekendList/5",
					imgUrl: "http://img1.qunarzz.com/sight/source/1509/28/1bb74b851279e6.jpg_r_640x214_64ebf0ee.jpg",
					title: "秋高气爽去礼佛",
					value: "秋风伴着美妙经声，品尝秋的另一番滋味"
				}]
			}
		}
	}
</script>

<style scoped>
	.index-weekend-title{
		height: .8rem;
		line-height: .8rem;
    	padding-left: .26rem;
    	color: #212121;
	}
	.index-weekend-list{
    	margin-bottom: .1rem;
	}
	.index-weekend-img-con{
		height: 0;
    	padding-bottom: 37.4375%;
	}
	.index-weekend-img{
		width: 100%;
	}
	.index-weekend-text{
		padding: .14rem .2rem .2rem .2rem;
	}
	.index-weekend-text-title{
    	padding-right: 1.4rem;
    	line-height: .48rem;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	color: #212121;
    	font-size: .28rem;
	}
	.index-weekend-text-value{
    	padding-right: 1.4rem;
    	line-height: .42rem;
    	overflow: hidden;
    	white-space: nowrap;
  	  	text-overflow: ellipsis;
  	  	color: #616161;
    	font-size: .24rem;
	}
</style>