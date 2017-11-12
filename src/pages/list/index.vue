<template>
	<div>
		<div class="search-list">
			<list-header/>
			<navigator :menuShow="menuShow" :recommendShow="recommendShow" :menuItemInfo="menuItemInfo" @recommendItemClick="recommendItemClick" @recommendClick="recommendClick"  @classifyClick="classifyClick"  @menuRightItemClick="menuRightItemClick"/>
			<listcon :listcon="content"/>
		</div>

		<div class="mask" v-show="maskShow" @touchstart="handleMaskClick"></div>
	</div> 
</template>

<script>
	import header from './header'
	import navigator from './navigator'
	import listcon from './listcon'
	import bus from '../../main.js';
	
	export default {
		data () {
		    return {
		     	maskShow: false,
		     	menuShow: false,
		     	recommendShow: false,
		     	menuItemInfo: [],
		     	content:[]
		    }
		},
		created() {
			this.$http.get('/static/list.json').then(response => {
	        	this.menuItemInfo = response.body.data.menuItemInfo
	        }, response => {
	            console.log("get list data error");
	        });	

	        this.$http.get('/static/listcon.json').then(response => {
		        var data = response.body.data;
		        this.content = data.content;
		    }, response => {
		    	console.log("get listcon data error");
	      });
		},
		
		mounted(){
			var that = this;
			window.bus.$on("menuRightClick", function(res){
				// console.log(res)
				that.menuShow = false;
				that.maskShow = false;
			})
		},

		components: {
			"list-header": header,
			"navigator": navigator,
			"listcon": listcon
		},

		methods:{
			classifyClick() {
				return (this.menuShow  = !this.menuShow, this.recommendShow = false,this.maskShow=this.menuShow)
			},
			handleMaskClick() {
				return this.maskShow = this.recommendShow = this.menuShow =  false
			},
			recommendClick() {
				return (this.recommendShow = !this.recommendShow, this.maskShow = this.recommendShow)
			},
			recommendItemClick() {
				return this.recommendShow = this.maskShow = false
			},
			menuRightItemClick(res) {
				console.log(res);
				//return this.maskShow = false
			}
		}
	}
</script>

<style scoped>
	.search-list{
		position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    min-height: 100%;
	    background: #f5f5f5;
	}
	.mask{
		position: fixed;
		top:0;
		width: 100%;
		height: 100%;
		z-index: 3;
		background: rgba(0,0,0, .35);
	}
</style>

