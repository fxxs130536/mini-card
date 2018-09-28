global.webpackJsonp([7],{

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(223);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '商品详情',
    'usingComponents': {
      'i-icon': '../../dist/icon/index',
      'i-row': '../../dist/row/index',
      'i-col': '../../dist/col/index'
    }
  }
});

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5ebf5a52_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(226);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(224)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5ebf5a52"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5ebf5a52_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shopDetails\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ebf5a52", Component.options)
  } else {
    hotAPI.reload("data-v-5ebf5a52", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 224:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_api__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_slideFull__ = __webpack_require__(69);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      imgUrls: [
        // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      products: ''
    };
  },
  onPageScroll: function onPageScroll(event) {
    var scrollTop = event.scrollTop;
    if (scrollTop > 150) {
      this.topBarShow = true;
    } else {
      this.topBarShow = false;
    }
  },

  components: {
    slideFull: __WEBPACK_IMPORTED_MODULE_5__components_slideFull__["a" /* default */]
  },

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapGetters */])({
    shareCardInfo: 'shareCardInfo',
    shareOpenId: 'shareOpenId',
    openId: 'openId',
    userInfo: 'userInfo'
  })),

  mounted: function mounted() {
    this.topBarShow = false;
    this.getDetailsInfo();
  },


  methods: {
    goHome: function goHome() {
      console.log(1);
      this.$router.go(1);
    },
    getDetailsInfo: function getDetailsInfo() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var id, data, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _this.$route.query.id;
                data = { '@CompanyId': _this.shareCardInfo.CompanyId, '@ProductId': id };
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].get_Product_info(data);

              case 4:
                res = _context.sent;

                console.log(res);
                _this.products = res.dgData[0];
                _this.imgUrls = res.dgData[0].ImageArray;

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app fixed"
  }, [_c('header', {
    staticClass: "banner bgf p-a-2 m-b-1"
  }, [(_vm.topBarShow) ? _c('nav', {
    staticClass: "top-bar p-x-2"
  }, [_c('div', {
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
  })], 1)]) : _vm._e(), _vm._v(" "), _c('swiper', {
    staticClass: "swiper radius oh",
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration,
      "indicator-color": "#fff",
      "indicator-active-color": "#2d8cf0"
    }
  }, [_c('block', [_c('swiper-item', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('image', {
    staticClass: "slide-image ",
    attrs: {
      "src": _vm.products.CoverImage,
      "width": "100%",
      "height": "100%"
    }
  })])], 1)], 1), _vm._v(" "), _c('div', {
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: " font-title text-oh-2 bold m-t-2 m-b-1"
  }, [_vm._v("\n             " + _vm._s(_vm.products.Name) + _vm._s('(' + _vm.products.ProductDetails + ')') + "\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "header-b clearfix"
  }, [_c('p', {
    staticClass: "fl red bold"
  }, [_vm._v("¥ " + _vm._s(_vm.products.SalePrice))])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "details bgf"
  }, [_c('h4', {
    staticClass: "bold font-title text-center p-y-1 details-t "
  }, [_vm._v("商品详情")]), _vm._v(" "), _c('div', {
    staticClass: "p-x-2"
  }, [_c('slideFull', {
    attrs: {
      "imgUrls": _vm.imgUrls,
      "sildeModelShow": false,
      "mpcomid": '7'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "tabBar"
  }, [_c('i-row', {
    attrs: {
      "mpcomid": '12'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '9'
    }
  }, [_c('div', {
    staticClass: "center-a tabBar-itmes",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goHome
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "homepage",
      "size": "22",
      "mpcomid": '8'
    }
  }), _vm._v(" "), _c('p', [_vm._v("商城首页")])], 1)]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "18",
      "i-class": "col-class",
      "mpcomid": '11'
    }
  }, [_c('button', {
    staticClass: "center-a tabBar-itmes redb",
    attrs: {
      "open-type": "contact"
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "customerservice",
      "size": "22",
      "mpcomid": '10'
    }
  }), _vm._v(" "), _c('p', [_vm._v("咨询")])], 1)], 1)], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ebf5a52", esExports)
  }
}

/***/ })

},[222]);
//# sourceMappingURL=main.js.map