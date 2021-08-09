/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"index": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"zh-CN":"zh-CN"}[chunkId]||chunkId) + "." + {"zh-CN":"473a5856"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"zh-CN":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({"zh-CN":"zh-CN"}[chunkId]||chunkId) + "." + {"zh-CN":"a972e30b"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/component-template/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!****************************!*\
  !*** multi ./doc/entry.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\SynologyDrive\work\project\personal\setaria-vue-component-library\doc\entry.ts */"b7da");


/***/ }),

/***/ "014b":
/*!****************************************!*\
  !*** ./src/store/common/store-type.js ***!
  \****************************************/
/*! exports provided: NAME, GETTER, MUTATION, ACTION, COMMON, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETTER", function() { return GETTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTATION", function() { return MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION", function() { return ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON", function() { return COMMON; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constant */ "267e");

 // 模块名称

var NAME = _constant__WEBPACK_IMPORTED_MODULE_1__["MODULE"].COMMON; // GETTER名称

var GETTER = {
  GET_FOO: 'getFoo'
}; // MUTATION名称

var MUTATION = {
  COMMIT_FOO: 'commitFoo'
}; // ACTION名称

var ACTION = {
  DISPATCH_FOO: 'dispatchFoo'
};
var COMMON = {
  NAME: NAME,
  // 注册的key，因module的namespace为true，因此需要包含父module的name
  GETTER: {
    GET_FOO: "".concat(NAME, "/").concat(GETTER.GET_FOO)
  },
  MUTATION: {
    COMMIT_FOO: "".concat(NAME, "/").concat(MUTATION.COMMIT_FOO)
  },
  ACTION: {
    DISPATCH_FOO: "".concat(NAME, "/").concat(ACTION.DISPATCH_FOO)
  }
};
/* harmony default export */ __webpack_exports__["default"] = (COMMON);

/***/ }),

/***/ "03c0":
/*!***********************************!*\
  !*** ./src/store/common/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "ade3");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "96cf");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "2ef0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store-type */ "014b");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: _store_type__WEBPACK_IMPORTED_MODULE_5__["NAME"],
  namespaced: true,
  state: {
    foo: 'bar'
  },
  getters: Object(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _store_type__WEBPACK_IMPORTED_MODULE_5__["GETTER"].GET_FOO, function (state) {
    return state.foo;
  }),
  mutations: Object(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _store_type__WEBPACK_IMPORTED_MODULE_5__["MUTATION"].COMMIT_FOO, function (state, payload) {
    var s = state;
    s.foo = payload;
  }),
  actions: Object(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _store_type__WEBPACK_IMPORTED_MODULE_5__["ACTION"].DISPATCH_FOO, function (context, payload) {
    return Object(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                setTimeout(function () {
                  resolve(payload);
                }, 0);
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  })
});

/***/ }),

/***/ "0f58":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./doc/component/header.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var main_lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! main/lib.js */ "34e9");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var version = main_lib_js__WEBPACK_IMPORTED_MODULE_1__["default"].version;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainHeader',
  data: function data() {
    return {
      systemTitle: "Setaria业务公共组件示例工程",
      active: '',
      versions: [],
      version: version
    };
  },
  mixins: [],
  components: {},
  computed: {
    isComponentPage: function isComponentPage() {
      return /^component/.test(this.$route.name);
    }
  },
  mounted: function mounted() {},
  methods: {},
  created: function created() {}
});

/***/ }),

/***/ "1217":
/*!**********************************************************************!*\
  !*** ./doc/component/side-nav.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./side-nav.vue?vue&type=style&index=0&lang=scss& */ "81db");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "1257":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./doc/component/header.vue?vue&type=style&index=0&id=1e2b7b91&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1ae9":
/*!***************************************************************!*\
  !*** ./doc/component/demo-block.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./demo-block.vue?vue&type=script&lang=js& */ "6ab6");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "1f40":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./package/app-main/src/app-main.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "2ef0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var setaria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! setaria */ "8f8e");
/* harmony import */ var setaria__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(setaria__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var setaria_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! setaria-ui */ "a517");
/* harmony import */ var setaria_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(setaria_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//




var loadingInstance;
/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_3___default.a.extend({
  name: 'SvcMain',
  computed: {
    loadingState: function loadingState() {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.$store, 'getters')[setaria__WEBPACK_IMPORTED_MODULE_1__["constants"].STORE_KEY.GET_IS_LOADING];
    }
  },
  watch: {
    loadingState: {
      immediate: true,
      handler: function handler(val) {
        var loadingText = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(this, ['$env', 'VUE_APP_SERVICE_LOADING_TEXT'], '加载中');

        if (val) {
          loadingInstance = setaria_ui__WEBPACK_IMPORTED_MODULE_2__["Loading"].service({
            fullscreen: true,
            text: loadingText
          });
        } else {
          this.$nextTick(function () {
            if (loadingInstance) {
              loadingInstance.close();
            }
          });
        }
      }
    }
  }
}));

/***/ }),

/***/ "214f":
/*!********************************************************************!*\
  !*** ./package/app-main/src/app-main.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./app-main.vue?vue&type=script&lang=js& */ "1f40");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "261a":
/*!************************************************************************!*\
  !*** ./doc/component/demo-block.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_block_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./demo-block.vue?vue&type=style&index=0&lang=scss& */ "ab39");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_block_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_block_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_block_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_block_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "267e":
/*!*******************************!*\
  !*** ./src/constant/index.js ***!
  \*******************************/
