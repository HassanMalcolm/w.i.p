const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 0;

let juicer = new Building('Juicer', 0.1, 15);
let sugar = new Building('Sugar',1 , 100);
let pitcher = new Building('Pitcher', 2, 200);
let water = new Building('Water', 3, 300);
let ice = new Building('Ice', 4, 400);
let strawberries = new Building('Strawberries', 5, 500);
let raspberries = new Building('Raspberries', 10, 1000);
let peach = new Building('Peach', 20, 2000);


let swoleForearms1 = new SwoleArms('Swole Forearms I', 100, juicer);
let masterPour1 = new MasterPour('Master Pour I', 200, sugar);
let masterPour2 = new MasterPour('Master Pour II', 400, water);
let masterPour3 = new MasterPour('Master Pour III', 500, ice);
let perfectInfusion1 = new PerfectInfusion('Perfect Infusion I', 1000, strawberries);
let perfectInfusion2 = new PerfectInfusion('Perfect Infusion II', 1500, raspberries);
let perfectInfusion3 = new PerfectInfusion('Perfect Infusion III', 2500, peach);
let speedServe1 = new SpeedServe('Speed Serve I', 300, pitcher);



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
    masterPour1.buttonState();
    masterPour2.buttonState();
    masterPour3.buttonState();
    perfectInfusion1.buttonState();
    perfectInfusion2.buttonState();
    perfectInfusion3.buttonState();
    speedServe1.buttonState();

}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
