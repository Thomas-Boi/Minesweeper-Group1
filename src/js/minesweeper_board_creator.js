import {CellInteractor} from "./minesweeper_cell_interact.js";
import {MetaData} from "./minesweeper_metadata.js";


export let BoardCreator = {
    // everything relates to creating board and the board itself

    // BRIEF DESCRIPTION OF BOARD
    // 1. board: the main play area
    // 2. buttons: the part where the user interact with the board.
    // 		       Clicking the button would display
	//			   a number that tells how many mines are nearby.

	board: document.getElementById('board'),

	/**
	 * The width and height of the button (it's a square).
	 * @type string.
	 */
	btn_size: 0,

	/**
	 * Tracks how many cells are in a row.
	 * @type number.
	 */
	cells_in_a_row: 0,

	/**
	 * Tracks how many cells are in a column
	 * @type number.
	 */
	cells_in_a_column: 0,
	
	/**
	 * Tracks the font size of the numbers inside the buttons.
	 * @type string.
	 */
    font_size: 0,


	/**
	 * Return the board element.
	 */
    get_board: function () {
        return BoardCreator.board;
    },

	/**
	 * Get the cells_in_a_row.
	 */
    get_cells_in_a_row: function () {
		return BoardCreator.cells_in_a_row;
    },
    
	/**
	 * Get the cells_in_a_column.
	 */
	get_cells_in_a_column: function () {
		// get the cells_in_a_column
		return BoardCreator.cells_in_a_column;
    },   

	/**
	 * Create the game board (the mine buttons) based on 
	 * current mode.
	 */
    create_game_board: function () {
        let mode = MetaData.get_game_mode();
		BoardCreator.clear_board();
        BoardCreator.set_board_dimensions(mode);

        for (let i = 0; i < BoardCreator.cells_in_a_column; i++) {
			let row = BoardCreator.create_row(i);
			BoardCreator.board.appendChild(row);
        }

        CellInteractor.add_start_game_function_to_buttons();
    },


		
	/**
	 * Set the cells_in_a_row, cells_in_a_column, 
	 * and font_size based on mode.
	 * @param {string} mode, the current game mode. 
	 */
   set_board_dimensions: function (mode) {
        switch(mode) {
            case 'intro':
                BoardCreator.cells_in_a_row = 5;
				BoardCreator.cells_in_a_column = 5;
				BoardCreator.board.style.minWidth = "40%";
                BoardCreator.font_size = '65px';
                break;

            case 'easy':
                BoardCreator.cells_in_a_row = 10;
                BoardCreator.cells_in_a_column = 10;
				BoardCreator.board.style.minWidth = "40%";
                BoardCreator.font_size = '45px';
                break;

            case 'medium':
                BoardCreator.cells_in_a_row = 18;
                BoardCreator.cells_in_a_column = 12;
				BoardCreator.board.style.minWidth = "60%";
                BoardCreator.font_size = '45px';
                break;

            case 'hard':
                BoardCreator.cells_in_a_row = 25;
                BoardCreator.cells_in_a_column = 12;
				BoardCreator.board.style.minWidth = "80%";
                BoardCreator.font_size = '45px';
                break;
		}

		BoardCreator.set_btn_size();
    },


	/**
	 * Set the btn_size.
	 */
	set_btn_size: function () {
		// recall borders width is 1px
		// we need to account for that when we find the btn_size
		let numOfBorders = BoardCreator.cells_in_a_row + 1; 
		let widthWithoutBorder = 
			BoardCreator.board.clientWidth - numOfBorders;
		BoardCreator.btn_size = 
			`${ widthWithoutBorder / BoardCreator.cells_in_a_row}px`;
	},

	/**
	 * Clear the board.
	 */
    clear_board: function () {
		BoardCreator.board.replaceWith(
			BoardCreator.board.cloneNode(false),
		);

		// reset the board reference
		BoardCreator.board = document.querySelector("#board");
	},
	
	/**
	 * Create a row of buttons.
	 * @param {number} i, the row position.
	 * @return a div element (the row) containing the buttons.
	 */
	create_row: function (i) {
		let row = document.createElement("div");
		row.className = "row";
		for (let j = 0; j < BoardCreator.cells_in_a_row; j++) {
			let button = BoardCreator.create_buttons(i, j);
			row.appendChild(button);
		}
		return row;
	},

	/**
	 * Create buttons to be append to cells.
     * This is the clickable buttons on top of the cells.
	 * @param {number} i, the row position.
	 * @param {number} j, the column position.
	 */
    create_buttons: function (i, j) {
        let button = document.createElement("button");

        // create unique id
		button.id = `button${j}_${i}`;

		// btn_num0 tracks the number inside the button 
		// which represents the amount of mines around it
        button.className = 'gift_btn btn_num0';

        button.style.width = BoardCreator.btn_size;
        button.style.height = BoardCreator.btn_size;
        button.style.fontSize = BoardCreator.font_size;
        return button;
    },
};