import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()
export default {
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '名片管理',
    'usingComponents': {
      'i-tab-bar': '../../dist/tab-bar/index',
      'i-tab-bar-item': '../../dist/tab-bar-item/index',
      'i-icon': '../../dist/icon/index',
      'i-row': '../../dist/row/index',
      'i-col': '../../dist/col/index',
      'i-tabs': '../../dist/tabs/index',
      'i-tab': '../../dist/tab/index',
      'i-card': '../../dist/card/index',
      'i-avatar': '../../dist/avatar/index',
      'i-cell-group': '../../dist/cell-group/index',
      'i-cell': '../../dist/cell/index',
      'i-collapse': '../../dist/collapse/index',
      'i-collapse-item': '../../dist/collapse-item/index',
      'i-progress': '../../dist/progress/index',
      'i-button': '../../dist/button/index',
      'i-divider': '../../dist/divider/index'
    }
  }
}
