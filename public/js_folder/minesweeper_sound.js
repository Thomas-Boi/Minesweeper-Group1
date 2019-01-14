let Sound = {
	// everything relates to music and sfx
	mineSound: function () {
		// play sounds when tap a mine
		document.getElementById('mineSound').play();
	},
	
	
	playBtnSound: function() {
		// play sounds when tap a button
		document.getElementById('clickSound').play();
	},


	start_music: function () {
		// play music
		document.getElementById('music').play();
	},

	set_music_src: function (new_src) {
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
		document.getElementById('music').paused = music_mode;
	}
}
