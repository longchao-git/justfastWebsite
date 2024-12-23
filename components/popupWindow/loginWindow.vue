<template>
  <div v-if='type===2||type === 5' class='login-window'>
    <div class='login-tan-card' :class="type===2?'login-class':type === 5?'class_div':''">
      <div>
        <div class='loginView'>
          <img @click='handleChangeType(-1)' src='../../assets/images/cloudSales/popupWindow/icon_delet.png'
               alt='' />
        </div>
        <p>{{ type === 2 ? $t('loginPopup.name') : $t(`bank.bank`) }}</p>
        <div class='loginClass'>
          <div v-if='type===2&&orderAddrList' class='login_input'>
            <div>{{ $t('loginPopup.fromOne') }}</div>
            <el-select v-model='addr_id' clearable filterable :placeholder="$t('loginOrRegister.placeholder')[1]"
                       style='flex: 1'>
              <el-option v-for='(item, index) in orderAddrList' :key='index' :label='item.addr'
                         :value='item.addr_id'></el-option>
            </el-select>
            <span @click='handleChangeType(3)' style='cursor: pointer'> {{ $t(`addAddr.name`) }}</span>
          </div>
          <div v-if='type===2' class='login_input'>
            <div>{{ $t(`depago`) }}</div>
            <el-select v-model='code' @change="bindCode" clearable filterable :placeholder="$t('loginOrRegister.placeholder')[1]"
                       style='flex: 1'>
              <el-option v-for='(item, index) in payitem' :key='index' :label='item.title'
                         :value='item.code'></el-option>
            </el-select>
          </div>

          <div v-if='type===2&&code==1&&orderInfo.hongbao_list' class='login_input'>
            <div>{{ $t(`红包`) }}</div>
            <el-select v-model='hongbao_id' filterable clearable :placeholder="$t('loginOrRegister.placeholder')[1]"
                       style='flex: 1'>
              <el-option v-for='(item, index) in orderInfo.hongbao_list' :key='index' :disabled="item.is_canuse != 1"
                         :value='item.hongbao_id' :label="`满€${item.min_amount}可减€${item.amount}`"></el-option>
            </el-select>
          </div>
          <div v-if='type===2&&code==1&&orderInfo.coupon_list' class='login_input'>
            <div>{{ $t(`优惠券`) }}</div>
            <el-select v-model='coupon_id' filterable clearable :placeholder="$t('loginOrRegister.placeholder')[1]"
                       style='flex: 1'>
              <el-option v-for='(item, index) in orderInfo.coupon_list' :key='index' :disabled="item.is_canuse != 1"
                         :value='item.coupon_id' :label="`满€${item.order_amount}可减€${item.coupon_amount}`"></el-option>
            </el-select>
          </div>

          <div v-if='type===2' class='login_input'>
            <div>{{ $t(`comprador`) }}</div>
            <input v-model='intro' :placeholder="$t('addAddr.ingrese')" class='c-input' />
          </div>

          <div v-if='type===2&&code==1&&orderInfo.cards&&orderInfo.cards.length>0' class='login_input'>
            <div>{{ orderInfo.peicard_id!=0 ?$t(`配送会员卡`) :$t(`购买配送会员卡`)}}</div>
            <el-select v-model='peicard_id' filterable clearable :disabled="orderInfo.peicard_id!=0" :placeholder="$t('loginOrRegister.placeholder')[1]"
                       style='flex: 1'>
              <el-option v-for='(item, index) in orderInfo.cards' :key='index'
                         :value='item.card_id' :label="`每单立减${item.reduce}€配送费,价格${item.amount}`"></el-option>
            </el-select>
          </div>


          <div v-if='type===2' class='line22 mt1'
               style='width: 100%;display: flex;justify-content: space-between;'>
            <div class='' style='width: 126px;text-align: right'>
              {{ $t(`Commodityamount`) }}
            </div>
            <div>€{{ amount.toFixed(2) }}</div>
          </div>
          <div v-if='type===2' class='line22 mt1'
               style='width: 100%;display: flex;justify-content: space-between;'>
            <div class='' style='width: 126px;text-align: right'>
              {{ $t(`postagefee`) }}
            </div>
            <div>
              €{{ orderInfo.freight_stage - (orderInfo.is_bad_weather && orderInfo.is_bad_weather != 0 ? orderInfo.weather_extra_fee : 0)
              }}
            </div>
          </div>

          <div v-if='type===2&&orderInfo.package_price>0' class='line22 mt1'
               style='width: 100%;display: flex;justify-content: space-between;'>
            <div class='' style='width: 126px;text-align: right'>
              {{ $t(`packingexpense`) }}
            </div>
            <div>€{{ orderInfo.package_price }}</div>
          </div>
          <div v-if='type===2&&orderInfo.hongbao_list&&hongbao_id' class='line22 mt1'
               style='width: 100%;display: flex;justify-content: space-between;'>
            <div class='' style='width: 126px;text-align: right'>
              {{ $t(`红包优惠`) }}
            </div>
            <template v-for="(item,index) in orderInfo.hongbao_list">
              <div v-if="hongbao_id==item.hongbao_id" style="color: #ee8080">-€{{ item.amount }}</div>
            </template>

          </div>
          <div v-if='type===2&&orderInfo.coupon_list&&coupon_id' class='line22 mt1'
               style='width: 100%;display: flex;justify-content: space-between;'>
            <div class='' style='width: 126px;text-align: right'>
              {{ $t(`优惠券优惠`) }}
            </div>
            <template v-for="(item,index) in orderInfo.coupon_list">
              <div v-if="coupon_id==item.coupon_id" style="color: #ee8080">-€{{ item.coupon_amount }}</div>
            </template>
          </div>
          <div v-if='type===2&&peicard_id&&orderInfo.cards&&(orderInfo.peicard_id==0||!orderInfo.peicard_id) ' class='line22 mt1'
               style='width: 100%;display: flex;justify-content: space-between;'>
            <div class='' style='width: 126px;text-align: right'>
              {{ $t(`购买配送会员卡`) }}
            </div>
            <template v-for="(item,index) in orderInfo.cards">
              <div v-if="peicard_id==item.card_id" >€{{ item.amount }}</div>
            </template>
          </div>
          <div v-if='type===2&&peicard_id&&orderInfo.peicard_id!=0 ' class='line22 mt1'
               style='width: 100%;display: flex;justify-content: space-between;'>
            <div class='' style='width: 126px;text-align: right'>
              {{ $t(`配送会员卡`) }}
            </div>
              <div style="color: #ee8080">-€{{ orderInfo.peicard_amount }}</div>
          </div>

          <div v-if='type===2&&orderInfo.youhui&&orderInfo.youhui.length>0'>
            <div v-for='(item,index) in orderInfo.youhui' class='line22 mt1'
                 style='width: 100%;display: flex;justify-content: space-between;'>
              <div class='' style='width: 126px;text-align: right'>
                {{ item.title }}
              </div>
              <div>-€{{ item.amount }}</div>
            </div>
          </div>

          <div v-if='type===2&&orderInfo.support_first_share == 0 && orderInfo.first_order == 1' class='line22 mt1'
               style='width: 100%;display: flex;justify-content: space-between;'>
            <div class='' style='width: 126px;text-align: right'>
              {{ $t(`首单优惠`) }}
            </div>
            <el-switch
              v-model="isFirst"
              :active-value='1'
              :inactive-value='0'
              active-color="#ee8080"
              inactive-color="#999999" >
            </el-switch>
          </div>

          <div v-if='type===2&&orderInfo.is_bad_weather&&orderInfo.is_bad_weather!=0' class='line22 mt1'
               style='width: 100%;display: flex;justify-content: space-between;'>
            <div class='' style='width: 126px;text-align: right'>
              {{ $t(`恶劣天气附加配送费`) }}
            </div>
            <div>€{{ orderInfo.weather_extra_fee }}</div>
          </div>

          <div v-if='type===2' class='line22 mt1'
               style='width: 100%;display: flex;justify-content: space-between;'>
            <div class='' style='width: 126px;text-align: right'>
              {{ $t(`实付配送费`) }}
            </div>
            <div v-if='orderInfo.youhui&&orderInfo.youhui.length>0'>€{{ orderInfo.freight_stage }}</div>
            <div>€{{ orderInfo.actual_freight }}</div>
          </div>

          <div v-if='type===5' class='login_input'>
            <div>{{ $t(`bank.bank`) }}</div>
            <el-select clearable v-model='card_id' filterable
                       :placeholder="$t('loginOrRegister.placeholder')[1]" style='flex: 1'>
              <el-option v-for='(item, index) in cardList' :key='index' :label='item.card_name'
                         :value='item.card_id'></el-option>
            </el-select>

            <el-button type='primary' @click='handleChangeType(9)'
                       v-if='!card_id'>{{ $t(`bank.name`) }}
            </el-button>
            <el-button type='primary' @click='handleChangeType(19)'
                       v-if='card_id'>{{ $t(`Deletethiscard`) }}
            </el-button>

          </div>
          <v-btn width='100%' height='48px' class='try-out-bt mt3'
                 @click='handleChangeType(2)'>{{ $t(`asentar`) }}
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'orderAddrList', 'payitem', 'cardList', 'orderInfo', 'amount', 'card_id'],
  data() {
    return {
      companyTypeList: [],
      tradeTypeId: '',
      context: '',
      isshow: false,
      addr_id: '',
      code: '',
      intro: '',
      isFirst:0,
      hongbao_id:'',
      coupon_id:'',
      peicard_id:''
    };
  },

  watch: {
    type(newVal, oldVal) {
      if (newVal === 2&&this.orderInfo.is_first==1) {
        console.log(newVal)
        this.isFirst = 1
      }
    }
  },

  methods: {
    bindCode(){
      if(this.code == 1){
        if(this.orderInfo.hongbao_list&&this.orderInfo.hongbao_list.length>0){
          for(let item of this.orderInfo.hongbao_list){
            if(item.is_canuse == 1){
              this.hongbao_id =item.hongbao_id
              break
            }
          }
        }
        if(this.orderInfo.coupon_list&&this.orderInfo.coupon_list.length>0){
          for(let item of this.orderInfo.coupon_list){
            if(item.is_canuse == 1){
              this.coupon_id =item.coupon_id
              break
            }
          }
        }


          if(this.orderInfo.peicard_id!=0){
            this.peicard_id =this.orderInfo.peicard_id
          }
      }
    },
    // changebing(){
    //   this.$emit('changebing',this.isFirst );
    // },
    /** 处理呼叫父级 - 设置type状态 */
    handleChangeType(value) {
      if (value === -1 || value === 3 || value === 9) {
        this.$emit('handleCloseLoginDialog', value);
      } else if (value === 19) {
        this.$emit('handledeteleLoginDialog', this.card_id);
      } else {
        if (this.type == 5) {
          this.$emit('paymentOrder', {
            card_id: this.card_id,
            code: 'stripe'
          });
          return;
        }
        if (!this.code) {
          this.$message.info(this.$t(`home.ingrese`));
          return;
        }
        if (!this.addr_id) {
          this.$message.info(this.$t(`home.ingrese`));
          return;
        }
        this.$emit('handleLoginAdd', {
          addr_id: this.addr_id,
          code: this.code,
          intro: this.intro,
          isFirst:this.isFirst,
          hongbao_id:this.hongbao_id,
          coupon_id:this.coupon_id,
          peicard_id:this.peicard_id
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
      border: 1px solid #DCDCDC !important;
      height: 48px;

      margin-bottom: 0;
    }

    .c-input {
      border-radius: 6px;
      border: 1px solid #DCDCDC !important;
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
  background: rgba(0, 0, 0, .4);
  top: 0;
  right: 0;
  bottom: 0;

  min-width: 100vw;
  width: 100%;
  z-index: 5;
  display: flex;
}

.login-class {
  height: 650px !important;
}

.class_div {
  height: 280px !important;
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

    .loginClass {
      max-height: 500px;
      width: 540px;
      overflow-y:scroll ;
      //display: flex;
      //flex-direction: column;
      //align-items: center;
      //justify-content: center;
      margin-top: 8px;
      padding: 0 48px;

      .logoCard {
        width: 72px;
        height: 72px;
      }

      .name {
        margin-top: 12px;
        font-size: 24px;
        color: #2C2C2C;
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
          color: #ee8080;
          font-size: 14px;
          position: absolute;
          right: 24px;
        }

        .v-input__slot {
          border-radius: 6px;
          border: 1px solid #DCDCDC;
          height: 48px;
        }

        > div {
          width: 126px;
          flex-shrink: 0;
          text-align: right;
          color: #2C2C2C;
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
          color: #1D2129;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          width: 100%;

          > span {
            color: #ee8080;
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
          border-top: 1px #C5C5C5 dashed;
        }

        span {
          color: #4B4B4B;
          flex-shrink: 0;
          padding: 0 8px;
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
  .login-class {
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
            border: 1px solid #DCDCDC;
            height: 48px;
          }

          > div {
            width: 72px;
            text-align: right;
            color: #2C2C2C;
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
            color: #1D2129;

            > span {
              font-size: 12px;
              color: #ee8080;
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
            border-top: 1px #C5C5C5 dashed;
          }

          span {
            color: #4B4B4B;
            flex-shrink: 0;
            padding: 0 8px;
          }
        }
      }

    }

  }
}
</style>
