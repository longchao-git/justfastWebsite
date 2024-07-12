<template>
  <div class='detail_container'>
    <sales-good-util :list='goodsArr' :topInfo='topInfo' :shop_id='shop_id' @addCilck='addCilck' />
    <div class='flex flex-a-c butoonView' style='cursor: pointer;justify-content: flex-end;margin: 0 auto;'>
      <span class='color-242424 font14 ' v-if='addCartAary.length>0'>{{ $t('contentDetail.title') }} {{ addCartAary.length }}</span>
      <div @click='handleCloseLoginDialog(2)' class='button_info' style='margin-left: 32px'>{{ $t('contentDetail.name')
        }}
      </div>
    </div>
<!--    <login-window :type='loginType' @handleCloseLoginDialog='handleCloseLoginDialog' />-->
    <login-succeed :posterUrl='posterUrl' :type='loginType' @handleCloseLoginDialog='handleCloseLoginDialog' />
    <div id="posterHtml" class='posterHtml' ref='posterHtml' >
      <img :src='topInfo.logo' class='logo'>
      <div class='flex' style='align-items: center;padding: 20px 10px;justify-content: space-between;'>
        <div>
          <div>{{topInfo.title}}</div>
          <div v-for='(item,index) in topInfo.huodongMark' class='font12' :style='{color:item.color}'>
            {{item.title}}
          </div>
        </div>
        <!-- 二维码 -->
        <div class="qrcode" style='flex-shrink: 0'><div id="qrcodeImg"></div></div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../config';
import { mapMutations } from 'vuex';
import salesGoodUtil from '../components/cloudSales/salesGoodUtil';
import LoginWindow from '../components/popupWindow/loginWindow.vue';
import loginSucceed from '../components/popupWindow/loginSucceed.vue';

