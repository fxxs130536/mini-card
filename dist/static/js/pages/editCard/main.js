global.webpackJsonp([2],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(144);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '编辑名片',
    'usingComponents': {
      'i-panel': '../../dist/panel/index',
      'i-cell-group': '../../dist/cell-group/index',
      'i-cell': '../../dist/cell/index',
      'i-input': '../../dist/input/index',
      'i-button': '../../dist/button/index',
      'i-icon': '../../dist/icon/index',
      'i-avatar': '../../dist/avatar/index'
    }
  }
});

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_48933eea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(166);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(145)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-48933eea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_48933eea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\editCard\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48933eea", Component.options)
  } else {
    hotAPI.reload("data-v-48933eea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 145:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_store__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_uploader__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_validate__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vuex__ = __webpack_require__(2);





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      files: [],
      max: 8,
      fontNum: 0,
      userInfo: {},
      saveInfo: {},
      off: {
        background: false,
        avatar: false
      },
      deleArray: [],
      addImg: []
    };
  },


  components: {
    uploader: __WEBPACK_IMPORTED_MODULE_7__components_uploader__["a" /* default */]
  },
  computed: __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({
    fontNumTotal: function fontNumTotal() {
      if (this.userInfo.strIntro) {
        this.fontNum = this.userInfo.strIntro.toString().length;

        return this.fontNum;
      }
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_9_vuex__["b" /* mapGetters */])({
    shareCardInfo: 'shareCardInfo',
    openId: 'openId',
    shareOpenId: 'shareOpenId'
    // userInfo: 'userInfo'
  })),

  mounted: function mounted() {
    this.addImg = [];
    this.deleArray = [];
    this.getUserInfo();
    console.log(this.userInfo);
  },


  methods: {
    getUserInfo: function getUserInfo() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _this, par, data;

        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this2;
                par = {
                  '@strOpenId': _this2.openId
                };
                _context.prev = 2;
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_5__utils_api__["a" /* default */].Get_UserInfo(par);

              case 5:
                data = _context.sent;

                console.log(data);
                _this.userInfo = data;
                _this2.strIntro = data.strIntro;
                _this.files = [];
                data.images.map(function (item) {
                  item.path = item.imgUrl;
                  _this.files.push(item);
                });
                console.log(_this.files);
                _context.next = 16;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](2);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 14]]);
      }))();
    },
    saveForm: function saveForm() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this, par, key, res;

        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.showLoading({ title: '正在保存' });
                // console.log(this.deleArray)
                // console.log(this.addImg)
                _this = _this3;

                if (_this3.off.avatar) {
                  _this.upDateHead(_this.userInfo.strAvatarUrl, 1);
                }
                if (_this3.off.background) {
                  _this.upDateHead(_this.userInfo.strBackground, 3);
                }
                // 删除图片
                if (_this3.deleArray.length > 0) {
                  _this3.deleArray.map(function (id) {
                    console.log(id);
                    _this3.uploaderFiles(undefined, id, true);
                  });
                }

                // 新增图片
                if (_this3.addImg.length > 0) {
                  _this3.addImg.map(function (item) {
                    console.log(item);
                    _this.uploaderFiles(item[0]);
                  });
                }
                par = _this3.saveInfo = {};

                if (!(_this3.userInfo.strMobile != '' && !__WEBPACK_IMPORTED_MODULE_5__utils_api__["a" /* default */].isPoneAvailable(_this3.userInfo.strMobile))) {
                  _context2.next = 10;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_5__utils_api__["a" /* default */].wxToast({ title: '手机号不正确' });
                return _context2.abrupt('return');

              case 10:
                for (key in _this3.userInfo) {
                  if (_this3.userInfo[key] != '' && key != 'images') {
                    _this3.saveInfo[key] = _this3.userInfo[key];
                  }
                }
                // console.log(this.saveInfo)

                _context2.prev = 11;
                _context2.next = 14;
                return __WEBPACK_IMPORTED_MODULE_5__utils_api__["a" /* default */].post_login(par);

              case 14:
                res = _context2.sent;

                wx.hideLoading();
                __WEBPACK_IMPORTED_MODULE_5__utils_api__["a" /* default */].wxToast({ title: '保存成功', icon: 'success' });
                _this3.$store.commit('inUserInfo', res);
                _this3.$router.push({ path: '/pages/admin/main', reLaunch: true });
                _context2.next = 23;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2['catch'](11);

              case 23:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[11, 21]]);
      }))();
    },
    onSelect: function onSelect() {
      var _this4 = this;

      var count = this.max - this.files.length;
      this.$wxapi.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        count: count

      }).then(function (res) {
        console.log(res.tempFiles);
        _this4.files = _this4.files.concat(res.tempFiles);
        _this4.addImg.push(res.tempFilePaths);
      }).catch(function (err) {
        console.log(err);
      });
    },
    upDateHead: function upDateHead(localImage, type) {
      var _this = this;
      var par = {
        strOpenId: this.userInfo.strOpenId,
        intType: type
      };

      __WEBPACK_IMPORTED_MODULE_5__utils_api__["a" /* default */].wxUploadFile({
        filePath: localImage,
        formData: par
      }).then(function (res) {
        if (type == 1) {
          _this.userInfo.strAvatarUrl = res.imgUrl;
        } else {
          _this.userInfo.strBackground = res.imgUrl;
        }
      });
    },
    modifiyHead: function modifiyHead() {
      var _this = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          _this.userInfo.strAvatarUrl = res.tempFilePaths[0];
          _this.off.avatar = true;
          // _this.upDateHead(res.tempFilePaths[0], 1);
        },
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    modifiyBackground: function modifiyBackground() {
      var _this = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          _this.userInfo.strBackground = res.tempFilePaths[0];
          _this.off.background = true;
          // _this.upDateHead(res.tempFilePaths[0], 3)
        },
        fail: function fail() {},
        complete: function complete() {}
      });
    },
    dele: function dele(data) {
      console.log(data.target);
      this.files.splice(data.i, 1);

      try {
        this.deleArray.push(data.target.id);
      } catch (error) {}
    },
    delImage: function delImage(par) {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__utils_api__["a" /* default */].del_Image(par);

              case 2:
                res = _context3.sent;

                console.log(res);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this5);
      }))();
    },
    uploaderFiles: function uploaderFiles(tempFilePaths, strId, del) {
      var _this = this;
      var par = {
        strOpenId: this.userInfo.strOpenId,
        intType: 2
      };
      if (strId != undefined && (typeof strId === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(strId)) !== 'object') {
        par = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(par, { strId: strId });
      }
      if (del) {
        par = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(par, { rowState: 'D' });
        console.log(par);
        this.delImage(par);
        return;
      }
      __WEBPACK_IMPORTED_MODULE_5__utils_api__["a" /* default */].wxUploadFile({
        filePath: tempFilePaths,
        formData: par
      }).then(function (res) {});
    }
  }
});

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    count: 0,
    wxInfo: null,
    userInfo: {},
    openId: '',
    appId: '',
    sendBtnShow: false,
    shareOpenId: ''
  },
  mutations: {
    inUserInfo: function inUserInfo(state, data) {
      var obj = state;
      if (data != '' && data != undefined) {
        wx.setStorageSync('userInfo', data);
      }
      obj.userInfo = data || wx.getStorageSync('userInfo');
    },
    inWxInfo: function inWxInfo(state) {
      var obj = state;
    },
    inOpenId: function inOpenId(state, data) {
      var obj = state;
      if (data != '' && data != undefined) {
        wx.setStorageSync('openId', data);
      }
      obj.openId = data || wx.getStorageSync('openId');
    },
    inSendBtn: function inSendBtn(state, data) {
      var obj = state;
      obj.inSendBtn = data;
    },
    shareOpenId: function shareOpenId(state, data) {
      state.shareOpenId = data;
    }
  }
});

