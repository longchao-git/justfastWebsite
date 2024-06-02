<template>
    <div class="global_preferences">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item class="color-181818" :to="{ path: '/accountManagement' }">账号</el-breadcrumb-item>
            <el-breadcrumb-item>个人隐私设置</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="page_title flex flex-a-c">
            <img class="title_icon" src="~/assets/images/icon_privacy.png" alt="" />
            <span class="color-1C222B title_text">个人隐私设置</span>
        </div>
        <div class="flex flex-bw">
            <div class="set_form">
                <div class="set_text">为您提供更加优质的个人隐私防护，您可以在此处设置自己的所有隐私功能与权限。</div>
                <div class="flex flex-a-c flex-bw form_item">
                    <div>
                        <div class="set_title color-2C2C2C">我的帖子</div>
                        <div class="title_desc">开启后所有人均可查看我的发帖</div>
                    </div>
                    <el-switch class="flex-shrink switch_btn"></el-switch>
                </div>
                <div class="flex flex-a-c flex-bw form_item">
                    <div>
                        <div class="set_title color-2C2C2C">我的收藏夹</div>
                        <div class="title_desc">开启后所有人均可查看我的收藏夹</div>
                    </div>
                    <el-switch class="flex-shrink switch_btn"></el-switch>
                </div>
                <div class="flex flex-a-c flex-bw form_item">
                    <div>
                        <div class="set_title color-2C2C2C">我的关注</div>
                        <div class="title_desc">开启后所有人均可查看我的关注列表</div>
                    </div>
                    <el-switch class="flex-shrink switch_btn"></el-switch>
                </div>
            </div>
            <div class="card_item">
                <div class="item_info">
                    <div class="item_title">个人隐私设置</div>
                    <div class="item_desc">选择是否帖子、关注以及收藏列表对外公布</div>
                </div>
                <img class="item_icon" src="~/assets/images/icon_setting.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    components: {},
    data() {
        return {
            journeyContent: '<h1 style="color: red;" >我是行程记录</h1>',
            lang: '',
        };
    },

    async fetch() {},
    methods: {},
    mounted() {},
};
</script>
<style>
.main-content {
    background-color: #ffffff;
    /* padding: 24px 0; */
}
</style>
<style scoped lang="scss">
.global_preferences {
    width: 80%;
    margin: 0 auto;
    padding: 24px 0 80px;
    .page_title {
        padding: 32px 0;
        .title_icon {
            width: 56px;
            height: 56px;
            margin-right: 12px;
        }
        .title_text {
            font-size: 30px;
            font-weight: bold;
        }
    }
    .set_form {
        .form_item {
            margin-bottom: 24px;
        }
        .set_text {
            color: #2c2c2c;
            font-size: 24px;
            margin-bottom: 32px;
        }
        .switch_btn {
            transform: scale(1.5);
        }
        .title_desc {
            color: #2c2c2c;
            font-size: 18px;
        }
        .set_title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 12px;
        }
    }
    .card_item {
        width: 460px;
        padding: 24px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #eef7fa;
        border-radius: 12px;
        margin-left: 60px;
        flex-shrink: 0;
        cursor: pointer;
        .item_info {
            .item_title {
                color: #181818;
                font-weight: bold;
                font-size: 32px;
                margin-bottom: 16px;
            }
            .item_desc {
                font-size: 16px;
                color: #576f7b;
            }
        }
        .item_icon {
            width: 100px;
            height: 100px;
            flex-shrink: 0;
        }
    }
}

/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
    .global_preferences {
        width: 80%;
        margin: 0 auto;
        padding: 20px 0;
        .page_title {
            padding: 24px 0;
            .title_icon {
                width: 36px;
                height: 36px;
                margin-right: 12px;
            }
            .title_text {
                font-size: 24px;
                font-weight: bold;
            }
        }
        .set_form {
            .form_item {
                margin-bottom: 20px;
            }
            .set_title {
                font-size: 18px;
                margin-bottom: 12px;
            }
            .set_text {
                font-size: 18px;
                margin-bottom: 32px;
            }
            .switch_btn {
                transform: scale(1.3);
            }
            .title_desc {
                font-size: 16px;
            }
        }
        .card_item {
            width: 400px;
            padding: 24px;
            height: 160px;
            border-radius: 12px;
            cursor: pointer;
            .item_info {
                .item_title {
                    font-size: 24px;
                    margin-bottom: 16px;
                }
                .item_desc {
                    font-size: 14px;
                }
            }
            .item_icon {
                width: 90px;
                height: 90px;
            }
        }
    }
}

@media screen and (max-width: $pad-max-width) {
    .global_preferences {
        padding: 18px 0;
        .page_title {
            padding: 20px 0;
            .title_icon {
                width: 28px;
                height: 28px;
                margin-right: 8px;
            }
            .title_text {
                font-size: 20px;
            }
        }
        .set_form {
            .form_item {
                margin-bottom: 16px;
            }
            .set_title {
                font-size: 18px;
                margin-bottom: 8px;
            }
            .set_text {
                font-size: 14px;
                margin-bottom: 24px;
            }
            .switch_btn {
                transform: scale(1.2);
            }
            .title_desc {
                font-size: 14px;
                margin-right: 10px;
            }
        }
        .card_item {
            width: 300px;
            padding: 24px;
            height: 120px;
            display: flex;
            border-radius: 6px;
            cursor: pointer;
            .item_info {
                .item_title {
                    font-size: 18px;
                    margin-bottom: 14px;
                }
                .item_desc {
                    font-size: 14px;
                }
            }
            .item_icon {
                width: 60px;
                height: 60px;
            }
        }
    }
}

@media screen and (max-width: $phone-max-width) {
    .global_preferences {
        padding: 18px 0;
        .page_title {
            padding: 20px 0;
            .title_icon {
                width: 28px;
                height: 28px;
                margin-right: 8px;
            }
            .title_text {
                font-size: 18px;
            }
        }
        .set_form {
            .form_item {
                margin-bottom: 12px;
            }
            .set_title {
                font-size: 16px;
                margin-bottom: 12px;
            }
            .el-select {
                width: 300px;
                margin-bottom: 24px;
            }
            .save_btn {
                .el-button {
                    width: 100px;
                }
            }
        }
        .card_item {
            display: none;
        }
    }
}
</style>
