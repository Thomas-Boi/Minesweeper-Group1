let MetaData = {
	// everything relates to meta data
	game_mode: 'intro', // default mode is easy
	music_status: true, // default, music is turned on
	sfx_status: true, // default, sfx is turned on
	is_in_game: false, // default, not in game

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
}
