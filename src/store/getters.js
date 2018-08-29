const getters = {
  wxInfo: state => state.user.wxInfo,
  userInfo: state => state.user.userInfo,
  openId: state => state.user.openId,
  appId: state => state.user.appId,
  sendBtnShow: state => state.user.sendBtnShow,
  shareOpenId: state => state.user.shareOpenId,
  shareCardInfo: state => state.user.shareCardInfo
}
export default getters