/*! exports provided: MODULE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE", function() { return MODULE; });
/**
 * 全局常量定义
 */
var MODULE = {
  COMMON: 'svcCommon'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  MODULE: MODULE
});

/***/ }),

/***/ "26e2":
/*!**************************!*\
  !*** ./style/index.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2b37":
/*!********************!*\
  !*** ./doc/bus.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (new vue__WEBPACK_IMPORTED_MODULE_0___default.a());

/***/ }),

/***/ "2d70":
/*!*************************************************************!*\
  !*** ./doc/component/side-nav.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./side-nav.vue?vue&type=script&lang=js& */ "ea1e");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "34e9":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec");
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e");
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "2ef0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var setaria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! setaria */ "8f8e");
/* harmony import */ var setaria__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(setaria__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _package_app_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../package/app-main */ "6d28");
/* harmony import */ var _install__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./install */ "a63b");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config */ "f121");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constant */ "267e");
/* harmony import */ var _mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mixin */ "4624");
/* harmony import */ var _store_store_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/store-type */ "e1a1");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util */ "4260");













var config = null;

var Framework = /*#__PURE__*/function (_Setaria) {
  Object(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(Framework, _Setaria);

  var _super = Object(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(Framework);

  function Framework() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var opts = arguments.length > 1 ? arguments[1] : undefined;

    Object(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Framework);

    var businessConfig = options; // 生成Setaria设置项

    config = Object(_config__WEBPACK_IMPORTED_MODULE_8__["createConfig"])(businessConfig, opts); // Sdk初始化

    _this = _super.call(this, businessConfig); // 初始化依赖

    vue__WEBPACK_IMPORTED_MODULE_5___default.a.use(Framework, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.assign({}, config, opts));
    return _this;
  }

  return Framework;
}(setaria__WEBPACK_IMPORTED_MODULE_4___default.a); // 挂载定值


Framework.version = "0.0.1";
Framework.install = Object(_install__WEBPACK_IMPORTED_MODULE_7__["install"])(Framework);
Framework.constant = _constant__WEBPACK_IMPORTED_MODULE_9__["default"];
Framework.mixin = _mixin__WEBPACK_IMPORTED_MODULE_10__["default"];
Framework.storeType = _store_store_type__WEBPACK_IMPORTED_MODULE_11__["default"];
Framework.util = _util__WEBPACK_IMPORTED_MODULE_12__["default"]; // UI组件

Framework.AppMain = _package_app_main__WEBPACK_IMPORTED_MODULE_6__["default"];

if (window) {
  console.log('Framework版本：', Framework.version);
}

/* harmony default export */ __webpack_exports__["default"] = (Framework);

/***/ }),

/***/ "3899":
/*!***********************************************************!*\
  !*** ./doc/component/header.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "0f58");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "4242":
/*!********************************************************************************************!*\
  !*** ./doc/component/header.vue?vue&type=style&index=0&id=1e2b7b91&lang=scss&scoped=true& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_1e2b7b91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&id=1e2b7b91&lang=scss&scoped=true& */ "1257");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_1e2b7b91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_1e2b7b91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_1e2b7b91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_1e2b7b91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "4260":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "5c77");

/* harmony default export */ __webpack_exports__["default"] = ({
  lang: _lang__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "4360":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "ade3");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "03c0");



/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  modules: Object(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _common__WEBPACK_IMPORTED_MODULE_2__["default"].name, _common__WEBPACK_IMPORTED_MODULE_2__["default"])
});

/***/ }),

/***/ "44a4":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./package/foo/src/foo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'SvcFoo'
}));

/***/ }),

/***/ "4624":
/*!****************************!*\
  !*** ./src/mixin/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "2ef0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 全局Mixin
 */

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "4d29":
/*!*********************************************************************!*\
  !*** ./doc/component/demo-block.vue?vue&type=template&id=d5725af0& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_block_vue_vue_type_template_id_d5725af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53f6b49b-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./demo-block.vue?vue&type=template&id=d5725af0& */ "6095");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_block_vue_vue_type_template_id_d5725af0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_block_vue_vue_type_template_id_d5725af0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "549f":
/*!*******************************!*\
  !*** ./style/common/var.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "59b4":
/*!***********************************!*\
  !*** ./src/config/route/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mode: 'history',
  base: "/".concat(Object({"NODE_ENV":"production","VUE_APP_CLIENT_BASE_URL":"/component-template","VUE_APP_ENTRY_PAGE_FILE":"./doc/entry.ts","VUE_APP_ID":"setaria-vue-component-library","VUE_APP_TITLE":"Setaria业务公共组件示例工程","BASE_URL":"/component-template/"}).VUE_APP_SITE_ID, "/").concat("/component-template"),
  routes: []
});

/***/ }),

/***/ "5c77":
/*!**************************!*\
  !*** ./src/util/lang.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "6095":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53f6b49b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./doc/component/demo-block.vue?vue&type=template&id=d5725af0& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"demo-block",class:[_vm.blockClass, { 'hover': _vm.hovering }],on:{"mouseenter":function($event){_vm.hovering = true},"mouseleave":function($event){_vm.hovering = false}}},[_c('div',{staticClass:"source"},[_vm._t("source")],2),_c('div',{ref:"meta",staticClass:"meta"},[(_vm.$slots.default)?_c('div',{staticClass:"description"},[_vm._t("default")],2):_vm._e(),_c('div',{staticClass:"highlight"},[_vm._t("highlight")],2)]),_c('div',{ref:"control",staticClass:"demo-block-control",class:{ 'is-fixed': _vm.fixedControl },on:{"click":function($event){_vm.isExpanded = !_vm.isExpanded}}},[_c('transition',{attrs:{"name":"arrow-slide"}},[_c('i',{class:[_vm.iconClass, { 'hovering': _vm.hovering }]})]),_c('transition',{attrs:{"name":"text-slide"}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.hovering),expression:"hovering"}]},[_vm._v("显示代码")])])],1)])}
var staticRenderFns = []



/***/ }),

