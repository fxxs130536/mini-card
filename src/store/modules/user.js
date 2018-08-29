
const user = {
  state: {
    wxInfo: null,
    userInfo: {},
    openId: '',
    appId: '',
    sendBtnShow: false,
    shareOpenId: '',
    shareCardInfo: {}
  },
  mutations: {
    inUserInfo: (state, data) => {
      const obj = state
      if (data != '' && data != undefined) {
        wx.setStorageSync('userInfo', data)
      }
      obj.userInfo = data || wx.getStorageSync('userInfo')
    },
    inWxInfo: (state) => {
      const obj = state
    },
    inOpenId: (state, data) => {
      const obj = state
      if (data != '' && data != undefined) {
        wx.setStorageSync('openId', data)
      }
      obj.openId = data || wx.getStorageSync('openId')
    },
    inSendBtn: (state, data) => {
      const obj = state
      obj.inSendBtn = data
    },
    shareOpenId: (state, data) => {
      state.shareOpenId = data
    },
    shareCardInfo: (state, data) => {
      state.shareCardInfo = data
    }
  },
  actions: {
    inUserInfo ({commit}) {
      commit('inUserInfo')
    }
  }
}

export default user
