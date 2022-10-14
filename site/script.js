// https://www.desmos.com/calculator/q1i5i4mnju

// variables
// initialize with sample board
var backtrack = [0,3,0,9,8,4,2,0,0,0,0,9,0,0,7,0,0,3,8,0,0,0,0,0,9,0,0,0,0,6,0,0,2,0,1,0,2,0,0,7,0,5,6,3,0,0,0,0,0,9,0,4,0,8,0,6,2,0,0,0,5,0,0,1,0,0,0,0,0,0,7,0,3,0,4,0,6,1,0,0,0];
var sudoku = [0,3,0,9,8,4,2,0,0,0,0,9,0,0,7,0,0,3,8,0,0,0,0,0,9,0,0,0,0,6,0,0,2,0,1,0,2,0,0,7,0,5,6,3,0,0,0,0,0,9,0,4,0,8,0,6,2,0,0,0,5,0,0,1,0,0,0,0,0,0,7,0,3,0,4,0,6,1,0,0,0];
var solved = false;

// main

function solveSudoku() {
  setInterval(() => {
    solved ? 0 : cLogic();
  },200)
}

// reset

function reset() {
  console.log("reset");
  backtrack = sudoku;
  updateGrid();
}

function clear() {
  console.log("clear");
  backtrack = [];
  for (let i = 0; i < 81; i++) {
    console.log(backtrack);
    backtrack.push(0);
  }
  console.log(backtrack);
}

// grid
// oh boy

let tSize