(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueFullcalendar"] = factory();
	else
		root["VueFullcalendar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _fullCalendar = __webpack_require__(1);

	var _fullCalendar2 = _interopRequireDefault(_fullCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var fc = _fullCalendar2.default;

	module.exports = fc;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(2)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(7),
	  /* template */
	  __webpack_require__(58),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jackjo/Desktop/vue-fullcalendar-1.0.9/src/fullCalendar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] fullCalendar.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-56ec2684", Component.options)
	  } else {
	    hotAPI.reload("data-v-56ec2684", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-56ec2684!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fullCalendar.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-56ec2684!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fullCalendar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.comp-full-calendar {\n  padding: 20px;\n  background: #fff;\n  max-width: 960px;\n  margin: 0 auto;\n}\n.comp-full-calendar ul, .comp-full-calendar p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n}\n", ""]);

	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _langSets = __webpack_require__(8);

	var _langSets2 = _interopRequireDefault(_langSets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {

	    arrData: {
	      type: Array,
	      default: []
	    },
	    lang: {
	      type: String,
	      default: 'zh'
	    },
	    firstDay: {
	      type: Number | String,
	      validator: function validator(val) {
	        var res = parseInt(val);
	        return res >= 0 && res <= 6;
	      },

	      default: 0
	    },
	    titleFormat: {
	      type: String,
	      default: function _default() {
	        return _langSets2.default[this.lang].titleFormat;
	      }
	    },
	    monthNames: {
	      type: Array,
	      default: function _default() {
	        return _langSets2.default[this.lang].monthNames;
	      }
	    },
	    weekNames: {
	      type: Array,
	      default: function _default() {
	        var arr = _langSets2.default[this.lang].weekNames;
	        return arr.slice(this.firstDay).concat(arr.slice(0, this.firstDay));
	      }
	    }
	  },
	  data: function data() {
	    return {
	      currentDate: new Date()
	    };
	  },

	  methods: {
	    changeArrDatas: function changeArrDatas() {
	      this.$emit('pullData');
	    },
	    changeSaves: function changeSaves() {
	      this.$emit('saveData');
	    },
	    emitChangeMonth: function emitChangeMonth(start, end, currentStart, current) {
	      this.currentDate = current;
	      this.$emit('changeMonth', start, end, currentStart);
	    },
	    emitEventClick: function emitEventClick(event, jsEvent, pos) {
	      this.$emit('eventClick', event, jsEvent, pos);
	    },
	    emitDayClick: function emitDayClick(day, jsEvent, dayObj) {
	      this.$emit('dayClick', day, jsEvent, dayObj);
	    },
	    emitMoreClick: function emitMoreClick(day, events, jsEvent) {
	      this.$emit('moreClick', day, event, jsEvent);
	    }
	  },
	  components: {
	    'fc-body': __webpack_require__(9),
	    'fc-header': __webpack_require__(53)
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  en: {
	    weekNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    titleFormat: 'MMMM yyyy'
	  },
	  zh: {
	    weekNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
	    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
	    titleFormat: 'yyyy年MM月'
	  },
	  fr: {
	    weekNames: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
	    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
	    titleFormat: 'MMMM yyyy'
	  }
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(10)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(12),
	  /* template */
	  __webpack_require__(52),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jackjo/Desktop/vue-fullcalendar-1.0.9/src/components/body.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] body.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-69586e34", Component.options)
	  } else {
	    hotAPI.reload("data-v-69586e34", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-69586e34!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./body.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-69586e34!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./body.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.full-calendar-body {\n  margin-top: 20px;\n}\n.full-calendar-body .weeks {\n    display: flex;\n    border-top: 1px solid #e0e0e0;\n    border-bottom: 1px solid #e0e0e0;\n    border-left: 1px solid #e0e0e0;\n}\n.full-calendar-body .weeks .week {\n      flex: 1;\n      text-align: center;\n      border-right: 1px solid #e0e0e0;\n}\n.full-calendar-body .dates {\n    position: relative;\n}\n.full-calendar-body .dates .week-row {\n      border-left: 1px solid #e0e0e0;\n      display: flex;\n}\n.full-calendar-body .dates .week-row .day-cell {\n        flex: 1;\n        min-height: 100px;\n        padding: 4px;\n        border-right: 1px solid #e0e0e0;\n        border-bottom: 1px solid #e0e0e0;\n        position: relative;\n        cursor: pointer;\n}\n.full-calendar-body .dates .week-row .day-cell .day-number {\n          text-align: right;\n}\n.full-calendar-body .dates .week-row .day-cell .day-iswork {\n          text-align: center;\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n}\n.full-calendar-body .dates .week-row .day-cell .day-iswork span {\n            font-size: 16px;\n            background: #00CC00;\n            color: #fff;\n            border-radius: 50%;\n            width: 20px;\n            height: 20px;\n            line-height: 20px;\n            padding: 4px;\n            display: block;\n}\n.full-calendar-body .dates .week-row .day-cell .day-btn {\n          display: block;\n          text-align: center;\n}\n.full-calendar-body .dates .week-row .day-cell .day-btn span {\n            font-size: 12px;\n            border: 1px solid #ccc;\n            padding: 2px 4px;\n            display: block;\n}\n.full-calendar-body .dates .week-row .day-cell.today {\n          background-color: #fcf8e3;\n}\n.full-calendar-body .dates .week-row .day-cell.not-cur-month .day-number {\n          color: rgba(0, 0, 0, 0.24);\n}\n.full-calendar-body .dates .dates-events {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%;\n}\n.full-calendar-body .dates .dates-events .events-week {\n        display: flex;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day {\n          cursor: pointer;\n          flex: 1;\n          min-height: 109px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .day-number {\n            text-align: right;\n            padding: 4px 5px 4px 4px;\n            opacity: 0;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day.not-cur-month .day-number {\n            color: rgba(0, 0, 0, 0.24);\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item {\n            cursor: pointer;\n            font-size: 12px;\n            background-color: #C7E6FD;\n            margin-bottom: 2px;\n            color: rgba(0, 0, 0, 0.87);\n            padding: 0 0 0 4px;\n            height: 18px;\n            line-height: 18px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-start {\n              margin-left: 4px;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-end {\n              margin-right: 4px;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-opacity {\n              opacity: 0;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .more-link {\n            cursor: pointer;\n            padding-left: 8px;\n            padding-right: 2px;\n            color: rgba(0, 0, 0, 0.38);\n            font-size: 14px;\n}\n.full-calendar-body .dates .more-events {\n      position: absolute;\n      width: 150px;\n      z-index: 2;\n      border: 1px solid #eee;\n      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.full-calendar-body .dates .more-events .more-header {\n        background-color: #eee;\n        padding: 5px;\n        display: flex;\n        align-items: center;\n        font-size: 14px;\n}\n.full-calendar-body .dates .more-events .more-header .title {\n          flex: 1;\n}\n.full-calendar-body .dates .more-events .more-header .close {\n          margin-right: 2px;\n          cursor: pointer;\n          font-size: 16px;\n}\n.full-calendar-body .dates .more-events .more-body {\n        height: 140px;\n        overflow: hidden;\n}\n.full-calendar-body .dates .more-events .more-body .body-list {\n          height: 120px;\n          padding: 5px;\n          overflow: auto;\n          background-color: #fff;\n}\n.full-calendar-body .dates .more-events .more-body .body-list .body-item {\n            cursor: pointer;\n            font-size: 12px;\n            background-color: #C7E6FD;\n            margin-bottom: 2px;\n            color: rgba(0, 0, 0, 0.87);\n            padding: 0 0 0 4px;\n            height: 18px;\n            line-height: 18px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n}\n", ""]);

	// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(13);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _dateFunc = __webpack_require__(51);

	var _dateFunc2 = _interopRequireDefault(_dateFunc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    arrData: {
	      type: Array,
	      default: []
	    },
	    currentDate: {},
	    weekNames: {
	      type: Array,
	      default: []
	    },
	    monthNames: {},
	    firstDay: {}
	  },
	  created: function created() {},
	  data: function data() {
	    return {
	      // weekNames : DAY_NAMES,
	      weekMask: [1, 2, 3, 4, 5, 6, 7],
	      isLismit: true,
	      eventLimit: 3,
	      showMore: false,
	      morePos: {
	        top: 0,
	        left: 0
	      },
	      selectDay: {}
	    };
	  },

	  watch: {
	    weekNames: function weekNames(val) {}
	  },
	  computed: {
	    currentDates: function currentDates() {
	      return this.getCalendar();
	    }
	  },
	  methods: {
	    isBegin: function isBegin(event, date, index) {
	      var st = new Date(event.start);

	      if (index == 0 || st.toDateString() == date.toDateString()) {
	        return event.title;
	      }
	      return '　';
	    },
	    moreTitle: function moreTitle(date) {
	      var dt = new Date(date);
	      return this.weekNames[dt.getDay()] + ', ' + this.monthNames[dt.getMonth()] + dt.getDate();
	    },
	    classNames: function classNames(cssClass) {
	      if (!cssClass) return '';
	      // string  
	      if (typeof cssClass == 'string') return cssClass;

	      // Array
	      if (Array.isArray(cssClass)) return cssClass.join(' ');

	      // else
	      return '';
	    },
	    getCalendar: function getCalendar() {
	      // calculate 2d-array of each month
	      // first day of this month
	      var now = new Date(); // today
	      var current = new Date(this.currentDate);

	      var startDate = _dateFunc2.default.getStartDate(current); // 1st day of this month

	      var curWeekDay = startDate.getDay();

	      // begin date of this table may be some day of last month
	      var diff = parseInt(this.firstDay) - curWeekDay;
	      diff = diff > 0 ? diff - 7 : diff;

	      startDate.setDate(startDate.getDate() + diff);
	      var calendar = [];

	      for (var perWeek = 0; perWeek < 6; perWeek++) {

	        var week = [];

	        for (var perDay = 0; perDay < 7; perDay++) {
	          var datetime = _dateFunc2.default.format(new Date(startDate), 'yyyy-MM-dd');
	          week.push({
	            monthDay: startDate.getDate(),
	            isToday: now.toDateString() == startDate.toDateString(),
	            isCurMonth: startDate.getMonth() == current.getMonth(),
	            weekDay: perDay,
	            date: new Date(startDate),
	            datetime: datetime,
	            isworkDay: this._isWorkFun(datetime) || 1
	          });

	          startDate.setDate(startDate.getDate() + 1);
	          // if (startDate.toDateString() == endDate.toDateString()) {
	          //   isFinal = true
	          //   break
	          // }
	        }
	        calendar.push(week);
	        // if (isFinal) break
	      }
	      return calendar;
	    },
	    _isWorkFun: function _isWorkFun(val) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = (0, _getIterator3.default)(this.arrData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var item = _step.value;

	          if (item.time == val) {
	            return item.type;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    },
	    isStart: function isStart(eventDate, date) {
	      var st = new Date(eventDate);
	      return st.toDateString() == date.toDateString();
	    },
	    isEnd: function isEnd(eventDate, date) {
	      var ed = new Date(eventDate);
	      return ed.toDateString() == date.toDateString();
	    },
	    computePos: function computePos(target) {
	      var eventRect = target.getBoundingClientRect();
	      var pageRect = this.$refs.dates.getBoundingClientRect();
	      return {
	        left: eventRect.left - pageRect.left,
	        top: eventRect.top + eventRect.height - pageRect.top
	      };
	    },
	    dayClick: function dayClick(day, jsEvent, dayObj) {
	      this.$emit('dayclick', day, jsEvent, dayObj);
	    },
	    eventClick: function eventClick(event, jsEvent) {
	      if (!event.isShow) {
	        return;
	      }
	      jsEvent.stopPropagation();
	      var pos = this.computePos(jsEvent.target);
	      this.$emit('eventclick', event, jsEvent, pos);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	__webpack_require__(43);
	module.exports = __webpack_require__(46);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(16);
	var Iterators = __webpack_require__(19);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(17)
	  , step             = __webpack_require__(18)
	  , Iterators        = __webpack_require__(19)
	  , toIObject        = __webpack_require__(20);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(24)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(21)
	  , defined = __webpack_require__(23);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(22);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(25)
	  , $export        = __webpack_require__(26)
	  , redefine       = __webpack_require__(31)
	  , hide           = __webpack_require__(32)
	  , has            = __webpack_require__(37)
	  , Iterators      = __webpack_require__(19)
	  , $iterCreate    = __webpack_require__(38)
	  , setToStringTag = __webpack_require__(39)
	  , getProto       = __webpack_require__(33).getProto
	  , ITERATOR       = __webpack_require__(40)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(27)
	  , core      = __webpack_require__(28)
	  , ctx       = __webpack_require__(29)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(30);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(33)
	  , createDesc = __webpack_require__(34);
	module.exports = __webpack_require__(35) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(36)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(33)
	  , descriptor     = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(39)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(32)(IteratorPrototype, __webpack_require__(40)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(33).setDesc
	  , has = __webpack_require__(37)
	  , TAG = __webpack_require__(40)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(41)('wks')
	  , uid    = __webpack_require__(42)
	  , Symbol = __webpack_require__(27).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(27)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(44)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(24)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(45)
	  , defined   = __webpack_require__(23);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(47)
	  , get      = __webpack_require__(49);
	module.exports = __webpack_require__(28).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(48);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(50)
	  , ITERATOR  = __webpack_require__(40)('iterator')
	  , Iterators = __webpack_require__(19);
	module.exports = __webpack_require__(28).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(22)
	  , TAG = __webpack_require__(40)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	'use strict';

	var shortMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var defMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var dateFunc = {
	    getDuration: function getDuration(date) {
	        // how many days of this month
	        var dt = new Date(date);
	        var month = dt.getMonth();
	        dt.setMonth(dt.getMonth() + 1);
	        dt.setDate(0);
	        return dt.getDate();
	    },
	    changeDay: function changeDay(date, num) {
	        var dt = new Date(date);
	        return new Date(dt.setDate(dt.getDate() + num));
	    },
	    getStartDate: function getStartDate(date) {
	        // return first day of this month
	        return new Date(date.getFullYear(), date.getMonth(), 1);
	    },
	    getEndDate: function getEndDate(date) {
	        // get last day of this month
	        var dt = new Date(date.getFullYear(), date.getMonth() + 1, 1); // 1st day of next month
	        return new Date(dt.setDate(dt.getDate() - 1)); // last day of this month
	    },
	    format: function format(date, _format, monthNames) {
	        monthNames = monthNames || defMonthNames;
	        if (typeof date === 'string') {
	            date = new Date(date.replace(/-/g, '/'));
	        } else {
	            date = new Date(date);
	        }

	        var map = {
	            'M': date.getMonth() + 1,
	            'd': date.getDate(),
	            'h': date.getHours(),
	            'm': date.getMinutes(),
	            's': date.getSeconds(),
	            'q': Math.floor((date.getMonth() + 3) / 3),
	            'S': date.getMilliseconds()
	        };

	        _format = _format.replace(/([yMdhmsqS])+/g, function (all, t) {
	            var v = map[t];
	            if (v !== undefined) {
	                if (all === 'MMMM') {
	                    return monthNames[v - 1];
	                }
	                if (all === 'MMM') {
	                    return shortMonth[v - 1];
	                }
	                if (all.length > 1) {
	                    v = '0' + v;
	                    v = v.substr(v.length - 2);
	                }
	                return v;
	            } else if (t === 'y') {
	                return String(date.getFullYear()).substr(4 - all.length);
	            }
	            return all;
	        });
	        return _format;
	    }
	};

	module.exports = dateFunc;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "full-calendar-body"
	  }, [_c('div', {
	    staticClass: "weeks"
	  }, _vm._l((_vm.weekNames), function(week) {
	    return _c('strong', {
	      staticClass: "week"
	    }, [_vm._v(_vm._s(week))])
	  }), 0), _vm._v(" "), _c('div', {
	    ref: "dates",
	    staticClass: "dates"
	  }, [_c('div', {
	    staticClass: "dates-bg"
	  }, _vm._l((_vm.currentDates), function(week) {
	    return _c('div', {
	      staticClass: "week-row"
	    }, _vm._l((week), function(day) {
	      return _c('div', {
	        staticClass: "day-cell",
	        class: {
	          'today': day.isToday,
	            'not-cur-month': !day.isCurMonth
	        },
	        attrs: {
	          "onselectstart": "return false"
	        },
	        on: {
	          "click": function($event) {
	            $event.stopPropagation();
	            return _vm.dayClick(day.date, $event, day)
	          }
	        }
	      }, [_c('p', {
	        staticClass: "day-number"
	      }, [_vm._v(_vm._s(day.monthDay))]), _vm._v(" "), _c('p', {
	        staticClass: "day-iswork"
	      }, [(day.isworkDay == 2) ? _c('span', [_vm._v("休")]) : _vm._e()])])
	    }), 0)
	  }), 0), _vm._v(" "), _vm._t("body-card")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-69586e34", module.exports)
	  }
	}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(54)

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(56),
	  /* template */
	  __webpack_require__(57),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jackjo/Desktop/vue-fullcalendar-1.0.9/src/components/header.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-32fdd31f", Component.options)
	  } else {
	    hotAPI.reload("data-v-32fdd31f", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-32fdd31f!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-32fdd31f!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.full-calendar-header {\n  display: flex;\n  align-items: center;\n}\n.full-calendar-header .header-left, .full-calendar-header .header-right {\n    flex: 1;\n}\n.full-calendar-header .header-right {\n    text-align: right;\n}\n.full-calendar-header .fc-today, .full-calendar-header .fc-pull, .full-calendar-header .fc-save {\n    display: inline-block;\n    border: 1px solid #ccc;\n    padding: 2px 6px;\n    font-size: 14px;\n    border-radius: 2px;\n    cursor: pointer;\n}\n.full-calendar-header .fc-today:hover, .full-calendar-header .fc-pull:hover, .full-calendar-header .fc-save:hover {\n    background: #eee;\n}\n.full-calendar-header .header-center {\n    flex: 3;\n    text-align: center;\n}\n.full-calendar-header .header-center .title {\n      margin: 0 10px;\n      width: 90px;\n      display: inline-block;\n}\n.full-calendar-header .header-center .prev-month, .full-calendar-header .header-center .next-month {\n      cursor: pointer;\n}\n", ""]);

	// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dateFunc = __webpack_require__(51);

	var _dateFunc2 = _interopRequireDefault(_dateFunc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  created: function created() {
	    this.dispatchEvent();
	  },

	  props: {
	    arrData: {},
	    currentDate: {},
	    titleFormat: {},
	    firstDay: {},
	    monthNames: {}
	  },
	  data: function data() {
	    return {
	      title: '',
	      leftArrow: '<<',
	      rightArrow: '>>',
	      headDate: new Date()
	    };
	  },

	  watch: {
	    currentDate: function currentDate(val) {
	      if (!val) return;
	      this.headDate = val;
	      // this.headDate = JSON.parse(JSON.stringify(val))
	    }
	  },
	  methods: {
	    toPull: function toPull() {
	      this.$emit('changeData');
	      this.dispatchEvent();
	    },
	    toSave: function toSave() {
	      this.$emit('changeSave');
	      this.dispatchEvent();
	    },
	    toToday: function toToday() {
	      this.headDate = this.changeMonth(this.headDate, 0, 'today');
	      this.dispatchEvent();
	    },
	    goPrev: function goPrev() {
	      this.headDate = this.changeMonth(this.headDate, -1);
	      this.dispatchEvent();
	    },
	    goNext: function goNext() {
	      this.headDate = this.changeMonth(this.headDate, 1);
	      this.dispatchEvent();
	    },
	    changeMonth: function changeMonth(date, num, today) {
	      var dt = new Date(date);
	      var month = new Date().getMonth();
	      if (today) {
	        return new Date(dt.setMonth(month));
	      } else {
	        return new Date(dt.setMonth(dt.getMonth() + num));
	      }
	    },
	    dispatchEvent: function dispatchEvent() {
	      this.title = _dateFunc2.default.format(this.headDate, this.titleFormat, this.monthNames);

	      var startDate = _dateFunc2.default.getStartDate(this.headDate);
	      var curWeekDay = startDate.getDay();

	      // 1st day of this monthView
	      var diff = parseInt(this.firstDay) - curWeekDay;
	      if (diff) diff -= 7;
	      startDate.setDate(startDate.getDate() + diff);

	      // the month view is 6*7
	      var endDate = _dateFunc2.default.changeDay(startDate, 41);

	      // 1st day of current month
	      var currentDate = _dateFunc2.default.getStartDate(this.headDate);

	      this.$emit('change', _dateFunc2.default.format(startDate, 'yyyy-MM-dd'), _dateFunc2.default.format(endDate, 'yyyy-MM-dd'), _dateFunc2.default.format(currentDate, 'yyyy-MM-dd'), this.headDate);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "full-calendar-header"
	  }, [_c('div', {
	    staticClass: "header-left"
	  }, [_c('span', {
	    staticClass: "fc-today",
	    attrs: {
	      "onselectstart": "return false"
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        return _vm.toToday($event)
	      }
	    }
	  }, [_vm._v("今天")])]), _vm._v(" "), _c('div', {
	    staticClass: "header-center"
	  }, [_c('span', {
	    staticClass: "prev-month",
	    attrs: {
	      "onselectstart": "return false"
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        return _vm.goPrev($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.leftArrow))]), _vm._v(" "), _c('span', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('span', {
	    staticClass: "next-month",
	    attrs: {
	      "onselectstart": "return false"
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        return _vm.goNext($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.rightArrow))])]), _vm._v(" "), _c('div', {
	    staticClass: "header-right"
	  }, [_c('span', {
	    staticClass: "fc-pull",
	    attrs: {
	      "onselectstart": "return false"
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        return _vm.toPull($event)
	      }
	    }
	  }, [_vm._v("拉取数据")]), _vm._v(" "), _c('span', {
	    staticClass: "fc-save",
	    attrs: {
	      "onselectstart": "return false"
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        return _vm.toSave($event)
	      }
	    }
	  }, [_vm._v("保存数据")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-32fdd31f", module.exports)
	  }
	}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "comp-full-calendar"
	  }, [_c('fc-header', {
	    attrs: {
	      "current-date": _vm.currentDate,
	      "title-format": _vm.titleFormat,
	      "first-day": _vm.firstDay,
	      "arrData": _vm.arrData,
	      "month-names": _vm.monthNames
	    },
	    on: {
	      "change": _vm.emitChangeMonth,
	      "changeData": _vm.changeArrDatas,
	      "changeSave": _vm.changeSaves
	    }
	  }, [_c('div', {
	    attrs: {
	      "slot": "header-left"
	    },
	    slot: "header-left"
	  }, [_vm._t("fc-header-left")], 2), _vm._v(" "), _c('div', {
	    attrs: {
	      "slot": "header-right"
	    },
	    slot: "header-right"
	  }, [_vm._t("fc-header-right")], 2)]), _vm._v(" "), _c('fc-body', {
	    attrs: {
	      "current-date": _vm.currentDate,
	      "arrData": _vm.arrData,
	      "month-names": _vm.monthNames,
	      "week-names": _vm.weekNames,
	      "first-day": _vm.firstDay
	    },
	    on: {
	      "eventclick": _vm.emitEventClick,
	      "dayclick": _vm.emitDayClick,
	      "moreclick": _vm.emitMoreClick
	    }
	  }, [_c('div', {
	    attrs: {
	      "slot": "body-card"
	    },
	    slot: "body-card"
	  }, [_vm._t("fc-body-card")], 2)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-56ec2684", module.exports)
	  }
	}

/***/ })
/******/ ])
});
;