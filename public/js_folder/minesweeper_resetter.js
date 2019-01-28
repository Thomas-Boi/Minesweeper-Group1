let ResetFunctions = {
    // contains all functions relating to reestting the game

    reset_board: function () {
        // reset the board

        BoardCreator.clear_board();
        BoardCreator.create_game_board();
        CellInteractor.add_start_game_function_to_buttons();
    },

    

    
}