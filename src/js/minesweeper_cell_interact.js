import {EndGameMechanics} from "./minesweeper_end_game.js";
import {Sound} from "./minesweeper_sound.js";
import {MetaData} from "./minesweeper_metadata.js";
import {BoardCreator} from "./minesweeper_board_creator.js";
import {Timer} from "./minesweeper_timer.js";
import {MinesAndNums} from "./minesweeper_mines_num.js";

export let CellInteractor = {
    // this class contains methods for the user to
    // interact with the board buttons

    flagging_period: null,
    first_touch: function () {
        // when the user first touch the board
        Sound.playBtnSound();
        Sound.play_music();

        MetaData.load_meta_data();
        let board = BoardCreator.get_board();
        board.onclick = '';
        board.style.opacity = 1;
        BoardCreator.create_game_board();
        MetaData.set_is_in_game(true);
    },

    add_start_game_function_to_buttons: function () {
        // add the start game functions to all board buttons

        let buttons = document.getElementsByClassName('gift_btn');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", CellInteractor.start_game);
        }
    },

    start_game: function () {
        // start the game when user clicks on a btn;
        Timer.start_timer();

        // remove onclick of start_game and add other events
        let buttons = document.getElementsByClassName("gift_btn");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].removeEventListener("click", CellInteractor.start_game);
            buttons[i].addEventListener("mousedown", CellInteractor.touch_button);
            buttons[i].addEventListener("mouseup", CellInteractor.release_button);
        }

        MinesAndNums.minePlacer(this.id);
        Sound.playBtnSound();
        CellInteractor.reveal_button(this);
    },


    touch_button: function () {
        // starts the code as if the user intends
        // to hold down the button.
        // if user mouseup in time aka not hold,
        // release_button() will cancel the CellInteractor.flagging_period

        // if has flag, mark it to be removed onmouseup
        // else flag it
        let button = this;

        if (button.classList.contains('revealed_btn')) {
            return;
        }

        if (button.classList.contains('flag')) {
            button.classList.add('flag_to_be_del');
        } else {
            CellInteractor.flagging_period = setTimeout(function () {
                CellInteractor.flag_button(button);
            }, 300);
        }

    },

    flag_button: function (button) {
        // flag a cell by holding down on a button
        button.classList.toggle("flag");
        Sound.playBtnSound();
    },

    release_button: function () {
        // cancel CellInteractor.flagging_period and reveal cell
        // if there's no flag in it

        // stop flagging_period
        clearTimeout(CellInteractor.flagging_period);

        let button = this;

        if (button.classList.contains('flag_to_be_del')) {
            // if it has a flag that was generated before
            button.classList.remove('flag_to_be_del');
            button.classList.remove('flag');
            Sound.playBtnSound();
        } else if (!(button.classList.contains("flag"))) {
            // if 'this' aka the button
            // doesn't have a flag in it
            CellInteractor.reveal_button(button);
        }
    },

    reveal_button: function (button) {
        // reveal the cell underneath a button
        if (button.classList.contains("mine")) {
            // if this is a mine
            CellInteractor.clicked_mine(button);
        } else if (button.classList.contains("revealed_btn")) {
            CellInteractor.check_flags_around_button(button);
        } else {
            let continue_code = CellInteractor.clicked_number(button);
            if (continue_code) {
                CellInteractor.reveal_nearby_buttons(button);
            }
        }

        Sound.playBtnSound();
        EndGameMechanics.check_if_won();
    },

    check_flags_around_button: function(button) {
		// when the user clicks on a revealed button,
		// checks whether we should reveal the surrounding
		// buttons based on whether the user flags the 
		// correct mine.

        // get x_coor and y_coor 
        let regexp = /[0-9]+/g;
        let matches = button.id.match(regexp);
        let x_coor = parseInt(matches[0]);
        let y_coor = parseInt(matches[1]);

        let cells_in_a_row = BoardCreator.get_cells_in_a_row();
        let cells_in_a_collumn = BoardCreator.get_cells_in_a_column();

        // get one less and one more of x_coor value
        // this covers the cells to the right and left of the
        // mine cell
        let x_coor_values = [x_coor - 1, x_coor, x_coor + 1];
        // same as above but for y
        let y_coor_values = [y_coor - 1, y_coor, y_coor + 1];

        let flag_counter = 0;
        // loops through all possible x and y_coor_values
        for (let i = 0; i < x_coor_values.length; i++) {
            let x_values = x_coor_values[i];
            // check to make sure the x_values is in boundary
            if (x_values < 0 || x_values == cells_in_a_row) {
                continue;
            }
            for (let j = 0; j < y_coor_values.length; j++) {
                let y_values = y_coor_values[j];
                // check to make sure the y_values is in boundary
                if (y_values < 0 || y_values == cells_in_a_collumn) {
                    continue;
                }

                // get a surrounding cell's button
                let id = `button${x_values}_${y_values}`;
                let surrounding_button = document.getElementById(id);

                if (surrounding_button.classList.contains('flag')) {
                    flag_counter++;
                }
            }
        }

        // find the btn_num
        let btn_num = button.classList.item(0);
        // get the number part
        let number = parseInt(btn_num.slice(7));
        if (flag_counter === number) {
            CellInteractor.reveal_nearby_buttons(button);
        }

    },

    reveal_nearby_buttons: function (button) {
        // reveal the buttons around the button in the parameter

        // get x_coor and y_coor 
        let regexp = /[0-9]+/g;
        let str = button.id.toString();
        let matches = str.match(regexp);
        let x_coor = parseInt(matches[0]);
        let y_coor = parseInt(matches[1]);

        let cells_in_a_row = BoardCreator.get_cells_in_a_row();
        let cells_in_a_column = BoardCreator.get_cells_in_a_column();

        // get one less and one more of x_coor value
        // this covers the cells to the right and left of the
        // mine cell
        let x_coor_values = [x_coor - 1, x_coor, x_coor + 1];
        // same as above but for y
        let y_coor_values = [y_coor - 1, y_coor, y_coor + 1];

        // loops through all possible x and y_coor_values
        for (let i = 0; i < x_coor_values.length; i++) {
            let x_values = x_coor_values[i];
            // check to make sure the x_values is in boundary
            if (x_values < 0 || x_values == cells_in_a_row) {
                continue;
            }
            for (let j = 0; j < y_coor_values.length; j++) {
                let y_values = y_coor_values[j];
                // check to make sure the y_values is in boundary
                if (y_values < 0 || y_values == cells_in_a_column) {
                    continue;
                }

                // get a surrounding cell's button
                let id = 'button' + String(x_values) + "_" + String(y_values);
                let surrounding_button = document.getElementById(id);

                if (surrounding_button.classList.contains('flag')) {
                    // if it has a flag, skips
                    continue;
                }

                if (surrounding_button.classList.contains('mine')) {
                    CellInteractor.clicked_mine(surrounding_button);
                    return;
                }

                let continue_code = CellInteractor.clicked_number(surrounding_button);
                if (continue_code) {
                    CellInteractor.reveal_nearby_buttons(surrounding_button);
                }
            }
        }
    },

    clicked_mine: function (button) {
        // what happens when user clicks a mine
        // displays all mines in global_mine_list
		EndGameMechanics.reveal_all_mines();

        button.className = "this_mine";
        // play mine sound, stop music and stop timer
        Sound.playMineSound();
        Sound.pause_music();
        Timer.stop_timer();

        EndGameMechanics.disable_board();

        // pop up lost.html
        EndGameMechanics.display_page("lost");
    },


    clicked_number: function (button) {
        // what happens when user clicks a number

        // skip if it's already numbered
        if (button.classList.contains('revealed_btn')) {
            return false;
        }

        // find the btn_num
        let btn_num = button.classList.item(1);
        // get the number part
        let number = parseInt(btn_num.slice(7));

        // replace the button with number
        button.classList.add('revealed_btn');
        button.classList.remove('gift_btn');
        if (number === 0) {
            button.textContent = " ";
            button.disabled = true;
        } else {
            button.textContent = number;
        }
        
        // send a code to tell reveal_btn whether to
        // continue revealing cells
        return number === 0;
    },
};
