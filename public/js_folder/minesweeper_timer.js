let Timer = {
    // everything relates to Times/time
    timer_interval: null,
    start_timer: function() {
        // start the timer that tracks time from start_time
        start_time = new Date();
        Timer.timer_interval = setInterval(function () {
            Timer.update_timer(start_time);
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


    set_end_time: function () {
        // store time of user in sessionStorage

        let time = document.getElementById('timer').innerHTML;
        sessionStorage.setItem("Time", time);
    },

    get_end_time: function () {
        // get the end time of user in sessionStorage
        return sessionStorage.getItem("Time");
    },

    stop_timer: function () {
        // stop the timer
        clearInterval(Timer.timer_interval);
    }
}
