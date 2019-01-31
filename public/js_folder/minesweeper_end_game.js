let EndGameMechanics = {
    // contains functions relates to winning, and loosing
    check_if_won: function () {
        // check if the user has won yet

        // if user revealed all non-mines btn, the only
        // btns with class gift_btn left are mines
        let buttons = document.getElementsByClassName("gift_btn");
        let mode = MetaData.get_game_mode();
        let mine_amount = MinesAndNums.get_mine_numbers(mode);

        if (buttons.length === mine_amount) {
            Timer.stop_timer();
            Timer.save_end_time();

            EndGameMechanics.disable_board();
            EndGameMechanics.display_page("won");
        }
    },


    disable_board: function () {
        // disable all buttons on the board
        let board = BoardCreator.get_board()
        let all_btns = board.getElementsByTagName("BUTTON")
        for (let i = 0; i < all_btns.length; i++) {
            let button = document.getElementById(all_btns[i].id)
            button.disabled = true;
            button.style.cursor = "auto";
        }
    },


    reveal_all_mines: function (element) {
        // display mine
        let mine_button = document.getElementById(element.id);

        // check if it has a flag in it
        if (mine_button.classList.contains('flag')) {
            return;
        };
        mine_button.className = "mine";
    },

    display_page: function (page_name) {
        // display the lost.html
        pop_up_url = page_name + '.html'
        pop_up_name = page_name
        window.open(pop_up_url, pop_up_name)

    }
}