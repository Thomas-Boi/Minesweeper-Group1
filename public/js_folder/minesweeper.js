// import { Score } from "minesweeper_score.js";
// import {CellInteractor} from "minesweeper_btn_interact";
// import {MinesAndNums} from "minesweeper_mines_num.js";
// import {BoardCreator} from "minesweeper_board_creator.js";
// import {EndGameMechanics} from "minesweeper_end_game.js";
// import {Sound} from "minesweeper_sound.js";
// import {Setting} from "minesweeper_setting.js";
// import {MetaData} from "minesweeper_metadata.js";


// set events handlers
document.getElementById('board').onclick = CellInteractor.first_touch;

document.getElementById('reset').onclick = ResetFunctions.reset_board;

// // music buttons
// document.getElementById('music_icon').onclick = Setting.toggleMusic;

// // sfx buttons
// document.getElementById('sfx_icon').onclick = Setting.toggleSfx;

// open advance setting
document.getElementById('setting_pic').onclick = Setting.open_advance_setting;

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
document.getElementById('music_option').onclick = Setting.change_music;

// close setting
document.getElementById('confirm').onclick = Setting.confirm_advance_setting;
