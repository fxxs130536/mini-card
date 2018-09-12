global.webpackJsonp([14],{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(188);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '招聘详情',
    'usingComponents': {
      'i-button': '../../dist/button/index'
    }
  }
});

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b027c850_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(191);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(189)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b027c850"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b027c850_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\joinUs\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b027c850", Component.options)
  } else {
    hotAPI.reload("data-v-b027c850", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },


  components: {},

  computed: {},

  mounted: function mounted() {},


  methods: {
    callHr: function callHr(str) {
      wx.makePhoneCall({
        phoneNumber: str // 仅为示例，并非真实的电话号码
      });
    }
  }
});

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app p-a-2"
  }, [_c('div', {
    staticClass: "artical-t font-color-title"
  }, [_vm._v("\n        电商玩法升级，哥哥教你如何斩妖除魔，替天行道，拔刀不平，萍水相逢，知音难寻\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "artical-company font-color-main m-y-2"
  }, [_vm._v("\n        印生活\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "artical-cont"
  }, [_vm._v("\n      关关雎鸠，在河之洲。窈窕淑女，君子好逑。\n      参差荇菜，左右流之。窈窕淑女，寤寐求之。\n      求之不得，寤寐思服。悠哉悠哉，辗转反侧。\n      参差荇菜，左右采之。窈窕淑女，琴瑟友之。\n      参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "call-btn"
  }, [_c('i-button', {
    attrs: {
      "i-class": "",
      "type": "primary",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": function($event) {
        _vm.callHr('1353699106')
      }
    }
  }, [_vm._v("联系HR")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b027c850", esExports)
  }
}

/***/ })

},[187]);
//# sourceMappingURL=main.js.map