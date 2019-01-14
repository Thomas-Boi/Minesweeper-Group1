let Setting = {
	// everything relates to setting

	// set counter for spin_basic_gear to use;
	gear_counter: 0,
	cw_spinner: null,
	ccw_spinner: null,
	basic_setting_width: 20,
	revealing_basic_setting: null,
	concealing_basic_setting: null,
	music_icon: document.getElementById('music_icon'),
	sfx_icon: document.getElementById('sfx_icon'),
	advance_cog: document.getElementById('advance_cog_pic'),

	open_basic_setting: function () {
		// open the basic setting 
		let basic_setting = document.getElementById('basic_setting');
		basic_setting.classList.remove('w3-hide');

		clearInterval(Setting.ccw_spinner);
		Setting.cw_spinner = setInterval(Setting.spin_basic_gear_cw, 15);

		clearInterval(Setting.concealing_basic_setting);		
		Setting.revealing_basic_setting = 
		setInterval(Setting.reveal_basic_setting, 20);

	},

	spin_basic_gear_cw: function () {
		// spin the basic_gear_pic when opens the basic_setting

		let counter = Setting.gear_counter;
		if (counter === 31) {
			// quit spinning if counter is 30
			clearInterval(Setting.cw_spinner);
			return;
		};
		let gear = document.getElementById('basic_gear_pic');
		let degree = counter * 3;

		gear.style.transform = "rotate(" + degree + "deg)";
		Setting.gear_counter += 1;
	},

	reveal_basic_setting: function () {
		// reveal the basic setting
		if (Setting.basic_setting_width === 30 ) {
			Setting.music_icon.classList.remove('w3-hide');
		}

		if (Setting.basic_setting_width === 70) {
			Setting.sfx_icon.classList.remove('w3-hide');
		}

		if (Setting.basic_setting_width === 100) {
			Setting.advance_cog.classList.remove('w3-hide');
		}

		if (Setting.basic_setting_width === 120) {
			// stops revealing
			clearInterval(Setting.revealing_basic_setting);
			return;
		}
		let basic_setting = document.getElementById('basic_setting');
		basic_setting.style.width = Setting.basic_setting_width + "px";

		Setting.basic_setting_width += 5;
	},

	close_basic_setting: function () {
		// close the basic setting
		clearInterval(Setting.cw_spinner);
		Setting.ccw_spinner = setInterval(Setting.spin_basic_gear_ccw, 15);

		clearInterval(Setting.revealing_basic_setting);
		Setting.concealing_basic_setting = 
		setInterval(Setting.conceal_basic_setting, 20);
	},

	conceal_basic_setting: function () {
		// made setting icons' display into none
		if (Setting.basic_setting_width === 30 ) {
			Setting.music_icon.classList.add('w3-hide');
		}

		if (Setting.basic_setting_width === 70) {
			Setting.sfx_icon.classList.add('w3-hide');
		}

		if (Setting.basic_setting_width === 100) {
			Setting.advance_cog.classList.add('w3-hide');
		}

		let basic_setting = document.getElementById('basic_setting');

		if (Setting.basic_setting_width < 0) {
			// stops revealing
			clearInterval(Setting.concealing_basic_setting);
			basic_setting.classList.add('w3-hide');
			return;
		}
		basic_setting.style.width = Setting.basic_setting_width + "px";

		Setting.basic_setting_width -= 5;

	},

	spin_basic_gear_ccw: function () {
		// spin the basic_gear_pic when opens the basic_setting

		let counter = Setting.gear_counter;
		if (counter < 0) {
			// quit spinning if counter is 30
			clearInterval(Setting.ccw_spinner);
			return;
		};
		let gear = document.getElementById('basic_gear_pic');
		let degree = counter * 3;

		gear.style.transform = "rotate(" + degree + "deg)";
		Setting.gear_counter -= 1;
	},

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
		let all_modes = ['easy', 'medium', 'hard'];
		selected_btn = document.getElementById(mode);
	
		// clear formatting of other buttons
		current_mode_index = all_modes.indexOf(mode);
		delete all_modes[current_mode_index];
		all_modes.forEach(Setting.unselect_button);
	
		//select the button 
		selected_btn.className = 'selected_button w3-bar-item';
		MetaData.set_game_mode(mode);
		localStorage.setItem('mode', mode)
		var saved_mode = localStorage.getItem('mode');
	
		//play button sound
		Sound.playBtnSound();
	},


	unselect_button: function (value = '') {
		//unselect a button
		document.getElementById(value).className = 'w3-bar-item w3-border';
	},
	
	changeMusic: function () {
		// change the background music
		let song_name = this.value;
		Sound.set_music_src('Audio/' + song_name);
		if (Setting.music_status === true) {
			// if music_status var is true 
			Sound.start_music();
		}
	},



	
	confirm_advance_setting: function () {
		// close setting and move back to the board
		Sound.playBtnSound();

		let setting = document.getElementById('advance_setting')
	
		if (global_in_game === true) {
			// if in game aka first_touch() was called
			// regenerate board.
			BoardCreator.create_game_board(game_mode); //create an easy board by default
		}
		// hide setting
		setting.classList.add("w3-hide");
		setting.classList.remove("w3-show");
	
	}
}