/***/ "6636":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./doc/App.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'app',
  computed: {
    isComponent: function isComponent() {
      return this.$route && /^component-/.test(this.$route.name || '');
    }
  }
}));

/***/ }),

/***/ "6798":
/*!**********************************************!*\
  !*** ./doc/App.vue?vue&type=script&lang=ts& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--14-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/ts-loader??ref--14-3!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ "6636");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_14_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "6ab6":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./doc/component/demo-block.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "1276");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var main_lib_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! main/lib.js */ "34e9");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "aad6");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import compoLang from '../i18n/component.json';


var version = main_lib_js__WEBPACK_IMPORTED_MODULE_3__["default"].version;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      codepen: {
        script: '',
        html: '',
        style: ''
      },
      hovering: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null
    };
  },
  methods: {
    // goCodepen() {
    //   // since 2.6.2 use code rather than jsfiddle https://blog.codepen.io/documentation/api/prefill/
    //   const { script, html, style } = this.codepen;
    //   const resourcesTpl = '<scr' + 'ipt src="//unpkg.com/vue/dist/vue.js"></scr' + 'ipt>' +
    //   '\n<scr' + `ipt src="//unpkg.com/setaria-ui@${ version }/lib/index.js"></scr` + 'ipt>';
    //   let jsTpl = (script || '').replace(/export default/, 'var Main =').trim();
    //   let htmlTpl = `${resourcesTpl}\n<div id="app">\n${html.trim()}\n</div>`;
    //   let cssTpl = `@import url("//unpkg.com/setaria-ui@${ version }/lib/theme-chalk/index.css");\n${(style || '').trim()}\n`;
    //   jsTpl = jsTpl
    //     ? jsTpl + '\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount(\'#app\')'
    //     : 'new Vue().$mount(\'#app\')';
    //   const data = {
    //     js: jsTpl,
    //     css: cssTpl,
    //     html: htmlTpl
    //   };
    //   const form = document.getElementById('fiddle-form') || document.createElement('form');
    //   while (form.firstChild) {
    //     form.removeChild(form.firstChild);
    //   }
    //   form.method = 'POST';
    //   form.action = 'https://codepen.io/pen/define/';
    //   form.target = '_blank';
    //   form.style.display = 'none';
    //   const input = document.createElement('input');
    //   input.setAttribute('name', 'data');
    //   input.setAttribute('type', 'hidden');
    //   input.setAttribute('value', JSON.stringify(data));
    //   form.appendChild(input);
    //   document.body.appendChild(form);
    //   form.submit();
    // },
    scrollHandler: function scrollHandler() {
      var _this$$refs$meta$getB = this.$refs.meta.getBoundingClientRect(),
          top = _this$$refs$meta$getB.top,
          bottom = _this$$refs$meta$getB.bottom,
          left = _this$$refs$meta$getB.left;

      this.fixedControl = bottom > document.documentElement.clientHeight && top + 44 <= document.documentElement.clientHeight;
      this.$refs.control.style.left = this.fixedControl ? "".concat(left, "px") : '0';
    },
    removeScrollHandler: function removeScrollHandler() {
      this.scrollParent && this.scrollParent.removeEventListener('scroll', this.scrollHandler);
    }
  },
  computed: {
    lang: function lang() {
      return this.$route.path.split('/')[1];
    },
    blockClass: function blockClass() {
      return "demo-".concat(this.lang, " demo-").concat(this.$router.currentRoute.path.split('/').pop());
    },
    iconClass: function iconClass() {
      return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom';
    },
    codeArea: function codeArea() {
      return this.$el.getElementsByClassName('meta')[0];
    },
    codeAreaHeight: function codeAreaHeight() {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return this.$el.getElementsByClassName('description')[0].clientHeight + this.$el.getElementsByClassName('highlight')[0].clientHeight + 20;
      }

      return this.$el.getElementsByClassName('highlight')[0].clientHeight;
    }
  },
  watch: {
    isExpanded: function isExpanded(val) {
      var _this = this;

      this.codeArea.style.height = val ? "".concat(this.codeAreaHeight + 1, "px") : '0';

      if (!val) {
        this.fixedControl = false;
        this.$refs.control.style.left = '0';
        this.removeScrollHandler();
        return;
      }

      setTimeout(function () {
        _this.scrollParent = document.querySelector('.page-component__scroll > .el-scrollbar__wrap');
        _this.scrollParent && _this.scrollParent.addEventListener('scroll', _this.scrollHandler);

        _this.scrollHandler();
      }, 200);
    }
  },
  created: function created() {
    var highlight = this.$slots.highlight;

    if (highlight && highlight[0]) {
      var code = '';
      var cur = highlight[0];

      if (cur.tag === 'pre' && cur.children && cur.children[0]) {
        cur = cur.children[0];

        if (cur.tag === 'code') {
          code = cur.children[0].text;
        }
      }

      if (code) {
        this.codepen.html = Object(_util__WEBPACK_IMPORTED_MODULE_4__["stripTemplate"])(code);
        this.codepen.script = Object(_util__WEBPACK_IMPORTED_MODULE_4__["stripScript"])(code);
        this.codepen.style = Object(_util__WEBPACK_IMPORTED_MODULE_4__["stripStyle"])(code);
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      var highlight = _this2.$el.getElementsByClassName('highlight')[0];

      if (_this2.$el.getElementsByClassName('description').length === 0) {
        highlight.style.width = '100%';
        highlight.borderRight = 'none';
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.removeScrollHandler();
  }
});

/***/ }),

