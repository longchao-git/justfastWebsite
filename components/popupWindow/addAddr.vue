<template>
  <div v-if="type===4" class="login-window">
    <div class="login-tan-card"  :class="type===4?'login-class':''">
      <div>
        <div class="loginView">
          <img @click="handleChangeType(-1)" src="../../assets/images/cloudSales/popupWindow/icon_delet.png"
               alt=""/>
        </div>
        <p>{{ $t('addAddr.name') }}</p>
        <div class="loginClass">
          <div class="login_input"  >
            <div>{{ $t('loginPopup.fromOne') }}</div>
            <input
              v-model="addr"
              :placeholder="$t('addAddr.ingrese')"
              class="c-input"/>
          </div>
          <div class="login_input"  >
            <div>{{ $t('loginPopup.fromTwo') }}</div>
            <input
              v-model="house"
              :placeholder="$t('addAddr.ingrese')"
              class="c-input"/>
          </div>
          <div class="login_input"  >
            <div>{{ $t('loginPopup.fromTree') }}</div>
            <input
              v-model="contact"
              :placeholder="$t('addAddr.ingrese')"
              class="c-input"/>
          </div>
          <div class="login_input"  >
            <div>{{ $t('loginPopup.fromFour') }}</div>
            <input
              v-model="mobile"
              :placeholder="$t('addAddr.ingrese')"
              class="c-input"/>
          </div>
          <v-btn width="100%" height="48px" class="try-out-bt mt3" @click="handleChangeType(2)">{{ $t(`asentar`) }}</v-btn>
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
      contact:'',
      mobile:'',
      house:'',
      addr:'',
    }
  },
  methods: {
    /** 处理呼叫父级 - 设置type状态 */
    handleChangeType(value) {
      if(value === 2){
        if(!this.contact||!this.mobile||!this.house||!this.addr){
          this.$message.info(this.$t(`home.ingrese`))
          return
        }
        const params = {
          data: {
            'contact': this.contact,
            'mobile': this.mobile,
            'house': this.house,
            'addr': this.addr,
            'lng': -3.7160397,
            'lat': 40.4202472,
            'page':1,
            'type':0,
          }
        };
        this.$axios.post('/client/member/addr/create', params).then(res => {

          this.$message.info(this.$t(`Guardar`))
          this.$emit('handleCloseLoginDialog', -2)
        }).catch(err=>{
          this.$message.info(err.message)
        });
      }else {
        this.$emit('handleCloseLoginDialog', value)
      }
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
  height: 460px !important;
}

/** 登录卡片样式 */
.login-tan-card {
  border-radius: 8px;
  background: radial-gradient(50% 26.6% at 50% 3.77%, rgba(238, 128, 128, 0.20) 0%, rgba(10, 218, 254, 0.00) 100%), #FFF;
  margin: auto;
  width: 540px;
  height: 740px;
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
          color: #ee8080;
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
          width: 120px;
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
            color: #ee8080;
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
  .login-tan-card {
    width: 600px;

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
    height: 560px !important;
  }
  /** 登录卡片样式 */
  .login-tan-card {
    width: 300px;
    height: 540px !important;
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
              color: #ee8080;
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
