import config from '../../main'

export default {
  install (Vue, options) {
    Vue.prototype.$router = {
	        // 保留当前页面，再新打开
	        open (options) {
	        	if (options.type == 'PUSH') { // 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
	        		var strPar = ''
		        	if (options.params) {
		        		var params = options.params.params
		        		strPar += '?'
		        		for (var key in params) {
		        			strPar += key + '=' + params[key] + '&'
		        		}
		        	}
		            wx.navigateTo({
		              url: options.url + strPar,
		              name: options.name,
		              type: options.type
		            })
	        	} else if (options.type == 'NEW') { // 关闭当前页面，跳转到应用内的某个页面
	        		wx.redirectTo({
					  url: options.url
          })
	        	} else if (options.type == 'TAB') { // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
	        		wx.switchTab({
	        			url: options.url
	        		})
	        	}
	        },
	        back () {
        wx.navigateBack({
          delta: 1
        })
	        },
	        getParams () {
	            return new Promise((resolve, reject) => {
	                _com.contacts(({ status, errorMsg, data }) => {
	                   status === 0 ? resolve(data) : reject({ status, errorMsg, data })
	                })
	            })
	        },
	        refresh () {

	        },
	        setBackParams () {

	        }
	    }
  }

}

// Vue.use(router)
