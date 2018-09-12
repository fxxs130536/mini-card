global.webpackJsonp([3],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(136);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: false,
    navigationBarTitleText: '电子名片',
    'usingComponents': {
      'i-icon': '../../dist/icon/index'
    }
  }
});

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4dc50f08_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(142);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4dc50f08"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4dc50f08_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\chat\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dc50f08", Component.options)
  } else {
    hotAPI.reload("data-v-4dc50f08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 137:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_api__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_global__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(2);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      chatTop: 0,
      scrollB: true,
      scrollHeight: 0,
      message: [],
      focus: false,
      focusFlag: false,
      readyToSend: '',
      to: '',
      from: '',
      current: {},
      plus: false
    };
  },


  components: {},

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapGetters */])({
    userInfo: 'userInfo'
  })),

  mounted: function mounted() {},
  onLoad: function onLoad(p) {
    var _this = this;
    var contact = __WEBPACK_IMPORTED_MODULE_4__common_global__["a" /* default */].getContact(p.id);
    if (!contact) {
      this.$router.back();
      return;
    }
    wx.setNavigationBarTitle({ title: contact.name });

    this.loadMessage(p.id);
    // this.bottom()
    this.to = p.id;
  },


  methods: {
    loadMessage: function loadMessage(id) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _this, userinfo, message;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this2;
                userinfo = void 0, message = void 0;
                _context.prev = 2;
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_3__common_api__["a" /* default */].getUserInfo();

              case 5:
                userinfo = _context.sent;
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](2);

                console.log(_context.t0);
                userinfo = {
                  nickName: 'Gcaufy',
                  id: 'gcaufy'
                };

              case 12:
                _this2.current = userinfo;
                // console.log(userinfo)
                _context.prev = 13;
                _context.next = 16;
                return __WEBPACK_IMPORTED_MODULE_3__common_api__["a" /* default */].getHistory(id);

              case 16:
                message = _context.sent;
                _context.next = 24;
                break;

              case 19:
                _context.prev = 19;
                _context.t1 = _context['catch'](13);

                message = null;
                console.error('getHistory fail');
                console.log(_context.t1);

              case 24:

                if (message) {
                  _this2.message = message;

                  _this2.to = id;
                  _this2.message.forEach(function (msg) {
                    if (msg.from === 'me') {
                      msg.name = userinfo.nickName;
                      msg.icon = userinfo.avatarUrl;
                      // console.log(msg)
                    }
                  });
                }
                setTimeout(function () {
                  _this.bottom();
                }, 800);

              case 26:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 8], [13, 19]]);
      }))();
    },
    send: function send(evt) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var msg, id, msgObj, randomReply;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                msg = _this3.readyToSend;

                if (!msg) {
                  _context2.next = 15;
                  break;
                }

                id = _this3.to;
                _context2.next = 5;
                return __WEBPACK_IMPORTED_MODULE_3__common_api__["a" /* default */].sendMsg(id, msg);

              case 5:
                msgObj = _context2.sent;


                msgObj.name = _this3.current.nickName;
                msgObj.icon = _this3.current.avatarUrl;
                _this3.message.push(msgObj);
                _this3.bottom();
                _this3.clear();

                _context2.next = 13;
                return __WEBPACK_IMPORTED_MODULE_3__common_api__["a" /* default */].getRandomReply(id);

              case 13:
                randomReply = _context2.sent;

                _this3.replyMessage(randomReply);

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    replyMessage: function replyMessage(msg) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var id, contact, msgObj;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = _this4.to;
                // console.log(id)

                contact = __WEBPACK_IMPORTED_MODULE_4__common_global__["a" /* default */].getContact(id);
                // console.log(contact)

                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_3__common_api__["a" /* default */].replyMsg(id, msg);

              case 4:
                msgObj = _context3.sent;

                msgObj.name = contact.name;
                msgObj.icon = contact.icon;

                _this4.message.push(msgObj);
                _this4.bottom();

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      }))();
    },
    sendImg: function sendImg() {
      var that = this;
      this.$wxapi.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera']
      }).then(function () {
        var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(res) {
          var tempFilePaths, id, msgObj, data;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  // debugger
                  tempFilePaths = res.tempFilePaths;
                  id = that.to;

                  console.log(id);
                  _context4.next = 5;
                  return __WEBPACK_IMPORTED_MODULE_3__common_api__["a" /* default */].sendImg(id, tempFilePaths[0]);

                case 5:
                  msgObj = _context4.sent;

                  msgObj.name = that.current.nickName;
                  msgObj.icon = that.current.avatarUrl;
                  that.message.push(msgObj);
                  that.plus = false;

                  setTimeout(function () {
                    that.bottom();
                  }, 100);
                  data = {
                    id: id

                    // wx.uploadFile({
                    //   url: 'pg.php/ZXinfo/session_submit', // 提交信息至后台
                    //   filePath: tempFilePaths[0],
                    //   name: 'content', // 文件对应的参数名字(key)
                    //   formData: data, // 其它的表单信息
                    //   success: function (res) {
                    //     var a = true
                    //     that.loaddata(a)
                    //     message = ''
                    //   }
                    // })
                  };

                case 12:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    previewImage: function previewImage(path) {
      var imgArr = this.message.filter(function (v) {
        return v.type === 'images';
      });
      imgArr = imgArr.map(function (item) {
        return item.msg;
      });
      this.$wxapi.previewImage({
        current: path, // 当前显示图片的http链接
        urls: imgArr // 需要预览的图片http链接列表
      }).then(function (res) {});
    },
    input: function input(evt) {
      this.readyToSend = evt.mp.detail.value;
    },
    focus: function focus(evt) {
      this.focusFlag = true;
      this.focus = this.focusFlag;
      this.bottom();
    },
    blur: function blur(evt) {
      this.focusFlag = false;
      this.focus = this.focusFlag;
    },
    clear: function clear() {
      this.readyToSend = '';
    },
    bottom: function bottom() {
      var _this = this;
      var scrollHeight = wx.getSystemInfoSync().windowHeight;
      this.scrollHeight = scrollHeight + 'px';
      var query = wx.createSelectorQuery();
      query.select('#chatScrollView').boundingClientRect();
      query.selectViewport().scrollOffset();
      query.exec(function (res) {
        // console.log(res[0].height - scrollHeight)
        _this.chatTop = res[0].height - scrollHeight < 0 ? 999999999 : res[0].height - scrollHeight + 1000;
        if (res[0].height - scrollHeight < 0) {
          wx.pageScrollTo({
            scrollTop: 999999999,
            duration: 300
          });
        }
      });
    },
    openPlus: function openPlus() {
      this.plus = !this.plus;
    }
  }
});

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_contact__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_history__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mocks_reply__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_minapp_api_promise__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_minapp_api_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_minapp_api_promise__);