/* unused harmony default export */ var _unused_webpack_default_export = (store);

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_uploader_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f8594996_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_uploader_vue__ = __webpack_require__(164);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(162)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f8594996"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_uploader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f8594996_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_uploader_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\uploader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] uploader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f8594996", Component.options)
  } else {
    hotAPI.reload("data-v-f8594996", Component.options)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'uploader',
  props: {
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    title: String,
    max: Number
  },
  computed: {
    files: function files() {
      var curFiles = this.max ? this.fileList.slice(0, this.max) : this.fileList;
      return curFiles.map(function (file) {
        file.hasMask = file.failure || file.progress && file.progress !== 100;

        return file;
      });
    }
  },
  methods: {
    preview: function preview(rawFile) {
      if (rawFile.failure) return;
      wx.previewImage({
        current: rawFile.path,
        urls: this.files.filter(function (file) {
          return !file.failure;
        }).map(function (file) {
          return file.path;
        })
      });
    },
    longtap: function longtap(rawFile, i) {
      var _this2 = this;

      var _this = this;
      var itemList = ['预览图片', '删除图片'];
      this.$wxapi.showActionSheet({ itemList: itemList }).then(function (res) {
        if (res.tapIndex == 0) {
          // 打开大图
          _this.preview(rawFile);
        } else if (res.tapIndex == 1) {
          // 删除
          // this.fileList.splice(i, 1)
          // console.log(rawFile)
          _this2.$emit('dele', { i: i, target: rawFile });
        }
      }).catch(function (res) {
        // console.log(res)
      });
    }
  }
});

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', {
    staticClass: "weui-uploader m-x-1"
  }, [_c('div', {
    staticClass: "weui-uploader__hd"
  }, [_c('i-cell', {
    attrs: {
      "i-class": "m-b-1",
      "title": _vm.title,
      "mpcomid": '0'
    }
  }, [(_vm.max) ? _c('span', {
    slot: "footer"
  }, [_vm._v(_vm._s(_vm.files.length) + "/" + _vm._s(_vm.max))]) : _vm._e()])], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-uploader__bd"
  }, [_c('div', {
    staticClass: "weui-uploader__files clearfix "
  }, [_vm._l((_vm.files), function(file, index) {
    return _c('div', {
      key: file.imgUrl,
      staticClass: "upimg-list"
    }, [_c('div', {
      class: ['weui-uploader__file', {
        'weui-uploader__file_status': file.hasMask
      }],
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.longtap(file, index)
        }
      }
    }, [_c('img', {
      staticClass: "weui-uploader__img",
      attrs: {
        "mode": "aspectFill",
        "src": file.path
      }
    }), _vm._v(" "), (file.hasMask) ? _c('div', {
      staticClass: "weui-uploader__file-content"
    }, [(file.failure) ? _c('i-icon', {
      attrs: {
        "color": "#F43530",
        "type": "prompt_fill",
        "size": "23",
        "mpcomid": '1-' + index
      }
    }) : _c('span', {
      domProps: {
        "textContent": _vm._s(file.progress + '%')
      }
    })], 1) : _vm._e()])])
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-uploader__input-box clearfix"
  }, [_c('div', {
    staticClass: "weui-uploader__input center-a",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.$emit('onSelect')
      }
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "add",
      "color": "#80848f",
      "size": "34",
      "mpcomid": '2'
    }
  })], 1)])], 2)])])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f8594996", esExports)
  }
}

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validateURL */
/* unused harmony export validateLowerCase */
/* unused harmony export validateUpperCase */
/* unused harmony export validatAlphabets */
/* unused harmony export validatPhone */
/* unused harmony export validatEmail */
/* 合法uri */
function validateURL(textval) {
  var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

/* 小写字母 */
function validateLowerCase(str) {
  var reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母 */
function validateUpperCase(str) {
  var reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母 */
function validatAlphabets(str) {
  var reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/* 手机号码 */
function validatPhone(str) {
  var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
  return reg.test(str);
}
/* 邮箱 */
function validatEmail(str) {
  var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return reg.test(str);
}

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app"
  }, [_c('div', {
    staticClass: "edit-top bgf m-x-1 m-b-1"
  }, [_c('div', {
    staticClass: "edit-img p-t-2 p-b-1 center-a "
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.strAvatarUrl,
      "alt": "",
      "eventid": '0'
    },
    on: {
      "click": _vm.modifiyHead
    }
  })]), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": "名字",
      "mpcomid": '0'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userInfo.strName),
      expression: "userInfo.strName"
    }],
    staticClass: "p-l-2 p-y-1 font-title",
    attrs: {
      "placeholder": "修改名字",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.userInfo.strName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userInfo.strName = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": "电话号码",
      "mpcomid": '1'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userInfo.strMobile),
      expression: "userInfo.strMobile"
    }],
    staticClass: "p-l-2 p-y-1 font-title",
    attrs: {
      "type": "number",
      "placeholder": "修改电话号码",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.userInfo.strMobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userInfo.strMobile = $event.target.value
      }
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "bgf m-x-1 m-b-1"
  }, [_c('i-panel', {
    attrs: {
      "title": "公司名字",
      "mpcomid": '2'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userInfo.strCompany),
      expression: "userInfo.strCompany"
    }],
    staticClass: "p-l-2 p-y-1 font-title",
    attrs: {
      "placeholder": "请输入公司名字",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.userInfo.strCompany)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userInfo.strCompany = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": "职位",
      "mpcomid": '3'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userInfo.strPosition),
      expression: "userInfo.strPosition"
    }],
    staticClass: "p-l-2 p-y-1 font-title",
    attrs: {
      "type": "text",
      "placeholder": "请输入职位",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.userInfo.strPosition)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userInfo.strPosition = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": "邮箱",
      "mpcomid": '4'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userInfo.strEmail),
      expression: "userInfo.strEmail"
    }],
    staticClass: "p-l-2 p-y-1 font-title",
    attrs: {
      "type": "text",
      "placeholder": "请输入邮箱",
      "eventid": '5'
    },
    domProps: {
      "value": (_vm.userInfo.strEmail)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userInfo.strEmail = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '7'
    }
  }, [_c('i-cell', {
    attrs: {
      "title": "修改背景图",
      "eventid": '7',
      "mpcomid": '6'
    },
    on: {
      "click": _vm.modifiyBackground
    }
  }, [_c('i-avatar', {
    attrs: {
      "src": _vm.userInfo.strBackground,
      "size": "default",
      "shape": "square",
      "eventid": '6',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.modifiyBackground
    },
    slot: "footer"
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "bgf m-x-1 m-b-1"
  }, [_c('i-panel', {
    attrs: {
      "title": "简介",
      "mpcomid": '8'
    }
  }, [_c('div', {
    staticClass: "desc-wrapper clearfix"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userInfo.strIntro),
      expression: "userInfo.strIntro"
    }],
    staticClass: "desc-textarea",
    attrs: {
      "placeholder": "请输入个人简介(最多200字)",
      "maxlength": "200",
      "eventid": '8'
    },
    domProps: {
      "value": (_vm.userInfo.strIntro)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userInfo.strIntro = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-textarea-counter fr p-r-2 m-b-1"
  }, [_vm._v(_vm._s(_vm.fontNumTotal) + "/200")])])])], 1), _vm._v(" "), _c('uploader', {
    attrs: {
      "file-list": _vm.files,
      "title": "文件上传",
      "max": _vm.max,
      "eventid": '9',
      "mpcomid": '9'
    },
    on: {
      "onSelect": _vm.onSelect,
      "longtap": _vm.longtap,
      "dele": _vm.dele
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "submit-btn"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "eventid": '10',
      "mpcomid": '10'
    },
    on: {
      "click": _vm.saveForm
    }
  }, [_vm._v("提交保存")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48933eea", esExports)
  }
}

/***/ })

},[143]);
//# sourceMappingURL=main.js.map