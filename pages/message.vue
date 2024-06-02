<template>
  <div class="about-main-box">
    <div class="message-left" :style="{'height':screenHeight + 'px'}">
      <div class="message-header">
        <img class="icon_xiaoxi" src="~/assets/images/icon_xiaoxi.png"
             alt=""/>
        <div>消息中心</div>
      </div>
      <div class="textMessage">聊天列表</div>
      <div class="message-search">
        <img class="icon_soousuo" src="~/assets/images/icon_soousuo.png"
             alt=""/>
        <input
          v-model="context"
          placeholder="搜索最近联系人"
          class="c-input"/>
      </div>
      <div class="message-left-context">
        <div v-for="item in messageUserList">
          <img class="customer-ser" src="~/assets/images/customer-ser.png"
               alt=""/>
          <div class="context-view">
              <div class="topView">
                <div class="beyond ">Tony</div>
                <span >2024-04-28</span>
              </div>
              <div class="bottomView">
                <div class="beyond text">最新一条消息，显示一行展示不完全用代替...</div>
                <div class="number" >8</div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="message-right" :style="{'height':screenHeight + 'px'}">

      <div class="right-context">
        <div>
          <div v-for="(item,index) in messageUserList" class="message-content">
            <div class="contextName">2024-04-28  19:00:00</div>
            <div class="viewLeft" v-if="index%4 === 0">
              <img class="headerImg" src="~/assets/images/customer-ser.png"
                   alt=""/>
              <div>张先生你好，可以电话沟通一下吗？</div>
            </div>
            <div class="viewRight" v-if="index%4 === 1">
              <div>张先生你好，可以电话沟通一下吗？</div>
              <img class="headerImg" src="~/assets/images/customer-ser.png"
                   alt=""/>
            </div>
            <div class="viewLeft" v-if="index%4 === 2">
              <img class="headerImg" src="~/assets/images/customer-ser.png"
                   alt=""/>
              <img class="imgcontext" src="~/assets/images/customer-ser.png"
                   alt=""/>

            </div>
            <div class="viewRight" v-if="index%4 === 3">
              <img class="imgcontext" src="~/assets/images/customer-ser.png"
                   alt=""/>
              <img class="headerImg" src="~/assets/images/customer-ser.png"
                   alt=""/>


            </div>
          </div>
        </div>

      </div>

      <div class="right-bottom">
        <div class="viewTop">
          <img class="icon_tupian" src="~/assets/images/icon_tupian.png"
               alt=""/>
          <div>1/500</div>
        </div>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="输入消息，按Enter键或 点击发送按钮发送"
          v-model="textarea">
        </el-input>
        <div class="button_view">
          <v-btn @click="loginType = 0" max-width="4em" height="50px" class="try-out-bt">
            发送
          </v-btn>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import config from '@/config/index'
