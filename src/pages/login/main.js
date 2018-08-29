import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '授权登录',
    'usingComponents': {
      'i-button': '../../dist/button/index',
      'i-spin': '../../dist/spin/index'
    }

  }
}
