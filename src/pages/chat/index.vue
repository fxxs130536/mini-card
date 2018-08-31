<!--  -->
<template>
  <div class='page app page_chat' @click="plus = false" >
    <scroll-view :style="{height:scrollHeight}" :class="{ fixed: focus,scrollP: plus}" class="chartboard" :scroll-top="chatTop" scroll-y id="scrollH" scroll-into-view="scrBottom">
      <div id="chatScrollView">
          <div v-for="(item, index) in message" :key="index" class="chat-item">
        <view :class="[item.from === 'me' ? 'fromme' : 'other']" class="msgarea">
          <image class="icon" :src="item.icon"></image>
          <view class="msg" v-if="item.type ==='text'">{{item.msg}}</view>
          <image  mode="widthFix" class="msg-img" v-else-if="item.type === 'images'" :src="item.msg" alt="" @click="previewImage(item.msg)"></image>
          <view class="clearfix"></view>
        </view>
      </div>
      </div>
      <div id="scrBottom"></div>
      
    </scroll-view>
  <div id="hei"></div>
    <view class="input shouw-plus" :class="{plusShow: plus }" >
      <view class="input_layout">
        <image class="input_icon voice" src="/../../static/assets/chat/voice.png"></image>
        <image class="input_icon face" src="/../../static/assets/chat/face.png"></image>
        <image class="input_icon plus" src="/../../static/assets/chat/plus.png" @click.stop="plus = !plus"></image>
        <view :class="[readyToSend === '' ? 'hidden' : '']" class="send" @tap="send">发送</view>
        <input @input="input" :value="readyToSend" :class="[focusFlag ? 'focusFlag' : '']" class="input_text" @focus="focus" @blur="blur"
          @type="input"></input>
      </view>
      <view class="plus-cont p-x-3 p-y-2 fl" @click.stop>
          <div class="plus-items m-b-1 ">
            <div class="plut-t border center-a" @click="sendImg">
              <i-icon type="picture_fill" size="28" />
            </div>
            <p class="font-sub text-oh text-center plut-b">照片</p>
          </div>
      </view>
    </view>
  </div>
</template>

<script>
  import api from '@/common/api'
  import global from '@/common/global'
import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    data () {
      return {
        chatTop: 0,
        scrollB: true,
        scrollHeight: 0,
        message: [
        ],
        focus: false,
        focusFlag: false,
        readyToSend: '',
        to: '',
        from: '',
        current: {},
        plus: false
      }
    },

    components: {
  
    },

    computed: {
      ...mapGetters({
        userInfo: 'userInfo'
      })
    },

    mounted () {
  
    },
    onLoad (p) {
      var _this = this
      let contact = global.getContact(p.id)
      if (!contact) {
        this.$router.back()
        return
      }
      wx.setNavigationBarTitle({title: contact.name})

      this.loadMessage(p.id)
      // this.bottom()
      this.to = p.id
    },

    methods: {
      async loadMessage (id) {
        var _this = this
        let userinfo, message
        try {
          userinfo = await api.getUserInfo()
        } catch (e) {
          console.log(e)
          userinfo = {
            nickName: 'Gcaufy',
            id: 'gcaufy'
          }
        }
        this.current = userinfo
        // console.log(userinfo)
        try {
          message = await api.getHistory(id)
  
          // console.log(this.message)
        } catch (e) {
          message = null
          console.error('getHistory fail')
          console.log(e)
        }
  
        if (message) {
          this.message = message
  
          this.to = id
          this.message.forEach((msg) => {
            if (msg.from === 'me') {
              msg.name = userinfo.nickName
              msg.icon = userinfo.avatarUrl
              // console.log(msg)
            }
          })
        }
        setTimeout(function () {
          _this.bottom()
        }, 800)
      },
      async send (evt) {
        const msg = this.readyToSend
        if (msg) {
          let id = this.to
          let msgObj = await api.sendMsg(id, msg)

          msgObj.name = this.current.nickName
          msgObj.icon = this.current.avatarUrl
          this.message.push(msgObj)
          this.bottom()
          this.clear()

          let randomReply = await api.getRandomReply(id)
          this.replyMessage(randomReply)
        }
      },
      async replyMessage (msg) {
        let id = this.to
        // console.log(id)
        let contact = global.getContact(id)
        // console.log(contact)
        let msgObj = await api.replyMsg(id, msg)
        msgObj.name = contact.name
        msgObj.icon = contact.icon

        this.message.push(msgObj)
        this.bottom()
      },
      sendImg () {
        var that = this
        this.$wxapi.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera']
        }).then(async function (res) {
          // debugger
          let tempFilePaths = res.tempFilePaths
          let id = that.to
          console.log(id)
          let msgObj = await api.sendImg(id, tempFilePaths[0])
          msgObj.name = that.current.nickName
          msgObj.icon = that.current.avatarUrl
          that.message.push(msgObj)
          that.plus = false
  
          setTimeout(function () {
            that.bottom()
          }, 100)
          var data = {
            id: id
          }
  
          // wx.uploadFile({
          //   url: 'pg.php/ZXinfo/session_submit', // 提交信息至后台
          //   filePath: tempFilePaths[0],
          //   name: 'content', // 文件对应的参数名字(key)
          //   formData: data, // 其它的表单信息
          //   success: function (res) {
          //     var a = true
          //     that.loaddata(a)
          //     message = ''
          //   }
          // })
        })
      },
      previewImage (path) {
        let imgArr = this.message.filter((v) => v.type === 'images')
        imgArr = imgArr.map(item => item.msg)
        this.$wxapi.previewImage({
          current: path, // 当前显示图片的http链接
          urls: imgArr // 需要预览的图片http链接列表
        }).then(res => {

        })
      },
      input (evt) {
        this.readyToSend = evt.mp.detail.value
      },
      focus (evt) {
        this.focusFlag = true
        this.focus = this.focusFlag
        this.bottom()
      },
      blur (evt) {
        this.focusFlag = false
        this.focus = this.focusFlag
      },
      clear () {
        this.readyToSend = ''
      },
      bottom () {
        var _this = this
        let scrollHeight = wx.getSystemInfoSync().windowHeight
        this.scrollHeight = scrollHeight + 'px'
        var query = wx.createSelectorQuery()
        query.select('#chatScrollView').boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec(function (res) {
          // console.log(res[0].height - scrollHeight)
          _this.chatTop = (res[0].height - scrollHeight) < 0 ? 999999999 : res[0].height - scrollHeight + 1000
          if ((res[0].height - scrollHeight) < 0) {
            wx.pageScrollTo({
              scrollTop: 999999999,
              duration: 300
            })
          }
        })
      },
      openPlus () {
        this.plus = !this.plus
      }
    }
  }
