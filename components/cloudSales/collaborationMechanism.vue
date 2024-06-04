<template>
    <div class="cloud_sales_sales-collaboration-mechanism">


        <div class="_bottom">
            <div class="_left">
                <img  src="../../assets/images/cloudSales/home/about2-image.png" alt="" />
            </div>
            <div class="_right">
              <div class="content">
                <p>
                  About Us
                  Partner With Our Trusted Platform Today.</p>
              </div>
                <dl>
                    <dd @mouseover="currentStepsIndex = index" @click="currentStepsIndex = index" v-for="(item, index) in stepsList" :key="index" :class="[currentStepsIndex === index ? 'selected' : '']">
                        <div>
                            <div>
                                <span>{{item.content}}</span>
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 当前选择的步骤
                currentStepsIndex: 0,
                // 步骤的内容
                stepsList: [
                    {
                        content: "Experience the Flavors of the World, Delivered to Your Doorstep! Discover culinary delights from around the globe with our convenient food delivery platform. Satisfy your cravings with a diverse selection of mouthwatering dishes, all just a few taps away.",
                    },
                    {
                        content: "Whether you're in the mood for savory, spicy, or sweet, we've got you covered. Fast, fresh, and hassle-free – we bring your favorite restaurants to you. Order now and let your taste buds embark on a global culinary journey without leaving your home!",
                    },

                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cloud_sales_sales-collaboration-mechanism {
        position: relative;
        background: #fff;
        display: flex;
        .content {
            width: 100%;
            letter-spacing: 1px;
            margin-bottom: 30px;
            p {
                font-size: 44px;
                color: #03163B;
                font-weight: bold;
                line-height: 52px;
                margin: 0 auto 10px;
                max-width: 600px;
            }
        }
        > ._bottom {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 200px auto 130px;
            ._right, ._left {
                align-self: flex-start;
            }
            ._right {
              margin-left: 30px;
              width: 40%;
                dl {
                    dd {

                        > div {
                            height: 110px;
                            border-left: 5px solid transparent;
                            display: flex;
                            align-items: center;
                            letter-spacing: 1px;
                            cursor: pointer;
                            transition: .3s;
                            &:hover {
                                transition: .3s;
                                border-color: #4981ff;
                                background: linear-gradient(90deg, #e1ecfc, #f6f9ff, #ffffff);
                            }
                            > div {
                                p {
                                    font-size: 16px;
                                    font-weight: bold;
                                    margin-bottom: 5px;
                                }
                                span {
                                    font-size: 13px;
                                    color: #686C6C;
                                }
                            }
                            &::before {
                                background: #467fff;
                                color: #fff;
                                width: 40px;
                                height: 40px;
                                border-radius: 50%;
                                line-height: 40px;
                                text-align: center;
                                flex-shrink: 0;
                                font-size: 16px;
                                margin: 15px 20px 0;
                                align-self: flex-start;
                            }
                        }
                        @for $i from 1 to 6 {
                            &:nth-of-type(#{$i}) > div::before {
                                content: "#{$i}";
                            }
                        }
                    }
                    .selected {
                        > div {
                            border-color: #4981ff !important;
                            background: linear-gradient(90deg, #CBDFFF, #ecf3ff, #ffffff) !important;
                            &::before {
                                background: #fff !important;
                                color: #467fff !important;
                            }
                        }
                    }

                }
            }
            ._left {
                img {
                    width: 500px;
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
                flex-direction: column;
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
                        display: none;
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