export default {
  name: '',

  data () {
    return {
      context:'',
      messageUserList: [1,2,1,1,1,1,1,1,1,1,1,1,1],
      screenHeight:0,
      textarea:''
    }
  },

  watch: {
    '$route' () {

    }
  },
  computed: {
    // 页面宽度
    width() {
      if (process.client) {
        const { height, width } = window.screen;
        console.log(width,height)
        return width
      }
      return null;
    },
  },

  mounted () {
    this.initConnection()
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenSize);
  },
  methods: {
    updateScreenSize() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight - 148;
      console.log(this.screenWidth, this.screenHeight)
    },
    sendMessageToServer(message) {
      this.$webSocket.sendMessage(message)
    },
    initConnection(){
      console.log(config.BASE_WSURL)
      this.$webSocket.connect(config.BASE_WSURL + 1)
      this.$webSocket.setOnReceiveMessageListener({
        listener: msg => {
          console.log(msg)
          // let {messageList} =this
          // for(let i in messageList){
          //   if(messageList[i].fromUserId == msg.fromUserId){
          //     messageList[i].messageCount++
          //     messageList[i].messageType = msg.messageType
          //     messageList[i].messageContent = msg.messageContent
          //   }
          // }
          // this.getMessageNoReadCount()
        }
      });
    },
  }
}
</script>
<style lang="scss">
.right-bottom {
  .el-textarea {
    border: none;

    > textarea {
      border: none;
    }
  }
}
</style>
<style scoped lang="scss">
.about-main-box {
  margin: 24px 160px;
  background: white;
  border: 1px solid #e7e7e7;
  display: flex;
  flex-direction: row;
  .message-left{
    padding: 24px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .message-header{
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding-bottom: 16px;
      border-bottom: 1px solid #e7e7e7;
      .icon_xiaoxi{
        width: 40px;
        height: 40px;
      }
      >div{
        margin-left: 12px;
        color: #1C222B;
        font-size: 20px;
        font-weight: 500;
      }
    }
    .textMessage{
      padding: 16px 0;
      color: #2C2C2C;
      font-size: 16px;
      font-weight: 400;
    }
    .message-search{
      padding: 8px 16px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon_soousuo{
        width: 24px;
        height: 24px;
      }
      .c-input{
        padding-left: 10px;
        height: 24px;
        flex: 1;
        border: none !important;
      }
    }
    .message-left-context{
      margin-top: 4px;
      flex: 1;
      overflow-y: scroll;
      >div{
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .customer-ser{
          width: 50px;
          height: 50px;
        }
        .context-view{
          flex: 1;
          margin-left: 12px;
          .topView{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            >div{
              font-weight: 500;
              color: #181818;
              font-size: 16px;
              width: 217px;
            }
            >span{
              color: #959A9C;
              font-size: 12px;

            }
          }
          .bottomView{
            margin-top: 6px;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .text{
              color:#A6A6A6 ;
              font-size: 12px;
              width: 217px;
            }
            .number{
              background:  #E34D59;
              width: 16px;
              height: 16px;
              border-radius: 16px;
              text-align: center;
              color: #fff;
              line-height: 16px;
              font-size: 12px;
            }
          }
        }
      }
    }
    .message-left-context::-webkit-scrollbar {
      display: none; /* 针对Webkit浏览器，如Chrome、Safari */
    }
    .message-left-context {
      -ms-overflow-style: none; /* 针对IE、Edge浏览器 */
      scrollbar-width: none; /* 针对Firefox浏览器 */
    }
  }
  .message-right{
    border-left: 1px solid #e7e7e7;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .right-context{
      flex: 1;
      background: #f5f5f5;
      width: 100%;
      border-bottom: 1px solid #e7e7e7;
      overflow-y: scroll;
      padding:0 24px;
      .message-content{
        .contextName{
          padding: 16px 0;
          text-align: center;
        }
        .viewLeft{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          min-height: 48px;
          .headerImg{
            width: 42px;
            height: 42px;
          }
          >div{
            padding: 12px;
            margin-left: 16px;
            line-height: 22px;
            font-size: 16px;
            color: #171D1E;
          }
          .imgcontext{
            border-radius: 4px 0px 4px 4px;
            width: 240px;
            height: 135px;
            margin-left: 16px;
          }
        }
        .viewRight{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          min-height: 48px;
          .headerImg{
            width: 42px;
            height: 42px;
          }
          >div{
            border-radius: 4px 0px 4px 4px;
            background:  #09236C;
            padding: 12px;
            margin-right: 16px;
            line-height: 22px;
            font-size: 16px;
            color: #FFFFFF;
          }
          .imgcontext{
            border-radius: 4px 0px 4px 4px;
            width: 240px;
            height: 135px;
            margin-right: 16px;
          }
        }
      }

    }
    .right-context::-webkit-scrollbar {
      display: none; /* 针对Webkit浏览器，如Chrome、Safari */
    }
    .right-context {
      -ms-overflow-style: none; /* 针对IE、Edge浏览器 */
      scrollbar-width: none; /* 针对Firefox浏览器 */
    }
    .right-bottom{
      padding: 24px;
      width: 100%;
      .el-textarea{
        margin-top: 10px;
        border: none;
        font-size: 16px;
        >textarea{
          border: none;
        }
      }
      .button_view{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
      .viewTop{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .icon_tupian{
          width: 48px;
          height: 48px;
        }
        >div{
          font-weight: 500;
          color:#5E5E5E;
          font-size: 18px;
        }
      }
    }
  }
}

/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
  body .about-main-box {

  }
}

/* 小屏幕设备*/
@media screen and (max-width: $pad-max-width) {
  body .about-main-box {
    margin: 0;
    .message-left{
      display: none;
    }
    .message-right{
      border-left:none;

      .right-context{

        padding:0 12px;
        .message-content{
          .contextName{
            padding: 8px 0;
          }
          .viewLeft{
            .headerImg{
              width: 32px;
              height: 32px;
            }
            >div{
              padding: 6px;
              margin-left: 10px;
              font-size: 14px;
            }
            .imgcontext{
              width: 200px;
              height: 105px;
              margin-left: 10px;
            }
          }
          .viewRight{
            .headerImg{
              width: 32px;
              height: 32px;
            }
            >div{
              padding: 6px;
              margin-right: 10px;
              font-size: 14px;
            }
            .imgcontext{
              width: 200px;
              height: 105px;
              margin-right: 10px;
            }
          }
        }

      }

      .right-bottom{
        padding: 12px;
        width: 100%;
        .el-textarea{
          margin-top: 10px;
          font-size: 14px;
        }

        .viewTop{
          .icon_tupian{
            width: 32px;
            height: 32px;
          }
          >div{
            color:#5E5E5E;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>


