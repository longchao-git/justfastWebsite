<template>
  <div class='content_tab' :class='loginType!=-1?"isview_container":""'>
    <div class='conViewLeft'>
      <div v-for='(item,index) in list' :key='item.cate_id'
           style='padding: 0 20px ;height: 60px;border-bottom: 1px solid #EEE'
           :class="['menu-item', { active: activeCategory === item.cate_id }]"
           @click='scrollToCategory(item.cate_id)'>
        <div style='line-height: 60px' class='font14'>{{ item.title }}</div>
      </div>
    </div>
    <div class='right-list' style='flex: 1' ref='scrollContainer' @scroll='handleScroll'>
      <div v-for='(item,index) in list' :key='item.cate_id' :ref="(el) => setCategoryRef(el, item.cate_id)"
           class='category-section'>
        <div style='color: #181818;margin-bottom: 10px' class=' font14'>{{ item.title }}</div>
        <div class='card_container'>
          <div class='card_item' v-for='(items,indexs) in item.products' :key='indexs'
               @click='loginbindTap(items,index,indexs)'>
            <div class='card_img_container'>
              <img class='card_img fit-cover' :src='items.photo' />
            </div>
            <div class=' flex-column ml1' style='display: flex;flex: 1;justify-content: space-between;height: 100px'>
              <span class='font16  beyond3' style='width: 100%'>{{ items.title }} </span>
              <div
                style='display: flex;flex-direction: row; margin-top: 10px;justify-content: space-between;align-items: center'>
                <div class=' line22 classNameView' style='color: #ee8080;margin-right: 6px'>
                  <span>€</span>
                  {{ items.price }}
                  <span>/ {{ items.unit }}</span>
                  <span class='del ml5' style='font-size: 14px;color: #999999;text-decoration: line-through'
                        v-if="items.is_discount == '1'">
								{{ items.oldprice }}/{{ items.unit }}
								</span>
                </div>
                <div style='display: flex;'
                     v-if='items.specs.length == 0 && items.specification.length == 0&&items.sale_sku>0'>
                  <div class='buttonView' @click.stop='addCart(1,index,indexs)' style='cursor: pointer'
                       v-if='items.num'>-
                  </div>
                  <div class='num mr1' v-if='items.num'>
                    {{ items.num }}
                  </div>
                  <div class='buttonView' @click.stop='addCart(2,index,indexs)' style='cursor: pointer'>+</div>
                </div>

                <div class='spec serg_btnss' v-else-if='items.sale_sku<=0'>{{ $t('creation.Agotado') }}</div>
                <div class='spec serg_btn' @click.stop='loginbindTap(items,index,indexs)' v-else>
                  {{ $t('creation.disponibles') }}
                  <span class='num viewNUm' v-if='items.num > 0'>{{ items.num }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <tick-attribute @addCart='addNewCart' :priceDatass='priceDatass' :isValueNumber='isValueNumber' :type='loginType'
                    @addspkCilck='addspkCilck' @bindspNewecsIndex='bindspNewecsIndex' :specsIndex='specsIndex'
                    :specification='specification' :specs='specs' :productInfo='productInfo'
                    @handleCloseLoginDialog='handleCloseLoginDialog'></tick-attribute>
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
    shop_id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      active: 1,
      loginType: -1,
      specShow: false,
      specs: [],
      newSpecs: {},
      ecartList: [],
      specification: [],
      productInfo: {},
      specsIndex: -1,
      addIndex: {},
      isValueNumber: 0,
      priceDatass: [],
      activeCategory: '',
      categoryPositions: [],
      isManualScroll: false,
      categoryRefs: [],       // 存储DOM引用
      scrollDebounce:null,

    };
  },
  mounted() {

    window.addEventListener('resize', this.calculatePositions);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculatePositions);
  },
  methods: {
    // 设置分类元素引用
    setCategoryRef(el, categoryId) {
      console.log(123123123123123123)
      if (!el) return

      const index = this.categoryRefs.findIndex(item => item.id === categoryId)
      if (index === -1) {
        this.categoryRefs.push({ id: categoryId, el })
      } else {
        this.categoryRefs[index].el = el
      }
      console.log(this.categoryRefs.length==this.list.length)
      if(this.categoryRefs.length==this.list.length){
        this.calculatePositions();
        if(!this.activeCategory){
          this.activeCategory = this.categoryRefs[0].id
        }

      }


    },

    // 计算各分类位置
    calculatePositions() {
      this.$nextTick(() => {

        try {
          this.categoryPositions = this.categoryRefs
            .filter(item => item.el)
            .map(item => {
              const rect = item.el.getBoundingClientRect()
              const containerTop = this.$refs.scrollContainer.getBoundingClientRect().top
              return {
                id: item.id,
                top: rect.top - containerTop + this.$refs.scrollContainer.scrollTop,
                height: rect.height
              }
            })
            .sort((a, b) => a.top - b.top)
        } catch (error) {
          console.error('位置计算失败:', error)
        }
        console.log(this.categoryPositions)
      })
    },

    // 处理滚动事件
    handleScroll() {
      if (this.isManualScroll) return;

      // 防抖处理
      clearTimeout(this.scrollDebounce)
      this.scrollDebounce = setTimeout(() => {
        const scrollTop = this.$refs.scrollContainer.scrollTop
        const containerHeight = this.$refs.scrollContainer.clientHeight

        // 查找当前可见的分类
        const current = this.categoryPositions.find(pos =>
          pos.top <= scrollTop + containerHeight * 0.3 &&
          pos.top + pos.height > scrollTop + containerHeight * 0.3
        )

        if (current && this.activeCategory !== current.id) {
          this.activeCategory = current.id
        }
      }, 50)
    },

    // 点击分类跳转
    scrollToCategory(categoryId) {
      const target = this.categoryPositions.find(pos => pos.id === categoryId)
      console.log(target)
      if (!target) return
      this.activeCategory = target.id
      this.isManualScroll = true
      const headerHeight = 32 // 根据实际header高度调整
      this.$refs.scrollContainer.scrollTo({
        top: target.top - headerHeight,
        behavior: 'smooth'
      })

      // 滚动完成后重置状态
      setTimeout(() => {
        this.isManualScroll = false
      }, 500)
    },


    handleChangeTabs(tab) {
      this.active = tab;
    },
    addspkCilck(value) {
      let { index, indexs } = value;
      this.$set(this.specification, index, {
        ...this.specification[index],
        spk: indexs
      });
      let valueName = [];
      for (let i in this.specification) {
        valueName.push(this.specification[i].val[this.specification[i].spk]);
      }
      let name = valueName.join(',');
      for (let i in this.priceDatass) {
        if (this.priceDatass[i].attrJson === name) {
          this.isValueNumber = parseInt(i);
        }
      }
    },
    bindspNewecsIndex(index) {
      this.loginType = 2;
      this.specsIndex = index;

    },
    /** 处理登录弹框的关闭操作 */
    handleCloseLoginDialog(value) {
      this.loginType = value;
    },
    childMethod(item, index, indexs, specsIndex, isValueNumber) {
      this.loginType = 2;
      this.productInfo = item;
      this.specification = item.specification;
      this.specsIndex = specsIndex;
      this.isValueNumber = isValueNumber;
      this.specs = item.specs;
      this.addIndex = {
        index,
        indexs
      };
    },
    loginbindTap(item, index, indexs) {
      if ((item.specs.length > 0 || item.specification.length > 0) && item.sale_sku > 0) {
        this.loginType = 2;
        this.productInfo = item;
        this.specification = item.specification;
        let valueName = [];
        for (let i in item.specification) {
          valueName.push(item.specification[i].val[item.specification[i].spk]);
        }
        let name = valueName.join(',');
        for (let i in item.priceDatass) {
          if (item.priceDatass[i].attrJson === name) {
            this.isValueNumber = parseInt(i);
          }
        }
        this.priceDatass = item.priceDatass;
        this.specsIndex = item.specsIndex;
        this.specs = item.specs;

        this.addIndex = {
          index,
          indexs
        };
      }
    },
    addNewCart(type) {
      if (type === 3 || type === 4) {
        this.$emit('addCilck', {
          type,
          ...this.addIndex,
          specsIndex: this.specsIndex
        });
      } else if (type === 5 || type === 6) {
        this.$emit('addCilck', {
          type,
          ...this.addIndex,
          specsIndex: this.isValueNumber
        });
      } else if (type === 7 || type === 8) {
        this.$emit('addCilck', {
          type,
          ...this.addIndex,
          specsIndex: this.specsIndex,
          isValueNumber: this.isValueNumber
        });
      }
    },
    //加入购物车
    addCart(type, index, indexs) {
      this.$emit('addCilck', {
        type,
        index,
        indexs
      });

    }
  }
};
</script>

