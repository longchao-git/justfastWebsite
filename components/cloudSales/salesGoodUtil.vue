<template>
  <div class='content_tab'>
    <div class='flex flex-bw flex-a-c title'>
      <h3 class='module_title'>{{ topInfo.title }} <span v-if="topInfo.yyst != '1'" style='color: #ee8080'>({{ $t('creation.cerrado')}})</span></h3>
    </div>
    <div  v-for="(item,index) in list" :key='index' >
      <div style='color: #ee8080;margin-bottom: 12px' class=' font14'>{{item.title}}</div>
      <div class='card_container'>
        <div class='card_item' v-for='(items,indexs) in item.products' :key='indexs'  v-if="items.specs.length == 0 && items.specification.length == 0&&items.sale_sku>0">
          <div class='card_img_container'>
            <img class='card_img fit-cover' :src="item.photo" />
          </div>
          <div class='flex flex-column'>
            <span class='font18 fontb beyond'>{{ items.title }} </span>
            <div style='display: flex;flex-direction: row; justify-content: space-between;'>
              <span class=' line22 classNameView' style='color: #ee8080;'>
                	<span>€</span>
								{{items.price}}
								<span>/ {{items.unit}}</span>
								<span class='del ml5' v-if="items.is_discount == '1'">
								{{items.oldprice}}/{{items.unit}}
								</span>
              </span>
              <div class='flex flex-j-end' v-if="items.specs.length == 0 && items.specification.length == 0&&items.sale_sku>0">
                <div class='buttonView' @click='addCart(1,index,indexs)' v-if="items.num">-</div>
                <div class="num mr1" v-if="items.num">
                  {{items.num}}
                </div>
                <div class='buttonView' @click='addCart(2,index,indexs)' >+</div>
              </div>

              <div class='spec serg_btnss' v-else-if="items.sale_sku<=0">{{  $t('creation.Agotado') }}</div>
              <div class='spec serg_btn'  @click='loginbindTap(items.product_id,items)'  v-else>
                {{  $t('creation.disponibles') }}
                <span class='num' v-if="items.num > 0">{{ items.num }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <tick-attribute :type='loginType' :specification='specification' :specs='specs' :productInfo='productInfo' @handleCloseLoginDialog='handleCloseLoginDialog'></tick-attribute>
  </div>
</template>

<script>
import tickAttribute from '@/components/popupWindow/tickAttribute';

export default {
  components: {
    tickAttribute
  },
  props: {
    topInfo: {
      type: Object,
      default: {}
    },
    list: {
      type: Array,
      default: []
    },
    shop_id:{
      type: String,
      default: ''
    },

  },
  data() {
    return {
      active: 1,
      loginType: -1,
      specShow: false,
      specs:[],
      newSpecs: {},
      ecartList:[],
      specification:[],
      productInfo:{},
    };
  },
  methods: {
    handleChangeTabs(tab) {
      this.active = tab;
    },
    /** 处理登录弹框的关闭操作 */
    handleCloseLoginDialog(value) {
      console.log(value)
      this.loginType = value;
    },
    loginbindTap(product_id,item){
      this.loginType = 2;
      this.productInfo = item
      this.specs = item.specs
      this.specification = item.specification
    },
    //加入购物车
    addCart(type,index,indexs) {
      this.$emit('addCilck', {
        type,
        index,
        indexs,
      })

    },
  }
};
</script>

<style lang='scss' scoped>
.content_tab {
  width: 80%;
  margin: 0 auto 24px;

  .tabs {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    .active {
      color: #09236c;
      font-weight: bold;
      position: relative;

      &::after {
        content: '';
        display: block;
        width: 50%;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #09236c;
      }
    }
  }
  .serg_btn {
    background: #FF797C !important;
    font-size: 10px !important;
    line-height: 16px !important;
    height: 16px !important;
    padding: 0 7px !important;
    color: #fff !important;
  }
  .serg_btnss{
    background: #ffffff !important;
    font-size: 10px !important;
    line-height: 16px !important;
    height: 16px !important;
    padding: 0 7px !important;
    color: #999 !important;
  }
  .module_title {
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    margin-bottom: 16px;

    &::before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 28px;
      background-color: #ee8080;
      margin-right: 16px;
      flex-shrink: 0;
    }
  }

  .tabs_item {
    margin-right: 24px;
    color: #181818;
    font-size: 20px;
    padding-bottom: 12px;
    cursor: pointer;
  }

  .card_container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    //justify-content: space-between;
  }

  .card_item {
    width: calc((100% - 120px) / 6);
    margin-bottom: 32px;
    margin-right: 12px;
    .card_img_container {
      position: relative;
      margin-bottom: 16px;

      .card_img {
        width: 100%;
        height: 120px;
        border-radius: 8px;
      }

    }
    .classNameView{
      font-size: 14px;
    }
    .buttonView {
      width: 20px;
      height: 20px;
      background: #ee8080;
      border-radius: 20px;
      text-align: center;
      color: white;
      font-size: 20px;
      font-weight: bold;
      margin-right: 6px;
      line-height: 20px;

    }
  }

  .card_item:nth-child(4n) {
    margin-right: 0;
  }
}

/* 中屏幕*/
@media screen and(max-width: $big-pc-width) {
  .content_tab {
    .card_item {
      width: calc((100% - 96px) / 4);

      .card_img {
        height: 250px;
      }
    }
    .classNameView{
      font-size: 20px !important;
    }
    .buttonView {
      width: 40px !important;
      height: 40px !important;
      font-size: 40px !important;
      line-height: 40px !important;
    }
  }
}

/** 平板屏幕 */
@media screen and (max-width: $pad-max-width) {
  .content_tab {
    width: 100%;

    .tabs {
      margin-bottom: 12px;

      .tabs_item {
        margin-right: 20px;
        font-size: 18px;
      }
    }

    .card_container {
      .card_item {
        width: calc((100% - 48px) / 3);
        margin-right: 24px;
        margin-bottom: 24px;

        .card_img_container {
          margin-bottom: 12px;
        }

        .card_img {
          height: 212px;
        }

      }

      .card_item:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
}

/** 手机屏幕 */
@media screen and (max-width: $phone-max-width) {
  .content_tab {
    width: 100%;

    .tabs {
      margin-bottom: 4px;

      .tabs_item {
        margin-right: 18px;
        font-size: 16px;
      }
    }

    .card_container {
      margin-top: 12px !important;

      .card_item {
        width: calc((100% - 12px) / 2);
        margin-right: 12px !important;
        margin-bottom: 12px !important;

        .card_img_container {
          margin-bottom: 8px;
        }

        .card_img {
          height: 150px !important;
        }

      }

      .card_item:nth-child(2n) {
        margin-right: 0 !important;
      }
    }
  }
}
</style>
