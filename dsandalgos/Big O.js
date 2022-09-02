// O(n)
// Passed it 10, and it outputs ten things.

function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

logItems(10);

// Drop constants
// n + n, would make it O(2n),
// Drop the constant and it would be O(n)

function logItems2(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}

// O(n^2)
// This would be n * n

function logItems3(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// If you would put another nested for loop, it would be n^3


// Drop Non-Dominants 
// Nested for loop ran O(n^2), second for loop was O(n);
// O(n^2 + n), would just be O(n^2)

function logItems4(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j) 
        }       
    } 

    for(let k = 0; k < n; k++) {
        console.log(k)
    }
}


// O(1)
// This is just one operation, so it's O of 1. "Constant Time"
// If you added n + n + n, it would be O(2), which is still O(1).
// The MOST efficient Big O. Constant time!

function addItems(n) {
    return n + n;
}
