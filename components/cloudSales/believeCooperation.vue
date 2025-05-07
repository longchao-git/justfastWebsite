<template>
  <div class='cloud_sales_believe-cooperation'>
    <div class='content'>
      <img src='../../assets/images/believeIcon.png'
           style='width: 176px;height: 153px;'
           alt='' />
      <p> {{ $t('index.threeName') }}</p>
      <div>{{ $t('index.threeTitle') }}</div>
    </div>

    <div class='_bottom'>
      <div>
        <img src='../../assets/images/iconVIewKauzi1.png'
             style='width: 180px;height: 180px;'
             alt='' />
        <p>{{ $t('index.threeLeftTopName') }}</p>
        <div>{{ $t('index.threeLeftTopTitle') }}</div>
      </div>
      <div>
        <img src='../../assets/images/iconVIewKauzi2.png'
             style='width: 180px;height: 180px;'
             alt='' />
        <p>{{ $t('index.threeLeftBootName') }}</p>
        <div>{{ $t('index.threeLeftBootTitle') }}</div>
      </div>
      <div>
        <img src='../../assets/images/iconVIewKauzi3.png'
             style='width: 180px;height: 180px;'
             alt='' />
        <p>{{ $t('index.threeRightTopName') }}</p>
        <div>{{ $t('index.threeRightTopTitle') }}</div>
      </div>
      <div>
        <img src='../../assets/images/iconVIewKauzi4.png'
             style='width: 180px;height: 180px;'
             alt='' />
        <p>{{ $t('index.threeRightBootName') }}</p>
        <div>{{ $t('index.threeRightBootTitle') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.cloud_sales_believe-cooperation {
  position: relative;
  overflow: hidden;
  > .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;

    p {
      font-size: 40px;
      color: #181818;
      font-weight: 600;
      margin: 10px 0;
      letter-spacing: 1px;
      max-width: 800px;
    }

    div {
      color: #4B4B4B;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      margin: 0 auto 10px;
      max-width: 800px;
    }
  }

  > ._bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 512px;
    width: 70%;
    margin-left: 15%;
    //background: red;


    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 412px;
      width: 280px;
      border-radius: 20px;
      border: 1px solid  #DCDCDC;
      padding: 40px 20px;
      margin-top: 40px;

      &:hover {
        p, div {
          color: #ee8080;
        }
      }

      p {
        font-size: 24px;
        font-weight: bold;
        color: #5E5E5E;
        margin-bottom: 10px;
        line-height: 24px;
        margin-top: 30px;
      }

      div {
        font-size: 14px;
        color: #5E5E5E;
        max-width: 240px;
        line-height: 22px;
      }
    }
  }
}


/* 中屏幕*/
@media screen and(max-width: $big-pc-width) {
  .cloud_sales_believe-cooperation {
    > .content {
      p {
        font-size: 25px;
      }
    }

    > ._bottom {
      height: 350px;

      ._left, ._right {
        dl {
          dd {
            p {
              font-size: 16px;
            }

            div {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}

/** 平板屏幕 */
@media screen and (max-width: $pad-max-width) {
  .cloud_sales_believe-cooperation {
    > .content {
      top: 30px;

      p {
        font-size: 18px;
        margin-bottom: 5px;
        max-width: 70vw;
      }
    }

    > ._bottom {
      height: 300px;
      margin: 170px auto 80px;

      > img {
        display: none;
      }

      ._left, ._right {
        margin: 0 30px;

        dl {
          dd {
            &:hover {
              p {
                color: #383E3F;
              }

              div {
                color: #959A9C;
              }
            }

            p {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
}

/** 手机屏幕 */
@media screen and (max-width: $phone-max-width) {
  .cloud_sales_believe-cooperation {
    > .content {
      top: 25px;
      padding: 0 20px;

      p {
        font-size: 16px;
        max-width: 80vw;
      }
    }

    > ._bottom {
      height: auto;
      flex-direction: column;
      margin: 130px auto 60px;

      img {
        display: block;
        width: 70vw;
        margin: 8px auto;
      }

      ._right {
        margin-top: 20px;
      }

      ._left, ._right {
        margin: 0;

        dl {
          align-items: center;

          dd {
            margin: 10px 0;

            p {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
