import fly from '../utils/request'
import encode from '../utils/encode'
import qs from 'qs'
export function addEditLog (paramData) {
  const data = Object.assign({
    uid: '2DA8DF88-E8F3-4BC5-ABF0-111843ABACF1', key: 'RyAkcFaz6KCKdW06EQKFHNEISQDDA', strSysMac: '30-5A-3A-E4-4F-14'
  }, {'param': paramData})

  // console.log(data)
  const en = encode(JSON.stringify(data))
  return new Promise((resolve, reject) => {
    fly.post('/Mobile/GetData/GetAjaxData', {data: en}).then((res) => {
      try {
        // console.log(res)
        if (res.data.success) {
          resolve(res.data.data)
        } else if (res.data.result === 'ok') { // res.data.map.result
          resolve(res.data)
        } else {
          wx.showToast({
            title: res.data.msg ? res.data.msg : res.data.map.errMsg,
            icon: 'none'
          })
          reject(res.data)
        }
      } catch (error) {
        wx.showToast({
          title: '网络异常',
          icon: 'none'
        })
      }
    }).catch(res => {
      wx.showToast({
        title: '服务器维护,请稍等',
        icon: 'none'
      })
      reject(res)
    })
  })
}
