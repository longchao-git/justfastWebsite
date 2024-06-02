<template>
    <div class="content_tab">
        <div class="tabs">
            <div @click="handleChangeTabs(1)" class="tabs_item" :class="{ active: active === 1 }">热门VLOG</div>
            <div @click="handleChangeTabs(2)" class="tabs_item" :class="{ active: active === 2 }">热门游记</div>
            <div @click="handleChangeTabs(3)" class="tabs_item" :class="{ active: active === 3 }">金牌代理人</div>
        </div>
        <div class="card_container">
            <div class="card_item" v-for="item in 12" :key="item">
                <div class="card_img_container">
                    <img class="card_img fit-cover" :src="'https://picsum.photos/200/300?id=' + item + 1" />
                    <!-- <video ref="video_1" src="~/assets/images/video.mp4" class="card_img fit-cover"></video> -->
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
    data() {
        return {
            active: 1,
        };
    },
    methods: {
        handleChangeTabs(tab) {
            this.active = tab;
        },
    },
};
</script>

<style lang="scss" scoped>
.content_tab {
    width: 80%;
    margin: 0 auto 24px;
    .tabs {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        .active {
            color: #09236c;
            font-weight: bold;
            position: relative;
            &::after {
                content: '';
                display: block;
                width: 50%;
                height: 3px;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                background-color: #09236c;
            }
        }
    }
    .tabs_item {
        margin-right: 24px;
        color: #181818;
        font-size: 20px;
        padding-bottom: 12px;
        cursor: pointer;
    }

    .card_container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
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
    .content_tab {
        .card_item {
            width: calc((100% - 96px) / 4);
            .card_img {
                height: 250px;
            }
        }
    }
}

/** 平板屏幕 */
@media screen and (max-width: $pad-max-width) {
    .content_tab {
        .tabs {
            margin-bottom: 12px;
            .tabs_item {
                margin-right: 20px;
                font-size: 18px;
            }
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
    }
}

/** 手机屏幕 */
@media screen and (max-width: $phone-max-width) {
    .content_tab {
      width: 90%;
        .tabs {
            margin-bottom: 4px;
            .tabs_item {
                margin-right: 18px;
                font-size: 16px;
            }
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
                    height: 150px !important;
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
    }
}
</style>
