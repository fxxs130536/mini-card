<!--  -->
<template>
  <div class='page app'>
      <div class="card-wrapper p-x-3 p-t-3 p-b-1"> 
          <div class="card-header">
              <div class="p-x-1">
                <img class="card-img" :src="cardInfo.strBackground" alt="">

              </div>
                <div class="card-main-info p-a-3 clearfix">
                    <div class="card-main-info-l fl">
                        <span class="card-name text-oh font-title">
                         {{cardInfo.strName}}
                        </span>
                        <span class="card-job-title font-sub">{{cardInfo.strPosition}}</span>
                        <p class="card-phone font-sub">{{cardInfo.strMobile}}</p>
                        
                    </div>                   
                    <div class="card-company-logo fr border">
                        <img :src="cardInfo.strAvatarUrl" alt="">
                    </div>
                </div>
                <navigator class="card-list-btn" url="/pages/cardlist/main" open-type="reLaunch">
                    <i-icon type="businesscard" size="28" color="#fff" />
                </navigator>
          </div>
          
      </div>
      <!-- 全部名片信息 -->
      <div class="bgf">
              <div class="show-all-card text-center p-b-1" @click="showInfo = !showInfo">
                  <div v-if="!showInfo">
                    <span  class="font-mini">展开全部名片信息</span><i-icon type="unfold" size="14" color="#80848f"/>
                  </div>
                 <div class="show-all-card text-center p-b-1" v-else>
                        <span  class="font-mini">收起以下名片信息</span><i-icon type="packup" size="14" color="#80848f"/>
                </div>
              </div>
              <div class="show-all-content p-x-3 p-y-1  bg" v-show="showInfo">
                  <i-row i-class="m-b-1"> 
                        <i-col span="3" i-class="col-class font-color-sub">电话</i-col>
                        <i-col span="15" i-class="col-class font-color-title">{{cardInfo.strMobile}}</i-col>
                        <i-col span="6" i-class="col-class"><button class="mini-btn m-x-0 fr" @click="dial(cardInfo.strMobile,'strMobile')">拨打</button></i-col>
                </i-row>
                  <i-row i-class="m-b-1"> 
                        <i-col span="3" i-class="col-class font-color-sub">微信</i-col>
                        <i-col span="15" i-class="col-class font-color-title">{{cardInfo.strMobile}}</i-col>
                        <i-col span="6" i-class="col-class"><button class="mini-btn m-x-0 fr"  @click="copy(cardInfo.strMobile,'wx')">复制</button></i-col>
                </i-row>
                  <i-row i-class="m-b-1"> 
                        <i-col span="3" i-class="col-class font-color-sub">邮箱</i-col>
                        <i-col span="15" i-class="col-class font-color-title">{{cardInfo.strEmail}}</i-col>
                        <i-col span="6" i-class="col-class"><button class="mini-btn m-x-0 fr"  @click="copy(cardInfo.strEmail,'strEmail')">复制</button></i-col>
                </i-row>
                <i-row i-class="m-b-1"> 
                        <i-col span="3" i-class="col-class font-color-sub">公司</i-col>
                        <i-col span="15" i-class="col-class font-color-title">{{cardInfo.strCompany}}</i-col>
                        <i-col span="6" i-class="col-class"><button class="mini-btn m-x-0 fr"  @click="copy(cardInfo.strCompany,'strCompany')">复制</button></i-col>
                </i-row>
                 <i-row i-class="m-b-1"> 
                        <i-col span="3" i-class="col-class font-color-sub">地址</i-col>
                        <i-col span="15" i-class="col-class font-color-title">{{cardInfo.strCompany}}</i-col>
                        <i-col span="6" i-class="col-class"><button class="mini-btn m-x-0 fr"  @click="copy(cardInfo.strCompany,'strCompany')">复制</button></i-col>
                </i-row>
              </div>
          </div>
          <!-- 名片操作按钮 -->
          <div class="card-wrapper m-b-1 p-b-1">
              <div class="button-btn">
                 
                 <i-row i-class="p-x-2">
                    <i-col span="12" i-class="col-class">
                        <i-button  i-class="card-btn " @click="shareCard" type="ghost" size="small">分享名片</i-button>
                        <i-action-sheet :visible="shareVisible" :actions="shareActions" show-cancel @cancel="shareCancel" @click="shareClickItem" />
                    </i-col>
                    <i-col span="12" i-class="col-class">
                        <i-button i-class="card-btn"  @click="saveBook" type="primary" size="small">存入手机通讯录</i-button>
                    </i-col>
                   
                </i-row>
              </div>
                <div class="look">
                    <i-row i-class="p-x-3 vertical-y">
                    <i-col span="12" i-class="col-class font-mini vertical-y">
                        <span class="font-mini  look-h">{{cardInfo.intHits}}</span>
                        <span class=" look-h">人浏览</span>
                    </i-col>
                    <i-col span="12" i-class="col-class">
                        <div class="fr m-p-1 font-sub text-center" @click="link">
                            <i-icon v-if="cardInfo.isLike" type="praise_fill" size="22"/>
                            <i-icon v-else type="praise" size="22" color="#1c2438"/>
                            <p class="font-mini" >
                                <span class="look-link-f">靠谱</span>
                                <span class="font-title look-link">{{cardInfo.intLikes}}</span>
                            </p>
                        </div>
                        

                    </i-col>
                   
                </i-row>
                </div>
          </div>
          <!-- 我推荐的商品 -->
          <div class="card-wrapper p-x-3 m-b-1 ">
              <div class="title clearfix">
                  <h4 class="font-title fl text-oh bold">我推荐的商品</h4>
                  <span @click="goShopCity" class="font-mini fr text-right" >全部商品<i-icon type="enter" size="12"/></span>
              </div>
              <div class="shop-list clearfix" >
                  <div   @click="goDetails(items.Id,items.Name)" v-for="(items,index) in products" :key="items.id">
                    <div v-if="index >= 0 && index < 2" class="shop-items fl m-b-2 p-b-1">
                         <img :src="items.CoverImage" alt="">
                          <p class="font">
                              {{items.Name}}{{'('+items.ProductDetails+')'}}
                          </p>
                          <span class="font-mini">
                              ¥&nbsp;{{items.SalePrice}}
                          </span>
                    </div>
                     
                  </div>
              </div>
          </div>
          <!-- 个人简介 -->
          <div class="card-wrapper p-x-3 m-b-1 p-b-2">
              <div class="title clearfix"> 
                  <h4 class="font-title fl text-oh bold">我的个人简介</h4>
                  
              </div>
              <div class="font font-color-title">
                 {{ cardInfo.strIntro}}
              </div>
              <!-- 语音介绍 -->
              <!-- <div class="audio clearfix border p-x-2 p-y-1 center-y m-y-2">
                  <div class="audio-icon fl center-a" @click="playAudio">
                      <i class="icon_audio_default" :class="{icon_audio_playing:isPlay}"></i>
                  </div>
                  <div class="audio-cont fl">
                      <p class="font">我的语音介绍</p>
                    
                      <progress class="m-y-1" :percent="percentAudio" stroke-width="2" activeColor="#09BB07"></progress>
                      <p class="clearfix"><span class="fl font-mini">{{playTime.currentTime}}</span> <span class="fr font-mini">{{playTime.duration}}</span></p>
                  </div>
              </div> -->
          </div>
         <!-- 印象标签 -->
         <!-- <div class="card-wrapper p-x-3 m-b-1 p-b-2">
             <div class="title clearfix">
                  <h4 class="font-title fl text-oh bold">我的印象标签</h4>                  
              </div>
                <div class="clearfix">
                      <div  class="tag p-x-1">
                        <span class="font"> 获客神器</span><span class="m-l-1 font-mini font-color-main" style="color:#fff">1030</span>
                        </div>
                        <div  class="tag p-x-1">
                        <span class="font"> 获客神器</span><span class="m-l-1 font-mini font-color-main" style="color:#fff">1030</span>
                        </div>
                  </div>
        </div> -->
        <!-- 我的照片 -->
         <div class="card-wrapper m-b-1 p-b-2">
              <div class="title clearfix  p-x-3">
                  <h4 class="font-title text-oh fl bold">我的照片</h4>                  
              </div>
              <slideFull :imgUrls='cardInfo.images' v-if="cardInfo.images != ''"></slideFull>
              <p v-else class="font-sub text-center p-y-1">照片空空如也</p>
             

      
         </div>
         <!-- open-type="contact" session-from="weapp" -->
         <!-- <button class="send-msg text-center border"   @click="sendInfo">

           <i-icon type="brush" size="18" color="#2d8cf0"/>
           <p class="font-mini" >留言</p>
         </button> -->
          <div class="send-msg text-center border"   @click="openQr">

           <i-icon type="scan" size="18" color="#2d8cf0"/>
           <p class="font-mini" >扫码</p>
         </div>
      <i-divider content="我是有底线的！"></i-divider>
      <i-modal title="提示" :visible="visible1" @ok="handleClose1(true)" @cancel="handleClose1(false)">
          <view>是否扫描加入这家公司?</view>
      </i-modal>
      <i-message id="message" />
  </div>
