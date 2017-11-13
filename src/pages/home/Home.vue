<template>
  	<div class="main">
		<index-header/>

		<imgs-swiper :data="swiperInfo" />
		<icons-swiper :icons="iconInfo" :recommends="recommendInfo"/>
		<index-prompt/>
		<index-hot-list/>
		<index-weekend-list/>

	</div>
</template>

<script>


	import header from './Header.vue';
	import imgswiper from './imgswiper.vue';
	import iconswiper from './iconswiper.vue';
	import prompt from './Prompt';
	import hotList from './HotList';
	import weekendList from './WeekendList';
	import axios from 'axios'


	export default {
		created:function() {
			this.$http.get('/static/index.json').then(response => {
				this.swiperInfo = response.body.data.swiperInfo;
				this.iconInfo = response.body.data.iconInfo;
				this.recommendInfo = response.body.data.recommendInfo;
			},response => {
				console.log("get index data error");
			})
		},
		data(){
			return{
		       swiperInfo: [],
		       iconInfo: [],
		       recommendInfo: []
			}
		},
		components: {
			"index-header": header,
			"imgs-swiper": imgswiper,
			"icons-swiper": iconswiper,
			"index-prompt": prompt,
			"index-hot-list": hotList,
			"index-weekend-list": weekendList
		},

		mounted() {
			this.getHomeData();
		},
		methods: {
			getHomeData() {
				axios.get('/api/home/index.json?city=北京')
				  .then(this.handleGetDataSucc.bind(this))
				  .catch(this.handleGetDataError.bind(this));
			},

			handleGetDataSucc(response) {
				console.log("succ")
			},

			handleGetDataError(err) {
				console.log("err")
			}
		}

	}
</script>

<style scoped>
	.main{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		min-height: 100%;
		background: #f5f5f5;
	}
</style>