/***/ "6d28":
/*!***********************************!*\
  !*** ./package/app-main/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_app_main_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app-main.vue */ "da52");


/* istanbul ignore next */

_src_app_main_vue__WEBPACK_IMPORTED_MODULE_1__["default"].install = function install(Vue) {
  Vue.component(_src_app_main_vue__WEBPACK_IMPORTED_MODULE_1__["default"].options.name, _src_app_main_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_src_app_main_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "6e09":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53f6b49b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./doc/App.vue?vue&type=template&id=58772030& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{ 'is-component': _vm.isComponent },attrs:{"id":"app"}},[_c('main-header'),_c('div',{staticClass:"main-cnt"},[_c('router-view')],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "6f72":
/*!****************************************!*\
  !*** ./src/config/http/interceptor.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 服务拦截器设置，可在此文件内定义服务的公共拦截器逻辑
 */
function getInterceptor(env) {
  return {
    interceptor: {
      request: [],
      response: []
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getInterceptor: getInterceptor
});

/***/ }),

/***/ "75b5":
/*!*********************************!*\
  !*** ./package/foo/src/foo.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _foo_vue_vue_type_template_id_60bbf579___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foo.vue?vue&type=template&id=60bbf579& */ "cadb");
/* harmony import */ var _foo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foo.vue?vue&type=script&lang=js& */ "ecc7");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _foo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _foo_vue_vue_type_template_id_60bbf579___WEBPACK_IMPORTED_MODULE_0__["render"],
  _foo_vue_vue_type_template_id_60bbf579___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7a9a":
/*!***********************************!*\
  !*** ./doc/demo-style/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "81db":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./doc/component/side-nav.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8484":
/*!*******************************************************************!*\
  !*** ./doc/component/side-nav.vue?vue&type=template&id=7251fe88& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_template_id_7251fe88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53f6b49b-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./side-nav.vue?vue&type=template&id=7251fe88& */ "bdb5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_template_id_7251fe88___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_template_id_7251fe88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "86fb":
/*!*****************************!*\
  !*** ./doc/nav.config.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"更新日志\",\"path\":\"/changelog\"},{\"name\":\"安装\",\"path\":\"/installation\"},{\"name\":\"组件\",\"groups\":[{\"groupName\":\"Basic\",\"list\":[{\"path\":\"/foo\",\"title\":\"Foo 示例\"}]}]}]");

/***/ }),

/***/ "8bbf":
/*!******************************************************************************!*\
  !*** external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),

/***/ "8f8e":
/*!******************************************************************************!*\
  !*** external {"commonjs":"setaria","commonjs2":"setaria","root":"Setaria"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),

/***/ "a517":
/*!************************************************************************************!*\
  !*** external {"commonjs":"setaria-ui","commonjs2":"setaria-ui","root":"ELEMENT"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),

/***/ "a63b":
/*!************************!*\
  !*** ./src/install.js ***!
  \************************/
/*! exports provided: install, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var setaria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! setaria */ "8f8e");
/* harmony import */ var setaria__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(setaria__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var setaria_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! setaria-ui */ "a517");
/* harmony import */ var setaria_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(setaria_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var setaria_ui_lib_locale_lang_zh_CN__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! setaria-ui/lib/locale/lang/zh-CN */ "5e93");
/* harmony import */ var setaria_ui_lib_locale_lang_zh_CN__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(setaria_ui_lib_locale_lang_zh_CN__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _package_foo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../package/foo */ "a927");






var components = [_package_foo__WEBPACK_IMPORTED_MODULE_5__["default"]];
function install(Framework) {
  return function (Vue, opts) {
    // 初始化Setaria SDK
    Vue.use(setaria__WEBPACK_IMPORTED_MODULE_2___default.a, opts); // 使用中文语言初始化Setaria UI

    Vue.use(setaria_ui__WEBPACK_IMPORTED_MODULE_3___default.a, {
      locale: setaria_ui_lib_locale_lang_zh_CN__WEBPACK_IMPORTED_MODULE_4___default.a,
      size: 'small'
    }); // 初始化组件

    components.forEach(function (component) {
      Vue.component(component.options.name, component);
    }); // eslint-disable-next-line no-param-reassign

    Vue.prototype.$env = opts.env;
  };
}
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "a927":
/*!******************************!*\
  !*** ./package/foo/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_foo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/foo.vue */ "75b5");


/* istanbul ignore next */

_src_foo_vue__WEBPACK_IMPORTED_MODULE_1__["default"].install = function install(Vue) {
  Vue.component(_src_foo_vue__WEBPACK_IMPORTED_MODULE_1__["default"].options.name, _src_foo_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_src_foo_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "aad6":
/*!*********************!*\
  !*** ./doc/util.js ***!
  \*********************/
/*! exports provided: stripScript, stripStyle, stripTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripScript", function() { return stripScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripStyle", function() { return stripStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripTemplate", function() { return stripTemplate; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "466d");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "498a");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "5319");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);




function stripScript(content) {
  var result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}
function stripStyle(content) {
  var result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}
function stripTemplate(content) {
  content = content.trim();

  if (!content) {
    return content;
  }

  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

/***/ }),