</template>

<script>
import api from '@/utils/api'
import {addEditLog} from '@/http'
import { mapGetters } from 'vuex'
import slideFull from '@/components/slideFull'
import decode from '@/utils/decode'
import { $Message } from '@/utils/base'

export default {
  data () {
    return {
      tabBar: {
        current: 'homepage'
      },
      innerAudioContext: {},
      percentAudio: 0,
      playTime: {
        duration: '0.00',
        currentTime: '0.00'
      },
      isPlay: false,
      shareVisible: false,
      shareActions: [
        {
          name: '去分享',
          icon: 'share',
          openType: 'share'
        },
        {
          name: '名片画报',
          icon: 'dynamic',
          link: '/pages/madePoster/main'

        }
      ],
      cardInfo: {},
      showInfo: false,
      visible1: false,
      products: ''

    }
  },
  onShareAppMessage () {
    var url = this.$route.path
    return {
      title: this.cardInfo.strName + '名片',
      imageUrl: this.cardInfo.strAvatarUrl,
      path: '/pages/transfer/main?shareOpenId=' + this.shareOpenId + '&target=' + url + '&type=tab',
      success: async res => {
        // console.log(res)
        let Details = this.userInfo.strName + '分享了' + this.shareCardInfo.strName + '的名片'
        let paramData = {'Name': '分享名片', 'Type': '101', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}
        await addEditLog(paramData)
      },
      fail: function (res) {
        console.log(res)
      }
    }
  },
  components: {
    slideFull
  },

  computed: {
    ...mapGetters({
      shareCardInfo: 'shareCardInfo',
      openId: 'openId',
      shareOpenId: 'shareOpenId',
      userInfo: 'userInfo'
    })
  },

  mounted () {
    this.addCardLog()
    this.addCardList()
    this.getCardInfo()
    this.initAudio()
    this.productList()
  },

  methods: {
    async  addCardLog () {
      var Details = this.userInfo.strName + '查看名片' + this.shareCardInfo.strName + '的名片'

      var paramData = {'Name': '查看名片', 'Type': '查看名片&a', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}

      await addEditLog(paramData)
    },
    async  addCardList () {
      var params = {'strOpenId_c': this.openId, 'strOpenId_b': this.shareOpenId, type: 4}
      await api.post_like(params)
    },
    async  getCardInfo () {
      // console.log(this.$store.state.shareOpenId)
      var params = {'strOpenId_c': this.openId, 'strOpenId_b': this.shareOpenId}
      var res = await api.post_card_home(params)
      this.cardInfo = res
      console.log(res)
      this.$store.commit('shareCardInfo', res)
    },
    async link () {
      var params = {'strOpenId_c': this.openId, 'strOpenId_b': this.shareOpenId, type: 2}
      var res = await api.post_like(params)
      if (!this.cardInfo.isLike) {
        var Details = this.userInfo.strName + '点赞了' + this.shareCardInfo.strName + '的名片'

        var paramData = {'Name': '点赞名片', 'Type': '100', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}
        await addEditLog(paramData)
      }

      this.getCardInfo()
    },
    dial (str) {
      this.$wxapi.makePhoneCall({
        phoneNumber: '13553699106'
      }).then(async res => {
        let Details = this.userInfo.strName + '拨打了' + this.shareCardInfo.strName + '的电话'

        let paramData = {'Name': '拨打电话', 'Type': '102', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}
        await addEditLog(paramData)
      }).catch(res => {
        console.log(res)
      })
    },
    copy (str, type) {
      wx.setClipboardData({
        data: str,
        success: async res => {
          switch (type) {
            case 'strEmail':
              var Details = this.userInfo.strName + '复制了' + this.shareCardInfo.strName + '的邮箱'

              var paramData = {'Name': '复制邮箱', 'Type': '103', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}
              await addEditLog(paramData)
              break
            case 'wx':
              var Details = this.userInfo.strName + '复制了' + this.shareCardInfo.strName + '的微信'

              var paramData = {'Name': '复制微信', 'Type': '104', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}
              await addEditLog(paramData)
              break
            case 'strCompany':

              var Details = this.userInfo.strName + '复制了' + this.shareCardInfo.strName + '的公司'
              var paramData = {'Name': '复制公司', 'Type': '复制公司&a', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}

              await addEditLog(paramData)
              // await api.test_Api()
              break
            case 'strAddress':
              var Details = this.userInfo.strName + '复制了' + this.shareCardInfo.strName + '的地址'
              var paramData = {'Name': '复制地址', 'Type': '复制地址&a', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}
              await addEditLog(paramData)
              break
            default:
              break
          }
        },
        fail: function (res) {

        }
      })
    },
    saveBook () {
      wx.addPhoneContact({

        firstName: this.cardInfo.strName,
        mobilePhoneNumber: this.cardInfo.strMobile,
        weChatNumber: this.cardInfo.strMobile,
        workAddressStreet: this.cardInfo.strAddress,
        organization: this.cardInfo.strCompany,
        title: this.cardInfo.strPosition,
        success: async res => {
          var Details = this.userInfo.strName + '保存了' + this.shareCardInfo.strName + '的电话'
          var paramData = {'Name': '保存电话', 'Type': '保存电话&a', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}
          await addEditLog(paramData)
          console.log(res)
        },
        fail: function (res) {
          console.log(res)
        }

      })
    },
    shareCard () {
      wx.showShareMenu({
        withShareTicket: true
      })
      this.shareVisible = true
      // this.$router.push({ path: '/pages/madePoster/main' })
    },
    shareCancel () {
      this.shareVisible = false
    },
    shareClickItem (e) {
      this.shareVisible = false
    },
    initAudio () { // 音频播放
      // debugger
      this.innerAudioContext = wx.createInnerAudioContext()
      // this.innerAudioContext.autoplay = true
      this.innerAudioContext.loop = false
      this.innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    },
    playAudio () {
      // debugger
      if (!this.isPlay) {
        this.innerAudioContext.play()
        this.innerAudioContext.onPlay(() => {
          // console.log('开始播放')
          // console.log(e)
          console.log(this.innerAudioContext.currentTime)
        })
        this.innerAudioContext.onTimeUpdate(() => {
          // console.log('当前音频的长度' + this.innerAudioContext.duration)
          this.playTime.duration = this.innerAudioContext.duration.toFixed(2)

          this.playTime.currentTime = this.innerAudioContext.currentTime.toFixed(2)
          // console.log(this.innerAudioContext.currentTime)
          this.percentAudio = (this.innerAudioContext.currentTime / this.innerAudioContext.duration) * 100
        })
        this.innerAudioContext.onError((res) => {
          console.log(res.errMsg)
          console.log(res.errCode)
        })
        this.innerAudioContext.onEnded(() => {
          this.initAudio()
          this.isPlay = false
          this.percentAudio = 0
          this.playTime.currentTime = '0.00'
        })
        this.isPlay = true
      } else {
        this.innerAudioContext.pause()
        this.isPlay = false
      }
    },
    sendInfo () {
      this.$router.push({path: '/pages/chat/main', query: {id: 'caixia'}})
    },
    openQr () {
      this.visible1 = true
    },
    handleClose1 (bool) {
      this.visible1 = false
      if (bool) {
        this.scanQr()
      }
    },
    scanQr () {
      var _this = this
      this.$wxapi.scanCode({
        scanType: ['qrCode', 'barCode', 'datamatrix', 'pdf417']
      }).then(res => {
        _this.bindCompany(res.result)
      }).catch(res => {

      })
    },
    async bindCompany (res) {
      // res = 'eyJkYXRhIjoiZXlKd1lYSmhiU0k2SW50Y0lrTnZiWEJoYm5sSlpGd2lPbHdpTWx3aUxGd2ljM1J5VFdWMGFHOWtYQ0k2WENKMFlrVmthWFJDYVc1a1EyOXRjR0Z1ZVZ3aUxGd2ljM1J5VDNCbGJrbGtYQ0k2WENKN01IMWNJbjBpTENKMWFXUWlPaUkwT0RRM1JEUkNPUzFCUlVKQ0xUUkZSVU10UVVVMFJpMHpOelUxUkVRelJFUXhSak1pZlE9PSIsIlVybCI6Imh0dHBzOi8veWoua2l5LmNuL0dldERhdGEvR2V0QWpheERhdGEifQ=='
      var data = JSON.parse(decode(res))
      var deCodeData = decode(data.data)
      var deCodeRes = JSON.parse(deCodeData)
      var param = JSON.parse(deCodeRes.param)

      var par = {
        strOpenId: this.openId,
        CompanyId: param.CompanyId
      }
      try {
        await api.post_bindCompany(par)
        $Message({
          content: '成功加入公司',
          type: 'success'
        })
      } catch (error) {
        $Message({
          content: '加入失败',
          type: 'error'
        })
      }
    },
    async productList () {
      var data = {'@CompanyId': this.shareCardInfo.CompanyId}

      var res = await api.get_Product_info(data)
      this.products = res.dgData

      // console.log(this.products)
    },
    goShopCity () {
      this.$router.push({path: '/pages/shopCity/main', isTab: true})
    },
    async goDetails (id, name) {
      this.$router.push({path: '/pages/shopDetails/main', query: {id: id}})
      var Details = this.userInfo.strName + '查看了' + this.shareCardInfo.strName + '公司商城的' + name

      var paramData = {'Name': '查看了产品', 'Type': '106', 'Details': Details, 'Controller': 'find', 'Action': 'index', 'UserId': this.openId, 'OperatedUserId': this.shareOpenId}

      await addEditLog(paramData)
    }

  }
}
</script>
<style lang='scss' scoped>
.card-wrapper {
  background: #ffffff;
}
.card-header {
  position: relative;
  box-shadow: 0 6px 6px -3px rgba(90, 88, 88, 0.2),
    0 10px 14px 1px rgba(90, 88, 88, 0.14),
    0 4px 18px 3px rgba(90, 88, 88, 0.12);
}
.card-img {
  width: 100%;

  height: 500rpx;
}
.card-name {
  max-width: 40%;
}
.card-company-logo {
  width: 60rpx;
  height: 60rpx;
  border-radius: 4px;
  img{
    width: 100%;height: 100%;
  }
}
.card-main-info-l {
  float: left;
  width: calc(100% - 60rpx);
  img {
    width: 100%;
    height: 100%;
  }
}
.card-job-title {
  color: #495060;
}
.card-name {
  vertical-align: bottom;
}
.card-list-btn {
  position: absolute;
  top: -24rpx;
  left: -48rpx;
  background: rgba(61, 59, 59, 0.6);
  border-top-right-radius: 32rpx;
  border-bottom-right-radius: 32rpx;
  padding: 0 24rpx;
}
.show-all-content .col-class {
  line-height: 48rpx;
  height: 48rpx;
}
.show-all-card {
  background: #ffffff;
}

