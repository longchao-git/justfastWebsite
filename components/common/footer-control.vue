<template>
  <div class='footer-box disflex al-center max-width f-column'>
    <div class='disflex p-relative contact-box'>
      <div class='asy-box' v-if='getActiveMenuInx<0'>
        <div class='f-title '>
          <img class='footer_icon' src='~/assets/images/logo2.png' alt='' />
          <span class='service_title' style='color: #fff;font-size: 18px'> {{ $t('footer.footerItem.title') }}</span>
        </div>

      </div>
      <!--      <div class='asy-box'>-->
      <!--        <div class='f-title'>-->
      <!--          <div class='isViewTxet'>{{ $t('footer.Company.name') }}</div>-->
      <!--        </div>-->

      <!--        <div class='asy-phone'>-->
      <!--          <div class='service_title'>{{ $t('footer.Company.content') }}</div>-->
      <!--          <div class='service_title'>{{ $t('footer.Company.desc') }}</div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class='asy-box'>-->
      <!--        <div class='f-title '>-->
      <!--          <div class='isViewTxet'>{{ $t('footer.UsefulLinks.name') }}</div>-->
      <!--        </div>-->

      <!--        <div class='asy-phone'>-->
      <!--          <div class='service_title'>{{ $t('footer.UsefulLinks.content') }}</div>-->
      <!--          <div class='service_title'>{{ $t('footer.UsefulLinks.desc') }}</div>-->
      <!--          <div class='service_title'>{{ $t('footer.UsefulLinks.contentOne') }}</div>-->
      <!--          <div class='service_title'>{{ $t('footer.UsefulLinks.descOne') }}</div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class='asy-box'>-->
      <!--        <div class='f-title '>-->
      <!--          <div class='isViewTxet'>{{ $t('footer.SubscribeToOurNewsletter.name') }}</div>-->
      <!--        </div>-->
      <!--        <div class='asy-phone'>-->
      <!--          <div class='service_title'>{{ $t('footer.SubscribeToOurNewsletter.content') }}</div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <div class='disflex al-center copyright-box ju-center font12' style="{'marginTop':getActiveMenuInx<0?'32px':'0px'}">
      <div><a target='_blank' :href="'//' ">{{ $t('footer.footerBottom.desc') }}</a>&nbsp;</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'footer-control',
  data() {
    return {
      isShowDialog: false // 是否展示弹窗
    };
  },
  computed: {

    // 获取url 路径
    getUrlPath() {
      return this.$route.path;
    },

    // 获取菜单选中下标
    getActiveMenuInx() {
      const activeMenus = [
        ['/contentDetail']
      ];
        console.log(activeMenus.findIndex(item => item.includes(this.getUrlPath)))
      return activeMenus.findIndex(item => item.includes(this.getUrlPath));
    }
  },
  methods: {
    // 在线咨询
    onlineAdvisory() {
      window.open(
        'http://wpa.qq.com/msgrd?v=3&uin=1220517902&site=qq&menu=yes',
        '_blank',
        'height=600, width=800, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no'
      );
      return false;
    },

    // 展示微信弹窗
    showWechatDialog() {
      this.isShowDialog = true;
      return false;
    }
  }
};
</script>

<style scoped lang='scss'>
.footer-box {
  padding: 32px 0 0;
  background-image: url("../../assets/images/footerIconImg.png");
  background-size: cover;
  a {
    color: inherit;
  }

  .f-title {
    @extend .tran-300ms;
    font-size: 18px;
    color: #616976;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer_icon {
      width: 100px;
      height: 100px;
      margin-bottom: 20px;
    }

    .isViewTxet {
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      color: #fff;
    }
  }

  .f-divider {
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 20px;
  }

  .asy-box {
    width: 600px;
    height: 141px;
    margin: 0 72px 8px 72px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .asy-phone {
      color: #616976;
      font-weight: 400;
      margin-bottom: 20px;
      position: relative;
      top: -5px;

      > div {
        font-size: 16px;
      }
    }
  }

  .copyright-box {
    display: flex;
    text-align: center;
    padding-bottom: 16px;
    color: #fff;


    span {
      display: block;
      overflow: hidden;
      width: 0;
      height: 0;
    }
  }

  .wm-title {
  }

  .footer-nav {
    color: #8993a0;
    cursor: pointer;
    margin-bottom: 15px;

    &:hover {
      color: #467fff;
    }
  }

  .contact-box {
    .related-product-box {
      > div {
        margin-right: 40px;
      }
    }
  }
}

/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
  body .footer-box {
    padding: 48px 0 0;

    .f-title {
      font-size: 14px;
      margin-bottom: 12px;
    }

    .asy-box {
      height: 141px;
      margin: 0;
      padding-bottom: 8px;
      width: 100%;
    }

    .contact-box {
      .related-product-box {
        > div {
          margin-right: 30px;
        }
      }
    }
  }
}

/*小屏幕*/
@media screen and (max-width: $pad-max-width) {
  body .footer-box {
    padding: 16px 24px;
    //margin-bottom: 88px;

    .f-title {
      margin-bottom: 8px;
    }

    .footer-nav {
      margin-right: 0;
      font-size: 12px;

      a {
        font-size: inherit;
      }
    }

    .contact-box {
      width: 100%;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .asy-box {

        padding-bottom: 8px;
        margin: 0;
        width: 50%;

        .asy-phone {
          margin-top: 0;
          line-height: inherit;
          margin-bottom: 16px;

          > div {
            font-size: 12px !important;
          }

          span {
            display: block;
          }
        }
      }

      .related-product-box {
        padding-bottom: 17px;

        > div {
          margin-right: auto;
        }
      }
    }

    .copyright-box {
      display: block;
      text-align: center;

      span {
        display: block;
        overflow: hidden;
        width: 0;
        height: 0;
      }
    }
  }
}

/** 手机屏幕 */
@media screen and (max-width: $phone-max-width) {
  body .footer-box {
    .contact-box {
    }
  }
}
</style>

<style lang='scss'>
/*小屏幕*/
@media screen and (max-width: $pad-max-width) {
  .wechat-contact-dialog {
    margin: auto 18%;

    .wechat-contact-box {
      padding: 36px 34px;

      .close-bt {
        top: 6px;
        right: 6px;
      }

      .w-title {
        font-size: 12px;
        color: #8993a0;
        line-height: 18px;
        margin-top: 10px;
      }
    }
  }
}
</style>
