// https://www.desmos.com/calculator/q1i5i4mnju

// variables
var backtrack = [];

function solve() {
  
}


// reset

function reset() {
  backtrack = sudoku;
  updateGrid();
}

function clear() {
  backtrack = [];
  for (let i = 0; i < 81; i++) {
    console.log(backtrack);
    backtrack.push(0);
  }
  console.log(backtrack);
}