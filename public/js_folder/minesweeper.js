let SettingMetaData = {
	// everything relates to setting/metadata of the game
	game_mode: 'easy', // default mode is easy
	music_status: true, // default, music is turned on
	sfx_status: true, // default, sfx is turned on

	get_game_mode: function () {
		// get the game_mode
		return SettingMetaData.game_mode;
	},


	set_game_mode: function (new_mode) {
		// set the game_mode
		SettingMetaData.game_mode = new_mode;
	},


	get_music_status: function () {
		// get the game_mode
		return SettingMetaData.music_status;
	},


	set_music_status: function (music_toggled) {
		// set the game_mode
		SettingMetaData.game_mode = music_toggled;
	},


	get_sfx_status: function () {
		// get the game_mode
		return SettingMetaData.game_mode;
	},


	set_sfx_status: function (sfx_toggled) {
		// set the game_mode
		SettingMetaData.game_mode = sfx_toggled;
	},


	open_setting: function () {
		// display setting underneath the game board
		let setting = document.getElementById('setting_area')
		setting.classList.add("w3-show");
		setting.classList.remove("w3-hide");
	},


	select_mode: function (mode) {
		let all_modes = ['easy', 'medium', 'hard'];
		selected_btn = document.getElementById(mode);
	
		// clear formatting of other buttons
		current_mode_index = all_modes.indexOf(mode);
		delete all_modes[current_mode_index];
		all_modes.forEach(unselect_button);
	
		//select the button 
		selected_btn.className = 'selected_button w3-bar-item';
		SettingMetaData.game_mode = mode;
		localStorage.setItem('mode', mode)
		var saved_mode = localStorage.getItem('mode');
	
		//play button sound
		playBtnSound();
	},


	unselect_button: function (value = '') {
		//unselect a button
		document.getElementById(value).className = 'w3-bar-item w3-border';
	},
	
	
	toggleMusic: function () {
		//toggle Music on or off
		this.className = 'selected_button w3-bar-item w3-border';
	
		if (this.id == 'music_on') {
			SettingMetaData.unselect_button('music_off');
			ambience.play();
			SettingMetaData.music_staus = true;
	
		} else {
			SettingMetaData.unselect_button('music_on');
			ambience.pause();
			SettingMetaData.music_status = false;
		}
		playBtnSound();
	},
	
	
	changeAmbience: function () {
		// change the background music
		let ambience = document.getElementById('ambience')
		let song_name = this.value;
		ambience.src = 'Audio/' + song_name;
		if (SettingMetaData.music_status === true) {
			// if music_status var is true 
			ambience.play();
		}
	},


	toggleSfx: function () {
		//toggle sfx on or off
		this.className = 'selected_button w3-bar-item'
	
		if (this.id == 'sfx_on') {
			SettingMetaData.unselect_button('sfx_off')
			clickSound.muted = false
			sfx_status = true
	
		} else {
			SettingMetaData.unselect_button('sfx_on')
			clickSound.muted = true
			sfx_status = false
		}
		playBtnSound()
	},
	
	
	confirm_setting: function () {
		//move back to the board
		let setting = document.getElementById('setting_area')
	
		if (global_in_game === true) {
			// if in game aka first_touch() was called
			// regenerate board.
			BoardCreator.create_game_board(game_mode); //create an easy board by default
		}
		// hide setting
		setting.classList.add("w3-hide");
		setting.classList.remove("w3-show");
	
		// play click sound
		playBtnSound();
	}
}

function mineSound() {
	// play sounds when tap a mine
	document.getElementById('mineSound').play();
}


function playBtnSound() {
	// play sounds when tap a button
	document.getElementById('clickSound').play();
}





function display_page(page_name) {
	// display the lost.html
	pop_up_url = page_name + '.html'
	pop_up_name = page_name
	window.open(pop_up_url, pop_up_name)

}



// set events handlers

// click the restart button
document.getElementById('reset').onclick = function() {
	window.location.reload();
}


// open setting
document.getElementById('gear_pic').onclick = SettingMetaData.open_setting;


// difficulty mode btns
document.getElementById('easy').onclick = function () {
	SettingMetaData.select_mode('easy');
	sessionStorage.setItem('mode', 'easy')
}
document.getElementById('medium').onclick = function () {
	SettingMetaData.select_mode('medium');
	sessionStorage.setItem('mode', 'medium')
}
document.getElementById('hard').onclick = function () {
	SettingMetaData.select_mode('hard');
	sessionStorage.setItem('mode', 'hard')
}

// music buttons
document.getElementById('music_on').onclick = SettingMetaData.toggleMusic;
document.getElementById('music_off').onclick = SettingMetaData.toggleMusic;
document.getElementById('music_option').onclick = SettingMetaData.changeAmbience;

// sfx buttons
document.getElementById('sfx_on').onclick = SettingMetaData.toggleSfx;
document.getElementById('sfx_off').onclick = SettingMetaData.toggleSfx;

// close setting
document.getElementById('confirm').onclick = SettingMetaData.confirm_setting;
