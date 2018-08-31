<!--  -->
<template>
  <div class='page app fixed'>
     <div class="center-a">
    <image  :src="shareImage" class="share-image m-y-3 border"></image>

     </div>
    <canvasdrawer :painting="painting" class="canvasdrawer" @getImage="eventGetImage"/>

    <div class="tabBar" style="border:none;height:auto">
      <i-button bind:click="handleClick" type="primary" @click="eventSave">保存图片分享到朋友圈</i-button>

    </div>
  </div>
</template>

<script>
import api from '@/utils/api'

import {addEditLog} from '@/http'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      qrCodeImg: '',
      cardInfo: {},
      painting: {},
      paintingIndex: 0,
      paintingList: [],
      shareImage: '',

      mode: 'normal'

    }
  },

  components: {},

  computed: {
    ...mapGetters({
      shareCardInfo: 'shareCardInfo',
      shareOpenId: 'shareOpenId',
      openId: 'openId',
      userInfo: 'userInfo'

    })
  },

  mounted () {
    console.log(this.shareCardInfo)
    this.paintingFn()
    this.qrCodeFn()
    this.eventDraw()
  },

  methods: {
    paintingFn () {
      this.paintingList = [{
        width: 375,
        height: 575,
        clear: true,
        views: [
          {
            type: 'rect',
            background: '#ffffff',
            top: 0,
            left: 0,
            width: 375,
            height: 575
          },
          {// 头像
            type: 'image',
            url: this.shareCardInfo.strBackground,
            top: 20,
            left: 0,
            width: 375,
            height: 275
          },

          {// 名称
            type: 'text',
            content: this.shareCardInfo.strName,
            fontSize: 16,
            lineHeight: 22,
            height: 22,
            color: '#1c2438',
            textAlign: 'left',
            top: 315,
            left: 20,
            width: 120,
            MaxLineNumber: 1,
            breakWord: true,
            bolder: true
          }, // 职位
          {
            type: 'text',
            content: this.shareCardInfo.strPosition,
            fontSize: 14,
            lineHeight: 22,
            height: 22,
            color: '#495060',
            textAlign: 'left',
            top: 340,
            left: 20,
            width: 80,
            MaxLineNumber: 1,
            breakWord: true,
            bolder: false
          },
          { // 公司头像
            type: 'image',
            url: this.shareCardInfo.strAvatarUrl,
            top: 315,
            left: 315,
            width: 40,
            height: 40
          }, // 标签
          // {
          //   type: 'text',
          //   content: '获客神器',
          //   fontSize: 14,
          //   lineHeight: 22,
          //   height: 22,
          //   color: '#2d8cf0',
          //   textAlign: 'left',
          //   top: 380,
          //   left: 20,
          //   width: 110,
          //   MaxLineNumber: 1,
          //   breakWord: true,
          //   bolder: true
          // },
          // {
          //   type: 'text',
          //   content: '贴心服务',
          //   fontSize: 14,
          //   lineHeight: 22,
          //   height: 22,
          //   color: '#2d8cf0',
          //   textAlign: 'left',
          //   top: 380,
          //   left: 131,
          //   width: 110,
          //   MaxLineNumber: 1,
          //   breakWord: true,
          //   bolder: true
          // },
          // {
          //   type: 'text',
          //   content: '守诺',
          //   fontSize: 14,
          //   lineHeight: 22,
          //   height: 22,
          //   color: '#2d8cf0',
          //   textAlign: 'left',
          //   top: 380,
          //   left: 242,
          //   width: 110,
          //   MaxLineNumber: 1,
          //   breakWord: true,
          //   bolder: true
          // },
          {
            type: 'rect',
            background: '#dddee1',
            top: 420,
            left: 20,
            width: 335,
            height: 1
          },
          { // 电话
            type: 'image',
            url: '../../static/assets/madePoster/phone.png',
            top: 440,
            left: 20,
            width: 22,
            height: 22
          },

          {
            type: 'text',
            content: this.shareCardInfo.strMobile,
            fontSize: 14,
            lineHeight: 22,
            height: 22,
            color: '#495060',
            textAlign: 'left',
            top: 442,
            left: 50,
            width: 160,
            MaxLineNumber: 1,
            breakWord: true,
            bolder: false
          },
          { // 微信
            type: 'image',
            url: '../../static/assets/madePoster/wx.png',
            top: 470,
            left: 20,
            width: 22,
            height: 22
          },

          {
            type: 'text',
            content: this.shareCardInfo.strMobile,
            fontSize: 14,
            lineHeight: 22,
            height: 22,
            color: '#495060',
            textAlign: 'left',
            top: 472,
            left: 50,
            width: 160,
            MaxLineNumber: 1,
            breakWord: true,
            bolder: false
          },
          { // 地址
            type: 'image',
            url: '../../static/assets/madePoster/addr.png',
            top: 500,
            left: 20,
            width: 22,
            height: 22
          },

          {
            type: 'text',
            content: this.shareCardInfo.strAddress,
            fontSize: 14,
            lineHeight: 22,
            height: 22,
            color: '#495060',
            textAlign: 'left',
            top: 502,
            left: 50,
            width: 160,
            MaxLineNumber: 2,
            breakWord: true,
            bolder: false
          },
          { // 小程序二维码
            type: 'image',
            url: '../../static/assets/madePoster/addr.png',
            top: 440,
            left: 235,
            width: 120,
            height: 120
          }
        ]
      }]
    },
    eventDraw () {
      // debugger
      wx.showLoading({
        title: '绘制分享图片中',
        mask: true
      })
      const paintingList = this.paintingList
      const paintingIndex = this.paintingIndex
      this.mode = 'normal'
      this.painting = paintingList[paintingIndex]
      this.paintingIndex = paintingIndex === 0 ? 1 : 0
    },
    eventSave () {
      wx.saveImageToPhotosAlbum({
        filePath: this.shareImage,
        destWidth: 750, // 生成图片的大小设置成canvas大小的二倍
        destHeight: 1500,
        success: async res => {
          wx.showToast({
            title: '保存图片成功',
            icon: 'success',
            duration: 2000
          })
          var Details = this.userInfo.strName + '保存了' + this.shareCardInfo.strName + '的画报'

          var paramData = {'Name': '保存画报', 'Type': '保存画报&a', 'Details': Details, 'Controller': 'madePoster', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}

          await addEditLog(paramData)
        }
      })
    },
    eventGetImage (event) {
      wx.hideLoading()
      const tempFilePath = event.mp.detail.tempFilePath
      if (tempFilePath != undefined) {
        this.shareImage = tempFilePath
      }

      if (this.mode === 'cry') {
        this.eventDrawCry()
      }
    },

    async qrCodeFn () {
      const qrCode = await api.get_qrCode({
        url: 'pages/home/main',
        scene: ''
      })
      console.log(qrCode)
    }

  }
}
</script>
<style lang='scss' scoped>
.share-image {
  width: 640rpx;
  height: 940rpx;
  // margin: 0 75rpx;
  display: block;
  box-sizing: border-box;
  // border: 1px solid black;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
</style>