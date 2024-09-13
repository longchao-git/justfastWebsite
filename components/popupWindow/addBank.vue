<template>
  <div v-if="type===9" class="login-window">
    <div class="login-tan-card"  :class="type===9?'login-class':''">
      <div>
        <div class="loginView">
          <img @click="handleChangeType(-1)" src="../../assets/images/cloudSales/popupWindow/icon_delet.png"
               alt=""/>
        </div>
        <p>请绑定银行卡</p>
        <div class="loginClass">
          <div class="login_input"  >
            <div>卡类型</div>
            <div class='' style='display: flex;align-items: center'>
              <img @click="setcard_type(1)" v-if='card_type == 1' src="../../assets/images/icon_get1.jpg" style="width: 40px; height: 22px;"
                   alt=""/>
              <img @click="setcard_type(1)" v-if='card_type != 1' src="../../assets/images/icon_set1.jpg" style="width: 40px; height: 22px;"
                   alt=""/>
              <img @click="setcard_type(2)"   v-if='card_type == 2' src="../../assets/images/icon_get2.jpg" style="width: 40px; height: 22px;margin-left: 10px"
                   alt=""/>
              <img @click="setcard_type(2)" v-if='card_type != 2' src="../../assets/images/icon_set2.jpg" style="width: 40px; height: 22px;margin-left: 10px"
                   alt=""/>
              <img @click="setcard_type(3)"  v-if='card_type == 3' src="../../assets/images/icon_get3.jpg" style="width: 40px; height: 22px;margin-left: 10px"
                   alt=""/>
              <img @click="setcard_type(3)" v-if='card_type != 3' src="../../assets/images/icon_set3.jpg" style="width: 40px; height: 22px;margin-left: 10px"
                   alt=""/>
            </div>
          </div>
          <div class="login_input"  >
            <div>卡名称</div>
            <input
              v-model="card_name"
              :placeholder="$t('addAddr.ingrese')"
              class="c-input"/>
          </div>

          <div class="login_input"  >
            <div>卡号</div>
            <input
              v-model="card_number"
              :placeholder="$t('addAddr.ingrese')"
              class="c-input"/>
          </div>
          <div class="login_input"  >
            <div>年份</div>
            <input
              v-model="year"
              :placeholder="$t('addAddr.ingrese')"
              class="c-input"/>
          </div>
          <div class="login_input"  >
            <div>月</div>
            <input
              v-model="month"
              :placeholder="$t('addAddr.ingrese')"
              class="c-input"/>
          </div>
          <div class="login_input"  >
            <div>安全码</div>
            <input
              v-model="cvc"
              :placeholder="$t('addAddr.ingrese')"
              class="c-input"/>
          </div>
          <v-btn width="100%" height="48px" class="try-out-bt mt3" @click="handleChangeType(2)">确定</v-btn>
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

      card_name:'',
      cvc:'',
      card_number:'',
      year:'',
      month:'',
      card_type:2,

    }
  },
  methods: {
    setcard_type(type){
      this.card_type =  type
    },
    /** 处理呼叫父级 - 设置type状态 */
    handleChangeType(value) {
      if(value === 2){
        // if(!this.card_name||!this.cvc||!this.card_number||!this.year||!this.month){
        //   this.$message.info('请输入')
        //   return
        // }
        const params = {
          data: {
            'card_name': this.card_name,
            'cvc': this.cvc,
            'card_number': this.card_number,
            'year': this.year,
            'month':this.month,
            'card_type':this.card_type
          }
        };
        this.$axios.post('/client/member/card/setup_intent', params).then(async res => {

          const response = await this.$stripe.confirmSetup({
            clientSecret: res.client_secret,
            redirect: 'if_required'
          });
          console.log(response)
          if (response.setupIntent&&response.setupIntent.status == 'succeeded') {

            response.setupIntent.id
            this.cardBind(response.setupIntent.id,params.data)
          }
          return

        }).catch(err=>{
          this.$message.info(err.message)
        });
      }else {
        this.$emit('handleCloseLoginDialog', value)
      }
    },
    cardBind(id,data){
      const params = {
        data: {
          ...data,
          payment_method_id:id
        }
      };
      this.$axios.post('/client/member/card/bind', params).then(async res => {
        this.$emit('handleCloseLoginDialog', -9)
      }).catch(err=>{
        this.$message.info(err.message)
      });
    },
    parentFunction(e){
      console.log(e)
      console.log(123123123123123)
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
  height: 540px !important;
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
