<template>
    <swiper :options="swiperOption">
        <swiper-slide>
            <ul class="swiper-ul">
                <li v-for="item in items" :key="item.id" class="swiper-ul-li">
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
                <li v-for="item in latterItems" :key="item.id" class="swiper-ul-li">
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
        <div class="home-swiper-ori-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
    //引入局部组件
    import {swiper, swiperSlide} from "vue-awesome-swiper";

    export default {
        data() {
            return {
                items: [{
                    id: "1",
                    text: "景点门票",
                    link: "/willchange/1",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"
                },{
                    id: "2",
                    text: "动植物园",
                    link: "/willchange/2",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png"
                },{
                    id: "3",
                    text: "故宫",
                    link: "/willchange/3",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png"
                },{
                    id: "4",
                    text: "一日游",
                    link: "/willchange/4",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png"
                },{
                    id: "5",
                    text: "必游榜单",
                    link: "/willchange/5",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png"
                },{
                    id: "6",
                    text: "秋色美",
                    link: "/willchange/6",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png"
                },{
                    id: "7",
                    text: "游乐场",
                    link: "/willchange/7",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png"
                },{
                    id: "8",
                    text: "泡温泉",
                    link: "/willchange/8",
                    img: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"
                }],
                latterItems: [{
                    id: "1",
                    text: "城市观光",
                    link: "/willchange/1",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png"
                },{
                    id: "2",
                    text: "玻璃栈道",
                    link: "/willchange/2",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/29/c16cd064d85d8502.png"
                },{
                    id: "3",
                    text: "名胜古迹",
                    link: "/willchange/3",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png"
                },{
                    id: "4",
                    text: "游周边",
                    link: "/willchange/4",
                    img: "https://img1.qunarzz.com/piao/fusion/1602/f2/71eb19f77e3f21f7.png"
                },{
                    id: "5",
                    text: "自然风光",
                    link: "/willchange/5",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png"
                },{
                    id: "6",
                    text: "古北水镇",
                    link: "/willchange/6",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png"
                },{
                    id: "7",
                    text: "景点讲解",
                    link: "/willchange/7",
                    img: "http://img1.qunarzz.com/piao/fusion/1707/34/9285073fde1eb702.png"
                },{
                    id: "8",
                    text: "全部",
                    link: "/willchange/8",
                    img: "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png"
                }],
                swiperOption: {
                    direction: 'horizontal',//vertical
                    autoHeight: true,
                    pagination: '.home-swiper-ori-pagination',
                    bulletClass: 'home-ori-bullet',
                    bulletActiveClass: 'home-ori-bullet-active',
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
    .home-swiper-ori-pagination{
        position: absolute;
        bottom: .06rem;
        padding: 0 .06px;
        width: 100%;
        text-align: center;
    }
    .home-ori-bullet, .home-ori-bullet-active{
        display: inline-block;
        margin: 0 .04rem;
        width: .12rem;
        height: .12rem;
        border-radius: 50%;
        background: rgba(144,144,144,0.8);
    }
    .home-ori-bullet-active{
        background: rgba(0,175,190,.8);
    }
</style>