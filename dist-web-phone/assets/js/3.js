(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Help/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Help/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _footer = _interopRequireDefault(__webpack_require__(/*! @/Layout/footer */ \"./src/Layout/footer.vue\"));\n\nvar _help = _interopRequireDefault(__webpack_require__(/*! @/language/help */ \"./src/language/help/index.js\"));\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  name: \"\",\n  components: {\n    webFoot: _footer.default\n  },\n\n  data() {\n    return {\n      languageNav: _help.default,\n      languageName: this.$languageName\n    };\n  },\n\n  computed: {},\n  watch: {},\n  methods: {},\n\n  created() {},\n\n  mounted() {}\n\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/views/Help/index.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"76f14f25-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Help/index.vue?vue&type=template&id=2a9ed83e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"76f14f25-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Help/index.vue?vue&type=template&id=2a9ed83e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"page\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"wrap\" },\n      [\n        _c(\"div\", { staticClass: \"page_content\" }, [\n          _c(\"div\", { staticClass: \"name\" }, [\n            _vm._v(_vm._s(_vm.languageNav[_vm.languageName].language_text1))\n          ]),\n          _c(\"div\", { staticClass: \"text-coaneret\" }, [\n            _c(\n              \"div\",\n              { staticStyle: { \"font-size\": \"18px\", \"margin-bottom\": \"10px\" } },\n              [\n                _vm._v(\n                  \" \" +\n                    _vm._s(_vm.languageNav[_vm.languageName].language_text2) +\n                    \" \"\n                )\n              ]\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"margin-bottom\": \"15px\", \"font-size\": \"14px\" } },\n              [\n                _c(\"div\", [\n                  _vm._v(\n                    _vm._s(_vm.languageNav[_vm.languageName].language_text3)\n                  )\n                ]),\n                _c(\"div\", { staticStyle: { color: \"#006ddd\" } }, [\n                  _vm._v(\"https://tafchain.com/#/signIn\")\n                ])\n              ]\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"margin-bottom\": \"20px\" } },\n              [\n                _vm.languageName == \"Chinese\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_ch1.png */ \"./src/assets/img/help_ch1.png\") }\n                      })\n                    ]\n                  : _vm._e(),\n                _vm.languageName == \"English\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_en1.png */ \"./src/assets/img/help_en1.png\") }\n                      })\n                    ]\n                  : _vm._e()\n              ],\n              2\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"margin-bottom\": \"50px\" } },\n              [\n                _vm.languageName == \"Chinese\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_ch2.png */ \"./src/assets/img/help_ch2.png\") }\n                      })\n                    ]\n                  : _vm._e(),\n                _vm.languageName == \"English\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_en2.png */ \"./src/assets/img/help_en2.png\") }\n                      })\n                    ]\n                  : _vm._e()\n              ],\n              2\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"font-size\": \"18px\", \"margin-bottom\": \"13px\" } },\n              [\n                _vm._v(\n                  \" \" +\n                    _vm._s(_vm.languageNav[_vm.languageName].language_text4) +\n                    \" \"\n                )\n              ]\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"margin-bottom\": \"15px\", \"font-size\": \"14px\" } },\n              [\n                _c(\"div\", [\n                  _vm._v(\n                    \" \" +\n                      _vm._s(_vm.languageNav[_vm.languageName].language_text5) +\n                      \" \"\n                  )\n                ])\n              ]\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"margin-bottom\": \"20px\" } },\n              [\n                _vm.languageName == \"Chinese\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_ch3.png */ \"./src/assets/img/help_ch3.png\") }\n                      })\n                    ]\n                  : _vm._e(),\n                _vm.languageName == \"English\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_en3.png */ \"./src/assets/img/help_en3.png\") }\n                      })\n                    ]\n                  : _vm._e()\n              ],\n              2\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"font-size\": \"18px\", \"margin-bottom\": \"13px\" } },\n              [\n                _vm._v(\n                  \" \" +\n                    _vm._s(_vm.languageNav[_vm.languageName].language_text6) +\n                    \" \"\n                )\n              ]\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"margin-bottom\": \"44px\", \"font-size\": \"14px\" } },\n              [\n                _c(\"div\", [\n                  _vm._v(\n                    _vm._s(_vm.languageNav[_vm.languageName].language_text7)\n                  )\n                ])\n              ]\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"margin-bottom\": \"20px\" } },\n              [\n                _vm.languageName == \"Chinese\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_ch4.png */ \"./src/assets/img/help_ch4.png\") }\n                      })\n                    ]\n                  : _vm._e(),\n                _vm.languageName == \"English\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_en4.png */ \"./src/assets/img/help_en4.png\") }\n                      })\n                    ]\n                  : _vm._e()\n              ],\n              2\n            ),\n            _c(\"div\", { staticStyle: { \"font-size\": \"14px\" } }, [\n              _vm._v(\n                \" \" +\n                  _vm._s(_vm.languageNav[_vm.languageName].language_text8) +\n                  \" \"\n              )\n            ]),\n            _c(\n              \"div\",\n              { staticStyle: { \"margin-bottom\": \"40px\" } },\n              [\n                _vm.languageName == \"Chinese\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_ch5.png */ \"./src/assets/img/help_ch5.png\") }\n                      })\n                    ]\n                  : _vm._e(),\n                _vm.languageName == \"English\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_en5.png */ \"./src/assets/img/help_en5.png\") }\n                      })\n                    ]\n                  : _vm._e()\n              ],\n              2\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"font-size\": \"18px\", \"margin-bottom\": \"13px\" } },\n              [\n                _vm._v(\n                  \" \" +\n                    _vm._s(_vm.languageNav[_vm.languageName].language_text9) +\n                    \" \"\n                )\n              ]\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"margin-bottom\": \"20px\", \"font-size\": \"14px\" } },\n              [\n                _c(\"div\", [\n                  _vm._v(\n                    _vm._s(_vm.languageNav[_vm.languageName].language_text10)\n                  )\n                ])\n              ]\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"margin-bottom\": \"20px\" } },\n              [\n                _vm.languageName == \"Chinese\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_ch6.png */ \"./src/assets/img/help_ch6.png\") }\n                      })\n                    ]\n                  : _vm._e(),\n                _vm.languageName == \"English\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_en6.png */ \"./src/assets/img/help_en6.png\") }\n                      })\n                    ]\n                  : _vm._e()\n              ],\n              2\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"font-size\": \"18px\", \"margin-bottom\": \"13px\" } },\n              [\n                _vm._v(\n                  \" \" +\n                    _vm._s(_vm.languageNav[_vm.languageName].language_text11) +\n                    \" \"\n                )\n              ]\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"margin-bottom\": \"20px\", \"font-size\": \"14px\" } },\n              [\n                _c(\"div\", [\n                  _vm._v(\n                    _vm._s(_vm.languageNav[_vm.languageName].language_text12)\n                  )\n                ])\n              ]\n            ),\n            _c(\n              \"div\",\n              { staticStyle: { \"margin-bottom\": \"20px\" } },\n              [\n                _vm.languageName == \"Chinese\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_ch7.png */ \"./src/assets/img/help_ch7.png\") }\n                      })\n                    ]\n                  : _vm._e(),\n                _vm.languageName == \"English\"\n                  ? [\n                      _c(\"img\", {\n                        attrs: { src: __webpack_require__(/*! @/assets/img/help_en7.png */ \"./src/assets/img/help_en7.png\") }\n                      })\n                    ]\n                  : _vm._e()\n              ],\n              2\n            )\n          ])\n        ]),\n        _c(\"webFoot\")\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/Help/index.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2276f14f25-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Help/index.vue?vue&type=style&index=0&id=2a9ed83e&lang=less&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Help/index.vue?vue&type=style&index=0&id=2a9ed83e&lang=less&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".page[data-v-2a9ed83e] {\\n  background: #f0f2f5;\\n  overflow: hidden;\\n  padding-top: 60px;\\n  box-sizing: border-box;\\n}\\n.page .wrap .page_indicator[data-v-2a9ed83e] {\\n  margin-top: 20px;\\n  height: 60px;\\n  line-height: 60px;\\n  color: #333333;\\n  font-size: 16px;\\n  padding: 0 30px;\\n  background: #ffffff;\\n}\\n.page .wrap .page_content[data-v-2a9ed83e] {\\n  margin: 20px 0 100px;\\n  padding: 38px;\\n  min-height: 800px;\\n  background: #ffffff;\\n}\\n.page .wrap .page_content .name[data-v-2a9ed83e] {\\n  color: #104cff;\\n  font-size: 20px;\\n  text-align: center;\\n  margin-bottom: 38px;\\n}\\n.page .wrap .page_content .KYC_logo[data-v-2a9ed83e] {\\n  width: 82px;\\n  height: 84px;\\n  margin: 20px auto 0;\\n}\\n.page .wrap .page_content .status[data-v-2a9ed83e] {\\n  font-size: 28px;\\n  color: #0e0e0e;\\n  margin: 20px auto 0;\\n}\\n.page .wrap .page_content .describe[data-v-2a9ed83e] {\\n  width: 800px;\\n  margin: 30px auto 0;\\n  color: #333333;\\n  font-size: 16px;\\n}\\n.page .wrap .page_content .again_btn[data-v-2a9ed83e] {\\n  cursor: pointer;\\n  margin: 80px auto 0;\\n  width: 240px;\\n  height: 48px;\\n  color: #fffffe;\\n  font-size: 16px;\\n  line-height: 48px;\\n  border-radius: 6px;\\n  background: linear-gradient(to right, #efcf54, #bf8d08);\\n}\\n.text-coaneret[data-v-2a9ed83e] {\\n  line-height: 30px;\\n  color: #545151;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/views/Help/index.vue?./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Help/index.vue?vue&type=style&index=0&id=2a9ed83e&lang=less&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Help/index.vue?vue&type=style&index=0&id=2a9ed83e&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2a9ed83e&lang=less&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Help/index.vue?vue&type=style&index=0&id=2a9ed83e&lang=less&scoped=true&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"7018aef1\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/views/Help/index.vue?./node_modules/vue-style-loader??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/assets/img/help_ch1.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_ch1.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_ch1.bbc6c8bf.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_ch1.png?");

/***/ }),

/***/ "./src/assets/img/help_ch2.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_ch2.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_ch2.4a487a2e.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_ch2.png?");

/***/ }),

