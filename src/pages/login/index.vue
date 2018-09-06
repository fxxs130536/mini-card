<template>
  <div class="page">
	<div class="login-img">
		<img :src="imgsrc" class="login-src">
	</div>

    <div class="weui-btn-area sub" >
      <button class="weui-btn btn-defalut" hover-class="btn-hover" @click="login">登录</button>
    </div>
    <div class="weui-btn-area sub" >
      <button  class="weui-btn " hover-class="btn-hover" @click="backHome">返回首页</button>
    </div>
  </div>
</template>

<script>
import api from '@/utils/api'
import { mapGetters } from 'vuex'
export default {
  data () {
  	return {
  		imgsrc: '../../static/assets/login.png',
  		scene: ''
  	}
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
    var scene = this.$route.query
    this.scene = scene.scene
  },
  methods: {
    async login () {
      var _this = this
      var par = {
        strOpenId: this.openId,
        scene: this.scene
      }
      wx.showLoading({title: '正在登录网页'})
      var data = await api.get_author_login(par)
      wx.hideLoading()
      try {
        api.wxToast({title: '登录网页成功', icon: 'success'})
        setTimeout(function () {
          _this.backHome()
        }, 2000)
      } catch (error) {
        api.wxToast({title: '登录网页失败' })
      }
    },
    backHome () {
      this.$router.push({ path: '/pages/home/main', isTab: true })
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
	.login-src {
		/*position: absolute;*/

	}
</style>
