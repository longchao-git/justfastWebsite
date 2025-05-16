<template>
  <div class='cover-bg'>
    <v-overlay class='phone-menu-mask' @click.native='isShowPhoneMenu = false' :value='isShowPhoneMenu'></v-overlay>
    <!--    top-app-bar-->
    <v-app-bar fixed :flat='true' class='header-app-bar ' color='transparent'>
      <!--手机端-->
      <div class='phone-menu-box max-width'>
        <div class='disflex al-center phone-menu-bar max-width'>
          <!--          <nuxt-link style='margin-right: 14px' class='clear-flex h-logo-img' to='/'>-->
          <!--            <embed width='60%' :src="require('~/assets/images/cloudSales/header2-logo.svg')"-->
          <!--                   type='image/svg+xml' />-->
          <!--          </nuxt-link>-->
          <img @click='handleHome' :src="require('~/assets/images/cloudSales/header2-logo.svg')"
               style='width: 8%; max-height: 100px; margin-right: 14px; cursor: pointer; object-fit: cover'
               alt='' />
          <v-spacer />
          <div class='login-input' v-if='getActiveMenuInx>0'>
            <el-input @keyup.enter.native='handleClick(2)' v-model='context' :placeholder="$t('header.placeholder')"
                      class='c-input'
                      style='color: #ee8080' />
            <!--          el-icon-search-->
            <i class='el-icon-search ' @click='handleClick(2)' style='font-size: 24px;color: #ee8080'></i>
            <!--          <img style='width: 32px; height: 32px' src='~/assets/images/cloudSales/icon_sousuo.png' alt='' @click='handleClick(2)'/>-->
          </div>
          <div style='display: flex'>
            <v-btn @click='handleInfoWindowState(true)' class='login-bt try-out-bt' height='50px'> {{ $t('header.lang')
              }}
            </v-btn>
            <v-btn @click='handleClick(1)' class='login-bt try-out-bt'
                   height='50px'>{{ $t('header.information') }}
            </v-btn>
          </div>
        </div>
      </div>

      <!--PC端-->
      <div class='disflex ju-center max-width al-center col-f pc-menu-box'>
        <div class='disflex' style='align-items: center'>
          <img @click='handleHome' :src="require('~/assets/images/cloudSales/header2-logo.svg')"
               style='width: 120px; height: 40px; margin-right: 14px; cursor: pointer; object-fit: cover'
               alt='' />
          <div class='disflex' style='align-items: center'>
            <!--            <div style='color: #ee8080 ;font-size: 14px;flex-shrink: 0'>{{ $t(`city`) }}</div>-->
            <el-select @change='bindTapCityId' v-model='city_id' :placeholder="$t('loginOrRegister.placeholder')[1]"
                       style='width: 140px;margin-left: 16px;border-radius: 40px' class='homeHeaderView'>
              <el-option v-for='(item, index) in cityList' :key='index' :label='item.city_name'
                         :value='item.city_id'></el-option>
              <template #empty>
                <div class='no-data ' style='padding: 10px'>
                  {{ $t(`creation.twoTitle`) }}
                </div>
              </template>
            </el-select>
          </div>
        </div>


        <!--        </div>-->

        <!-- 登录样式 -->
        <div class='login-input' v-if='getActiveMenuInx>0'>
          <el-input v-model='context' @keyup.enter.native='handleClick(2)' :placeholder="$t('header.placeholder')"
                    class='c-input'
                    style='color: #ee8080' />
          <i class='el-icon-search ' @click='handleClick(2)' style='font-size: 24px;color: #C5C5C5'></i>
        </div>
        <div style='display: flex'>
          <v-btn @click='handleInfoWindowState(true)' class='login-bt try-out-bt' height='50px'
                 style='margin-right: 20px;'>
            <img @click='handleHome' :src="require('~/assets/images/icon_yuyan.png')"
                 style='width: 24px; height: 24px;'
                 alt='' />
            {{ $t('header.lang') }}
          </v-btn>
          <v-btn @click='handleClick(1)' class='login-bt try-out-bt'
                 height='50px'>
            <img @click='handleHome' :src="require('~/assets/images/icon_xiazai.png')"
                 style='width: 24px; height: 24px;'
                 alt='' />
            {{ $t('header.information') }}

          </v-btn>

        </div>
      </div>
    </v-app-bar>
    <!-- 登录弹窗 -  -->
    <login-user :type='loginType' @handleCloseLoginDialog='handleCloseLoginDialog' />
    <!-- 语言切换 -->
    <info-window :isShow='isShowContactInfoDialog' @handleClose='handleInfoWindowState' />
  </div>
</template>

<script>
import LoginWindow from '@/components/popupWindow/loginWindow';
import LoginUser from '@/components/popupWindow/loginLogin';
import InfoWindow from '@/components/popupWindow/infoWindow';
import {
  mapGetters,
  mapMutations,
  mapState,
  mapActions
} from 'vuex';

