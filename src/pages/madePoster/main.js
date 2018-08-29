import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()
export default {
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '名片海报',
    'usingComponents': {
      'canvasdrawer': '../../dist/canvasdrawer/canvasdrawer',
      'i-button': '../../dist/button/index'
    }
  }
}
