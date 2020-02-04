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

/***/ "./src/Audio/BillyGorilly_JingleBells.mp3":
/*!************************************************!*\
  !*** ./src/Audio/BillyGorilly_JingleBells.mp3 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"Audio/BillyGorilly_JingleBells.mp3\";\n\n//# sourceURL=webpack:///./src/Audio/BillyGorilly_JingleBells.mp3?");

/***/ }),

/***/ "./src/Audio/Bomb-SoundBible.mp3":
/*!***************************************!*\
  !*** ./src/Audio/Bomb-SoundBible.mp3 ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"Audio/Bomb-SoundBible.mp3\";\n\n//# sourceURL=webpack:///./src/Audio/Bomb-SoundBible.mp3?");

/***/ }),

/***/ "./src/Audio/Button-SoundBible.com-1420500901.mp3":
/*!********************************************************!*\
  !*** ./src/Audio/Button-SoundBible.com-1420500901.mp3 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"Audio/Button-SoundBible.com-1420500901.mp3\";\n\n//# sourceURL=webpack:///./src/Audio/Button-SoundBible.com-1420500901.mp3?");

/***/ }),

/***/ "./src/Images/gear_setting.png":
/*!*************************************!*\
  !*** ./src/Images/gear_setting.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"Images/gear_setting.png\";\n\n//# sourceURL=webpack:///./src/Images/gear_setting.png?");

/***/ }),

/***/ "./src/Images/reset.png":
/*!******************************!*\
  !*** ./src/Images/reset.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"Images/reset.png\";\n\n//# sourceURL=webpack:///./src/Images/reset.png?");

/***/ }),

/***/ "./src/Images/snow.png":
/*!*****************************!*\
  !*** ./src/Images/snow.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"Images/snow.png\";\n\n//# sourceURL=webpack:///./src/Images/snow.png?");

/***/ }),

/***/ "./src/css/minesweeper_css/minesweeper.css":
/*!*************************************************!*\
  !*** ./src/css/minesweeper_css/minesweeper.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/minesweeper_css/minesweeper.css?");

/***/ }),

/***/ "./src/js/minesweeper.js":
/*!*******************************!*\
  !*** ./src/js/minesweeper.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _minesweeper_cell_interact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_cell_interact.js */ \"./src/js/minesweeper_cell_interact.js\");\n/* harmony import */ var _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minesweeper_sound.js */ \"./src/js/minesweeper_sound.js\");\n/* harmony import */ var _minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minesweeper_setting.js */ \"./src/js/minesweeper_setting.js\");\n/* harmony import */ var _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minesweeper_metadata.js */ \"./src/js/minesweeper_metadata.js\");\n/* harmony import */ var _minesweeper_resetter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minesweeper_resetter.js */ \"./src/js/minesweeper_resetter.js\");\n/* harmony import */ var _css_minesweeper_css_minesweeper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/minesweeper_css/minesweeper.css */ \"./src/css/minesweeper_css/minesweeper.css\");\n/* harmony import */ var _css_minesweeper_css_minesweeper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_minesweeper_css_minesweeper_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Audio_Button_SoundBible_com_1420500901_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Audio/Button-SoundBible.com-1420500901.mp3 */ \"./src/Audio/Button-SoundBible.com-1420500901.mp3\");\n/* harmony import */ var _Audio_Button_SoundBible_com_1420500901_mp3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Audio_Button_SoundBible_com_1420500901_mp3__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Audio_Bomb_SoundBible_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Audio/Bomb-SoundBible.mp3 */ \"./src/Audio/Bomb-SoundBible.mp3\");\n/* harmony import */ var _Audio_Bomb_SoundBible_mp3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Audio_Bomb_SoundBible_mp3__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Audio_BillyGorilly_JingleBells_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Audio/BillyGorilly_JingleBells.mp3 */ \"./src/Audio/BillyGorilly_JingleBells.mp3\");\n/* harmony import */ var _Audio_BillyGorilly_JingleBells_mp3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Audio_BillyGorilly_JingleBells_mp3__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Images_gear_setting_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Images/gear_setting.png */ \"./src/Images/gear_setting.png\");\n/* harmony import */ var _Images_gear_setting_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Images_gear_setting_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Images_reset_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Images/reset.png */ \"./src/Images/reset.png\");\n/* harmony import */ var _Images_reset_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Images_reset_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Images_snow_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Images/snow.png */ \"./src/Images/snow.png\");\n/* harmony import */ var _Images_snow_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Images_snow_png__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n // load metadata\n\n_minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_3__[\"MetaData\"].load_meta_data(); // set events handlers\n\ndocument.getElementById('board').onclick = _minesweeper_cell_interact_js__WEBPACK_IMPORTED_MODULE_0__[\"CellInteractor\"].first_touch;\ndocument.getElementById('reset').onclick = _minesweeper_resetter_js__WEBPACK_IMPORTED_MODULE_4__[\"ResetFunctions\"].reset_board; // music buttons\n\ndocument.getElementById('musicOnBtn').onclick = function () {\n  _minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"Setting\"].toggleMusic(\"on\");\n}, document.getElementById('musicOffBtn').onclick = function () {\n  _minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"Setting\"].toggleMusic(\"off\");\n}; // sfx buttons\n\ndocument.getElementById('soundOnBtn').onclick = function () {\n  _minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"Setting\"].toggleSfx(\"on\");\n};\n\ndocument.getElementById('soundOffBtn').onclick = function () {\n  _minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"Setting\"].toggleSfx(\"off\");\n}; // open advance setting\n\n\ndocument.getElementById('setting_pic').onclick = _minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"Setting\"].open_advance_setting; // difficulty mode btns\n\ndocument.getElementById('intro').onclick = function () {\n  _minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"Setting\"].select_mode('intro');\n};\n\ndocument.getElementById('easy').onclick = function () {\n  _minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"Setting\"].select_mode('easy');\n};\n\ndocument.getElementById('medium').onclick = function () {\n  _minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"Setting\"].select_mode('medium');\n};\n\ndocument.getElementById('hard').onclick = function () {\n  _minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"Setting\"].select_mode('hard');\n}; // music buttons\n\n\ndocument.getElementById('music_option').onclick = _minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"Setting\"].change_music; // close setting\n\ndocument.getElementById('confirm').onclick = _minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"Setting\"].confirm_advance_setting;\n_minesweeper_setting_js__WEBPACK_IMPORTED_MODULE_2__[\"Setting\"].load_setting_base_on_metadata();\n_minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].set_sounds_based_on_meta_data(); // other resources\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/minesweeper.js?");