export default {
  name: 'header-control',
  components: {
    LoginWindow,
    InfoWindow,
    LoginUser
  },
  data() {
    return {
      currentMenuInx: 1, // 当前选择菜单下标
      isShowPhoneMenu: false, // 是否展示手机端菜单
      // 登录的选项类型
      loginType: -1,
      cityList: [],
      context: '',
      city_id: 2,
      // 是否显示联系方式弹框
      isShowContactInfoDialog: false
    };
  },
  watch: {
    $route() {
      this.isShowPhoneMenu = false;
    },
    searchKeywords() {
      this.context = this.searchKeywords;
    }

  },
  created() {
    this.city_id = this.cityId;
    this.context = this.searchKeywords;
    this.waimaiIndex();
  },
  computed: {
    ...mapState(['searchKeywords', 'cityId']),
    // 获取url 路径
    getUrlPath() {
      return this.$route.path;
    },

    // 获取菜单选中下标
    getActiveMenuInx() {
      const activeMenus = [
        [],
        ['/', ''],
        ['/creation']
      ];

      return activeMenus.findIndex(item => item.includes(this.getUrlPath));
    }
  },
  methods: {
    waimaiIndex() {
      const params = {
        data: {}
      };
      this.$axios.post('/client/data/all_cities', params).then(res => {
        this.cityList = res.items;
        if (!this.city_id) {
          this.city_id = res.items[0].city_id;
          this.$store.commit('SET_cityId', this.city_id); // set store
          localStorage.setItem('city_id', this.city_id);
        }
      }).catch(err => {
        this.$message.info(err.message);
      });
    },
    bindTapCityId() {
      this.$store.commit('SET_cityId', this.city_id); // set store
      localStorage.setItem('city_id', this.city_id);
    },
    handleHome() {
      window.location.href = '/';
    },
    handleClick(type) {
      if (type === 1) {
        window.location.href = 'https://apps.apple.com/es/app/kuaizi/id6447261841';
      } else {
        if (!this.context) {
          this.$message.warning(this.$t('header.placeholder'));
          return;
        }
        window.location.href = '/creation?keywords=' + this.context;
      }
    },

    /** 处理联系方式弹框的状态 */
    handleInfoWindowState(value) {
      this.isShowContactInfoDialog = value;
    },
    /** 处理登录弹框的关闭操作 */
    handleCloseLoginDialog(value) {
      console.log(value);
      this.loginType = value;
    }
  }
};
</script>

<style lang='scss'>
.homeHeaderView {
  .el-input__inner {
    border-radius: 40px !important;
  }

  .el-select .el-input__inner:focus {
    border-color: #E7E7E7 !important;
  }
}

.cover-bg {
  height: 100px !important;
  box-shadow: none !important;
  background-color: #FFFFFF !important;
}

.v-application {
  .phone-menu-mask {
    display: none;
  }

  .header-app-bar {
    transition: all 500ms ease-in-out;
    height: 100px !important;
    //background: linear-gradient(0deg, rgba(37, 37, 37, 0) 83.5%, rgba(37, 37, 37, 0.5) 100%);
    background: white;

    .pc-menu-box {
      width: 70%;
      justify-content: space-between;
      margin: auto;
    }

    .h-logo-img {
      width: 5.31%;
      height: 2.77%;
    }

    .login-input {
      flex: 1;
      min-width: 200px;
      flex-shrink: 0;
      height: 52px;
      margin: 0 126px 0 166px;
      border-radius: 60px;
      background: #F3F3F3;
      display: flex;
      border: 1px solid #EEE;
      justify-content: space-between;
      align-items: center;
      padding: 0 28px;
      color: white !important;

      .el-input__inner {
        background: transparent;
        border: none;
        color: #181818;
      }

      .el-input__inner::-webkit-input-placeholder {
        color: #C5C5C5;
      }
    }

    .login-bt {
      box-shadow: inset 0 0 20px #EE8080;
      background: #EE8080;
      border-radius: 40px;
      height: 49px;
      padding: 0 20px;
      line-height: 49px;
      text-align: center;
      font-weight: 700;
      font-size: 14px;
      color: #FFFFFF;
      text-shadow: none;
      -webkit-transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
      transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);



    }

    .v-toolbar__content {
      padding: 0;
      height: 100px !important;
    }

    .v-toolbar__content {
      height: 100% !important;
    }

    &.v-app-bar--is-scrolled {
      top: 0 !important;
      box-shadow: none !important;
      background-color: #FFFFFF !important;
    }
  }
}

/*小于大屏幕的设备*/
@media screen and(max-width: $big-pc-width) {
  .login-bt {
    min-width: 72px;
    min-height: 48px;
    //margin-left: px;
  }

  body {
    .v-application {
      .header-app-bar {
        .v-tab {
          font-size: $small-tab-font-size;
          margin-right: 22px;
        }
      }

      .v-slide-group__prev {
        display: none !important;
      }

    }
  }
}

@mixin __header_control_style($height, $phone) {
  .header-app-bar {
    height: $height !important;

    .phone-menu-box {
      display: if($phone ==true, block, none);
    }

    .pc-menu-box {
      display: if($phone ==false, inherit, none);
    }
  }
}

@include __header_control_style($app-bar-height, false);

@media screen and (max-width: $pad-max-width) {
  @include __header_control_style($small-app-bar-height, true);

  body {
    .v-application {
      .phone-menu-mask {
        display: inherit;
      }

      .v-list-item--link:before {
        background-color: transparent !important;
      }

      .header-app-bar {
        height: 66px !important;
        background-color: #FFFFFF !important;


        &.v-toolbar {
          box-shadow: none !important;
          background-color: #FFFFFF !important;
        }

        .theme--light.v-divider {
          background-color: #f4f5f6;
        }

        .v-toolbar__content {
          padding: 4px 0;
        }

        .phone-menu-box {
          .phone-menu-bar {
            padding: 0 32px;
          }

          .v-list-item {
            font-size: 16px;
            padding: 0;
          }

          .h-logo-img {
            width: 32%;
            height: 30%;
          }

          .phone-menu-list {
            padding: 16px;
            position: fixed;
            top: $small-app-bar-height;
            background-color: white;

            .v-list-item__title,
            .v-list-item__icon .v-icon {
              color: #171b20 !important;
            }

            .v-list-group__items {
              .v-list-item__title {
                color: #292e35 !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
