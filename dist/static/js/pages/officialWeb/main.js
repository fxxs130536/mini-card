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
    enablePullDownRefresh: false,
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
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
    this.addWebLog();
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
    artical: function artical(obj) {
      this.$router.push({ path: '/pages/advisoryDetails/main', query: { id: 1, title: '咨询详情' } });
    },
    joinUs: function joinUs() {
      this.$router.push({ path: '/pages/advisoryDetails/main', query: { id: 1, title: '招聘详情' } });
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
  }, [_c('swiper', {
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
  })), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color"
  }, [_vm._v("\n                  公司介绍\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "web-cont p-a-2 bgf m-a-2"
  }, [_c('p', {
    staticClass: "font-title"
  }, [_vm._v("加推")]), _vm._v(" "), _c('p', {
    staticClass: "font-title"
  }, [_vm._v("致力于提升企业销售效率")]), _vm._v(" "), _c('p', {
    staticClass: "font"
  }, [_vm._v("全球智能")]), _vm._v(" "), _c('span', [_vm._v("这是图片")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color"
  }, [_vm._v("\n                  产品介绍\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "web-cont p-a-2 bgf m-a-2"
  }, [_c('p', {
    staticClass: "font-title"
  }, [_vm._v("不至于领先")]), _vm._v(" "), _c('p', {
    staticClass: "font-title"
  }, [_vm._v("致力于提升企业销售效率")]), _vm._v(" "), _c('p', {
    staticClass: "font"
  }, [_vm._v("全球智能")]), _vm._v(" "), _c('span', [_vm._v("这是图片")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color"
  }, [_vm._v("\n                  企业咨询\n          ")]), _vm._v(" "), _c('ul', {
    staticClass: "m-l-2 tem-list"
  }, [_c('li', {
    staticClass: "tem-items p-y-2"
  }, [_c('div', {
    staticClass: "tem-items-img"
  }, [_c('img', {
    attrs: {
      "src": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "tem-items-r p-x-1",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.artical
    }
  }, [_c('p', {
    staticClass: "font-title m-b-2"
  }, [_vm._v("\n                              电商玩法升级， 电商玩法升级， 电商玩法升级， 电商玩法升级， 电商玩法升级，\n                          ")]), _vm._v(" "), _c('span', {
    staticClass: "font"
  }, [_vm._v("2018-07-20")])], 1)])], 1)], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color"
  }, [_vm._v("\n                  核心成员\n          ")]), _vm._v(" "), _c('i-row', {
    attrs: {
      "type": _vm.flex,
      "i-class": "teams m-x-1 m-y-2",
      "mpcomid": '4'
    }
  }, [_c('i-col', {
    attrs: {
      "span": 12,
      "i-class": "col-class m-b-2 p-x-1",
      "mpcomid": '1'
    }
  }, [_c('div', {
    staticClass: "teams-img"
  }, [_c('img', {
    attrs: {
      "src": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('h4', {
    staticClass: "font-title teams-name"
  }, [_vm._v("刘德华")]), _vm._v(" "), _c('p', {
    staticClass: "teams-post font-title"
  }, [_vm._v("打扫厕所")]), _vm._v(" "), _c('div', {
    staticClass: "teams-divider m-y-1"
  }), _vm._v(" "), _c('p', {
    staticClass: "teams-p"
  }, [_vm._v("前微信扫地王")]), _vm._v(" "), _c('p', {
    staticClass: "teams-p"
  }, [_vm._v("前阿里挑粪王前阿里挑粪")]), _vm._v(" "), _c('p', {
    staticClass: "teams-p"
  }, [_vm._v("前阿里挑粪王前阿里挑粪王")])], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": 12,
      "i-class": "col-class m-b-2 p-x-1",
      "mpcomid": '2'
    }
  }, [_c('div', {
    staticClass: "teams-img"
  }, [_c('img', {
    attrs: {
      "src": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "teams-r p-x-1"
  }, [_c('h4', {
    staticClass: "font-title teams-name"
  }, [_vm._v("刘德华")]), _vm._v(" "), _c('p', {
    staticClass: "teams-post font-title"
  }, [_vm._v("打扫厕所")]), _vm._v(" "), _c('div', {
    staticClass: "teams-divider m-y-1"
  }), _vm._v(" "), _c('p', {
    staticClass: "teams-p"
  }, [_vm._v("前微信扫地王")]), _vm._v(" "), _c('p', {
    staticClass: "teams-p"
  }, [_vm._v("前阿里挑粪王前阿里挑粪")]), _vm._v(" "), _c('p', {
    staticClass: "teams-p"
  }, [_vm._v("前阿里挑粪王前阿里挑粪王")])], 1)]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": 12,
      "i-class": "col-class m-b-2 p-x-1",
      "mpcomid": '3'
    }
  }, [_c('div', {
    staticClass: "teams-img"
  }, [_c('img', {
    attrs: {
      "src": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "teams-r p-x-1"
  }, [_c('h4', {
    staticClass: "font-title teams-name"
  }, [_vm._v("刘德华")]), _vm._v(" "), _c('p', {
    staticClass: "teams-post font-title"
  }, [_vm._v("打扫厕所")]), _vm._v(" "), _c('div', {
    staticClass: "teams-divider m-y-1"
  }), _vm._v(" "), _c('p', {
    staticClass: "teams-p"
  }, [_vm._v("前微信扫地王")]), _vm._v(" "), _c('p', {
    staticClass: "teams-p"
  }, [_vm._v("前阿里挑粪王前阿里挑粪")]), _vm._v(" "), _c('p', {
    staticClass: "teams-p"
  }, [_vm._v("前阿里挑粪王前阿里挑粪adadada王")])], 1)])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color"
  }, [_vm._v("\n                  我们正在寻找\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "web-cont  bgf m-a-2 radius"
  }, [_c('i-row', {
    attrs: {
      "i-class": "look-list p-x-1  p-y-2",
      "mpcomid": '6'
    }
  }, _vm._l((4), function(items, index) {
    return _c('i-col', {
      key: index,
      attrs: {
        "span": "12",
        "i-class": "col-class look-items p-x-1 m-b-2",
        "mpcomid": '5-' + index
      }
    }, [_c('div', {
      staticClass: "radius look-wrapper center-a",
      style: ({
        background: '#ed3f14'
      })
    }, [_c('div', {}, [_c('p', [_vm._v("拥有丰富")]), _vm._v(" "), _c('p', [_vm._v("企业资源")]), _vm._v(" "), _c('p', [_vm._v("渠道合作伙伴")])], 1)])])
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color"
  }, [_vm._v("\n                  服务客户\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "web-cont  bgf m-a-2 radius p-y-2"
  }, [_c('p', {
    staticClass: "font-title bold"
  }, [_vm._v("全国30+行业")]), _vm._v(" "), _c('p', {
    staticClass: "font-title bold"
  }, [_vm._v("700+品牌已选择加推")]), _vm._v(" "), _c('i-row', {
    attrs: {
      "i-class": "look-list p-x-1  p-y-2 server-lsit",
      "mpcomid": '8'
    }
  }, _vm._l((4), function(items, index) {
    return _c('i-col', {
      key: index,
      attrs: {
        "span": "6",
        "i-class": "col-class look-items p-x-1 m-b-2 server-items",
        "mpcomid": '7-' + index
      }
    }, [_c('div', {
      staticClass: "radius server-wrapper"
    }, [_c('img', {
      attrs: {
        "src": "https://i.loli.net/2017/08/21/599a521472424.jpg",
        "alt": ""
      }
    })])])
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color"
  }, [_vm._v("\n                  加入我们\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "web-cont  bgf p-a-2 radius"
  }, [_c('p', {
    staticClass: "font-title bold m-b-1"
  }, [_vm._v("如果你有手有脚有颜值，会撸代码欢迎入坑！！！")]), _vm._v(" "), _c('i-row', {
    attrs: {
      "i-class": "join-list ",
      "mpcomid": '11'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "24",
      "i-class": "col-class join-items border p-x-1 p-y-2 center-y m-b-2",
      "eventid": '1',
      "mpcomid": '10'
    },
    on: {
      "click": _vm.joinUs
    }
  }, [_c('div', {
    staticClass: "join-l fl"
  }, [_c('h4', {
    staticClass: "bold"
  }, [_vm._v("java高级工程师")]), _vm._v(" "), _c('div', {
    staticClass: "join-ask"
  }, [_c('span', [_vm._v("薪资：20000")]), _vm._v(" "), _c('span', [_vm._v("经验：5")]), _vm._v(" "), _c('span', [_vm._v("学历：本科")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "join-r fr text-right"
  }, [_c('i-icon', {
    attrs: {
      "type": "enter",
      "color": "#495060",
      "size": "22",
      "mpcomid": '9'
    }
  })], 1)])], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color"
  }, [_vm._v("\n                      联系我们\n              ")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary",
      "size": "default",
      "i-class": "m-x-2 bold font-size-title",
      "eventid": '2',
      "mpcomid": '12'
    },
    on: {
      "click": function($event) {
        _vm.call('05780000888')
      }
    }
  }, [_vm._v("05780000888")])], 1), _vm._v(" "), _c('div', {
    staticClass: "web-wrapper bg"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color-sub"
  }, [_vm._v("\n                      公司地址\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "p-a-2"
  }, [_c('p', {
    staticClass: "font-title font-color-sub center-y "
  }, [_c('i-icon', {
    attrs: {
      "type": "coordinates_fill",
      "color": "#80848f",
      "size": "22",
      "mpcomid": '13'
    }
  }), _vm._v("\n                      广东省佛山市阿呆多久单ad阿达i\n                  ")], 1), _vm._v(" "), _c('footer', {
    staticClass: "text-center m-t-2 font-sub"
  }, [_c('img', {
    staticClass: "footer-logo",
    attrs: {
      "src": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("印生活技术支持")])], 1)], 1)])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "web-wrapper"
  }, [_c('div', {
    staticClass: "title bg font-title p-x-2 p-y-1 font-color"
  }, [_vm._v("\n                  公司视频\n          ")]), _vm._v(" "), _c('video', {
    staticClass: "video",
    attrs: {
      "src": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
      "danmu-btn": "false",
      "controls": "",
      "objectFit": "fill",
      "show-fullscreen-btn": ""
    }
  })])
}]
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