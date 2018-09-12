import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()
export default {
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '编辑名片',
    'usingComponents': {
      'i-panel': '../../dist/panel/index',
      'i-cell-group': '../../dist/cell-group/index',
      'i-cell': '../../dist/cell/index',
      'i-input': '../../dist/input/index',
      'i-button': '../../dist/button/index',
      'i-icon': '../../dist/icon/index',
      'i-avatar': '../../dist/avatar/index'
    }
  }
}
