import axios from './axios'
import {getCurrentPageUrlWithArgs} from './index'
let api = {
  // 获取图片信息
  wxGetImageInfo: (options) => {
    return new Promise((resolve, reject) => {
      wx.getImageInfo({
        src: options.src,
        success: res => resolve(res),
        fail: err => {
          reject(err)
        }
      })
    })
  },

  // 打开地图
  wxOpenLocation: (options) => {
    wx.openLocation({
      name: options.name || '',
      address: options.address || '',
      latitude: options.latitude,
      longitude: options.longitude,
      scale: options.scale || 28
    })
  },
  // 获取权限
  wxGetAccess: () => {
    wx.showModal({
      title: '提示',
      content: '你已经取消授权，点击确定获取授权,否则该功能受到限制',
      success: function (res) {
        if (res.confirm) {
          wx.openSetting({

          })
        }
      }
    })
  },
  //  ,传strId是修改，不传是新增 intType : 1 头像 2用户展示图片
  wxUploadFile: (options) => {
    return new Promise((resolve, reject) => {
      if (options.filePath) {
        wx.uploadFile({
          url: axios.domain + '/Upload/UpLoadImgs',
          filePath: options.filePath,
          name: 'file',
          formData: options.formData,
          success: res => {
            var res = JSON.parse(res.data)
            if (res.success) {
              resolve(res.data)
            } else {
              wx.showToast({
                title: res.msg,
                icon: 'none'
              })
            }
          },
          fail: res => reject(res)
        })
      } else {

      }
    })
  },
  // showActionSheet
  wxShowActionSheet: (itemList) => {
    return new Promise((resolve, reject) => {
      wx.showActionSheet({
        itemList: itemList,
        success: res => resolve(res.tapIndex),
        fail: function (res) {
        }
      })
    })
  },
  // 添加联系人
  wxAddPhoneContact: (options) => {
    wx.addPhoneContact(options)
  },
  // 验证手机号码
  isPoneAvailable: (str) => {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!myreg.test(str)) {
      return false
    } else {
      return true
    }
  },
  wxGetSystemInfo: (options) => {
    return new Promise((resolve, reject) => {
      wx.getSystemInfo({
        success: function (res) {
          resolve(res)
        }
      })
    })
  },
  // icon:loading,success
  wxToast: (options) => {
    wx.showToast({
      title: options.title || '',
      icon: options.icon || 'none'
    })
  },
  wxDownloadFile: (strUrl) => {
    return new Promise((resolve, reject) => {
      wx.downloadFile({
        url: strUrl,
        success: function (res) {
          resolve(res.tempFilePath)
        },
        fail: function (err) {
        }
      })
    })
  },
  // 选择位置
  wxChooseLocation: () => {
    return new Promise((resolve, reject) => {
      wx.chooseLocation({
        success: res => resolve(res),
        fail: res => reject(res)
      })
    })
  },

  wxGetLocation: () => {
    return new Promise((resolve, reject) => {
      wx.getLocation({
        type: 'gcj02',
        success: res => resolve(res),
        fail: res => reject(res)
      })
    })
  },
  wxLogin: () => {
    return new Promise((resolve, reject) => {
      wx.login({
        success: res => resolve(res),
        fail: res => reject(res)
      })
    })
  },
  wxGetUserInfo: (options) => {
    return new Promise((resolve, reject) => {
      // 查看是否授权
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) { //  已经授权登录
            wx.getUserInfo({
              success: res => resolve(res),
              fail: res => reject(res)
            })
          } else {
            var url = getCurrentPageUrlWithArgs()
            // console.log(url)
            wx.redirectTo({url: '/pages/transfer/main?scopeInfo=false&target=/' + url + ''})
          }
        }
      })
    })
  },
  // 主要解决返回的数据有map
  util_update_list: (data, lists) => {
    data.map(item => {
      if (item.map) {
        lists.push(item.map)
      } else {
        lists.push(item)
      }
    })
  },
  // 删除图片 , 需要穿'rowState' : 'D' 和 strId ， intType : 1 头像 2用户展示图片
  del_Image: (data) => axios.postApiData({
    data,
    url: '/Upload/UpLoadImgs',
    type: 'application/x-www-form-urlencoded'
  }),
  // 获取微信的OpenId，js_code必传
  wxOpenId: (data) => axios.postApiData({
    data: {
      'js_code': data
    },
    url: '/WeChat/GetOpenId'
  }),
  // 获取用户的信息,$openId必传
  // Get_UserInfo: (data) => axios.getAjaxData(data , 'Get_UserInfo'),
  Get_UserInfo: (data) => axios.getAjaxData(data, undefined, 'ae2bdd9f-a5d2-4110-b01e-c66e2e10d105'),
  // 登录(可修改信息)接口,strOpenId必传
  post_login: (data) => axios.getAjaxData(Object.assign(data, api.get_appId), undefined, '7b950fca-716c-46e2-8a2f-ae753fb72bfe'),
  // 排行榜
  get_rankingList: (data) => axios.getAjaxData(data, undefined, 'fc2d9e61-0139-4785-a2c8-ffbd7b8127ec'),
  // 查看他人名片 strOpenId_c 当前用户openId(本人) 	, strOpenId_b 操作对象
  get_otherCard: (data) => axios.getAjaxData(data, undefined, '82affbc4-f8bd-429b-9ea7-5c6e2067eda5'),
  // 点赞收藏
  post_like: (data) => axios.getAjaxData(data, undefined, '0ebc66ee-9479-43a1-8bfd-54ba70bff33b'),
  // 查看列表人气、点赞、收藏列表
  get_likeList: (data) => axios.getAjaxData(data, 'Get_InteractionDetail'),
  // 看过的列表，type：1人气，2点赞，3收藏
  get_card_List: (data) => axios.getAjaxData(data, undefined, 'db6dab05-b6ea-48f4-8e4d-60a9b4278b90'),
  // 反馈
  post_feedback: (data) => axios.getAjaxData(data, undefined, '139d5995-8cde-4992-b9b4-25a8f1f49042'),
  // 获取文章列表
  get_PropagandaColumn: (data) => axios.getAjaxData(data, 'Get_PropagandaColumn', undefined),
  // 通话记录
  post_Call: (data) => axios.getAjaxData(data, undefined, '2334e2da-c1b8-423b-b90b-3d0d0cf21c53'),
  // 查看通话记录
  get_CallLog: (data) => axios.getAjaxData(data, 'Get_CallLog'),
  // 小程序登录网页
  get_author_login: (data) => axios.postApiData({
    data,
    url: '/Mobile/GetData/ConAuthorTest'
  }),
  get_data: (data) => axios.getApiData(data),
  get_qrCode: (data) => axios.getQrCode(data),
  // 是否是已经审核通过
  // get_isOnline : (data) => {}
  // 入驻企业
  post_company_save: (data) => axios.getAjaxData(data, undefined, '5d9fe3c1-9e7a-4e26-933d-408aea4e56b7'),
  // 加载企业名录
  get_company_list: (data) => axios.getAjaxData(data, undefined, 'aafe4c37-8e66-458e-8402-85f32b1e53c3'),
  // appid
  get_appId: { 'smallAppId': 'wx9c20c7365b5c702f', 'smallAppSecret': 'c210590b385d59b529ce3f39e430f250' },
  //  查询名片列表
  post_look_card_list: (data) => axios.getAjaxData(data, undefined, 'db6dab05-b6ea-48f4-8e4d-60a9b4278b90'),
  // 查看名片首页
  post_card_home: (data) => axios.getAjaxData(data, undefined, '82affbc4-f8bd-429b-9ea7-5c6e2067eda5'),
  // 添加操作日志
  post_aad_log: (data) => axios.getAjaxData(data, undefined, '2DA8DF88-E8F3-4BC5-ABF0-111843ABACF1'),
  // 查询产品信息

  get_Product_info: (data) => axios.getAjaxData(data, 'Get_VCarProduct'),
  // 查询公司信息
  Get_VCarCompany: (data) => axios.getAjaxData(data, 'Get_VCarCompany'),
  // 绑定公司二维码
  post_bindCompany: (data) => axios.getAjaxData(data, 'tbEditBindCompany', '4847D4B9-AEBB-4EEC-AE4F-3755DD3DD1F3'),
  // 雷达信息
  Get_OperationLogsTime: (data) => axios.getAjaxData(data, 'Get_OperationLogsTime'),
  Get_OperationLogsBehavior: (data) => axios.getAjaxData(data, 'Get_OperationLogsBehavior'),
  Get_OperationLogsPeople: (data) => axios.getAjaxData(data, 'Get_OperationLogsPeople'),
  // 生成公司二维码
  Get_CompanyCode: (data) => axios.getAjaxData(data, 'getBindCompanyCode', '6353C3BD-147E-464E-B7EE-A86D1B951541')

}

export default api
