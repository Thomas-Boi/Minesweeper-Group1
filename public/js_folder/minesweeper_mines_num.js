let MinesAndNums = { 
    // everything relates to mines and numbers surrounding them
    minePlacer: function (selected_btn_id) {
        // place mines on the map
        // cells_in_a_row is how many cells are in a row
        // cells_in_a_collumn is how many cells are in a col
        let cells_in_a_row = BoardCreator.get_cells_in_a_row();
        let cells_in_a_collumn = BoardCreator.get_cells_in_a_collumn();

        let mode = MetaData.get_game_mode();

        let total_mine = MinesAndNums.get_mine_numbers(mode);
        let placed_mine = 0;
        while (placed_mine < total_mine) {
            // uses the Random module to select a random row     
            let cell_x_coor = Math.floor(Math.random() * cells_in_a_row);
            // uses the Random module to select a random column     
            let cell_y_coor = Math.floor(Math.random() * cells_in_a_collumn);

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
                MinesAndNums.number_surroundings(cell_x_coor, cell_y_coor);
                placed_mine++;
            }
        }
    },


    get_mine_numbers: function (mode) {
        // get number of mines depend on mode
        let mines;

        switch(mode) {
            case ('intro'):
                mines = 4;
                break;

            case ('easy'):
                mines = 10;
                break;

            case ('medium'):
                mines = 20;
                break;

            case ('hard'):
                mines = 30;

            default:
                mines = 1;
        };
        
        return mines;
    },


    number_surroundings: function (cell_x_coor, cell_y_coor) {
        // increase the number by one in cells surrounding a mine
        let cells_in_a_collumn = BoardCreator.get_cells_in_a_collumn();
        let cells_in_a_row = BoardCreator.get_cells_in_a_row();

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
            if (x_values < 0 || x_values == cells_in_a_row) {
                continue;
            }
            for (j = 0; j < cell_y_coor_values.length; j++) {
                y_values = cell_y_coor_values[j];

                // check to make sure the y_values is in boundary
                if (y_values < 0 || y_values == cells_in_a_collumn) {
                    continue;
                }

                // get a surrounding cell's button
                let surrounding_button = document.getElementById('button'
                + String(x_values) + String(y_values));

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
        for (let j = 0; j < 8; j++) {
            if (number === colour_num_list[j][0]) {
                element.style.color = colour_num_list[j][1];
            };
        };
    },

}