/***/ }),

/***/ "./src/js/minesweeper_board_creator.js":
/*!*********************************************!*\
  !*** ./src/js/minesweeper_board_creator.js ***!
  \*********************************************/
/*! exports provided: BoardCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoardCreator\", function() { return BoardCreator; });\n/* harmony import */ var _minesweeper_cell_interact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_cell_interact.js */ \"./src/js/minesweeper_cell_interact.js\");\n/* harmony import */ var _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minesweeper_metadata.js */ \"./src/js/minesweeper_metadata.js\");\n\n\nvar BoardCreator = {\n  // everything relates to creating board and the board itself\n  // BRIEF DESCRIPTION OF BOARD\n  // 1. board: the main play area\n  // 2. buttons: the part where the user interact with the board.\n  // \t\t       Clicking the button woulddisplay\n  //\t\t\t   a number that tells how many mines are nearby.\n  board: document.getElementById('board'),\n  cell_left: 0,\n  cell_top: 0,\n  btn_size: 0,\n  cells_in_a_row: 0,\n  cells_in_a_collumn: 0,\n  font_size: 0,\n  get_board: function get_board() {\n    // return the board element\n    return BoardCreator.board;\n  },\n  get_cells_in_a_row: function get_cells_in_a_row() {\n    // get the cells_in_a_row\n    return BoardCreator.cells_in_a_row;\n  },\n  get_cells_in_a_collumn: function get_cells_in_a_collumn() {\n    // get the cells_in_a_collumn\n    return BoardCreator.cells_in_a_collumn;\n  },\n  create_game_board: function create_game_board() {\n    // create the game board based on current mode\n    var mode = _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_1__[\"MetaData\"].get_game_mode();\n    var dimension = this.get_board_size_and_font_size(mode); // cells_in_a_row is how many cells are in a row\n    // cells_in_a_collumn is how many cells are in a col\n\n    var cells_in_a_row = dimension[0];\n    var cells_in_a_collumn = dimension[1];\n    var board_width_px = dimension[2];\n    BoardCreator.clear_board();\n\n    for (var i = 0; i < cells_in_a_collumn; i++) {\n      for (var j = 0; j < cells_in_a_row; j++) {\n        BoardCreator.btn_size = BoardCreator.create_buttons(board_width_px, i, j, cells_in_a_row);\n      }\n\n      BoardCreator.board.innerHTML += \"<br>\";\n      BoardCreator.cell_left = 0;\n      BoardCreator.cell_top += BoardCreator.btn_size;\n    }\n\n    BoardCreator.board.style.height = String(BoardCreator.cell_top + 5) + \"px\";\n    BoardCreator.cell_top = 0;\n    _minesweeper_cell_interact_js__WEBPACK_IMPORTED_MODULE_0__[\"CellInteractor\"].add_start_game_function_to_buttons();\n  },\n  get_board_size_and_font_size: function get_board_size_and_font_size(mode) {\n    // determine board size determines on mode\n    var cells_in_a_row, cells_in_a_collumn, board_width_px; // cells_in_a_row is how many cells are in a row\n    // cells_in_a_collumn is how many cells are in a col\n\n    switch (mode) {\n      case 'intro':\n        cells_in_a_row = 5;\n        cells_in_a_collumn = 5;\n        BoardCreator.board.style.width = '40%';\n        BoardCreator.font_size = '65px';\n        board_width_px = BoardCreator.get_board_px(39);\n        break;\n\n      case 'easy':\n        cells_in_a_row = 10;\n        cells_in_a_collumn = 10;\n        BoardCreator.board.style.width = '40%';\n        board_width_px = BoardCreator.get_board_px(39);\n        BoardCreator.font_size = '45px';\n        break;\n\n      case 'medium':\n        cells_in_a_row = 15;\n        cells_in_a_collumn = 15;\n        BoardCreator.board.style.width = '60%';\n        board_width_px = BoardCreator.get_board_px(59);\n        BoardCreator.font_size = '45px';\n        break;\n\n      case 'hard':\n        cells_in_a_row = 20;\n        cells_in_a_collumn = 20;\n        BoardCreator.board.style.width = '90%';\n        board_width_px = BoardCreator.get_board_px(89);\n        BoardCreator.font_size = '45px';\n        break;\n    }\n\n    BoardCreator.cells_in_a_collumn = cells_in_a_collumn;\n    BoardCreator.cells_in_a_row = cells_in_a_row;\n    return [cells_in_a_row, cells_in_a_collumn, board_width_px];\n  },\n  get_board_px: function get_board_px(percentage) {\n    // calculate and return cells_in_a_row in px\n    var percentage_as_decimal = percentage / 100;\n    return percentage_as_decimal * window.innerWidth;\n  },\n  clear_board: function clear_board() {\n    // clear the board\n    BoardCreator.board.innerHTML = '';\n  },\n  create_buttons: function create_buttons(board_width_px, i, j, cells_in_a_row) {\n    // create buttons to be append to cells\n    // this is the clickable buttons on top of the cells\n    var button = document.createElement(\"BUTTON\"); // create unique id\n\n    var string = String(j) + \"_\" + String(i);\n    button.id = 'button' + string;\n    button.className = 'gift_btn btn_num0'; //find the button size depends on the board's width\n\n    var button_size = String(board_width_px / cells_in_a_row);\n    button.style.width = button_size + 'px';\n    button.style.height = button_size + 'px'; // adjust the position\n\n    button.style.left = String(BoardCreator.cell_left) + \"px\";\n    button.style.top = String(BoardCreator.cell_top) + \"px\";\n    BoardCreator.cell_left += parseInt(button_size);\n    button.style.fontSize = BoardCreator.font_size;\n    BoardCreator.board.appendChild(button);\n    return parseInt(button_size);\n  }\n};\n\n//# sourceURL=webpack:///./src/js/minesweeper_board_creator.js?");

