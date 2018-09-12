global.webpackJsonp([16],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(131);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: true,
    navigationBarTitleText: '名片列表',
    'usingComponents': {
      'i-card': '../../dist/card/index',
      'i-icon': '../../dist/icon/index',
      'i-spin': '../../dist/spin/index'

    }
  }
});

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1476595e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1476595e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1476595e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\cardlist\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1476595e", Component.options)
  } else {
    hotAPI.reload("data-v-1476595e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(2);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// import store from '@/store/store'

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      show: false,
      link: true,
      cardList: '',
      spinShow: true
    };
  },


  components: {},

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapGetters */])({
    openId: 'openId'
  })),

  created: function created() {},
  mounted: function mounted() {
    this.lookCard();
  },


  methods: {
    lookCard: function lookCard() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var wxCode, openId, data, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.spinShow = true;
                // wx.showLoading({ title: '正在加载' })
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].wxLogin();

              case 3:
                wxCode = _context.sent;
                _context.next = 6;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].wxOpenId(wxCode.code);

              case 6:
                openId = _context.sent;

                // this.$store.commit('inOpenId', openId)
                data = { '@strOpenId_c': openId.openid, '@type': 4 };
                _context.next = 10;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].post_look_card_list(data);

              case 10:
                res = _context.sent;


                // if (res.data.length === 0) {
                //   this.linkCard(openId.openid)
                // } else {
                //   this.cardList = res.data
                // }
                console.log(res.data);
                _this.cardList = res.data;
                _this.getUser();

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getUser: function getUser() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var wxCode, openId, params, resdata;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].wxLogin();

              case 2:
                wxCode = _context2.sent;
                _context2.next = 5;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].wxOpenId(wxCode.code);

              case 5:
                openId = _context2.sent;
                params = { 'strOpenId_c': openId.openid, 'strOpenId_b': openId.openid };
                _context2.next = 9;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].post_card_home(params);

              case 9:
                resdata = _context2.sent;

                _this2.cardList.unshift(resdata);
                // wx.hideLoading()
                _this2.spinShow = false;

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    linkCard: function linkCard(shareId) {
      this.$store.commit('shareOpenId', shareId);
      if (shareId.toUpperCase() === this.openId.toUpperCase()) {
        this.$router.push({ path: '/pages/admin/main', reLaunch: true });
        return;
      }
      this.$router.push({ path: '/pages/home/main', isTab: true });
    }
  }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app"
  }, [_c('ul', _vm._l((_vm.cardList), function(items, index) {
    return _c('li', {
      key: index,
      staticClass: "card-items p-b-1 "
    }, [_c('div', {
      staticClass: "font-title font m-x-2   p-y-1"
    }, [_c('span'), _c('span')]), _vm._v(" "), _c('div', {
      staticClass: "card-cont",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.linkCard(items.strOpenId)
        }
      }
    }, [_c('i-card', {
      attrs: {
        "title": items.strName,
        "extra": items.strCompany,
        "thumb": items.strAvatarUrl,
        "mpcomid": '4-' + index
      }
    }, [_c('view', {
      slot: "content"
    }, [_c('p', {
      staticClass: "m-y-2 font-color-title font"
    }, [_vm._v(_vm._s(items.strPosition)), _c('i-icon', {
      staticClass: "fr",
      attrs: {
        "type": "collection_fill",
        "size": "20",
        "color": "#ff9900",
        "mpcomid": '0-' + index
      }
    })], 1), _vm._v(" "), _c('p', {
      staticClass: "font"
    }, [_vm._v(_vm._s(items.strMobile))]), _vm._v(" "), _c('p', {
      staticClass: "font"
    }, [_vm._v(_vm._s(items.strEmail))])], 1), _vm._v(" "), _c('view', {
      staticClass: "clearfix",
      slot: "footer"
    }, [_c('div', [_c('span', {
      staticClass: "font-color-main card-footer fl"
    }, [_vm._v("NO." + _vm._s(index + 1))]), _vm._v(" "), _c('span', {
      staticClass: "fr card-footer card-footer-r ",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.sdads
      }
    }, [_c('i-icon', {
      attrs: {
        "type": "more",
        "size": "28",
        "mpcomid": '1-' + index
      }
    }), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (false),
        expression: "false"
      }],
      staticClass: "card-more"
    }, [_c('p', {
      staticClass: "p-x-2 p-y-1 text-center center-a"
    }, [_c('i-icon', {
      attrs: {
        "type": "collection",
        "size": "20",
        "color": "#ff9900",
        "mpcomid": '2-' + index
      }
    }), _vm._v("名片标星")], 1), _vm._v(" "), _c('p', {
      staticClass: "p-x-2 p-y-1 text-center center-a"
    }, [_c('i-icon', {
      attrs: {
        "type": "offline",
        "size": "20",
        "mpcomid": '3-' + index
      }
    }), _vm._v("屏蔽名片")], 1)], 1)], 1)])])])], 1)])
  })), _vm._v(" "), (_vm.spinShow) ? _c('i-spin', {
    attrs: {
      "size": "large",
      "fix": "",
      "mpcomid": '5'
    }
  }, [_vm._v("加载中...")]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1476595e", esExports)
  }
}

/***/ })

},[130]);
//# sourceMappingURL=main.js.map