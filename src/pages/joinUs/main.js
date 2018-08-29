import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()
export default {
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '招聘详情',
    'usingComponents': {
      'i-button': '../../dist/button/index'
    }
  }
}
