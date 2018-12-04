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
let global_mine_list = []; // ids of the divs that have the mine
let global_mine_button_list = []; // ids of the btns on top of the div


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

	// place the mines
	minePlacer(global_mode)
}        

function clock() {
	second++;
	if (second == 10) {
		// reset_second + add one to tenth_place_second
		tenth_place_second += 1;
		second = 0;
	}
	if (tenth_place_second == 6) {
		// reset tenth_place_second + add one to minute
		tenth_place_second = 0;
		minute += 1;
	}
	document.getElementById('clock').innerHTML = minute + ':' + tenth_place_second + '' + second;
}

function create_game_board(mode) {
	// create the game board based on mode
	let dimension = get_board_size(mode);
	// cell_row is how many cells are in a row
	// cell_col is how many cells are in a col
	let cell_row = dimension[0];
	let cell_col = dimension[1];
	let board_width_px = dimension[2];

	board.innerHTML = '' // clear the board
	for (let i = 1; i <= cell_col; i++) {
		for (let j = 1; j <= cell_row; j++) {
			create_cells_and_buttons(board_width_px, i, j, cell_row);
		}
		board.innerHTML += "<br/>";
	}
	global_in_game = true; //declare that we are in game
}

function get_board_size(mode){
	// determine board size determines on mode
	let cell_row, cell_col, board_width
	// cell_row is how many cells are in a row
	// cell_col is how many cells are in a col
	if (mode == 'easy') {		
		if (window.innerWidth <= 375) {
			// for mobile
			cell_row = 5;
			cell_col = 5;	
			board.style.width = '100%';
			header.style.width = '100%';
			setting.style.width = '100%';
			board_width = get_board_px(98.7);
		} else {
			// for laptops
			cell_row = 15;
			cell_col = 15;
			board.style.width = '40%';
			header.style.width = '40%';
			board_width = get_board_px(38.7);
		}
		

	} else if (mode == 'medium') {
		if (window.innerWidth <= 375) {
			// for mobile
			cell_row = 7;
			cell_col = 7;	
			board.style.width = '100%';
			header.style.width = '100%';
			setting.style.width = '100%';
			board_width = get_board_px(98.7);
		} else {
			// for laptops
			cell_row = 25;
			cell_col = 15; 
			board.style.width = '60%';
			header.style.width = '60%';
			board_width = get_board_px(58.7);
		}
		

	} else {
		if (window.innerWidth <= 375) {
			// for mobile
			cell_row = 10;
			cell_col = 10;	
			board.style.width = '100%';
			header.style.width = '100%';
			setting.style.width = '100%';
			board_width = get_board_px(98.7);
		} else {
			// for laptops
			cell_row = 35;
			cell_col = 15;
			board.style.width = '90%';
			header.style.width = '90%';
			board_width = get_board_px(88.7);
		}
		
	}

	return [cell_row, cell_col, board_width];
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

function minePlacer(mode){
	// place mines on the map

	// get dimension of the board
	let dimension = get_board_size(mode);
	// cell_row is how many cells are in a row
	// cell_col is how many cells are in a col
	let cell_row = dimension[0];
	let cell_col = dimension[1];

	// get total amount of mines
	let total_mine = get_mine_numbers(mode);
	let placed_mine = 0;    //placed_mine tracks how many mines are set on the board.
	while (placed_mine < total_mine){          
		//uses the Random module to select a random row     
		let cell_x_coor = Math.floor(Math.random()*cell_row) + 1;  
		// used the Random module to select a random column     
		let cell_y_coor = Math.floor(Math.random()*cell_col) + 1;   
		
		// this is after the board is created
		// get the cell
		let mine_cell = document.getElementById('cell' + String(cell_x_coor) + String(cell_y_coor));
		// get the button on top of the cell
		let mine_button = document.getElementById('button' + String(cell_x_coor) + String(cell_y_coor));
			
		if (mine_cell in global_mine_list){ //checks if the element already has a mine placed in it       
			continue;    //if so, the loop continues without incrementing x     
		} 
		else {
			//Otherwise, it stores the mine_cell's id and mine_button's id
			global_mine_list.push(mine_cell.id) 
			global_mine_button_list.push(mine_button.id);
			mine_cell.classList.add('mine');
			mine_button.onclick = clicked_mine //clicked_mine
			placed_mine ++; //placed_mine increments so the while loop continues until all mines are placed.
		}
	}
	console.log(global_mine_list)
}

function get_mine_numbers(mode) {
	// get number of mines depend on mode
	let mines
	if (mode == 'easy') {
		mines = 8;
	} else if (mode == 'medium') {
		mines = 16;
	} else if (mode == 'hard') {
		mines = 24;
	}
	return mines
}

function clicked_mine() {
	// what happens when user clicks a mine
	// displays all mines in global_mine_list
	global_mine_button_list.forEach(reveal_mine)

	// play bomb sound and stop music
	mineSound()
	ambience.pause()

	// // pop up lost.html
	display_lost_page()
}


async function reveal_mine(value = '') {
	// remove the buttons on top
	let mine_button = await document.getElementById(value)
	mine_button.parentNode.removeChild(mine_button)

}

function mineSound() {
	// play sounds when tap a mine
	document.getElementById('mineSound').play();
}

function playBtnSound() {
	// play sounds when tap a button
	document.getElementById('clickSound').play();
}

function open_setting() {
	// display setting underneath the game board
	setting.className = 'w3-display-middle w3-border w3-show';
}

function display_lost_page() {
	// display the lost.html
	pop_up_url = 'lost.html'
	pop_up_name = 'lost'
	if (window.innerWidth < 375) {
		window.open(pop_up_url, pop_up_name)
	} else {
		window.open(pop_up_url, pop_up_name)
	}
}


// function cellcheck(cell){
// 	let count=0
// 	let cID = cell.id;
// 	console.log(cID)
// 	let r = parseInt(cID[4]);
// 	let c = parseInt(cID[5]);
// 	for(let i = -3;i<=3;++i){
// 		if(1<= +i <= 8){
// 			for(let j=-3;j<=3;++j){
// 				if(i==0 && j == 0 ){
// 					continue;
// 				}
// 				if(1<=c+j<=8){
// 					check= document.getElementById("cell"+String(r+i)+String(c+j));
// 					if(check in minelist && count <= Math.max(abs(i),ans(j))){
// 						count = Math.max(abs(i),ans(j));
// 					}
// 				}
// 			}
// 		}
// 	}
// 	if(count > 0){
// 		cell.innerHTML = count;   
// 	}
// 	else{
// 		dv.innerHTML = '<img src="Images/gray.png">';
// 	}
// 	return;
// }

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