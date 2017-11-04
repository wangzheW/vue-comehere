<template>
    <swiper :options="swiperOption">
        <swiper-slide>
            <div class="swiper-img-con">
                <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1609/c9/cacbf705c5417e02.jpg_640x200_99b2676a.jpg" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-img-con">
                <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1609/f3/52a119dbed871902.jpg_640x200_b4573df8.jpg" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-img-con">
                <img src="http://img1.qunarzz.com/piao/fusion/1703/51/01864a8a35c20402.jpg_640x200_d16dcbcd.jpg" alt="" class="swiper-img">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-img-con">
                <img src="http://img1.qunarzz.com/piao/fusion/1711/b3/66f7230d9ad6e002.jpg_640x200_077e61ee.jpg" alt="" class="swiper-img">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-img-con">
                <img src="http://img1.qunarzz.com/piao/fusion/1711/c5/2b4166f592b33202.jpg_640x200_27b41388.jpg" alt="" class="swiper-img">
            </div>
        </swiper-slide>
        <div id="home-swiper-pagination" class="home-swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
    //引入局部组件
    import {swiper, swiperSlide} from "vue-awesome-swiper";

    export default {
        data() {
            return {
                swiperOption: {
                    autoplay: 3000,
                    direction: 'horizontal',//vertical
                    autoHeight: true,
                    pagination: '.home-swiper-pagination',
                    bulletClass: 'home-bullet',
                    bulletActiveClass: 'home-bullet-active',
                    observeParents: true
                }
            }
        },
        //注册局部组件
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style>
    .swiper-img-con{
        width: 100%;
        height: 0;
        padding-bottom: 31.25%;
    }
    .swiper-img{
        width: 100%;
    }
    #home-swiper-pagination{
        width: 16%;
        margin-left: 42%;
    }
    .home-swiper-pagination{
        position: relative;
        top: -.42rem;
        z-index: 10;
        display: flex;
        justify-content: space-around;
    }
    .home-bullet, .home-bullet-active{
        display: inline-block;
        width: .14rem;
        height: .14rem;
        background: #ccc;
        border-radius: 50%;
    }
    .home-bullet-active{
        background: #fff;
    }
</style>