/***/ "./src/assets/img/help_ch3.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_ch3.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_ch3.06eca307.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_ch3.png?");

/***/ }),

/***/ "./src/assets/img/help_ch4.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_ch4.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_ch4.57787326.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_ch4.png?");

/***/ }),

/***/ "./src/assets/img/help_ch5.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_ch5.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_ch5.fa6f469a.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_ch5.png?");

/***/ }),

/***/ "./src/assets/img/help_ch6.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_ch6.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_ch6.54aeeefe.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_ch6.png?");

/***/ }),

/***/ "./src/assets/img/help_ch7.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_ch7.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./src/assets/img/help_ch7.png?");

/***/ }),

/***/ "./src/assets/img/help_en1.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_en1.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_en1.8e615ebb.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_en1.png?");

/***/ }),

/***/ "./src/assets/img/help_en2.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_en2.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_en2.1f814ecf.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_en2.png?");

/***/ }),

/***/ "./src/assets/img/help_en3.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_en3.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_en3.3e48dfad.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_en3.png?");

/***/ }),

/***/ "./src/assets/img/help_en4.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_en4.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_en4.7a77f4f7.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_en4.png?");

/***/ }),

/***/ "./src/assets/img/help_en5.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_en5.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_en5.2960c35b.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_en5.png?");

