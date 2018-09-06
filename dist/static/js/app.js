global.webpackJsonp([2],{

/***/ 103:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_minapp_api_promise__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_minapp_api_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_minapp_api_promise__);


/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue, options) {
    Vue.prototype.$wxapi = __WEBPACK_IMPORTED_MODULE_0_minapp_api_promise___default.a;
  }
});

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_user__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(108);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    user: __WEBPACK_IMPORTED_MODULE_2__modules_user__["a" /* default */]
  },
  getters: __WEBPACK_IMPORTED_MODULE_3__getters__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var user = {
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
    inUserInfo: function inUserInfo(state, data) {
      var obj = state;
      if (data != '' && data != undefined) {
        wx.setStorageSync('userInfo', data);
      }
      obj.userInfo = data || wx.getStorageSync('userInfo');
    },
    inWxInfo: function inWxInfo(state) {
      var obj = state;
    },
    inOpenId: function inOpenId(state, data) {
      var obj = state;
      if (data != '' && data != undefined) {
        wx.setStorageSync('openId', data);
      }
      obj.openId = data || wx.getStorageSync('openId');
    },
    inSendBtn: function inSendBtn(state, data) {
      var obj = state;
      obj.inSendBtn = data;
    },
    shareOpenId: function shareOpenId(state, data) {
      state.shareOpenId = data;
    },
    shareCardInfo: function shareCardInfo(state, data) {
      state.shareCardInfo = data;
    }
  },
  actions: {
    inUserInfo: function inUserInfo(_ref) {
      var commit = _ref.commit;

      commit('inUserInfo');
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (user);

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getters = {
  wxInfo: function wxInfo(state) {
    return state.user.wxInfo;
  },
  userInfo: function userInfo(state) {
    return state.user.userInfo;
  },
  openId: function openId(state) {
    return state.user.openId;
  },
  appId: function appId(state) {
    return state.user.appId;
  },
  sendBtnShow: function sendBtnShow(state) {
    return state.user.sendBtnShow;
  },
  shareOpenId: function shareOpenId(state) {
    return state.user.shareOpenId;
  },
  shareCardInfo: function shareCardInfo(state) {
    return state.user.shareCardInfo;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_css_index_scss__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_css_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_css_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transfer_src_WXP_js__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_index__ = __webpack_require__(106);





// 代码兼容转化



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';
// Vue.use(Router)
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3__transfer_src_WXP_js__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);
// Vue.use(fly)
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_5__store_index__["a" /* default */];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    pages: ['^pages/cardlist/main'
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

});

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(60);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(59)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d8846ef", Component.options)
  } else {
    hotAPI.reload("data-v-4d8846ef", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 59:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_js__ = __webpack_require__(34);







/* harmony default export */ __webpack_exports__["a"] = ({
  onLoad: function onLoad() {},
  created: function created() {
    this.$store.commit('inUserInfo');
    this.wxLogin();
  },

  methods: {
    wxLogin: function wxLogin() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var wxCode, openId, openIdCode, par, userInfo;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].wxLogin();

              case 2:
                wxCode = _context.sent;
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].wxOpenId(wxCode.code);

              case 5:
                openId = _context.sent;
                openIdCode = openId.openid;
                par = {
                  'strOpenId': openIdCode
                };

                _this.$store.commit('inSendBtn', openId.isSend);
                _context.prev = 9;
                _context.next = 12;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].wxGetUserInfo();

              case 12:
                userInfo = _context.sent;

                // 如果不是老用户，添加姓名和头像
                if (!openId.isOld) {
                  par = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(par, {
                    strName: userInfo.userInfo.nickName
                  });
                  par = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(par, {
                    strAvatarUrl: userInfo.userInfo.avatarUrl
                  });
                  par = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(par, {
                    strBackground: userInfo.userInfo.avatarUrl
                  });
                }
                _this.loginFn(par);
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](9);

                _this.loginFn(par);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[9, 17]]);
      }))();
    },
    loginFn: function loginFn(par) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].post_login(par);

              case 2:
                data = _context2.sent;


                _this2.$store.commit('inUserInfo', data);
                _this2.$store.commit('inOpenId', par.strOpenId);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }
});

/***/ })

},[34]);
//# sourceMappingURL=app.js.map