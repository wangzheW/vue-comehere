<template>
	<div class="oneday-page" ref="scrollchange">
		<header class="oneday-header">
			<span class="oneday-left iconfont">&#xe624;</span>
			<div class="oneday-title" >
				<input type="text" class="oneday-search" v-model="value" placeholder="输入城市或景点">
				<button class="oneday-remove"v-show="value" @click="handleDeletValue">×</button>
			</div>
			<div class="oneday-right" >
				<span class="oneday-city">搜索</span>
			</div>
		</header>
		<div class="oneday-main">
			<spotlistscroll :spotlist="itemsinfo.spotlist"/>
			<ticketlist :spotitemlist="itemsinfo.spotitemlist"/>
			<bottomlist :itemtitle="itemsinfo.bottomlist" :itemrightlist="itemsinfo.tourtypelist"/>
			<pagenation @changepage="handleNextPage"/>
		</div>	
	</div>
</template>
<script>

import ticketlist from './components/ticketlist/ticketlist'
import bottomlist from './components/bottomlist/bottomlist'
import spotlistscroll from './components/spotlistscroll/spotlistscroll'
import pagenation from './components/pagenation/pagenation'
import axios from 'axios'
	export default {
		data() {
			return ({			
					value: "一日游",
					itemsinfo:""
				})
		},
		components: {
			ticketlist,
			bottomlist,
			spotlistscroll,
			pagenation
		},
		methods: {		
			getInfoaxios() {
				axios.get("/static/onedaytour/onedayspot1.json")
					 .then((res) => {
					 		this.getItemsInfo(res)
					 	})
			},
			getItemsInfo(res) {
				this.itemsinfo = res.data.data;
			},
			getListInfo(res) {
				this.itemsinfo.spotitemlist = res.data.data.spotitemlist;
			},
			handleDeletValue() {
				this.value = "";
			},
			handleNextPage(num) {
				axios.get("/static/onedaytour/onedayspot"+ num +".json")
					 .then((res) => {
					 		this.getListInfo(res)
					 	})
			}
		},
		mounted() {						
			this.getInfoaxios();
  		}
	}
</script>
<style scoped>
	.oneday-header{
		position: relative;
	    overflow: hidden;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	    z-index: 10;
	}
	.oneday-left{
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
	.oneday-title{
	    position: relative;
	    margin: .14rem 0.98rem .14rem .8rem;
	    background: #fff;
	    height: .6rem;
	    line-height: .6rem;
	    border-radius: .06rem;
	    padding: 0 0.6rem 0 0.2rem;
	}
	.oneday-search{
		display: block;
		height: .4rem;
		width: 100%;
		border: none;
		font-size: 0.28rem;
		padding: .1rem 0;
		font-family: "Microsoft Yahei",Arial;
    	font-size: .28rem;
	}
	.oneday-remove{
		position: absolute;
		right: 2%;
		bottom: 16%;
		border: none;
		display: inline-block;
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 0.2rem;
		font-size: .32rem;
		color: #fff;
		line-height: .4rem;
		text-align: center;
		font-weight: 900;
	}
	.oneday-right{
		position: absolute;
		top: 0;
		right: 0;
		margin-right: .02rem;
		line-height: .88rem;
		width: 0.98rem;
		text-align: center;
	}
	.oneday-city{
		display:block;
		overflow:hidden;
		width: 0.98rem;
        height: .88rem; 
		line-height: 0.88rem;
		color: #fff;
        word-break:keep-all;
        white-space:nowrap;
        text-overflow:ellipsis;
	}
	
</style>