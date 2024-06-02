<template>
    <div class="login_safety">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item class="color-181818" :to="{ path: '/accountManagement' }">账号</el-breadcrumb-item>
            <el-breadcrumb-item>登陆与安全</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="page_title flex flex-a-c">
            <img class="title_icon" src="~/assets/images/icon_login_safety.png" alt="" />
            <span class="color-1C222B title_text">登录与安全</span>
        </div>
        <div class="card_item">
            <div class="card_title">个人信息</div>
            <div class="card_content">
                <div class="descriptions_item flex flex-a-c">
                    <span class="label color-4B4B4B">昵称</span>
                    <span class="value color-13161B">小橙子</span>
                </div>
                <div class="descriptions_item flex flex-a-c">
                    <span class="label color-4B4B4B">手机号码</span>
                    <div class="flex flex-a-c">
                        <span class="value color-13161B">13566666666</span>
                        <el-button @click="handleOperation(1)" type="text">修改</el-button>
                    </div>
                </div>
                <div class="descriptions_item flex flex-a-c">
                    <span class="label color-4B4B4B">登录邮箱</span>
                    <div class="flex flex-a-c">
                        <span class="value color-13161B">13566666666</span>
                        <el-button @click="handleOperation(2)" type="text">修改</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card_item">
            <div class="card_title">账号安全</div>
            <div class="card_content">
                <div class="descriptions_item flex flex-a-c">
                    <span class="label color-4B4B4B">实名认证</span>
                    <div class="flex flex-a-c">
                        <span class="value color-13161B">填写相关实名认证信息有助于保护您的账号安全</span>
                        <el-button @click="handleOperation(3)" type="text">立即认证</el-button>
                    </div>
                </div>
                <div class="descriptions_item flex flex-a-c">
                    <span class="label color-4B4B4B">登录密码</span>
                    <div class="flex flex-a-c">
                        <span class="value color-13161B">提升密码强度有利于保护您的账号安全</span>
                        <el-button @click="handleOperation(4)" type="text">修改</el-button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 实名认证弹窗 -->
        <div class="comment_mask" v-if="isComment">
            <div class="id_card">
                <div class="comment_title">
                    <span class="title_text">实名认证</span>
                    <img @click.stop="() => (isComment = false)" src="~/assets/images/cloudSales/popupWindow/icon_delet_h.png" alt="" />
                </div>
                <div class="dialog_main" v-if="step === 1">
                    <div class="color-2C2C2C form_label" style="font-weight: bold; margin-bottom: 8px">请选择证件类型</div>
                    <el-select style="width: 100%" aria-placeholder="请选择">
                        <el-option label="身份证" :value="1"></el-option>
                        <el-option label="护照" :value="2"></el-option>
                    </el-select>
                </div>
                <div v-else-if="step === 2" class="dialog_main">
                    <div class="color-2C2C2C form_label" style="font-weight: bold; margin-bottom: 8px">真实姓名</div>
                    <div class="flex flex-a-c form_content">
                        <el-input style="width: 100%" type="text" placeholder="请输入" />
                    </div>
                    <div class="color-2C2C2C form_label" style="font-weight: bold">上传您的身份证件照片</div>
                    <div class="color-8B8B8B desc">确保照片画面清晰，且身份证件正面的照片能清楚显示您的面部</div>
                    <div class="flex flex-a-c flex-bw">
                        <div class="upload_item">
                            <img class="id_card_img" src="~/assets/images/id_card_on.png" alt="" />
                            <!-- <div class="upload_desc">身份证（正面）</div> -->
                        </div>
                        <div class="upload_item">
                            <img class="id_card_img" src="~/assets/images/id_card_off.png" alt="" />
                            <!-- <div class="upload_desc">身份证（反面）</div> -->
                        </div>
                    </div>
                </div>
                <div v-else-if="step === 3" class="dialog_main">
                    <div class="color-2C2C2C form_label" style="font-weight: bold; margin-bottom: 8px">真实姓名</div>
                    <div class="flex flex-a-c form_content">
                        <el-input style="width: 100%" type="text" placeholder="请输入" />
                    </div>
                    <div class="color-2C2C2C form_label" style="font-weight: bold">上传您的护照照片</div>
                    <div class="color-8B8B8B desc">确保您的护照照片清晰可辨，能清楚显示您的面部</div>
                    <div class="flex flex-a-c flex-bw">
                        <div class="upload_item_3">
                            <img class="icon_passport" src="~/assets/images/icon_passport.png" alt="" />
                            <div class="upload_desc">上传护照</div>
                        </div>
                    </div>
                </div>
                <div class="comment_footer">
                    <v-btn @click="handleAuthentication" class="submit_btn"> {{ step === 1 ? '继续' : '确认' }} </v-btn>
                </div>
            </div>
        </div>
        <!-- 修改密码 -->
        <div class="comment_mask" v-if="isPassword">
            <div class="password">
                <div class="comment_title">
                    <span class="title_text">修改密码</span>
                    <img @click.stop="() => (isPassword = false)" src="~/assets/images/cloudSales/popupWindow/icon_delet_h.png" alt="" />
                </div>
                <div class="dialog_main">
                    <div class="password_form">
                        <div class="flex flex-a-c password_form_item">
                            <div class="flex-shrink password_form_label">旧密码</div>
                            <el-input type="text" placeholder="请输入"></el-input>
                        </div>
                        <div class="flex flex-a-c password_form_item">
                            <div class="flex-shrink password_form_label">新密码</div>
                            <el-input type="text" placeholder="请输入"></el-input>
                        </div>
                        <div class="flex flex-a-c password_form_item">
                            <div class="flex-shrink password_form_label">确认密码</div>
                            <el-input type="text" placeholder="请输入"></el-input>
                        </div>
                    </div>
                </div>
                <div class="comment_footer">
                    <v-btn @click="handlePassword" class="submit_btn"> 确认 </v-btn>
                </div>
            </div>
        </div>
        <!-- 修改邮箱 -->
        <div class="comment_mask" v-if="isEmail">
            <div class="email">
                <div class="comment_title">
                    <span class="title_text">修改绑定邮箱</span>
                    <img @click.stop="() => (isEmail = false)" src="~/assets/images/cloudSales/popupWindow/icon_delet_h.png" alt="" />
                </div>
                <div class="dialog_main">
                    <div class="password_form">
                        <div class="flex flex-a-c password_form_item">
                            <div class="flex-shrink password_form_label">邮箱号码</div>
                            <div class="email_form_content">
                                <el-input disabled type="text" placeholder="请输入"></el-input>
                                <div class="email_form_tip">我们会给上面的邮箱号发送验证码，请注意查收！</div>
                            </div>
                        </div>
                        <div class="flex flex-a-c password_form_item">
                            <div class="flex-shrink password_form_label">验证码</div>
                            <div class="email_form_content">
                                <div class="flex flex-a-c">
                                    <el-input type="text" placeholder="请输入" style="flex: 0.8"></el-input>
                                    <el-button :disabled="isGetCode" @click="handleGetCode" type="primary" style="margin-left: 8px; flex: 0.2">{{
                                        isGetCode ? codeTime + 's后获取' : '获取验证码'
                                    }}</el-button>
                                </div>
                                <div class="email_form_tip">请输入我们通过邮箱发送的验证码</div>
                            </div>
                        </div>
                        <div class="flex flex-a-c password_form_item">
                            <div class="flex-shrink password_form_label">新邮箱号</div>
                            <el-input type="text" placeholder="请输入"></el-input>
                        </div>
                    </div>
                </div>
                <div class="comment_footer">
                    <v-btn @click="handlePassword" class="submit_btn"> 确认 </v-btn>
                </div>
            </div>
        </div>
        <!-- 修改手机号 -->
        <div class="comment_mask" v-if="isPhone">
            <div class="phone">
                <div class="comment_title">
                    <span class="title_text">修改绑定手机</span>
                    <img @click.stop="() => (isPhone = false)" src="~/assets/images/cloudSales/popupWindow/icon_delet_h.png" alt="" />
                </div>
                <div class="dialog_main">
                    <div class="password_form">
                        <div class="flex flex-a-c password_form_item">
                            <div class="flex-shrink password_form_label">手机号码</div>
                            <div class="email_form_content">
                                <el-input disabled type="text" placeholder="请输入"></el-input>
                                <div class="email_form_tip">我们会给上面的手机号发送验证码，请注意查收！</div>
                            </div>
                        </div>
                        <div class="flex flex-a-c password_form_item">
                            <div class="flex-shrink password_form_label">验证码</div>
                            <div class="email_form_content">
                                <div class="flex flex-a-c">
                                    <el-input type="text" placeholder="请输入" style="flex: 0.8"></el-input>
                                    <el-button :disabled="isGetPhoneCode" @click="handleGetPhoneCode" type="primary" style="margin-left: 8px; flex: 0.2">{{
                                        isGetPhoneCode ? phoneCodeTime + 's后获取' : '获取验证码'
                                    }}</el-button>
                                </div>
                                <div class="email_form_tip">请输入我们通过短信发送的验证码</div>
                            </div>
                        </div>
                        <div class="flex flex-a-c password_form_item">
                            <div class="flex-shrink password_form_label">新手机号</div>
                            <el-input type="text" placeholder="请输入"></el-input>
                        </div>
                    </div>
                </div>
                <div class="comment_footer">
                    <v-btn @click="handlePassword" class="submit_btn"> 确认 </v-btn>
                </div>
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
            rating: 4,
            isComment: false,
            step: 1,
            isPassword: false,
            isEmail: false,
            isPhone: false,
            isGetCode: false,
            isGetPhoneCode: false,
            codeTime: 3,
            phoneCodeTime: 3,
            codeTimer: null,
            phoneCodeTimer: null,
        };
    },

    async fetch() {},
    methods: {
        handleAuthor() {
            window.location.href = '/authorIndex';
        },
        handleAuthentication() {
            if (this.step < 3) {
                this.step++;
            }
        },
        handleGetCode() {
            if (this.isGetCode) return;
            this.isGetCode = true;
            this.codeTimer = setInterval(() => {
                this.codeTime--;
                if (this.codeTime <= 0) {
                    clearInterval(this.codeTimer);
                    this.isGetCode = false;
                    this.codeTime = 60;
                }
            }, 1000);
        },
        handleGetPhoneCode() {
            if (this.isGetPhoneCode) return;
            this.isGetPhoneCode = true;
            this.phoneCodeTimer = setInterval(() => {
                this.phoneCodeTime--;
                if (this.phoneCodeTime <= 0) {
                    clearInterval(this.phoneCodeTimer);
                    this.isGetPhoneCode = false;
                    this.phoneCodeTime = 60;
                }
            }, 1000);
        },
        handlePassword() {},
        handleOperation(type) {
            if (type === 1) {
                this.isPhone = true;
            } else if (type === 2) {
                this.isEmail = true;
            } else if (type === 3) {
                this.isComment = true;
            } else {
                this.isPassword = true;
            }
        },
    },
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
.login_safety {
    padding: 24px 0;
    width: 80%;
    margin: 0 auto;
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
    .card_item {
        .card_title {
            padding: 16px;
            background-color: #f6f7f9;
            color: #181818;
            font-size: 20px;
            font-weight: bold;
        }
        .card_content {
            padding: 16px;
            border: 1px solid #e7e7e7;
            border-top: none;
            margin-bottom: 32px;
            .descriptions_item {
                margin-bottom: 16px;
                .label {
                    width: 70px;
                    text-align: right;
                    margin-right: 36px;
                }
                .value {
                    margin-right: 16px;
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
        .id_card,
        .phone,
        .email,
        .password {
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
            .dialog_main {
                padding: 32px 48px 24px;
                .form_content {
                    margin-bottom: 16px;
                }
                .desc {
                    font-size: 14px;
                    margin-bottom: 12px;
                }
                .upload_item {
                    width: 48%;
                    .id_card_img {
                        width: 100%;
                        height: 110px;
                    }
                }
                .upload_item_3 {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    .icon_passport {
                        width: 160px;
                        height: 200px;
                        margin-bottom: 8px;
                    }
                    .upload_desc {
                        color: #383838;
                        font-size: 14px;
                    }
                }
                .password_form {
                    .password_form_item {
                        margin-bottom: 24px;
                        .password_form_label {
                            width: 60px;
                            text-align: right;
                            margin-right: 12px;
                        }
                        .email_form_content {
                            flex: 1;
                            position: relative;
                            .email_form_tip {
                                position: absolute;
                                color: #999999;
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
        }

        .comment_footer {
            width: 100%;
            padding: 0 48px 24px;
            .submit_btn {
                width: 100%;
                background-color: #09236c;
                color: #ffffff;
            }
        }
    }
}
/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
    .login_safety {
        .comment_mask {
            .id_card {
                width: 40%;
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
                .dialog_main {
                    padding: 12px 48px 24px;
                    .form_content {
                        margin-bottom: 10px;
                    }
                    .desc {
                        font-size: 12px;
                        margin-bottom: 12px;
                    }
                    .upload_item {
                        width: 48%;
                        .id_card_img {
                            width: 100%;
                            height: 110px;
                        }
                    }
                    .upload_item_3 {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        .icon_passport {
                            width: 110px;
                            height: 150px;
                            margin-bottom: 8px;
                        }
                        .upload_desc {
                            color: #383838;
                            font-size: 14px;
                        }
                    }
                }
            }
            .phone {
                width: 45%;
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
                .dialog_main {
                    padding: 12px 48px 24px;
                    .form_content {
                        margin-bottom: 10px;
                    }
                    .desc {
                        font-size: 12px;
                        margin-bottom: 12px;
                    }
                    .upload_item {
                        width: 48%;
                        .id_card_img {
                            width: 100%;
                            height: 110px;
                        }
                    }
                    .upload_item_3 {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        .icon_passport {
                            width: 110px;
                            height: 150px;
                            margin-bottom: 8px;
                        }
                        .upload_desc {
                            color: #383838;
                            font-size: 14px;
                        }
                    }
                }
            }
            .comment_footer {
                width: 100%;
                padding: 0 48px 24px;
                .submit_btn {
                    width: 100%;
                    background-color: #09236c;
                    color: #ffffff;
                }
            }
        }
    }
}

@media screen and (max-width: $pad-max-width) {
    .login_safety {
        .page_title {
            padding: 16px 0;
            .title_icon {
                width: 36px;
                height: 36px;
                margin-right: 10px;
            }
            .title_text {
                font-size: 24px;
            }
        }
        .card_item {
            .card_title {
                padding: 12px;
                font-size: 18px;
            }
            .card_content {
                padding: 12px;
                margin-bottom: 24px;
                .descriptions_item {
                    margin-bottom: 12px;
                    .label {
                        width: 70px;
                        margin-right: 32px;
                        flex-shrink: 0;
                    }
                    .value {
                        margin-right: 12px;
                    }
                    :deep .el-button {
                        flex-shrink: 0;
                    }
                }
            }
        }
        .comment_mask {
            .id_card {
                width: 40%;
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
                .dialog_main {
                    padding: 0 48px 12px;
                    .form_label {
                        font-size: 14px;
                    }
                    .form_content {
                        margin-bottom: 4px;
                    }
                    .desc {
                        font-size: 12px;
                        margin-bottom: 4px;
                    }
                    .upload_item {
                        width: 48%;
                        .id_card_img {
                            width: 100%;
                            height: 70px;
                        }
                    }
                    .upload_item_3 {
                        .icon_passport {
                            width: 80px;
                            height: 120px;
                            margin-bottom: 4px;
                        }
                        .upload_desc {
                            color: #383838;
                            font-size: 12px;
                        }
                    }
                }
            }
            .phone,.email,.password{
                width: 48%;
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
                .dialog_main {
                    padding: 0 12px 12px;
                    .form_label {
                        font-size: 14px;
                    }
                    .form_content {
                        margin-bottom: 4px;
                    }
                    .desc {
                        font-size: 12px;
                        margin-bottom: 4px;
                    }
                    .upload_item {
                        width: 48%;
                        .id_card_img {
                            width: 100%;
                            height: 70px;
                        }
                    }
                    .upload_item_3 {
                        .icon_passport {
                            width: 80px;
                            height: 120px;
                            margin-bottom: 4px;
                        }
                        .upload_desc {
                            color: #383838;
                            font-size: 12px;
                        }
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

@media screen and (max-width: $phone-max-width) {
    .login_safety {
        width: 90%;
        .page_title {
            padding: 10px 0;
            .title_icon {
                width: 30px;
                height: 30px;
                margin-right: 10px;
            }
            .title_text {
                font-size: 18px;
            }
        }
        .card_item {
            .card_title {
                padding: 8px;
                font-size: 16px;
            }
            .card_content {
                padding: 8px;
                margin-bottom: 16px;
                .descriptions_item {
                    margin-bottom: 12px;
                    .label {
                        width: 60px;
                        margin-right: 10px;
                    }
                    .value {
                        font-size: 12px;
                        margin-right: 12px;
                    }
                }
            }
        }
        .comment_mask {
            .id_card {
                width: 80%;
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
                .dialog_main {
                    padding: 0 48px 12px;
                    .form_label {
                        font-size: 14px;
                    }
                    .form_content {
                        margin-bottom: 4px;
                    }
                    .desc {
                        font-size: 12px;
                        margin-bottom: 4px;
                    }
                    .upload_item {
                        width: 48%;
                        .id_card_img {
                            width: 100%;
                            height: 70px;
                        }
                    }
                    .upload_item_3 {
                        .icon_passport {
                            width: 80px;
                            height: 120px;
                            margin-bottom: 4px;
                        }
                        .upload_desc {
                            color: #383838;
                            font-size: 12px;
                        }
                    }
                }
            }
            .phone,.email,.password {
                width: 90%;
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
                .dialog_main {
                    padding: 0 12px 12px;
                    .form_label {
                        font-size: 14px;
                    }
                    .form_content {
                        margin-bottom: 4px;
                    }
                    .desc {
                        font-size: 12px;
                        margin-bottom: 4px;
                    }
                    .upload_item {
                        width: 48%;
                        .id_card_img {
                            width: 100%;
                            height: 70px;
                        }
                    }
                    .upload_item_3 {
                        .icon_passport {
                            width: 80px;
                            height: 120px;
                            margin-bottom: 4px;
                        }
                        .upload_desc {
                            color: #383838;
                            font-size: 12px;
                        }
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
</style>
