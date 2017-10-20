var clock;
var sess = true;
var brkTime = 5;
var sesTime = 25;
var clickAudio = new Audio('media/click1.wav');
var bellAudio = new Audio('media/bell.wav');

$(document).ready(function() {

    clock = $('.clock').FlipClock(0, {
        clockFace: 'MinuteCounter',
        countdown: true,
        showSeconds: false,
        autoStart: false,
        callbacks: {
            start: function() {},
            stop: function() {
                if (clock.getTime().time == 0) {
                    if (sess) {
                        // breakTime
                        bellAudio.play();
                        clock.setTime(brkTime * 60);
                        clock.start();
                        $('#info2')[0].innerText = 'Break Time, go get a coffee!';
                    } else {
                        // sessionTime
                        bellAudio.play();
                        clock.setTime(sesTime * 60);
                        clock.start();
                        $('#info2')[0].innerText = 'Session Time';
                    }
                    NProgress.done();
                    NProgress.start();
                    sess = !sess;
                }
            },
            interval: function() {
                if (sess) {
                    NProgress.set(1 - (clock.getTime().time / (sesTime*60)));
                } else {
                    NProgress.set(1 - (clock.getTime().time / (sesTime*60)));
                }
            }
        }
    });

    $('#start1').click(function(e) {
        clickAudio.play();
        if (clock.getTime().time == 0) {
            if (sess) {
                clock.setTime(sesTime * 60);
                $('#info2')[0].innerText = 'Session Time';
            } else {
                clock.setTime(brkTime * 60);
                $('#info2')[0].innerText = 'Break Time, go get a coffee!';
            }
        }
        clock.start();
        NProgress.start();
    });

    $('#stop1').click(function(e) {
        clickAudio.play();
        clock.stop();
    });

    $('#reset1').click(function(e) {
        clickAudio.play();
        clock.stop();
        clock.setTime(sesTime * 60);
        NProgress.done();
        var sess = true;
    });

    $('#add1min').click(function(e) {
        clickAudio.play();
        clock.setTime(clock.getTime().time + 61);
    });


    $('#remBreak').click(function(e) {
        clickAudio.play();
        if (brkTime > 1 && brkTime < 99) {
            brkTime -= 1;
            $('#breakTime')[0].innerText = ('00' + brkTime).slice(-2);
        }
    });

    $('#addBreak').click(function(e) {
        clickAudio.play();
        if (brkTime > 0 && brkTime < 99) {
            brkTime += 1;
            $('#breakTime')[0].innerText = ('00' + brkTime).slice(-2);
        }
    });

    $('#remSession').click(function(e) {
        clickAudio.play();
        if (sesTime > 1 && sesTime < 99) {
            sesTime -= 1;
            $('#sessionTime')[0].innerText = ('00' + sesTime).slice(-2);
        }
    });

    $('#addSession').click(function(e) {
        clickAudio.play();
        if (sesTime > 0 && sesTime < 99) {
            sesTime += 1;
            $('#sessionTime')[0].innerText = ('00' + sesTime).slice(-2);
        }
    });





    //interval
//NProgress.inc(0.2);
//NProgress.remove();
    /*


    */

});
