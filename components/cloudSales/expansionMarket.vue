<template>
  <div class='cloud_sales_expansion_market'>
    <div class='flex flex-bw flex-a-c title'>
      <h3 class='module_title'>{{ $t('home.moduleTitle') }}</h3>
    </div>
    <div class='card_container isVafeView'>
      <div class='card_item' @click='goDetail(item.shop_id)' style='margin-bottom: 30px;cursor: pointer;' v-for='(item,index) in lists'
           :key='index'>
        <div style='display: flex;'>
          <div class='photo' style='position: relative'>
            <img class='fit-cover' :src='item.logo' style='width: 100px;height: 100px;border-radius: 8px' />
          </div>
          <div  class=' flex-column viewViewCkass' style='padding-left: 16px;display: flex;'>
            <span class='font18 fontb beyond classcolor ' style='margin-bottom: 12px'>{{ item.title }}</span>
            <div  style='align-items: center;display: flex;'>
              <div class='text_amount' style='font-size: 14px;'>
                {{ $t('home.partir') }}€{{ item.min_amount }}
              </div>
              <div class='text_freight classcolor' style='font-size: 14px;margin-left: 10px'>
                <span v-if='item.freight == 0'>{{ $t('creation.gastos') }}</span>
                <span v-else-if='item.is_reduce_pei == 1'>{{ $t('home.postageandpackingfee')
                  }}€{{ item.reduceEd_freight }}</span>
                <span v-else>{{ $t('home.postageandpackingfee') }}€{{ item.freight }}</span>
              </div>
            </div>
          </div>
        </div>
<!--        <div  style='flex-wrap: wrap;margin-top: 20px;display: flex;' v-if='item.products.length>0'>-->
<!--          <div class='card_item' v-for='(items,indexs) in item.products' :key='indexs'>-->
<!--            <div class='card_img_container'>-->
<!--              <img class='card_img fit-cover' :src='items.photo' />-->
<!--            </div>-->
<!--            <div class=' flex-column' style='margin-left: 16px;display: flex;'>-->
<!--              <span class='font18 fontb beyond2' style='width: 160px'>{{ items.title }} </span>-->
<!--              <div style='display: flex;flex-direction: row; justify-content: space-between;'>-->
<!--              <span class=' line22 classNameView' style='color: #ee8080;'>-->
<!--                	<span>€</span>-->
<!--								{{ items.price }}-->
<!--								<span v-if='items.unit'>/ {{ items.unit }}</span>-->
<!--								<span class='del ml5' style='font-size: 14px;color: #999999;text-decoration: line-through' v-if="items.is_discount == '1'">-->
<!--								{{ items.oldprice }} <span v-if='items.unit'>/{{ items.unit }}</span>-->
<!--								</span>-->
<!--              </span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'expansionMarket',
  props: {
    title: {
      type: String,
      default: '热门VLOG'
    },
    lists: {
      type: Array,
      default: []
    },
    type: {
      type: Number,
      default: 0
    }
  },
  methods: {
    goDetail(shop_id) {
      window.location.href = '/contentDetail?shop_id=' + shop_id;
    }
  }
};
</script>

<style lang='scss' scoped>

.listView {
  width: 100%;
  height: 200px;
  position: relative;
  border-radius: 12px;

  .photo {
    width: 100%;
    height: 200px;
    border-radius: 12px;

    .fit-cover {
      width: 100% !important;
      height: 200px !important;
    }
  }

  .viewViewCkass {
    left: 0;
    right: 0;
    height: 70px;
    padding: 10px 0;
    background: #ee8080;
    position: absolute;
    bottom: 0;

    .classcolor {
      color: #fff !important;
    }
  }
}

.cloud_sales_expansion_market {
  width: 70%;
  margin: 0 auto;

  .state {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 16px;
    text-align: center;
    background: #bbb;
    color: #fff;
    display: block;
    font-size: 11px;
  }

  .title {
    margin-bottom: 16px;
  }

  .module_title {
    font-size: 18px;
    color: #1D2129;
    font-weight: 500;
    //font-family: 'Source Han Sans CN';
  }

  .text_amount {
    min-width: 44px;
    padding: 0 6px;
    background: #ee8080;
    box-shadow: 0px 0px 20px 0px rgba(163, 163, 164, 0.1);
    border-radius: 4px;
    font-size: 12px;
    text-align: center;
    line-height: 24px;
    margin-right: 5px;
    color: #FFFFFF;
  }

  .see_all {
    display: flex;
    padding: 10px 30px;
    height: fit-content;
    line-height: normal;
    align-items: center;
    border-radius: 32px;
    border: 1.5px solid #09236c;
    color: #09236c;
    //font-family: 'Source Han Sans CN';
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
}

.isVafeView {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card_container {
  width: 100%;

  .ovhsaView {
    border-radius: 16px;
    overflow: hidden;
  }

  .card_item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc((100% - 180px) / 3);
    margin-bottom: 16px;

    .card_img_container {
      position: relative;
      //margin-bottom: 16px;

      .card_img {
        width: 120px;
        height: 120px;
        border-radius: 8px;
      }


    }
  }

  .card_item:nth-child(5n) {
    margin-right: 0;
  }
}

/* 中屏幕*/
@media screen and(max-width: $big-pc-width) {
  .cloud_sales_expansion_market {
    width: 90%;

    .card_container {
      .card_item {
        width: calc((100% - 96px) / 4);

        .card_img {
          height: 120px;
        }
      }
    }
  }
}

/** 平板屏幕 */
@media screen and (max-width: $pad-max-width) {
  .cloud_sales_expansion_market {
    width: 100%;

    .title {
      margin-bottom: 16px;
    }

    .card_container {
      .card_item {
        width: calc((100% - 48px) / 3);


        //.card_img_container {
        //  margin-bottom: 12px;
        //}

        .card_img {
          height: 120px;
        }

      }

      .card_item:nth-child(3n) {
        margin-right: 0;
      }
    }

    .module_title {
      font-size: 20px;
      font-weight: bold;
    }

    .see_all {
      padding: 10px 25px;
      font-size: 14px;
    }
  }
}

/** 手机屏幕 */
@media screen and (max-width: $phone-max-width) {
  .cloud_sales_expansion_market {
    width: 90%;

    .title {
      margin-bottom: 12px;
    }

    .card_container {
      margin-top: 12px !important;

      .card_item {
        width: calc((100% - 12px) / 2);

        //.card_img_container {
        //  margin-bottom: 8px;
        //}

        .card_img {
          height: 120px;
        }


      }

      .card_item:nth-child(2n) {
        margin-right: 0 !important;
      }
    }

    .module_title {
      font-size: 18px;
      font-weight: bold;
    }

    .see_all {
      padding: 6px 14px;
      font-size: 14px;
    }
  }
}
</style>
