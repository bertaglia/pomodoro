
$(document).ready(function() {

    var clock;

    clock = $('.clock').Flipcountdown(10, {
        clockFace: 'MinuteCounter',
        countdown: true,
        autoStart: false
    });


});    

/*
    countdown.stop = function(){
        if (countdown.timer.time == 0) {
            alert('reset');
            countdown.reset();
        }

    }
*/

    //var c = countdown.timer.on('stop' function() {
    //	alert('stoped');
    //});

    //<button class="start">Start countdown</button>
    //<button class="stop">stop</button>
    //<button class="alerta">+1 min</button>
/*
    $('.start').click(function(e) {
        countdown.start();
    });

    $('.stop').click(function(e) {
        countdown.stop( );

        });
    });

    $('.alerta').click(function(e) {

        countdown.setTime(500)    ;



        var timer  = countdown.getTime();
        console.log(timer.time);
        countdown.setTime(timer.time + 60);
        console.log(timer.time);
        //countdown.setTime(time + 60);
    });

});
*/

/*
$(document).ready(function() {
    countdown = new Flipcountdown($('.countdown'), 10, {
        countdownFace: 'Counter',
        autoStart: true,
        countdown: true,
        callbacks: {
            stop: function() {
                countdown.setTime(10);
                countdown.start();
            }
        }
    });

});

*/
