global.webpackJsonp([5],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(166);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: true,
    navigationBarTitleText: '商城',
    'usingComponents': {
      'i-icon': '../../dist/icon/index',
      'i-divider': '../../dist/divider/index'
    }
  }
});

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_311e711e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(169);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(167)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-311e711e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_311e711e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shopCity\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-311e711e", Component.options)
  } else {
    hotAPI.reload("data-v-311e711e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 167:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 168:
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




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      topBarShow: false,
      products: ''
    };
  },
  onPageScroll: function onPageScroll(event) {
    var scrollTop = event.scrollTop;
    if (scrollTop > 200) {
      this.topBarShow = true;
    } else {
      this.topBarShow = false;
    }
  },

  onPullDownRefresh: function onPullDownRefresh() {
    this.productList();
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
    this.topBarShow = false;
    this.addShopLog();
    this.productList();
  },


  methods: {
    addShopLog: function addShopLog() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var Details, paramData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Details = _this.userInfo.strName + '查看了' + _this.shareCardInfo.strName + '的公司商城';
                paramData = { 'Name': '查看了商城', 'Type': '106', 'Details': Details, 'Controller': 'find', 'Action': 'index', 'UserId': _this.openId, 'OperatedUserId': _this.shareOpenId };
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
    goDetails: function goDetails(id, name) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var Details, paramData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$router.push({ path: '/pages/shopDetails/main', query: { id: id } });
                Details = _this2.userInfo.strName + '查看了' + _this2.shareCardInfo.strName + '公司商城的' + name;
                paramData = { 'Name': '查看了产品', 'Type': '106', 'Details': Details, 'Controller': 'find', 'Action': 'index', 'UserId': _this2.openId, 'OperatedUserId': _this2.shareOpenId };
                _context2.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    productList: function productList() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var data, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = { '@CompanyId': _this3.shareCardInfo.CompanyId };
                _context3.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].get_Product_info(data);

              case 3:
                res = _context3.sent;

                _this3.products = res.dgData;

                // console.log(res)

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  }
});

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app"
  }, [_c('div', {
    staticClass: "city-wrapper"
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mpcomid": '3'
    }
  }, [(_vm.topBarShow) ? _c('nav', {
    staticClass: "top-bar p-x-2"
  }, [_c('div', {
    staticClass: "top-bar-l fl text-oh  font-color-sub"
  }, [_vm._v(_vm._s(_vm.shareCardInfo.strCompany) + "商城")]), _vm._v(" "), _c('div', {
    staticClass: "top-bar-r font-color-sub fr"
  }, [_c('i-icon', {
    staticClass: "p-a-1",
    attrs: {
      "type": "publishgoods_fill",
      "size": "24",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('i-icon', {
    staticClass: "p-a-1",
    attrs: {
      "type": "mine",
      "size": "24",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('i-icon', {
    staticClass: "p-a-1",
    attrs: {
      "type": "share",
      "size": "24",
      "mpcomid": '2'
    }
  })], 1)]) : _vm._e()], 1), _vm._v(" "), _c('header', {
    staticClass: "banner"
  }, [_c('img', {
    attrs: {
      "src": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "nav-right clearfix"
  }, [_c('i-icon', {
    staticClass: "center-a",
    attrs: {
      "type": "publishgoods_fill",
      "size": "22",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('i-icon', {
    staticClass: "center-a",
    attrs: {
      "type": "mine",
      "size": "22",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('i-icon', {
    staticClass: "center-a",
    attrs: {
      "type": "share",
      "size": "22",
      "mpcomid": '6'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "shopTitle p-a-1  bgf"
  }, [_c('div', {
    staticClass: "shop-logo center-a  radius"
  }, [_c('img', {
    staticClass: "radius",
    attrs: {
      "src": _vm.shareCardInfo.strAvatarUrl,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "shop-name"
  }, [_c('h4', {
    staticClass: "font-title bold"
  }, [_vm._v(_vm._s(_vm.shareCardInfo.strCompany) + "商城")]), _vm._v(" "), _c('p', [_c('i-icon', {
    attrs: {
      "type": "task_fill",
      "color": "#2d8cf0",
      "size": "20",
      "mpcomid": '7'
    }
  }), _vm._v(" 认证企业")], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "shop-list"
  }, [_c('ul', {
    staticClass: "p-y-2 p-x-1 clearfix"
  }, _vm._l((_vm.products), function(items, index) {
    return _c('li', {
      key: items.id,
      staticClass: "shop-items oh radius bgf fl m-b-2",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.goDetails(items.Id, items.Name)
        }
      }
    }, [_c('div', {
      staticClass: "shop-top center-a"
    }, [_c('img', {
      staticClass: "shop-img",
      attrs: {
        "src": items.CoverImage,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "shop-tip font-title center-a p-x-1"
    }, [_vm._v("推荐产品")])]), _vm._v(" "), _c('div', {
      staticClass: "p-a-1"
    }, [_c('p', {
      staticClass: "shop-desc text-oh-2 font-title"
    }, [_vm._v(_vm._s(items.Name) + _vm._s('(' + items.ProductDetails + ')'))]), _vm._v(" "), _c('p', {
      staticClass: "shop-price  "
    }, [_vm._v("¥ " + _vm._s(items.SalePrice))])], 1)])
  }))], 1)], 1), _vm._v(" "), _c('i-divider', {
    attrs: {
      "content": "我是有底线的！",
      "mpcomid": '8'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-311e711e", esExports)
  }
}

/***/ })

},[165]);
//# sourceMappingURL=main.js.map