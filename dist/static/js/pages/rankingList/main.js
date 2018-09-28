global.webpackJsonp([9],{

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(213);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '排行榜',
    'usingComponents': {
      'i-tabs': '../../dist/tabs/index',
      'i-tab': '../../dist/tab/index',
      'i-panel': '../../dist/panel/index'
    }
  }
});

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bb64304c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(216);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(214)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bb64304c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bb64304c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\rankingList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb64304c", Component.options)
  } else {
    hotAPI.reload("data-v-bb64304c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 214:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_api__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(2);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tabCurrent: 'hot',
      type: 1,
      rowIndex: 1,
      rankingList: []
    };
  },


  components: {},

  computed: {},

  mounted: function mounted() {
    // this.getData()
  },

  // 下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    this.resize();
  },

  // 上拉加载
  onReachBottom: function onReachBottom() {
    this.loadMore();
  },


  methods: {
    getData: function getData() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _this, par, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.showLoading({ title: '加载中' });
                _this = _this2;
                par = {
                  type: _this2.type,
                  $rowIndex: _this2.rowIndex
                };
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* default */].get_rankingList(par);

              case 5:
                data = _context.sent;

                wx.hideLoading();
                wx.stopPullDownRefresh();
                try {
                  data.map(function (item) {
                    var cardInfo = item.map;
                    _this.rankingList.push(cardInfo);
                  });
                } catch (error) {}

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    resizeType: function resizeType(type) {
      var _this = this;
      if (type == _this.type) return;
      _this.type = type;
      _this.rowIndex = 1;
      _this.rankingList = [];
      _this.getData();
    },
    loadMore: function loadMore() {
      this.rowIndex++;
      this.getData();
    },
    resize: function resize() {
      this.rowIndex = 1;
      this.rankingList = [];
      this.getData();
    },
    goOtherCard: function goOtherCard(item) {
      this.$router.open({
        name: '查看名片',
        url: '../othercard/othercard',
        type: 'PUSH',
        params: {
          params: item
        }
      });
    },
    tabHandle: function tabHandle(e) {
      this.tabCurrent = e.mp.detail.key;
    }
  }
});

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app"
  }, [_c('div', {
    staticClass: "rankFixd"
  }, [_vm._m(0), _vm._v(" "), _c('div', {}), _vm._v(" "), _c('i-tabs', {
    attrs: {
      "current": _vm.tabCurrent,
      "eventid": '0',
      "mpcomid": '3'
    },
    on: {
      "change": _vm.tabHandle
    }
  }, [_c('i-tab', {
    key: "hot",
    attrs: {
      "title": "人气",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "like",
    attrs: {
      "title": "点赞",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "collection",
    attrs: {
      "title": "收藏",
      "mpcomid": '2'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "tabCont"
  }, _vm._l((5), function(items, index) {
    return _c('i-panel', {
      key: index,
      attrs: {
        "mpcomid": '5-' + index
      }
    }, [_c('div', {
      staticClass: "p-x-2 p-y-1 clearfix center-y"
    }, [_c('div', {
      staticClass: "tab-l fl text-center font-color-sub center-a"
    }, [(index === 0) ? _c('image', {
      attrs: {
        "src": "/static/assets/ranking/no1.png"
      }
    }) : _vm._e(), _vm._v(" "), (index === 1) ? _c('image', {
      attrs: {
        "src": "/static/assets/ranking/no2.png"
      }
    }) : _vm._e(), _vm._v(" "), (index === 2) ? _c('image', {
      attrs: {
        "src": "/static/assets/ranking/no3.png"
      }
    }) : _vm._e(), _vm._v(" "), (index > 2) ? _c('span', [_vm._v(" " + _vm._s(index + 1))]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "tab-avatar fl center-x"
    }, [_c('i-avatar', {
      attrs: {
        "src": "https://i.loli.net/2017/08/21/599a521472424.jpg",
        "size": "large",
        "mpcomid": '4-' + index
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "tab-r fl p-l-1"
    }, [_c('div', {
      staticClass: "tab-desc-t flex"
    }, [_c('span', {
      staticClass: "tab-desc-name text-oh font"
    }, [_vm._v("刘德华")]), _vm._v(" "), _c('span', {
      staticClass: "tab-desc-post text-oh p-l-1 text-right font-sub"
    }, [_vm._v("打扫厕所")])]), _vm._v(" "), _c('div', {
      staticClass: "tab-desc-b text-oh font-sub"
    }, [_vm._v("\n                      打扫厕所\n                  ")])])])])
  }))])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ranking-header clearfix p-a-2 center-y"
  }, [_c('span', {
    staticClass: "ranking-text fl"
  }, [_vm._v("排行榜")]), _vm._v(" "), _c('div', {}, [_c('img', {
    staticClass: "ranking-img fr",
    attrs: {
      "src": "/static/assets/ranking/medal.png",
      "alt": ""
    }
  })])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bb64304c", esExports)
  }
}

/***/ })

},[212]);
//# sourceMappingURL=main.js.map