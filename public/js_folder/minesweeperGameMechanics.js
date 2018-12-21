/* this modules contains all the codes 
   involving the minesweeper game mechanics */

// global vars
let timer
let global_in_game = false; // not in game when start out


// functions

function start_timer(start_time) {
    // start a clock that tracks time from start_time
    current_time = new Date();
    elapsed_time = current_time - start_time;
    second = Math.floor(elapsed_time / 1000) % 60;
    if (second < 10) {
        second = "0" + String(second);
    }

    minute = Math.floor(elapsed_time / 60000);
    document.getElementById('clock').innerHTML = String(minute) + ":" + String(second)
}


function check_if_won() {
    // check if the user has won yet

    // if user revealed all non-mines btn, the only
    // btns with class gift_btn left are mines
    let buttons = document.getElementsByClassName("gift_btn");
    let mode = SettingMetaData.get_game_mode();
    let mine_amount = MinesAndNums.get_mine_numbers(mode);

    if (buttons.length === mine_amount) {
        clearInterval(timer);
        display_page("won");
    }
}


function disable_board() {
    // disable all buttons on the board
    let board = BoardCreator.get_board()
    let all_btns = board.getElementsByTagName("BUTTON")
    for (let i = 0; i < all_btns.length; i ++) {
        let button = document.getElementById(all_btns[i].id)
        button.disabled = true;
        button.style.cursor = "auto";        
    }
}

let BoardCreator = {
    // everything relates to creating board

    // BRIEF DESCRIPTION OF BOARD
    // 1. board: the main play area
    // 2. buttons: the part where the user interact with the board.
    // 		       Clicking the button woulddisplay
    //			   a number that tells how many mines are nearby.
    board: document.getElementById('board'),
    default_left: 0,
    default_top: 0,
    btn_size: 0,

    get_board: function () {
        // return the board element
        return BoardCreator.board;
    },


    create_game_board: function(mode) {
        // create the game board based on mode
        let dimension = this.get_board_size(mode);
        // cell_row is how many cells are in a row
        // cell_col is how many cells are in a col
        let cell_row = dimension[0];
        let cell_col = dimension[1];
        let board_width_px = dimension[2];
    
        BoardCreator.board.innerHTML = '' // clear the board
        for (let i = 0; i < cell_col; i++) {
            for (let j = 0; j < cell_row; j++) {
                BoardCreator.btn_size = this.create_buttons(board_width_px, i, j, cell_row);
            }
            BoardCreator.board.innerHTML += "<br>";
            BoardCreator.default_left = 0;
            BoardCreator.default_top += parseInt(BoardCreator.btn_size);

        }
        BoardCreator.board.style.height = 
        String(BoardCreator.default_top + 5) + "px";

        global_in_game = true; //declare that we are in game
    
    },


    get_board_size: function(mode) {
        // determine board size determines on mode
        let cell_row, cell_col, board_width
        // cell_row is how many cells are in a row
        // cell_col is how many cells are in a col
        if (mode == 'easy') {
            if (window.innerWidth <= 375) {
                // for mobile
                cell_row = 5;
                cell_col = 5;
                BoardCreator.board.style.width = '100%';
                header.style.width = '100%';
                setting.style.width = '100%';
                board_width = this.get_board_px(98.7);
    
            } else {
                // for laptops
                cell_row = 5;
                cell_col = 5;
                BoardCreator.board.style.width = '40%';
                header.style.width = '40%';
                board_width = this.get_board_px(39);
    
            }
    
    
        } else if (mode == 'medium') {
            if (window.innerWidth <= 375) {
                // for mobile
                cell_row = 7;
                cell_col = 7;
                board.style.width = '100%';
                header.style.width = '100%';
                setting.style.width = '100%';
                board_width = this.get_board_px(98.7);
            } else {
                // for laptops
                cell_row = 25;
                cell_col = 15;
                BoardCreator.board.style.width = '60%';
                header.style.width = '60%';
                board_width = this.get_board_px(59);
            }
    
    
        } else {
            if (window.innerWidth <= 375) {
                // for mobile
                cell_row = 10;
                cell_col = 10;
                board.style.width = '100%';
                header.style.width = '100%';
                setting.style.width = '100%';
                board_width = this.get_board_px(98.7);
            } else {
                // for laptops
                cell_row = 35;
                cell_col = 15;
                BoardCreator.board.style.width = '90%';
                header.style.width = '90%';
                board_width = this.get_board_px(89);
            }
    
        }
    
        return [cell_row, cell_col, board_width];
    },
    
    
    get_board_px: function(percentage) {
        // return board_width in px
        percentage = Math.floor(percentage) / 100;
        return percentage * window.innerWidth;
    },
    
    
    create_buttons: function(board_width_px, i, j, width) {
        // create buttons to be append to cells
        // this is the clickable buttons on top of the cells
        let button = document.createElement("BUTTON");
    
        // create unique id
        let string = String(i) + String(j);
        button.id = 'button' + string;
    
        button.className = 'gift_btn btn_num0';
    
        //find the button size depends on the board's width
        let button_size = String(board_width_px / width);
    
        button.style.width = button_size + 'px';
        button.style.height = button_size + 'px';

        // adjust the position
        button.style.left = String(BoardCreator.default_left) + "px";
        button.style.top = String(BoardCreator.default_top) + "px";

        BoardCreator.default_left += parseInt(button_size);
        BoardCreator.board.appendChild(button);
        return button_size;
    },   
};


