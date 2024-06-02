<template>
  <div v-if="type !== -1&&type !== 2" class="login-window">
    <div class="login-window-card"  :class="type===1?'login-class':''">
        <div>
          <div class="loginView">
            <img @click="handleChangeType(-1)" src="../../assets/images/cloudSales/popupWindow/icon_delet.png"
                 alt=""/>
          </div>
          <p>登录或注册</p>
          <div class="loginClass">
            <img class="logoCard" src="../../assets/images/cloudSales/popupWindow/logo.png"
                 alt=""/>
            <div class="name">欢迎来到国际文旅平台</div>
            <div class="login_input" v-if="type === 0">
              <div>国家/地区</div>

              <el-cascader style="flex: 1"
                v-model="tradeTypeId"
                :options="companyTypeList"
                @change="handleChange"></el-cascader>
            </div>
            <div class="login_input p-relative"  v-if="type === 0">
              <div>手机号码</div>

                <input
                  v-model="context"
                  placeholder="请输入"
                  class="c-input"/>
                <span class="button">{{isshow?'':'获取验证码'}}</span>

            </div>
            <div class="login_input"  v-if="type === 1">
              <div>邮箱</div>
              <input
                v-model="context"
                placeholder="请输入"
                class="c-input"/>
            </div>
            <div class="login_input"  >
              <div>{{type === 0?'手机验证码':'邮箱验证码'}}</div>
              <input
                v-model="context"
                placeholder="请输入"
                class="c-input"/>
            </div>
            <div class="viewSetTion">
              <img @click="handleChangeType(-1)"  src="../../assets/images/cloudSales/popupWindow/le.png"
                   alt=""/>
              <div>我确认已年满18 周岁，且已认真阅读并同意爱彼迎的 <span>服务条款、支付服务条款、非歧视政策和隐私政策</span> 。如您居住在中国，您的信息将在中国按照中国法律(包括隐私和信息披露法律)的要求处理。</div>
            </div>
            <v-btn width="100%" height="48px" class="try-out-bt mt3" @click="handleChangeType(2)">登录或注册</v-btn>
            <div class="viewXian">
              <div></div>
              <span>或</span>
              <div></div>
            </div>
            <v-btn width="100%" height="48px" @click="type = (type===0?1:0)">{{type === 0?'使用邮箱进行登录':'使用手机号进行登录'}}</v-btn>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type'],
  data(){
    return{
      companyTypeList:[],
      tradeTypeId:'',
      context:'',
      isshow:false,
    }
  },
  methods: {
    /** 处理呼叫父级 - 设置type状态 */
    handleChangeType(value) {
      this.$emit('handleCloseLoginDialog', value)
    }
  }
}
</script>
<style lang="scss">
.loginClass{
  .login_input{

    .v-input__slot{
      border-radius: 6px;
      border: 1px solid  #DCDCDC !important;
      height: 48px;

      margin-bottom: 0;
    }
    .c-input{
      border-radius: 6px;
      border: 1px solid  #DCDCDC !important;
      height: 48px;
      margin-bottom: 0;
      flex: 1;
      padding-left: 12px;
      margin-right: 12px;
    }
    .v-text-field__details{
      display: none;
    }
  }
}

</style>
<style lang="scss" scoped>
.login-window {
  position: fixed;
  background: rgba(0, 0, 0, .4);
  top: 0;
  right: 0;
  bottom: 0;

  min-width: 100vw;
  width: 100%;
  z-index: 5;
  display: flex;
}

.login-class{
  height: 640px !important;
}

/** 登录卡片样式 */
.login-window-card {
  border-radius: 8px;
  background: radial-gradient(50% 26.6% at 50% 3.77%, rgba(10, 218, 254, 0.20) 0%, rgba(10, 218, 254, 0.00) 100%), #FFF;
  margin: auto;
  width: 540px;
  height: 700px;
  position: relative;

  > div {
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    height: 100%;
    > .loginView {
      position: absolute;
      width: 55px;
      height: 55px;
      text-align: right;
      right: 0;
      top: 0;
      img {
        width: 55px;
        height: 55px;
        cursor: pointer;
      }
    }
    p {
      font-size: 24px;
      padding: 24px 0;
    }
    .loginClass{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 8px;
      padding: 0 48px;
      .logoCard{
        width: 72px;
        height: 72px;
      }
      .name{
        margin-top: 12px;
        font-size: 24px;
        color: #2C2C2C;
        font-weight: 500;
        margin-bottom: 12px;
      }
      .login_input{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 12px;
        .button{
          color: #0A98FE;
          font-size: 14px;
          position: absolute;
          right: 24px;
        }
        .v-input__slot{
          border-radius: 6px;
          border: 1px solid  #DCDCDC;
          height: 48px;
        }
        >div{
          width: 100px;
          flex-shrink: 0;
          text-align: right;
          color: #2C2C2C;
          font-size:16px ;
          padding-right: 12px;
          padding-top: 8px;
        }
      }
      .viewSetTion{
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        >img{
          margin: 5px;
          height: 24px;
          width: 24px;
        }
        >div{
          line-height: 22px;
          font-size: 14px;
          color: #1D2129;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          width: 100%;
          >span{
            color: #0A98FE;
          }
        }
      }
      .viewXian{
        padding: 16px 0;
        width: 100%;
        display: flex;
        align-items: center;
        >div{
          flex: 1;
          border-top: 1px #C5C5C5 dashed ;
        }
        span{
          color: #4B4B4B;
          flex-shrink: 0;
          padding:  0 8px;
        }
      }
    }

  }

}

/* 中屏幕*/
@media screen and(max-width: $big-pc-width) {

  /** 登录卡片样式 */
  .login-window-card {
    width: 500px;

    > div {
      > div {
        img {
          width: 45px;
          height: 45px;
        }
      }

      p {
        font-size: 20px;
      }

      span {
        font-size: 14px;
      }
    }

  }
}

/** 平板屏幕 */
@media screen and (max-width: $pad-max-width) {

}

/** 手机屏幕 */
@media screen and (max-width: $phone-max-width) {
  .login-class{
    height: 480px !important;
  }
  /** 登录卡片样式 */
  .login-window-card {
    width: 300px;
    height: 540px;
    > div {

      p {
        font-size: 16px;
        padding: 16px 0;
        margin-bottom: 0 !important;
      }
      .loginClass{
        margin-top: 0px;
        padding: 0 16px;
        .logoCard{
          width: 48px;
          height: 48px;
        }
        .name{
          font-size: 16px;
          margin-bottom: 6px;
        }
        .login_input{
          margin-top: 6px;
          .v-input__slot{
            border-radius: 6px;
            border: 1px solid  #DCDCDC;
            height: 48px;
          }
          >div{
            width: 72px;
            text-align: right;
            color: #2C2C2C;
            font-size:12px ;
            padding-right: 12px;
            padding-top: 8px;
          }
        }
        .viewSetTion{
          margin-top: 16px;
          display: flex;
          flex-direction: row;
          >img{
            margin: 2px;
            height: 18px;
            width: 18px;
          }
          >div{
            line-height: 16px;
            font-size: 12px;
            color: #1D2129;
            >span{
              font-size: 12px;
              color: #0A98FE;
            }
          }
        }
        .viewXian{
          padding: 4px 0;
          width: 100%;
          display: flex;
          align-items: center;
          >div{
            flex: 1;
            border-top: 1px #C5C5C5 dashed ;
          }
          span{
            color: #4B4B4B;
            flex-shrink: 0;
            padding:  0 8px;
          }
        }
      }

    }

  }
}
</style>
