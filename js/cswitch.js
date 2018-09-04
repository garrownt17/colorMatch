//create array of boxes
var box = document.getElementsByClassName("color-box");

function swapColor() {
  //test console.log("working on " + box.length + " elements...");

  for(var i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = "red";
  }
  var compCell = Math.floor(Math.random() * 6);
  if (compCell == 9) {compCell -= 2;};
  console.log(compCell);
  box[compCell].style.backgroundColor = "blue";

  return compCell;
}

function switchColor(userCell) {
  box[userCell].style.backgroundColor = "orange";

  return userCell
}

//user selects cell, computer chooses cell, if they match, cell turns green. if no match, game restarts and says no match
function guessColor () {
  var userCell = 2;
  var compCell = compChoose();

  console.log("You selected the " + (userCell + 1) + " cell. The computer chose the " + (compCell + 1) + " cell.");
}
