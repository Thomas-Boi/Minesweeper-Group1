let Setting = {
	// everything relates to setting

	music_icon: document.getElementById('music_icon'),
	sfx_icon: document.getElementById('sfx_icon'),
	advance_cog: document.getElementById('advance_cog_pic'),

	toggleMusic: function () {
		//toggle Music on or off
		if (MetaData.get_music_status()) {
			// if on, turn it off
			Sound.mute_music(true);
			MetaData.set_music_status(false);
			this.style.opacity = 0.3;
		} else {
			Sound.mute_music(false);
			MetaData.set_music_status(true);
			this.style.opacity = 1;
		}

		Sound.playBtnSound();
	},

	toggleSfx: function () {
		//toggle sfx on or off	
		if (MetaData.get_sfx_status()) {
			// if on, turn it off
			Sound.mute_sfx(true);
			MetaData.set_sfx_status(false);
			this.style.opacity = 0.3;
		} else {
			Sound.mute_sfx(false);
			MetaData.set_sfx_status(true);
			this.style.opacity = 1;
		}
	},
	
	open_advance_setting: function () {
		// display the advance setting underneath the game board
		Sound.playBtnSound();
		let setting = document.getElementById('advance_setting')
		setting.classList.add("w3-show");
		setting.classList.remove("w3-hide");
	},


	select_mode: function (mode) {
		// select the mode button
		let all_modes = ['intro', 'easy', 'medium', 'hard'];
	
		// clear formatting of all buttons
		all_modes.forEach(Setting.unselect_button);
	
		//select the button 
		selected_btn = document.getElementById(mode);
		selected_btn.className = 'selected_button w3-bar-item';
		MetaData.set_game_mode(mode);
	
		//play button sound
		Sound.playBtnSound();
	},


	unselect_button: function (value = '') {
		//unselect a button
		document.getElementById(value).className = 'w3-bar-item w3-border';
	},
	
	change_music: function () {
		// change the background music
		let song_name = this.value;
		Sound.set_music_src('Audio/' + song_name);
		if (MetaData.get_music_status()) {
			Sound.play_music();
		}
	},

	confirm_advance_setting: function () {
		// close setting and move back to the board
		let setting = document.getElementById('advance_setting')
	
		// hide setting
		setting.classList.add("w3-hide");
		setting.classList.remove("w3-show");
	
		MetaData.save_meta_data();
		Sound.playBtnSound();
	}
}