/***/ "ab39":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./doc/component/demo-block.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ac81":
/*!**********************************!*\
  !*** ./doc/component/header.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_1e2b7b91_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=1e2b7b91&scoped=true& */ "db96");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "3899");
/* empty/unused harmony star reexport *//* harmony import */ var _header_vue_vue_type_style_index_0_id_1e2b7b91_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.vue?vue&type=style&index=0&id=1e2b7b91&lang=scss&scoped=true& */ "4242");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_1e2b7b91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_1e2b7b91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e2b7b91",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b136":
/*!**************************************!*\
  !*** ./doc/component/demo-block.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demo_block_vue_vue_type_template_id_d5725af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-block.vue?vue&type=template&id=d5725af0& */ "4d29");
/* harmony import */ var _demo_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo-block.vue?vue&type=script&lang=js& */ "1ae9");
/* empty/unused harmony star reexport *//* harmony import */ var _demo_block_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-block.vue?vue&type=style&index=0&lang=scss& */ "261a");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _demo_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _demo_block_vue_vue_type_template_id_d5725af0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _demo_block_vue_vue_type_template_id_d5725af0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b7a4":
/*!*********************!*\
  !*** ./doc/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_58772030___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=58772030& */ "ee93");
/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ "6798");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_58772030___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_58772030___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b7da":
/*!**********************!*\
  !*** ./doc/entry.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "e260");
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "e6cf");
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "cca6");
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "a79d");
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js */ "f4e8");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var setaria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! setaria */ "8f8e");
/* harmony import */ var setaria__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(setaria__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var main_lib_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! main/lib.js */ "34e9");
/* harmony import */ var main_store_common_store_type_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! main/store/common/store-type.js */ "014b");
/* harmony import */ var main_style_common_var_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! main-style/common/var.scss */ "549f");
/* harmony import */ var main_style_common_var_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(main_style_common_var_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var main_style_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! main-style/index.scss */ "26e2");
/* harmony import */ var main_style_index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(main_style_index_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _component_demo_block_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/demo-block.vue */ "b136");
/* harmony import */ var _component_header_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/header.vue */ "ac81");
/* harmony import */ var _component_side_nav_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/side-nav.vue */ "b8a0");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./App.vue */ "b7a4");
/* harmony import */ var _route_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./route.config */ "d612");
/* harmony import */ var _demo_style_index_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./demo-style/index.scss */ "7a9a");
/* harmony import */ var _demo_style_index_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_demo_style_index_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _asset_style_common_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./asset/style/common.scss */ "f42f");
/* harmony import */ var _asset_style_common_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_asset_style_common_scss__WEBPACK_IMPORTED_MODULE_17__);


















var entry = {
  el: '#app',
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_14__["default"]);
  },
  methods: {
    getCommonStoreType: function getCommonStoreType() {
      return main_store_common_store_type_js__WEBPACK_IMPORTED_MODULE_8__["default"];
    }
  }
}; // Sdk初始化

var config = {
  entry: entry,
  http: {},
  routes: {
    mode: 'hash',
    base: '/',
    routes: _route_config__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  message: {
    LY0001S: 'test<br/>test'
  }
};
vue__WEBPACK_IMPORTED_MODULE_6___default.a.component('main-header', _component_header_vue__WEBPACK_IMPORTED_MODULE_12__["default"]);
vue__WEBPACK_IMPORTED_MODULE_6___default.a.component('side-nav', _component_side_nav_vue__WEBPACK_IMPORTED_MODULE_13__["default"]);
vue__WEBPACK_IMPORTED_MODULE_6___default.a.component('demo-block', _component_demo_block_vue__WEBPACK_IMPORTED_MODULE_11__["default"]);
var sdk = new main_lib_js__WEBPACK_IMPORTED_MODULE_7__["default"](config, {
  env: Object({"NODE_ENV":"production","VUE_APP_CLIENT_BASE_URL":"/component-template","VUE_APP_ENTRY_PAGE_FILE":"./doc/entry.ts","VUE_APP_ID":"setaria-vue-component-library","VUE_APP_TITLE":"Setaria业务公共组件示例工程","BASE_URL":"/component-template/"})
});
vue__WEBPACK_IMPORTED_MODULE_6___default.a.mixin(main_lib_js__WEBPACK_IMPORTED_MODULE_7__["default"].mixin);
setaria__WEBPACK_IMPORTED_MODULE_5___default.a.getRouter().afterEach(function () {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  vue__WEBPACK_IMPORTED_MODULE_6___default.a.nextTick(function () {
    var blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, highlight_js__WEBPACK_IMPORTED_MODULE_4___default.a.highlightBlock);
  });
});

/***/ }),

/***/ "b8a0":
/*!************************************!*\
  !*** ./doc/component/side-nav.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _side_nav_vue_vue_type_template_id_7251fe88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav.vue?vue&type=template&id=7251fe88& */ "8484");
