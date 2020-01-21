import {CellInteractor} from "./minesweeper_cell_interact.js";
import {Timer} from "./minesweeper_timer.js";
import {Sound} from "./minesweeper_sound.js";
import {BoardCreator} from "./minesweeper_board_creator.js";

export let ResetFunctions = {
    // contains all functions relating to resetting the game

    reset_board: function () {
        // reset the board

        BoardCreator.clear_board();
        BoardCreator.create_game_board();
        CellInteractor.add_start_game_function_to_buttons();
        Timer.stop_timer();
        Timer.reset_timer();
        Sound.play_music();
    }
    
};