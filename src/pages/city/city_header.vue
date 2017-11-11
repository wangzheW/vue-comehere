<template>

  	<div class="backgroud-color">

  		<div class="city-header-area"> 
  			<router-link to="/">
  				<span class="city-header-goback iconfont">&#xe624;</span>
  			</router-link>
			<span class="city-china city-area" @click="handleChinaCity" :style="colorChina">国内</span>
			<span class="city-abroad city-area" @click="handleAbroadCity" :style="colorAbroad">海外</span>
  		</div>
		
		<div class="header-keyword">
			<input type="text" class="city-keyword" value="输入城市名或拼音" @focus="handleFocus"  @blur="handleBlur" :style="styleObj"/>

			<div class="search-city-con">
            	<div class="search-city border-topbottom">11</div>
        	</div>

		</div>

		
		<!-- <div class="cityarea-group">
			<div class="cityarea-title border-bottom">您的位置</div>
			<div class="cityarea-content city-now border-bottom">
				<div class="cityitem-light">
					<a class="cityitem-name cityitem-seleted">北京</a>
				</div>
			</div>
		</div> -->
		
	
		
  	</div>

</template>

<script>

	import "../../assets/font/iconfont.css";

	export default {
		
		data(){
			return{
				navStyle: false,
		      	colorChina: {
                    "color": "#00afc7",
                    "background": "#fff"
                },
                colorAbroad: {
                    "color": "#fff",
                    "background": "#00afc7"
                },
                styleObj:{
                    "text-align": "center"
                }
			}
		},
		methods: {
			handleChinaCity() {
				//console.log(1);
				this.colorChina = {
                    "color": "#00afc7",
                    "background": "#fff"
                }
                this.colorAbroad = {
                    "color": "#fff",
                    "background": "#00afc7"
                }

			},
			handleAbroadCity() {
				//console.log(2);
				this.colorAbroad = {
                    "color": "#00afc7",
                    "background": "#fff"
                }
                this.colorChina = {
                    "color": "#fff",
                    "background": "#00afc7"
                }
			},
			handleBlur(e) {
				e.target.value = "输入城市名或拼音";
				this.styleObj = {
					textAlign : "center"
				}
			},
			handleFocus(e) {
				//console.log(e.target.value);
				e.target.value = "";
				this.styleObj = {
					textAlign : "left"
				}
			}
		}
	}
</script>

<style scoped>
	.backgroud-color{
		background: #f5f5f5;
	}
	.city-header-area{
		overflow: hidden;
		position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
		width: 100%;
        line-height: .88rem;
        background: #00afc7;
        text-align: center;
	}
	.city-header-goback{
		float: left;
		width: 6%;
        padding: 0 .22rem;
        font-weight: bold;
        font-size: .36rem;
        color: #fff;    
	}
	.city-area{
		display: inline-block;
        line-height: .56rem;
        width: 30%;
		border: 1px solid #fff;
        color: #fff;
	}
	.city-china{
		float: left;
		margin-left: 10%;
        margin-top: .14rem;
		border-radius: 3px 0 0 3px;
        background: #fff;
        color: #00afc7;
	}
	.city-abroad{
		float: left;
        margin-top: .14rem;
		border-radius: 0 3px 3px 0; 
	}
	 .header-keyword {
        margin-top: .88rem;
        padding: 0 .4rem .1rem .2rem;
        background: #00afc7;
        font-size: .26rem;
        color: #9e9e9e;
    }
    .city-keyword {
        display: block;
        width: 100%;
        line-height: .3rem;
        padding: .16rem 0 .16rem .2rem;
        border-radius: .06rem;
        border: none;
        color: #777;
        /*text-align: center;*/
    }
    /*.cityarea-title {
	    line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .26rem;
	}
    .cityarea-content {
	    overflow: hidden;
	    padding-right: .5rem;
	    padding-left: .2rem;
	    background: #fff;
	}
	.city-now {
	    padding-top: .04rem;
	    padding-bottom: .26rem;
	}
	.cityitem-light {
		float: left;
	    width: 33.33%;
	    padding: .2rem .14rem 0 .1rem;
	    -webkit-box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    box-sizing: border-box;
	}
	.cityitem-name {
		overflow: hidden;
	    display: block;
	    line-height: 28px;
	    border-radius: .06rem;    
	    white-space: nowrap;
	    text-overflow: ellipsis;
		border: .02rem solid #c9cccd;
	    color: #212121;
	    text-align: center;
	}
	.cityitem-seleted {
	    border-color: #00afc7;
	    color: #00afc7;
	}*/
	.search-city-con {
        position: absolute;
        left: 0;
        top: 1.68rem;
        width: 100%;
        background: #fff;     
    }
    .search-city {
    	width: 100%;
        line-height: .76rem;
        padding-left: .2rem;
        font-size: .28rem;
        color: #212121;
    }
    .border-topbottom{
    	border-top-color: #dfe0e1;
        border-bottom-color: #dfe0e1;
    }
</style>



