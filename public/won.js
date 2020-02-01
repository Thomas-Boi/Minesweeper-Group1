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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/won.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/won_css/won.css":
/*!*********************************!*\
  !*** ./src/css/won_css/won.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/won_css/won.css?");

/***/ }),

/***/ "./src/js/minesweeper_timer.js":
/*!*************************************!*\
  !*** ./src/js/minesweeper_timer.js ***!
  \*************************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Timer\", function() { return Timer; });\nvar Timer = {\n  // everything relates to Times/time\n  timer_interval: null,\n  start_timer: function start_timer() {\n    // start the timer that tracks time from start_time\n    var start_time = new Date();\n    Timer.timer_interval = setInterval(function () {\n      Timer.update_timer(start_time);\n    }, 1000);\n  },\n  update_timer: function update_timer(start_time) {\n    // update the timer\n    var current_time = new Date();\n    var elapsed_time = current_time - start_time;\n    var second = Math.floor(elapsed_time / 1000) % 60;\n\n    if (second < 10) {\n      second = \"0\" + String(second);\n    }\n\n    var minute = Math.floor(elapsed_time / 60000);\n    document.getElementById('timer').innerHTML = String(minute) + \":\" + String(second);\n  },\n  save_end_time: function save_end_time() {\n    // stave time of user in sessionStorage\n    var time = document.getElementById('timer').innerHTML;\n    sessionStorage.setItem(\"Time\", time);\n  },\n  retrieve_end_time: function retrieve_end_time() {\n    // retrieve the end time of user in sessionStorage\n    var time = sessionStorage.getItem(\"Time\");\n    return time;\n  },\n  stop_timer: function stop_timer() {\n    // stop the timer\n    clearInterval(Timer.timer_interval);\n  },\n  reset_timer: function reset_timer() {\n    // reset the timer\n    document.getElementById('timer').innerHTML = \"0:00\";\n  }\n};\n\n//# sourceURL=webpack:///./src/js/minesweeper_timer.js?");

/***/ }),

/***/ "./src/js/won.js":
/*!***********************!*\
  !*** ./src/js/won.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _minesweeper_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_timer.js */ \"./src/js/minesweeper_timer.js\");\n/* harmony import */ var _css_won_css_won_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/won_css/won.css */ \"./src/css/won_css/won.css\");\n/* harmony import */ var _css_won_css_won_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_won_css_won_css__WEBPACK_IMPORTED_MODULE_1__);\n // contains script for won.html\n\nfunction display_score() {\n  // get score from sessionStorage and display it\n  var score = _minesweeper_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"Timer\"].retrieve_end_time();\n  document.getElementById(\"user_score\").innerHTML = score;\n}\n\ndisplay_score();\n\ndocument.getElementById('replay').onclick = function () {\n  window.close();\n};\n\n\n\n//# sourceURL=webpack:///./src/js/won.js?");

/***/ })

/******/ });