/***/ }),

/***/ "./src/js/minesweeper_cell_interact.js":
/*!*********************************************!*\
  !*** ./src/js/minesweeper_cell_interact.js ***!
  \*********************************************/
/*! exports provided: CellInteractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CellInteractor\", function() { return CellInteractor; });\n/* harmony import */ var _minesweeper_end_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_end_game.js */ \"./src/js/minesweeper_end_game.js\");\n/* harmony import */ var _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minesweeper_sound.js */ \"./src/js/minesweeper_sound.js\");\n/* harmony import */ var _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minesweeper_metadata.js */ \"./src/js/minesweeper_metadata.js\");\n/* harmony import */ var _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minesweeper_board_creator.js */ \"./src/js/minesweeper_board_creator.js\");\n/* harmony import */ var _minesweeper_timer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minesweeper_timer.js */ \"./src/js/minesweeper_timer.js\");\n/* harmony import */ var _minesweeper_mines_num_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./minesweeper_mines_num.js */ \"./src/js/minesweeper_mines_num.js\");\n\n\n\n\n\n\nvar CellInteractor = {\n  // this class contains methods for the user to\n  // interact with the board buttons\n  flagging_period: null,\n  first_touch: function first_touch() {\n    // when the user first touch the board\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].playBtnSound();\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].play_music();\n    _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_2__[\"MetaData\"].load_meta_data();\n    var board = _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_3__[\"BoardCreator\"].get_board();\n    board.onclick = '';\n    board.style.opacity = 1;\n    _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_3__[\"BoardCreator\"].create_game_board();\n    _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_2__[\"MetaData\"].set_is_in_game(true);\n  },\n  add_start_game_function_to_buttons: function add_start_game_function_to_buttons() {\n    // add the start game functions to all board buttons\n    var buttons = document.getElementsByClassName('gift_btn');\n\n    for (var i = 0; i < buttons.length; i++) {\n      buttons[i].addEventListener(\"click\", CellInteractor.start_game);\n    }\n  },\n  start_game: function start_game() {\n    // start the game when user clicks on a btn;\n    _minesweeper_timer_js__WEBPACK_IMPORTED_MODULE_4__[\"Timer\"].start_timer(); // remove onclick of start_game and add other events\n\n    var buttons = document.getElementsByClassName(\"gift_btn\");\n\n    for (var i = 0; i < buttons.length; i++) {\n      buttons[i].removeEventListener(\"click\", CellInteractor.start_game);\n      buttons[i].addEventListener(\"mousedown\", CellInteractor.touch_button);\n      buttons[i].addEventListener(\"mouseup\", CellInteractor.release_button);\n    }\n\n    _minesweeper_mines_num_js__WEBPACK_IMPORTED_MODULE_5__[\"MinesAndNums\"].minePlacer(this.id);\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].playBtnSound();\n    CellInteractor.reveal_button(this);\n  },\n  touch_button: function touch_button() {\n    // starts the code as if the user intends\n    // to hold down the button.\n    // if user mouseup in time aka not hold,\n    // release_button() will cancel the CellInteractor.flagging_period\n    // if has flag, mark it to be removed onmouseup\n    // else flag it\n    var button = this;\n\n    if (button.classList.contains('revealed_btn')) {\n      return;\n    }\n\n    if (button.classList.contains('flag')) {\n      button.classList.add('flag_to_be_del');\n    } else {\n      CellInteractor.flagging_period = setTimeout(function () {\n        CellInteractor.flag_button(button);\n      }, 300);\n    }\n  },\n  flag_button: function flag_button(button) {\n    // flag a cell by holding down on a button\n    button.classList.toggle(\"flag\");\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].playBtnSound();\n  },\n  release_button: function release_button() {\n    // cancel CellInteractor.flagging_period and reveal cell\n    // if there's no flag in it\n    // stop flagging_period\n    clearTimeout(CellInteractor.flagging_period);\n    var button = this;\n\n    if (button.classList.contains('flag_to_be_del')) {\n      // if it has a flag that was generated before\n      button.classList.remove('flag_to_be_del');\n      button.classList.remove('flag');\n      _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].playBtnSound();\n    } else if (!button.classList.contains(\"flag\")) {\n      // if 'this' aka the button\n      // doesn't have a flag in it\n      CellInteractor.reveal_button(button);\n    }\n  },\n  reveal_button: function reveal_button(button) {\n    // reveal the cell underneath a button\n    if (button.classList.contains(\"mine\")) {\n      // if this is a mine\n      CellInteractor.clicked_mine(button);\n    } else if (button.classList.contains(\"revealed_btn\")) {\n      CellInteractor.check_flags_around_button(button);\n    } else {\n      var continue_code = CellInteractor.clicked_number(button);\n\n      if (continue_code) {\n        CellInteractor.reveal_nearby_buttons(button);\n      }\n    }\n\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].playBtnSound();\n    _minesweeper_end_game_js__WEBPACK_IMPORTED_MODULE_0__[\"EndGameMechanics\"].check_if_won();\n  },\n  check_flags_around_button: function check_flags_around_button(button) {\n    // get x_coor and y_coor \n    var regexp = /[0-9]+/g;\n    var str = button.id.toString();\n    var matches = str.match(regexp);\n    var x_coor = parseInt(matches[0]);\n    var y_coor = parseInt(matches[1]);\n    var cells_in_a_row = _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_3__[\"BoardCreator\"].get_cells_in_a_row();\n    var cells_in_a_collumn = _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_3__[\"BoardCreator\"].get_cells_in_a_collumn(); // get one less and one more of x_coor value\n    // this covers the cells to the right and left of the\n    // mine cell\n\n    var x_coor_values = [x_coor - 1, x_coor, x_coor + 1]; // same as above but for y\n\n    var y_coor_values = [y_coor - 1, y_coor, y_coor + 1];\n    var flag_counter = 0; // loops through all possible x and y_coor_values\n\n    for (var i = 0; i < x_coor_values.length; i++) {\n      var x_values = x_coor_values[i]; // check to make sure the x_values is in boundary\n\n      if (x_values < 0 || x_values == cells_in_a_row) {\n        continue;\n      }\n\n      for (var j = 0; j < y_coor_values.length; j++) {\n        var y_values = y_coor_values[j]; // check to make sure the y_values is in boundary\n\n        if (y_values < 0 || y_values == cells_in_a_collumn) {\n          continue;\n        } // get a surrounding cell's button\n\n\n        var id = 'button' + String(x_values) + \"_\" + String(y_values);\n        var surrounding_button = document.getElementById(id);\n\n        if (surrounding_button.classList.contains('flag')) {\n          // if it has a flag, skips\n          flag_counter++;\n        }\n      }\n    } // find the btn_num\n\n\n    var btn_num = button.classList.item(0); // get the number part\n\n    var number = parseInt(btn_num.slice(7));\n\n    if (flag_counter === number) {\n      CellInteractor.reveal_nearby_buttons(button);\n    }\n  },\n  reveal_nearby_buttons: function reveal_nearby_buttons(button) {\n    // reveal the buttons around the button in the parameter\n    // get x_coor and y_coor \n    var regexp = /[0-9]+/g;\n    var str = button.id.toString();\n    var matches = str.match(regexp);\n    var x_coor = parseInt(matches[0]);\n    var y_coor = parseInt(matches[1]);\n    var cells_in_a_row = _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_3__[\"BoardCreator\"].get_cells_in_a_row();\n    var cells_in_a_collumn = _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_3__[\"BoardCreator\"].get_cells_in_a_collumn(); // get one less and one more of x_coor value\n    // this covers the cells to the right and left of the\n    // mine cell\n\n    var x_coor_values = [x_coor - 1, x_coor, x_coor + 1]; // same as above but for y\n\n    var y_coor_values = [y_coor - 1, y_coor, y_coor + 1]; // loops through all possible x and y_coor_values\n\n    for (var i = 0; i < x_coor_values.length; i++) {\n      var x_values = x_coor_values[i]; // check to make sure the x_values is in boundary\n\n      if (x_values < 0 || x_values == cells_in_a_row) {\n        continue;\n      }\n\n      for (var j = 0; j < y_coor_values.length; j++) {\n        var y_values = y_coor_values[j]; // check to make sure the y_values is in boundary\n\n        if (y_values < 0 || y_values == cells_in_a_collumn) {\n          continue;\n        } // get a surrounding cell's button\n\n\n        var id = 'button' + String(x_values) + \"_\" + String(y_values);\n        var surrounding_button = document.getElementById(id);\n\n        if (surrounding_button.classList.contains('flag')) {\n          // if it has a flag, skips\n          continue;\n        }\n\n        if (surrounding_button.classList.contains('mine')) {\n          CellInteractor.clicked_mine(surrounding_button);\n          return;\n        }\n\n        var continue_code = CellInteractor.clicked_number(surrounding_button);\n\n        if (continue_code) {\n          CellInteractor.reveal_nearby_buttons(surrounding_button);\n        }\n      }\n    }\n  },\n  clicked_mine: function clicked_mine(button) {\n    // what happens when user clicks a mine\n    // displays all mines in global_mine_list\n    var mine_list = document.getElementsByClassName(\"mine\");\n\n    for (var i = 0; i < mine_list.length; i++) {\n      _minesweeper_end_game_js__WEBPACK_IMPORTED_MODULE_0__[\"EndGameMechanics\"].reveal_all_mines(mine_list[i]);\n    }\n\n    button.className = \"this_mine\"; // play mine sound, stop music and stop timer\n\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].playMineSound();\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].pause_music();\n    _minesweeper_timer_js__WEBPACK_IMPORTED_MODULE_4__[\"Timer\"].stop_timer();\n    _minesweeper_end_game_js__WEBPACK_IMPORTED_MODULE_0__[\"EndGameMechanics\"].disable_board(); // pop up lost.html\n\n    _minesweeper_end_game_js__WEBPACK_IMPORTED_MODULE_0__[\"EndGameMechanics\"].display_page(\"lost\");\n  },\n  clicked_number: function clicked_number(button) {\n    // what happens when user clicks a number\n    // skip if it's already numbered\n    if (button.classList.contains('revealed_btn')) {\n      return false;\n    } // find the btn_num\n\n\n    var btn_num = button.classList.item(1); // get the number part\n\n    var number = parseInt(btn_num.slice(7)); // change colour depends on values\n\n    _minesweeper_mines_num_js__WEBPACK_IMPORTED_MODULE_5__[\"MinesAndNums\"].colour_number(button, number); // replace the button with number\n\n    button.classList.add('revealed_btn');\n    button.classList.remove('gift_btn');\n\n    if (number === 0) {\n      button.textContent = \" \";\n      button.disabled = true;\n    } else {\n      button.textContent = number;\n    } // send a code to tell reveal_btn whether to\n    // continue revealing cells\n\n\n    return number === 0;\n  }\n};\n\n//# sourceURL=webpack:///./src/js/minesweeper_cell_interact.js?");

