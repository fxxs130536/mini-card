import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()
export default {
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '名片',
    'usingComponents': {
      'i-row': '../../dist/row/index',
      'i-col': '../../dist/col/index',
      'i-icon': '../../dist/icon/index',
      'i-button': '../../dist/button/index',
      'i-divider': '../../dist/divider/index',
      'i-load-more': '../../dist/load-more/index',
      'i-action-sheet': '../../dist/action-sheet/index'

    }
  }
}
