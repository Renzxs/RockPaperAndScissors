const playerHand = document.getElementById("player");
const botHand = document.getElementById("bot");
const rock = "img/rock.png";
const paper = "img/paper.png";
const scissor = "img/scissor.png";

let player = "";
let bot = "";

let playerScore = 0;
let botScore = 0;

document.getElementById("rock").addEventListener("click", () => {
    playerHand.src = rock;
    player = "rock";
    renderBot();
    
});

document.getElementById("paper").addEventListener("click", () => {
    playerHand.src = paper;
    player = "paper";
    renderBot();
 
});

document.getElementById("scissor").addEventListener("click", () => {
    playerHand.src = scissor;
    player = "scissor";
    renderBot();

});

function renderBot() {
    let rand = Math.floor(Math.random() * 3 + 1);
    switch(rand) {
        case 1:
            botHand.src = rock;
            bot = "rock";
            break;
        case 2: 
            botHand.src = paper;
            bot = "paper";
            break;
        case 3:
            botHand.src = scissor;
            bot = "scissor";
            break;
        default:
            break;
    }

   checkWins();
   checkGameWinner();
}

const pscore = document.getElementById("pscore");
const bscore = document.getElementById("bscore");
const tie = document.getElementById("tie");

function checkWins() {
    if(player == bot) {
        // alert("draw");
        tie.style.visibility = "visible";
    } 
    else if(bot == "rock") {
        tie.style.visibility = "hidden";
        return (player == "paper") ? pscore.textContent = `Score : ${playerScore+=1}` :
        bscore.textContent = `Score : ${botScore+=1}`
        
    } 
    else if(bot == "paper") {
        tie.style.visibility = "hidden";
        return (player == "scissor") ? pscore.textContent = `Score : ${playerScore+=1}` :
        bscore.textContent = `Score : ${botScore+=1}`
    }
    else if(bot == "scissor") {
        tie.style.visibility = "hidden";
        return (player == "rock") ? pscore.textContent = `Score : ${playerScore+=1}` :
        bscore.textContent = `Score : ${botScore+=1}`
    }
}

const dialog = document.getElementById("d");
const gameStatus = document.getElementById("gamestatus");


function checkGameWinner() {
    if(playerScore === 3) {
        dialog.showModal();
        gameStatus.textContent = "YOU WIN!";
    } 
    else if(botScore === 3) {
        dialog.showModal();
        gameStatus.textContent = "YOU LOSE!";
    }
}


document.getElementById("playagain").addEventListener("click", () => {
    playerScore = 0;
    botScore = 0;
    dialog.close();
    pscore.textContent = `Score : ${playerScore}`
    bscore.textContent = `Score : ${botScore}`
    playerHand.src = rock;
    botHand.src = rock;
});