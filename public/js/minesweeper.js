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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/minesweeper.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/minesweeper.js":
/*!*******************************!*\
  !*** ./src/js/minesweeper.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import { Score } from \"minesweeper_score.js\";\n// import {CellInteractor} from \"minesweeper_btn_interact\";\n// import {MinesAndNums} from \"minesweeper_mines_num.js\";\n// import {BoardCreator} from \"minesweeper_board_creator.js\";\n// import {EndGameMechanics} from \"minesweeper_end_game.js\";\n// import {Sound} from \"minesweeper_sound.js\";\n// import {Setting} from \"minesweeper_setting.js\";\n// import {MetaData} from \"minesweeper_metadata.js\";\n// load metadata\nMetaData.load_meta_data(); // set events handlers\n\ndocument.getElementById('board').onclick = CellInteractor.first_touch;\ndocument.getElementById('reset').onclick = ResetFunctions.reset_board; // music buttons\n\ndocument.getElementById('musicOnBtn').onclick = function () {\n  Setting.toggleMusic(\"on\");\n};\n\ndocument.getElementById('musicOffBtn').onclick = function () {\n  Setting.toggleMusic(\"off\");\n}; // sfx buttons\n\n\ndocument.getElementById('soundOnBtn').onclick = function () {\n  Setting.toggleSfx(\"on\");\n};\n\ndocument.getElementById('soundOffBtn').onclick = function () {\n  Setting.toggleSfx(\"off\");\n}; // open advance setting\n\n\ndocument.getElementById('setting_pic').onclick = Setting.open_advance_setting; // difficulty mode btns\n\ndocument.getElementById('intro').onclick = function () {\n  Setting.select_mode('intro');\n};\n\ndocument.getElementById('easy').onclick = function () {\n  Setting.select_mode('easy');\n};\n\ndocument.getElementById('medium').onclick = function () {\n  Setting.select_mode('medium');\n};\n\ndocument.getElementById('hard').onclick = function () {\n  Setting.select_mode('hard');\n}; // music buttons\n\n\ndocument.getElementById('music_option').onclick = Setting.change_music; // close setting\n\ndocument.getElementById('confirm').onclick = Setting.confirm_advance_setting;\nSetting.load_setting_base_on_metadata();\nSound.set_sounds_based_on_meta_data();\n\n//# sourceURL=webpack:///./src/js/minesweeper.js?");

/***/ })

/******/ });