<style lang='scss' scoped>
.conViewLeft {
  width: 178px;
  margin-right: 30px;
  overflow-y: auto;
}

.right-list {
  flex: 1;
  overflow-y: auto;
}

.menu-item {
  padding: 15px;
  cursor: pointer;

  transition: all 0.3s;
  >div{
    color: #181818;
  }
}

.menu-item.active {

  background: #ff797c !important;
  font-weight: bold;
  >div{
    color: #FFFFFF !important;
  }
}

.isview_container {
  height: calc((100vh - 500px));
  overflow: hidden;
}

.content_tab {
  width: 80%;
  display: flex;
  margin: 30px auto 24px;
  height: calc(100vh - 400px);

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
    font-size: 14px !important;
    line-height: 22px !important;
    height: 32px !important;
    padding: 5px 16px !important;
    color: #fff !important;
    position: relative;
    cursor: pointer;
    border-radius: 32px;

    .viewNUm {
      width: 18px;
      height: 18px;
      position: absolute;
      top: -6px;
      right: -6px;
      text-align: center;
      border-radius: 50px;
      line-height: 18px;
      background: #FF797C;
    }
  }

  .serg_btnss {
    background: #ffffff !important;
    font-size: 14px !important;
    line-height: 16px !important;
    height: 16px !important;
    padding: 0 7px !important;
    color: #999 !important;
  }

  .module_title {
    font-size: 32px;
    font-weight: 700;
    line-height: 58px;
    margin-bottom: 10px;

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
    width: calc((100% - 120px) / 3);
    margin-bottom: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 12px;
    border: 1px solid var(---3, #E7E7E7);
    background: #FFF;
    padding: 10px;

    .card_img_container {
      position: relative;
      //margin-bottom: 8px;

      .card_img {
        width: 100px;
        height: 100px;
        border-radius: 8px;
      }

    }

    .classNameView {
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

  //.card_item:nth-child(4n) {
  //  margin-right: 0;
  //}
}

/* 中屏幕*/
@media screen and(max-width: $big-pc-width) {
  .content_tab {
    .card_item {
      width: calc((100% - 96px) / 4);

      .card_img {
        height: 100px;
      }
    }

    .classNameView {
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

        //.card_img_container {
        //  margin-bottom: 4px;
        //}

        .card_img {
          height: 100px;
        }

      }

      //.card_item:nth-child(3n) {
      //  margin-right: 0;
      //}
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
        //
        //.card_img_container {
        //  margin-bottom: 4px;
        //}

        .card_img {
          height: 100px !important;
        }

      }

      //.card_item:nth-child(2n) {
      //  margin-right: 0 !important;
      //}
    }
  }
}
</style>
