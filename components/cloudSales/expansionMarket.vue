<template>
    <div class="cloud_sales_expansion_market">
        <div class="flex flex-bw flex-a-c title">
            <h3 class="module_title">{{ title }}</h3>
            <div class="see_all">{{ $t('home.btnText')[0] }}</div>
        </div>
        <div class="card_container">
            <div @click="goDetail" class="card_item" v-for="item in 12" :key="item">
                <div class="card_img_container">
                    <img class="card_img fit-cover" v-if="item !== 2" :src="'https://picsum.photos/200/300?id=' + item + 1" />
                    <video controls class="card_img fit-cover" v-else>
                        <source src="http://custome.zhiruanai.com/watch_luminox/1716790019263_367ca518.mp4" type="video/mp4" />
                    </video>
                    <img class="play_control cursor-pointer" src="~/assets/images/icon_play.png" />
                    <img class="play_collect cursor-pointer" src="~/assets/images/icon_collect_off.png" />
                </div>
                <div class="flex flex-column">
                    <span class="font18 fontb beyond">泰国 呵叻府Pong Ta Long 出行vlog~</span>
                    <span class="color-4B4B4B font14 line22">距离你<span>4529 km</span></span>
                    <span class="color-383838 font14 line22 beyond">游客说:“非常适合我这种单人成行的游客打卡”</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'expansionMarket',
    props: {
        title: {
            type: String,
            default: '热门VLOG',
        },
    },
    methods: {
        goDetail(){
            window.location.href = '/contentDetail'
        }
    }
};
</script>

<style lang="scss" scoped>
.cloud_sales_expansion_market {
    width: 80%;
    margin: 0 auto;
    .title {
        margin-bottom: 16px;
    }
    .module_title {
        font-size: 36px;
        color: #13161b;
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
        border: 1.5px solid #09236c;
        color: #09236c;
        font-family: 'Source Han Sans CN';
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
    }
}
.card_container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .card_item {
        margin-right: 32px;
        width: calc((100% - 96px) / 4);
        margin-bottom: 32px;
        .card_img_container {
            position: relative;
            margin-bottom: 16px;
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
    .card_item:nth-child(4n) {
        margin-right: 0;
    }
}
/* 中屏幕*/
@media screen and(max-width: $big-pc-width) {
    .cloud_sales_expansion_market {
        .card_container {
            .card_item {
                width: calc((100% - 96px) / 4);
                .card_img {
                    height: 250px;
                }
            }
        }
    }
}

/** 平板屏幕 */
@media screen and (max-width: $pad-max-width) {
    .cloud_sales_expansion_market {
        .title {
            margin-bottom: 16px;
        }
        .card_container {
            .card_item {
                width: calc((100% - 48px) / 3);
                margin-right: 24px;
                margin-bottom: 24px;

                .card_img_container {
                    margin-bottom: 12px;
                }
                .card_img {
                    height: 212px;
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
            .card_item:nth-child(3n) {
                margin-right: 0;
            }
        }
        .module_title {
            font-size: 20px;
            font-weight: bold;
        }
        .see_all {
            padding: 10px 25px;
            font-size: 14px;
        }
    }
}

/** 手机屏幕 */
@media screen and (max-width: $phone-max-width) {
    .cloud_sales_expansion_market {
        width: 90%;
        .title {
            margin-bottom: 12px;
        }
        .card_container {
            margin-top: 12px !important;
            .card_item {
                width: calc((100% - 12px) / 2);
                margin-right: 12px !important;
                margin-bottom: 12px !important;
                .card_img_container {
                    margin-bottom: 8px;
                }
                .card_img {
                    height: 150px;
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
            .card_item:nth-child(2n) {
                margin-right: 0 !important;
            }
        }
        .module_title {
            font-size: 18px;
            font-weight: bold;
        }
        .see_all {
            padding: 6px 14px;
            font-size: 14px;
        }
    }
}
</style>
