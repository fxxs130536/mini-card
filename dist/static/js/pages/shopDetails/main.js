global.webpackJsonp([4],{

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(171);


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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5ebf5a52_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(174);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(172)
}
var normalizeComponent = __webpack_require__(1)
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

/***/ 172:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_api__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_slideFull__ = __webpack_require__(55);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg']
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
    slideFull: __WEBPACK_IMPORTED_MODULE_2__components_slideFull__["a" /* default */]
  },

  computed: {},

  mounted: function mounted() {
    this.topBarShow = false;
  },


  methods: {
    goHome: function goHome() {
      console.log(1);
      this.$router.go(1);
    }
  }
});

/***/ }),

/***/ 174:
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
  }, _vm._l((_vm.imgUrls), function(itmes, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '3-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image ",
      attrs: {
        "src": itmes,
        "width": "100%",
        "height": "100%"
      }
    })])], 1)
  })), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n              道可道非常道，名可名非常名道可道非常道，名可名非常名道可道非常道，名可名非常名\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "header-b clearfix"
  }, [_c('p', {
    staticClass: "fl red bold"
  }, [_vm._v("¥ 1000")]), _vm._v(" "), _c('p', {
    staticClass: "fr font-sub"
  }, [_vm._v("运费：包邮")])], 1)], 1), _vm._v(" "), _c('div', {
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

},[170]);
//# sourceMappingURL=main.js.map