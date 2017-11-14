<template>
	<div>
	<div class="promote-city-outer" style="">
		<div class="promote-city-container"> 
	    	<ul class="promote-city-list promote-flexbox" promote-role="cityWrap">
	    		<li class="promote-city-item promote-flexbox-layout" 
	    		v-for="(cityItem,index) in cityInfo" 
	    		@click="clickCityItem(cityItem, index)"
	    		:class="{'promote-city-actived': cityItem.active}" 
	    		>
	    			<span class="promote-city-inner">{{cityItem.hotCity}}</span>
	    		</li>
	    	</ul> 
	    </div>
	    <div class="promote-city-expand"></div>
	</div>
	</div>
</template>


<script>
	import { mapState } from 'vuex'
	import Vue from 'vue'

	export default {
		data() {
			return {
			}
		},
		methods: {
			clickCityItem(cityItem, index) {
				this.cityInfo.forEach((value, index) => {
　　　　　　　　　　	Vue.set(value,'active',false)
				})
　　　　　　　　　	Vue.set(cityItem,'active',true)
				this.commitCityIndex(index)

			},
			commitCityIndex(index) {
				this.$store.commit("changeCityIndex", index)
			}
		},
		computed: mapState({
			cityInfo: (state) => {
				return state.promote.hotCity
			}
		})
	}
</script>


<style>
	.promote-city-outer {
    	position: relative;
    	height: .76rem;
	}
	.promote-city-container {
	    margin-right: 14.6%;
	    background: #4482f6;
	}
	.promote-city-list {
	    min-height: .76rem;
	    background: #4482f6;
	}
	.promote-flexbox {
	    display: flex;
	    width: 100%;
	}
	.promote-flexbox-layout {
		flex: 1;
	}
	.promote-city-item {
	    height: .76rem;
	    text-align: center;
	    line-height: .76rem;
	}
	.promote-city-inner {
		box-sizing: border-box;
	    display: inline-block;
	    overflow: hidden;
	    max-width: 100%;
	    color: #fff;
	    font-size: .32rem;
	    line-height: .76rem;
	    text-align: left;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.promote-city-actived .promote-city-inner {
	    padding-left: .32rem;
	    background: url(../../../assets/imgs/location.png) 0 center/.2rem .28rem no-repeat;
	}
	.promote-city-expand {
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: 14.6%;
	    height: .76rem;
	    background: #86b0ff;
	}
	.promote-city-expand::before {
	    content: '\0020';
	    overflow: hidden;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    margin: -.1rem 0 0 -.1rem;
	    width: .16rem;
	    height: .16rem;
	    border-bottom: .04rem solid #fff;
	    border-left: .04rem solid #fff;
	    transform: rotate(-45deg);
	}
</style>