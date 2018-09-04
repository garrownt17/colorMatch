/*
Project Name: Color Switch
Developer: Nathan Garrow
Goal: user selects cell, computer chooses cell, if they match, cell turns green. if no match, game restarts and says no match
*/

//create array of boxes
var box = document.getElementsByClassName("color-box");
var newGame = true;

function colorGame () {
  document.getElementById("gameStartBtn").style.display = "none"; //remove start game button

  //game selections
  var userCell = 1;
  var compCell = 0;
  var gameBtn = document.getElementsByClassName("color-button");

  //write instructions with message
  var user = document.getElementById("user");
  var computer = document.getElementById("computer");
  var results = document.getElementById("results");

  //get user selection
  user.innerHTML = "Choose 1 box";

/*  if(gameBtn != null) {
    for(var i = 0; i < gameBtn.length; i++) {
      gameBtn[i].addEventListener("click", function userChoose() {
        userCell = i;
        gameBtn[i].style.backgroundColor = "orange";
        break;
      });
    }
    setTimeout(userChoose(), 4000);
  }*/
}

function userChoose(cell) {
  if(newGame){
    var userCell = cell;

    user.innerHTML = "You chose cell " + (userCell + 1) + ".";

    //make computer selection - works
    var compCell = compChoose();
    console.log(compCell);
    //check for match

    if(userCell == compCell) {
      box[userCell].style.backgroundColor = "green";
    computer.innerHTML = "The computer also chose cell " + (compCell + 1) + ".";
    results.innerHTML = "You Win!";
    } else {
      for(var i = 0; i < box.length; i++) {
      box[i].style.backgroundColor = "purple";
      }
      computer.innerHTML = "The computer chose cell " + (compCell + 1) + ".";
      results.innerHTML = "No Match :(";
    }
    document.getElementById("resetBtn").style.display = "initial";

    newGame = false;
  } else {
    user.innerHTML = "";
    computer.innerHTML = "";
    results.innerHTML = "Please select Play Again? to reset the game.";
  }
}

function compChoose() {
  var compCell = Math.floor(Math.random() * 4);

  return compCell;
}

function resetForm()  {
  var totalElem = document.getElementById('resetBtn');
  totalElem.innerHTML = result;
}
