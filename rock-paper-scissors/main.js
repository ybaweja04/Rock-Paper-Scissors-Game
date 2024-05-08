let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = { wins: 0, loses: 0, ties: 0 };
}

function updateScore(){
    document.querySelector('.js-score').
    innerHTML = `Wins : ${score.wins} || Loses : ${score.loses} || Ties : ${score.ties}`;
}
updateScore();
function playGame(playerMove) {
    pickCompMove();
    let results = "";
    if (playerMove === "scissors") {
        if (compMove === "paper") {
            results = "You Win &#128512;";
        } else if (compMove === "scissors") {
            results = "It's a Tie &#128529;";
        } else if (compMove === "rock") {
            results = "You Lost &#128557;";
        }
    } else if (playerMove === "rock") {
        if (compMove === "rock") {
            results = "It's a Tie &#128529;";
        } else if (compMove === "paper") {
            results = "You Lost &#128557;";
        } else if (compMove === "scissors") {
            results = "You Win &#128512;";
        }
    } else if (playerMove === "paper") {
        if (compMove === "paper") {
            results = "It's a Tie &#128529;";
        } else if (compMove === "scissors") {
            results = "You Lost &#128557;";
        } else if (compMove === "rock") {
            results = "You Win &#128512;";
        }
    }
    if (results === "You Win &#128512;") {
        score.wins++;
    } else if (results === "You Lost &#128557;") {
        score.loses++;
    } else if (results === "It's a Tie &#128529;") {
        score.ties++;
    }
    localStorage.setItem("score", JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = results;
    document.querySelector('.js-moves').innerHTML = `You <img src="${playerMove}-emoji.png" 
    class="move-icon"> 
    Computer <img src="${compMove}-emoji.png" class="move-icon">`;
}
let compMove = "";
function pickCompMove() {
    const randomVar = Math.random();
    if (randomVar >= 0 && randomVar < 1 / 3) {
        compMove = "rock";
    } else if (randomVar >= 1 / 3 && randomVar < 2 / 3) {
        compMove = "paper";
    } else if (randomVar >= 2 / 3 && randomVar < 1) {
        compMove = "scissors";
    }
    console.log(compMove);
}

function resetScore() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.setItem("score", JSON.stringify(score));
    updateScore();
}