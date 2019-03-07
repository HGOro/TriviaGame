
//function for the TIMER

var timerCounter = 30;

setInterval("timer()", 1000);
console.log(timer);

function timer(){

    timerCounter--;

    $('#timer').text(timerCounter);
};