/***/ }),

/***/ "./src/js/minesweeper_end_game.js":
/*!****************************************!*\
  !*** ./src/js/minesweeper_end_game.js ***!
  \****************************************/
/*! exports provided: EndGameMechanics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EndGameMechanics\", function() { return EndGameMechanics; });\n/* harmony import */ var _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_board_creator.js */ \"./src/js/minesweeper_board_creator.js\");\n/* harmony import */ var _minesweeper_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minesweeper_timer.js */ \"./src/js/minesweeper_timer.js\");\n/* harmony import */ var _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minesweeper_metadata.js */ \"./src/js/minesweeper_metadata.js\");\n/* harmony import */ var _minesweeper_mines_num_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minesweeper_mines_num.js */ \"./src/js/minesweeper_mines_num.js\");\n\n\n\n\nvar EndGameMechanics = {\n  // contains functions relates to winning, and loosing\n  check_if_won: function check_if_won() {\n    // check if the user has won yet\n    // if user revealed all non-mines btn, the only\n    // btns with class gift_btn left are mines\n    var buttons = document.getElementsByClassName(\"gift_btn\");\n    var mode = _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_2__[\"MetaData\"].get_game_mode();\n    var mine_amount = _minesweeper_mines_num_js__WEBPACK_IMPORTED_MODULE_3__[\"MinesAndNums\"].get_mine_numbers(mode);\n\n    if (buttons.length === mine_amount) {\n      _minesweeper_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"Timer\"].stop_timer();\n      _minesweeper_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"Timer\"].save_end_time();\n      EndGameMechanics.disable_board();\n      EndGameMechanics.display_page(\"won\");\n    }\n  },\n  disable_board: function disable_board() {\n    // disable all buttons on the board\n    var board = _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_0__[\"BoardCreator\"].get_board();\n    var all_btns = board.getElementsByTagName(\"BUTTON\");\n\n    for (var i = 0; i < all_btns.length; i++) {\n      var button = document.getElementById(all_btns[i].id);\n      button.disabled = true;\n      button.style.cursor = \"auto\";\n    }\n  },\n  reveal_all_mines: function reveal_all_mines(element) {\n    // display mine\n    var mine_button = document.getElementById(element.id); // check if it has a flag in it\n\n    if (mine_button.classList.contains('flag')) {\n      return;\n    }\n\n    mine_button.className = \"mine\";\n  },\n  display_page: function display_page(page_name) {\n    // display the lost.html\n    var pop_up_url = page_name + '.html';\n    var pop_up_name = page_name;\n    window.open(pop_up_url, pop_up_name);\n  }\n};\n\n//# sourceURL=webpack:///./src/js/minesweeper_end_game.js?");

