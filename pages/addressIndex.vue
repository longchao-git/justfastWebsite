<template>
    <div>
        <!--整屏滚动插件-->
        <div class="p-relative head-bg">
            <img class="address_bg" src="~/assets/images/bg.png" alt="" />
            <div class="hot_cards">
                <div class="flex flex-bw flex-a-c title">
                    <h3 class="module_title">热点事件</h3>
                    <div class="see_all">查看全部</div>
                </div>
                <div class="card_container">
                    <div class="card_item" v-for="item in 4" :key="item">
                        <div class="card_img_container">
                            <img class="card_img fit-cover" v-if="item !== 2" :src="'https://picsum.photos/200/300?id=' + item + 1" />
                            <video controls class="card_img fit-cover" v-else>
                                <source src="http://custome.zhiruanai.com/watch_luminox/1716790019263_367ca518.mp4" type="video/mp4" />
                            </video>
                            <img class="play_control cursor-pointer" src="~/assets/images/icon_play.png" />
                            <img class="play_collect cursor-pointer" src="~/assets/images/icon_collect_off.png" />
                        </div>
                        <div class="flex flex-column content_text">
                            <span class="font18 fontb beyond">泰国 呵叻府Pong Ta Long 出行vlog~</span>
                            <span class="color-4B4B4B font14 line22">距离你<span>4529 km</span></span>
                            <span class="color-383838 font14 line22 beyond">游客说:“非常适合我这种单人成行的游客打卡”</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <sales-goods-util />
    </div>
</template>

<script>


import salesGoodsUtil from '../components/cloudSales/home';
import config from '../config';
import { mapMutations } from 'vuex';

export default {
    components: {
        salesGoodsUtil,
    },
    data() {
        return {

        };
    },

    async fetch() {

    },
    methods: {},
    mounted() {},
};
</script>
<style scoped lang="scss">
.head-bg {
    @extend .tran-300ms;
    height: 760px;
    margin-bottom: 32px;
    .address_bg {
        width: 100%;
        height: 100%;
    }
}
.hot_cards {
    width: 80%;
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
}
.card_container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card_item {
    width: calc((100% - 96px) / 4);
    border-radius: 8px;
    background-color: #ffffff;
    .card_img_container {
        position: relative;
        .card_img {
            width: 100%;
            height: 312px;
            border-radius: 8px;
        }
        .play_control {
            width: 60px;
            height: 60px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        }
        .play_collect {
            width: 40px;
            height: 40px;
            position: absolute;
            right: 8px;
            top: 8px;
            z-index: 2;
        }
    }
}
.module_title {
    font-size: 36px;
    color: #ffffff;
    font-weight: 500;
    font-family: 'Source Han Sans CN';
}
.see_all {
    display: flex;
    padding: 10px 30px;
    height: fit-content;
    line-height: normal;
    align-items: center;
    border-radius: 32px;
    border: 1.5px solid #ffffff;
    color: #ffffff;
    font-family: 'Source Han Sans CN';
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
}
.title {
    margin-bottom: 16px;
}
.content_text {
    padding: 16px;
}
/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
    .module_title {
        font-size: 30px;
    }
    .card_item {
        width: calc((100% - 48px) / 3);
        .card_img {
            height: 200px;
        }
    }
}

@media screen and (max-width: $pad-max-width) {
    .module_title {
        font-size: 26px;
    }
    .card_container {
        .card_item {
            width: calc((100% - 48px) / 3) !important;
            .card_img {
                height: 140px;
            }
            .play_control {
                width: 40px;
                height: 40px;
            }
            .play_collect {
                width: 30px;
                height: 30px;
            }
        }
    }
    .see_all {
        padding: 10px 25px;
        font-size: 14px;
    }
}

@media screen and (max-width: $phone-max-width) {
    .module_title {
        font-size: 18px;
    }
    .hot_cards {
        width: 90%;
    }
    .card_container {
        .card_item {
            width: calc((100% - 12px) / 2) !important;
            margin: 0 !important;
            .card_img {
                height: 100px;
            }
            .play_control {
                width: 30px;
                height: 30px;
            }
            .play_collect {
                width: 20px;
                height: 20px;
            }
        }
    }
    .see_all {
        padding: 6px 14px;
        font-size: 14px;
    }
}
</style>
