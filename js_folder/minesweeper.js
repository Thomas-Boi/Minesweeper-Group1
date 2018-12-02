// variables for header
let restart = document.getElementById('reset');
let header = document.getElementById('header');
let timer = document.getElementById('clock');
let gear_pic = document.getElementById('gear_pic');

// variables for clocks
let minute = 0;
let tenth_place_second = 0; //represent seconds in tenth place
let second = 0; //represent second in ones place

// variables for board
let board = document.getElementById('board');

// variables for setting
let ambience = document.getElementById('ambience')
let clickSound = document.getElementById('clickSound')
let setting = document.getElementById('setting_area')

// variables for buttons
let easy = document.getElementById('easy');
// easy = 15 * 15
let medium = document.getElementById('medium');
// med = 15 * 25
let hard = document.getElementById('hard');
// hard = 25 * 35

// global var 
let global_mode = 'easy'; // default mode is easy
let global_in_game = false; // not in game when start out

function clock() {
	second++;
	if (second == 10) {
		// reset_second + add one to tenth_place_second
		tenth_place_second += 1
		second = 0
	}
	if (tenth_place_second == 6) {
		// reset tenth_place_second + add one to minute
		tenth_place_second = 0
		minute += 1
	}
	document.getElementById('clock').innerHTML = minute + ':' + tenth_place_second + '' + second;
}

function create_game_board(mode) {
	// create the game board based on mode
	let dimension = get_board_size(mode)
	let width = dimension[0]
	let height = dimension[1]
	let board_width_px = dimension[2]

	board.innerHTML = ''
	for (let i = 1; i <= height; i++) {
		for (let j = 1; j <= width; j++) {

			let button = document.createElement("Button");

			board.appendChild(button);

			let string = String(i) + String(j);
			button.id = 'cell' + string;

			//find the board size depends on the header's width
			let cell_size = String(board_width_px / width);

			button.style.width = cell_size + 'px';
			button.style.height = cell_size + 'px';

		}
		board.innerHTML += "<br/>"
	}
	global_in_game = true
}

function get_board_size(mode){
	// determine board size determines on mode
	let width, height, board_width
	if (mode == 'easy') {
		width = 15;
		height = 15;
		board.style.width = '40%';
		header.style.width = '40%';
		board_width = get_board_px(38.5)

	} else if (mode == 'medium') {
		width = 25;
		height = 15; 
		board.style.width = '60%';
		header.style.width = '60%';
		board_width = get_board_px(58.5)

	} else {
		width = 35;
		height = 15;
		board.style.width = '90%';
		header.style.width = '90%';
		board_width = get_board_px(88.5)
	}

	return [width, height, board_width]
}

function get_board_px(percentage){
	// return board_width in px
	percentage = Math.floor(percentage) / 100
	return percentage * window.innerWidth
}

function playBtnSound() {
	// play sounds when tap a button
	document.getElementById('clickSound').play();

}

function open_setting() {
	// display setting underneath the game board
	setting.className = 'w3-display-middle w3-border w3-show'
}

function first_touch() {
	// start clock
	setInterval(clock, 1000);

	//sound and ambience stuff
	board.onclick = playBtnSound;
	playBtnSound();

	//
	document.getElementById('ambience').play();
	board.style.opacity = 1;
	create_game_board(global_mode)

}        

function select_mode(mode) {
	let all_modes = ['easy', 'medium', 'hard']
	selected_btn = document.getElementById(mode)

	// clear formatting of other buttons
	current_mode_index = all_modes.indexOf(mode)
	delete all_modes[current_mode_index]
	all_modes.forEach(unselect_button)

	//select the button 
	selected_btn.className = 'selected_button w3-bar-item'
	global_mode = mode;

	//play button sound
	playBtnSound()
}

function unselect_button(value = '') {
	//unselect a button
	document.getElementById(value).className = 'w3-bar-item'
}

function toggleMusic() {
	//toggle Music on or off
	this.className = 'selected_button w3-bar-item'

	if (this.id == 'music_on') {
		unselect_button('music_off')
		ambience.play()

	} else {
		unselect_button('music_on')
		ambience.pause()
	}
	playBtnSound()
}

function changeAmbience() {
	// change the background music
	let song_name = this.value;
	ambience.src = 'Audio/' + song_name;
	let music_on = document.getElementById('music_on')	
	if (music_on.classList.contains("selected_button")) {
		// if music_on button is selected
		ambience.play()
		// else don't do anything
	}
}

function toggleSfx() {
	//toggle sfx on or off
	this.className = 'selected_button w3-bar-item'

	if (this.id == 'sfx_on') {
		unselect_button('sfx_off')
		clickSound.muted = false
		playBtnSound()
	} else {
		unselect_button('sfx_on')
		clickSound.muted = true
	}
	playSound()
}

function hide_setting() {
	//move back to the board
	if (global_in_game === true) {
		// if in game aka first_touch() was called
		// regenerate board. else don't do anything
		// so first_touch() create the board for us
		create_game_board('easy') //create an easy board by default
	}
	// hide setting
	setting.className = 'w3-display-middle w3-border w3-hide';

	// play click sound
	playBtnSound()
}

// click the restart button
restart.onclick = function reset_board() {
	location.reload();
}

// click on board the first time
board.onclick = first_touch

// click on setting button
gear_pic.onclick = open_setting

// difficulty mode btns
easy.onclick = function () {
	select_mode('easy')
}
medium.onclick = function () {
	select_mode('medium')
}
hard.onclick = function () {
	select_mode('hard')
}

// music and sfx button
document.getElementById('music_on').onclick = toggleMusic;
document.getElementById('music_off').onclick = toggleMusic;
document.getElementById('music_option').onclick = changeAmbience;

document.getElementById('sfx_on').onclick = toggleSfx;
document.getElementById('sfx_off').onclick = toggleSfx;

document.getElementById('confirm').onclick = hide_setting;