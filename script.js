let energy = 100;
let xp = 0;
let level = 1;
let aiScore = 0;

let gameStarted = false;

let currentTarget = "";

const missions = [

    {
        text: "An unknown AI drone has entered your network.",
        target: "AI DRONE",
        best: "SCAN"
    },

    {
        text: "A hostile bot is attacking your digital base.",
        target: "HOSTILE BOT",
        best: "DEFEND"
    },

    {
        text: "A rogue AI has exposed a security weakness.",
        target: "ROGUE AI",
        best: "HACK"
    },

    {
        text: "An enemy AI core is vulnerable.",
        target: "AI CORE",
        best: "ATTACK"
    }

];


function startMission() {

    energy = 100;

    xp = 0;

    level = 1;

    aiScore = 0;

    gameStarted = true;

    updateDashboard();

    newMission();

    document.getElementById("result").textContent =
        "🚀 NEURAL LINK ESTABLISHED!";
}


function newMission() {

    const random =
        Math.floor(
            Math.random() * missions.length
        );

    const mission =
        missions[random];

    currentTarget = mission.best;

    document.getElementById("mission").textContent =
        mission.text;

    document.getElementById("target").textContent =
        mission.target;
}


function makeDecision(decision) {

    if (!gameStarted) {

        document.getElementById("result").textContent =
            "⚠️ Start the mission first!";

        return;
    }


    if (decision === currentTarget) {

        xp += 100;

        aiScore += 10;

        energy = Math.min(
            100,
            energy + 5
        );

        document.getElementById("result").textContent =
            "✅ PERFECT DECISION! AI SYSTEM OPTIMIZED.";

    } else {

        xp += 25;

        energy -= 15;

        document.getElementById("result").textContent =
            "⚠️ SUB-OPTIMAL DECISION! ENERGY LOST.";

        if (energy <= 0) {

            gameOver();

            return;
        }
    }


    if (xp >= level * 300) {

        level++;

        document.getElementById("result").textContent =
            "🎉 LEVEL UP! NEURAL CAPACITY INCREASED.";
    }


    updateDashboard();

    setTimeout(
        newMission,
        700
    );
}


function aiPredict() {

    if (!gameStarted) {

        document.getElementById("result").textContent =
            "⚠️ Start the mission first!";

        return;
    }


    document.getElementById("result").textContent =
        "🤖 AI ANALYZING POSSIBLE FUTURES...";


    setTimeout(() => {

        document.getElementById("result").textContent =
            "🤖 AI PREDICTION: " +
            currentTarget +
            " is the optimal decision.";

    }, 900);
}


function gameOver() {

    gameStarted = false;

    document.getElementById("result").textContent =
        "💀 NEURAL LINK LOST! FINAL XP: " +
        xp;
}


function updateDashboard() {

    document.getElementById("energy").textContent =
        energy;

    document.getElementById("xp").textContent =
        xp;

    document.getElementById("level").textContent =
        level;

    document.getElementById("aiScore").textContent =
        aiScore;
}