<template>
	<div>
		<div class="promote-country-outer">
		    <ul class="promote-flexbox">
				<li class="promote-flexbox-layout" 
				v-for="(item,index) in countryOuterInfo" 
				@click="handleClickChange(item,index)" 
				:class="{'promote-country-actived':item.active,'promote-country-unactived':!item.active}">{{item.choice}}
				</li>
	    	</ul>
	    </div>
	</div>
</template>


<script>
	import Vue from 'vue'
	import { mapState } from 'vuex'

	export default {
		data: () => {
			return{
				active: true
			}
		},
		beforeMount() {
			this.getPromoteData()
		},
		computed: mapState({
			countryOuterInfo: (state) => {
				return state.promote.countryOuterInfo;
			}	
		}),
		methods: {
			getPromoteData() {
				this.$store.dispatch("getCountryOuterData")
			},
			handleClickChange(item, index) {			
				this.countryOuterInfo.forEach((value) => {
　　　　　　　　Vue.set(value,'active',false);
　　　　　　});
				Vue.set(item,'active',true);
				this.$store.commit("CountryOrOuter", index)
			}
		}
	}
</script>


<style>
	.promote-country-outer {
	    height: .96rem;
	}
	.promote-flexbox {
		display: flex;
		width: 100%;
	}
	.promote-flexbox-layout {
	    width: 50%;
	    font-size: .32rem;
	    line-height: .96rem;
	    text-align: center;
    	color: #fff;
	}
	.promote-country-unactived{
		background-color: #86b0ff;
	}
	.promote-country-actived {
		background-color: #4482f6;
	}

	
</style>