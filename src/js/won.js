import {Timer} from "./minesweeper_timer.js";
import "../css/won_css/won.css";
import "../Images/win_background.png";
import "../Fonts/arcadeclassic/ARCADECLASSIC.ttf";

// contains script for won.html
function display_score() {
    // get score from sessionStorage and display it

    let score = Timer.retrieve_end_time();
    document.getElementById("user_score").innerHTML = score;
}

display_score();
document.getElementById('replay').onclick = function () {
	window.close();
};
