<template>
    <div :class="getHeadClass">
        <v-overlay class="phone-menu-mask" @click.native="isShowPhoneMenu = false" :value="isShowPhoneMenu"></v-overlay>

        <v-app-bar fixed :flat="true" class="header-app-bar top-app-bar" color="transparent">
            <!--手机端-->
            <div class="phone-menu-box max-width">
                <div class="disflex al-center phone-menu-bar max-width">
                    <nuxt-link style="margin-right: 14px" class="clear-flex h-logo-img" to="/">
                        <embed width="100%" height="100%" :src="require('~/assets/images/cloudSales/logo.svg')" type="image/svg+xml" />
                    </nuxt-link>
                    <v-spacer />
                    <v-app-bar-nav-icon @click="isShowPhoneMenu = !isShowPhoneMenu">
                        <v-icon color="white">fa fa-{{ isShowPhoneMenu ? 'remove' : 'bars' }} </v-icon>
                    </v-app-bar-nav-icon>
                </div>

                <v-expand-transition>
                    <div v-show="isShowPhoneMenu" class="phone-menu-list max-width">
                        <v-list dense>
                            <v-list-item link href="/">
                                <v-list-item-title>{{ $t('header.local') }} </v-list-item-title>
                            </v-list-item>
                            <v-divider />
                            <v-list-item target="_blank" href="/teamwork">
                                <v-list-item-title>{{ $t('header.message') }}</v-list-item-title>
                            </v-list-item>
                            <v-divider />
                            <v-list-item target="_blank" href="/headlines">
                                <v-list-item-title>{{ $t('header.lang') }}</v-list-item-title>
                            </v-list-item>
                            <v-divider />

                            <v-list-group append-icon="fa fa-angle-down">
                                <template v-slot:activator>
                                    <v-list-item-title>{{ $t('header.personal') }} </v-list-item-title>
                                </template>
                                <v-list-item>
                                    <v-row style="padding: 0 16px">
                                        <v-col style="padding: 0">
                                            <v-list-item @click="loginType = 0">
                                                <v-list-item-title> {{ $t('header.login') }} </v-list-item-title>
                                            </v-list-item>
                                        </v-col>
                                        <v-col style="padding: 0">
                                            <v-list-item target="_blank" href="/sass-private">
                                                <v-list-item-title> {{ $t('header.register') }} </v-list-item-title>
                                            </v-list-item>
                                        </v-col>
                                        <v-col style="padding: 0">
                                            <v-list-item target="_blank" href="/personalCenter">
                                                <v-list-item-title> {{ $t('header.information') }} </v-list-item-title>
                                            </v-list-item>
                                        </v-col>
                                        <v-col style="padding: 0">
                                            <v-list-item target="_blank" href="/sass-private">
                                                <v-list-item-title> {{ $t('header.help') }} </v-list-item-title>
                                            </v-list-item>
                                        </v-col>
                                    </v-row>
                                </v-list-item>
                            </v-list-group>
                        </v-list>
                    </div>
                </v-expand-transition>
            </div>

            <!--PC端-->
            <div class="disflex ju-center max-width al-center col-f pc-menu-box">
                <embed :src="require('~/assets/images/cloudSales/logo.svg')" style="margin-right: 14px" width="8%" type="image/svg+xml" />

                <v-tabs
                    center-active
                    style="width: auto"
                    background-color="transparent"
                    hide-slider
                    dark
                    color="white"
                    class="clear-flex"
                    :value="getActiveMenuInx"
                >
                    <v-tab class="v-tab--active" link href="/">
                        <img style="width: 24px; height: 24px; margin-right: 6px" src="~/assets/images/cloudSales/icon_dingwei.png" alt="" />
                        {{ $t('header.local') }}
                    </v-tab>
                    <div class="login-input">
                        <input v-model="context" :placeholder="$t('header.placeholder')" class="c-input" />

                        <img style="width: 32px; height: 32px" src="~/assets/images/cloudSales/icon_sousuo.png" alt="" />
                    </div>
                    <!-- 登录样式 -->
                    <div class="login-bt">
                        <v-tab class="v-tab--active" link href="/message">
                            <img style="width: 24px; height: 24px; margin-right: 6px" src="~/assets/images/cloudSales/icon_xiaoxi.png" alt="" />
                            {{ $t('header.message') }}
                        </v-tab>
                        <v-tab class="v-tab--active" @click="handleInfoWindowState(true)">
                            <img style="width: 24px; height: 24px; margin-right: 6px" src="~/assets/images/cloudSales/icon_yuyan.png" alt="" />
                            {{ $t('header.lang') }}
                        </v-tab>
                        <v-menu eager bottom offset-y left open-on-hover>
                            <template #activator="{ attrs, on }">
                                <v-tab v-bind="attrs" v-on="on" class="v-tab--active">
                                    <img style="width: 24px; height: 24px; margin-right: 6px" src="~/assets/images/cloudSales/icon_gerenzhong.png" alt="" />
                                    {{ $t('header.personal') }}
                                </v-tab>
                            </template>
                            <v-list flat>
                                <v-list-item>
                                    <v-list-item-title @click="loginType = 0">{{ $t('header.login') }}/{{ $t('header.register') }}</v-list-item-title>
                                </v-list-item>
                                <v-list-item target="_blank" href="/personalCenter">
                                    <v-list-item-title> {{ $t('header.information') }} </v-list-item-title>
                                </v-list-item>
                                <v-list-item link target="_blank" href="/helpCenter">
                                    <v-list-item-title style="color: #292e35 !important">{{ $t('header.help') }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </v-tabs>
            </div>
        </v-app-bar>
        <!-- 登录弹窗 -  -->
        <login-window :type="loginType" @handleCloseLoginDialog="handleCloseLoginDialog" />
        <!-- 登录成功弹窗 -  -->
        <login-succeed :type="loginType" @handleCloseLoginDialog="handleCloseLoginDialog" />
        <!-- 语言切换 -->
        <info-window :isShow="isShowContactInfoDialog" @handleClose="handleInfoWindowState" />
    </div>
</template>

<script>
import LoginWindow from '@/components/popupWindow/loginWindow';
import loginSucceed from '@/components/popupWindow/loginSucceed';
import InfoWindow from '@/components/popupWindow/infoWindow';
export default {
    name: 'header-control',
    components: {
        LoginWindow,
        InfoWindow,
        loginSucceed,
    },
    data() {
        return {
            currentMenuInx: 1, // 当前选择菜单下标
            isShowPhoneMenu: false, // 是否展示手机端菜单
            // 登录的选项类型
            loginType: -1,
            context: '',
            // 是否显示联系方式弹框
            isShowContactInfoDialog: false,
        };
    },
    watch: {
        $route() {
            this.isShowPhoneMenu = false;
        },
    },
    computed: {
        // 获取url 路径
        getUrlPath() {
            return this.$route.path;
        },
        // 是否展示黑底背景
        getHeadClass() {
            const notPath = [
                '/message',
                '/headlines-detail',
                '/popular-tags',
                '/contentDetail',
                '/authorIndex',
                '/personalCenter',
                '/accountManagement',
                '/loginSafety',
                '/globalPreferences',
                '/styleRecommend',
                '/individualPrivacy',
                '/AgreementsAndArticles',
                '/creation',
            ];

            return notPath.includes(this.getUrlPath) ? 'cover-bg' : '';
        },
        // 获取菜单选中下标
        getActiveMenuInx() {
            const activeMenus = [
                ['/', ''],
                ['/product/solutions/brand', '/product/capability/brand', '/product/solutions/ai-crm', '/product/capability/ai-crm'],
                ['/sass-solution', '/sass-private'],
                ['/teamwork'],
                ['/headlines', '/headlines-detail', '/popular-tags'],
                ['/about'],
            ];
            return activeMenus.findIndex(item => item.includes(this.getUrlPath));
        },
    },
    methods: {
        /** 处理联系方式弹框的状态 */
        handleInfoWindowState(value) {
            this.isShowContactInfoDialog = value;
        },
        /** 处理登录弹框的关闭操作 */
        handleCloseLoginDialog(value) {
            this.loginType = value;
        },
    },
};
</script>

<style lang="scss">
.cover-bg {
    height: 100px !important;
    box-shadow: none !important;
    background-color: #133ba0 !important;
}
.v-application {
    .phone-menu-mask {
        display: none;
    }
    .header-app-bar {
        transition: all 500ms ease-in-out;
        height: 100px !important;
        background: linear-gradient(0deg, rgba(37, 37, 37, 0) 83.5%, rgba(37, 37, 37, 0.5) 100%);

        .h-logo-img {
            width: 5.31%;
            height: 2.77%;
        }

        .v-tabs-bar {
            height: 44px !important;
        }

        .login-input {
            width: 600px;
            height: 44px;
            margin: 0 126px 0 166px;
            border-radius: 60px;
            background: #f6f9f8;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 28px;
        }

        .stock-code {
            transition: all 500ms ease-in-out;
            font-size: 12px;
            line-height: 1.3;
            margin-right: 44px;
        }

        .login-bt {
            display: flex;
            flex-direction: row;
            align-items: center;
            min-width: 72px;
            min-height: 48px;
        }

        .v-tab {
            min-width: inherit;
            @extend .tran-300ms;
            font-size: $tab-font-size;
            padding: 0;
            margin-right: 30px;

            &:last-child {
                margin-right: 0;
            }

            &:hover {
                color: white !important;

                i {
                    transform: rotateZ(180deg);
                }

                &:before {
                    content: none;
                }
            }

            &.inactive {
                opacity: 0.5;
                color: #ffffff !important;

                .v-icon {
                    opacity: 0.5;
                    color: #ffffff !important;
                }
            }
        }

        .v-toolbar__content {
            padding: 0;
            height: 100px !important;
        }

        .v-toolbar__content {
            height: 100% !important;
        }

        &.v-app-bar--is-scrolled {
            top: 0 !important;
            box-shadow: none !important;
            background-color: #133ba0 !important;
        }
    }

    /*产品方案容器*/
    .product-solutions-menu {
        left: 8.28% !important;
        right: 8.28% !important;
        overflow: inherit;
        transform: translate3d(0, 0, 0);
        box-shadow: 0px 18px 20px 0px rgba(137, 147, 160, 0.15);

        &:before {
            height: 0px;
            width: 0px;
            content: '';
            position: relative;
            top: -2px;
            left: 42%;
            border-bottom: 6px solid transparent;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
        }

        .product-solutions-box {
            .p-title {
                font-size: 18px;
                color: #8993a0;
                margin-bottom: 39px;
            }

            .pro-sol,
            .sy-content {
                padding: 39px 48px;
            }

            .pro-sol {
                border-right: 1px solid #f4f5f6;

                .pro-sol-nav-card {
                    width: 260px;
                    padding: 28px;
                    background: #f4f5f6;
                    border-radius: 8px;
                    margin-bottom: 16px;

                    &:hover {
                        .psnc-title {
                            color: #467fff;
                        }
                    }

                    .psnc-title {
                        font-size: 18px;
                        color: #171b20;
                    }

                    .psnc-content {
                        font-size: 14px;
                        color: #8993a0;
                    }
                }
            }

            .sy-content {
                .syc-title {
                    white-space: nowrap;
                    font-size: 20px;
                    color: #171b20;
                    padding-bottom: 19px;
                    border-bottom: 1px solid #f4f5f6;
                    margin-bottom: 32px;
                    margin-right: 40px;

                    &:after {
                        @extend .tran-300ms;
                        content: '';
                        bottom: 0;
                        left: 0;
                        width: 15%;
                        height: 1px;
                        z-index: 1;
                        position: absolute;
                        background-color: #171b20;
                    }

                    &:hover {
                        &:after {
                            width: 100%;
                        }
                    }
                }

                .syc-item {
                    font-size: 16px;
                    color: #8993a0;
                    margin-bottom: 10px;

                    &:hover {
                        color: #467fff;
                    }
                }
            }
        }
    }
}

/*小于大屏幕的设备*/
@media screen and(max-width: $big-pc-width) {
    .login-bt {
        min-width: 72px;
        min-height: 48px;
        //margin-left: px;
    }
    body {
        .v-application {
            .header-app-bar {
                .v-tab {
                    font-size: $small-tab-font-size;
                    margin-right: 22px;
                }

                .stock-code {
                    font-size: 9px;
                    margin-right: 44px;
                }
            }
            .login-input {
                width: 400px !important;
                margin: 0 88px 0 88px !important;
            }
            .v-slide-group__prev {
                display: none !important;
            }
            .product-solutions-menu {
                &:before {
                    left: 33%;
                }

                .product-solutions-box {
                    .p-title {
                        font-size: 14px;
                        margin-bottom: 29px;
                    }

                    .pro-sol,
                    .sy-content {
                        padding: 29px 36px;
                    }

                    .pro-sol {
                        .pro-sol-nav-card {
                            width: 220px;
                            padding: 20px;

                            .psnc-title {
                                font-size: 16px;
                            }

                            .psnc-content {
                                font-size: 14px;
                            }
                        }
                    }

                    .sy-content {
                        .syc-title {
                            font-size: 15px;
                            margin-right: 30px;
                            margin-bottom: 24px;
                            padding-bottom: 14px;
                        }

                        .syc-item {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}

@mixin __header_control_style($height, $phone) {
    .header-app-bar {
        height: $height !important;

        .phone-menu-box {
            display: if($phone == true, block, none);
        }

        .pc-menu-box {
            display: if($phone == false, inherit, none);
        }
    }
}

@include __header_control_style($app-bar-height, false);

@media screen and (max-width: $pad-max-width) {
    @include __header_control_style($small-app-bar-height, true);
    body {
        .v-application {
            .phone-menu-mask {
                display: inherit;
            }
            .login-input {
                width: 200px;
            }
            .v-list-item--link:before {
                background-color: transparent !important;
            }

            .header-app-bar {
                height: 66px !important;
                background-color: #1b43a3 !important;
                .stock-code {
                    font-size: 10px;
                    line-height: 1;
                }

                &.v-toolbar {
                    box-shadow: none !important;
                    background-color: #1b43a3 !important;
                }

                .theme--light.v-divider {
                    background-color: #f4f5f6;
                }

                .v-toolbar__content {
                    padding: 4px 0;
                }

                .phone-menu-box {
                    .phone-menu-bar {
                        padding: 0 16px;
                    }

                    .v-list-item {
                        font-size: 16px;
                        padding: 0;
                    }

                    .h-logo-img {
                        width: 32%;
                        height: 30%;
                    }

                    .phone-menu-list {
                        padding: 16px;
                        position: fixed;
                        top: $small-app-bar-height;
                        background-color: white;

                        .v-list-item__title,
                        .v-list-item__icon .v-icon {
                            color: #171b20 !important;
                        }

                        .v-list-group__items {
                            .v-list-item__title {
                                color: #292e35 !important;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
