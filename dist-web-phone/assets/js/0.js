(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vant/es/list/index.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??ref--6-oneOf-3-2!./node_modules/vant/es/list/index.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".van-list__error-text,.van-list__finished-text,.van-list__loading{color:#969799;font-size:14px;line-height:50px;text-align:center}.van-list__placeholder{height:0;pointer-events:none}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/vant/es/list/index.css?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??ref--6-oneOf-3-2");

/***/ }),

/***/ "./node_modules/vant/es/list/index.css":
/*!*********************************************!*\
  !*** ./node_modules/vant/es/list/index.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../postcss-loader/src??ref--6-oneOf-3-2!./index.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vant/es/list/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"06c159fb\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./node_modules/vant/es/list/index.css?");

/***/ }),

/***/ "./node_modules/vant/es/list/index.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/list/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./node_modules/vant/es/utils/index.js\");\n/* harmony import */ var _utils_dom_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/style */ \"./node_modules/vant/es/utils/dom/style.js\");\n/* harmony import */ var _utils_dom_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom/scroll */ \"./node_modules/vant/es/utils/dom/scroll.js\");\n/* harmony import */ var _mixins_bind_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/bind-event */ \"./node_modules/vant/es/mixins/bind-event.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading */ \"./node_modules/vant/es/loading/index.js\");\n// Utils\n\n\n // Mixins\n\n // Components\n\n\n\nvar _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createNamespace\"])('list'),\n    createComponent = _createNamespace[0],\n    bem = _createNamespace[1],\n    t = _createNamespace[2];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createComponent({\n  mixins: [Object(_mixins_bind_event__WEBPACK_IMPORTED_MODULE_3__[\"BindEventMixin\"])(function (bind) {\n    if (!this.scroller) {\n      this.scroller = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_2__[\"getScroller\"])(this.$el);\n    }\n\n    bind(this.scroller, 'scroll', this.check);\n  })],\n  model: {\n    prop: 'loading'\n  },\n  props: {\n    error: Boolean,\n    loading: Boolean,\n    finished: Boolean,\n    errorText: String,\n    loadingText: String,\n    finishedText: String,\n    immediateCheck: {\n      type: Boolean,\n      default: true\n    },\n    offset: {\n      type: [Number, String],\n      default: 300\n    },\n    direction: {\n      type: String,\n      default: 'down'\n    }\n  },\n  data: function data() {\n    return {\n      // use sync innerLoading state to avoid repeated loading in some edge cases\n      innerLoading: this.loading\n    };\n  },\n  updated: function updated() {\n    this.innerLoading = this.loading;\n  },\n  mounted: function mounted() {\n    if (this.immediateCheck) {\n      this.check();\n    }\n  },\n  watch: {\n    loading: 'check',\n    finished: 'check'\n  },\n  methods: {\n    // @exposed-api\n    check: function check() {\n      var _this = this;\n\n      this.$nextTick(function () {\n        if (_this.innerLoading || _this.finished || _this.error) {\n          return;\n        }\n\n        var el = _this.$el,\n            scroller = _this.scroller,\n            offset = _this.offset,\n            direction = _this.direction;\n        var scrollerRect;\n\n        if (scroller.getBoundingClientRect) {\n          scrollerRect = scroller.getBoundingClientRect();\n        } else {\n          scrollerRect = {\n            top: 0,\n            bottom: scroller.innerHeight\n          };\n        }\n\n        var scrollerHeight = scrollerRect.bottom - scrollerRect.top;\n        /* istanbul ignore next */\n\n        if (!scrollerHeight || Object(_utils_dom_style__WEBPACK_IMPORTED_MODULE_1__[\"isHidden\"])(el)) {\n          return false;\n        }\n\n        var isReachEdge = false;\n\n        var placeholderRect = _this.$refs.placeholder.getBoundingClientRect();\n\n        if (direction === 'up') {\n          isReachEdge = scrollerRect.top - placeholderRect.top <= offset;\n        } else {\n          isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;\n        }\n\n        if (isReachEdge) {\n          _this.innerLoading = true;\n\n          _this.$emit('input', true);\n\n          _this.$emit('load');\n        }\n      });\n    },\n    clickErrorText: function clickErrorText() {\n      this.$emit('update:error', false);\n      this.check();\n    },\n    genLoading: function genLoading() {\n      var h = this.$createElement;\n\n      if (this.innerLoading && !this.finished) {\n        return h(\"div\", {\n          \"key\": \"loading\",\n          \"class\": bem('loading')\n        }, [this.slots('loading') || h(_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          \"attrs\": {\n            \"size\": \"16\"\n          }\n        }, [this.loadingText || t('loading')])]);\n      }\n    },\n    genFinishedText: function genFinishedText() {\n      var h = this.$createElement;\n\n      if (this.finished) {\n        var text = this.slots('finished') || this.finishedText;\n\n        if (text) {\n          return h(\"div\", {\n            \"class\": bem('finished-text')\n          }, [text]);\n        }\n      }\n    },\n    genErrorText: function genErrorText() {\n      var h = this.$createElement;\n\n      if (this.error) {\n        var text = this.slots('error') || this.errorText;\n\n        if (text) {\n          return h(\"div\", {\n            \"on\": {\n              \"click\": this.clickErrorText\n            },\n            \"class\": bem('error-text')\n          }, [text]);\n        }\n      }\n    }\n  },\n  render: function render() {\n    var h = arguments[0];\n    var Placeholder = h(\"div\", {\n      \"ref\": \"placeholder\",\n      \"key\": \"placeholder\",\n      \"class\": bem('placeholder')\n    });\n    return h(\"div\", {\n      \"class\": bem(),\n      \"attrs\": {\n        \"role\": \"feed\",\n        \"aria-busy\": this.innerLoading\n      }\n    }, [this.direction === 'down' ? this.slots() : Placeholder, this.genLoading(), this.genFinishedText(), this.genErrorText(), this.direction === 'up' ? this.slots() : Placeholder]);\n  }\n}));\n\n//# sourceURL=webpack:///./node_modules/vant/es/list/index.js?");

