let Time = {
    // everything relates to Times/time
    timer_interval: null,
    start_timer: function() {
        // start the timer that tracks time from start_time
        start_time = new Date();
        Time.timer_interval = setInterval(function () {
            Time.update_timer(start_time);
        }, 1000);
    },

    update_timer: function (start_time) {
        // update the timer
        current_time = new Date();
        elapsed_time = current_time - start_time;
        second = Math.floor(elapsed_time / 1000) % 60;
        if (second < 10) {
            second = "0" + String(second);
        }

        minute = Math.floor(elapsed_time / 60000);
        document.getElementById('timer').innerHTML = String(minute) + ":" + String(second);
    },


    get_end_time: function () {
        // get the time of the user and store it in sessionStorage

        let Time = document.getElementById('timer').innerHTML;
        sessionStorage.setItem("Time", Time);
    },

    stop_timer: function () {
        // stop the timer
        clearInterval(Time.timer_interval);
    }
}