</script>
<style lang='scss' scoped>
  .page_chat {
    height: 100%;
    background-color: #ededed;
  }

  $fontcolor: #7b7b7b;
  $activecolor: #13b113;
   
  .chartboard {
    background-color: #ededed;
    height: 100%;
    padding-bottom: 120rpx;
    box-sizing: border-box;
    &.fixed {
      position: fixed;
      left: 0;
      right: 0;
      overflow-y: scroll;
    }
    .msgarea {
      padding: 20rpx 10rpx;
      .clearfix:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
      .clearfix {
        height: 1%;
      }
      .msg {
        border: 1px solid #d8d8d8;
        font-size: 32rpx;
        display: inline-block;
        padding: 14rpx 20rpx;
        max-width: 450rpx;
        border-radius: 15rpx;
      }
       .msg-img{
        display: flex;
        max-width: 120px;
        height: auto; 
        border: 1px solid #d8d8d8;
        
      }
      .icon {
        width: 70rpx;
        height: 70rpx;
      }
      &.fromme {
        .msg {
          background-color: #9fe757;
          float: right;
          margin-right: 10rpx;
        }
        .msg-img{
          float: right;
          margin-right: 10rpx;
        }
        .icon {
          float: right;
          margin-right: 10rpx;
        }
      }
      &.other {
          .msg-img{
             float: left;
          margin-left: 10rpx;
          }
        .msg {
          background-color: #fff;
          float: left;
          margin-left: 10rpx;
        }
        .icon {
          float: left;
          margin-left: 10rpx;
        }
      }
    }
  }
.chartboard.scrollP{padding-bottom: 156px;}
  .input {
   transition: all 0.2s;

    color: $fontcolor;
    position: fixed;
    bottom: 0;
    height: 100rpx;
    width: 100%;
    border-top: 1px solid #d8d8d8;
    background-color: #ededed;
    font-size: 22rpx;
    .input_layout {
      position: relative;
      .input_icon {
        position: absolute;
        width: 90rpx;
        height: 90rpx;
        &.voice {
          left: 20rpx;
        }
        &.face {
          right: 120rpx;
        }
        &.plus {
          right: 20rpx;
        }
      }
      .input_text {
        border-bottom: 1px solid #d8d8d8;
        margin-left: 120rpx;
        margin-right: 240rpx;
        height: 80rpx;
        font-size: 32rpx;
        color: #000;
        &.focus {
          border-bottom: 1px solid #9bb793;
        }
      }
      .send {
        background-color: #14b012;
        display: inline-block;
        box-sizing: border-box;
        position: absolute;
        border: 1px solid #378c37;
        border-radius: 5rpx;
        right: 20rpx;
        width: 90rpx;
        height: 74rpx;
        line-height: 72rpx;
        color: white;
        text-align: center;
        font-size: 30rpx;
        margin-top: 8rpx;
        &.hidden {
          display: none;
        }
      }
    }
  }

  .plus-cont{
    width: 100%;
    height: 96px;
    background: #ededed;
  }
  .plus-items{
    float: left;
    width: calc((100% - 24px)/4);
    height: 100%;
    margin-left: 8px;
    .plut-t{
       height: 60px;
       border-radius: 14px;     
       border-color: #d8d8d8;
    }
    .plut-b{
      width: 100%;
    }
  }
  .plus-items:nth-child(4n + 1){
    height: 20px;
    line-height: 20px;
    margin-left: 0;
  }
 .plusShow{
  height: 146px;
 }
</style>