/***/ }),

/***/ "./node_modules/vant/es/list/style/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/list/style/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/base.css */ \"./node_modules/vant/es/style/base.css\");\n/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_base_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loading_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../loading/index.css */ \"./node_modules/vant/es/loading/index.css\");\n/* harmony import */ var _loading_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loading_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.css */ \"./node_modules/vant/es/list/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./node_modules/vant/es/list/style/index.js?");

/***/ }),

/***/ "./node_modules/vant/es/loading/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/es/loading/style/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/base.css */ \"./node_modules/vant/es/style/base.css\");\n/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_base_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ \"./node_modules/vant/es/loading/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./node_modules/vant/es/loading/style/index.js?");

/***/ }),

/***/ "./src/assets/images/pic_nodate.png":
/*!******************************************!*\
  !*** ./src/assets/images/pic_nodate.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/pic_nodate.aa9e851a.png\";\n\n//# sourceURL=webpack:///./src/assets/images/pic_nodate.png?");

/***/ }),

/***/ "./src/request/request.js":
/*!********************************!*\
  !*** ./src/request/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\n\nvar _elementUi = __webpack_require__(/*! element-ui */ \"element-ui\");\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! @/store */ \"./src/store/index.js\"));\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! ../router */ \"./src/router/index.js\"));\n\n// create an axios instance\nconst service = _axios.default.create({\n  baseURL: \"http://m.t.arthurex.com/\",\n  // url = base url + request url\n  // withCredentials: true, // send cookies when cross-domain requests\n  timeout: 50000 // request timeout\n\n}); // request interceptor\n\n\nservice.interceptors.request.use(config => {\n  if (localStorage.getItem(\"token\")) {\n    config.headers[\"token\"] = localStorage.getItem(\"token\");\n  }\n\n  return config;\n}, error => {\n  // do something with request error\n  return Promise.reject(error);\n}); // response interceptor\n\nservice.interceptors.response.use(response => {\n  if (response.headers[\"refresh-token\"]) {\n    localStorage.setItem(\"token\", response.headers[\"refresh-token\"]);\n  }\n\n  return response.data;\n}, error => {\n  console.log(\"err\" + error); // for debug\n\n  let that = void 0;\n\n  if (typeof error.response !== \"undefined\") {\n    if (error.response.data.code === 401) {\n      setTimeout(function () {\n        _store.default.dispatch(\"user/resetToken\").then(() => {\n          window.location.href = \"/login?redirect=%2Fdashboard\";\n        });\n      }, 500);\n    } else {\n      let errMsg = error.response.data.msg;\n      (0, _elementUi.Message)({\n        message: errMsg,\n        type: \"error\",\n        duration: 3 * 1000\n      });\n    }\n  }\n\n  return Promise.reject(error);\n});\nvar _default = service;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/request/request.js?");

