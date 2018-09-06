global.webpackJsonp([6],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(161);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: true,
    navigationBarTitleText: '官网',
    'usingComponents': {
      'i-panel': '../../dist/panel/index',
      'i-card': '../../dist/card/index',
      'i-icon': '../../dist/icon/index',
      'i-row': '../../dist/row/index',
      'i-col': '../../dist/col/index',
      'i-button': '../../dist/button/index'
    }
  }
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_37f3800f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(164);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(162)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-37f3800f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_37f3800f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\officialWeb\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37f3800f", Component.options)
  } else {
    hotAPI.reload("data-v-37f3800f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(4);



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
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      imgUrls: [
        // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      companyInfo: {},
      consultArray: []

    };
  },

  onPullDownRefresh: function onPullDownRefresh() {
    this.company();
    wx.stopPullDownRefresh();
  },
  components: {},

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapGetters */])({
    shareCardInfo: 'shareCardInfo',
    shareOpenId: 'shareOpenId',
    openId: 'openId',
    userInfo: 'userInfo'
  })),

  mounted: function mounted() {
    this.addWebLog();
    this.company();
    this.consult();
  },


  methods: {
    addWebLog: function addWebLog() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var Details, paramData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Details = _this.userInfo.strName + '查看了' + _this.shareCardInfo.strName + '公司的官网';
                paramData = { 'Name': '查看官网', 'Type': '查看官网&a', 'Details': Details, 'Controller': 'find', 'Action': 'index', 'UserId': _this.openId, 'OperatedUserId': _this.shareOpenId };
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    call: function call(str) {
      wx.makePhoneCall({
        phoneNumber: str
      });
    },
    joinUs: function joinUs() {
      this.$router.push({ path: '/pages/advisoryDetails/main', query: { id: 1, title: '招聘详情' } });
    },
    company: function company() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = { '@Id': '2' // '@Id': this.shareCardInfo.CompanyId
                  //   console.log(this.shareCardInfo.CompanyId)
                };
                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].Get_VCarCompany(data);

              case 3:
                res = _context2.sent;

                _this2.companyInfo = res.dgData[0];
                //   console.log(res)
                if (res.dgData[0].ImageArray != null) _this2.imgUrls = JSON.parse(res.dgData[0].ImageArray);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    consult: function consult() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var data, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = {
                  $rowIndex: 1
                };
                _context3.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].get_PropagandaColumn(data);

              case 3:
                res = _context3.sent;

                //   console.log(res)
                if (res.dgData.length > 0) {
                  _this3.consultArray = res.dgData.filter(function (val, i, array) {
                    return i == 0;
                  });
                }

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    detailArtical: function detailArtical(id, artTitle) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var Details, paramData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.$router.push({ path: '/pages/advisoryDetails/main', query: { id: id, title: '公司动态详情' } });
                Details = _this4.userInfo.strName + '查阅了' + _this4.shareCardInfo.strName + '公司文章' + artTitle;
                paramData = { 'Name': '公司动态详情', 'Type': '109', 'Details': Details, 'Controller': 'find', 'Action': 'index', 'UserId': _this4.openId, 'OperatedUserId': _this4.shareOpenId };
                _context4.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    }
  }
});

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app"
  }, [(_vm.imgUrls != '') ? _c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration,
      "indicator-color": "#fff",
      "indicator-active-color": "#2d8cf0"
    }
  }, _vm._l((_vm.imgUrls), function(itmes, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": itmes,
        "width": "100%",
        "height": "100%"
      }
    })])], 1)
  })) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color"
  }, [_vm._v("\n                        公司介绍\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "web-cont p-a-2 bgf m-a-2"
  }, [_c('rich-text', {
    attrs: {
      "nodes": _vm.companyInfo.BriefIntroduction,
      "mpcomid": '1'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color"
  }, [_vm._v("\n                    企业咨询\n            ")]), _vm._v(" "), _c('ul', {
    staticClass: "m-l-2 tem-list"
  }, _vm._l((_vm.consultArray), function(items, index) {
    return _c('li', {
      key: items.id
    }, [_c('div', {
      staticClass: "tem-items p-y-2",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.detailArtical(items.id, items.strTitle)
        }
      }
    }, [_c('div', {
      staticClass: "tem-items-img"
    }, [_c('img', {
      attrs: {
        "src": items.strTitleUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "tem-items-r p-x-1"
    }, [_c('p', {
      staticClass: "font-title m-b-2"
    }, [_vm._v("\n                                        " + _vm._s(items.strTitle) + "\n                                    ")]), _vm._v(" "), _c('span', {
      staticClass: "font"
    }, [_vm._v(_vm._s(items.dCreateTime))])], 1)])])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color"
  }, [_vm._v("\n                        联系我们\n                ")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary",
      "size": "default",
      "i-class": "m-x-2 bold font-size-title",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": function($event) {
        _vm.call(_vm.companyInfo.TelPhone)
      }
    }
  }, [_vm._v(_vm._s(_vm.companyInfo.TelPhone))])], 1), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper bg "
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color-sub"
  }, [_vm._v("\n                        公司地址\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "p-a-2"
  }, [_c('p', {
    staticClass: "font-title font-color-sub center-y p-y-2"
  }, [_c('i-icon', {
    attrs: {
      "type": "coordinates_fill",
      "color": "#80848f",
      "size": "22",
      "mpcomid": '3'
    }
  }), _vm._v("\n                        " + _vm._s(_vm.companyInfo.Street) + "\n                    ")], 1)], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-37f3800f", esExports)
  }
}

/***/ })

},[160]);
//# sourceMappingURL=main.js.map