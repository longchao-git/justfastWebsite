<template>
  <div v-if="type === 2" class="login-window">
    <div class="login-window-card" >
      <div>
        <div class="loginView">
          <img @click="handleChangeType(-1)" src="../../assets/images/cloudSales/popupWindow/icon_delet.png"
               alt=""/>
        </div>
        <div class="loginClass">
          <img class='card_img fit-cover' :src="productInfo.photo" />
          <div class='ml1'>
            <div>{{ productInfo.title }}</div>
            <span class='color-4B4B4B font14 line22'>
              <span class=' line22 classNameView' style='color: #ee8080;'>
                	<span>€</span>
								{{productInfo.price}}
								<span>/ {{productInfo.unit}}</span>
								<span class='del ml5'v-if="productInfo.is_discount == '1'">
								{{productInfo.oldprice}}/{{productInfo.unit}}
								</span>
              </span>
            </span>
          </div>
        </div>
        <div v-for='(item,index) in specification'>
          <h3 class='module_title'>{{ item.key}}</h3>
          <div class='mxTick'>
            <div v-for='(items,indexs) in item.val'>
              <div class='font14'>{{ items.spec_name }}</div>
              <img v-if='items.show' class="logoCard" src="../../assets/images/cloudSales/popupWindow/le.png"
                   alt=""/>
              <img v-else class="logoCard" src="../../assets/images/cloudSales/popupWindow/le-1.png"
                   alt=""/>
            </div>
          </div>
        </div>
        <h3 class='module_title'>{{ $t('home.tasa')}}</h3>
        <div  class='mxTick'>
          <div v-for='(item,index) in specs'>
            <div class='font14'>{{ item.spec_name }}</div>
            <img v-if='item.show' class="logoCard" src="../../assets/images/cloudSales/popupWindow/le.png"
                 alt=""/>
            <img v-else class="logoCard" src="../../assets/images/cloudSales/popupWindow/le-1.png"
                 alt=""/>
          </div>
        </div>

        <div class="flex_center">
          <div @click="handleConfirmSubbit" class="button_info">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    type: {
      type: Number,
      default: -1
    },
    specification: {
      type: Array,
      default: []
    },
    specs: {
      type: Array,
      default: []
    },
    productInfo:{
      type: Object,
      default: {}
    },
  },
  data(){
    return{
      companyTypeList:[],
      tradeTypeId:'',
      context:'',
      isshow:false,
      radio:1,
    }
  },

  methods: {
    /** 处理呼叫父级 - 设置type状态 */
    handleChangeType(value) {
      this.$emit('handleCloseLoginDialog', value)
    },
    handleConfirmSubbit(){
      this.$emit('handleCloseLoginDialog', -1)
    }
  }
}
</script>

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


/** 登录卡片样式 */
.login-window-card {
  border-radius: 8px;
  background: radial-gradient(50% 26.6% at 50% 3.77%, rgba(238, 128, 128, 0.20) 0%, rgba(10, 218, 254, 0.00) 100%), #FFF;
  margin: auto;
  width: 540px;
  //height:100%;
  max-height: 620px;
  position: relative;

  > div {
    //position: absolute;
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

    .loginClass{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 48px;
      padding: 0 48px 24px;
      border-bottom: 1px solid #999999;

      .card_img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name{
        margin-top: 100px;
        font-size: 24px;
        color: #2C2C2C;
        font-weight: 500;
        margin-bottom: 12px;
      }

    }
    .module_title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 16px;
      text-align: left;
      padding: 0 48px;
      margin-top: 16px;

      &::before {
        content: '';
        display: inline-block;
        width: 2px;
        height: 10px;
        background-color: #ee8080;
        margin-right: 8px;
        flex-shrink: 0;

      }
    }
    .mxTick{
      padding: 0 48px;
      margin-top: 16px;
      >div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 6px 0;
        .div{
          color: #333333;
          font-size: 18px;

        }
        .logoCard{
          width: 32px;
          height: 32px;
        }
      }
    }
    .flex_center {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 32px 0 ;
    }

    .button_info {
      width: 304px;
      height: 53px;
      background: #ee8080;
      border-radius: 4px 4px 4px 4px;
      text-align: center;
      line-height: 53px;
      color: #ffffff;
      font-size: 17px;
      font-weight: bold;
    }
  }

}

/* 中屏幕*/
@media screen and(max-width: $big-pc-width) {

  /** 登录卡片样式 */
  .login-window-card {
    width: 80%;

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
    height: 280px;
    > div {
      p {
        font-size: 16px;
        padding: 16px 0;
        margin-bottom: 0 !important;
      }
      .loginClass{
        margin-top: 0px;
        padding: 0 16px;

        .name{
          margin-top: 90px;
          font-size: 16px;
          margin-bottom: 6px;
        }
      }
    }
    .button_info{
      width: 200px !important;
    }
  }
}
</style>