/***/ }),

/***/ "./src/request/user.js":
/*!*****************************!*\
  !*** ./src/request/user.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authVerify = exports.recordsList = exports.taftBoert = exports.kycInfo = exports.addkyc = exports.areaList = exports.loginLog = exports.marketingLog = exports.rebateLog = exports.preSaleLog = exports.myMarketing = exports.subBook = exports.myPreSale = exports.userInfo = void 0;\n\nvar _http = __webpack_require__(/*! ./http */ \"./src/request/http.js\");\n\nvar _request = _interopRequireDefault(__webpack_require__(/*! ./request */ \"./src/request/request.js\"));\n\nconst baseUrl = \"api/v1/\"; // 用户信息\n\nconst userInfo = params => {\n  return (0, _http.post)(baseUrl + \"user/info\", params);\n}; // export function userInfo(data) {\n//     return request({\n//         url: baseUrl + \"user/info\",\n//         method: \"post\",\n//         data,\n//     });\n// }\n// 我的预售\n\n\nexports.userInfo = userInfo;\n\nconst myPreSale = params => {\n  return (0, _http.post)(baseUrl + \"user/pre-sale\", params);\n}; //提交预售\n\n\nexports.myPreSale = myPreSale;\n\nconst subBook = params => {\n  return (0, _http.post)(baseUrl + \"user/pre-sale/book\", params);\n}; // 我的推广\n\n\nexports.subBook = subBook;\n\nconst myMarketing = params => {\n  return (0, _http.post)(baseUrl + \"user/marketing\", params);\n}; // 申购金记录\n\n\nexports.myMarketing = myMarketing;\n\nconst preSaleLog = params => {\n  return (0, _http.post)(baseUrl + \"market/pre-sale/records\", params);\n}; // 累计返利记录\n\n\nexports.preSaleLog = preSaleLog;\n\nconst rebateLog = params => {\n  return (0, _http.post)(baseUrl + \"market/rebate/records\", params);\n}; // 推广用户记录\n\n\nexports.rebateLog = rebateLog;\n\nconst marketingLog = params => {\n  return (0, _http.post)(baseUrl + \"user/marketing/record\", params);\n}; //登录记录\n\n\nexports.marketingLog = marketingLog;\n\nconst loginLog = params => {\n  return (0, _http.post)(baseUrl + \"user/login/record\", params);\n}; //地区\n\n\nexports.loginLog = loginLog;\n\nconst areaList = params => {\n  return (0, _http.post)(baseUrl + \"base-info/country/list\", params);\n}; //添加KYC\n\n\nexports.areaList = areaList;\n\nconst addkyc = params => {\n  return (0, _http.post)(baseUrl + \"user/kyc\", params);\n}; //获取\n\n\nexports.addkyc = addkyc;\n\nconst kycInfo = params => {\n  return (0, _http.post)(baseUrl + \"user/kyc/info\", params);\n};\n\nexports.kycInfo = kycInfo;\n\nconst taftBoert = params => {\n  return (0, _http.post)(baseUrl + \"account/transfer/aeco\", params);\n};\n\nexports.taftBoert = taftBoert;\n\nconst recordsList = params => {\n  return (0, _http.post)(baseUrl + \"account/transfer/records\", params);\n};\n\nexports.recordsList = recordsList;\n\nconst authVerify = params => {\n  return (0, _http.post)(baseUrl + \"account/transfer/auth/verify\", params);\n};\n\nexports.authVerify = authVerify;\n\n//# sourceURL=webpack:///./src/request/user.js?");

/***/ })

}]);