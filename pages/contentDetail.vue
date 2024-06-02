<template>
    <div class="detail_container">
        <div class="detail_content">
            <div class="user_info">
                <img class="first_img" src="~/assets/images/bg.png" />
                <div>
                    <div class="title">马尔代夫 | 小橙子全网最全的旅游攻略</div>
                    <div class="content_msg">
                        <div @click="handleAuthor" class="flex flex-a-c user_msg">
                            <img class="user_head" src="~/assets/images/head.png" alt="" />
                            <div class="user_name">小橙子</div>
                        </div>
                        <div class="color-5E5E5E time">{{ $t('contentDetail.time') }} 2024-05-11 15:00:00</div>
                        <div class="flex flex-a-c">
                            <img class="local_icon" src="~/assets/images/location.png" alt="" />
                            <div class="color-5E5E5E address">The Republic of Maldives</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabs flex flex-a-c">
                <div class="flex flex-a-c tabs_item">
                    <div class="icon_no">1</div>
                    <div class="tab_title">{{ $t('contentDetail.navList')[0] }}</div>
                    <img class="arrow_icon" src="~/assets/images/icon_down.png" alt="" />
                </div>
                <div class="flex flex-a-c tabs_item">
                    <div class="icon_no">2</div>
                    <div class="tab_title">{{ $t('contentDetail.navList')[1] }}</div>
                    <img class="arrow_icon" src="~/assets/images/icon_down.png" alt="" />
                </div>
                <div class="flex flex-a-c tabs_item">
                    <div class="icon_no">3</div>
                    <div class="tab_title">{{ $t('contentDetail.navList')[2] }}</div>
                    <img class="arrow_icon" src="~/assets/images/icon_down.png" alt="" />
                </div>
            </div>
        </div>
        <div class="journey_records">
            <div class="journey_records_title">
                <div class="icon_no">1</div>
                <div class="color-2C3645 fontb title_text">{{ $t('contentDetail.navList')[0] }}</div>
            </div>
            <div>
                <div v-html="journeyContent"></div>
            </div>
        </div>
        <div class="journey_records">
            <div class="journey_records_title">
                <div class="icon_no">2</div>
                <div class="color-2C3645 fontb title_text">{{ $t('contentDetail.navList')[1] }}</div>
            </div>
            <div>
                <div v-html="journeyContent"></div>
            </div>
        </div>
        <div class="journey_records evaluate_records">
            <div class="journey_records_title">
                <div class="icon_no">3</div>
                <div class="color-2C3645 fontb title_text">{{ $t('contentDetail.navList')[2] }}</div>
            </div>
            <div class="">
                <div class="evaluate_statistics">
                    <img class="five_star" src="~/assets/images/five_star.png" alt="" />
                    <div class="color-181818 evaluate_num">5.0</div>
                    <div class="color-181818 evaluate_total_num">150{{ $t('contentDetail.records') }}</div>
                    <div class="evaluate_btn">我也说两句</div>
                </div>
                <div class="evaluate_list" v-for="item in 3" :key="item">
                    <div class="flex flex-a-c" style="margin-bottom: 12px">
                        <img class="evaluate_user_head" src="~/assets/images/customer-ser.png" alt="" />
                        <div class="">
                            <div class="evaluate_user_name flex flex-a-c fontb font14">
                                <span style="margin-right: 8px">小橙子</span>
                                <span>{{ $t('contentDetail.from') }}中国</span>
                            </div>
                            <div class="flex flex-a-c">
                                <span class="font12 color-A6A6A6 mr16">2022-01-03</span>
                                <v-rating v-model="rating" active-color="#f2c94c" color="#d6dbe3" density="default"></v-rating>
                            </div>
                        </div>
                    </div>
                    <div class="font14 color-2C2C2C" style="margin-bottom: 12px">
                        评论文案，评论文案评论文案评论文案评论文案评论文案评论文案评论文案评论文案评论文案
                    </div>
                    <div class="flex flex-wrap evaluate_img_list">
                        <img class="evaluate_img" v-for="item in 6" :key="item" src="~/assets/images/bg.png" alt="" style="object-fit: cover" />
                    </div>
                    <div class="operation_chat">
                        <div class="flex flex-a-c operation_item">
                            <img class="icon_operation" src="~/assets/images/icon_dianzan.png" alt="" />
                            <span>{{ $t('contentDetail.like') }}</span>
                        </div>
                        <div class="flex flex-a-c operation_item">
                            <img class="icon_operation" src="~/assets/images/icon_chat.png" alt="" />
                            <span>{{ $t('contentDetail.msgBack') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-a-c flex-j-c" style="cursor: pointer">
            <img src="~/assets/images/icon_more_chat.png" alt="" style="width: 24px; height: 24px; margin-right: 4px" />
            <span class="color-242424 font14">点击加载更多评论</span>
        </div>
        <!-- 评论弹窗 -->
        <div class="comment_mask" v-if="isComment">
            <div class="comment">
                <div class="comment_title">
                    <span class="title_text">{{ $t('contentDetail.talk') }}</span>
                    <img @click.stop="() => (isComment = false)" src="~/assets/images/cloudSales/popupWindow/icon_delet_h.png" alt="" />
                </div>
                <div class="comment_main">
                    <div class="article">
                        <img class="comment_main_img" src="~/assets/images/bg.png" alt="" />
                        <div class="article_title">马尔代夫 小橙子全网最全得旅游攻略</div>
                    </div>
                    <div>
                        <div>
                            <div>{{ $t('contentDetail.quality') }}</div>
                            <v-rating v-model="rating" active-color="#f2c94c" color="#d6dbe3" density="default"></v-rating>
                        </div>
                        <v-textarea :rows="2" class="comment_textarea" :label="$t('contentDetail.placeholder')" variant="solo-filled"></v-textarea>
                    </div>
                </div>
                <div class="comment_footer">
                    <v-btn class="submit_btn"> {{ $t('contentDetail.submit') }} </v-btn>
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
        };
    },

    async fetch() {},
    methods: {
        handleAuthor(){
            window.location.href = '/authorIndex'
        }
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
.detail_container {
    width: 90%;
    margin: 0 auto;
    padding: 24px 0;
    .detail_content {
        width: 100%;
        padding: 24px;
        background-color: #ffffff;
        margin-bottom: 24px;
    }
}
.user_info {
    width: 100%;
    display: flex;
    margin-bottom: 48px;
}
.user_head {
    width: 72px;
    height: 72px;
    margin-right: 16px;
    flex-shrink: 0;
}
.user_name {
    font-size: 24px;
    font-weight: bold;
    color: #181818;
    flex-shrink: 0;
}
.user_msg {
    margin-right: 36px;
    cursor: pointer;
}
.time {
    font-size: 16px;
    margin-right: 36px;
    display: inline-block;
}
.address {
    font-size: 16px;
}
.first_img {
    width: 720px;
    height: 320px;
    object-fit: cover;
    flex-shrink: 0;
    margin-right: 24px;
}
.title {
    color: #242424;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 48px;
}
.content_msg {
    flex: 1;
    display: flex;
    align-items: center;
}
.local_icon {
    width: 24px;
    height: 24px;
}
.tabs .tabs_item:nth-child(2) {
    border-left: 1px solid #dcdcdc;
    border-right: 1px solid #dcdcdc;
}
.tabs_item {
    width: calc(100% / 3);
    display: flex;
    align-items: center;
    justify-content: center;
}
.tab_title {
    color: #000;
    font-family: 'Source Han Sans CN';
    font-size: 28px;
    font-weight: bold;
    margin-right: 16px;
}
.arrow_icon {
    width: 28px;
    height: 28px;
}
.icon_no {
    display: flex;
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
    border-radius: 27px;
    background: #09236c;
    color: #ffffff;
    margin-right: 12px;
}
.journey_records {
    padding: 24px;
    background-color: #ffffff;
    margin-bottom: 24px;
    .journey_records_title {
        display: flex;
        align-items: center;
        padding: 16px;
        background: #f1fbfd;
        margin-bottom: 16px;
        .icon_no {
            margin-right: 8px;
        }
        .title_text {
            font-size: 20px;
        }
    }
}
.evaluate_records {
    .evaluate_statistics {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        .five_star {
            width: 32px;
            height: 32px;
            margin-right: 8px;
        }
        .evaluate_num {
            font-size: 20px;
            margin-right: 16px;
        }
        .evaluate_total_num {
            font-size: 18px;
            margin-right: 16px;
        }
        .evaluate_btn {
            padding: 5px 16px;
            line-height: 22px;
            color: #09236c;
            font-size: 14px;
            cursor: pointer;
        }
    }
    .evaluate_list {
        margin-bottom: 24px;
        .evaluate_user_head {
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            margin-right: 24px;
        }
        .evaluate_img_list {
            width: 100%;
            margin-bottom: 12px;
            .evaluate_img {
                height: 200px;
                width: calc((100% - 72px) / 4);
                margin-right: 24px;
                margin-bottom: 12px;
            }
            .evaluate_img:nth-child(4n) {
                margin-right: 0;
            }
        }
        .operation_chat {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .operation_item {
                flex: 0 1 auto;
                width: fit-content;
                margin-left: 24px;
                cursor: pointer;
                color: #2c2c2c;
                .icon_operation {
                    width: 24px;
                    height: 24px;
                    margin-right: 4px;
                }
            }
        }
    }
}
.comment_mask {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .comment {
        width: 30%;
        background-color: #ffffff;
        border-radius: 4px;
        .comment_title {
            display: flex;
            height: 48px;
            align-items: center;
            position: relative;
            .title_text {
                flex: 1;
                text-align: center;
            }
            img {
                width: 48px;
                height: 48px;
                cursor: pointer;
                position: absolute;
                right: 0;
                top: 0;
            }
        }
    }
    .comment_main {
        padding: 24px;
        .article {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            .comment_main_img {
                width: 120px;
                height: 60px;
                flex-shrink: 0;
                margin-right: 12px;
                border-radius: 4px;
            }
            .article_title {
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
    .comment_footer {
        width: 100%;
        padding: 0 24px 24px;
        .submit_btn {
            width: 100%;
            background-color: #09236c;
            color: #ffffff;
        }
    }
}
/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
    .detail_container {
        .detail_content {
            .user_info {
                .first_img {
                    width: 200px;
                    height: 120px;
                    margin-right: 24px;
                }
                .title {
                    font-size: 18px;
                }
                .user_msg {
                    margin-right: 24px;
                }
                .user_head {
                    width: 36px;
                    height: 36px;
                }
                .user_name {
                    font-size: 16px;
                }
                .time {
                    font-size: 14px;
                    margin-right: 12px;
                }
            }
            .tab_title {
                font-size: 20px;
            }
        }
        .journey_records {
            .title_text {
                font-size: 16px;
            }
            .five_star {
                width: 26px;
                height: 26px;
            }
            .evaluate_num {
                font-size: 16px;
            }
            .evaluate_total_num {
                font-size: 16px;
            }
            .evaluate_btn {
                line-height: 18px;
            }
            .evaluate_img_list {
                .evaluate_img {
                    height: 150px;
                    width: calc((100% - 54px) / 4);
                    margin-right: 18px;
                    margin-bottom: 12px;
                }
                .evaluate_img:nth-child(4n) {
                    margin-right: 0;
                }
            }
        }
        .icon_no {
            width: 22px;
            height: 22px;
        }
        .comment_mask {
            .comment {
                width: 30%;
                background-color: #ffffff;
                border-radius: 4px;
                .comment_title {
                    display: flex;
                    height: 36px;
                    align-items: center;
                    position: relative;
                    .title_text {
                        flex: 1;
                        text-align: center;
                    }
                    img {
                        width: 36px;
                        height: 36px;
                        cursor: pointer;
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                }
                .comment_main {
                    padding: 12px;
                    .article {
                        display: flex;
                        margin-bottom: 10px;
                        .comment_main_img {
                            width: 120px;
                            height: 60px;
                            flex-shrink: 0;
                            margin-right: 6px;
                            border-radius: 4px;
                        }
                        .article_title {
                            font-size: 14px;
                            font-weight: bold;
                        }
                    }
                }
                .comment_footer {
                    width: 100%;
                    padding: 0 12px 12px;
                    .submit_btn {
                        width: 100%;
                        background-color: #09236c;
                        color: #ffffff;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: $pad-max-width) {
    .detail_container {
        .detail_content {
            .user_info {
                .first_img {
                    width: 200px;
                    height: 120px;
                    margin-right: 24px;
                }
                .title {
                    font-size: 18px;
                }
                .user_msg {
                    margin-right: 24px;
                }
                .user_head {
                    width: 30px;
                    height: 30px;
                }
                .user_name {
                    font-size: 14px;
                }
                .time {
                    font-size: 12px;
                    margin-right: 6px;
                }
                .address {
                    font-size: 12px;
                }
                .local_icon {
                    width: 16px;
                    height: 16px;
                }
            }
            .tab_title {
                font-size: 18px;
            }
        }
        .journey_records {
            .title_text {
                font-size: 14px;
            }
            .five_star {
                width: 20px;
                height: 20px;
            }
            .evaluate_num {
                font-size: 14px;
            }
            .evaluate_total_num {
                font-size: 14px;
            }
            .evaluate_btn {
                line-height: 16px;
            }
            .evaluate_img_list {
                .evaluate_img {
                    height: 120px;
                    width: calc((100% - 36px) / 4);
                    margin-right: 12px;
                    margin-bottom: 12px;
                }
                .evaluate_img:nth-child(4n) {
                    margin-right: 0;
                }
            }
        }
        .icon_no {
            width: 22px;
            height: 22px;
        }
        .comment_mask {
            .comment {
                width: 40%;
                background-color: #ffffff;
                border-radius: 4px;
                .comment_title {
                    display: flex;
                    height: 36px;
                    align-items: center;
                    position: relative;
                    .title_text {
                        flex: 1;
                        text-align: center;
                    }
                    img {
                        width: 36px;
                        height: 36px;
                        cursor: pointer;
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                }
                .comment_main {
                    padding: 12px;
                    font-size: 12px;
                    .article {
                        display: flex;
                        margin-bottom: 10px;
                        .comment_main_img {
                            width: 90px;
                            height: 50px;
                            flex-shrink: 0;
                            margin-right: 6px;
                            border-radius: 4px;
                        }
                        .article_title {
                            font-size: 14px;
                            font-weight: bold;
                        }
                    }
                    .comment_textarea {
                        :deep .v-label {
                            font-size: 12px !important;
                        }
                    }
                }
                .comment_footer {
                    width: 100%;
                    padding: 0 12px 12px;
                    .submit_btn {
                        width: 100%;
                        background-color: #09236c;
                        color: #ffffff;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: $phone-max-width) {
    .detail_container {
        .detail_content {
            .user_info {
                display: block;
                margin-bottom: 16px;
                .first_img {
                    width: 100%;
                    height: 120px;
                    margin-right: 8px;
                }
                .title {
                    font-size: 16px !important;
                    margin-bottom: 12px;
                }
                .content_msg {
                    display: block;
                }
                .user_msg {
                    margin-right: 0;
                    margin-bottom: 12px;
                }
                .user_head {
                    width: 30px;
                    height: 30px;
                    margin-right: 4px;
                }
                .user_name {
                    font-size: 14px;
                }
                .time {
                    font-size: 12px;
                    margin-right: 6px;
                    margin-bottom: 6px;
                }
                .address {
                    font-size: 12px;
                }
                .local_icon {
                    width: 16px;
                    height: 16px;
                }
            }
            .tab_title {
                font-size: 14px;
                margin-right: 4px;
            }
        }
        .journey_records {
            padding: 12px;
            .title_text {
                font-size: 14px;
            }
            .five_star {
                width: 20px;
                height: 20px;
            }
            .evaluate_num {
                font-size: 14px;
            }
            .evaluate_total_num {
                font-size: 14px;
            }
            .evaluate_btn {
                line-height: 16px;
            }
            .evaluate_img_list {
                margin-bottom: 4px;
                .evaluate_img {
                    height: 60px;
                    width: calc((100% - 36px) / 3);
                    margin-right: 12px;
                    margin-bottom: 12px;
                }
                .evaluate_img:nth-child(3n) {
                    margin-right: 0;
                }
                .evaluate_img:nth-child(4n) {
                    margin-right: 12px;
                }
            }
        }
        .icon_no {
            width: 16px;
            height: 16px;
            font-size: 12px;
            margin-right: 4px;
        }
        .arrow_icon {
            width: 12px;
            height: 12px;
        }
        .comment_mask {
            .comment {
                width: 80%;
                background-color: #ffffff;
                border-radius: 4px;
                .comment_title {
                    display: flex;
                    height: 36px;
                    align-items: center;
                    position: relative;
                    .title_text {
                        flex: 1;
                        text-align: center;
                    }
                    img {
                        width: 36px;
                        height: 36px;
                        cursor: pointer;
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                }
                .comment_main {
                    padding: 12px;
                    font-size: 12px;
                    .article {
                        display: flex;
                        margin-bottom: 10px;
                        .comment_main_img {
                            width: 90px;
                            height: 50px;
                            flex-shrink: 0;
                            margin-right: 6px;
                            border-radius: 4px;
                        }
                        .article_title {
                            font-size: 14px;
                            font-weight: bold;
                        }
                    }
                    .comment_textarea {
                        :deep .v-label {
                            font-size: 12px !important;
                        }
                    }
                }
                .comment_footer {
                    width: 100%;
                    padding: 0 12px 12px;
                    .submit_btn {
                        width: 100%;
                        background-color: #09236c;
                        color: #ffffff;
                    }
                }
            }
        }
    }
}
</style>
