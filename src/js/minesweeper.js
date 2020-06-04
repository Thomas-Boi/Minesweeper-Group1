import {CellInteractor} from "./minesweeper_cell_interact.js";
import {Sound} from "./minesweeper_sound.js";
import {Setting} from "./minesweeper_setting.js";
import {MetaData} from "./minesweeper_metadata.js";
import {ResetFunctions} from "./minesweeper_resetter.js";
import "../css/minesweeper_css/minesweeper.css";
import "../Audio/Button-SoundBible.com-1420500901.mp3";
import "../Audio/Bomb-SoundBible.mp3";
import "../Audio/BillyGorilly_JingleBells.mp3";
import "../Audio/DougHammer_CarolOfTheBells.mp3";
import "../Audio/MicheleMcLaughlin_SilentNight.mp3";
import "../Images/gear_setting.png";
import "../Images/reset.png";
import "../Images/snow.png";
import "../Images/christmas_background.jpg";
import "../Images/flag.png";
import "../Images/gift.png";
import "../Images/mine.png";
import "../Images/snowman.jpg";
import "../Fonts/arcadeclassic/ARCADECLASSIC.ttf";
import "../Fonts/frosty/FROSTY_.ttf";

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
let modes = [
	"intro",
	"easy",
	"medium",
	"hard"
];

for (let mode of modes) {
	document.getElementById(mode)
		.onclick = () => Setting.select_mode(mode);
}

// music buttons
document.getElementById('music_option').onclick = Setting.change_music;

// close setting
document.getElementById('confirm').onclick = Setting.confirm_advance_setting;

Setting.load_setting_base_on_metadata();
Sound.set_sounds_based_on_meta_data();


// other resources