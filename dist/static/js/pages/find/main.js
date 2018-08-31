global.webpackJsonp([10],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(127);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: true,
    navigationBarTitleText: '动态',
    'usingComponents': {
      'i-icon': '../../dist/icon/index',
      'i-row': '../../dist/row/index',
      'i-col': '../../dist/col/index',
      'i-divider': '../../dist/divider/index'
    }
  }
});

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_10c8a7ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(130);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(128)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-10c8a7ae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_10c8a7ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\find\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10c8a7ae", Component.options)
  } else {
    hotAPI.reload("data-v-10c8a7ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 129:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      actionShow: false,
      sendValue: '',
      sendShow: false,
      sharePara: { ab: 'aad' },
      page: 1,
      news: {
        toplist: [],
        newslist: []
      },
      tip: false,
      par: {
        $rowIndex: 0
      }
    };
  },
  onShareAppMessage: function onShareAppMessage(e) {
    console.log(e.target.dataset.id);
    return {
      title: '转发文章',
      desc: '这是我的名片请惠存',
      //   imageUrl: this.cardInfo.strAvatarUrl,
      path: '/pages/advisoryDetails/main?strOpenId_b=' + this.sharePara.ab,
      success: function success(res) {
        console.log(res);
      },
      fail: function fail(res) {}
    };
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.news.newslist = [];
    this.par['$rowIndex'] = 0;
    this.getData();
  },
  onReachBottom: function onReachBottom(e) {
    console.log(e);

    wx.showLoading({
      title: '玩命加载中'
    });
    wx.hideLoading();
    this.getData();
  },


  components: {},

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapGetters */])({
    shareCardInfo: 'shareCardInfo',
    shareOpenId: 'shareOpenId',
    openId: 'openId',
    userInfo: 'userInfo'
  })),

  mounted: function mounted() {
    this.addFindeLog();
    wx.hideShareMenu();
    this.getData();
  },


  methods: {
    addFindeLog: function addFindeLog() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var Details, paramData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Details = _this2.userInfo.strName + '查看了' + _this2.shareCardInfo.strName + '的公司动态';
                paramData = { 'Name': '公司动态', 'Type': '108', 'Details': Details, 'Controller': 'find', 'Action': 'index', 'UserId': _this2.openId, 'OperatedUserId': _this2.shareOpenId };
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    getData: function getData() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this, res, dgData;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(11);
                _this = _this3;

                _this3.par['$rowIndex']++;
                _context2.next = 5;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].get_PropagandaColumn(_this3.par);

              case 5:
                res = _context2.sent;
                dgData = res.dgData;


                dgData.map(function (item) {
                  _this.news.newslist.push(item);
                });

                wx.stopPullDownRefresh();
                wx.hideLoading();

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    detailArtical: function detailArtical(id, artTitle) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var Details, paramData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.$router.push({ path: '/pages/advisoryDetails/main', query: { id: id, title: '公司动态详情' } });
                Details = _this4.userInfo.strName + '查阅了' + _this4.shareCardInfo.strName + '公司文章' + artTitle;
                paramData = { 'Name': '公司动态详情', 'Type': '109', 'Details': Details, 'Controller': 'find', 'Action': 'index', 'UserId': _this4.openId, 'OperatedUserId': _this4.shareOpenId };
                _context3.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      }))();
    },
    comment: function comment() {
      this.actionShow = false;
      this.sendShow = true;
    },
    psotComment: function psotComment() {
      var val = this.sendValue;
      if (!val) {
        return false;
      }
    }
  }

});

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app bgf",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.actionShow = false;
        _vm.sendShow = false
      }
    }
  }, [_vm._l((_vm.news.newslist), function(items, index) {
    return _c('div', {
      key: items.newsid,
      staticClass: "find-wrapper p-a-2 find-list"
    }, [_c('i-row', {
      attrs: {
        "i-class": " ",
        "mpcomid": '5-' + index
      }
    }, [_c('i-col', {
      attrs: {
        "span": "4",
        "i-class": "col-class ",
        "mpcomid": '0-' + index
      }
    }, [_c('img', {
      staticClass: "find-img",
      attrs: {
        "src": items.strTitleUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "20",
        "i-class": "col-class p-l-1",
        "mpcomid": '4-' + index
      }
    }, [_c('div', {
      staticClass: "find-header clearfix"
    }, [_c('h4', {
      staticClass: "font-color-main font-title bold text-oh fl find-header-1 p-r-1"
    }, [_vm._v(_vm._s(items.strText))]), _vm._v(" "), _c('p', {
      staticClass: "border p-x-1 text-oh fl find-header-2"
    }, [_vm._v("公司")]), _vm._v(" "), _c('button', {
      staticClass: "font-color-main text-oh fr find-header-3 text-right shareBtn",
      attrs: {
        "open-type": "share",
        "data-id": "111"
      }
    }, [_vm._v("转发")])], 1), _vm._v(" "), _c('div', {
      staticClass: "find-body"
    }, [_c('div', {
      staticClass: "artical bg m-t-1"
    }, [_c('i-row', {
      attrs: {
        "i-class": "p-a-1 ",
        "eventid": '0-' + index,
        "mpcomid": '3-' + index
      },
      on: {
        "click": function($event) {
          _vm.detailArtical(items.id, items.strTitle)
        }
      }
    }, [_c('i-col', {
      attrs: {
        "span": "5",
        "mpcomid": '1-' + index
      }
    }, [_c('img', {
      staticClass: "artical-img",
      attrs: {
        "src": items.strTitleUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "19",
        "mpcomid": '2-' + index
      }
    }, [_c('p', {
      staticClass: "font bold artical-cont text-oh-2 p-l-1 "
    }, [_vm._v("\n                                  " + _vm._s(items.strTitle) + "\n                              ")])], 1)], 1)], 1)]), _vm._v(" "), _c('div', {
      staticClass: "find-footer"
    }, [_c('div', {
      staticClass: "font-sub clearfix"
    }, [_c('span', {
      staticClass: "find-time fl p-y-1"
    }, [_vm._v(_vm._s(items.dCreateTime))])])])])], 1)], 1)
  }), _vm._v(" "), (_vm.sendShow) ? _c('div', {
    staticClass: "send-comment clearfix p-x-2 p-b-1",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "send-comment-inp border fl m-r-1"
  }, [_c('input', {
    staticClass: "send-comment-input p-x-1",
    attrs: {
      "value": _vm.sendValue,
      "type": "text",
      "left": "",
      "focus": "true",
      "confirm-type": "发送",
      "eventid": '1'
    },
    on: {
      "change": _vm.psotComment
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "font font-color-main fl  send-comment-inp-btn center-a border",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.psotComment
    }
  }, [_vm._v("\n           发送\n            \n        ")])]) : _vm._e(), _vm._v(" "), (_vm.tip) ? _c('i-divider', {
    attrs: {
      "content": "已经没有更多了！",
      "mpcomid": '6'
    }
  }) : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-10c8a7ae", esExports)
  }
}

/***/ })

},[126]);
//# sourceMappingURL=main.js.map