<template>
  <div class='detail_container'>
    <sales-good-util :list='list' :topInfo='topInfo' :shop_id = 'shop_id' @addCilck='addCilck'/>
    <div class='flex flex-a-c butoonView' style='cursor: pointer;justify-content: flex-end;margin: 0 auto;'>
      <span class='color-242424 font14 ' >{{ $t('contentDetail.title') }} 4</span>
      <div @click='handleCloseLoginDialog(2)' class='button_info' style='margin-left: 32px'>{{ $t('contentDetail.name') }}</div>
    </div>
    <login-window :type='loginType' @handleCloseLoginDialog='handleCloseLoginDialog' />
    <login-succeed :type='loginType' @handleCloseLoginDialog='handleCloseLoginDialog' />
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
    loginSucceed,
  },
  data() {
    return {
      loginType: -1,
      shop_id:'',
      list:[],
      topInfo:{},
    };
  },

  async fetch() {
  },
  methods: {
    addCilck(e){
      console.log(e)
      let { type,index,indexs } = e
      // if()
    },
    handleAuthor() {
      window.location.href = '/authorIndex';
    },
    /** 处理登录弹框的关闭操作 */
    handleCloseLoginDialog(value) {
      this.loginType = value;
    },
    shopDetail(){
      const params = {
        data: {'shop_id': this.shop_id, }
      };
      this.$axios.post('/client/waimai/shop/detail', params).then(res => {
        console.log(res)
        this.topInfo = res.detail
        let list = res.detail.items
        for(let item of list){
          for(let items in item.item){
            items.num = 0
          }
        }
        this.list = list
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

      });
    }
  },
  mounted() {
    if (this.$route.query.shop_id) {
      this.shop_id = this.$route.query.shop_id
    }
    this.shopDetail()
  },
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