/***/ }),

/***/ "./src/js/minesweeper_metadata.js":
/*!****************************************!*\
  !*** ./src/js/minesweeper_metadata.js ***!
  \****************************************/
/*! exports provided: MetaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MetaData\", function() { return MetaData; });\nvar MetaData = {\n  // everything relates to meta data\n  game_mode: null,\n  music_status: null,\n  sfx_status: null,\n  is_in_game: null,\n  first_timer: null,\n  song_name: null,\n  load_meta_data: function load_meta_data() {\n    // load the meta_data\n    if (MetaData.is_first_timer()) {\n      MetaData.load_default_meta_data();\n    } else {\n      MetaData.load_saved_meta_data();\n    }\n  },\n  is_first_timer: function is_first_timer() {\n    // check whether the user play the game the first time\n    // if this is first time, there should be no saved data\n    var first_timer = sessionStorage.getItem(\"first_timer\");\n\n    if (first_timer === null) {\n      return true;\n    } else {\n      return false;\n    }\n  },\n  load_default_meta_data: function load_default_meta_data() {\n    // load the default meta_data values\n    MetaData.game_mode = 'intro'; // default mode is intro\n\n    MetaData.music_status = true; // default music is turned on\n\n    MetaData.sfx_status = true; // default sfx is turned on\n\n    MetaData.is_in_game = false; // default not in game\n\n    MetaData.first_timer = true; //default user is a first timer\n  },\n  load_saved_meta_data: function load_saved_meta_data() {\n    // load the saved meta_data values\n    MetaData.game_mode = sessionStorage.getItem(\"game_mode\");\n    MetaData.music_status = sessionStorage.getItem(\"music_status\");\n    MetaData.sfx_status = sessionStorage.getItem(\"sfx_status\");\n    MetaData.is_in_game = false; // default, not in game\n\n    MetaData.first_timer = MetaData.is_first_timer();\n    MetaData.song_name = sessionStorage.getItem(\"song_name\");\n  },\n  get_game_mode: function get_game_mode() {\n    // get the game_mode\n    return MetaData.game_mode;\n  },\n  set_game_mode: function set_game_mode(new_mode) {\n    // set the game_mode\n    MetaData.game_mode = new_mode;\n  },\n  get_music_status: function get_music_status() {\n    // get the music_status\n    var status = MetaData.music_status;\n\n    if (status === \"true\") {\n      status = true;\n    } else if (status === \"false\") {\n      status = false;\n    }\n\n    return status;\n  },\n  set_music_status: function set_music_status(music_mode) {\n    // set the music_status\n    MetaData.music_status = music_mode;\n  },\n  get_sfx_status: function get_sfx_status() {\n    // get the sfx_status\n    var status = MetaData.sfx_status;\n\n    if (status === \"true\") {\n      status = true;\n    } else if (status === \"false\") {\n      status = false;\n    }\n\n    return status;\n  },\n  set_sfx_status: function set_sfx_status(sfx_mode) {\n    // set the sfx_status\n    MetaData.sfx_status = sfx_mode;\n  },\n  get_is_in_game: function get_is_in_game() {\n    // get the in game status\n    var status = MetaData.is_in_game;\n\n    if (status === \"true\") {\n      status = true;\n    } else if (status === \"false\") {\n      status = false;\n    }\n\n    return status;\n  },\n  set_is_in_game: function set_is_in_game(new_in_game) {\n    // set the in game status\n    MetaData.is_in_game = new_in_game;\n  },\n  get_song_name: function get_song_name() {\n    // get the song name\n    return MetaData.song_name;\n  },\n  set_song_name: function set_song_name(new_song_name) {\n    // set the song name\n    MetaData.song_name = new_song_name;\n  },\n  save_meta_data: function save_meta_data() {\n    // save all the meta data into sessionStorage\n    sessionStorage.setItem(\"game_mode\", MetaData.game_mode);\n    sessionStorage.setItem(\"music_status\", MetaData.music_status);\n    sessionStorage.setItem(\"sfx_status\", MetaData.sfx_status);\n    sessionStorage.setItem(\"song_name\", MetaData.song_name);\n    sessionStorage.setItem(\"first_timer\", false);\n  }\n};\n\n//# sourceURL=webpack:///./src/js/minesweeper_metadata.js?");

/***/ }),