/***/ }),

/***/ "./src/assets/img/help_en6.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_en6.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_en6.4174b1dc.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_en6.png?");

/***/ }),

/***/ "./src/assets/img/help_en7.png":
/*!*************************************!*\
  !*** ./src/assets/img/help_en7.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/help_en7.395ef02e.png\";\n\n//# sourceURL=webpack:///./src/assets/img/help_en7.png?");

/***/ }),

/***/ "./src/language/help/index.js":
/*!************************************!*\
  !*** ./src/language/help/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nconst languageNav = {\n  Chinese: {\n    language_text1: \"TAF Chain 申购帮助手册\",\n    language_text2: \"一、注册登录\",\n    language_text3: \"官网首页注册按钮进入注册页，通过邮箱进行注册，完成后登录\",\n    language_text4: \"二、身份认证\",\n    language_text5: \"完成登录后，通过点击【个人中心】可以看到【KYC 认证】，点击去认证。填写个人信息、资料并提交，等到官方人员进行审核。\",\n    language_text6: \"三、开始申购\",\n    language_text7: \"待 KYC（身份认证）审核成功通过后（1-3 个工作日内），进入预售页，点击【去抢购】 https://tafchain.com/#/presell\",\n    language_text8: \"在弹出的页面中填入自己期望抢购的数量，系统会自动计算您所需要支付的额度。 确认无误后阅读并确认申购协议，点击【下一步】\",\n    language_text9: \"四、 确认支付信息\",\n    language_text10: \"完成申购信息填写并确认后，系统再次弹出支付确认弹框，请确认支付额，并复制您的\\n\" + \"USDT_Omini 地址，通过第三方数字货币钱包或者交易所向您的独立地址完成相应额度的\\n\" + \"USDT 转账。\",\n    language_text11: \"五、支付\",\n    language_text12: \"如果您没有 USDT，可以通过 火币 进行场外交易购买\"\n  },\n  English: {\n    language_text1: \"TAF Chain Purchase Help Manual\",\n    language_text2: \"1. Register and Login\",\n    language_text3: \"Click the “Register” button in the upper right corner of the navigation bar to enter the registration\\n\" + \"page. Complete registration with your e-mail. Then login at\",\n    language_text4: \"2. Identify Verification\",\n    language_text5: 'After logging in, enter “Personal Centre” and click “KYC certification” to complete identify verification. Please fill in your personal details and submit the information for our staff to review.',\n    language_text6: \"3. Start Your Purchase\",\n    language_text7: \"After the KYC certification (identification verification) is reviewed and approved (which normally takes 1-3 working days), you could enter the “Pre-sale” page at https://tafchain.com/#/presell and click “PURCHASE” to start your purchase.\",\n    language_text8: \"In the pop-up window, fill in the number of the TAF Tokens you wish to buy. The system will\\n\" + \"    automatically work out the amount you need to pay. After confirming the amount, please read and\\n\" + \"declare your agreement of the Purchase Agreement. Then click “NEXT”.\",\n    language_text9: \"4. Confirm Your Payment\",\n    language_text10: \"After filling in and confirming your purchase details, you will be presented with another pop-up\\n\" + \"        window to confirm your payment. Please confirm the amount of the payment and copy your\\n\" + \"    USDT_Omini address to complete the payment by USDT transfer via a third-party crypto wallet or\\n\" + \"    the independent address provided by your exchange.\",\n    language_text11: \"5. Alternative Payment\",\n    language_text12: \"In case you could not pay by USDT transfer, you could alternatively make the payment via Huobi\\n\" + \"(to which you could get access by scanning the QR code below) in an OTC transaction.\"\n  }\n};\nvar _default = languageNav;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/language/help/index.js?");

/***/ }),