/* harmony default export */ __webpack_exports__["a"] = ({
  getRandomReply: function getRandomReply(id) {
    var template = __WEBPACK_IMPORTED_MODULE_3__mocks_reply__["a" /* default */][id];
    if (!template) {
      template = __WEBPACK_IMPORTED_MODULE_3__mocks_reply__["a" /* default */]['other'];
    }

    var index = Math.random() * template.length >> 0;

    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      setTimeout(function () {
        resolve(template[index]);
      });
    });
  },
  getContact: function getContact() {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      setTimeout(function () {
        resolve(__WEBPACK_IMPORTED_MODULE_1__mocks_contact__["a" /* default */]);
      });
    });
  },
  getUserInfo: function getUserInfo() {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      var cache = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* default */].getUserInfo();
      if (cache) {
        resolve(cache);
      } else {
        __WEBPACK_IMPORTED_MODULE_5_minapp_api_promise___default.a.login().then(function (res) {
          __WEBPACK_IMPORTED_MODULE_5_minapp_api_promise___default.a.getUserInfo().then(function (res) {
            console.log('getuserinfo success');
            console.log(res);
            __WEBPACK_IMPORTED_MODULE_4__global__["a" /* default */].setUserInfo(res.userInfo);
            resolve(res.userInfo);
          }).catch(reject);
        }).catch(reject);
      }
    });
  },


  // select * from history h
  // left join contact c
  // on (h.from == c.id or h.to == c.id)
  // where h.from = :id or h.to = :id or :id = '';
  // order by h.time asc;
  getHistory: function getHistory(id) {
    var _this = this;

    var history = __WEBPACK_IMPORTED_MODULE_5_minapp_api_promise___default.a.getStorageSync('_wechat_history_') || __WEBPACK_IMPORTED_MODULE_2__mocks_history__["a" /* default */];
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      setTimeout(function () {
        var sorted = history.sort(function (a, b) {
          return a.time - b.time;
        });
        if (!id) {
          resolve(_this.leftJoin(sorted, __WEBPACK_IMPORTED_MODULE_1__mocks_contact__["a" /* default */]));
        } else {
          resolve(_this.leftJoin(sorted.filter(function (v) {
            return v.from === id || v.to === id;
          }), __WEBPACK_IMPORTED_MODULE_1__mocks_contact__["a" /* default */]));
        }
      });
    });
  },

  // select *, (select msg from history h2 where h2.from = c.id or h2.to = c.id order by time desc limit 1) as lastmsg
  // from history h
  // left join contact c
  // on (h.from == c.id or h.to == c.id)
  // where h.from = :id or h.to = :id or :id = '';
  // order by h.time desc;
  getMessageList: function getMessageList() {
    var _this2 = this;

    var history = __WEBPACK_IMPORTED_MODULE_5_minapp_api_promise___default.a.getStorageSync('_wechat_history_') || __WEBPACK_IMPORTED_MODULE_2__mocks_history__["a" /* default */];
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      var distince = [];
      var rst = [];
      var sorted = history.sort(function (a, b) {
        return b.time - a.time;
      });
      sorted.forEach(function (v) {
        if (v.from !== 'me' && distince.indexOf(v.from) === -1) {
          distince.push(v.from);
        }
        if (v.to !== 'me' && distince.indexOf(v.to) === -1) {
          distince.push(v.to);
        }
      });

      distince.forEach(function (v) {
        var pmsg = sorted.filter(function (msg) {
          return msg.to === v || msg.from === v;
        });
        var lastmsg = pmsg.length ? pmsg[0].msg : '';

        rst.push({
          id: v,
          lastmsg: lastmsg
        });
      });

      setTimeout(function () {
        resolve(_this2.leftJoin(rst, __WEBPACK_IMPORTED_MODULE_1__mocks_contact__["a" /* default */]));
      });
    });
  },
  leftJoin: function leftJoin(original, contacts) {
    var contactObj = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* default */].getContact();
    var rst = [];

    original.forEach(function (v) {
      if (!v.id) {
        v.id = v.from !== 'me' ? v.from : v.to;
      }
      if (v.id) {
        if (v.id !== 'me') {
          v.name = contactObj[v.id].name;
          v.icon = 'https://i.loli.net/2017/08/21/599a521472424.jpg';
        }
        rst.push(v);
      }
    });
    return rst;
  },
  sendMsg: function sendMsg(to, msg) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';

    return this.msg('me', to, msg, type);
  },
  replyMsg: function replyMsg(frm, msg) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';

    return this.msg(frm, 'me', msg, type);
  },
  sendImg: function sendImg(to, msg) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'images';

    return this.msg('me', to, msg, type);
  },
  msg: function msg(frm, to, _msg, type) {
    var history = __WEBPACK_IMPORTED_MODULE_5_minapp_api_promise___default.a.getStorageSync('_wechat_history_') || __WEBPACK_IMPORTED_MODULE_2__mocks_history__["a" /* default */];
    var msgObj = {
      to: to,
      msg: _msg,
      type: type,
      from: frm,
      time: +new Date()
    };

    history.push(msgObj);

    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_5_minapp_api_promise___default.a.setStorage({ key: '_wechat_history_', data: history }).then(function () {
        resolve(msgObj);
      }).catch(reject);
    });
  },
  img: function img(frm, to, msg) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'images';

    var history = __WEBPACK_IMPORTED_MODULE_5_minapp_api_promise___default.a.getStorageSync('_wechat_history_') || __WEBPACK_IMPORTED_MODULE_2__mocks_history__["a" /* default */];
    var msgObj = {
      to: to,
      msg: msg,
      type: type,
      from: frm,
      time: +new Date()
    };

    history.push(msgObj);

    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_5_minapp_api_promise___default.a.setStorage({ key: '_wechat_history_', data: history }).then(function () {
        resolve(msgObj);
      }).catch(reject);
    });
  },
  clearMsg: function clearMsg(id) {
    return __WEBPACK_IMPORTED_MODULE_5_minapp_api_promise___default.a.clearStorage();
  }
});

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{ 'to': 'mahuateng', 'from': 'me', 'type': 'text', 'msg': '小马哥，我穷', 'time': 1480338091374 }, { 'to': 'me', 'from': 'mahuateng', 'type': 'text', 'msg': '300股，接着。', 'time': 1480338091375 }, { 'to': 'dinglei', 'from': 'me', 'type': 'text', 'msg': '为什么你们家的猪那么贵。', 'time': 1480338091378 }, { 'to': 'me', 'from': 'dinglei', 'type': 'text', 'msg': '因为他会飞。', 'time': 1480338091379 }, { 'to': 'mayun', 'from': 'me', 'type': 'text', 'msg': '支付鸨，挺好。', 'time': 1480338091384 }, { 'to': 'me', 'from': 'mayun', 'type': 'text', 'msg': '你懂的，嘿嘿。', 'time': 1480338091394 }]);

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    'huangshang': ['朕公务繁忙，爱卿请自便。', '大胆!', '朕待你不薄 你为何要这样对朕?', '朕的后宫怎能容下你这样的女人'],
    'huanghou': ['臣妾虽为皇后，也是皇上的妻子，身为人妻，侍奉夫君。', '臣妾做不到啊!'],
    'erkang': ['我鼻孔真的很大吗？', '对不起，我错了，我不该和她看雪，看月亮，从诗词歌赋谈到人生哲学。我以后只和你看雪，看月亮，从诗词歌赋谈到人生哲学。'],
    'xiaoyanzi': ['门前一只狗，在啃肉骨头，又来一只狗，双双打破头。', '人之初，性本善，性相近，习相远……狗不叫，猫不跳，鸡不飞，猪不闹……爹不疼，娘不要……'],
    'ziwei': ['尔康……你好过分哦!', '你和她看雪，看月亮，从诗词歌赋谈到人生哲学，我都没有和你看雪，看月亮，从诗词歌赋谈到人生哲学。'],
    'xiaojian': ['一箫一剑走江湖，千古情愁酒一壶!两脚踏翻尘世路，以天为盖地为庐!'],
    'wuage': ['小燕子，我真的好喜欢你 不管是那个刁蛮任性的你 活泼可爱的你 还是现在这个楚楚可怜的你 我都好喜欢好喜欢'],
    'other': ['休要调戏我。']
});

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page app page_chat",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.plus = false
      }
    }
  }, [_c('scroll-view', {
    staticClass: "chartboard",
    class: {
      fixed: _vm.focus, scrollP: _vm.plus
    },
    style: ({
      height: _vm.scrollHeight
    }),
    attrs: {
      "scroll-top": _vm.chatTop,
      "scroll-y": "",
      "id": "scrollH",
      "scroll-into-view": "scrBottom"
    }
  }, [_c('div', {
    attrs: {
      "id": "chatScrollView"
    }
  }, _vm._l((_vm.message), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "chat-item"
    }, [_c('view', {
      staticClass: "msgarea",
      class: [item.from === 'me' ? 'fromme' : 'other']
    }, [_c('image', {
      staticClass: "icon",
      attrs: {
        "src": item.icon
      }
    }), _vm._v(" "), (item.type === 'text') ? _c('view', {
      staticClass: "msg"
    }, [_vm._v(_vm._s(item.msg))]) : (item.type === 'images') ? _c('image', {
      staticClass: "msg-img",
      attrs: {
        "mode": "widthFix",
        "src": item.msg,
        "alt": "",
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.previewImage(item.msg)
        }
      }
    }) : _vm._e(), _vm._v(" "), _c('view', {
      staticClass: "clearfix"
    })])])
  })), _vm._v(" "), _c('div', {
    attrs: {
      "id": "scrBottom"
    }
  })]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "hei"
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "input shouw-plus",
    class: {
      plusShow: _vm.plus
    }
  }, [_c('view', {
    staticClass: "input_layout"
  }, [_c('image', {
    staticClass: "input_icon voice",
    attrs: {
      "src": "/../../static/assets/chat/voice.png"
    }
  }), _vm._v(" "), _c('image', {
    staticClass: "input_icon face",
    attrs: {
      "src": "/../../static/assets/chat/face.png"
    }
  }), _vm._v(" "), _c('image', {
    staticClass: "input_icon plus",
    attrs: {
      "src": "/../../static/assets/chat/plus.png",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.plus = !_vm.plus
      }
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "send",
    class: [_vm.readyToSend === '' ? 'hidden' : ''],
    attrs: {
      "eventid": '2'
    },
    on: {
      "tap": _vm.send
    }
  }, [_vm._v("发送")]), _vm._v(" "), _c('input', {
    staticClass: "input_text",
    class: [_vm.focusFlag ? 'focusFlag' : ''],
    attrs: {
      "value": _vm.readyToSend,
      "eventid": '3'
    },
    on: {
      "input": _vm.input,
      "focus": _vm.focus,
      "blur": _vm.blur,
      "type": _vm.input
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "plus-cont p-x-3 p-y-2 fl",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "plus-items m-b-1 "
  }, [_c('div', {
    staticClass: "plut-t border center-a",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.sendImg
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "picture_fill",
      "size": "28",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "font-sub text-oh text-center plut-b"
  }, [_vm._v("照片")])], 1)])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4dc50f08", esExports)
  }
}

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import wepy from 'wepy';