/***/ "./src/js/minesweeper_mines_num.js":
/*!*****************************************!*\
  !*** ./src/js/minesweeper_mines_num.js ***!
  \*****************************************/
/*! exports provided: MinesAndNums */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MinesAndNums\", function() { return MinesAndNums; });\n/* harmony import */ var _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_board_creator.js */ \"./src/js/minesweeper_board_creator.js\");\n/* harmony import */ var _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minesweeper_metadata.js */ \"./src/js/minesweeper_metadata.js\");\n\n\nvar MinesAndNums = {\n  // everything relates to mines and numbers surrounding them\n  minePlacer: function minePlacer(selected_btn_id) {\n    // place mines on the map\n    // cells_in_a_row is how many cells are in a row\n    // cells_in_a_collumn is how many cells are in a col\n    var cells_in_a_row = _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_0__[\"BoardCreator\"].get_cells_in_a_row();\n    var cells_in_a_collumn = _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_0__[\"BoardCreator\"].get_cells_in_a_collumn();\n    var mode = _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_1__[\"MetaData\"].get_game_mode();\n    var total_mine = MinesAndNums.get_mine_numbers(mode);\n    var placed_mine = 0;\n\n    while (placed_mine < total_mine) {\n      // uses the Random module to select a random row     \n      var cell_x_coor = Math.floor(Math.random() * cells_in_a_row); // uses the Random module to select a random column     \n\n      var cell_y_coor = Math.floor(Math.random() * cells_in_a_collumn); // get a button with the chosen coordinates\n\n      var mine_button = document.getElementById('button' + String(cell_x_coor) + \"_\" + String(cell_y_coor)); //checks if the element already has a mine placed in it \n\n      if (mine_button.classList.contains('mine')) {\n        continue; //if so, skips\n      } // if the created button is the same as the button\n      // that was clicked by the user\n      else if (mine_button.id === selected_btn_id) {\n          continue;\n        } else {\n          // Otherwise, it add a className to mine_button\n          mine_button.classList.toggle('mine');\n          mine_button.classList.toggle('btn_num0'); // places numbers around the mines\n\n          MinesAndNums.number_surroundings(cell_x_coor, cell_y_coor);\n          placed_mine++;\n        }\n    }\n  },\n  get_mine_numbers: function get_mine_numbers(mode) {\n    // get number of mines depend on mode\n    var mines;\n\n    switch (mode) {\n      case 'intro':\n        mines = 4;\n        break;\n\n      case 'easy':\n        mines = 15;\n        break;\n\n      case 'medium':\n        mines = 35;\n        break;\n\n      case 'hard':\n        mines = 55;\n        break;\n\n      default:\n        mines = 1;\n    }\n\n    return mines;\n  },\n  number_surroundings: function number_surroundings(cell_x_coor, cell_y_coor) {\n    // increase the number by one in cells surrounding a mine\n    var cells_in_a_collumn = _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_0__[\"BoardCreator\"].get_cells_in_a_collumn();\n    var cells_in_a_row = _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_0__[\"BoardCreator\"].get_cells_in_a_row(); // get one less and one more of x_coor value\n    // this covers the cells to the right and left of the\n    // mine cell\n\n    var cell_x_coor_values = [cell_x_coor - 1, cell_x_coor, cell_x_coor + 1]; // same as above\n\n    var cell_y_coor_values = [cell_y_coor - 1, cell_y_coor, cell_y_coor + 1]; // loops through all possible x and y_coor_values surrounding\n    // the mine\n\n    for (var i = 0; i < cell_x_coor_values.length; i++) {\n      var x_values = cell_x_coor_values[i]; // check to make sure the x_values is in boundary\n\n      if (x_values < 0 || x_values == cells_in_a_row) {\n        continue;\n      }\n\n      for (var j = 0; j < cell_y_coor_values.length; j++) {\n        var y_values = cell_y_coor_values[j]; // check to make sure the y_values is in boundary\n\n        if (y_values < 0 || y_values == cells_in_a_collumn) {\n          continue;\n        } // get a surrounding cell's button\n\n\n        var surrounding_button = document.getElementById('button' + String(x_values) + \"_\" + String(y_values)); // check if it has a mine\n\n        if (surrounding_button.classList.contains(\"mine\")) {\n          continue;\n        } // recall btn_num# is index 1\n        // get the btn_num#\n\n\n        var btn_num = surrounding_button.classList.item(1); // get the number in btn_num then + 1 to it\n        // cause there's one more mine nearby than before\n\n        var number = parseInt(btn_num.slice(7)) + 1;\n        var new_btn_num = 'btn_num' + String(number); // put that in the classList and remove the old one\n\n        surrounding_button.classList.remove(btn_num);\n        surrounding_button.classList.add(new_btn_num);\n      }\n    }\n  },\n  colour_number: function colour_number(element, number) {\n    // choose a colour depends on the value of the number\n    // create an array that contains numbers and their colours\n    var colour_num_list = [[1, \"#0033cc\"], [2, \"#006600\"], [3, \"#ff0000\"], [4, \"#EC4067\"], [5, \"#993333\"], [6, \"#ffcc66\"], [7, \"#000066\"], [8, \"##ff00ff\"]]; // check number\n\n    for (var j = 0; j < 8; j++) {\n      if (number === colour_num_list[j][0]) {\n        element.style.color = colour_num_list[j][1];\n        break;\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/js/minesweeper_mines_num.js?");