/* harmony import */ var _side_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav.vue?vue&type=script&lang=js& */ "2d70");
/* empty/unused harmony star reexport *//* harmony import */ var _side_nav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-nav.vue?vue&type=style&index=0&lang=scss& */ "1217");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _side_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _side_nav_vue_vue_type_template_id_7251fe88___WEBPACK_IMPORTED_MODULE_0__["render"],
  _side_nav_vue_vue_type_template_id_7251fe88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "bc15":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53f6b49b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./package/app-main/src/app-main.vue?vue&type=template&id=2ffffc85& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-main',[_c('router-view')],1)}
var staticRenderFns = []



/***/ }),

/***/ "bdb5":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53f6b49b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./doc/component/side-nav.vue?vue&type=template&id=7251fe88& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"side-nav",class:{ 'is-fade': _vm.isFade },style:(_vm.navStyle),on:{"mouseenter":function($event){_vm.isFade = false}}},[_c('ul',_vm._l((_vm.data),function(item,key){return _c('li',{key:key,staticClass:"nav-item"},[(!item.path && !item.href)?_c('a',{on:{"click":_vm.expandMenu}},[_vm._v(_vm._s(item.name))]):_vm._e(),(item.href)?_c('a',{attrs:{"href":item.href,"target":"_blank"}},[_vm._v(_vm._s(item.name))]):_vm._e(),(item.path)?_c('router-link',{attrs:{"active-class":"active","to":_vm.base + item.path,"exact":""},domProps:{"textContent":_vm._s(item.title || item.name)}}):_vm._e(),(item.children)?_c('ul',{staticClass:"pure-menu-list sub-nav"},_vm._l((item.children),function(navItem,key){return _c('li',{key:key,staticClass:"nav-item"},[_c('router-link',{attrs:{"active-class":"active","to":_vm.base + navItem.path,"exact":""},domProps:{"textContent":_vm._s(navItem.title || navItem.name)}})],1)}),0):_vm._e(),(item.groups)?_vm._l((item.groups),function(group,key){return _c('div',{key:key,staticClass:"nav-group"},[_c('div',{staticClass:"nav-group__title",on:{"click":_vm.expandMenu}},[_vm._v(_vm._s(group.groupName))]),_c('ul',{staticClass:"pure-menu-list"},_vm._l((group.list),function(navItem,key){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(!navItem.disabled),expression:"!navItem.disabled"}],key:key,staticClass:"nav-item"},[_c('router-link',{attrs:{"active-class":"active","to":_vm.base + navItem.path,"exact":""},domProps:{"textContent":_vm._s(navItem.title)}})],1)}),0)])}):_vm._e()],2)}),0)])}
var staticRenderFns = []



/***/ }),

/***/ "c0ee":
/*!*************************************!*\
  !*** ./src/config/message/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// [Module Prefix(MOD1, FI etc.)][Message Catagory(COM, BIZ)]XXX[Message Type(S, W, E, I)]
// Module Prefix:
//   MOD1 模块1
//   MOD2 模块2
// Message Catagory:
//   COM 模块内公共消息
//   BIZ 模块页面内独立消息
// Message Type:
//   S 成功
//   W 警告
//   E 错误
//   I 消息
/* harmony default export */ __webpack_exports__["default"] = ({
  SYCOM001S: '{0}成功。',
  SYCOM002E: '{0}不能为空。',
  SYCOM003W: '是否确认保存?',
  SYCOM004E: 'Schema解析错误，请联系SAP开发人员。',
  SYCOM005E: '项目 {0} 格式化失败。',
  SYCOM006W: '请至少选择一条数据。',
  SYCOM007E: '第 {0} 行数据重复，请修改。',
  SYCOM008E: '不允许同时配置 {0} 与 {1}',
  SYCOM009E: '错误: {0}',
  SYCOM010S: 'Entity缓存已全部清空。',
  SYCOM011S: '附件 {0} 上传成功。',
  SYCOM012E: 'Schema内不存在设定的 {0} 的项目。',
  SYCOM013E: '文档服务信息: {0}',
  SYCOM014W: '目前处于编辑状态，是否确认返回？'
});

/***/ }),

/***/ "c78c":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53f6b49b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./doc/component/header.vue?vue&type=template&id=1e2b7b91&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"headerWrapper"},[_c('header',{ref:"header",staticClass:"header"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"system-title"},[_vm._v(_vm._s(_vm.systemTitle))]),_c('ul',{staticClass:"nav"},[_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.isComponentPage),expression:"isComponentPage"}],staticClass:"nav-item nav-versions"},[_c('span',{staticClass:"nav-version"},[_vm._v(" 版本: "+_vm._s(_vm.version)+" ")])])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "cadb":
/*!****************************************************************!*\
  !*** ./package/foo/src/foo.vue?vue&type=template&id=60bbf579& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foo_vue_vue_type_template_id_60bbf579___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53f6b49b-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./foo.vue?vue&type=template&id=60bbf579& */ "f17f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foo_vue_vue_type_template_id_60bbf579___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foo_vue_vue_type_template_id_60bbf579___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "cc26":
/*!**********************************!*\
  !*** ./src/config/http/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "5530");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "2ef0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var setaria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! setaria */ "8f8e");
/* harmony import */ var setaria__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(setaria__WEBPACK_IMPORTED_MODULE_3__);





