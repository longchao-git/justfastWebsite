<template>
    <div class="help_center">
        <div class="help_banner">
            <img class="help_banner_img" src="https://picsum.photos/200/56" alt="" />
            <div class="search_control">
                <div class="banner_title">您好，我们可以为您提供什么帮助？</div>
                <div class="login-input">
                    <div style="display: flex; flex-direction: row; align-items: center">
                        <img class="inputImg" src="~/assets/images/cloudSales/icon_sousuo.png" alt="" />
                        <input v-model="context" placeholder="请输入您想要搜索的内容" class="c-input" />
                    </div>
                    <v-btn @click="handleClick" max-width="13em" height="48px" class="isView-login">
                        立即搜索
                        <img style="width: 2em; margin: auto" src="~/assets/images/cloudSales/other/icon_jaintouo.png" alt="" />
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="help_content">
            <div class="content_tabs">
                <div class="tab_item" :class="{ active: active === 1 }" @click="handleChangeTab(1)">我的帖子</div>
                <div class="tab_item" :class="{ active: active === 2 }" @click="handleChangeTab(2)">我的收藏夹</div>
                <div class="tab_item" :class="{ active: active === 3 }" @click="handleChangeTab(3)">我的关注</div>
                <div class="tab_item" :class="{ active: active === 4 }" @click="handleChangeTab(4)">我的通知</div>
            </div>
            <div class="content_tabs_child">
                <div class="child_tab_item" :class="{ active: childActive === 1 }" @click="handleChangeChildTab(1)">我的帖子</div>
                <div class="child_tab_item" :class="{ active: childActive === 2 }" @click="handleChangeChildTab(2)">我的收藏夹</div>
                <div class="child_tab_item" :class="{ active: childActive === 3 }" @click="handleChangeChildTab(3)">我的关注</div>
                <div class="child_tab_item" :class="{ active: childActive === 4 }" @click="handleChangeChildTab(4)">我的通知</div>
            </div>
            <div class="issue_card_list">
                <div class="issue_card" v-for="item in 5" :key="item">
                    <img class="card_img" :src="'https://picsum.photos/312/312?id=' + item + 1" alt="" />
                    <div class="card_name beyond">泰国 呵叻府Pong Ta Long 出行vlog~</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from '../config';
import { mapMutations } from 'vuex';

