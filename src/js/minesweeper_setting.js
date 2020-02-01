import {MetaData} from "./minesweeper_metadata.js";
import {Sound} from "./minesweeper_sound.js";

export let Setting = {
	// everything relates to setting
	current_mode: 0,
	load_setting_base_on_metadata: function () {
		if (MetaData.get_sfx_status() === true) {
			Setting.select_button("soundOnBtn");
		} else {
			Setting.select_button("soundOffBtn");
		}

		if (MetaData.get_music_status() === true) {
			Setting.select_button("musicOnBtn");
		} else {
			Setting.select_button("musicOffBtn");
		}

		Setting.current_mode = MetaData.get_game_mode();
		switch(Setting.current_mode) {
			case ("intro"):
				Setting.select_button("intro");
				break;
			case ("easy"):
				Setting.select_button("easy");
				break;
			case ("medium"):
				Setting.select_button("medium");
				break;
			case ("hard"):
				Setting.select_button("hard");
				break;
		}

		let song_name;
		switch(MetaData.get_song_name()) {
			case("there is no need to be upset.mp3"):
				song_name = "there is no need to be upset.mp3";
				break;
			case("DougHammer_CarolOfTheBells.mp3"):
				song_name = "DougHammer_CarolOfTheBells.mp3";
				break;
			case("MicheleMcLaughlin_SilentNight.mp3"):
				song_name = "MicheleMcLaughlin_SilentNight.mp3";				
				break;
			default:
				song_name = "BillyGorilly_JingleBells.mp3";
		}

		document.getElementById("music_option").value = song_name;
		Sound.set_music_src('Audio/' + song_name);
	},

	toggleMusic: function (value) {
		//toggle Music on or off
		if (value === "off") {
			Sound.mute_music(true);
			MetaData.set_music_status(false);
			Setting.unselect_button("musicOnBtn");
			Setting.select_button("musicOffBtn");

		} else {
			Sound.mute_music(false);
			MetaData.set_music_status(true);
			Setting.unselect_button("musicOffBtn");
			Setting.select_button("musicOnBtn");
			Sound.play_music();
		}

		Sound.playBtnSound();
	},

	toggleSfx: function (value) {
		//toggle sfx on or off	
		if (value === "off") {
			Sound.mute_sfx(true);
			MetaData.set_sfx_status(false);
			Setting.unselect_button("soundOnBtn");
			Setting.select_button("soundOffBtn");
		} else {
			Sound.mute_sfx(false);
			MetaData.set_sfx_status(true);
			Setting.unselect_button("soundOffBtn");
			Setting.select_button("soundOnBtn");
		}
	},
	
	open_advance_setting: function () {
		// display the advance setting underneath the game board
		Sound.playBtnSound();
		let setting = document.getElementById('advance_setting');
		setting.classList.add("w3-show");
		setting.classList.remove("w3-hide");
	},


	select_mode: function (mode) {
		// select the mode button
		let all_modes = ['intro', 'easy', 'medium', 'hard'];
	
		// clear formatting of all buttons
		all_modes.forEach(Setting.unselect_button);
	
		//select the button 
		Setting.select_button(mode);
		MetaData.set_game_mode(mode);
	
		//play button sound
		Sound.playBtnSound();
	},

	unselect_button: function (value) {
		//unselect a button
		document.getElementById(value).classList.remove('selected_button');
	},

	select_button: function (value) {
		//unselect a button
		document.getElementById(value).classList.add('selected_button');
	},
	
	change_music: function () {
		// change the background music
		let song_name = this.value;
		Sound.set_music_src('Audio/' + song_name);
		if (MetaData.get_music_status()) {
			Sound.play_music();
		}
		MetaData.set_song_name(song_name);
	},

	confirm_advance_setting: function () {
		// close setting and move back to the board
		Sound.playBtnSound();
		let setting = document.getElementById('advance_setting');
	
		// hide setting
		setting.classList.add("w3-hide");
		setting.classList.remove("w3-show");
	
		let change_in_mode = (Setting.current_mode !== MetaData.get_game_mode());

		if (MetaData.get_is_in_game() && change_in_mode) {
			BoardCreator.create_game_board();
			Timer.stop_timer();
			Timer.reset_timer();
		}

		MetaData.save_meta_data();
		Setting.current_mode = MetaData.get_game_mode();
	}
};