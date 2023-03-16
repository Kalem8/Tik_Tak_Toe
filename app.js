/*************Take of DOM********************/
let boxes = [...document.getElementsByClassName("boxes")];
let currentPlayer = document.querySelector("#player");
let scorePlayer1 = document.querySelector("#score1");
let scorePlayer2 = document.querySelector("#score2");
let scoreNul = document.querySelector("#scoreNul");

/************** Game data ******************/

let gameState = {
  currentPlayer: 1,
  scorePlayer1: 0,
  scorePlayer2: 0,
  matchNuls: 0,
};
let boxesState = {
  box1: 0,
  box2: 0,
  box3: 0,
  box4: 0,
  box5: 0,
  box6: 0,
  box7: 0,
  box8: 0,
  box9: 0,
};
/**************Game Functions ************************/
function boxChecker(event) {
  const clickedBox = event.target;
  if (boxesState[clickedBox.id] !== 0) {
    return false;
  }
  if (gameState.currentPlayer === 1) {
    clickedBox.innerHTML = "X";
    boxesState[clickedBox.id] = gameState.currentPlayer;
    turnSwitcher();
    verifyVictory();
    victoryAlert();
  } else {
    clickedBox.innerHTML = "O";
    boxesState[clickedBox.id] = gameState.currentPlayer;
    turnSwitcher();
    verifyVictory();
    victoryAlert();
  }
}
function turnSwitcher() {
  if (gameState.currentPlayer === 1) {
    gameState.currentPlayer = 2;
    player.innerHTML = "2";
  } else {
    gameState.currentPlayer = 1;
    player.innerHTML = "1";
  }
}
function verifyVictory() {
  if (
    (boxesState.box1 === boxesState.box2 &&
      boxesState.box2 === boxesState.box3 &&
      boxesState.box1 > 0) ||
    (boxesState.box4 === boxesState.box5 &&
      boxesState.box5 === boxesState.box6 &&
      boxesState.box4 > 0) ||
    (boxesState.box7 === boxesState.box8 &&
      boxesState.box8 === boxesState.box9 &&
      boxesState.box7 > 0) ||
    (boxesState.box1 === boxesState.box4 &&
      boxesState.box4 === boxesState.box7 &&
      boxesState.box1 > 0) ||
    (boxesState.box2 === boxesState.box5 &&
      boxesState.box5 === boxesState.box8 &&
      boxesState.box2 > 0) ||
    (boxesState.box3 === boxesState.box6 &&
      boxesState.box6 === boxesState.box9 &&
      boxesState.box3 > 0) ||
    (boxesState.box1 === boxesState.box5 &&
      boxesState.box5 === boxesState.box9 &&
      boxesState.box1 > 0) ||
    (boxesState.box3 === boxesState.box5 &&
      boxesState.box5 === boxesState.box7 &&
      boxesState.box3 > 0)
  ) {
    return true;
  }  else if (
    boxesState.box1 !== 0 &&
    boxesState.box2 !== 0 &&
    boxesState.box3 !== 0 &&
    boxesState.box4 !== 0 &&
    boxesState.box5 !== 0 &&
    boxesState.box6 !== 0 &&
    boxesState.box7 !== 0 &&
    boxesState.box8 !== 0 &&
    boxesState.box9 !== 0
  ) {
    return null;
  }  else {
    return false;
  }
}
function gameReset() {
  player = 1;
  (boxesState.box1 = 0),
    (boxesState.box2 = 0),
    (boxesState.box3 = 0),
    (boxesState.box4 = 0),
    (boxesState.box5 = 0),
    (boxesState.box6 = 0),
    (boxesState.box7 = 0),
    (boxesState.box8 = 0),
    (boxesState.box9 = 0);
}
/************Game (Null / victory/ defeat) *****************/
function victoryAlert() {
  if (verifyVictory() === true) {
    alert("Gagné");
  } else if (verifyVictory() === null) {
    alert("Null");
  }
}
/******************User actions*****************/
boxes.forEach((box) => box.addEventListener("click", boxChecker));
