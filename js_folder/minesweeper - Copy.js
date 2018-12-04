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
let global_music = true; // default, music is turned on
let global_sfx = true; // default, sfx is turned on

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

	board.innerHTML = '' // clear the board
	for (let i = 1; i <= height; i++) {
		for (let j = 1; j <= width; j++) {
			create_cells_and_buttons(board_width_px, i, j, width)
		}
		board.innerHTML += "<br/>"
	}
	global_in_game = true //declare that we are in game
}

function get_board_size(mode){
	// determine board size determines on mode
	let width, height, board_width
	if (mode == 'easy') {
		width = 15;
		height = 15;
		board.style.width = '40%';
		header.style.width = '40%';
		board_width = get_board_px(38.7);

	} else if (mode == 'medium') {
		width = 25;
		height = 15; 
		board.style.width = '60%';
		header.style.width = '60%';
		board_width = get_board_px(58.7);

	} else {
		width = 35;
		height = 15;
		board.style.width = '90%';
		header.style.width = '90%';
		board_width = get_board_px(88.7);
	}

	return [width, height, board_width];
}

function get_board_px(percentage){
	// return board_width in px
	percentage = Math.floor(percentage) / 100;
	return percentage * window.innerWidth;
}

function create_cells_and_buttons(board_width_px, i, j, width) {
	// create cells underneath the main board
	let cell = document.createElement("DIV");

	board.appendChild(cell);

	let string = String(i) + String(j);
	cell.id = 'cell' + string;

	// give className so we make the span side by side
	cell.className = 'board_cell'	
	//find the cell size depends on the board's width
	let cell_size = String(board_width_px / width);

	cell.style.width = cell_size + 'px';
	cell.style.height = cell_size + 'px';

	// create and append button to the div
	let button = create_buttons(board_width_px, i, j, width)
	cell.appendChild(button)
}

function create_buttons(board_width_px, i, j, width) {
	// create buttons to be append to cells
	let button = document.createElement("Button");

	let string = String(i) + String(j);
	button.id = 'button' + string;

	button.className = 'gift_buttons'	

	//find the button size depends on the board's width
	let button_size = String(board_width_px / width);

	button.style.width = button_size + 'px';
	button.style.height = button_size + 'px';

	return button
}

function playBtnSound() {
	// play sounds when tap a button
	document.getElementById('clickSound').play();

}

function open_setting() {
	// display setting underneath the game board
	setting.className = 'w3-display-middle w3-border w3-show';
}

function first_touch() {
	// start clock
	setInterval(clock, 1000);

	//sound and ambience stuff
	board.onclick = playBtnSound;

	// if global_music and global_sfx are true (on)
	// activate this
	if (global_music == true) {
		document.getElementById('ambience').play();
	}else if (global_sfx == true) {
		playBtnSound();
	}

	// make board opaque + create it
	board.style.opacity = 1;
	create_game_board(global_mode);

}        

function select_mode(mode) {
	let all_modes = ['easy', 'medium', 'hard'];
	selected_btn = document.getElementById(mode);

	// clear formatting of other buttons
	current_mode_index = all_modes.indexOf(mode);
	delete all_modes[current_mode_index];
	all_modes.forEach(unselect_button);

	//select the button 
	selected_btn.className = 'selected_button w3-bar-item';
	global_mode = mode;

	//play button sound
	playBtnSound();
}

function unselect_button(value = '') {
	//unselect a button
	document.getElementById(value).className = 'w3-bar-item w3-border';
}

function toggleMusic() {
	//toggle Music on or off
	this.className = 'selected_button w3-bar-item w3-border';

	if (this.id == 'music_on') {
		unselect_button('music_off');
		ambience.play();
		global_music = true;

	} else {
		unselect_button('music_on');
		ambience.pause();
		global_music = false;
	}
	playBtnSound();
}

function changeAmbience() {
	// change the background music
	let song_name = this.value;
	ambience.src = 'Audio/' + song_name;
	let music_on = document.getElementById('music_on');	
	if (music_on.classList.contains("selected_button")) {
		// if music_on button is selected
		ambience.play();
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
		global_sfx = true

	} else {
		unselect_button('sfx_on')
		clickSound.muted = true
		global_sfx = false
	}
	playSound()
}

function confirm_setting() {
	//move back to the board

	if (global_in_game == true) {
		// if in game aka first_touch() was called
		// regenerate board. else don't do anything
		// so first_touch() create the board for us
		create_game_board(global_mode); //create an easy board by default
	}
	// hide setting
	setting.className = 'w3-display-middle w3-border w3-hide';

	// play click sound
	playBtnSound();
}

// click the restart button
restart.onclick = function reset_board() {
	location.reload();
}

// click on board the first time
board.onclick = first_touch;

// click on setting button
gear_pic.onclick = open_setting;

// difficulty mode btns
easy.onclick = function () {
	select_mode('easy');
	sessionStorage.setItem('mode', 'easy')
}
medium.onclick = function () {
	select_mode('medium');
	sessionStorage.setItem('mode', 'medium')
}
hard.onclick = function () {
	select_mode('hard');
	sessionStorage.setItem('mode', 'hard')

}

// music and sfx button
document.getElementById('music_on').onclick = toggleMusic;
document.getElementById('music_off').onclick = toggleMusic;
document.getElementById('music_option').onclick = changeAmbience;

document.getElementById('sfx_on').onclick = toggleSfx;
document.getElementById('sfx_off').onclick = toggleSfx;


document.getElementById('confirm').onclick = confirm_setting;