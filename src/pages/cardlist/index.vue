<!-- 名片列表 -->
<template>
  <div class='page app'>
      <ul>
          
          <li class="card-items p-b-1 " v-for="(items,index) in cardList" :key="index">
              <div class="font-title font m-x-2   p-y-1"><span></span><span></span></div>
                <div class="card-cont"  @click="linkCard(items.strOpenId)">
                    <i-card  :title="items.strName" :extra="items.strCompany" :thumb="items.strAvatarUrl">
                    <view slot="content">
                        <p class="m-y-2 font-color-title font">{{items.strPosition}}<i-icon class="fr" type="collection_fill" size="20" color="#ff9900"/></p>
                        <p class="font">{{items.strMobile}}</p>
                        <p class="font">{{items.strEmail}}</p>
                    </view>
                    <view slot="footer" class="clearfix">
                        <div><span class="font-color-main card-footer fl">NO.{{index + 1}}</span>
                        <span class="fr card-footer card-footer-r " @click="sdads"><i-icon type="more" size="28"/>
                            <div class="card-more" v-show=false>
                                <p class="p-x-2 p-y-1 text-center center-a"><i-icon type="collection" size="20" color="#ff9900"/>名片标星</p>
                                <p class="p-x-2 p-y-1 text-center center-a"><i-icon type="offline" size="20"/>屏蔽名片</p>
                               
                            </div>
                        </span>
                        </div>
                    </view>
                    </i-card>
                </div>
                
          </li>
      </ul>
      


    <i-spin size="large" fix v-if="spinShow">加载中...</i-spin>
  </div>
</template>

<script>
import api from '@/utils/api'
// import store from '@/store/store'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      show: false,
      link: true,
      cardList: '',
      spinShow: true
    }
  },

  components: {},

  computed: {
    ...mapGetters({
      openId: 'openId'
    })
  },

  created () {
  },
  mounted () {
    this.lookCard()
  },

  methods: {
    async lookCard () {
      this.spinShow = true
      // wx.showLoading({ title: '正在加载' })
      var wxCode = await api.wxLogin()
      var openId = await api.wxOpenId(wxCode.code)
      // this.$store.commit('inOpenId', openId)
      let data = { '@strOpenId_c': openId.openid, '@type': 4 }
      var res = await api.post_look_card_list(data)

      // if (res.data.length === 0) {
      //   this.linkCard(openId.openid)
      // } else {
      //   this.cardList = res.data
      // }
      // console.log(res.data)
      this.cardList = res.data
      this.getUser()
    },
    async getUser () {
      var wxCode = await api.wxLogin()

      var openId = await api.wxOpenId(wxCode.code)
      var params = {'strOpenId_c': openId.openid, 'strOpenId_b': openId.openid}
      var resdata = await api.post_card_home(params)
      // console.log(resdata)
      this.cardList.unshift(resdata)
      // wx.hideLoading()
      this.spinShow = false
    },
    linkCard (shareId) {
      this.$store.commit('shareOpenId', shareId)
      // if (shareId.toUpperCase() === this.openId.toUpperCase()) {
      //   this.$router.push({ path: '/pages/admin/main', reLaunch: true })
      //   return
      // }
      this.$router.push({ path: '/pages/home/main', isTab: true })
    }
  }
}
</script>



<style lang='scss' scoped>
.card-cont {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2) 0 2px 2px rgba(0, 0, 0, 0.2);
}
.card-footer-r {
  position: relative;
  z-index: 2;
}
.card-more {
  width: 120px;
  position: absolute;
  background: #fff;
  right: -16px;
  bottom: -176rpx;
  border-radius: 4px;
  z-index: 2;
}
.close-card {
  position: relative;
}
.close-card::after {
  position: absolute;
  content: "此名片已屏蔽";
  display: inline-block;
  top: 0;
  left: 16px;
  bottom: 0;
  right: 16px;
  color: #fff;
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background: rgba($color: #bbbec4, $alpha: 0.8);
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  z-index: 1;
}
</style>