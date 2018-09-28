import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()
export default {
  config: {
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark',
    navigationBarTitleText: '官网',
    'usingComponents': {
      'i-panel': '../../dist/panel/index',
      'i-card': '../../dist/card/index',
      'i-icon': '../../dist/icon/index',
      'i-row': '../../dist/row/index',
      'i-col': '../../dist/col/index',
      'i-button': '../../dist/button/index'
    }
  }
}