function getCommonHttpConfig(env, interceptor) {
  var VUE_APP_SITE_ID = env.VUE_APP_SITE_ID,
      VUE_APP_API_BASE_URL = env.VUE_APP_API_BASE_URL,
      VUE_APP_DOC_API_URL = env.VUE_APP_DOC_API_URL,
      VUE_APP_MINGYUAN_API_URL = env.VUE_APP_MINGYUAN_API_URL;
  var gatewayUrl = "/".concat(VUE_APP_SITE_ID, "/").concat(VUE_APP_API_BASE_URL); // 业务服务默认设置

  var businessHttpConfig = Object(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    baseURL: gatewayUrl
  }, interceptor);

  return {
    defaults: {
      // 默认超时时间
      timeout: 60000,
      // 是否默认显示全局loading
      showLoading: false,
      // 服务根url
      baseURL: gatewayUrl
    },
    // 业务服务
    sys: Object(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, businessHttpConfig)
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getCommonHttpConfig: getCommonHttpConfig
});

/***/ }),

/***/ "d612":
/*!*****************************!*\
  !*** ./doc/route.config.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "fb6a");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "a4d3");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "e01a");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nav_config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav.config.json */ "86fb");
var _nav_config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./nav.config.json */ "86fb", 1);







/* eslint-disable */


var LOAD_MAP = function LOAD_MAP(name) {
  return function (r) {
    return __webpack_require__.e(/*! require.ensure | zh-CN */ "zh-CN").then((function () {
      return r(__webpack_require__("29d6")("./".concat(name, ".vue")));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  };
};

function load(path) {
  return LOAD_MAP(path);
}

var LOAD_EXAMPLES_MAP = function LOAD_EXAMPLES_MAP(path) {
  return function (r) {
    return __webpack_require__.e(/*! require.ensure | zh-CN */ "zh-CN").then((function () {
      return r(__webpack_require__("d543")("./".concat(path.slice(1), ".md")));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  };
};

function loadDocs(path) {
  return LOAD_EXAMPLES_MAP(path);
}

var registerRoute = function registerRoute(routeNavConfig) {
  var route = [{
    path: "/component",
    redirect: "/component/installation",
    component: load('component'),
    children: []
  }];
  routeNavConfig.forEach(function (nav) {
    if (nav.href) return;

    if (nav.groups) {
      nav.groups.forEach(function (group) {
        group.list.forEach(function (nav) {
          addRoute(nav);
        });
      });
    } else if (nav.children) {
      nav.children.forEach(function (nav) {
        addRoute(nav);
      });
    } else {
      addRoute(nav);
    }
  });

  function addRoute(page) {
    var component = page.path === '/changelog' ? load('changelog') : loadDocs(page.path);
    var child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        module: page.meta ? page.meta.module : null,
        subModule: page.meta ? page.meta.subModule : null
      },
      name: 'component-' + (page.title || page.name),
      component: component.default || component
    };
    route[0].children.push(child);
  }

  return route;
};

var route = registerRoute(_nav_config_json__WEBPACK_IMPORTED_MODULE_6__);
var defaultPath = '/component/installation';
route = route.concat([{
  path: '/',
  redirect: defaultPath
}]);
/* harmony default export */ __webpack_exports__["default"] = (route);

/***/ }),

/***/ "da52":
/*!*******************************************!*\
  !*** ./package/app-main/src/app-main.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_main_vue_vue_type_template_id_2ffffc85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-main.vue?vue&type=template&id=2ffffc85& */ "ebff");
/* harmony import */ var _app_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-main.vue?vue&type=script&lang=js& */ "214f");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_main_vue_vue_type_template_id_2ffffc85___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_main_vue_vue_type_template_id_2ffffc85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "db96":
/*!*****************************************************************************!*\
  !*** ./doc/component/header.vue?vue&type=template&id=1e2b7b91&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_1e2b7b91_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53f6b49b-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=1e2b7b91&scoped=true& */ "c78c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_1e2b7b91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_1e2b7b91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "e1a1":
/*!*********************************!*\
  !*** ./src/store/store-type.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "ade3");
/* harmony import */ var _common_store_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/store-type */ "014b");


/* eslint-disable import/no-named-as-default-member */

/* harmony default export */ __webpack_exports__["default"] = (Object(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _common_store_type__WEBPACK_IMPORTED_MODULE_1__["default"].NAME, _common_store_type__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "ea1e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./doc/component/side-nav.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bus */ "2b37");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: Array,
    base: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      highlights: [],
      navState: [],
      isSmallScreen: false,
      isFade: false
    };
  },
  watch: {
    '$route.path': function $routePath() {
      this.handlePathChange();
    },
    isFade: function isFade(val) {
      _bus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('navFade', val);
    }
  },
  computed: {
    navStyle: function navStyle() {
      var style = {};

      if (this.isSmallScreen) {
        style.paddingBottom = '60px';
      }

      style.opacity = this.isFade ? '0.5' : '1';
      return style;
    }
  },
  methods: {
    handleResize: function handleResize() {
      this.isSmallScreen = document.documentElement.clientWidth < 768;
      this.handlePathChange();
    },
    handlePathChange: function handlePathChange() {
      var _this = this;

      if (!this.isSmallScreen) {
        this.expandAllMenu();
        return;
      }

      this.$nextTick(function () {
        _this.hideAllMenu();

        var activeAnchor = _this.$el.querySelector('a.active');

        var ul = activeAnchor.parentNode;

        while (ul.tagName !== 'UL') {
          ul = ul.parentNode;
        }

        ul.style.height = 'auto';
      });
    },
    hideAllMenu: function hideAllMenu() {
      [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), function (ul) {
        ul.style.height = '0';
      });
    },
    expandAllMenu: function expandAllMenu() {
      [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), function (ul) {
        ul.style.height = 'auto';
      });
    },
    expandMenu: function expandMenu(event) {
      if (!this.isSmallScreen) return;
      var target = event.currentTarget;
      if (!target.nextElementSibling || target.nextElementSibling.tagName !== 'UL') return;
      this.hideAllMenu();
      event.currentTarget.nextElementSibling.style.height = 'auto';
    }
  },
  created: function created() {
    var _this2 = this;

    _bus__WEBPACK_IMPORTED_MODULE_0__["default"].$on('fadeNav', function () {
      _this2.isFade = true;
    });
  },
  mounted: function mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
});