export default {
    components: {},
    data() {
        return {
            active: 1,
            childActive: 1,
        };
    },

    async fetch() {},
    methods: {
        handleChangeTab(tab) {
            this.active = tab;
        },
        handleChangeChildTab(tab) {
            this.childActive = tab;
        },
    },
    mounted() {},
};
</script>
<style>
.main-content {
    background-color: #f5f5f5;
}
</style>
<style scoped lang="scss">
.help_center {
    .help_banner {
        width: 100%;
        height: 560px;
        position: relative;
        .help_banner_img {
            width: 100%;
            height: 100%;
        }
        .search_control {
            width: 700px;
            position: absolute;
            left: 50%;
            margin-left: -350px;
            text-align: center;
            top: 35%;
            .banner_title {
                color: #005381;
                text-align: center;
                font-family: 'Source Han Sans CN';
                font-size: 42px;
                font-weight: 500;
                margin-bottom: 48px;
            }
            .login-input {
                margin: 0 auto;
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
    .help_content {
        width: 80%;
        margin: 0 auto;
        padding: 24px 0;
        .content_tabs {
            display: flex;
            align-items: center;
            padding: 12px 0;
            margin-bottom: 24px;
            .tab_item {
                color: #181818;
                font-size: 18px;
                cursor: pointer;
                margin-right: 48px;
            }
            .tab_item.active {
                color: #09236c;
                position: relative;
                font-weight: bold;
                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 100%;
                    left: 0;
                    bottom: -12px;
                    height: 3px;
                    background-color: #09236c;
                }
            }
        }
        .content_tabs_child {
            display: flex;
            align-items: center;
            padding: 12px 0;
            margin-bottom: 24px;
            .child_tab_item {
                color: #181818;
                font-size: 20px;
                cursor: pointer;
                margin-right: 48px;
            }
            .child_tab_item.active {
                color: #09236c;
                position: relative;
                font-weight: bold;
                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 100%;
                    left: 0;
                    bottom: -12px;
                    height: 3px;
                    background-color: #09236c;
                }
            }
        }
    }
    .issue_card_list {
        display: flex;
        flex-wrap: wrap;
        .issue_card {
            width: calc((100% - 72px) / 4);
            margin-right: 24px;
            margin-bottom: 24px;
            .card_img {
                width: 100%;
                height: 250px;
                object-fit: cover;
                border-radius: 6px;
            }
            .card_name {
                font-size: 18px;
                font-weight: bold;
                margin: 10px 0;
            }
            .card_user {
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                .card_user_msg {
                    display: flex;
                    align-items: center;
                    .card_user_msg_head {
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                        flex-shrink: 0;
                        margin-right: 8px;
                    }
                    .card_user_msg_name {
                        color: #5e5e5e;
                        font-size: 16px;
                    }
                }
                .operation_item {
                    display: flex;
                    align-items: center;
                    color: #2c2c2c;

                    .icon_operation {
                        width: 24px;
                        height: 24px;
                        margin-right: 4px;
                    }
                }
            }
        }
        .issue_card:nth-child(4n) {
            margin-right: 0;
        }
    }
}
/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
    .help_center {
        .help_banner {
            width: 100%;
            height: 560px;
            position: relative;
            .help_banner_img {
                width: 100%;
                height: 100%;
            }
            .search_control {
                width: 700px;
                position: absolute;
                left: 50%;
                margin-left: -350px;
                text-align: center;
                top: 35%;
                .banner_title {
                    color: #005381;
                    text-align: center;
                    font-family: 'Source Han Sans CN';
                    font-size: 40px;
                    font-weight: 500;
                    margin-bottom: 48px;
                }
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
                    margin: 0 auto !important;
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
        .help_content {
            padding: 24px 0;
            .content_tabs {
                padding: 12px 0;
                margin-bottom: 12px;
                .tab_item {
                    font-size: 16px;
                    margin-right: 32px;
                }
                .tab_item.active {
                    color: #09236c;
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        width: 100%;
                        left: 0;
                        bottom: -8px;
                        height: 3px;
                        background-color: #09236c;
                    }
                }
            }
            .content_tabs_child {
                padding: 12px 0;
                margin-bottom: 24px;
                .child_tab_item {
                    font-size: 18px;
                    margin-right: 32px;
                }
                .child_tab_item.active {
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        width: 100%;
                        left: 0;
                        bottom: -8px;
                        height: 3px;
                        background-color: #09236c;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: $pad-max-width) {
    .help_center {
        .help_banner {
            width: 100%;
            height: 340px;
            position: relative;
            .help_banner_img {
                width: 100%;
                height: 100%;
            }
            .search_control {
                width: 700px;
                position: absolute;
                left: 50%;
                margin-left: -350px;
                text-align: center;
                top: 35%;
                .banner_title {
                    color: #005381;
                    text-align: center;
                    font-family: 'Source Han Sans CN';
                    font-size: 32px;
                    font-weight: 500;
                    margin-bottom: 48px;
                }
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
                    margin: 0 auto !important;
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
        .help_content {
            padding: 24px 0;
            .content_tabs {
                padding: 12px 0;
                margin-bottom: 12px;
                .tab_item {
                    font-size: 16px;
                    margin-right: 32px;
                }
                .tab_item.active {
                    color: #09236c;
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        width: 100%;
                        left: 0;
                        bottom: -8px;
                        height: 3px;
                        background-color: #09236c;
                    }
                }
            }
            .content_tabs_child {
                padding: 12px 0;
                margin-bottom: 24px;
                .child_tab_item {
                    font-size: 18px;
                    margin-right: 32px;
                }
                .child_tab_item.active {
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        width: 100%;
                        left: 0;
                        bottom: -8px;
                        height: 3px;
                        background-color: #09236c;
                    }
                }
            }
        }
        .issue_card_list {
            .issue_card {
                width: calc((100% - 32px) / 3);
                margin-right: 16px;
                margin-bottom: 16px;
                .card_img {
                    width: 100%;
                    height: 250px;
                }
                .card_name {
                    font-size: 16px;
                    font-weight: bold;
                    margin: 10px 0;
                }
                .card_user {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    .card_user_msg {
                        display: flex;
                        align-items: center;
                        .card_user_msg_head {
                            width: 48px;
                            height: 48px;
                            border-radius: 50%;
                            flex-shrink: 0;
                            margin-right: 8px;
                        }
                        .card_user_msg_name {
                            color: #5e5e5e;
                            font-size: 16px;
                        }
                    }
                    .operation_item {
                        display: flex;
                        align-items: center;
                        color: #2c2c2c;

                        .icon_operation {
                            width: 24px;
                            height: 24px;
                            margin-right: 4px;
                        }
                    }
                }
            }
            .issue_card:nth-child(3n) {
                margin-right: 0;
            }
            .issue_card:nth-child(4n) {
                margin-right: 16px;
            }
        }
    }
}

@media screen and (max-width: $phone-max-width) {
    .help_center {
        .help_banner {
            width: 100%;
            height: 340px;
            position: relative;
            .help_banner_img {
                width: 100%;
                height: 100%;
            }
            .search_control {
                width: 700px;
                position: absolute;
                left: 50%;
                margin-left: -350px;
                text-align: center;
                top: 35%;
                .banner_title {
                    color: #005381;
                    text-align: center;
                    font-family: 'Source Han Sans CN';
                    font-size: 32px;
                    font-weight: 500;
                    margin-bottom: 48px;
                }
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
                    margin: 0 auto !important;
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
        .help_content {
            padding: 24px 0;
            .content_tabs {
                padding: 12px 0;
                margin-bottom: 12px;
                .tab_item {
                    font-size: 16px;
                    margin-right: 32px;
                }
                .tab_item.active {
                    color: #09236c;
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        width: 100%;
                        left: 0;
                        bottom: -8px;
                        height: 3px;
                        background-color: #09236c;
                    }
                }
            }
            .content_tabs_child {
                padding: 12px 0;
                margin-bottom: 24px;
                .child_tab_item {
                    font-size: 18px;
                    margin-right: 32px;
                }
                .child_tab_item.active {
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        width: 100%;
                        left: 0;
                        bottom: -8px;
                        height: 3px;
                        background-color: #09236c;
                    }
                }
            }
        }
        .issue_card_list {
            .issue_card {
                width: calc((100% - 32px) / 3);
                margin-right: 16px;
                margin-bottom: 16px;
                .card_img {
                    width: 100%;
                    height: 250px;
                }
                .card_name {
                    font-size: 16px;
                    font-weight: bold;
                    margin: 10px 0;
                }
                .card_user {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    .card_user_msg {
                        display: flex;
                        align-items: center;
                        .card_user_msg_head {
                            width: 48px;
                            height: 48px;
                            border-radius: 50%;
                            flex-shrink: 0;
                            margin-right: 8px;
                        }
                        .card_user_msg_name {
                            color: #5e5e5e;
                            font-size: 16px;
                        }
                    }
                    .operation_item {
                        display: flex;
                        align-items: center;
                        color: #2c2c2c;

                        .icon_operation {
                            width: 24px;
                            height: 24px;
                            margin-right: 4px;
                        }
                    }
                }
            }
            .issue_card:nth-child(3n) {
                margin-right: 0;
            }
            .issue_card:nth-child(4n) {
                margin-right: 16px;
            }
        }
    }
}
</style>
