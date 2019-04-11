let BoardCreator = {
    // everything relates to creating board and the board itself

    // BRIEF DESCRIPTION OF BOARD
    // 1. board: the main play area
    // 2. buttons: the part where the user interact with the board.
    // 		       Clicking the button woulddisplay
    //			   a number that tells how many mines are nearby.
    board: document.getElementById('board'),
    cell_left: 0,
    cell_top: 0,
    btn_size: 0,
    cells_in_a_row: 0,
    cells_in_a_collumn: 0,
    font_size: 0,

    get_board: function () {
        // return the board element
        return BoardCreator.board;
    },

    get_cells_in_a_row: function () {
		// get the cells_in_a_row
		return BoardCreator.cells_in_a_row;
    },
    
	get_cells_in_a_collumn: function () {
		// get the cells_in_a_collumn
		return BoardCreator.cells_in_a_collumn;
    },   

    create_game_board: function () {
        // create the game board based on current mode

        let mode = MetaData.get_game_mode();
        let dimension = this.get_board_size_and_font_size(mode);
        // cells_in_a_row is how many cells are in a row
        // cells_in_a_collumn is how many cells are in a col
        let cells_in_a_row = dimension[0];
        let cells_in_a_collumn = dimension[1];
        let board_width_px = dimension[2];

        BoardCreator.clear_board();
        for (let i = 0; i < cells_in_a_collumn; i++) {
            for (let j = 0; j < cells_in_a_row; j++) {
                BoardCreator.btn_size = BoardCreator.create_buttons(board_width_px, i, j, cells_in_a_row);
            }
            BoardCreator.board.innerHTML += "<br>";
            BoardCreator.cell_left = 0;
            BoardCreator.cell_top += BoardCreator.btn_size;
        }

        BoardCreator.board.style.height =
        String(BoardCreator.cell_top + 5) + "px";
        BoardCreator.cell_top = 0;
        
        CellInteractor.add_start_game_function_to_buttons();
    },


    get_board_size_and_font_size: function (mode) {
        // determine board size determines on mode
        let cells_in_a_row, cells_in_a_collumn, board_width_px
        // cells_in_a_row is how many cells are in a row
        // cells_in_a_collumn is how many cells are in a col
        switch(mode) {
            case 'intro':
                cells_in_a_row = 5;
                cells_in_a_collumn = 5;
                BoardCreator.board.style.width = '40%';
                header.style.width = '40%';
                BoardCreator.font_size = '65px';
                board_width_px = BoardCreator.get_board_px(39);
                break;

            case 'easy':
                cells_in_a_row = 10;
                cells_in_a_collumn = 10;
                BoardCreator.board.style.width = '40%';
                header.style.width = '40%';
                board_width_px = BoardCreator.get_board_px(39);
                BoardCreator.font_size = '45px';
                break;

            case 'medium':
                cells_in_a_row = 15;
                cells_in_a_collumn = 15;
                BoardCreator.board.style.width = '60%';
                header.style.width = '60%';
                board_width_px = BoardCreator.get_board_px(59);
                BoardCreator.font_size = '45px';
                break;

            case 'hard':
                cells_in_a_row = 20;
                cells_in_a_collumn = 20;
                BoardCreator.board.style.width = '90%';
                header.style.width = '90%';
                board_width_px = BoardCreator.get_board_px(89);
                BoardCreator.font_size = '45px';
                break;

        }
        
        BoardCreator.cells_in_a_collumn = cells_in_a_collumn;
        BoardCreator.cells_in_a_row = cells_in_a_row;
        return [cells_in_a_row, cells_in_a_collumn, board_width_px];
    },


    get_board_px: function (percentage) {
        // calculate and return cells_in_a_row in px
        percentage_as_decimal = percentage / 100;
        return percentage_as_decimal * window.innerWidth;
    },

    clear_board: function () {
        // clear the board
        BoardCreator.board.innerHTML = ''
    },

    create_buttons: function (board_width_px, i, j, cells_in_a_row) {
        // create buttons to be append to cells
        // this is the clickable buttons on top of the cells
        let button = document.createElement("BUTTON");

        // create unique id
        let string = String(j) + String(i);
        button.id = 'button' + string;

        button.className = 'gift_btn btn_num0';

        //find the button size depends on the board's width
        let button_size = String(board_width_px / cells_in_a_row);

        button.style.width = button_size + 'px';
        button.style.height = button_size + 'px';

        // adjust the position
        button.style.left = String(BoardCreator.cell_left) + "px";
        button.style.top = String(BoardCreator.cell_top) + "px";
        BoardCreator.cell_left += parseInt(button_size);

        button.style.fontSize = BoardCreator.font_size;
        BoardCreator.board.appendChild(button);
        return parseInt(button_size);
    },
};