// contains script for won.html

function display_score() {
    // get score from sessionStorage and display it

    let score = sessionStorage.getItem("score");
    document.getElementById("user_score").innerHTML = score;
}

let Sound = {
	// everything relates to music and sfx
	start_music: function () {
        // play music
        console.log('whut')
		document.getElementById('music').play();
	},


	pause_music: function () {
		// pause music
		document.getElementById('music').pause();
	},


	set_music_src: function (new_src) {
		// set new music src
		document.getElementById('music').src = new_src;
	}
}

display_score()
document.getElementById('replay').onclick = function () {
	window.close();
}
// uncaught in promise domexception
// means audio can't play when just loaded
// setTimeout(function() {
// 		document.getElementById('music').play();
// }, 1000);
