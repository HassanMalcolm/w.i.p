const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 0;

let juicer = new Building('Juicer', 0.1, 15);
let sugar = new Building('Sugar', 1, 100);
let pitcher = new Building('Pitcher', 2, 500);
let water = new Building('Water', 3, 1000);
let ice = new Building('Ice', 4, 1500);
let strawberries = new Building('Strawberries', 5, 2000);
let raspberries = new Building('Raspberries', 10, 5000);
let peach = new Building('Peach', 20, 10000);


let swoleForearms1 = new SwoleArms('Swole Forearms I', 100, juicer);

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += juicer.cps;
    score += sugar.cps;
    score += pitcher.cps;
    score += water.cps;
    score += ice.cps;
    score += strawberries.cps;
    score += raspberries.cps;
    score += peach.cps;
}

function updateButtons() {
    juicer.buttonState();
    sugar.buttonState();
    pitcher.buttonState();
    water.buttonState();
    ice.buttonState();
    strawberries.buttonState();
    raspberries.buttonState();
    peach.buttonState();
    swoleForearms1.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
