<template>
    <div class="account_management">
        <div class="management_title">
            <img class="title_icon" src="~/assets/images/icon_acc_admin.png" alt="" />
            <span class="title_text">账号管理</span>
        </div>
        <ul class="card">
            <li class="card_item" @click="handleOperation(1)">
                <div class="item_info">
                    <div class="item_title">个人信息</div>
                    <div class="item_desc">请提供个人信息和联系方式</div>
                </div>
                <img class="item_icon" src="~/assets/images/icon_info.png" alt="" />
            </li>
            <li class="card_item" @click="handleOperation(2)">
                <div class="item_info">
                    <div class="item_title">登录与安全</div>
                    <div class="item_desc">修改密码并保障您的账号安全</div>
                </div>
                <img class="item_icon" src="~/assets/images/icon_safety.png" alt="" />
            </li>
            <li class="card_item" @click="handleOperation(3)">
                <div class="item_info">
                    <div class="item_title">全局偏好</div>
                    <div class="item_desc">设置默认语言与时区</div>
                </div>
                <img class="item_icon" src="~/assets/images/icon_preference.png" alt="" />
            </li>
            <li class="card_item" @click="handleOperation(4)">
                <div class="item_info">
                    <div class="item_title">个性化推荐</div>
                    <div class="item_desc">选择是否开启个性化内容推荐</div>
                </div>
                <img class="item_icon" src="~/assets/images/icon_recommend.png" alt="" />
            </li>
            <li class="card_item" @click="handleOperation(5)">
                <div class="item_info">
                    <div class="item_title">个人隐私设置</div>
                    <div class="item_desc">选择是否帖子、关注以及收藏列表对外公布</div>
                </div>
                <img class="item_icon" src="~/assets/images/icon_setting.png" alt="" />
            </li>
        </ul>
    </div>
</template>

<script>
import config from '../config';
import { mapMutations } from 'vuex';

export default {
    components: {},
    data() {
        return {

        };
    },

    async fetch() {},
    methods: {
        handleAuthor() {
            window.location.href = '/authorIndex';
        },
        handleOperation(type) {
            if (type === 1) {
                window.location.href = '/AgreementsAndArticles';
            } else if (type === 2) {
                window.location.href = '/loginSafety';
            }else if(type === 3){
                window.location.href = '/globalPreferences';
            }else if(type === 4){
                window.location.href = '/styleRecommend';
            }else if(type === 5){
                window.location.href = '/individualPrivacy';
            }
        },
    },
    mounted() {},
};
</script>
<style scoped lang="scss">
.account_management {
    width: 80%;
    margin: 0 auto;
    padding: 24px 0;
    .management_title {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        .title_icon {
            width: 56px;
            height: 56px;
            margin-right: 12px;
        }
        .title_text {
            color: #1c222b;
            font-size: 30px;
            font-weight: bold;
        }
    }
    .card {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0px !important;
        .card_item {
            width: calc((100% - 64px) / 3);
            padding: 24px;
            height: 200px;
            margin-right: 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #eef7fa;
            border-radius: 12px;
            margin-bottom: 32px;
            cursor: pointer;
            .item_info {
                .item_title {
                    color: #181818;
                    font-weight: bold;
                    font-size: 32px;
                    margin-bottom: 16px;
                }
                .item_desc {
                    font-size: 18px;
                    color: #576f7b;
                }
            }
            .item_icon {
                width: 120px;
                height: 120px;
                flex-shrink: 0;
                margin-left: 16px;
            }
        }
        .card_item:nth-child(3n) {
            margin-right: 0;
        }
    }
}
/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
    .account_management {
        padding: 24px 0;
        .management_title {
            margin-bottom: 16px;
            .title_icon {
                width: 48px;
                height: 48px;
                margin-right: 12px;
            }
            .title_text {
                font-size: 26px;
            }
        }
        .card {
            .card_item {
                width: calc((100% - 24px) / 3);
                padding: 12px;
                height: 160px;
                margin-right: 12px;
                border-radius: 8px;
                margin-bottom: 24px;
                .item_info {
                    .item_title {
                        font-size: 20px;
                        margin-bottom: 12px;
                    }
                    .item_desc {
                        font-size: 14px;
                        color: #576f7b;
                    }
                }
                .item_icon {
                    width: 80px;
                    height: 80px;
                    margin-left: 12px;
                }
            }
            .card_item:nth-child(3n) {
                margin-right: 0;
            }
        }
    }
}

@media screen and (max-width: $pad-max-width) {
    .account_management {
        width: 90%;
        padding: 12px 0;
        .management_title {
            margin-bottom: 14px;
            .title_icon {
                width: 32px;
                height: 32px;
                margin-right: 8px;
            }
            .title_text {
                font-size: 20px;
            }
        }
        .card {
            .card_item {
                width: calc((100% - 24px) / 3);
                padding: 12px;
                height: 120px;
                margin-right: 12px;
                border-radius: 4px;
                margin-bottom: 12px;
                .item_info {
                    .item_title {
                        font-size: 16px;
                        margin-bottom: 12px;
                    }
                    .item_desc {
                        font-size: 12px;
                        color: #576f7b;
                    }
                }
                .item_icon {
                    width: 60px;
                    height: 60px;
                    margin-left: 12px;
                }
            }
            .card_item:nth-child(3n) {
                margin-right: 0;
            }
        }
    }
}

@media screen and (max-width: $phone-max-width) {
    .account_management {
        width: 92%;
        padding: 12px 0;
        .management_title {
            margin-bottom: 8px;
            .title_icon {
                width: 24px;
                height: 24px;
                margin-right: 8px;
            }
            .title_text {
                font-size: 18px;
            }
        }
        .card {
            display: block;
            .card_item {
                width: 100%;
                padding: 12px;
                height: 120px;
                margin-right: 0;
                border-radius: 4px;
                margin-bottom: 12px;
                .item_info {
                    .item_title {
                        font-size: 16px;
                        margin-bottom: 12px;
                    }
                    .item_desc {
                        font-size: 12px;
                        color: #576f7b;
                    }
                }
                .item_icon {
                    width: 60px;
                    height: 60px;
                    margin-left: 12px;
                }
            }
            .card_item:nth-child(3n) {
                margin-right: 0;
            }
        }
    }
}
</style>
