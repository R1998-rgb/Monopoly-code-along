var board = [
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
    110,
    120,
    130,
    140,
    150,
    160,
];

var player1_Button = document.getElementById("player1");

console.log(player1_Button);

var player2_Button = document.getElementById("player2");

console.log(player2_Button);

var player1_Button = addEventListener("click", rollDice_1);

var player1 = ["RJ", 0, 1000];
var player2 = ["looser", 0, 1000];

function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("Player one rolls", position);
    changePosition_1(player1[1], position);
}

function changePosition_1(old_position, current_position) {
    var newPosition = old_position + current_position;
    player1[1] = newPosition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}

function updateMoney_1(p1) {
    let updateMoney = 0;
    if (p1 < board.length) updateMoney = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }

    console.log(updateMoney);
}



player2_Button = addEventListener("click", rollDice_2);

function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1
    console.log("Player 2 rolls", position)
    changePosition_2(player2[1], position)
}

function changePosition_2(old_position, current_position) {
    var newPosition = old_position + current_position
    player2[1] = newPosition
    console.log(player2[1])
    updateMoney_2(player2[1])
}


function updateMoney_2(p2) {
    let updateMoney = 0
    if (p2 > board.length) {
        updateMoney = player2[2] - board[p2 - 1]
    } else {
        p2 = p2 % 15;
        updateMoney = player2[2] - board[p2 - 1]
    }
    console.log(updateMoney)
}