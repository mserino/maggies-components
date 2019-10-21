/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Card */ \"./src/scripts/Card.js\");\n\nconsole.log('Maggies Card Component');\n\nnew _scripts_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.maggies-card');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/Card.js":
/*!*****************************!*\
  !*** ./src/scripts/Card.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\n\n/**\n * @module Card\n * @description\n * \n * Create a Card UI\n */\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Card =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Constructor function\n   */\n  function Card(element) {\n    var _this = this;\n\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, Card);\n\n    this.currentIndex = 0; // Defaults\n\n    var defaults = {\n      // Event callbacks\n      onCreate: null\n    };\n\n    if (!element || 'string' !== typeof element) {\n      console.error('Maggie\\'s Card Component: No target supplied. A valid target (accordion area) must be used.');\n      return;\n    }\n\n    this.$cards = document.querySelectorAll(element); // Bail out if there are no cards\n\n    if (!this.$cards) {\n      console.error('Maggie\\'s Card Component: Target not found. A valid target must be used');\n      return;\n    } // Settings\n\n\n    this.settings = Object.assign({}, defaults, options);\n    this.$cards.forEach(function (cardArea, index) {\n      _this.setupCard(cardArea, index);\n    });\n    /**\n    * Called after the accordion is initialized on page load.\n    * @callback onCreate\n    */\n\n    if (this.settings.onCreate && 'function' === typeof this.settings.onCreate) {\n      this.settings.onCreate.call();\n    }\n  }\n\n  _createClass(Card, [{\n    key: \"setupCard\",\n    value: function setupCard(card) {\n      var _this2 = this;\n\n      var images = card.querySelectorAll('img');\n      var controls = card.querySelectorAll('.slideshow-control');\n\n      if (images.length > 1) {\n        this.setupSlideShow(images);\n      }\n\n      controls.forEach(function (control) {\n        control.addEventListener('click', function (event) {\n          var target = event.target.dataset.target;\n\n          if (target === 'next') {\n            _this2.showNextSlide(images);\n          } else {\n            _this2.showPreviousSlide(images);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"setupSlideShow\",\n    value: function setupSlideShow(images) {\n      this.currentIndex = 0;\n      this.showCurrentIndex(images);\n    }\n  }, {\n    key: \"showNextSlide\",\n    value: function showNextSlide(images) {\n      this.currentIndex += 1;\n      this.showCurrentIndex(images);\n    }\n  }, {\n    key: \"showPreviousSlide\",\n    value: function showPreviousSlide(images) {\n      this.currentIndex -= 1;\n      this.showCurrentIndex(images);\n    }\n  }, {\n    key: \"showCurrentIndex\",\n    value: function showCurrentIndex(images) {\n      images.forEach(function (image) {\n        image.classList.remove('-visible');\n        image.classList.add('-hidden');\n      });\n      images[this.currentIndex].classList.add('-visible');\n    }\n  }]);\n\n  return Card;\n}();\n\n\n\n//# sourceURL=webpack:///./src/scripts/Card.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/styles.scss?");

/***/ })

/******/ });