/***/ }),

/***/ "ebff":
/*!**************************************************************************!*\
  !*** ./package/app-main/src/app-main.vue?vue&type=template&id=2ffffc85& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_main_vue_vue_type_template_id_2ffffc85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53f6b49b-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./app-main.vue?vue&type=template&id=2ffffc85& */ "bc15");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_main_vue_vue_type_template_id_2ffffc85___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_main_vue_vue_type_template_id_2ffffc85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "ecc7":
/*!**********************************************************!*\
  !*** ./package/foo/src/foo.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./foo.vue?vue&type=script&lang=js& */ "44a4");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "ee93":
/*!****************************************************!*\
  !*** ./doc/App.vue?vue&type=template&id=58772030& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_58772030___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53f6b49b-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=58772030& */ "6e09");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_58772030___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_53f6b49b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_58772030___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "f121":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: createConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConfig", function() { return createConfig; });
/* harmony import */ var C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "5530");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "b64b");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "2ef0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var setaria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! setaria */ "8f8e");
/* harmony import */ var setaria__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(setaria__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var setaria_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! setaria-ui */ "a517");
/* harmony import */ var setaria_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(setaria_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http */ "cc26");
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http/interceptor */ "6f72");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message */ "c0ee");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./route */ "59b4");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store */ "4360");
/* harmony import */ var _store_store_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/store-type */ "e1a1");















function createHttpInterceptor(opts) {
  return _http_interceptor__WEBPACK_IMPORTED_MODULE_9__["default"].getInterceptor(opts.env);
}

function createHttpConfig() {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var interceptor = arguments.length > 1 ? arguments[1] : undefined;
  var opts = arguments.length > 2 ? arguments[2] : undefined;
  var defaultHttp = _http__WEBPACK_IMPORTED_MODULE_8__["default"].getCommonHttpConfig(opts.env, interceptor);
  Object.keys(val).forEach(function (key) {
    var temp = val[key];

    if (lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(temp.interceptor)) {
      temp.interceptor = Object(C_SynologyDrive_work_project_personal_setaria_vue_component_library_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, interceptor.interceptor);
    }

    return temp;
  });
  return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.assign({}, defaultHttp, val);
}

function createRouteConfig(val) {
  return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.assign({}, _route__WEBPACK_IMPORTED_MODULE_11__["default"], val);
}

function createStoreConfig(val) {
  return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.assign({}, _store__WEBPACK_IMPORTED_MODULE_12__["default"], val);
}

function createMessageConfig(val) {
  return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.assign({}, _message__WEBPACK_IMPORTED_MODULE_10__["default"], val);
}

function errorHandler(error, type) {
  var errorCode = error.errorCode,
      errorMessage = error.errorMessage;
  var messageType = setaria__WEBPACK_IMPORTED_MODULE_6__["constants"].MESSAGE_TYPE.ERROR; // 生产环境不提示客户端错误

  if (true) {
    if (errorCode && errorCode === 'SYSMSG-CLIENT-UNKNOWN-ERROR' || errorMessage && errorMessage.indexOf('SYSMSG-CLIENT-UNKNOWN-ERROR') !== -1) {
      return;
    } // 忽略window.onerror错误


    if (type === setaria__WEBPACK_IMPORTED_MODULE_6__["constants"].ERROR_THROW_TYPES.NORMAL_ERROR) {
      return;
    }
  }

  Object(setaria_ui__WEBPACK_IMPORTED_MODULE_7__["Message"])({
    type: messageType,
    message: "".concat(errorCode ? "[".concat(errorCode, "] ") : '').concat(errorMessage)
  });
}

function createConfig(val, opts) {
  var frameworkConfig = val;
  var interceptor = createHttpInterceptor(opts);
  frameworkConfig.http = createHttpConfig(val.http, interceptor, opts);
  frameworkConfig.routes = createRouteConfig(val.routes);
  frameworkConfig.store = createStoreConfig(val.store);
  frameworkConfig.message = createMessageConfig(val.message);
  frameworkConfig.storeType = _store_store_type__WEBPACK_IMPORTED_MODULE_13__["default"];
  frameworkConfig.errorHandler = typeof val.errorHandler === 'function' ? val.errorHandler : errorHandler;

  if (val.schema) {
    frameworkConfig.getInitialState = function (_ref) {
      var sdkStore = _ref.store;
      var promise = new Promise(function (resolve) {
        console.log('初始化数据加载');
        resolve({});
      });
      return promise;
    };
  }

  return frameworkConfig;
}
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "f17f":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53f6b49b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./package/foo/src/foo.vue?vue&type=template&id=60bbf579& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("Foo Hello World!")])}
var staticRenderFns = []



/***/ }),

/***/ "f42f":
/*!*************************************!*\
  !*** ./doc/asset/style/common.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f4e8":
/*!***********************!*\
  !*** external "hljs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = hljs;

/***/ })

/******/ });