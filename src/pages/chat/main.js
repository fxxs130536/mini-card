import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()
export default {
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '电子名片',
    'usingComponents': {
      'i-icon': '../../dist/icon/index'
    }
  }
}