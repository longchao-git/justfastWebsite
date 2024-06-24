<template>
  <div class='detail_container'>
    <sales-good-util />
    <div class='flex flex-a-c butoonView' style='cursor: pointer;justify-content: space-between;margin: 0 auto;'>
      <span class='color-242424 font14'>已选择4个</span>
      <div @click='handleCloseLoginDialog(1)' class='button_info'>下单</div>
    </div>
    <login-window :type='loginType' @handleCloseLoginDialog='handleCloseLoginDialog' />
  </div>
</template>

<script>
import config from '../config';
import { mapMutations } from 'vuex';
import salesGoodUtil from '../components/cloudSales/salesGoodUtil';
import LoginWindow from '../components/popupWindow/loginWindow.vue';

export default {
  components: {
    salesGoodUtil,
    LoginWindow
  },
  data() {
    return {
      loginType: -1

    };
  },

  async fetch() {
  },
  methods: {
    handleAuthor() {
      window.location.href = '/authorIndex';
    },
    /** 处理登录弹框的关闭操作 */
    handleCloseLoginDialog(value) {
      this.loginType = value;
    }

  },
  mounted() {
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
