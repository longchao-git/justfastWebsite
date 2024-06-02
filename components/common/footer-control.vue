<template>
    <div class="footer-box disflex al-center max-width f-column">
        <div class="disflex p-relative contact-box">
            <div class="asy-box">
                <div class="f-title center">
                    <img class="footer_icon" src="~/assets/images/icon_service.png" alt="" />
                    <span class="service_title">{{ $t('footer.footerItem')[0].title }}</span>
                </div>
                <!-- <div class="f-divider"></div> -->
                <div class="asy-phone">
                    <div style="padding: 4px 0" class="center asy-phone-text">{{$t('footer.footerItem')[0].content}}</div>
                    <div style="padding: 4px 0" class="center">{{$t('footer.footerItem')[0].desc}}</div>
                </div>
            </div>
            <div class="asy-box">
                <div class="f-title center">
                    <img class="footer_icon" src="~/assets/images/icon_about.png" alt="" />
                    <span class="service_title">{{ $t('footer.footerItem')[1].title }}</span>
                </div>
                <!-- <div class="f-divider"></div> -->
                <div class="asy-phone">
                    <div style="padding: 4px 0" class="asView-text">
                        {{ $t('footer.footerItem')[1].content }}
                    </div>
                </div>
            </div>
            <div class="asy-box">
                <div class="f-title center">
                    <img class="footer_icon" src="~/assets/images/icon_more.png" alt="" />
                    <span class="service_title">{{ $t('footer.footerItem')[2].title }}</span>
                </div>
                <!-- <div class="f-divider"></div> -->
                <div class="asy-phone disflex" style="justify-content: space-around; margin-top: 40px">
                    <div class="more_text">{{ $t('footer.footerItem')[2].content[0] }}</div>
                    <div class="more_text">{{ $t('footer.footerItem')[2].content[1] }}</div>
                    <div class="more_text">{{ $t('footer.footerItem')[2].content[2] }}</div>
                    <div class="more_text">{{ $t('footer.footerItem')[2].content[3] }}</div>
                </div>
            </div>
        </div>

        <div class="disflex al-center copyright-box ju-center font12">
            <div>{{ $t('footer.footerBottom').desc }}</div>
            <div><a target="_blank" :href="'//' ">{{ $t('footer.footerBottom').content }}</a>&nbsp;</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'footer-control',
    data() {
        return {
            isShowDialog: false, // 是否展示弹窗
        };
    },
    computed: {


    },
    methods: {
        // 在线咨询
        onlineAdvisory() {
            window.open(
                'http://wpa.qq.com/msgrd?v=3&uin=1220517902&site=qq&menu=yes',
                '_blank',
                'height=600, width=800, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no'
            );
            return false;
        },

        // 展示微信弹窗
        showWechatDialog() {
            this.isShowDialog = true;
            return false;
        },
    },
};
</script>

<style scoped lang="scss">
.footer-box {
    background: #133ba0;
    padding: 32px 0 0;

    a {
        color: inherit;
    }

    .f-title {
        @extend .tran-300ms;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .footer_icon {
            width: 47px;
            height: 47px;
            margin-bottom: 8px;
        }
        .service_title {
            position: relative;
            &::after{
                content: '';
                display: block;
                width: 92px;
                height: 1px;
                background: rgba(255, 255, 255, 0.22);
                position: absolute;
                left: -102px;
                top: 50%;
            }
            &::before {
                content: '';
                display: block;
                width: 92px;
                height: 1px;
                background: rgba(255, 255, 255, 0.22);
                position: absolute;
                right: -102px;
                top: 50%;
            }
        }
    }

    .f-divider {
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 20px;
    }

    .asy-box {
        width: 410px;
        height: 141px;
        margin: 0 72px 8px 72px;

        .asy-phone {
            color: rgba(255, 255, 255, 0.7);
            font-weight: 400;
            margin-bottom: 20px;
            position: relative;
            top: -5px;
            > div {
                font-size: 16px;
            }
            .asy-phone-text,
            .more_text {
                font-weight: bold;
                font-size: 20px;
            }
            .asView-text {
                font-size: 16px !important;
                line-height: 22px;
                margin-top: 20px;
                text-align: center;
            }
        }
    }

    .copyright-box {
        display: flex;
        text-align: center;
        padding-bottom: 16px;
        color: rgba(255, 255, 255, 0.4);
        margin-top: 32px;

        span {
            display: block;
            overflow: hidden;
            width: 0;
            height: 0;
        }
    }

    .wm-title {
    }

    .footer-nav {
        color: #8993a0;
        cursor: pointer;
        margin-bottom: 15px;

        &:hover {
            color: #467fff;
        }
    }

    .contact-box {
        .related-product-box {
            > div {
                margin-right: 40px;
            }
        }
    }
}

/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
    body .footer-box {
        padding: 48px 0 0;

        .f-title {
            font-size: 14px;
            margin-bottom: 12px;
        }

        .asy-box {
            height: 141px;
            margin: 0;
            padding-bottom: 8px;
            width: 100%;
        }

        .contact-box {
            .related-product-box {
                > div {
                    margin-right: 30px;
                }
            }
        }
    }
}

/*小屏幕*/
@media screen and (max-width: $pad-max-width) {
    body .footer-box {
        padding: 16px 24px;
        //margin-bottom: 88px;

        .f-title {
            font-size: 12px;
            margin-bottom: 8px;
        }

        .footer-nav {
            margin-right: 0;
            font-size: 12px;

            a {
                font-size: inherit;
            }
        }

        .contact-box {
            width: 100%;
            flex-direction: column;

            .asy-box {
                height: 100%;
                padding-bottom: 8px;
                margin: 0;
                width: 100%;

                .asy-phone {
                    color: white;
                    margin-top: 0;
                    line-height: inherit;
                    margin-bottom: 16px;
                    > div {
                        font-size: 12px !important;
                    }
                    .asView-text {
                        font-size: 12px !important;
                        line-height: 16px;
                        margin-top: 10px;
                    }
                    span {
                        display: block;
                    }
                }
            }

            .related-product-box {
                padding-bottom: 17px;

                > div {
                    margin-right: auto;
                }
            }
        }

        .copyright-box {
            display: block;
            text-align: center;

            span {
                display: block;
                overflow: hidden;
                width: 0;
                height: 0;
            }
        }
    }
}

/** 手机屏幕 */
@media screen and (max-width: $phone-max-width) {
    body .footer-box {
        .contact-box {
        }
    }
}
</style>

<style lang="scss">
/*小屏幕*/
@media screen and (max-width: $pad-max-width) {
    .wechat-contact-dialog {
        margin: auto 18%;

        .wechat-contact-box {
            padding: 36px 34px;

            .close-bt {
                top: 6px;
                right: 6px;
            }

            .w-title {
                font-size: 12px;
                color: #8993a0;
                line-height: 18px;
                margin-top: 10px;
            }
        }
    }
}
</style>
