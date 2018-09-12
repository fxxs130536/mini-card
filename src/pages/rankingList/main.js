import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()
export default {
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '排行榜',
    'usingComponents': {
      'i-tabs': '../../dist/tabs/index',
      'i-tab': '../../dist/tab/index',
      'i-panel': '../../dist/panel/index'
    }
  }
}
