<template>
    <div class="creation">
        <div class="page_title">
            <img class="title_icon" src="~/assets/images/icon_creation.png" alt="" />
            <div class="title_text">发布帖子</div>
        </div>
        <div class="creation_form">
            <div class="form_item">
                <div class="form_label">首页图片</div>
            </div>
            <div class="form_item">z
                <div class="form_label">标题</div>
                <el-input v-model="addForm.title" class="form_input" type="text" placeholder="填写图问标题，可能会被更多人发现哦~" :maxlength="35" show-word-limit></el-input>
            </div>
            <div class="form_item">
                <div class="form_label">行程记录</div>
            </div>
            <div class="form_item">
                <div class="form_label">地图记录</div>
                <div class="flex flex-a-c">
                    <el-select v-model="addForm.startAddress">
                        <el-option label="埃及" value="aiji" placeholder="请选择起始点"></el-option>
                    </el-select>
                    <span style="margin: 0 4px;">至</span>
                    <el-select v-model="addForm.endAddress">
                        <el-option label="埃及" value="aiji" placeholder="请选择终点地"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="form_item">
                <div class="form_label">旅行记录</div>
            </div>
            <div class="form_item">
                <div class="form_label"></div>
                <div class="btns">
                    <el-button type="primary">发布</el-button>
                    <el-button>取消</el-button>
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
            addForm: {
                title: '',
                startAddress: '',
                endAddress: ''
            },
        };
    },

    async fetch() {},
    methods: {},
    mounted() {},
};
</script>
<style>
.main-content {
    background-color: #f5f5f5;
    padding: 12px 0;
}
</style>
<style scoped lang="scss">
.creation {
    width: 80%;
    margin: 0 auto;
    padding: 24px;
    background-color: #ffffff;
    .page_title {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        .title_icon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            margin-right: 12px;
        }
        .title_text {
            font-size: 20px;
            font-weight: bold;
            color: #1c222b;
        }
    }
    .creation_form {
        .form_item {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            .form_label {
                width: 120px;
                text-align: right;
                font-weight: bold;
                font-size: 16px;
                color: #2c2c2c;
                margin-right: 12px;
            }
            .btns{
                .el-button{
                    width: 154px !important;
                }
            }
            .form_input {
                width: 400px;
            }
        }
    }
}
/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
}

@media screen and (max-width: $pad-max-width) {
}

@media screen and (max-width: $phone-max-width) {
}
</style>
