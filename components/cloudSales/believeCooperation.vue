<template>
    <div class="cloud_sales_believe-cooperation">
        <div class="content">
            <p>Takeaway Services We Offered</p>
          <div>At KUAIZI, we have a passionate and experienced team committed to bringing you the best dining experiences. Our team is comprised of individuals who share a love for food, technology, and customer satisfaction.
            At KUAIZI, we have a passionate and experienced team committed to bringing you the best dining experiences. Our team is comprised of individuals who share a love for food, technology, and customer satisfaction.</div>
        </div>

        <div class="_bottom">
            <div class="_left">
                <dl>
                    <dd>
                        <p>Endless Culinary Choices</p>
                        <div>Explore a vast array of restaurants and cuisines at your fingertips. From local favorites to international delicacies, there's something to satisfy every craving.</div>
                    </dd>
                    <dd>
                        <p>Swift Delivery</p>
                        <div>We take pride in delivering your meal quickly and reliably. Our efficient delivery system ensures your food arrives hot and fresh at your doorstep in no time.</div>
                    </dd>

                </dl>
            </div>

            <div class="_right">
                <dl>
                    <dd>
                        <p>Convenient Ordering</p>
                        <div>Order your favorite dishes with just a few taps on our user-friendly app or website. Our intuitive interface makes ordering a breeze, and you can customize your meal to your exact preferences.</div>
                    </dd>
                    <dd>
                        <p>Quality Assurance</p>
                        <div>We prioritize quality and safety, from the restaurants we partner with to our food packaging. Enjoy peace of mind knowing that your meal is prepared and delivered with care.</div>
                    </dd>

                </dl>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .cloud_sales_believe-cooperation {
        position: relative;
        display: flex;
        background: #254969;
        > .content {
            position: absolute;
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            text-align: center;
            p {
                font-size: 44px;
                color: #fff;
                font-weight: bold;
                margin: 0 auto 10px;
                letter-spacing: 1px;
                max-width: 800px;
            }
          div{
            color: rgba(255, 255, 255, 0.85);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 26px;
            margin: 0 auto 10px;
            max-width: 800px;
          }
        }
        > ._bottom {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 260px auto 100px;
            height: 330px;
            background: #2F5577;
            ._left, ._right {
                height: 100%;
                dl {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    dd {
                      padding: 32px;

                        &:hover {
                            p, div {
                                color: #6091ff;
                            }
                        }
                        p {
                            font-size: 22px;
                            font-weight: bold;
                            color: rgba(255, 255, 255, 0.85);
                            margin-bottom: 6px;
                        }
                        div {
                            font-size: 16px;
                            color: rgba(255, 255, 255, 0.85);
                            max-width: 600px;

                            display: flex;

                        }
                    }
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