let MinesAndNums = {
    // everything relates to mines and numbers surrounding them
    minePlacer: function(mode, selected_btn_id) {
        // place mines on the map
        let dimension = BoardCreator.get_board_size(mode);
        // cell_row is how many cells are in a row
        // cell_col is how many cells are in a col
        let cell_row = dimension[0];
        let cell_col = dimension[1];
    
        let total_mine = MinesAndNums.get_mine_numbers(mode);
        let placed_mine = 0;
        while (placed_mine < total_mine) {
            // uses the Random module to select a random row     
            let cell_x_coor = Math.floor(Math.random() * cell_row);
            // uses the Random module to select a random column     
            let cell_y_coor = Math.floor(Math.random() * cell_col);
    
            // get a button with the chosen coordinates
            let mine_button = document.getElementById('button' + String(cell_x_coor) + String(cell_y_coor));
    
            //checks if the element already has a mine placed in it 
            if (mine_button.classList.contains('mine')) {
                continue;    //if so, skips
            }
            // if the created button is the same as the button
            // that was clicked by the user
            else if (mine_button.id === selected_btn_id) {
                continue;
            }
            else {
                // Otherwise, it add a className to mine_button
                mine_button.classList.add('mine');
    
                // places numbers around the mines
                MinesAndNums.number_surroundings(cell_x_coor, cell_y_coor, cell_row, cell_col);
                placed_mine++;
            }
        }
    },
    
    
    get_mine_numbers: function(mode) {
        // get number of mines depend on mode
        let mines;
        if (mode == 'easy') {
            mines = 3;
        } else if (mode == 'medium') {
            mines = 40;
        } else if (mode == 'hard') {
            mines = 60;
        }
        return mines;
    },
    
    
    number_surroundings: function(cell_x_coor, cell_y_coor, cell_row, cell_col) {
        // increase the number by one in cells surrounding a mine
    
        // get one less and one more of x_coor value
        // this covers the cells to the right and left of the
        // mine cell
        let cell_x_coor_values = [cell_x_coor - 1, cell_x_coor, cell_x_coor + 1];
    
        // same as above
        let cell_y_coor_values = [cell_y_coor - 1, cell_y_coor, cell_y_coor + 1];
    
        // loops through all possible x and y_coor_values surrounding
        // the mine
        for (i = 0; i < cell_x_coor_values.length; i++) {
            x_values = cell_x_coor_values[i];
    
            // check to make sure the x_values is in boundary
            if (x_values < 0 || x_values == cell_row) {
                continue;
            }
            for (j = 0; j < cell_y_coor_values.length; j++) {
                y_values = cell_y_coor_values[j];
    
                // check to make sure the y_values is in boundary
                if (y_values < 0 || y_values == cell_col) {
                    continue;
                }
    
                // get a surrounding cell's button
                let surrounding_button = document.getElementById('button' + String(x_values) + String(y_values));
    
                // check if it has a mine
                if (surrounding_button.classList.contains("mine")) {
                    continue;
                }
    
                // recall btn_num# is index 1
                // get the btn_num#
                let btn_num = surrounding_button.classList.item(1);
    
                // get the number in btn_num then + 1 to it
                // cause there's one more mine nearby than before
                let number = parseInt(btn_num.slice(7)) + 1;
                let new_btn_num = 'btn_num' + String(number);
    
                // put that in the classList and remove the old one
                surrounding_button.classList.remove(btn_num);
                surrounding_button.classList.add(new_btn_num);
            }
        }
    
    },
    
    
    colour_number: function (element, number) {
        // choose a colour depends on the value of the number
        
        // create an array that contains numbers and their colours
        let colour_num_list = [
            [1, "#0033cc"],
            [2, "#006600"],
            [3, "#ff0000"],
            [4, "#99ccff"],
            [5, "#993333"],
            [6, "#ffcc66"],
            [7, "#000066"],
            [8, "##ff00ff"]
        ];
        
        // check number
        for (let j = 0; j < 8; j ++) {
            if (number === colour_num_list[j][0]) {
                element.style.color = colour_num_list[j][1];
            };
        };
    },


    reveal_all_mines: function (element) {
        // display mine
        let mine_button = document.getElementById(element.id);
        mine_button.className = "mine";
    },
}


