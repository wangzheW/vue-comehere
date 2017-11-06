<template>
	<div class="index-hot-list">
		<h2 class="index-hot-list-title">热销推荐</h2>
		<div class="index-hot-list-show">
			<ul class="index-hot-list-show-con">
				<li v-for="item in hotItems" :key="item.id" class="index-hot-list-show-item">
					<router-link :to="item.link">
						<div class="index-hot-list-show-con-img-con">
							<img :src="item.imgUrl" :alt="item.title" class="index-hot-list-show-con-img">
						</div>
						<div class="index-hot-list-show-con-text-con">
							<div class="index-hot-list-show-con-text-title">{{item.title}}</div>
							<div class="index-hot-list-show-con-text-value">{{item.value}}</div>
							<div class="index-hot-list-show-con-text-price">
								<span class="index-hot-list-show-con-text-price-mark">￥</span>
								<span class="index-hot-list-show-con-text-price-new">{{item.price}}</span>
								起
							</div>
						</div>
					</router-link>
				</li>
			</ul>
			<div class="index-hot-list-show-more">
				<router-link :to="moreLink" class="index-hot-list-show-more-link">
					查看所有产品
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				moreLink: "moreLink",
				hotItems: [{
					id: 1,
					link: "/hotList/1",
					imgUrl: "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
					title: "故宫",
					value: "东方宫殿建筑代表，世界宫殿建筑典范",
					price: "65"
				},{
					id: 2,
					link: "/hotList/2",
					imgUrl: "http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg",
					title: "八达岭长城",
					value: "不到长城非好汉",
					price: "25"
				},{
					id: 3,
					link: "/hotList/3",
					imgUrl: "http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg",
					title: "颐和园",
					value: "保存完整的一座皇家行宫御苑",
					price: "1"
				},{
					id: 4,
					link: "/hotList/4",
					imgUrl: "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg",
					title: "北京欢乐谷",
					value: "七大主题园区带你畅享北京欢乐谷",
					price: "11"
				},{
					id: 5,
					link: "/hotList/5",
					imgUrl: "http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg",
					title: "慕田峪长城",
					value: "秀美长城，关键是人少",
					price: "19.1"
				}]
			}
		}
	}
</script>

<style scoped>
	.index-hot-list{
		width: 100%;
		font-size: .28rem;
	}
	.index-hot-list-title{
		height: .8rem;
		line-height: .8rem;
		padding-left: .26rem;
		background: #f5f5f5;
		color: #212121;
	}
	.index-hot-list-show-item{
    	height: 1.4rem;
    	padding: .24rem;
    	border-bottom: .02rem solid #e0e0e0;
	}
	.index-hot-list-show-con-img-con{
		float: left;
		width: 1.4rem;
		height: 1.4rem;
	}
	.index-hot-list-show-con-img{
		width: 100%;
	}
	.index-hot-list-show-con-text-con{
		margin-left: 1.6rem;
	}
	.index-hot-list-show-con-text-title{
    	margin-top: .04rem;
    	margin-bottom: .1rem;
    	color: #212121;
    	font-size: .3rem;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
	}
	.index-hot-list-show-con-text-value{
    	margin-bottom: .1rem;
    	height: .4rem;
    	line-height: .4rem;
    	color: #9e9e9e;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
	}
	.index-hot-list-show-con-text-price{
		color: #9e9e9e;
    	font-size: .24rem;
	}
	.index-hot-list-show-con-text-price-mark{
		color: #ff8300;
	}
	.index-hot-list-show-con-text-price-new{
    	padding: 0 .04rem;
		font-size: .36rem;
		color: #ff8300;
	}
	.index-hot-list-show-more-link{
		display: block;
		width: 100%;
		height: .88rem;
		line-height: .88rem;
		text-align: center;
	}
</style>