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
        // if (MetaData.get_board_height() === true) {
        //     Sound.start_music();
        // } else if (MetaData.get_sfx_status() === true) {
        //     Sound.playBtnSound();
        // }
        
        // make board opaque + create it
        let board = BoardCreator.get_board()
        board.style.opacity = 1;
        let mode = MetaData.get_game_mode();
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
        Timer.start_timer();

        // remove onclick of start_game and add other events
        let buttons = document.getElementsByClassName("gift_btn")
        for (i = 0; i < buttons.length; i++) {
            buttons[i].removeEventListener("click", BtnInteractor.start_game);
            buttons[i].addEventListener("mousedown", BtnInteractor.touch_button);
            buttons[i].addEventListener("mouseup", BtnInteractor.release_button);
        }

        // place the mines
        MinesAndNums.minePlacer(MetaData.get_game_mode(), this.id);
        Sound.playBtnSound();
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
            flagging_period = setTimeout(function () {
                BtnInteractor.flag_button(button)
            }, 300);
        }

    },


    release_button: function () {
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
        else if (!(this.classList.contains("flag"))) {
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
            let continue_code = BtnInteractor.clicked_number(button);
            if (continue_code) {
                BtnInteractor.reveal_nearby_buttons(button);
            }
            Sound.playBtnSound();
            EndGameMechanics.check_if_won();
        }

    },


    reveal_nearby_buttons: function (button) {
        // reveal the buttons around the epicenter button

        // get x_coor and y_coor 
        let id = button.id; // id is button##
        let x_coor = parseInt(id.slice(6, 7));
        let y_coor = parseInt(id.slice(7));

        // get cell_row and cell_col
        let cell_row = BoardCreator.get_board_width();
        let cell_col = BoardCreator.get_board_height();

        // get one less and one more of x_coor value
        // this covers the cells to the right and left of the
        // mine cell
        let x_coor_values = [x_coor - 1, x_coor, x_coor + 1];

        // same as above
        let y_coor_values = [y_coor - 1, y_coor, y_coor + 1];

        // loops through all possible x and y_coor_values
        for (let i = 0; i < x_coor_values.length; i++) {
            let x_values = x_coor_values[i];
            // check to make sure the x_values is in boundary
            if (x_values < 0 || x_values == cell_row) {
                continue;
            }
            for (let j = 0; j < y_coor_values.length; j++) {
                let y_values = y_coor_values[j];
                // check to make sure the y_values is in boundary
                if (y_values < 0 || y_values == cell_col) {
                    // console.log('y is ' + y_values + '. y out of bound. This is skipped')
                    continue;
                }

                // get a surrounding cell's button
                let surrounding_button = 
                document.getElementById('button' + String(x_values) + String(y_values));

                if (surrounding_button.classList.contains('flag')) {
                    // if it has a flag, skips
                    continue;
                }

                let continue_code = 
                BtnInteractor.clicked_number(surrounding_button);
                if (continue_code) {
                    BtnInteractor.reveal_nearby_buttons(surrounding_button);
                }
            }
        }
    },


    flag_button: function (button) {
        // flag a cell by holding down on a button
        button.classList.toggle("flag");
        Sound.playBtnSound()
    },


    clicked_mine: function (button) {
        // what happens when user clicks a mine
        // displays all mines in global_mine_list
        mine_list = document.getElementsByClassName("mine")
        for (i = 0; i < mine_list.length; i++) {
            EndGameMechanics.reveal_all_mines(mine_list[i]);
        };

        button.className = "this_mine";
        // play mine sound, stop music and stop timer
        Sound.mineSound();
        Sound.mute_music(true);
        clearInterval(timer);

        EndGameMechanics.disable_board();

        // pop up lost.html
        EndGameMechanics.display_page("lost");
    },


    clicked_number: function (button) {
        // what happens when user clicks a number

        // skip if it's already numbered
        if (button.classList.contains('revealed_btn')) {
            return ;
        }

        // find the btn_num
        let btn_num = button.classList.item(1);
        // get the number part
        let number = parseInt(btn_num.slice(7));

        if (number == 0) {
            number = " ";
        }

        // change colour depends on values
        MinesAndNums.colour_number(button, number);

        // replace the button with number
        button.innerHTML = number;
        button.classList.add('revealed_btn');
        button.disabled = true;
        button.classList.remove('gift_btn');
        // send a code to tell reveal_btn whether to
        // continue revealing cells
        if (number == " ") {
            return true;
        }
        else {
            return false;
        }
    },
};