/***/ }),

/***/ "./src/js/minesweeper_resetter.js":
/*!****************************************!*\
  !*** ./src/js/minesweeper_resetter.js ***!
  \****************************************/
/*! exports provided: ResetFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResetFunctions\", function() { return ResetFunctions; });\n/* harmony import */ var _minesweeper_cell_interact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_cell_interact.js */ \"./src/js/minesweeper_cell_interact.js\");\n/* harmony import */ var _minesweeper_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minesweeper_timer.js */ \"./src/js/minesweeper_timer.js\");\n/* harmony import */ var _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minesweeper_sound.js */ \"./src/js/minesweeper_sound.js\");\n/* harmony import */ var _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minesweeper_board_creator.js */ \"./src/js/minesweeper_board_creator.js\");\n\n\n\n\nvar ResetFunctions = {\n  // contains all functions relating to resetting the game\n  reset_board: function reset_board() {\n    // reset the board\n    _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_3__[\"BoardCreator\"].clear_board();\n    _minesweeper_board_creator_js__WEBPACK_IMPORTED_MODULE_3__[\"BoardCreator\"].create_game_board();\n    _minesweeper_cell_interact_js__WEBPACK_IMPORTED_MODULE_0__[\"CellInteractor\"].add_start_game_function_to_buttons();\n    _minesweeper_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"Timer\"].stop_timer();\n    _minesweeper_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"Timer\"].reset_timer();\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_2__[\"Sound\"].play_music();\n  }\n};\n\n//# sourceURL=webpack:///./src/js/minesweeper_resetter.js?");

/***/ }),

/***/ "./src/js/minesweeper_setting.js":
/*!***************************************!*\
  !*** ./src/js/minesweeper_setting.js ***!
  \***************************************/
/*! exports provided: Setting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Setting\", function() { return Setting; });\n/* harmony import */ var _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_metadata.js */ \"./src/js/minesweeper_metadata.js\");\n/* harmony import */ var _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minesweeper_sound.js */ \"./src/js/minesweeper_sound.js\");\n\n\nvar Setting = {\n  // everything relates to setting\n  current_mode: 0,\n  load_setting_base_on_metadata: function load_setting_base_on_metadata() {\n    if (_minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].get_sfx_status() === true) {\n      Setting.select_button(\"soundOnBtn\");\n    } else {\n      Setting.select_button(\"soundOffBtn\");\n    }\n\n    if (_minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].get_music_status() === true) {\n      Setting.select_button(\"musicOnBtn\");\n    } else {\n      Setting.select_button(\"musicOffBtn\");\n    }\n\n    Setting.current_mode = _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].get_game_mode();\n\n    switch (Setting.current_mode) {\n      case \"intro\":\n        Setting.select_button(\"intro\");\n        break;\n\n      case \"easy\":\n        Setting.select_button(\"easy\");\n        break;\n\n      case \"medium\":\n        Setting.select_button(\"medium\");\n        break;\n\n      case \"hard\":\n        Setting.select_button(\"hard\");\n        break;\n    }\n\n    var song_name;\n\n    switch (_minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].get_song_name()) {\n      case \"there is no need to be upset.mp3\":\n        song_name = \"there is no need to be upset.mp3\";\n        break;\n\n      case \"DougHammer_CarolOfTheBells.mp3\":\n        song_name = \"DougHammer_CarolOfTheBells.mp3\";\n        break;\n\n      case \"MicheleMcLaughlin_SilentNight.mp3\":\n        song_name = \"MicheleMcLaughlin_SilentNight.mp3\";\n        break;\n\n      default:\n        song_name = \"BillyGorilly_JingleBells.mp3\";\n    }\n\n    document.getElementById(\"music_option\").value = song_name;\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].set_music_src('Audio/' + song_name);\n  },\n  toggleMusic: function toggleMusic(value) {\n    //toggle Music on or off\n    if (value === \"off\") {\n      _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].mute_music(true);\n      _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].set_music_status(false);\n      Setting.unselect_button(\"musicOnBtn\");\n      Setting.select_button(\"musicOffBtn\");\n    } else {\n      _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].mute_music(false);\n      _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].set_music_status(true);\n      Setting.unselect_button(\"musicOffBtn\");\n      Setting.select_button(\"musicOnBtn\");\n      _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].play_music();\n    }\n\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].playBtnSound();\n  },\n  toggleSfx: function toggleSfx(value) {\n    //toggle sfx on or off\t\n    if (value === \"off\") {\n      _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].mute_sfx(true);\n      _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].set_sfx_status(false);\n      Setting.unselect_button(\"soundOnBtn\");\n      Setting.select_button(\"soundOffBtn\");\n    } else {\n      _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].mute_sfx(false);\n      _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].set_sfx_status(true);\n      Setting.unselect_button(\"soundOffBtn\");\n      Setting.select_button(\"soundOnBtn\");\n    }\n  },\n  open_advance_setting: function open_advance_setting() {\n    // display the advance setting underneath the game board\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].playBtnSound();\n    var setting = document.getElementById('advance_setting');\n    setting.classList.add(\"w3-show\");\n    setting.classList.remove(\"w3-hide\");\n  },\n  select_mode: function select_mode(mode) {\n    // select the mode button\n    var all_modes = ['intro', 'easy', 'medium', 'hard']; // clear formatting of all buttons\n\n    all_modes.forEach(Setting.unselect_button); //select the button \n\n    Setting.select_button(mode);\n    _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].set_game_mode(mode); //play button sound\n\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].playBtnSound();\n  },\n  unselect_button: function unselect_button(value) {\n    //unselect a button\n    document.getElementById(value).classList.remove('selected_button');\n  },\n  select_button: function select_button(value) {\n    //unselect a button\n    document.getElementById(value).classList.add('selected_button');\n  },\n  change_music: function change_music() {\n    // change the background music\n    var song_name = this.value;\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].set_music_src('Audio/' + song_name);\n\n    if (_minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].get_music_status()) {\n      _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].play_music();\n    }\n\n    _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].set_song_name(song_name);\n  },\n  confirm_advance_setting: function confirm_advance_setting() {\n    // close setting and move back to the board\n    _minesweeper_sound_js__WEBPACK_IMPORTED_MODULE_1__[\"Sound\"].playBtnSound();\n    var setting = document.getElementById('advance_setting'); // hide setting\n\n    setting.classList.add(\"w3-hide\");\n    setting.classList.remove(\"w3-show\");\n    var change_in_mode = Setting.current_mode !== _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].get_game_mode();\n\n    if (_minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].get_is_in_game() && change_in_mode) {\n      BoardCreator.create_game_board();\n      Timer.stop_timer();\n      Timer.reset_timer();\n    }\n\n    _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].save_meta_data();\n    Setting.current_mode = _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].get_game_mode();\n  }\n};\n\n//# sourceURL=webpack:///./src/js/minesweeper_setting.js?");

