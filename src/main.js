import Vue from 'vue'
import App from './App'

import './common/css/index.scss'

// 代码兼容转化
import WXAPI from './transfer/src/WXP.js'
import MpvueRouterPatch from 'mpvue-router-patch'
import store from './store/index'
Vue.config.productionTip = false

App.mpType = 'app'
// Vue.use(Router)
Vue.use(WXAPI)
Vue.use(MpvueRouterPatch)
// Vue.use(fly)
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      '^pages/cardlist/main'
      // '^pages/chat/main'
      // Will be filled in webpack
    ],
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#f8f8f9',
      navigationBarBackgroundColor: '#7f81f8',
      navigationBarTitleText: '体验名片',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#80848f',
      selectedColor: '#2d8cf0',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/home/main',
        text: '名片',
        iconPath: 'static/assets/tabar/card.png',
        selectedIconPath: 'static/assets/tabar/cardSele.png'
      }, {
        pagePath: 'pages/shopCity/main',
        text: '商城',
        iconPath: 'static/assets/tabar/shop.png',
        selectedIconPath: 'static/assets/tabar/shopsele.png'
      }, {
        pagePath: 'pages/find/main',
        text: '动态',
        iconPath: 'static/assets/tabar/dynamic.png',
        selectedIconPath: 'static/assets/tabar/dynamicsele.png'
      }, {
        pagePath: 'pages/officialWeb/main',
        text: '官网',
        iconPath: 'static/assets/tabar/office.png',
        selectedIconPath: 'static/assets/tabar/officesele.png'
      }]
    }
  }

}
