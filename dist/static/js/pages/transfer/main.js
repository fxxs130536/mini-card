global.webpackJsonp([6],{

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(228);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '',
    'usingComponents': {
      'i-button': '../../dist/button/index',
      'i-spin': '../../dist/spin/index'
    }

  }
});

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5d50f54a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(231);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(229)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5d50f54a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\transfer\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d50f54a", Component.options)
  } else {
    hotAPI.reload("data-v-5d50f54a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 229:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_api__ = __webpack_require__(3);
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

// import store from '@/store/store'


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      canIUse: false,
      getInfoShow: false

    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapGetters */])({
    openId: 'openId'
  })),
  mounted: function mounted() {
    this.canIUse = wx.canIUse('button.open-type.getUserInfo');
    if (this.$route.query.scopeInfo) {
      this.getInfoShow = true;
      wx.setNavigationBarTitle({
        title: '授权登录'
      });
    } else {
      wx.setNavigationBarTitle({
        title: '正在加载'
      });
      this.backPath();
    }
  },

  methods: {
    bindGetUserInfo: function bindGetUserInfo(e) {
      if (e.mp.detail.userInfo) {
        this.backPath();
        // 用户按了允许授权按钮
      } else {
        // 用户按了拒绝按钮
        console.log(e.mp.detail.errMsg);
      }
    },
    backPath: function backPath() {
      var query = this.$route.query;
      console.log(query.target);
      var para = {};
      if (query.para) {
        para = query.para;

        para = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(para);
        console.log(para);
      }
      if (query.shareOpenId) {
        this.$store.commit('shareOpenId', query.shareOpenId);
      }
      if (query.shareOpenId.toUpperCase() === this.openId.toUpperCase()) {
        this.$router.push({ path: '/pages/admin/main', reLaunch: true });
        return;
      }
      switch (query.type) {
        case 'new':
          this.$router.push({ path: query.target, reLaunch: true });
          break;
        case 'tab':
          this.$router.push({ path: query.target, isTab: true });
          break;
        default:
          this.$router.push({ path: query.target, reLaunch: true, query: para });
          break;
      }
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app"
  }, [_vm._m(0), _vm._v(" "), (_vm.getInfoShow) ? _c('div', {
    staticClass: "getInfo"
  }, [(_vm.canIUse) ? _c('i-button', {
    attrs: {
      "open-type": "getUserInfo",
      "type": "primary",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_vm._v("授权登录")]) : _c('view', [_vm._v("请升级微信版本")])], 1) : _c('i-spin', {
    attrs: {
      "size": "large",
      "fix": "",
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-img"
  }, [_c('img', {
    staticClass: "login-src",
    attrs: {
      "src": "/../../static/assets/login.png"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d50f54a", esExports)
  }
}

/***/ })

},[227]);
//# sourceMappingURL=main.js.map