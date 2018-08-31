global.webpackJsonp([3],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(132);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '名片',
    'usingComponents': {
      'i-row': '../../dist/row/index',
      'i-col': '../../dist/col/index',
      'i-icon': '../../dist/icon/index',
      'i-button': '../../dist/button/index',
      'i-divider': '../../dist/divider/index',
      'i-load-more': '../../dist/load-more/index',
      'i-action-sheet': '../../dist/action-sheet/index'

    }
  }
});

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_40c71862_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(144);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(133)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-40c71862"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_40c71862_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40c71862", Component.options)
  } else {
    hotAPI.reload("data-v-40c71862", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_api__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_slideFull__ = __webpack_require__(55);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tabBar: {
        current: 'homepage'
      },
      innerAudioContext: {},
      percentAudio: 0,
      playTime: {
        duration: '0.00',
        currentTime: '0.00'
      },
      isPlay: false,
      shareVisible: false,
      shareActions: [{
        name: '去分享',
        icon: 'share',
        openType: 'share'
      }, {
        name: '名片画报',
        icon: 'dynamic',
        link: '/pages/madePoster/main'

      }],
      cardInfo: {},
      showInfo: false

    };
  },
  onShareAppMessage: function onShareAppMessage() {
    var _this = this;

    return {
      title: this.cardInfo.strName + '名片',
      imageUrl: this.cardInfo.strAvatarUrl,
      path: '/pages/home/main?strOpenId_b=' + this.openId,
      success: function () {
        var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee(res) {
          var Details, paramData;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  Details = _this.userInfo.strName + '分享了' + _this.shareCardInfo.strName + '的名片';
                  paramData = { 'Name': '分享名片', 'Type': '101', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': _this.openId, 'OperatedUserId': _this.shareOpenId };
                  _context.next = 4;
                  return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].post_aad_log(paramData);

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function success(_x) {
          return _ref.apply(this, arguments);
        };
      }(),
      fail: function fail(res) {}
    };
  },

  components: {
    slideFull: __WEBPACK_IMPORTED_MODULE_6__components_slideFull__["a" /* default */]
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapGetters */])({
    shareCardInfo: 'shareCardInfo',
    openId: 'openId',
    shareOpenId: 'shareOpenId',
    userInfo: 'userInfo'
  })),

  mounted: function mounted() {
    this.addCardLog();
    this.addCardList();
    this.getCardInfo();
    this.initAudio();
  },


  methods: {
    addCardLog: function addCardLog() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var Details, paramData;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Details = _this2.userInfo.strName + '查看名片' + _this2.shareCardInfo.strName + '的名片';
                paramData = { 'Name': '查看名片', 'Type': '查看名片&a', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': _this2.openId, 'OperatedUserId': _this2.shareOpenId };
                _context2.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    addCardList: function addCardList() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var params;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = { 'strOpenId_c': _this3.openId, 'strOpenId_b': _this3.shareOpenId, type: 4 };
                _context3.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].post_like(params);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    getCardInfo: function getCardInfo() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var params, res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // console.log(this.$store.state.shareOpenId)
                params = { 'strOpenId_c': _this4.openId, 'strOpenId_b': _this4.shareOpenId };
                _context4.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].post_card_home(params);

              case 3:
                res = _context4.sent;

                _this4.cardInfo = res;
                console.log(res);
                _this4.$store.commit('shareCardInfo', res);

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    link: function link() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var params, res, Details, paramData;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                params = { 'strOpenId_c': _this5.openId, 'strOpenId_b': _this5.shareOpenId, type: 2 };
                _context5.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].post_like(params);

              case 3:
                res = _context5.sent;
                Details = _this5.userInfo.strName + '点赞了' + _this5.shareCardInfo.strName + '的名片';
                paramData = { 'Name': '点赞名片', 'Type': '100', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': _this5.openId, 'OperatedUserId': _this5.shareOpenId };
                _context5.next = 8;
                return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

              case 8:
                _this5.getCardInfo();

              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },
    dial: function dial(str) {
      var _this6 = this;

      this.$wxapi.makePhoneCall({
        phoneNumber: str
      }).then(function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6(res) {
          var Details, paramData;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  Details = _this6.userInfo.strName + '拨打了' + _this6.shareCardInfo.strName + '的电话';
                  paramData = { 'Name': '拨打电话', 'Type': '102', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': _this6.openId, 'OperatedUserId': _this6.shareOpenId };
                  _context6.next = 4;
                  return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

                case 4:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this6);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()).catch(function (res) {
        console.log(res);
      });
    },
    copy: function copy(str, type) {
      var _this7 = this;

      wx.setClipboardData({
        data: str,
        success: function () {
          var _ref3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee7(res) {
            var Details, paramData;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.t0 = type;
                    _context7.next = _context7.t0 === 'strEmail' ? 3 : _context7.t0 === 'wx' ? 8 : _context7.t0 === 'strCompany' ? 13 : _context7.t0 === 'strAddress' ? 18 : 23;
                    break;

                  case 3:
                    Details = _this7.userInfo.strName + '复制了' + _this7.shareCardInfo.strName + '的邮箱';
                    paramData = { 'Name': '复制邮箱', 'Type': '103', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': _this7.openId, 'OperatedUserId': _this7.shareOpenId };
                    _context7.next = 7;
                    return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

                  case 7:
                    return _context7.abrupt('break', 24);

                  case 8:
                    Details = _this7.userInfo.strName + '复制了' + _this7.shareCardInfo.strName + '的微信';
                    paramData = { 'Name': '复制微信', 'Type': '104', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': _this7.openId, 'OperatedUserId': _this7.shareOpenId };
                    _context7.next = 12;
                    return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

                  case 12:
                    return _context7.abrupt('break', 24);

                  case 13:
                    Details = _this7.userInfo.strName + '复制了' + _this7.shareCardInfo.strName + '的公司';
                    paramData = { 'Name': '复制公司', 'Type': '复制公司&a', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': _this7.openId, 'OperatedUserId': _this7.shareOpenId };
                    _context7.next = 17;
                    return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

                  case 17:
                    return _context7.abrupt('break', 24);

                  case 18:
                    Details = _this7.userInfo.strName + '复制了' + _this7.shareCardInfo.strName + '的地址';
                    paramData = { 'Name': '复制地址', 'Type': '复制地址&a', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': _this7.openId, 'OperatedUserId': _this7.shareOpenId };
                    _context7.next = 22;
                    return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

                  case 22:
                    return _context7.abrupt('break', 24);

                  case 23:
                    return _context7.abrupt('break', 24);

                  case 24:
                  case 'end':
                    return _context7.stop();
                }
              }
            }, _callee7, _this7);
          }));

          return function success(_x3) {
            return _ref3.apply(this, arguments);
          };
        }(),
        fail: function fail(res) {}
      });
    },
    saveBook: function saveBook() {
      var _this8 = this;

      wx.addPhoneContact({

        firstName: this.cardInfo.strName,
        mobilePhoneNumber: this.cardInfo.strMobile,
        weChatNumber: this.cardInfo.strMobile,
        workAddressStreet: this.cardInfo.strAddress,
        organization: this.cardInfo.strCompany,
        title: this.cardInfo.strPosition,
        success: function () {
          var _ref4 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee8(res) {
            var Details, paramData;
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    Details = _this8.userInfo.strName + '保存了' + _this8.shareCardInfo.strName + '的电话';
                    paramData = { 'Name': '保存电话', 'Type': '保存电话&a', 'Details': Details, 'Controller': 'home', 'Action': 'index', 'UserId': _this8.openId, 'OperatedUserId': _this8.shareOpenId };
                    _context8.next = 4;
                    return Object(__WEBPACK_IMPORTED_MODULE_4__http__["a" /* addEditLog */])(paramData);

                  case 4:
                    console.log(res);

                  case 5:
                  case 'end':
                    return _context8.stop();
                }
              }
            }, _callee8, _this8);
          }));

          return function success(_x4) {
            return _ref4.apply(this, arguments);
          };
        }(),
        fail: function fail(res) {
          console.log(res);
        }

      });
    },
    shareCard: function shareCard() {
      wx.showShareMenu({
        withShareTicket: true
      });
      this.shareVisible = true;
      // this.$router.push({ path: '/pages/madePoster/main' })
    },
    shareCancel: function shareCancel() {
      this.shareVisible = false;
    },
    shareClickItem: function shareClickItem(e) {
      this.shareVisible = false;
    },
    initAudio: function initAudio() {
      // 音频播放
      // debugger
      this.innerAudioContext = wx.createInnerAudioContext();
      // this.innerAudioContext.autoplay = true
      this.innerAudioContext.loop = false;
      this.innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
    },
    playAudio: function playAudio() {
      var _this9 = this;

      // debugger
      if (!this.isPlay) {
        this.innerAudioContext.play();
        this.innerAudioContext.onPlay(function () {
          // console.log('开始播放')
          // console.log(e)
          console.log(_this9.innerAudioContext.currentTime);
        });
        this.innerAudioContext.onTimeUpdate(function () {
          // console.log('当前音频的长度' + this.innerAudioContext.duration)
          _this9.playTime.duration = _this9.innerAudioContext.duration.toFixed(2);

          _this9.playTime.currentTime = _this9.innerAudioContext.currentTime.toFixed(2);
          // console.log(this.innerAudioContext.currentTime)
          _this9.percentAudio = _this9.innerAudioContext.currentTime / _this9.innerAudioContext.duration * 100;
        });
        this.innerAudioContext.onError(function (res) {
          console.log(res.errMsg);
          console.log(res.errCode);
        });
        this.innerAudioContext.onEnded(function () {
          _this9.initAudio();
          _this9.isPlay = false;
          _this9.percentAudio = 0;
          _this9.playTime.currentTime = '0.00';
        });
        this.isPlay = true;
      } else {
        this.innerAudioContext.pause();
        this.isPlay = false;
      }
    },
    sendInfo: function sendInfo() {
      this.$router.push({ path: '/pages/chat/main', query: { id: 'caixia' } });
    }
  }
});

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app"
  }, [_c('div', {
    staticClass: "card-wrapper p-x-3 p-t-3 p-b-1"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('div', {
    staticClass: "p-x-1"
  }, [_c('img', {
    staticClass: "card-img",
    attrs: {
      "src": _vm.cardInfo.strBackground,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "card-main-info p-a-3 clearfix"
  }, [_c('div', {
    staticClass: "card-main-info-l fl"
  }, [_c('span', {
    staticClass: "card-name text-oh font-title"
  }, [_vm._v("\n                       " + _vm._s(_vm.cardInfo.strName) + "\n                      ")]), _vm._v(" "), _c('span', {
    staticClass: "card-job-title font-sub"
  }, [_vm._v(_vm._s(_vm.cardInfo.strPosition))]), _vm._v(" "), _c('p', {
    staticClass: "card-phone font-sub"
  }, [_vm._v(_vm._s(_vm.cardInfo.strMobile))])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-company-logo fr border"
  }, [_c('img', {
    attrs: {
      "src": _vm.cardInfo.strAvatarUrl,
      "alt": ""
    }
  })])]), _vm._v(" "), _c('navigator', {
    staticClass: "card-list-btn",
    attrs: {
      "url": "/pages/cardlist/main",
      "open-type": "reLaunch"
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "businesscard",
      "size": "28",
      "color": "#fff",
      "mpcomid": '0'
    }
  })], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "bgf"
  }, [_c('div', {
    staticClass: "show-all-card text-center p-b-1",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.showInfo = !_vm.showInfo
      }
    }
  }, [(!_vm.showInfo) ? _c('div', [_c('span', {
    staticClass: "font-mini"
  }, [_vm._v("展开全部名片信息")]), _c('i-icon', {
    attrs: {
      "type": "unfold",
      "size": "14",
      "color": "#80848f",
      "mpcomid": '1'
    }
  })], 1) : _c('div', {
    staticClass: "show-all-card text-center p-b-1"
  }, [_c('span', {
    staticClass: "font-mini"
  }, [_vm._v("收起以下名片信息")]), _c('i-icon', {
    attrs: {
      "type": "packup",
      "size": "14",
      "color": "#80848f",
      "mpcomid": '2'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showInfo),
      expression: "showInfo"
    }],
    staticClass: "show-all-content p-x-3 p-y-1  bg"
  }, [_c('i-row', {
    attrs: {
      "i-class": "m-b-1",
      "mpcomid": '6'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "3",
      "i-class": "col-class font-color-sub",
      "mpcomid": '3'
    }
  }, [_vm._v("电话")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "15",
      "i-class": "col-class font-color-title",
      "mpcomid": '4'
    }
  }, [_vm._v(_vm._s(_vm.cardInfo.strMobile))]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '5'
    }
  }, [_c('button', {
    staticClass: "mini-btn m-x-0 fr",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.dial(_vm.cardInfo.strMobile, 'strMobile')
      }
    }
  }, [_vm._v("拨打")])], 1)], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "i-class": "m-b-1",
      "mpcomid": '10'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "3",
      "i-class": "col-class font-color-sub",
      "mpcomid": '7'
    }
  }, [_vm._v("微信")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "15",
      "i-class": "col-class font-color-title",
      "mpcomid": '8'
    }
  }, [_vm._v(_vm._s(_vm.cardInfo.strMobile))]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '9'
    }
  }, [_c('button', {
    staticClass: "mini-btn m-x-0 fr",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.copy(_vm.cardInfo.strMobile, 'wx')
      }
    }
  }, [_vm._v("复制")])], 1)], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "i-class": "m-b-1",
      "mpcomid": '14'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "3",
      "i-class": "col-class font-color-sub",
      "mpcomid": '11'
    }
  }, [_vm._v("邮箱")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "15",
      "i-class": "col-class font-color-title",
      "mpcomid": '12'
    }
  }, [_vm._v(_vm._s(_vm.cardInfo.strEmail))]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '13'
    }
  }, [_c('button', {
    staticClass: "mini-btn m-x-0 fr",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.copy(_vm.cardInfo.strEmail, 'strEmail')
      }
    }
  }, [_vm._v("复制")])], 1)], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "i-class": "m-b-1",
      "mpcomid": '18'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "3",
      "i-class": "col-class font-color-sub",
      "mpcomid": '15'
    }
  }, [_vm._v("公司")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "15",
      "i-class": "col-class font-color-title",
      "mpcomid": '16'
    }
  }, [_vm._v(_vm._s(_vm.cardInfo.strCompany))]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '17'
    }
  }, [_c('button', {
    staticClass: "mini-btn m-x-0 fr",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.copy(_vm.cardInfo.strCompany, 'strCompany')
      }
    }
  }, [_vm._v("复制")])], 1)], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "i-class": "m-b-1",
      "mpcomid": '22'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "3",
      "i-class": "col-class font-color-sub",
      "mpcomid": '19'
    }
  }, [_vm._v("地址")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "15",
      "i-class": "col-class font-color-title",
      "mpcomid": '20'
    }
  }, [_vm._v(_vm._s(_vm.cardInfo.strCompany))]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '21'
    }
  }, [_c('button', {
    staticClass: "mini-btn m-x-0 fr",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.copy(_vm.cardInfo.strCompany, 'strCompany')
      }
    }
  }, [_vm._v("复制")])], 1)], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "card-wrapper m-b-1 p-b-1"
  }, [_c('div', {
    staticClass: "button-btn"
  }, [_c('i-row', {
    attrs: {
      "i-class": "p-x-2",
      "mpcomid": '28'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "12",
      "i-class": "col-class",
      "mpcomid": '25'
    }
  }, [_c('i-button', {
    attrs: {
      "i-class": "card-btn ",
      "type": "ghost",
      "size": "small",
      "eventid": '6',
      "mpcomid": '23'
    },
    on: {
      "click": _vm.shareCard
    }
  }, [_vm._v("分享名片")]), _vm._v(" "), _c('i-action-sheet', {
    attrs: {
      "visible": _vm.shareVisible,
      "actions": _vm.shareActions,
      "show-cancel": "",
      "eventid": '7',
      "mpcomid": '24'
    },
    on: {
      "cancel": _vm.shareCancel,
      "click": _vm.shareClickItem
    }
  })], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "12",
      "i-class": "col-class",
      "mpcomid": '27'
    }
  }, [_c('i-button', {
    attrs: {
      "i-class": "card-btn",
      "type": "primary",
      "size": "small",
      "eventid": '8',
      "mpcomid": '26'
    },
    on: {
      "click": _vm.saveBook
    }
  }, [_vm._v("存入手机通讯录")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "look"
  }, [_c('i-row', {
    attrs: {
      "i-class": "p-x-3 vertical-y",
      "mpcomid": '33'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "12",
      "i-class": "col-class font-mini vertical-y",
      "mpcomid": '29'
    }
  }, [_c('span', {
    staticClass: "font-mini  look-h"
  }, [_vm._v(_vm._s(_vm.cardInfo.intHits))]), _vm._v(" "), _c('span', {
    staticClass: " look-h"
  }, [_vm._v("人浏览")])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "12",
      "i-class": "col-class",
      "mpcomid": '32'
    }
  }, [_c('div', {
    staticClass: "fr m-p-1 font-sub text-center",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.link
    }
  }, [(_vm.cardInfo.isLike) ? _c('i-icon', {
    attrs: {
      "type": "praise_fill",
      "size": "22",
      "mpcomid": '31'
    }
  }) : _c('i-icon', {
    attrs: {
      "type": "praise",
      "size": "22",
      "color": "#1c2438",
      "mpcomid": '30'
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "font-mini"
  }, [_c('span', {
    staticClass: "look-link-f"
  }, [_vm._v("靠谱")]), _vm._v(" "), _c('span', {
    staticClass: "font-title look-link"
  }, [_vm._v(_vm._s(_vm.cardInfo.intLikes))])])], 1)])], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "card-wrapper p-x-3 m-b-1 "
  }, [_c('div', {
    staticClass: "title clearfix"
  }, [_c('h4', {
    staticClass: "font-title fl text-oh bold"
  }, [_vm._v("我推荐的商品")]), _vm._v(" "), _c('span', {
    staticClass: "font-mini fr text-right"
  }, [_vm._v("全部商品"), _c('i-icon', {
    attrs: {
      "type": "enter",
      "size": "12",
      "mpcomid": '34'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "shop-list clearfix"
  }, _vm._l((2), function(items, index) {
    return _c('div', {
      key: index,
      staticClass: "shop-items fl m-b-2 p-b-1"
    }, [_c('img', {
      attrs: {
        "src": "https://i.loli.net/2017/08/21/599a521472424.jpg",
        "alt": ""
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "font"
    }, [_vm._v("\n                        加推人只能名片10人精英版（123465678）\n                    ")]), _vm._v(" "), _c('span', {
      staticClass: "font-mini"
    }, [_vm._v("\n                        ¥1000\n                    ")])], 1)
  }))]), _vm._v(" "), _c('div', {
    staticClass: "card-wrapper p-x-3 m-b-1 p-b-2"
  }, [_c('div', {
    staticClass: "title clearfix"
  }, [_c('h4', {
    staticClass: "font-title fl text-oh bold"
  }, [_vm._v("我的个人简介")])], 1), _vm._v(" "), _c('div', {
    staticClass: "font font-color-title"
  }, [_vm._v("\n               " + _vm._s(_vm.cardInfo.strIntro) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "audio clearfix border p-x-2 p-y-1 center-y m-y-2"
  }, [_c('div', {
    staticClass: "audio-icon fl center-a",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.playAudio
    }
  }, [_c('i', {
    staticClass: "icon_audio_default",
    class: {
      icon_audio_playing: _vm.isPlay
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "audio-cont fl"
  }, [_c('p', {
    staticClass: "font"
  }, [_vm._v("我的语音介绍")]), _vm._v(" "), _c('progress', {
    staticClass: "m-y-1",
    attrs: {
      "percent": _vm.percentAudio,
      "stroke-width": "2",
      "activeColor": "#09BB07"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  }, [_c('span', {
    staticClass: "fl font-mini"
  }, [_vm._v(_vm._s(_vm.playTime.currentTime))]), _vm._v(" "), _c('span', {
    staticClass: "fr font-mini"
  }, [_vm._v(_vm._s(_vm.playTime.duration))])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-wrapper p-x-3 m-b-1 p-b-2"
  }, [_c('div', {
    staticClass: "title clearfix"
  }, [_c('h4', {
    staticClass: "font-title fl text-oh bold"
  }, [_vm._v("我的印象标签")])], 1), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "card-wrapper m-b-1 p-b-2"
  }, [_c('div', {
    staticClass: "title clearfix  p-x-3"
  }, [_c('h4', {
    staticClass: "font-title text-oh fl bold"
  }, [_vm._v("我的照片")])], 1), _vm._v(" "), (_vm.cardInfo.images != '') ? _c('slideFull', {
    attrs: {
      "imgUrls": _vm.cardInfo.images,
      "mpcomid": '35'
    }
  }) : _c('p', {
    staticClass: "font-sub text-center p-y-1"
  }, [_vm._v("照片空空如也")])], 1), _vm._v(" "), _c('button', {
    staticClass: "send-msg text-center border",
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": _vm.sendInfo
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "brush",
      "size": "18",
      "color": "#2d8cf0",
      "mpcomid": '36'
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "font-mini"
  }, [_vm._v("留言")])], 1), _vm._v(" "), _c('i-divider', {
    attrs: {
      "content": "我是有底线的！",
      "mpcomid": '37'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "clearfix"
  }, [_c('div', {
    staticClass: "tag p-x-1"
  }, [_c('span', {
    staticClass: "font"
  }, [_vm._v(" 获客神器")]), _c('span', {
    staticClass: "m-l-1 font-mini font-color-main",
    staticStyle: {
      "color": "#fff"
    }
  }, [_vm._v("1030")])]), _vm._v(" "), _c('div', {
    staticClass: "tag p-x-1"
  }, [_c('span', {
    staticClass: "font"
  }, [_vm._v(" 获客神器")]), _c('span', {
    staticClass: "m-l-1 font-mini font-color-main",
    staticStyle: {
      "color": "#fff"
    }
  }, [_vm._v("1030")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-40c71862", esExports)
  }
}

/***/ })

},[131]);
//# sourceMappingURL=main.js.map