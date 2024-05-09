function swapTiles(cell1, cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className =
    document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}

function shuffle() {
  document.getElementById("winner").style.display = "none";
  document.getElementById("solve").style.display = "inline-block";
  for (var row = 1; row <= 4; row++) {
    for (var column = 1; column <= 4; column++) {
      var row2 = Math.floor(Math.random() * 4 + 1);
      var column2 = Math.floor(Math.random() * 4 + 1);
      swapTiles("cell" + row + column, "cell" + row2 + column2);
    }
  }
}

function clickTile(row, column) {
  var cell = document.getElementById("cell" + row + column);
  var tile = cell.className;
  if (tile != "tile16") {
    if (column < 4) {
      if (
        document.getElementById("cell" + row + (column + 1)).className ==
        "tile16"
      ) {
        swapTiles("cell" + row + column, "cell" + row + (column + 1));
        youWin();
        return;
      }
    }
    if (column > 1) {
      if (
        document.getElementById("cell" + row + (column - 1)).className ==
        "tile16"
      ) {
        swapTiles("cell" + row + column, "cell" + row + (column - 1));
        youWin();
        return;
      }
    }
    if (row > 1) {
      if (
        document.getElementById("cell" + (row - 1) + column).className ==
        "tile16"
      ) {
        swapTiles("cell" + row + column, "cell" + (row - 1) + column);
        youWin();
        return;
      }
    }
    if (row < 4) {
      if (
        document.getElementById("cell" + (row + 1) + column).className ==
        "tile16"
      ) {
        swapTiles("cell" + row + column, "cell" + (row + 1) + column);
        youWin();
        return;
      }
    }
  }
}

function youWin() {
  var tile = 0;
  for (var row = 1; row <= 4; row++) {
    for (var column = 1; column <= 4; column++) {
      tile++;
      if (
        document.getElementById("cell" + row + column).className !==
        "tile" + tile
      )
        return;
    }
  }
  document.getElementById("winner").style.display = "block";
  alert("Congratulations! You win!");
  if (window.confirm("Do you want to play again?")) {
    shuffle();
  }
}

function solve() {
  if (window.confirm("Are you sure?")) {
    var tile = 0;
    for (var row = 1; row <= 4; row++) {
      for (var column = 1; column <= 4; column++) {
        tile++;
        document.getElementById("cell" + row + column).className =
          "tile" + tile;
      }
    }
  }
  document.getElementById("solve").style.display = "none";
}
