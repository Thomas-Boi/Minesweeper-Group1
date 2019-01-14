// import { Score } from "minesweeper_score.js";
// import {BtnInteractor} from "minesweeper_btn_interact";
// import {MinesAndNums} from "minesweeper_mines_num.js";
// import {BoardCreator} from "minesweeper_board_creator.js";
// import {EndGameMechanics} from "minesweeper_end_game.js";
// import {Sound} from "minesweeper_sound.js";
// import {Setting} from "minesweeper_setting.js";
// import {MetaData} from "minesweeper_metadata.js";


// set events handlers

// click on board first time
document.getElementById('board').onclick = BtnInteractor.first_touch;

// click the restart button
document.getElementById('reset').onclick = function() {
	window.location.reload();
}

// open and close basic setting
document.getElementById('basic_setting_bar').onmouseover = Setting.open_basic_setting;
document.getElementById('basic_setting_bar').onmouseout = Setting.close_basic_setting;

// music buttons
document.getElementById('music_icon').onclick = Setting.toggleMusic;

// sfx buttons
document.getElementById('sfx_icon').onclick = Setting.toggleSfx;

// open advance setting
// document.getElementById('advance_cog_pic').onclick = Setting.open_setting;


// difficulty mode btns
document.getElementById('easy').onclick = function () {
	Setting.select_mode('easy');
	sessionStorage.setItem('mode', 'easy')
}
document.getElementById('medium').onclick = function () {
	Setting.select_mode('medium');
	sessionStorage.setItem('mode', 'medium')
}
document.getElementById('hard').onclick = function () {
	Setting.select_mode('hard');
	sessionStorage.setItem('mode', 'hard')
}

// music buttons
document.getElementById('music_option').onclick = Setting.changemusic;

// close setting
document.getElementById('confirm').onclick = Setting.confirm_setting;
