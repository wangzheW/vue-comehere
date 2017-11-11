<template>
    <swiper :options="swiperOption">
        <swiper-slide>
            <ul class="swiper-ul">
                <li v-for="item in swiperNavInfoFirst" :key="item.id" class="swiper-ul-li">
                    <router-link :to="item.link">
                        <img :src="item.img" alt="" class="swiper-ul-li-img">
                    </router-link>
                    <router-link :to="item.link">
                        <div class="swiper-ul-li-text">
                            {{item.text}}
                        </div>
                    </router-link>
                </li>
            </ul>
        </swiper-slide>
        <swiper-slide>
            <ul class="swiper-ul">
                <li v-for="item in swiperNavInfoSecond" :key="item.id" class="swiper-ul-li">
                    <router-link :to="item.link">
                        <img :src="item.img" alt="" class="swiper-ul-li-img">
                    </router-link>
                    <router-link :to="item.link">
                        <div class="swiper-ul-li-text">
                            {{item.text}}
                        </div>
                    </router-link>
                </li>
            </ul>
        </swiper-slide>
        <div class="home-swipernav-ori-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
    //引入局部组件
    import {swiper, swiperSlide} from "vue-awesome-swiper";

    export default {
        props: ['swiperNavInfoFirst', 'swiperNavInfoSecond'],
        data() {
            return {
                swiperOption: {
                    direction: 'horizontal',//vertical
                    autoHeight: true,
                    pagination: '.home-swipernav-ori-pagination',
                    bulletClass: 'home-swipernav-ori-bullet',
                    bulletActiveClass: 'home-swipernav-ori-bullet-active',
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
    .home-swipernav-ori-pagination{
        position: absolute;
        bottom: .06rem;
        padding: 0 .06px;
        width: 100%;
        text-align: center;
    }
    .home-swipernav-ori-bullet, .home-swipernav-ori-bullet-active{
        display: inline-block;
        margin: 0 .04rem;
        width: .12rem;
        height: .12rem;
        border-radius: 50%;
        background: rgba(144,144,144,0.8);
    }
    .home-swipernav-ori-bullet-active{
        background: rgba(0,175,190,.8);
    }
</style>

<style scoped>
    .swiper-ul{
        overflow: hidden;
        float: left;
        width: 100%;
        height: 3.8rem;
    }
    .swiper-ul-li{
        float: left;
        width: 25%;
        height: 1.3rem;
        padding-top: .3rem;
        text-align: center;
    }
    .swiper-ul-li-img{
        width: .66rem;
        height: .66rem;
    }
    .swiper-ul-li-text{
        width: 100%;
        height: .28rem;
        margin-top: .2rem;
        line-height: .28rem;
        color: #000;
    }
</style>