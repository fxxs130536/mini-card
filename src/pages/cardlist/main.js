import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()
export default {
  config: {
    enablePullDownRefresh: true,
    navigationBarTitleText: '名片列表',
    'usingComponents': {
      'i-card': '../../dist/card/index',
      'i-icon': '../../dist/icon/index',
      'i-spin': '../../dist/spin/index'

    }
  }
}
