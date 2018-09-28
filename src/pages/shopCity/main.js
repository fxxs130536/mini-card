import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()
export default {
  config: {
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark',
    navigationBarTitleText: '商城',
    'usingComponents': {
      'i-icon': '../../dist/icon/index',
      'i-divider': '../../dist/divider/index'
    }
  }
}
