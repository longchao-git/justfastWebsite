<template>
    <div class="global_preferences">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item class="color-181818" :to="{ path: '/accountManagement' }">账号</el-breadcrumb-item>
            <el-breadcrumb-item>全局偏好</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="page_title flex flex-a-c">
            <img class="title_icon" src="~/assets/images/icon_login_safety.png" alt="" />
            <span class="color-1C222B title_text">全局偏好</span>
        </div>
        <div class="flex flex-bw">
            <div class="set_form">
                <div class="set_title color-2C2C2C">首选语言</div>
                <el-select v-model="lang">
                    <el-options label="中文" value="chinese"></el-options>
                </el-select>
                <div class="save_btn">
                    <el-button type="primary">保存</el-button>
                </div>
            </div>
            <div class="card_item">
                <div class="item_info">
                    <div class="item_title">全局偏好</div>
                    <div class="item_desc">提前设置好您的浏览语言,有利于您更好的</div>
                </div>
                <img class="item_icon" src="~/assets/images/icon_preference.png" alt="" />
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
    padding: 24px 0;
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
        .set_title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 12px;
        }
        .el-select {
            width: 350px;
            margin-bottom: 32px;
        }
        .save_btn {
            .el-button {
                width: 154px;
            }
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
            .set_title {
                font-size: 20px;
                margin-bottom: 12px;
            }
            .el-select {
                width: 300px;
                margin-bottom: 32px;
            }
            .save_btn {
                .el-button {
                    width: 130px;
                }
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
            .set_title {
                font-size: 18px;
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