export default {
  components: {
    salesGoodUtil,
    LoginWindow,
    loginSucceed
  },
  data() {
    return {
      loginType: -1,
      shop_id: '',
      goodsArr: [],
      addCartAary:[],
      topInfo: {},
      posterUrl:''
    };
  },

  async fetch() {
  },
  methods: {
    addCilck(e) {
      let { type, index, indexs } = e;
      let goodsArr = this.goodsArr
      let products = goodsArr[index].products[indexs]
      if(type === 2){
        this.$set(this.goodsArr[index].products,indexs,{
          ...goodsArr[index].products[indexs],
          num:products.num+1,
        })
      }else{
        this.$set(this.goodsArr[index].products,indexs,{
          ...goodsArr[index].products[indexs],
          num:products.num-1,
        })
      }

      this.goodsArr = goodsArr
      let info = this.goodsArr[index].products[indexs]
      let ishowAdd = true
      for(let i in this.addCartAary){
        if(this.addCartAary[i].product_id === info.product_id&&this.addCartAary[i].sku_id=== info.sku_id){
          ishowAdd = false
          if(info.num){
            this.addCartAary[i] = info
          }else{
            this.addCartAary.splice(i,1)
          }

        }
      }
      if(ishowAdd){
        this.addCartAary.push(info)
      }
    },
    handleAuthor() {
      window.location.href = '/authorIndex';
    },
    /** 处理登录弹框的关闭操作 */
    handleCloseLoginDialog(value) {
      if(value === 2){
        this.$html2canvas(this.$refs.posterHtml,  {
        }).then( (canvas)=> {
          let  posterUrl = canvas.toDataURL('image/png')
          this.posterUrl = posterUrl
        })
      }
      this.loginType = value;
    },
    shopDetail() {
      const params = {
        data: { 'shop_id': this.shop_id ,"LANG": "es" }
      };
      this.$axios.post('/client/waimai/shop/detail', params).then(res => {
        this.topInfo = res.detail;
        let list = res.detail.items;

        this.goodsArr = list;
        this.resetData();
        // that.setData({
        //   newhuodong,
        //   topInfo: res.data.detail,
        //   min_amount: res.data.detail.min_amount,
        //   shopCoupon: res.data.detail.shop_coupon, //商家优惠券信息；
        //   shopAdv: res.data.detail.advs, //商家广告；
        //   tj_items: res.data.detail.tj_items ? res.data.detail.tj_items : '', //商家推荐；
        //   goodsCate_idx: res.data.detail.items[0] ? res.data.detail.items[0].cate_id : '',
        //   goodsArr,
        //   is_must: res.data.detail.have_must,
        // });
        this.qrcode()
      });
    },
    qrcode(){
      let qrcode = new this.$RCode('qrcodeImg', {
        width: 80, // 设置宽度，单位像素
        height: 80, // 设置高度，单位像素
        text: this.topInfo.share_url // 设置二维码内容或跳转地址
      })
    },

    //渲染数据
    resetData() {
      let that = this,
        goodsArr = that.goodsArr,
        arr = {
          title: '全部',
          cate_id: 'all',
          products: []
        },
        sku_id;

      for (let i = 0; i < goodsArr.length; i++) {


        for (let j = 0; j < goodsArr[i].products.length; j++) {
          if (goodsArr[i].products[j].length != 0) {
            //全部商品；
            if (!isNaN(parseInt(goodsArr[i].cate_id))) {
              arr.products.push(goodsArr[i].products[j]);
            }
            //定义商品规格及sku_id；
            if (goodsArr[i].products[j].specs && goodsArr[i].products[j].specs.length > 0) {
              for (let h = 0; h < goodsArr[i].products[j].specs.length; h++) {
                sku_id = goodsArr[i].products[j].product_id + '_' + goodsArr[i].products[j].specs[h].spec_id;
                goodsArr[i].products[j].specs[h].sku_id = sku_id;
                goodsArr[i].products[j].specs[h].title = goodsArr[i].products[j].title + '(' + goodsArr[i].products[j].specs[h].spec_name + ')';
                goodsArr[i].products[j].specs[h].is_must = goodsArr[i].products[j].is_must;
                goodsArr[i].products[j].specs[h].num = 0
              }
            } else if (goodsArr[i].products[j].specification.length > 0) {
              sku_id = goodsArr[i].products[j].product_id + '_0';
              goodsArr[i].products[j].sku_id = sku_id;
              goodsArr[i].products[j].num = 0;
            } else {
              sku_id = goodsArr[i].products[j].product_id + '_0';
              goodsArr[i].products[j].sku_id = sku_id;
              goodsArr[i].products[j].num = 0;
            }
          }
        }
      }
        console.log(goodsArr)
      that.goodsArr = goodsArr

    }
  },
  mounted() {
    if (this.$route.query.shop_id) {
      this.shop_id = this.$route.query.shop_id;
    }
    this.shopDetail();
  }
};
</script>
<style>
.main-content {
  background-color: #f5f5f5;
}
</style>
<style scoped lang='scss'>
.detail_container {
  width: 90%;
  margin: 0 auto;
  padding: 24px 0;

}

.butoonView {
  width: 60%;
}

.button_info {
  width: 200px;
  height: 53px;
  background: #ee8080;
  border-radius: 4px 4px 4px 4px;
  text-align: center;
  line-height: 53px;
  color: #ffffff;
  font-size: 17px;
  font-weight: bold;
}
.posterHtml{
 width: 264px;
  height: 400px;
  background: white;
  position: fixed;
  top: 99999px;

  >.logo{
    object-fit: cover;
    width: 264px;
    height: 264px;
  }
  .qrcode{
    width: 100px;
    height: 100px;
    #qrcodeImg{
      width: 100px;
      height: 100px;
    }
  }
}
/* 中屏幕*/
@media screen and(max-width: $big-pc-width) {
  .butoonView {
    width: 80%;
  }
}

/** 平板屏幕 */
@media screen and (max-width: $pad-max-width) {
  .butoonView {
    width: 100%;
  }
}

/** 手机屏幕 */
@media screen and (max-width: $phone-max-width) {
  .butoonView {
    width: 100%;
  }
}
</style>