var users = [{ id: 'caixia', name: '彩霞' }, { id: 'erkang', name: '尔康' }, { id: 'ertai', name: '尔泰' }, { id: 'fuheng', name: '傅恒' }, { id: 'fujin', name: '福晋' }, { id: 'fulun', name: '福伦' }, { id: 'huanghou', name: '皇后' }, { id: 'huangshang', name: '皇上' }, { id: 'jingsuo', name: '金锁' }, { id: 'laofuoye', name: '老佛爷' }, { id: 'linfei', name: '令妃' }, { id: 'liuhong', name: '柳红' }, { id: 'liuqing', name: '柳青' }, { id: 'mingyue', name: '明月' }, { id: 'qinger', name: '晴儿' }, { id: 'rongmeme', name: '蓉嚒嚒' }, { id: 'saiya', name: '塞雅' }, { id: 'wuage', name: '五阿哥' }, { id: 'xiangfei', name: '香妃' }, { id: 'xiaodengzi', name: '小邓子' }, { id: 'xiaojian', name: '萧剑' }, { id: 'xiaoyanzi', name: '小燕子' }, { id: 'xiaozhuozi', name: '小卓子' }, { id: 'ziwei', name: '紫薇' }, { id: 'mahuateng', name: '马化腾' }, { id: 'mayun', name: '马云' }, { id: 'dinglei', name: '丁磊' }, { id: 'liyanhong', name: '李彦宏' }, { id: 'liuqiangdong', name: '刘强东' }, { id: 'liuchuanzhi', name: '刘传志' }];

users = users.sort(function (a, b) {
  return a.id.charCodeAt(0) - b.id.charCodeAt(0);
});

var table = users.map(function (v) {
  return {
    name: v.name,
    id: v.id,
    icon: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
  };
});
/* harmony default export */ __webpack_exports__["a"] = (table);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mocks_contact__ = __webpack_require__(64);


/* harmony default export */ __webpack_exports__["a"] = ({
  getContact: function getContact(v) {
    if (this._contact) {
      return v ? this._contact[v] : this._contact;
    } else {
      var contactObj = {};
      __WEBPACK_IMPORTED_MODULE_0__mocks_contact__["a" /* default */].forEach(function (v) {
        contactObj[v.id] = v;
      });
      this._contact = contactObj;
      return this.getContact(v);
    }
  },
  setContact: function setContact(k, v) {
    if (v) {
      if (this._contact) {
        this._contact[k] = v;
      } else {
        this._contact = {};
        this._contact[k] = v;
      }
    } else {
      this._contact = k;
    }
  },
  getUserInfo: function getUserInfo() {
    return this._userInfo;
  },
  setUserInfo: function setUserInfo(v) {
    this._userInfo = v;
  }
});

/***/ })

},[135]);
//# sourceMappingURL=main.js.map