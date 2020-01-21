import {CellInteractor} from "./minesweeper_cell_interact.js";
import {Sound} from "./minesweeper_sound.js";
import {Setting} from "./minesweeper_setting.js";
import {MetaData} from "./minesweeper_metadata.js";
import {ResetFunctions} from "./minesweeper_resetter.js";


// load metadata
MetaData.load_meta_data();

// set events handlers
document.getElementById('board').onclick = CellInteractor.first_touch;
document.getElementById('reset').onclick = ResetFunctions.reset_board;

// music buttons
document.getElementById('musicOnBtn').onclick = function() {
	Setting.toggleMusic("on");
},

document.getElementById('musicOffBtn').onclick = function() {
	Setting.toggleMusic("off");
};


// sfx buttons
document.getElementById('soundOnBtn').onclick = function() {
	Setting.toggleSfx("on");
};

document.getElementById('soundOffBtn').onclick = function() {
	Setting.toggleSfx("off");
};


// open advance setting
document.getElementById('setting_pic').onclick = Setting.open_advance_setting;

// difficulty mode btns
document.getElementById('intro').onclick = function () {
	Setting.select_mode('intro');
};

document.getElementById('easy').onclick = function () {
	Setting.select_mode('easy');
};

document.getElementById('medium').onclick = function () {
	Setting.select_mode('medium');
};

document.getElementById('hard').onclick = function () {
	Setting.select_mode('hard');
};

// music buttons
document.getElementById('music_option').onclick = Setting.change_music;

// close setting
document.getElementById('confirm').onclick = Setting.confirm_advance_setting;

Setting.load_setting_base_on_metadata();
Sound.set_sounds_based_on_meta_data();


// other resources
// import html from "../index.html";
// import "../Audio/BillyGorilly_JingleBells.mp3";
// import "../Audio/Bomb-SoundBible.mp3";
// import "../Audio/Button-SoundBible.com-1420500901.mp3";
// import "../Audio/DougHammer_CarolOfTheBells.mp3";
// import "../Audio/MicheleMcLaughlin_SilentNight.mp3";
// import "../Audio/MoscowSymphOrch_WishYouMerry.mp3";
// import "../Audio/there is no need to be upset.mp3";