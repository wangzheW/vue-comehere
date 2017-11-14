<template>
    <div class="index-swiper-clear-sway">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperInfo" :key="item.id">
                <router-link :to="item.link">
                    <div class="swiper-img-con">
                        <img class="swiper-img" :src="item.imgUrl" :alt="item.imgAlt">
                    </div>
                </router-link>
            </swiper-slide>
            <div id="home-swiper-pagination" class="home-swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    //引入局部组件
    import {swiper, swiperSlide} from "vue-awesome-swiper";

    export default {

        props: ['swiperInfo'],

        data() {
            return {
                swiperOption: {
                    loop: true,
                    autoplay: 2000,
                    direction: 'horizontal',//vertical
                    autoHeight: true,
                    pagination: '.home-swiper-pagination',
                    bulletClass: 'home-swiper-bullet',
                    bulletActiveClass: 'home-swiper-bullet-active',
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
    .home-swiper-bullet, .home-swiper-bullet-active{
        display: inline-block;
        width: .14rem;
        height: .14rem;
        background: #ccc;
        border-radius: 50%;
    }
    .home-swiper-bullet-active{
        background: #fff;
    }
</style>

<style scoped>
    .index-swiper-clear-sway{
        width: 100%;
        height: 0;
        padding-bottom: 31.25%;
    }
    .swiper-img-con{
        width: 100%;
    }
    .swiper-img{
        width: 100%;
    }
</style>