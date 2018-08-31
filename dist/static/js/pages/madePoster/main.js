global.webpackJsonp([7],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(156);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '名片海报',
    'usingComponents': {
      'canvasdrawer': '../../dist/canvasdrawer/canvasdrawer',
      'i-button': '../../dist/button/index'
    }
  }
});

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6202c632_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(159);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(157)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6202c632"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6202c632_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\madePoster\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6202c632", Component.options)
  } else {
    hotAPI.reload("data-v-6202c632", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_api__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(5);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      qrCodeImg: '',
      cardInfo: {},
      painting: {},
      paintingIndex: 0,
      paintingList: [],
      shareImage: '',

      mode: 'normal'

    };
  },


  components: {},

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapGetters */])({
    shareCardInfo: 'shareCardInfo',
    shareOpenId: 'shareOpenId',
    openId: 'openId',
    userInfo: 'userInfo'

  })),

  mounted: function mounted() {
    console.log(this.shareCardInfo);
    this.paintingFn();
    this.qrCodeFn();
    this.eventDraw();
  },


  methods: {
    paintingFn: function paintingFn() {
      this.paintingList = [{
        width: 375,
        height: 575,
        clear: true,
        views: [{
          type: 'rect',
          background: '#ffffff',
          top: 0,
          left: 0,
          width: 375,
          height: 575
        }, { // 头像
          type: 'image',
          url: this.shareCardInfo.strBackground,
          top: 20,
          left: 0,
          width: 375,
          height: 275
        }, { // 名称
          type: 'text',
          content: this.shareCardInfo.strName,
          fontSize: 16,
          lineHeight: 22,
          height: 22,
          color: '#1c2438',
          textAlign: 'left',
          top: 315,
          left: 20,
          width: 120,
          MaxLineNumber: 1,
          breakWord: true,
          bolder: true
        }, // 职位
        {
          type: 'text',
          content: this.shareCardInfo.strPosition,
          fontSize: 14,
          lineHeight: 22,
          height: 22,
          color: '#495060',
          textAlign: 'left',
          top: 340,
          left: 20,
          width: 80,
          MaxLineNumber: 1,
          breakWord: true,
          bolder: false
        }, { // 公司头像
          type: 'image',
          url: this.shareCardInfo.strAvatarUrl,
          top: 315,
          left: 315,
          width: 40,
          height: 40
        }, // 标签
        // {
        //   type: 'text',
        //   content: '获客神器',
        //   fontSize: 14,
        //   lineHeight: 22,
        //   height: 22,
        //   color: '#2d8cf0',
        //   textAlign: 'left',
        //   top: 380,
        //   left: 20,
        //   width: 110,
        //   MaxLineNumber: 1,
        //   breakWord: true,
        //   bolder: true
        // },
        // {
        //   type: 'text',
        //   content: '贴心服务',
        //   fontSize: 14,
        //   lineHeight: 22,
        //   height: 22,
        //   color: '#2d8cf0',
        //   textAlign: 'left',
        //   top: 380,
        //   left: 131,
        //   width: 110,
        //   MaxLineNumber: 1,
        //   breakWord: true,
        //   bolder: true
        // },
        // {
        //   type: 'text',
        //   content: '守诺',
        //   fontSize: 14,
        //   lineHeight: 22,
        //   height: 22,
        //   color: '#2d8cf0',
        //   textAlign: 'left',
        //   top: 380,
        //   left: 242,
        //   width: 110,
        //   MaxLineNumber: 1,
        //   breakWord: true,
        //   bolder: true
        // },
        {
          type: 'rect',
          background: '#dddee1',
          top: 420,
          left: 20,
          width: 335,
          height: 1
        }, { // 电话
          type: 'image',
          url: '../../static/assets/madePoster/phone.png',
          top: 440,
          left: 20,
          width: 22,
          height: 22
        }, {
          type: 'text',
          content: this.shareCardInfo.strMobile,
          fontSize: 14,
          lineHeight: 22,
          height: 22,
          color: '#495060',
          textAlign: 'left',
          top: 442,
          left: 50,
          width: 160,
          MaxLineNumber: 1,
          breakWord: true,
          bolder: false
        }, { // 微信
          type: 'image',
          url: '../../static/assets/madePoster/wx.png',
          top: 470,
          left: 20,
          width: 22,
          height: 22
        }, {
          type: 'text',
          content: this.shareCardInfo.strMobile,
          fontSize: 14,
          lineHeight: 22,
          height: 22,
          color: '#495060',
          textAlign: 'left',
          top: 472,
          left: 50,
          width: 160,
          MaxLineNumber: 1,
          breakWord: true,
          bolder: false
        }, { // 地址
          type: 'image',
          url: '../../static/assets/madePoster/addr.png',
          top: 500,
          left: 20,
          width: 22,
          height: 22
        }, {
          type: 'text',
          content: this.shareCardInfo.strAddress,
          fontSize: 14,
          lineHeight: 22,
          height: 22,
          color: '#495060',
          textAlign: 'left',
          top: 502,
          left: 50,
          width: 160,
          MaxLineNumber: 2,
          breakWord: true,
          bolder: false
        }, { // 小程序二维码
          type: 'image',
          url: '../../static/assets/madePoster/addr.png',
          top: 440,
          left: 235,
          width: 120,
          height: 120
        }]
      }];
    },
    eventDraw: function eventDraw() {
      // debugger
      wx.showLoading({
        title: '绘制分享图片中',
        mask: true
      });
      var paintingList = this.paintingList;
      var paintingIndex = this.paintingIndex;
      this.mode = 'normal';
      this.painting = paintingList[paintingIndex];
      this.paintingIndex = paintingIndex === 0 ? 1 : 0;
    },
    eventSave: function eventSave() {
      var _this = this;

      wx.saveImageToPhotosAlbum({
        filePath: this.shareImage,
        destWidth: 750, // 生成图片的大小设置成canvas大小的二倍
        destHeight: 1500,
        success: function () {
          var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(res) {
            var Details, paramData;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    wx.showToast({
                      title: '保存图片成功',
                      icon: 'success',
                      duration: 2000
                    });
                    Details = _this.userInfo.strName + '保存了' + _this.shareCardInfo.strName + '的画报';
                    paramData = { 'Name': '保存画报', 'Type': '保存画报&a', 'Details': Details, 'Controller': 'madePoster', 'Action': 'index', 'UserId': _this.openId, 'OperatedUserId': _this.shareOpenId };
                    _context.next = 5;
                    return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

                  case 5:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          return function success(_x) {
            return _ref.apply(this, arguments);
          };
        }()
      });
    },
    eventGetImage: function eventGetImage(event) {
      wx.hideLoading();
      var tempFilePath = event.mp.detail.tempFilePath;
      if (tempFilePath != undefined) {
        this.shareImage = tempFilePath;
      }

      if (this.mode === 'cry') {
        this.eventDrawCry();
      }
    },
    qrCodeFn: function qrCodeFn() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var qrCode;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].get_qrCode({
                  url: 'pages/home/main',
                  scene: ''
                });

              case 2:
                qrCode = _context2.sent;

                console.log(qrCode);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }
});

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app fixed"
  }, [_c('div', {
    staticClass: "center-a"
  }, [_c('image', {
    staticClass: "share-image m-y-3 border",
    attrs: {
      "src": _vm.shareImage
    }
  })]), _vm._v(" "), _c('canvasdrawer', {
    staticClass: "canvasdrawer",
    attrs: {
      "painting": _vm.painting,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "getImage": _vm.eventGetImage
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tabBar",
    staticStyle: {
      "border": "none",
      "height": "auto"
    }
  }, [_c('i-button', {
    attrs: {
      "bind:click": "handleClick",
      "type": "primary",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.eventSave
    }
  }, [_vm._v("保存图片分享到朋友圈")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6202c632", esExports)
  }
}

/***/ })

},[155]);
//# sourceMappingURL=main.js.map