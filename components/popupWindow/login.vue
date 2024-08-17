<template>
  <div v-if='loginType === 1' class='login-window'>
    <div class='login-window-card'>
      <div>
        <div class='loginView'>
          <img @click='handleChangeType(1)' src='../../assets/images/cloudSales/popupWindow/icon_delet.png' alt='' />
        </div>
        <p>{{ $t('loginOrRegister.title') }}</p>
        <div class='loginClass'>

          <div class='login_input'>
            <div>{{ $t('loginOrRegister.formLabel')[0] }}</div>
            <el-select v-model='conPhone' filterable :placeholder="$t('loginOrRegister.placeholder')[1]"
                       style='flex: 1'>
              <el-option v-for='(item, index) in companyTypeList' :key='index' :label='item.name'
                         :value='item.value'></el-option>
            </el-select>
          </div>

          <div class='login_input p-relative'>
            <div>{{ $t('loginOrRegister.formLabel')[1] }}</div>
            <input v-model='email' :placeholder="$t('loginOrRegister.placeholder')[0]" class='c-input' />
            <span class='button' style='cursor: pointer' @click='bindSendCode()'>{{
                isGetCode ? $t('loginOrRegister.btnText')[1] : `${countdown}s${$t('loginOrRegister.btnText')[2]}`
              }}</span>
          </div>

          <div class='login_input'>
            <div>{{ $t('loginOrRegister.formLabel')[2] }}</div>
            <input v-model='code' :placeholder="$t('loginOrRegister.placeholder')[0]" class='c-input' />
          </div>

          <v-btn width='100%' height='48px' class='try-out-bt mt3' @click='handleChangeType(2)'
                 style='font-weight: bold'>{{
              $t('loginOrRegister.btnText')[0]
            }}
          </v-btn>


        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
  props: {
    loginType: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      companyTypeList: [{
        name: 'USA',
        value: 1
      }, {
        name: 'Great Britain',
        value: 44
      }, {
        name: 'France',
        value: 33
      }, {
        name: 'Australia',
        value: 61
      }, {
        name: 'Canada',
        value: 1
      }, {
        name: 'Spain',
        value: 34
      }, {
        name: 'China',
        value: 86
      }, {
        name: 'Japan',
        value: 81
      }, {
        name: 'Italia',
        value: 39
      }],
      tradeTypeId: '',
      conPhone: '',
      isGetCode: true,
      phone: '',
      email: '',
      countdown: 60,
      code: ''
    };
  },
  mounted() {
  },

  methods: {
    handleChangeType(type) {
      if (type === 1) {
        this.$emit('handleCloseLoginDialog', -1);
      } else if (type === 2) {
        if (!this.conPhone) {
          this.$message.error('请选择国家地区');
          return;
        }
        if (!this.phone) {
          this.$message.error('请输入手机号码');
          return;
        }
        if (!this.code) {
          this.$message.error('请输入验证码');
          return;
        }
        let params = {
          phone: this.phone,
          conPhone: this.conPhone,
          code: this.code
        };

        this.$axios.get('/login/loginWeb', { params }).then(res => {
          localStorage.setItem('token', res.token);
        });
      }
    },

    bindSendCode(type) {
      if (this.isGetCode) {
        if (!this.conPhone) {
          this.$message.error('请选择国家地区');
          return;
        }
        if (!this.phone) {
          this.$message.error('请输入手机号码');
          return;
        }
        let params = { phone: this.conPhone + this.phone };
        this.$axios.get('/smsConfig/sendSmsCode', { params }).then(res => {
          this.isGetCode = false;
          const interval = setInterval(() => {
            this.countdown--;
            if (this.countdown === 0) {
              this.countdown = 60;
              this.isGetCode = true;
              clearInterval(interval);
            }
          }, 1000);
        });
      }
    }
  }
};
</script>
<style lang='scss'>
.loginClass {
  .login_input {
    .v-input__slot {
      border-radius: 6px;
      border: 1px solid #dcdcdc !important;
      height: 48px;

      margin-bottom: 0;
    }

    .c-input {
      border-radius: 6px;
      border: 1px solid #dcdcdc !important;
      height: 48px;
      margin-bottom: 0;
      flex: 1;
      padding-left: 12px;
      margin-right: 12px;
    }

    .v-text-field__details {
      display: none;
    }
  }
}
</style>
<style lang='scss' scoped>
.login-window {
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;

  min-width: 100vw;
  width: 100%;
  z-index: 100;
  display: flex;
}


