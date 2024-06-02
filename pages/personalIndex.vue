<template>
    <div class="author_index">
        <div class="user_info">
            <div class="user_info_msg">
                <img class="user_head" src="https://picsum.photos/132/132" alt="" />
                <div>
                    <div class="user_name">小橙子</div>
                    <div class="user_info_num">
                        <div class="user_info_num_item">
                            <span class="label">关注</span>
                            <span class="value">110</span>
                        </div>
                        <div class="user_info_num_item">
                            <span class="label">粉丝</span>
                            <span class="value">110</span>
                        </div>
                        <div class="user_info_num_item">
                            <span class="label">获赞</span>
                            <span class="value">110</span>
                        </div>
                        <div class="user_info_num_item">
                            <span class="label">收藏</span>
                            <span class="value">110</span>
                        </div>
                    </div>
                    <div class="describe">
                        <div class="describe_item">
                            <img class="desc_icon" src="~/assets/images/icon_desc.png" alt="" />
                            <span class="desc_text">欢迎来到一个热爱旅行的医生博主的主页</span>
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
                <div class="btn_item message_btn">编辑资料</div>
            </div>
        </div>
        <div class="my_content">
            <div class="content_tabs">
                <div class="tab_item" :class="{ active: active === 1 }" @click="handleChangeTab(1)">我的帖子</div>
                <div class="tab_item" :class="{ active: active === 2 }" @click="handleChangeTab(2)">我的收藏夹</div>
                <div class="tab_item" :class="{ active: active === 3 }" @click="handleChangeTab(3)">我的关注</div>
                <div class="tab_item" :class="{ active: active === 4 }" @click="handleChangeTab(4)">我的通知</div>
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
                            <span class="operation_item_text">点赞</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="active === 1" class="sub_btn_box">
                <el-button @click="handleIssue" class="sub_btn" type="primary">发布帖子</el-button>
            </div>
            <div v-if="active === 3" class="my_attention">
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
                    <div class="attention_btn">已关注</div>
                </div>
            </div>
            <div v-if="active === 4" class="my_inform">
                <div class="date_filter">
                    <div class="filter_item" @click="handleChangeDate(1)" :class="{ filter_item_active: filterActive === 1 }">今日</div>
                    <div class="filter_item" @click="handleChangeDate(2)" :class="{ filter_item_active: filterActive === 2 }">近七日</div>
                    <div class="filter_item" @click="handleChangeDate(3)" :class="{ filter_item_active: filterActive === 3 }">近15日</div>
                    <div class="filter_item" @click="handleChangeDate(4)" :class="{ filter_item_active: filterActive === 4 }">本月</div>
                    <div class="filter_item" @click="handleChangeDate(5)" :class="{ filter_item_active: filterActive === 5 }">上月</div>
                </div>
                <div class="message_item" v-for="item in 3" :key="item">
                    <div class="flex">
                        <img class="message_head" src="https://picsum.photos/60/60" alt="" />
                        <div class="msg_content_main">
                            <div class="msg_name">小橙子</div>
                            <div class="flex flex-a-c msg_content">
                                <span class="content_text">收藏了你的图文</span>
                                <span class="content_time">三小时前</span>
                            </div>
                            <div class="flex flex-a-c" style="width: fit-content; cursor: pointer">
                                <div class="flex flex-a-c reply_input">
                                    <img class="user_head" src="https://picsum.photos/30/30" alt="" />
                                    <div class="placeholder">回复评论...</div>
                                </div>
                                <div class="operation_item">
                                    <img class="icon_operation" src="~/assets/images/icon_dianzan.png" alt="" />
                                    <span class="operation_item_text">点赞</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img class="msg_content_img" src="https://picsum.photos/160/90" alt="" />
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
            filterActive: 1,
        };
    },

    async fetch() {},
    methods: {
        handleChangeTab(tab) {
            this.active = tab;
        },
        handleChangeDate(date) {
            this.filterActive = date;
        },
        handleIssue(){
            window.location.href = '/creation'
        },
    },
    mounted() {},
};
</script>
<style></style>
<style scoped lang="scss">
.user_info {
    background-color: #ffffff;
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
    flex-shrink: 0;
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
    }
}
.my_content {
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
    .sub_btn_box {
        padding: 24px 0;
        display: flex;
        justify-content: center;
        .sub_btn {
            width: 200px;
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
            margin-right: 12px;
        }
        .describe_user_info {
            width: calc(100% - 200px);
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
.my_inform {
    .date_filter {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        .filter_item {
            padding: 5px 16px;
            border-radius: 2px;
            color: #2c2c2c;
            background: #eeeeee;
            font-size: 16px;
            margin-right: 16px;
            cursor: pointer;
        }
        .filter_item_active {
            background: #09236c;
            color: #ffffff;
        }
    }
    .message_item {
        padding: 16px 0;
        display: flex;
        align-items: center;
        .message_head {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            flex-shrink: 0;
            margin-right: 16px;
        }
        .msg_content_main {
            flex: 1;
            .msg_name {
                font-size: 18px;
                color: #181818;
                font-weight: bold;
            }
            .msg_content {
                margin-bottom: 8px;
                .content_text {
                    color: #2c2c2c;
                    font-size: 16px;
                    font-weight: bold;
                    margin-right: 12px;
                }
                .content_time {
                    color: #777777;
                    font-size: 16px;
                }
            }
            .reply_input {
                width: fit-content;
                padding: 8px 12px;
                border-radius: 40px;
                background-color: #f3f3f3;
                margin-right: 16px;
                flex-shrink: 0;
                .user_head {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    flex-shrink: 0;
                    margin-right: 8px;
                }
                .placeholder {
                    color: #777777;
                    font-size: 14px;
                }
            }
            .operation_item {
                display: flex;
                align-items: center;
                .icon_operation {
                    width: 24px;
                    height: 24px;
                    margin-right: 4px;
                }
                .operation_item_text {
                    font-size: 16px;
                    color: #2c2c2c;
                }
            }
        }
        .msg_content_img {
            width: 160px;
            height: 90px;
            flex-shrink: 0;
        }
    }
}
/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
    .user_info {
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        .user_info_msg {
            display: flex;
        }
        .user_head {
            width: 80px;
            height: 80px;
            margin-right: 12px;
        }
        .user_name {
            font-size: 20px;
            margin-bottom: 14px;
        }
        .user_info_num {
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
    }
    .describe {
        .describe_item {
            margin-bottom: 10px;
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
    .btns {
        margin-left: 24px;
        flex-shrink: 0;
        .btn_item {
            width: 120px;
            padding: 12px 25px;
            font-size: 14px;
        }
    }
    .my_content {
        margin-top: 16px;
        .content_tabs {
            padding: 0;
            margin-bottom: 24px;
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
                    bottom: -6px;
                    height: 3px;
                    background-color: #09236c;
                }
            }
        }
        .issue_card_list {
            .issue_card {
                width: calc((100% - 30px) / 3);
                margin-right: 15px;
                margin-bottom: 15px;
                .card_img {
                    height: 180px;
                }
                .card_name {
                    font-size: 14px;
                }
                .card_user {
                    .card_user_msg {
                        .card_user_msg_head {
                            width: 32px;
                            height: 32px;
                        }
                        .card_user_msg_name {
                            font-size: 14px;
                        }
                    }
                    .operation_item {
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
                margin-right: 15px;
            }
        }
        .sub_btn_box {
            padding: 20px 0;
            .sub_btn {
                width: 160px;
            }
        }
        .my_attention {
            .attention_item {
                width: calc((100% - 16px) / 2);
                display: flex;
                height: 140px;
                padding: 8px;
                margin-right: 16px;
                margin-bottom: 16px;
            }
            .attention_item:nth-child(2n) {
                margin-right: 0;
            }
            .attention_user_head {
                width: 42px;
                height: 42px;
                margin-right: 4px;
            }
            .describe_user_info {
                width: calc(100% - 140px);
                .describe_user_info_name {
                    font-size: 16px;
                    margin-bottom: 12px;
                }
                .user_info_item {
                    margin-bottom: 8px;
                    .desc_icon {
                        width: 12px;
                        height: 12px;
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
                margin-left: 12px;
            }
        }
    }
    .my_inform {
        .date_filter {
            margin-bottom: 12px;
            .filter_item {
                padding: 5px 16px;
            }
            .filter_item_active {
                background: #09236c;
                color: #ffffff;
            }
        }
        .message_item {
            padding: 12px 0;
            display: flex;
            align-items: center;
            .message_head {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                flex-shrink: 0;
                margin-right: 12px;
            }
            .msg_content_main {
                flex: 1;
                .msg_name {
                    font-size: 16px;
                }
                .msg_content {
                    margin-bottom: 8px;
                    .content_text {
                        font-size: 14px;
                    }
                    .content_time {
                        font-size: 14px;
                    }
                }
                .reply_input {
                    width: fit-content;
                    padding: 8px 12px;
                    border-radius: 40px;
                    background-color: #f3f3f3;
                    margin-right: 16px;
                    flex-shrink: 0;
                    .user_head {
                        width: 25px;
                        height: 25px;
                        border-radius: 50%;
                        flex-shrink: 0;
                        margin-right: 8px;
                    }
                    .placeholder {
                        color: #777777;
                        font-size: 14px;
                    }
                }
                .operation_item {
                    .icon_operation {
                        width: 20px;
                        height: 20px;
                        margin-right: 4px;
                    }
                    .operation_item_text {
                        font-size: 14px;
                    }
                }
            }
            .msg_content_img {
                width: 140px;
                height: 80px;
                flex-shrink: 0;
            }
        }
    }
}

@media screen and (max-width: $pad-max-width) {
    .user_info {
        .user_head {
            width: 50px;
            height: 50px;
            margin-right: 6px;
        }
        .user_name {
            font-size: 16px;
            margin-bottom: 8px;
        }
        .user_info_num {
            .user_info_num_item {
                margin-right: 12px;
                .label {
                    font-size: 12px;
                }
                .value {
                    font-size: 14px;
                }
            }
        }
    }
    .describe {
        .describe_item {
            margin-bottom: 10px;
            .desc_icon {
                width: 14px;
                height: 14px;
            }
            .desc_text {
                font-size: 12px;
            }
        }
        .describe_item:nth-child(3) {
            margin-bottom: 0;
        }
    }
    .btns {
        margin-left: 12px;
        flex-shrink: 0;
        .btn_item {
            width: 80px;
            padding: 6px 12px;
            font-size: 12px;
        }
    }
    .my_content {
        margin-top: 16px;
        .content_tabs {
            padding: 0;
            margin-bottom: 24px;
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
                    bottom: -6px;
                    height: 3px;
                    background-color: #09236c;
                }
            }
        }
        .issue_card_list {
            .issue_card {
                width: calc((100% - 30px) / 3);
                margin-right: 15px;
                margin-bottom: 15px;
                .card_img {
                    height: 180px;
                }
                .card_name {
                    font-size: 14px;
                }
                .card_user {
                    .card_user_msg {
                        .card_user_msg_head {
                            width: 32px;
                            height: 32px;
                        }
                        .card_user_msg_name {
                            font-size: 14px;
                        }
                    }
                    .operation_item {
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
                margin-right: 15px;
            }
        }
        .sub_btn_box {
            padding: 16px 0;
            .sub_btn {
                width: 140px;
            }
        }
        .my_attention {
            .attention_item {
                width: calc((100% - 16px) / 2);
                display: flex;
                height: 120px;
                padding: 8px;
                margin-right: 16px;
                margin-bottom: 16px;
            }
            .attention_item:nth-child(2n) {
                margin-right: 0;
            }
            .attention_user_head {
                width: 32px;
                height: 32px;
                margin-right: 4px;
            }
            .describe_user_info {
                width: calc(100% - 120px);
                .describe_user_info_name {
                    font-size: 14px;
                    margin-bottom: 8px;
                }
                .user_info_item {
                    margin-bottom: 8px;
                    .desc_icon {
                        width: 12px;
                        height: 12px;
                    }
                    .desc_text {
                        font-size: 12px;
                    }
                }
            }
            .attention_btn {
                width: 50px;
                height: 28px;
                font-size: 10px;
                margin-left: 12px;
            }
        }
    }
    .my_inform {
        .date_filter {
            margin-bottom: 10px;
            .filter_item {
                font-size: 14px;
                padding: 4px 12px;
            }
        }
        .message_item {
            padding: 12px 0;
            .message_head {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                flex-shrink: 0;
                margin-right: 8px;
            }
            .msg_content_main {
                flex: 1;
                .msg_name {
                    font-size: 14px;
                }
                .msg_content {
                    margin-bottom: 6px;
                    .content_text {
                        font-size: 12px;
                    }
                    .content_time {
                        font-size: 12px;
                    }
                }
                .reply_input {
                    padding: 6px 10px;
                    margin-right: 10px;
                    .user_head {
                        width: 20px;
                        height: 20px;
                        margin-right: 6px;
                    }
                    .placeholder {
                        color: #777777;
                        font-size: 12px;
                    }
                }
                .operation_item {
                    .icon_operation {
                        width: 15px;
                        height: 15px;
                        margin-right: 4px;
                    }
                    .operation_item_text {
                        font-size: 12px;
                    }
                }
            }
            .msg_content_img {
                width: 100px;
                height: 60px;
            }
        }
    }
}

@media screen and (max-width: $phone-max-width) {
    .user_info {
        display: block;
        .user_head {
            width: 24px;
            height: 24px;
            margin-right: 4px;
        }
        .user_name {
            font-size: 14px;
            margin-bottom: 6px;
        }
        .user_info_num {
            flex-wrap: wrap;
            .user_info_num_item {
                margin-right: 4px;
                .label {
                    font-size: 12px;
                }
                .value {
                    font-size: 12px;
                }
            }
        }
    }
    .describe {
        .describe_item {
            margin-bottom: 10px;
            .desc_icon {
                width: 14px;
                height: 14px;
            }
            .desc_text {
                font-size: 12px;
            }
        }
        .describe_item:nth-child(3) {
            margin-bottom: 0;
        }
    }
    .btns {
        display: flex;
        margin-left: 0;
        flex-shrink: 0;
        justify-content: flex-end;
        .btn_item {
            width: 80px;
            padding: 6px 12px;
            font-size: 12px;
            margin-top: 12px;
        }
    }
    .my_content {
        margin-top: 16px;
        .content_tabs {
            padding: 0;
            margin-bottom: 12px;
            .tab_item {
                font-size: 12px;
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
                    bottom: -4px;
                    height: 1px;
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
                    height: 120px;
                }
                .card_name {
                    font-size: 14px;
                    margin: 0;
                }
                .card_user {
                    display: block;
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
                        justify-content: flex-end;
                        margin-top: 2px;
                        .icon_operation {
                            width: 12px;
                            height: 12px;
                            margin-right: 4px;
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
            .issue_card:nth-child(3n) {
                margin-right: 12px;
            }
        }
        .sub_btn_box {
            padding: 14px 0;
            .sub_btn {
                width: 120px;
            }
        }
        .my_attention {
            .attention_item {
                width: calc((100% - 16px) / 2);
                display: flex;
                height: 120px;
                padding: 8px;
                margin-right: 16px;
                margin-bottom: 16px;
            }
            .attention_item:nth-child(2n) {
                margin-right: 0;
            }
            .attention_user_head {
                width: 32px;
                height: 32px;
                margin-right: 4px;
            }
            .describe_user_info {
                width: calc(100% - 120px);
                .describe_user_info_name {
                    font-size: 14px;
                    margin-bottom: 8px;
                }
                .user_info_item {
                    margin-bottom: 8px;
                    .desc_icon {
                        width: 12px;
                        height: 12px;
                    }
                    .desc_text {
                        font-size: 12px;
                    }
                }
            }
            .attention_btn {
                width: 50px;
                height: 28px;
                font-size: 10px;
                margin-left: 12px;
            }
        }
    }
    .my_inform {
        .date_filter {
            margin-bottom: 4px;
            align-items: flex-start;
            .filter_item {
                display: flex;
                align-items: center;
                width: 30px;
                height: 60px;
                font-size: 12px;
                padding: 2px 8px;
                margin-right: 10px;
            }
        }
        .message_item {
            display: block;
            padding: 12px 0;
            .message_head {
                width: 20px;
                height: 20px;
                margin-right: 4px;
            }
            .msg_content_main {
                .msg_name {
                    font-size: 14px;
                }
                .msg_content {
                    margin-bottom: 6px;
                    .content_text {
                        font-size: 12px;
                    }
                    .content_time {
                        font-size: 12px;
                    }
                }
                .reply_input {
                    padding: 6px 10px;
                    margin-right: 10px;
                    .user_head {
                        width: 20px;
                        height: 20px;
                        margin-right: 6px;
                    }
                    .placeholder {
                        color: #777777;
                        font-size: 12px;
                    }
                }
                .operation_item {
                    .icon_operation {
                        width: 15px;
                        height: 15px;
                        margin-right: 4px;
                    }
                    .operation_item_text {
                        font-size: 12px;
                    }
                }
            }
            .msg_content_img {
                width: 100%;
                height: 90px;
                object-fit: cover;
                margin-top: 10px;
            }
        }
    }
}
</style>