let BtnInteractor = {
    // this class contains methods for the user to
    // interact with the board buttons

    // start time when user mousedown a button
    flagging_period: null,
    first_touch: function () {
        // when the user first touch the board

        // remove first touch from the board
        BoardCreator.get_board().onclick = '';

        // if global_music and global_sfx are true (on)
        // activate this
        if (SettingMetaData.get_music_status() === true) {
            document.getElementById('ambience').play();
        } else if (SettingMetaData.get_sfx_status() === true) {
            playBtnSound();
        }

        // make board opaque + create it
        let board = BoardCreator.get_board()
        board.style.opacity = 1;
        let mode = SettingMetaData.get_game_mode();
        BoardCreator.create_game_board(mode);

        // make it so clicking on the button
        // will start the game
        let buttons = document.getElementsByClassName('gift_btn')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", BtnInteractor.start_game);
        }
    },


    start_game: function () {
        // start the game when user clicks on a btn;

        // start clock
        start_time = new Date();
        timer = setInterval(function () {
            start_timer(start_time);
        }, 1000);

        // remove onclick of start_game and add other events
        let buttons = document.getElementsByClassName("gift_btn")
        for (i = 0; i < buttons.length; i++) {
            buttons[i].removeEventListener("click", BtnInteractor.start_game);
            buttons[i].addEventListener("mousedown", BtnInteractor.touch_button);
            buttons[i].addEventListener("mouseup", BtnInteractor.release_button);
        }

        // place the mines
        MinesAndNums.minePlacer(SettingMetaData.game_mode, this.id);
        playBtnSound();
        BtnInteractor.reveal_button(this)
    },


    touch_button: function () {
        // starts the code as if the user intends
        // to hold down the button.
        // if user mouseup in time aka not hold,
        // release_button() will cancel the flagging_period
        let button = this;

        // if has flag, mark it to be removed onmouseup
        if (this.classList.contains('flag')) {
            this.classList.add('flag_to_be_del');
        }
        else {
            flagging_period = setTimeout(function() {
                BtnInteractor.flag_button(button)
            }, 300);
        }
        
    },


    release_button: function() {
        // cancel flagging_period and reveal cell
        // if there's no flag in it

        // stop flagging_period
        clearTimeout(flagging_period);
        
        if (this.classList.contains('flag_to_be_del')) {
            // if it has a flag that was generated
            // before the user touched it
            this.classList.remove('flag_to_be_del');
            this.classList.remove('flag');
        }
        else if (!(this.classList.contains("flag"))){
            // if 'this' aka the button
            // doesn't have a flag in it
            BtnInteractor.reveal_button(this);
        }
    },


    reveal_button: function (button) {
        // reveal the cell underneath a button

        if (button.classList.contains("mine")) {
            // if this is a mine
            BtnInteractor.clicked_mine(button);
        }
        else {
            // find the btn_type of the button
            let btn_num = button.classList.item(1);

            // get the number part
            let number = parseInt(btn_num.slice(7));
            if (number == 0) {
                number = " ";
            }

            // change colour depends on values
            MinesAndNums.colour_number(button, number)

            // replace the button with number
            button.innerHTML = number
            button.classList.add('numbered_btn')
            button.disabled = true;
            button.classList.remove('gift_btn')

            playBtnSound()
            check_if_won()
        }
        
    },


    flag_button: function (button) {
        // flag a cell by holding down on a button
        button.classList.toggle("flag");
        playBtnSound()
    },


    clicked_mine: function (button) {
        // what happens when user clicks a mine
        // displays all mines in global_mine_list
        mine_list = document.getElementsByClassName("mine")
        for (i = 0; i < mine_list.length; i++) {
            MinesAndNums.reveal_all_mines(mine_list[i]);
        };

        button.className = "this_mine";
        // play bomb sound, stop music and stop timer
        mineSound();
        ambience.pause();
        clearInterval(timer);

        disable_board();

        // pop up lost.html
        display_page("lost");
    },


    
};


// click on board the first time
BoardCreator.board.onclick = BtnInteractor.first_touch;



