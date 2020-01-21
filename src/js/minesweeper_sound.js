export let Sound = {
	// everything relates to music and sfx
	set_sounds_based_on_meta_data: function() {
		if (MetaData.get_sfx_status() === true) {
			Sound.mute_sfx(false);
		} else {
			Sound.mute_sfx(true);
		}

		if (MetaData.get_music_status() === true) {
			Sound.mute_music(false);
		} else {
			Sound.mute_music(true);
		}
	},

	playMineSound: function () {
		// play sounds when tap a mine
		document.getElementById('mineSound').play();
	},
	
	playBtnSound: function() {
		// play sounds when tap a button
		document.getElementById('clickSound').play();
	},


	play_music: function() {
		// play music
		document.getElementById('music').play();
	},

	pause_music: function() {
		// pause music
		document.getElementById('music').pause();
	},

	set_music_src: function(new_src) {
		// set new music src
		document.getElementById('music').src = new_src;
	},

	mute_sfx: function(sfx_mode) {
		// toggle sfx on or off
		document.getElementById('clickSound').muted = sfx_mode;
		document.getElementById('mineSound').muted = sfx_mode;
	},

	mute_music: function(music_mode) {
		// toggle sfx on or off
		document.getElementById('music').muted = music_mode;
	}
};