/***/ }),

/***/ "./src/js/minesweeper_sound.js":
/*!*************************************!*\
  !*** ./src/js/minesweeper_sound.js ***!
  \*************************************/
/*! exports provided: Sound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sound\", function() { return Sound; });\n/* harmony import */ var _minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_metadata.js */ \"./src/js/minesweeper_metadata.js\");\n\nvar Sound = {\n  // everything relates to music and sfx\n  set_sounds_based_on_meta_data: function set_sounds_based_on_meta_data() {\n    if (_minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].get_sfx_status() === true) {\n      Sound.mute_sfx(false);\n    } else {\n      Sound.mute_sfx(true);\n    }\n\n    if (_minesweeper_metadata_js__WEBPACK_IMPORTED_MODULE_0__[\"MetaData\"].get_music_status() === true) {\n      Sound.mute_music(false);\n    } else {\n      Sound.mute_music(true);\n    }\n  },\n  playMineSound: function playMineSound() {\n    // play sounds when tap a mine\n    document.getElementById('mineSound').play();\n  },\n  playBtnSound: function playBtnSound() {\n    // play sounds when tap a button\n    document.getElementById('clickSound').play();\n  },\n  play_music: function play_music() {\n    // play music\n    document.getElementById('music').play();\n  },\n  pause_music: function pause_music() {\n    // pause music\n    document.getElementById('music').pause();\n  },\n  set_music_src: function set_music_src(new_src) {\n    // set new music src\n    document.getElementById('music').src = new_src;\n  },\n  mute_sfx: function mute_sfx(sfx_mode) {\n    // toggle sfx on or off\n    document.getElementById('clickSound').muted = sfx_mode;\n    document.getElementById('mineSound').muted = sfx_mode;\n  },\n  mute_music: function mute_music(music_mode) {\n    // toggle sfx on or off\n    document.getElementById('music').muted = music_mode;\n  }\n};\n\n//# sourceURL=webpack:///./src/js/minesweeper_sound.js?");

/***/ }),

/***/ "./src/js/minesweeper_timer.js":
/*!*************************************!*\
  !*** ./src/js/minesweeper_timer.js ***!
  \*************************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Timer\", function() { return Timer; });\nvar Timer = {\n  // everything relates to Times/time\n  timer_interval: null,\n  start_timer: function start_timer() {\n    // start the timer that tracks time from start_time\n    var start_time = new Date();\n    Timer.timer_interval = setInterval(function () {\n      Timer.update_timer(start_time);\n    }, 1000);\n  },\n  update_timer: function update_timer(start_time) {\n    // update the timer\n    var current_time = new Date();\n    var elapsed_time = current_time - start_time;\n    var second = Math.floor(elapsed_time / 1000) % 60;\n\n    if (second < 10) {\n      second = \"0\" + String(second);\n    }\n\n    var minute = Math.floor(elapsed_time / 60000);\n    document.getElementById('timer').innerHTML = String(minute) + \":\" + String(second);\n  },\n  save_end_time: function save_end_time() {\n    // stave time of user in sessionStorage\n    var time = document.getElementById('timer').innerHTML;\n    sessionStorage.setItem(\"Time\", time);\n  },\n  retrieve_end_time: function retrieve_end_time() {\n    // retrieve the end time of user in sessionStorage\n    var time = sessionStorage.getItem(\"Time\");\n    return time;\n  },\n  stop_timer: function stop_timer() {\n    // stop the timer\n    clearInterval(Timer.timer_interval);\n  },\n  reset_timer: function reset_timer() {\n    // reset the timer\n    document.getElementById('timer').innerHTML = \"0:00\";\n  }\n};\n\n//# sourceURL=webpack:///./src/js/minesweeper_timer.js?");

/***/ })

/******/ });