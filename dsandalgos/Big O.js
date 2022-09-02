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

// DIFFERENT TERMS FOR INPUTS
// However! This would be O(a + b), since you have different terms for inputs 

function logItemsab(a, b) {
    for (let i = 0; i < a; i++) {
      console.log(i);
    }
  
    for (let j = 0; j < b; j++) {
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

// O(log n) 
// Deals with sorting, you cut in half to find an item
// "Divide and conquer"
// Very efficient, very flat, not quite O(1), but close!


// O n(log n) 
// Some sorting algorithms, as efficient as you can make a sorting algorithm




// ARRAY OPERATIONS
// Push and pop are both O(1) operations, because the index is on the end

let myArray = [11, 3, 23, 7]
myArray.push(17);
myArray.pop();

// Shift is different, since all the items have to be reindexed
// This would be O(n), and n would be the number of items in the array

myArray.shift();
myArray.unshift()

// Put something in at index of 1, remove 0 items, and drop in new item
// Also have to re-index the remainder of the array - still O(n).
myArray.splice(1, 0, 'Hi')

// Search by value in array, is O(n), Search by index is O(1)!
// Index can be disadvantage if you add to beginning of array or putting something in the middle

