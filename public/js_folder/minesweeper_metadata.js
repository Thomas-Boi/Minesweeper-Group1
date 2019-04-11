let MetaData = {
	// everything relates to meta data
	game_mode: null, 
	music_status: null, 
	sfx_status: null,
	is_in_game: null,
	first_timer: null, 

	load_meta_data: function () {
		// load the meta_data

		if (MetaData.is_first_timer()) {
			MetaData.load_default_meta_data();
		} else {
			MetaData.load_saved_meta_data();
		}
	},

	is_first_timer: function () {
		// check whether the user play the game the first time

		// if this is first time, there should be no saved data
		let first_timer = sessionStorage.getItem("first_timer");
		if (first_timer === null) {
			return true;
		} else {
			return false;
		}
	},

	load_default_meta_data: function () {
		// load the default meta_data values

		MetaData.game_mode = 'intro'; // default mode is intro
		MetaData.music_status = true; // default music is turned on
		MetaData.sfx_status = true; // default sfx is turned on
		MetaData.is_in_game = false; // default not in game
		MetaData.first_timer = true; //default user is a first timer
	},

	load_saved_meta_data: function () {
		// load the saved meta_data values

		MetaData.game_mode = sessionStorage.getItem("game_mode");
		MetaData.music_status = sessionStorage.getItem("music_status");
		MetaData.sfx_status = sessionStorage.getItem("sfx_status");

		MetaData.is_in_game = false; // default, not in game
		MetaData.first_timer = MetaData.is_first_timer();
	},

	get_game_mode: function () {
		// get the game_mode
		return MetaData.game_mode;
	},

	set_game_mode: function (new_mode) {
		// set the game_mode
		MetaData.game_mode = new_mode;
	},

	get_music_status: function () {
		// get the music_status
		return MetaData.music_status;
	},

	set_music_status: function (music_mode) {
		// set the music_status
		MetaData.music_status = music_mode;
	},

	get_sfx_status: function () {
		// get the sfx_status
		return MetaData.sfx_status;
	},

	set_sfx_status: function (sfx_mode) {
		// set the sfx_status
		MetaData.sfx_status = sfx_mode;
	},

	get_is_in_game: function () {
		// get the sfx_status
		return MetaData.is_in_game;
	},

	set_is_in_game: function (new_in_game) {
		// set the sfx_status
		MetaData.is_in_game = new_in_game;
	},

	save_meta_data: function () {
		// save all the meta data
		sessionStorage.setItem("game_mode", MetaData.game_mode);
		sessionStorage.setItem("music_status", MetaData.music_status);
		sessionStorage.setItem("sfx_status", MetaData.sfx_status);
		sessionStorage.setItem("first_timer", false);
	}
}
