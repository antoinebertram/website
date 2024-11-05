var seconds = 1500;
var remainingSeconds;
var resetSeconds = seconds;
var minutes;
var intervalId;
var audio = new Audio('/audio/alarm.wav');

function Pomodoro(){
    SetTimer(1500);
}
function ShortBreak(){
    SetTimer(300);
}
function LongBreak(){
    SetTimer(600);
}
function StartPauseReset(stat){
    if(stat.id == "button_start"){
        intervalId = setInterval(Count,1000);
        document.getElementById("button_start").style.display="none";
        document.getElementById("button_pause").style.display="block";
    }
    if(stat.id == "button_pause"){
        clearInterval(intervalId);
        document.getElementById("button_pause").style.display="none";
        document.getElementById("button_start").style.display="block";
    }
    if(stat.id == "button_reset"){
        Reset(resetSeconds);
   }
}
function Count(){
    if (seconds < 1){
        clearInterval(intervalId);
        Reset(resetSeconds);
        audio.play();
    }
    else{
        seconds--;
        remainingSeconds = seconds % 60;
        minutes = Math.floor(seconds / 60);
    
        if(remainingSeconds < 10 && minutes < 10){
            document.getElementById("pomodoro_timerbox").innerHTML = "0" + minutes + ":0" + remainingSeconds;
        }
        else if(remainingSeconds < 10){
            document.getElementById("pomodoro_timerbox").innerHTML = minutes + ":0" + remainingSeconds;
        }
        else if(minutes < 10){
            document.getElementById("pomodoro_timerbox").innerHTML = "0" + minutes + ":" + remainingSeconds;
        }
        else document.getElementById("pomodoro_timerbox").innerHTML = minutes + ":" + remainingSeconds;
    }
    }

function Reset(resetNumber){
    clearInterval(intervalId);
    document.getElementById("button_pause").style.display="none";
    document.getElementById("button_start").style.display="block";
    
    if(resetNumber == 1500){
        Pomodoro();
    }
    if(resetNumber == 300){
        ShortBreak();
    }
    if(resetNumber == 600){
        LongBreak();
    }
} 
function SetTimer(length){
    clearInterval(intervalId);
    seconds = length;
    resetSeconds = seconds;
    remainingSeconds = seconds % 60;
    minutes = Math.floor(seconds / 60);
    document.getElementById("button_pause").style.display="none";
    document.getElementById("button_start").style.display="block";
    
    if(minutes < 10 && remainingSeconds < 10){
        document.getElementById("pomodoro_timerbox").innerText = "0" + minutes + ":0" + remainingSeconds;
    }
    else document.getElementById("pomodoro_timerbox").innerText = minutes + ":0" + remainingSeconds;
}