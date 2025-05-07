<template>
  <div class='cloud_sales_sales-collaboration-mechanism'>
    <div class='_bottom'>
      <div class='_left'>
        <div class='content'>
          <p>
            {{ $t('index.twoName') }}</p>
        </div>
        <el-carousel :interval='4000' height='240px' style='width: 610px;border-radius: 20px;'>
          <el-carousel-item v-for='(item,index) in contentData' :key='index'>
            <el-image class='oneTwo' :src='item.photo' fit='cover' alt=''></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class='_right'>
        <dl>
          <dd @mouseover='currentStepsIndex = 0' @click='currentStepsIndex = 0'
              :class="[currentStepsIndex === 0 ? 'selected' : '']">
            <div>
              <img src='../../assets/images/salesViewOne.png'
                   style='width: 100px;height: 100px;'
                   alt='' />
              <span>{{ $t('index.twoTop') }}</span>
            </div>
          </dd>
          <dd @mouseover='currentStepsIndex = 1' @click='currentStepsIndex = 1'
              :class="[currentStepsIndex === 1 ? 'selected' : '']">
            <div>
              <img src='../../assets/images/salesViewTwo.png'
                   style='width: 100px;height: 100px;'
                   alt='' />
              <span>{{ $t('index.twoBoot') }} </span>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {

    contentData: {
      type: Array,
      default: []
    }

  },
  data() {
    return {
      // 当前选择的步骤
      currentStepsIndex: 0

    };
  }
};
</script>

<style lang='scss' scoped>
.cloud_sales_sales-collaboration-mechanism {
  position: relative;
  display: flex;
  min-height: 600px;
  background-image: url("../../assets/images/salesIconBack.png");
  background-size: cover;

  .content {
    width: 100%;
    letter-spacing: 1px;
    margin-bottom: 30px;

    p {
      font-size: 40px;
      color: #181818;
      font-weight: 600;
      line-height: 56px;
      max-width: 630px;
    }
  }

  .oneTwo {
    width: 610px;
    height: 240px;
    border-radius: 16px;
  }

  > ._bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    //margin: 200px auto 130px;
    ._right, ._left {
      //align-self: flex-start;
    }

    ._right {
      margin-left: 30px;
      width: 40%;

      dl {
        dd {
          > div {
            height: 128px;
            border-left: 5px solid transparent;
            display: flex;
            align-items: center;
            letter-spacing: 1px;
            background: white;
            border-radius: 8px;
            padding: 20px;
            margin-top: 30px;
              span {
                font-size: 14px;
                color: #5E5E5E;
                margin-left: 16px;
              }
          }
        }
      }
    }


  }
}


/* 中屏幕*/
@media screen and(max-width: $big-pc-width) {
  .cloud_sales_sales-collaboration-mechanism {
    > .content {
      top: 20px;

      p {
        font-size: 24px;
      }
    }
  }
}

/** 平板屏幕 */
@media screen and (max-width: $pad-max-width) {
  .cloud_sales_sales-collaboration-mechanism {
    > .content {
      p {
        font-size: 20px;
        margin: auto;
        max-width: 70vw;
      }
    }

    > ._bottom {

      width: initial;
      margin: 160px auto 80px;

      ._right {
        order: -1;
        width: auto;
        max-width: 600px;
        padding: 0 40px;

        dl {
          dd {
            > img {
              display: block;
              max-width: 500px;
            }

            > div {
              height: 110px;
              transition: initial;

              &:hover {
                transition: initial;
                border-color: #fff;
                background: initial;
              }

              > div {
                p {
                  font-size: 14px;
                }

                span {
                  font-size: 12px;
                }
              }
            }
          }
        }
      }

      ._left {
        margin: 10px auto 0;

        img {
          //display: none;
          width: auto;
          max-width: 500px;
          padding: 0 40px;
        }
      }
    }
  }
}

/** 手机屏幕 */
@media screen and (max-width: $phone-max-width) {
  .cloud_sales_sales-collaboration-mechanism {
    > .content {
      top: 40px;
      padding: 0 20px;

      p {
        font-size: 16px;
        max-width: 80vw;
      }
    }

    > ._bottom {
      margin: 140px auto 60px;

      ._right {
        width: 100vw;
        max-width: initial;
        padding: 0;

        dl {
          dd {
            > img {
              max-width: 100vw;
            }

            > div {
              height: auto;
              min-height: 95px;
              padding: 8px 0;

              > div {
                margin-right: 20px;
              }

              &::before {
                margin: 5px 10px 0;
                width: 35px;
                height: 35px;
                line-height: 35px;
                font-size: 14px;
              }
            }
          }
        }
      }

      ._left {
        img {
          width: 100vw;
          max-width: initial;
          padding: 0 40px;
        }
      }
    }
  }
}
</style>
