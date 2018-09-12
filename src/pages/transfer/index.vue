 <!-- 用来获取用户个人信息确认、和解决分享taba页面无法传参的问题 中转页面-->
<template>
  
  <div class="page app">
    	<div class="login-img">
		    <img src="/../../static/assets/login.png" class="login-src">
	</div>
    <div v-if="getInfoShow" class="getInfo">
          <!-- <button v-if="canIUse" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button> -->
          <i-button v-if="canIUse" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" type="primary">授权登录</i-button>
          

          <view v-else>请升级微信版本</view>
    </div>
    <i-spin v-else size="large" fix ></i-spin>
  </div>
</template>

<script>
// import store from '@/store/store'
import api from '@/utils/api'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      canIUse: false,
      getInfoShow: false

    }
  },
  computed: {
    ...mapGetters({
      openId: 'openId'
    })
  },
  mounted () {
    this.canIUse = wx.canIUse('button.open-type.getUserInfo')
    if (this.$route.query.scopeInfo) {
      this.getInfoShow = true
      wx.setNavigationBarTitle({
        title: '授权登录'
      })
    } else {
      wx.setNavigationBarTitle({
        title: '正在加载'
      })
      this.backPath()
    }
  },
  methods: {
    bindGetUserInfo: function (e) {
      if (e.mp.detail.userInfo) {
        this.backPath()
        // 用户按了允许授权按钮
      } else {
        // 用户按了拒绝按钮
        console.log(e.mp.detail.errMsg)
      }
    },
    backPath () {
      const query = this.$route.query
      console.log(query.target)
      let para = {}
      if (query.para) {
        para = query.para

        para = JSON.stringify(para)
        console.log(para)
      }
      if (query.shareOpenId) {
        this.$store.commit('shareOpenId', query.shareOpenId)
      }
      if (query.shareOpenId.toUpperCase() === this.openId.toUpperCase()) {
        this.$router.push({ path: '/pages/admin/main', reLaunch: true })
        return
      }
      switch (query.type) {
        case 'new':
          this.$router.push({ path: query.target, reLaunch: true })
          break
        case 'tab':
          this.$router.push({ path: query.target, isTab: true })
          break
        default:
          this.$router.push({ path: query.target, reLaunch: true, query: para })
          break
      }
    }
  },
  created () {

  }
}
</script>
<style>
	.login-img {
		text-align: center;
		margin-top: 150rpx;
	}
.app{
  position: relative;
}
	.getInfo{
    width: 100%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%)
  }
</style>
