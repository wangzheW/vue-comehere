<template>
	<div class="contain" ref="cont">
		<div class="detail-header" ref="blueBlock">
			<span class="back iconfont icon-fanhui" @click="handleBack"></span>
			<h1 class="detail-header-title">
				[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游
			</h1>
			<span class="mp-header-right" mp-role="right">
			</span>
		</div>

		<oneDay-header :headerCon="headerCon"/>
		<oneDay-satisfied/>
		<oneDay-detailGroup class="detail-group" :class="{ 'detail-position' : show}" ref="group" :scrollY="yscroll"  :xc="a" @changescroll="changeScroll"/> 
		<oneDay-cardGroup/>
		<oneDay-scheduling :schedulingCon="schedulingCon"/>
		<oneDay-detailPrd/>
		<oneDay-tripMap/>
		<oneDay-costDetail/>
		<oneDay-useDetail/>
		<oneDay-useComments/>
		<oneDay-rightBooking/>

	</div>
</template>

<script>
	
	
	import '../../assets/font/iconfont.css';
	import header from './components/header.vue'
	import satisfied from './components/satisfied'
	import detailGroup from './components/detailGroup'
	import cardGroup from './components/cardGroup'
	import scheduling from './components/scheduling'
	import detailPrd from './components/detailPrd'
	import tripMap from './components/tripMap'
	import costDetail from './components/costDetail'
	import useDetail from './components/useDetail'
	import useComments from './components/useComments'
	import rightBooking from './components/rightBooking'
	import axios from 'axios'
	import { AJAX_GET_DATA } from './types.js'
	import { mapState, mapActions } from 'vuex'



	export default{

		data() {
			return ({
							show: false,
							yscroll:0,
							a: 0
							
						})
		},

		components: {
			"oneDay-header": header,		
			"oneDay-satisfied": satisfied,
			"oneDay-detailGroup": detailGroup,
			"oneDay-cardGroup": cardGroup,
			"oneDay-scheduling": scheduling,
			"oneDay-detailPrd": detailPrd,
			"oneDay-tripMap": tripMap,
			"oneDay-costDetail": costDetail,
			"oneDay-useDetail": useDetail,
			"oneDay-useComments": useComments,
			"oneDay-rightBooking": rightBooking
		},
		
		computed:mapState({
			headerCon: (state) => {
				console.log(state.oneDayDetail)
				return state.oneDayDetail.headerCon
			},
			schedulingCon: (state) => {
				return state.oneDayDetail.schedulingCon
			}
		}),
		mounted() {
			!this.headerCon.length && this.getHomeData();
			!this.schedulingCon.length && this.getHomeData();

			
				
				
				window.addEventListener('scroll',this.handleScroll)	
			},
			beforeDestroy(){
				window.removeEventListener("scroll",this.handleScroll)
			},
			methods: {
				handleScroll:function() {
					var that = this;
					
					var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
					// console.log(scrollTop)
					var b = scrollTop>300?300:scrollTop;
					var s =  b/300;
					// that.yscroll = window.scrollY;
					this.$refs.blueBlock.style.opacity = s;
					var c = scrollTop;
						if (c > 380){
							console.log(123123)
							that.show = true
						}else if(c < 380){
							that.show = false 
						}
						
					if(scrollTop < 1400) {
						this.a = 0
					}else if(scrollTop > 1400 && scrollTop < 1800 ) {
						this.a = 1
					}else if(scrollTop > 1800) {
						this.a = 2
					}
				},
				changeScroll:function(index) {
						
						var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
						
						if (index == 0) {
							
							document.documentElement.scrollTop = 600 ;
						}else if(index == 1){
							document.documentElement.scrollTop = 1600 ;
						}else{
							document.documentElement.scrollTop =  2000 ;

						}
					},
					handleBack() {
						history.go(-1)
					},...mapActions({
					getHomeData: (dispatch) => {
						dispatch(AJAX_GET_DATA)
					}
				})
			}
		}
</script>

<style scoped>
	.detail-position{
		position:fixed;
		top:.6rem;
		background: #fff;
		z-index: 10;
	}	
	.detail-group{
		display: flex;
		width: 100%;
		min-height: .6rem;
		margin-top: .2rem;
	    padding: .01rem 0;
	    background-color: #fff;
	    opacity: 1;
	}
	.contain{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		min-height: 100%;
		background: #f5f5f5;
	}
	.detail-header{
		position: fixed;
	    width: 100%;
	    top: 0px;
	    left: 0px;
	    display: block;
	    opacity: 1;
	    height: .88rem;
	    background: #00bcd4;
	    z-index: 91;
	}	
	.detail-header-title{
		overflow: hidden;
	    margin: 0 1rem;
	    line-height: .88rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .32rem;
	    text-align: center;
	    color: #fff;
	}
	.back{
		position: absolute;
		left: 0;
	    top: 0;
	    width: .8rem;
	    height: .88rem;
	    line-height: .88rem;
	    color: #fff;
	    text-align: center;
	}
</style>	