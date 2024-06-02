<template>
    <div>
        <!--整屏滚动插件-->
        <div class="p-relative head-bg">
            <v-carousel class="notable" :show-arrows="false" hide-delimiters style="background: #ffffff">
                <v-carousel-item :src="require('~/assets/images/cloudSales/banner/banner1.jpg')"></v-carousel-item>
            </v-carousel>
            <div class="h-content center p-absolute colf">
                <div class="h-conte">
                    <div class="login-input">
                        <div style="display: flex; flex-direction: row; align-items: center">
                            <img class="inputImg" src="~/assets/images/cloudSales/icon_sousuo.png" alt="" />
                            <input v-model="context" :placeholder="$t('header.placeholder')" class="c-input" />
                        </div>
                        <v-btn @click="handleClick" max-width="13em" height="48px" class="isView-login">
                            {{ $t('header.searchBtn') }}
                            <img style="width: 2em; margin: auto" src="~/assets/images/cloudSales/other/icon_jaintouo.png" alt="" />
                        </v-btn>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; width: 100%">
                            <v-btn @click="loginType = 0" max-width="13em" height="50px" class="try-out-bt"> 123 </v-btn>
                            <v-btn @click="handleClick" max-width="13em" height="50px" class="try-out-bt"> 立即注册销售号 </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--全球合作商组件-->
        <global-partners style="margin-bottom: 16px" />
        <!-- 云销售首页组件集合 -->
        <cloud-sales-home-list />
        <!-- 登录弹窗 type - 0: 个人  1: 企业 -->
        <login-window :type="loginType" @handleCloseLoginDialog="handleCloseLoginDialog" />
    </div>
</template>

<script>
import GlobalPartners from '../components/common/global-partners';
import CloudSalesHomeList from '../components/cloudSales/home';
import LoginWindow from '../components/popupWindow/loginWindow.vue';
import config from '../config';
import { mapMutations } from 'vuex';
import error from '@/layouts/error';

export default {
    components: {
        GlobalPartners,
        CloudSalesHomeList,
        LoginWindow,
    },
    data() {
        return {
            filterParams: {
                dictionaryType: 1,
            },
            // 登录的选项类型
            loginType: -1,
            // 是否显示底部内容
            isShowFooterContent: 0,
            context: '',
            dictionaryContent: {},
        };
    },

    methods: {
        // 滚动事件
        scrollEvent() {
            const oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (oTop + 50 >= window.screen.height && this.isShowFooterContent === 0) {
                this.isShowFooterContent = 1;
            } else if (oTop + 50 < window.screen.height) {
                this.isShowFooterContent = 0;
            }
        },

        /** 处理登录弹框的关闭操作 */
        handleCloseLoginDialog(value) {
            this.loginType = value;
        },

        handleClick() {
            window.location.href = '/addressIndex';
        },
        //
        showPosition(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
        },
    },
    mounted() {
        //获取用户经纬度
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                res => {
                    console.log(res);
                },
                error => {
                    console.log(error);
                }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }

        const params = { dictionaryType: 1 };
        this.$axios.get('/dictionary/getContentByType', { params }).then(res => {
            console.log(res);
        });

        window.addEventListener('scroll', this.scrollEvent.bind(this));
    },
};
</script>

<style scoped lang="scss">
.customer-collection_footer-close {
    position: fixed;
    right: 5px;
    bottom: 75px;
    z-index: 3;
    width: 24px;
    height: 24px;
}

.head-bg {
    @extend .tran-300ms;
    height: 750px;

    .h-content {
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        .h-conte {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            flex: 1;

            .login-input {
                border-radius: 69px;
                background: #f6f9f8;
                width: 600px;
                height: 60px;
                padding: 6px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                .inputImg {
                    margin-left: 16px;
                    width: 32px;
                    height: 32px;
                }

                .c-input {
                    margin-left: 8px;
                    font-size: 16px;
                    color: #383838;
                }

                .isView-login {
                    border-radius: 43px !important;
                    background: linear-gradient(90deg, #0d9bdd 0%, #0b1f5c 100%) !important;
                    color: #ffffff !important;
                    font-size: 16px;
                    font-weight: 500;
                }
            }
        }
    }
}

/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
    .head-bg .h-content {
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        .h-conte {
            .login-input {
                width: 440px !important;
                height: 56px;

                .inputImg {
                    margin-left: 12px;
                    width: 28px;
                    height: 28px;
                }
            }
        }
    }
}

@media screen and (max-width: $pad-max-width) {
    .customer-collection_footer-close {
        display: none;
    }
    .head-bg {
        margin-top: $small-app-bar-height;
        height: 300px;

        .h-content {
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;

            .h-conte {
                .login-input {
                    width: 320px !important;
                    height: 40px;

                    .inputImg {
                        width: 20px;
                        height: 20px;
                    }

                    img {
                        margin-left: 8px;
                    }

                    .c-input {
                        margin-left: 4px;
                        font-size: 12px;
                    }

                    .isView-login {
                        border-radius: 43px !important;
                        font-size: 12px !important;
                        height: 32px !important;
                    }
                }
            }
        }
    }
}

/** 轮播图分割样式 */
::v-deep .notable {
    height: 750px !important;

    .v-responsive {
        height: 100% !important;
    }

    .v-item--active {
        i {
            &::before {
                all: initial;
                background: #467efc !important;
            }
        }
    }

    .v-carousel__controls__item {
        width: auto !important;

        * {
            opacity: initial;
        }

        &::before,
        &::after {
            all: initial;
        }

        .v-ripple__container {
            display: none;
        }

        i {
            width: auto !important;

            &::before {
                content: '';
                background: #fff;
                height: 6px;
                width: 60px !important;
                border-radius: 6px;
            }
        }
    }
}

@media screen and (max-width: $pad-max-width) {
    ::v-deep .notable {
        margin-top: 66px;
        height: 300px !important;

        .v-responsive {
            height: 100% !important;
        }

        .v-carousel__controls__item {
            i {
                &::before {
                    height: 3px;
                    width: 30px !important;
                }
            }
        }

        .v-image__image {
            //background-size: 100%;
            // z-index: 1;
        }
    }
}
</style>