/***/ "./src/views/Help/index.vue":
/*!**********************************!*\
  !*** ./src/views/Help/index.vue ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2a9ed83e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2a9ed83e&scoped=true& */ \"./src/views/Help/index.vue?vue&type=template&id=2a9ed83e&scoped=true&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./src/views/Help/index.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _index_vue_vue_type_style_index_0_id_2a9ed83e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2a9ed83e&lang=less&scoped=true& */ \"./src/views/Help/index.vue?vue&type=style&index=0&id=2a9ed83e&lang=less&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2a9ed83e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2a9ed83e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2a9ed83e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Help/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/Help/index.vue?");

/***/ }),

/***/ "./src/views/Help/index.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/views/Help/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Help/index.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/views/Help/index.vue?");

/***/ }),

/***/ "./src/views/Help/index.vue?vue&type=style&index=0&id=2a9ed83e&lang=less&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/views/Help/index.vue?vue&type=style&index=0&id=2a9ed83e&lang=less&scoped=true& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a9ed83e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--10-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2a9ed83e&lang=less&scoped=true& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Help/index.vue?vue&type=style&index=0&id=2a9ed83e&lang=less&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a9ed83e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a9ed83e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a9ed83e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a9ed83e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/views/Help/index.vue?");

/***/ }),

/***/ "./src/views/Help/index.vue?vue&type=template&id=2a9ed83e&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/views/Help/index.vue?vue&type=template&id=2a9ed83e&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_76f14f25_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2a9ed83e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"76f14f25-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2a9ed83e&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"76f14f25-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Help/index.vue?vue&type=template&id=2a9ed83e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_76f14f25_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2a9ed83e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_76f14f25_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2a9ed83e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Help/index.vue?");

/***/ })

}]);