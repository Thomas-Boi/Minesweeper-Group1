let BoardCreator = {
    // everything relates to creating board and the board itself

    // BRIEF DESCRIPTION OF BOARD
    // 1. board: the main play area
    // 2. buttons: the part where the user interact with the board.
    // 		       Clicking the button woulddisplay
    //			   a number that tells how many mines are nearby.
    board: document.getElementById('board'),
    default_left: 0,
    default_top: 0,
    btn_size: 0,
    board_width: 0,
    board_height: 0,
    font_size: 0,

    get_board: function () {
        // return the board element
        return BoardCreator.board;
    },


    get_board_width: function () {
		// get the board_width
		return BoardCreator.board_width;
	},


	set_board_width: function (new_width) {
		// set the board_width
		BoardCreator.board_width = new_width;
	},


	get_board_height: function () {
		// get the board_height
		return BoardCreator.board_height;
	},


	set_board_height: function (new_height) {
		// set the board_height
		BoardCreator.board_height = new_height;
    },
    

    create_game_board: function (mode) {
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


    get_board_size: function (mode) {
        // determine board size determines on mode
        let cell_row, cell_col, board_width
        // cell_row is how many cells are in a row
        // cell_col is how many cells are in a col
        if (mode == 'introductory') {
            cell_row = 5;
            cell_col = 5;
            BoardCreator.board.style.width = '40%';
            header.style.width = '40%';
            board_width = this.get_board_px(39);
        }
        else if (mode == 'easy') {
            
                // for laptops
                cell_row = 10;
                cell_col = 10;
                BoardCreator.board.style.width = '40%';
                header.style.width = '40%';
                board_width = this.get_board_px(39);

        } else if (mode == 'medium') {
                // for laptops
                cell_row = 15;
                cell_col = 15;
                BoardCreator.board.style.width = '60%';
                header.style.width = '60%';
                board_width = this.get_board_px(59);
        } else {
                // for laptops
                cell_row = 20;
                cell_col = 20;
                BoardCreator.board.style.width = '90%';
                header.style.width = '90%';
                board_width = this.get_board_px(89);
        }
        BoardCreator.set_board_height(cell_col);
        BoardCreator.set_board_width(cell_row);
        return [cell_row, cell_col, board_width];
    },


    get_board_px: function (percentage) {
        // return board_width in px
        percentage = Math.floor(percentage) / 100;
        return percentage * window.innerWidth;
    },


    create_buttons: function (board_width_px, i, j, cell_row) {
        // create buttons to be append to cells
        // this is the clickable buttons on top of the cells
        let button = document.createElement("BUTTON");

        // create unique id
        let string = String(j) + String(i);
        button.id = 'button' + string;

        button.className = 'gift_btn btn_num0';

        //find the button size depends on the board's width
        let button_size = String(board_width_px / cell_row);

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