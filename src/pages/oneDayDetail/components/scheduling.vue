<template>
<div class="trip">
	<h3 class="trip-title">行程安排</h3>
	<div mp-role="tabContent">  
        <div class="trip-timeline" v-for="item in schedulingCon" :key="item.id">
            <div class="trip-routeitem" >
                <span class="trip-date">{{item.date}}</span>
             		<div class="trip-verticalline trip-dark-dash">
                        <span class="oneDay-iconfont iconfont " :class="item.fontName"></span>  
                            <span class="route-title">{{item.CollectionPlace}}</span>
                            <p class="route-desc">{{item.TripCon}}</p>
                        </div>
                    </div>
            	</div>
    		</div>
		</div>
</template>

<script>
	export default {
		props: ['schedulingCon']
	}
	

</script>

<style>
	.trip{
		background: #fff;
		min-height: 10.13rem;
		padding-top: .3rem;
	}
	.trip-title{
	    color: #616161;
	    font-size: .4rem;
	    margin: 0 0 0 .2rem;
	    background: #fff;
	}
	.trip-timeline{
		padding: .2rem;
	}
	.trip-routeitem{
		padding-bottom: .14rem;
	}
	.trip-date{
		overflow: hidden;
	    float: left;
	    width: .72rem;
	    height: .44rem;
	    white-space: nowrap;
        color: #212121;
	}
	.trip-verticalline{
	    position: relative;
	    margin-left: .76rem;
		padding-left: .7rem;
		font-size: .28rem;
		padding-bottom: .1rem;
	}
	.trip-dark-dash::before{
		content: '';
	    position: absolute;
	    z-index: 2;
	    top: 4px;
	    left: .28rem;
	    width: 8px;
	    height: 12px;
	    border-radius: 4px;
	    background-color: #fff;
	}
	.oneDay-iconfont{
	    position: absolute;
	    z-index: 2;
	    top: 2px; 
	    left: .2rem;
	    color: #00afc7;
	    font-size: .28rem;
	}
	.trip-dark-dash::after {
	    content: '';
	    position: absolute;
	    bottom: -.4rem;
	    left: .04rem;
	    width: 1px;
	    height: 100%;
	    margin-left: .3rem;
	    border-radius: 3px;
	    background-color: rgba(217,217,217,0.7);
	}
	.route-title{
		color: #212121;
		line-height: .4rem;
	}
	.route-desc{
		color: #616161;
    	font-size: .28rem;
    	line-height: .4rem;
	}
	.trip-timeline:nth-child(1) .route-title{
		color:#00afc7;
	}
	
</style>