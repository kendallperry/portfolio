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
