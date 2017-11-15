<template>

	<div>
    	<div class="detail-tab detail-flexbox border-bottom"   
 v-for="(tab,index) in tabsName" :key="index">
        	<div class="detail-tab-item detail-flexbox-item  border-bottom "    @click="handleTabData(tab,index)" :class="{'detail-tab-active':index==xc}" >
        		{{tab.name}}
        	</div>	
    	</div>
	</div>
	
</template>

<script>
	
	export default{
		
           props:["scrollY", "xc"],
            data() {  
            return({
            	tabsName: [{	               
            	   name: "行程介绍",  
	               id: 0 
	              
	             }, {  
	               name: "费用说明",  
	               id: 1  
	        
	             }, {  
		           name: "使用说明",  
		           id: 2
	       
	             }],
	             num: 0
	           
	           	 }) 
            	
            },  
            computed:{

            },
            updated() {
            		
            		var that = this
					if(that.scrollY < 1400) {
						that.active = 0
					}else if(that.scrollY > 1400 && that.scrollY < 2000 ) {
						that.active = 1
					}else if(that.scrollY > 2000) {
						that.active = 2
					}
					// console.log(that.scrollY)
					
						
            },
            methods: {  

                handleTabData: function(tab,index) { 
                
     				this.$emit("changescroll", index)

     				//console.log(this.number)
	
                } 
    		}       
		}
</script>

<style scoped>
	
	.detail-tab{
	    overflow: hidden;
	    margin-bottom: -.2rem;
	    background-color: #fff;
   		width: 2.5rem;
   		float: left;
	}
	.detail-border-bottom::before{
		position: relative;
		left: 0;
	    width: 100%;
	    height: 1px;
    	transform: scaleY(.5);
    	bottom: 0;
    	border-bottom: 1px solid #e0e0e0;
	    transform-origin: 0 100%;
	}
	.detail-tab-item{
		width: 2.5rem;
		display: block;
	    height: .4rem;
	    padding: .2rem 0;
	    font-size: .28rem;
	    line-height: .4rem;
	    text-align: center;
	    flex: 1;

	}
	.detail-tab-active{
        border-bottom: .04rem solid #00afc7;
    	color: #00afc7;
	}
	.detail-tab-unactive{
        border-bottom: 0;
    	color: #616161;
	}
	


</style>