/** 登录卡片样式 */
.login-window-card {
  border-radius: 8px;
  background: radial-gradient(50% 26.6% at 50% 3.77%, rgba(238, 128, 128, 0.20) 0%, rgba(10, 218, 254, 0.00) 100%), #FFF;
  margin: auto;
  width: 540px;
  height: 400px;
  position: relative;

  > div {
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    height: 100%;

    > .loginView {
      cursor: pointer;
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

    .loginClass {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 8px;
      padding: 0 48px;

      .logoCard {
        width: 72px;
        height: 72px;
        object-fit: cover;
        border-radius: 50%;
      }

      .name {
        margin-top: 12px;
        font-size: 24px;
        color: #2c2c2c;
        font-weight: 500;
        margin-bottom: 12px;
      }

      .login_input {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 12px;

        .button {
          color: #0a98fe;
          font-size: 14px;
          position: absolute;
          right: 24px;
        }

        .v-input__slot {
          border-radius: 6px;
          border: 1px solid #dcdcdc;
          height: 48px;
        }

        > div {
          width: 100px;
          flex-shrink: 0;
          text-align: right;
          color: #2c2c2c;
          font-size: 16px;
          padding-right: 12px;
          padding-top: 8px;
        }
      }

      .viewSetTion {
        margin-top: 16px;
        display: flex;
        flex-direction: row;

        > img {
          margin: 5px;
          height: 24px;
          width: 24px;
        }

        > div {
          line-height: 22px;
          font-size: 14px;
          color: #1d2129;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          width: 100%;

          > span {
            color: #0a98fe;
          }
        }
      }

      .viewXian {
        padding: 16px 0;
        width: 100%;
        display: flex;
        align-items: center;

        > div {
          flex: 1;
          border-top: 1px #c5c5c5 dashed;
        }

        span {
          color: #4b4b4b;
          flex-shrink: 0;
          padding: 0 8px;
        }
      }

      .email_icon {
        width: 24px;
        height: 24px;
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

      .loginClass {
        margin-top: 0px;
        padding: 0 16px;

        .logoCard {
          width: 48px;
          height: 48px;
        }

        .name {
          font-size: 16px;
          margin-bottom: 6px;
        }

        .login_input {
          margin-top: 6px;

          .v-input__slot {
            border-radius: 6px;
            border: 1px solid #dcdcdc;
            height: 48px;
          }

          > div {
            width: 72px;
            text-align: right;
            color: #2c2c2c;
            font-size: 12px;
            padding-right: 12px;
            padding-top: 8px;
          }
        }

        .viewSetTion {
          margin-top: 16px;
          display: flex;
          flex-direction: row;

          > img {
            margin: 2px;
            height: 18px;
            width: 18px;
          }

          > div {
            line-height: 16px;
            font-size: 12px;
            color: #1d2129;

            > span {
              font-size: 12px;
              color: #0a98fe;
            }
          }
        }

        .viewXian {
          padding: 4px 0;
          width: 100%;
          display: flex;
          align-items: center;

          > div {
            flex: 1;
            border-top: 1px #c5c5c5 dashed;
          }

          span {
            color: #4b4b4b;
            flex-shrink: 0;
            padding: 0 8px;
          }
        }
      }
    }
  }
}
</style>
