//let numButtonClicks = 0;
let text = ["Klik nog een keer.",
            "Heb je er wel echt zin in?",
            "Stop eens met klikken!",
            "Als je er echt zoveel zin in had, dan had je wel meer geklikt...",
            "Wat ben je nou aan het doen?",
            "Is dit hoe jij je tijd verdrijfd?",
            "YEAHHHHHHH!!!",
            ":)",
            "Ik heb die klik niet geregistreed, klik nog een keer.",
            "Volgens mij gebeurt er nu niks?"];
let repeated = 0;
function buttonClicked() {
    let x = randomInt(0,9);
    if(repeated != x){
        document.getElementById("mainDiv").textContent = text[x];
    }
    else{
        buttonClicked();
        console.log("random int was the same as the previous int");
    }
    repeated = x;
}

function randomInt(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}
