<template>
	<div mp-role="moreInfoCon" class="mp-moreinfo">
		<div mp-role="pageCon">
			<div class="mp-pagination">
				<div :class="{'mp-prevbtn':pageNum > 1,'mp-disable-btn':1==pageNum}" @click="handlePrevPageInfo">上一页</div>
				<span class="mp-page-num" >{{pageNum}} / {{totalNum}}</span>
				<div   :class="{'mp-nextbtn':pageNum < totalNum,'mp-disable-btn': pageNum >= totalNum}"@click="handleNextPageInfo">下一页</div>
			</div>
			<div class="mp-page-text">去哪儿门票</div>
		</div>
	</div>
</template>
<script>
	export default	{
		data() {
			return ({
				pageNum:1,
				totalNum:3
			})
		},
		methods: {
			handleNextPageInfo: function() {
				this.pageNum += 1;
				if(this.pageNum > this.totalNum){
					this.pageNum = this.pageNum<this.totalNum?this.pageNum:this.totalNum;
					return ""
				}
				this.pageNum = this.pageNum<this.totalNum?this.pageNum:this.totalNum;			
				this.$emit("changepage",this.pageNum);
				 return this.pageNum;
			},
			handlePrevPageInfo:function() {
				this.pageNum -= 1;
				// console.log(this.pageNum)
				if(this.pageNum < 1){
					this.pageNum = this.pageNum>0?this.pageNum:1;
					return ""
				}
				this.pageNum = this.pageNum>0?this.pageNum:1;
				this.$emit("changepage",this.pageNum);
				return this.pageNum;
			}
		}
	}
</script>
<style>
	.mp-moreinfo{
		padding: .2rem 0;
	    color: #00afc7;
	    line-height: .82rem;
	    text-align: center;
	    background: #f3f4f5;

	}
	.mp-pagination{
		height: .7rem;
    	line-height: .7rem;
	}
	.mp-disable-btn{
		display: inline-block;
    	width: 1.4rem;
    	background: #bdbdbd;
	    color: #fff;
	    border: 0;
        line-height: .6rem;
    	border-radius: .06rem;
	}
	.mp-page-num{
		color: #212121;
	    line-height: .6rem;
	    padding: 0 15px;
	}
	.mp-nextbtn{
		display: inline-block;
	    width: 1.4rem;
	    border: .02rem solid #00afc7;
	    background: #fff;
	    color: #00afc7;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.mp-prevbtn{
		display: inline-block;
	    width: 1.4rem;
	    border: .02rem solid #00afc7;
	    background: #fff;
	    color: #00afc7;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
</style>