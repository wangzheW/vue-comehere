<template>
<div>
	<div class="infocon-comments">
		 <span class="comments-score">4.9</span>
        <span class="comments-text">分</span>
        <span class="comments-satisfied">非常满意</span>
        <span class="comments-totalnum">用户评论(281)&nbsp;
          <span class="comments-into iconfont  icon-you"></span>
        </span>
        </div>
          <div class="comments-item">
      		<div class="comments-level">
            <span class="comments-starlevel">
                <strong class="comments-iconfont iconfont icon-wuxing"></strong>
            </span>
            <span class="comments-date">b*5&nbsp;&nbsp;2017-11-06</span>
        </div><p class="wellcomments-text">兵阿哥的导游服务超级棒，贴心，诙谐幽默，知识渊博，出口成章，引经据典，留下了美好的回忆</p>
	</div>
	</div>
</template>

<script>

</script>

<style scoped>

	.infocon-comments{
		position: relative;
	    margin-top: .2rem;
	    background-color: #fff;
	    height: .8rem;
	    line-height: .8rem;
	}
	.infocon-comments:before{
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 200%;
		height: 0;
		transform: scale(0.5);
		transform-origin: left top;
		border-bottom: 1px solid #e0e0e0;
	}
	.comments-score{
		position: relative;
		font-size: .4rem;
	    color: #00afc7;
	    margin-left: .2rem;
	}
	.comments-text{
		color: #00afc7;
	}
	.comments-satisfied{
		position: relative;
		display: inline-block;
	    margin-left: .1rem;
	    color: #616161;
	}
	.comments-totalnum{position: relative;
	    float: right;
	    
	    top: .25rem;
	    display: inline-block;
	    line-height: .28rem;
	    font-size: .28rem;
	    margin-left: .16rem;
	    margin-right: .2rem;
   		color: #9e9e9e;
	}
	.comments-into{
	    position: relative;
	    top: .02rem;
	    font-size: .24rem;
	}
	.comments-item{
		position: relative;
		width: 100%;
		height: 1.52rem;
		box-sizing: border-box;
	    padding: .2rem;
	    background: #fff;
	}
	.comments-level{
		width: 100%;
		line-height: .2rem;
	}
	.comments-starlevel{
	    width: 1.5rem;
   		
	}
	.comments-iconfont{
		color: #00bcd4;
		font-size: .2rem;
	}
	.comments-date{
	    float: right;
	    margin-left: .2rem;
	    color: #616161;
	}
	.wellcomments-text{
		width:100%;
		line-height: .4rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		color: #616161;
		font-size: .28rem;
		margin-top: 0.08rem;
	}
	
	
</style>