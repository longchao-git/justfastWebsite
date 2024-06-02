<template>
    <div class="author_index">
        <div class="user_info">
            <div class="user_info_msg">
                <img class="user_head" src="https://picsum.photos/132/132" alt="" />
                <div>
                    <div class="user_name">小橙子</div>
                    <div class="user_info_num">
                        <div class="user_info_num_item">
                            <span class="label">{{ $t('authorIndex.follow') }}</span>
                            <span class="value">110</span>
                        </div>
                        <div class="user_info_num_item">
                            <span class="label">{{ $t('authorIndex.fans') }}</span>
                            <span class="value">110</span>
                        </div>
                        <div class="user_info_num_item">
                            <span class="label">{{ $t('authorIndex.like') }}</span>
                            <span class="value">110</span>
                        </div>
                        <div class="user_info_num_item">
                            <span class="label">{{ $t('authorIndex.collect') }}</span>
                            <span class="value">110</span>
                        </div>
                    </div>
                    <div class="describe">
                        <div class="describe_item">
                            <img class="desc_icon" src="~/assets/images/icon_desc.png" alt="" />
                            <span class="desc_text">{{ $t('authorIndex.title') }}</span>
                        </div>
                        <div class="describe_item">
                            <img class="desc_icon" src="~/assets/images/location.png" alt="" />
                            <span class="desc_text">住在成都 金牛区 四川省</span>
                        </div>
                        <div class="describe_item">
                            <img class="desc_icon" src="~/assets/images/icon_desc_2.png" alt="" />
                            <span class="desc_text"
                                >自认为是一枚很帅气的小男孩自认为是一枚很帅气的小男孩自认为是一枚很帅气的小男孩自认为是一枚很帅气的小男孩</span
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="btns">
                <div class="btn_item attention_btn">{{ $t('authorIndex.button')[0] }}</div>
                <div class="btn_item message_btn">{{ $t('authorIndex.button')[1] }}</div>
            </div>
        </div>
        <div class="my_content">
            <div class="content_tabs">
                <div class="tab_item" :class="{ active: active === 1 }" @click="handleChangeTab(1)">{{ $t('authorIndex.navList')[0] }}</div>
                <div class="tab_item" :class="{ active: active === 2 }" @click="handleChangeTab(2)">{{ $t('authorIndex.navList')[1] }}</div>
                <div class="tab_item" :class="{ active: active === 3 }" @click="handleChangeTab(3)">{{ $t('authorIndex.navList')[2] }}</div>
            </div>
            <div v-if="active === 1 || active === 2" class="issue_card_list">
                <div class="issue_card" v-for="item in 5" :key="item">
                    <img class="card_img" :src="'https://picsum.photos/312/312?id=' + item + 1" alt="" />
                    <div class="card_name beyond">泰国 呵叻府Pong Ta Long 出行vlog~</div>
                    <div class="card_user">
                        <div class="card_user_msg">
                            <img class="card_user_msg_head" src="https://picsum.photos/48/48" alt="" />
                            <span class="card_user_msg_name">小橙子</span>
                        </div>
                        <div class="operation_item">
                            <img class="icon_operation" src="~/assets/images/icon_dianzan.png" alt="" />
                            <span class="operation_item_text">{{ $t('authorIndex.like') }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="my_attention">
                <div class="attention_item" v-for="item in 4" :key="item">
                    <img class="attention_user_head" src="https://picsum.photos/86/86" alt="" />
                    <div class="describe_user_info">
                        <div class="describe_user_info_name">小橙子</div>
                        <div class="user_info_item">
                            <img class="desc_icon" src="~/assets/images/icon_desc.png" alt="" />
                            <span class="beyond desc_text">欢迎来到一个热爱旅行的医生博主的主页</span>
                        </div>
                        <div class="user_info_item">
                            <img class="desc_icon" src="~/assets/images/location.png" alt="" />
                            <span class="beyond desc_text">住在成都 金牛区 四川省</span>
                        </div>
                        <div class="user_info_item">
                            <img class="desc_icon" src="~/assets/images/icon_desc_2.png" alt="" />
                            <span class="beyond desc_text">自认为是一枚很帅气的小男孩自认为是一枚很帅气的小男孩自认为是一枚很帅气的小男孩</span>
                        </div>
                    </div>
                    <div class="attention_btn">{{ $t('authorIndex.followed') }}</div>
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
            journeyContent: '<h1 style="color: red;" >我是行程记录</h1>',
            rating: 4,
            isComment: true,
            active: 1,
        };
    },

    async fetch() {},
    methods: {
        handleChangeTab(tab) {
            this.active = tab;
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
.author_index {
    width: 80%;
    margin: 0 auto;
    padding: 24px 0;
}
.user_info {
    background-color: #ffffff;
    padding: 48px 24px 24px;
    display: flex;
    justify-content: space-between;
    .user_info_msg {
        display: flex;
    }
    .user_head {
        width: 132px;
        height: 132px;
        flex-shrink: 0;
        border-radius: 50%;
        margin-right: 24px;
    }
    .user_name {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 16px;
    }
    .user_info_num {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        .user_info_num_item {
            display: flex;
            align-items: center;
            margin-right: 48px;
            .label {
                font-size: 18px;
                color: #8b8b8b;
                font-weight: bold;
                margin-right: 4px;
            }
            .value {
                font-size: 24px;
                color: #181818;
                font-weight: bold;
            }
        }
    }
}
.describe {
    .describe_item {
        display: flex;
        align-items: flex-start;
        color: #5e5e5e;
        margin-bottom: 10px;
        .desc_icon {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            margin-right: 8px;
        }
        .desc_text {
            font-size: 16px;
        }
    }
    .describe_item:nth-child(3) {
        margin-bottom: 0;
    }
}
.btns {
    margin-left: 24px;
    .btn_item {
        display: flex;
        width: 154px;
        padding: 16px 36px;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        background: #09236c;
        border: 1px solid #09236c;
        font-size: 20px;
        color: #ffffff;
        font-weight: bold;
        cursor: pointer;
    }
    .message_btn {
        background-color: #ffffff;
        color: #232a35;
        border: 1px solid #777777;
        margin-top: 24px;
    }
}
.my_content {
    padding: 12px 24px;
    background-color: #ffffff;
    margin-top: 24px;
    .content_tabs {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 12px 0;
        margin-bottom: 24px;
        .tab_item {
            color: #181818;
            font-size: 20px;
            cursor: pointer;
        }
        .tab_item.active {
            color: #09236c;
            position: relative;
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
    .issue_card_list {
        display: flex;
        flex-wrap: wrap;
        .issue_card {
            width: calc((100% - 72px) / 4);
            margin-right: 24px;
            margin-bottom: 24px;
            .card_img {
                width: 100%;
                height: 312px;
                object-fit: cover;
                border-radius: 6px;
            }
            .card_name {
                font-size: 18px;
                font-weight: bold;
                margin: 16px 0;
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
    .my_attention {
        display: flex;
        flex-wrap: wrap;
        .attention_item {
            width: calc((100% - 24px) / 2);
            display: flex;
            height: 210px;
            padding: 24px;
            align-items: flex-start;
            justify-content: space-between;
            border: 1px solid #dcdcdc;
            background: #f8f8f8;
            margin-right: 24px;
            margin-bottom: 24px;
        }
        .attention_item:nth-child(2n) {
            margin-right: 0;
        }
        .attention_user_head {
            width: 86px;
            height: 86px;
            flex-shrink: 0;
            border-radius: 50%;
            margin-right: 24px;
        }
        .describe_user_info {
            width: calc(100% - 262px);
            .describe_user_info_name {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 16px;
            }
            .user_info_item {
                display: flex;
                align-items: center;
                color: #5e5e5e;
                margin-bottom: 10px;
                .desc_icon {
                    width: 24px;
                    height: 24px;
                    flex-shrink: 0;
                    margin-right: 8px;
                }
                .desc_text {
                    font-size: 16px;
                }
            }
        }
        .attention_btn {
            display: flex;
            width: 80px;
            height: 40px;
            // padding: 12px 28px;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            background: #09236c;
            color: #ffffff;
            font-size: 14px;
            font-weight: bold;
            flex-shrink: 0;
            margin-left: 24px;
            cursor: pointer;
        }
    }
}
/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
    .author_index {
        .user_info {
            padding: 36px 16px 16px;
            .user_head {
                width: 100px;
                height: 100px;
                flex-shrink: 0;
                border-radius: 50%;
                margin-right: 18px;
            }
            .user_name {
                font-size: 28px;
                margin-bottom: 12px;
            }
        }

        .btns {
            margin-left: 24px;
            .btn_item {
                width: 120px;
                padding: 12px 28px;
                font-size: 18px;
            }
            .message_btn {
                background-color: #ffffff;
                color: #232a35;
                border: 1px solid #777777;
                margin-top: 24px;
            }
        }
        .my_content {
            .content_tabs {
                margin-bottom: 20px;
                .tab_item {
                    font-size: 18px;
                }
                .tab_item.active {
                    color: #09236c;
                    position: relative;
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
            .issue_card_list {
                .issue_card {
                    width: calc((100% - 60px) / 4);
                    margin-right: 20px;
                    margin-bottom: 20px;
                    .card_img {
                        height: 240px;
                    }
                    .card_user {
                        .card_user_msg {
                            .card_user_msg_head {
                                width: 40px;
                                height: 40px;
                            }
                        }
                        .operation_item {
                            .icon_operation {
                                width: 20px;
                                height: 20px;
                            }
                        }
                    }
                }
                .issue_card:nth-child(4n) {
                    margin-right: 0;
                }
            }
            .my_attention {
                .attention_item {
                    width: calc((100% - 20px) / 2);
                    height: 180px;
                    padding: 18px;
                    margin-right: 20px;
                    margin-bottom: 20px;
                }
                .attention_item:nth-child(2n) {
                    margin-right: 0;
                }
                .attention_user_head {
                    width: 72px;
                    height: 72px;
                    margin-right: 16px;
                }
                .describe_user_info {
                    width: calc(100% - 190px);
                    .describe_user_info_name {
                        font-size: 18px;
                        margin-bottom: 14px;
                    }
                    .user_info_item {
                        font-size: 14px;
                        margin-bottom: 8px;
                        .desc_icon {
                            width: 18px;
                            height: 18px;
                            margin-right: 6px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: $pad-max-width) {
    .author_index {
        .user_info {
            padding: 24px 14px 14px;
            .user_head {
                width: 80px;
                height: 80px;
                margin-right: 16px;
            }
            .user_name {
                font-size: 20px;
                margin-bottom: 12px;
            }
            .user_info_num {
                margin-bottom: 12px;
                .user_info_num_item {
                    margin-right: 24px;
                    .label {
                        font-size: 14px;
                    }
                    .value {
                        font-size: 16px;
                    }
                }
            }
            .describe {
                .describe_item {
                    margin-bottom: 8px;
                    .desc_icon {
                        width: 16px;
                        height: 16px;
                    }
                    .desc_text {
                        font-size: 14px;
                    }
                }
                .describe_item:nth-child(3) {
                    margin-bottom: 0;
                }
            }
        }
        .btns {
            margin-left: 24px;
            .btn_item {
                width: 80px;
                padding: 8px 14px;
                font-size: 14px;
            }
            .message_btn {
                background-color: #ffffff;
                color: #232a35;
                border: 1px solid #777777;
                margin-top: 12px;
            }
        }
        .my_content {
            .content_tabs {
                margin-bottom: 16px;
                .tab_item {
                    font-size: 16px;
                }
                .tab_item.active {
                    color: #09236c;
                    position: relative;
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
            .issue_card_list {
                .issue_card {
                    width: calc((100% - 30px) / 4);
                    margin-right: 10px;
                    margin-bottom: 10px;
                    .card_img {
                        height: 160px;
                    }
                    .card_name {
                        font-size: 14px;
                        margin: 8px 0;
                    }
                    .card_user {
                        .card_user_msg {
                            .card_user_msg_head {
                                width: 20px;
                                height: 20px;
                            }
                            .card_user_msg_name {
                                font-size: 12px;
                            }
                        }
                        .operation_item {
                            .icon_operation {
                                width: 14px;
                                height: 14px;
                            }
                            .operation_item_text {
                                font-size: 12px;
                            }
                        }
                    }
                }
                .issue_card:nth-child(4n) {
                    margin-right: 0;
                }
            }
            .my_attention {
                .attention_item {
                    width: calc((100% - 20px) / 2);
                    height: 120px;
                    padding: 12px;
                    margin-right: 20px;
                    margin-bottom: 20px;
                }
                .attention_item:nth-child(2n) {
                    margin-right: 0;
                }
                .attention_user_head {
                    width: 36px;
                    height: 36px;
                    margin-right: 10px;
                }
                .describe_user_info {
                    width: calc(100% - 120px);
                    .describe_user_info_name {
                        font-size: 14px;
                        margin-bottom: 8px;
                    }
                    .user_info_item {
                        margin-bottom: 4px;
                        .desc_icon {
                            width: 12px;
                            height: 12px;
                            margin-right: 6px;
                        }
                        .desc_text {
                            font-size: 12px;
                        }
                    }
                }
                .attention_btn {
                    width: 60px;
                    height: 30px;
                    font-size: 12px;
                    border-radius: 4px;
                    margin-left: 18px;
                }
            }
        }
    }
}

@media screen and (max-width: $phone-max-width) {
    .author_index {
        .user_info {
            display: block;
            padding: 12px 12px 12px;
            .user_head {
                width: 48px;
                height: 48px;
                margin-right: 12px;
            }
            .user_name {
                font-size: 16px;
                margin-bottom: 10px;
            }
            .user_info_num {
                margin-bottom: 6px;
                .user_info_num_item {
                    margin-right: 6px;
                    .label {
                        font-size: 12px;
                    }
                    .value {
                        font-size: 12px;
                    }
                }
            }
            .describe {
                .describe_item {
                    margin-bottom: 8px;
                    .desc_icon {
                        width: 12px;
                        height: 12px;
                        margin-top: 2px;
                    }
                    .desc_text {
                        font-size: 12px;
                    }
                }
                .describe_item:nth-child(3) {
                    margin-bottom: 0;
                }
            }
        }
        .btns {
            margin-left: 0;
            margin-top: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .btn_item {
                width: 70px;
                padding: 6px 14px;
                font-size: 12px;
            }
            .message_btn {
                margin-top: 0;
                margin-left: 20px;
            }
        }
        .my_content {
            margin-top: 12px;
            padding: 12px;
            .content_tabs {
                padding: 6px 0;
                margin-bottom:12px;
                .tab_item {
                    font-size: 14px;
                }
                .tab_item.active {
                    color: #09236c;
                    position: relative;
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        width: 100%;
                        left: 0;
                        bottom: -6px;
                        height: 2px;
                        background-color: #09236c;
                    }
                }
            }
            .issue_card_list {
                .issue_card {
                    width: calc((100% - 12px) / 2);
                    margin-right: 12px;
                    margin-bottom: 12px;
                    .card_img {
                        height: 140px;
                    }
                    .card_name{
                        margin: 2px 0;
                    }
                    .card_user {
                        .card_user_msg {
                            .card_user_msg_head {
                                width: 20px;
                                height: 20px;
                            }
                            .card_user_msg_name {
                                font-size: 12px;
                            }
                        }
                        .operation_item {
                            .icon_operation {
                                width: 14px;
                                height: 14px;
                            }
                            .operation_item_text {
                                font-size: 12px;
                            }
                        }
                    }
                }
                .issue_card:nth-child(2n) {
                    margin-right: 0;
                }
            }
            .my_attention {
                display: block;
                .attention_item {
                    width: 100%;
                    height: 120px;
                    padding: 12px;
                    margin-right: 0;
                    margin-bottom: 12px;
                }
                .attention_user_head {
                    width: 36px;
                    height: 36px;
                    margin-right: 10px;
                }
                .describe_user_info {
                    width: calc(100% - 120px);
                    .describe_user_info_name {
                        font-size: 14px;
                        margin-bottom: 8px;
                    }
                    .user_info_item {
                        margin-bottom: 4px;
                        .desc_icon {
                            width: 12px;
                            height: 12px;
                            margin-right: 6px;
                        }
                        .desc_text {
                            font-size: 12px;
                        }
                    }
                }
                .attention_btn {
                    width: 60px;
                    height: 30px;
                    font-size: 12px;
                    border-radius: 4px;
                    margin-left: 18px;
                }
            }
        }
    }
}
</style>
