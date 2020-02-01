export let Timer = {
    // everything relates to Times/time
    timer_interval: null,
    start_timer: function() {
        // start the timer that tracks time from start_time
        let start_time = new Date();
        Timer.timer_interval = setInterval(function () {
            Timer.update_timer(start_time);
        }, 1000);
    },

    update_timer: function (start_time) {
        // update the timer
        let current_time = new Date();
        let elapsed_time = current_time - start_time;
        let second = Math.floor(elapsed_time / 1000) % 60;
        if (second < 10) {
            second = "0" + String(second);
        }

        let minute = Math.floor(elapsed_time / 60000);
        document.getElementById('timer').innerHTML = String(minute) + ":" + String(second);
    },


    save_end_time: function () {
        // stave time of user in sessionStorage

        let time = document.getElementById('timer').innerHTML;
        sessionStorage.setItem("Time", time);
    },

    retrieve_end_time: function () {
        // retrieve the end time of user in sessionStorage
        let time = sessionStorage.getItem("Time");
        return time;
    },

    stop_timer: function () {
        // stop the timer
        clearInterval(Timer.timer_interval);
    },

    reset_timer: function () {
        // reset the timer
        document.getElementById('timer').innerHTML = "0:00";
    }
};
