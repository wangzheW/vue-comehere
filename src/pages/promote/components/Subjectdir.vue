<template>
	<div>
		<div class="promote-anchor-container" v-bind:class="{'subjectDirFixed': sdf}" ref="ceiling">
			<div class="nav-wrapper">
				<div class="nav-scroll">
					<ul class="promote-anchor-list ">
						<li 
						v-for="(subject, index) in getSubject" 
						class="promote-anchor-item promote-anchor-actived"
						@click="handleClickchange(subject, index)"
						>{{subject.subject}} 
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Iscroll from "better-scroll"
	import { mapState } from "vuex"
	import { mapGetters } from "vuex"

	export default {
		data() {
			return({
		  		sdf: false,
		  		aaa: []
			})
		},
		mounted() {
			this.myScroll = new Iscroll('.nav-wrapper', { scrollX: true, scrollY: false});
			window.addEventListener('scroll', this.handleScroll)
		},
		updated() {
			
			// console.log(this.subjectInfo)

			this.myScroll.refresh()
			this.handleScroll()
		},
		beforeDestroy(){
			window.removeEventListener("scroll",this.handleScroll)
		},
		methods: {
			handleScroll () {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				var offsetTop = this.$refs.ceiling.offsetTop;
				// console.log(this.$refs.ceiling.offsetTop)
				if(scrollTop > offsetTop) {
					this.sdf = true;
				} else {
				    this.sdf = false;
				}
			},
			changeCityIndex() {

			}
			// aaa:function() {
			// 	return []
			// }
		},
		computed:mapState({
			getSubject:function(state){
				return state.promote.subject
				// console.log(state.promote.subject)
			}
		})
	}
	
</script>

<style scoped>
	.nav-wrapper {
		overflow: hidden;
	}
	.nav-scroll {
		float: left;
	}
	.promote-anchor-list {
		margin-top: .1rem;
    	height: 1.22rem;
    	font-size: 0;
	    line-height: 0;
	    text-align: center;
	    float: left;
		font-size: 0;
		white-space: nowrap;

	}
	.promote-anchor-container {
		overflow: hidden;
	    width: 100%;
	    height: .9rem;
	    padding: .16rem 0;
	}
	.promote-anchor-item {
		display: inline-block;
	    position: relative;
	    margin: 0 .12rem;
	    padding-top: .12rem;
	    width: 1.7rem;
	    height: .78rem;
	    background: url(//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/anchor_odd.png) center bottom/contain no-repeat;
	    color: #05857e;
	    font-size: .34rem;
	    line-height: .78rem;
	    text-align: center;
	}
	.promote-anchor-actived {
	    font-weight: bold;
	}
	.subjectDirFixed {
		position: fixed;
		top: 0;
		z-index: 999;
		background: #7bdafe;
	}
</style>