.mini-btn {
  border: 2rpx solid #2d8cf0;
  color: #2d8cf0;
  display: block;
  height: 48rpx;
  line-height: 46rpx;
  padding: 0 6rpx;
  width: 88rpx;
  font-size: 24rpx;
}
.card-btn {
  width: 50% !important;
}
.look-link {
  font-size: 20rpx;
}
.look {
  .look-link-f {
    font-weight: lighter;
    margin-right: 4px;
  }
}
.look-h {
  height: 38px;
  line-height: 38px;
}
.title {
  h4 {
    width: 70%;
    line-height: 38px;
  }
  span {
    width: 30%;
    line-height: 38px;
  }
}
.shop-items {
  width: calc(50% - 8px);
  margin-right: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  img {
    background-color: #2d8cf0;
    width: 100%;
    height: 150px;
  }
  p {
    padding: 0 8px;
    line-height: 18px;
    height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  span {
    padding: 0 8px;
    line-height: 18px;
  }
}
.shop-items:nth-child(2n) {
  margin: 0;
  margin-left: 8px;
}
.icon_audio_default {
  background: transparent url("../../../static/assets/home/iconloop.png")
    no-repeat 0 0;
  width: 18px;
  height: 25px;
  vertical-align: middle;
  display: inline-block;
  -webkit-background-size: 54px 25px;
  background-size: 54px 25px;
  background-position: -36px center;
}

.icon_audio_playing {
  background: transparent url("../../../static/assets/home/iconloop.png")
    no-repeat 0 0;
  width: 18px;
  height: 25px;
  vertical-align: middle;
  display: inline-block;
  -webkit-background-size: 54px 25px;
  background-size: 54px 25px;
  -webkit-animation: audio_playing 1s infinite;
  background-position: 0px center;
  display: inline-block;
}
@-webkit-keyframes audio_playing {
  30% {
    background-position: 0px center;
  }
  31% {
    background-position: -18px center;
  }
  61% {
    background-position: -18px center;
  }
  61.5% {
    background-position: -36px center;
  }
  100% {
    background-position: -36px center;
  }
}
.audio {
  border-radius: 4px;
}
.audio-icon {
  border: 1px solid #19be6b;
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.audio-progress {
  background-color: #19be6b;
}
.audio-cont {
  width: calc(100% - 35px);
  padding-left: 16px;
}
.tag {
  margin-left: 8px;
  display: inline-block;
  line-height: 20px;
  height: 20px;
  border-radius: 2px;
  background: #95de64;
  span {
    line-height: 20px;
    height: 20px;
  }
}
.tag:first-child {
  margin-left: 0;
}
.my-img-items{
    width: 100%;
    height: 150px;
    background: #2d8cf0;
    img{
        width: 100%;
        height: auto;

    }
}
.send-msg{
  width: 42px;
  height: 42px;
  line-height: 18px;
  padding: 0;
  border-radius: 50%;
  position: fixed;
  right: 24px;
  bottom: 100px;
  z-index: 2;
  background: #fff;
}

</style>