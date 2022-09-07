// LINKED LISTS 

const { PitchShift } = require("tone")

// Arrays have indexes, LL don't 
// LL have spaces in memory, arrays are in one place - contiguous place in memory (Linked Lists can be all over the place!)
// LL has a HEAD and a TAIL for first and last item
// Each item in the list points to the next, tail points to NULL

// Big O of Linked Lists... 

// What is the node? its the VALUE and the POINTER
// Node is an object like below
{
    value: 4,
    next: null // next would be another node that it points to
}

// Constructor 

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
}

// Creating a linked list here 
let myLinkedList = new LinkedList(4);

// Constructor below creates a new node 
// Class for a node here
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const newNode = new Node(4);

// PUSH METHOD - O(1)

push(value) {
    const newNode = new Node(value)
    // first checks if the linked list is empty
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode; 
    } else {
        // point current tail to the new node
        this.tail.next = newNode;
        // now point the tail to the new node 
        this.tail = newNode; 
    }
    this.length++
    // return this returns the entire linked list 
    return this 
}

// POP METHOD - O(n)

// Edge cases, if LL is NULL or has only ONE item.
// Need to start at the head, until you can point the tail to set equal to the node before. 
// Use temp variables to keep track of variables

pop() {
    // if the head is null, or this.length === 0, return undefined
    if (!this.head) return undefined
    
    let temp = this.head
    let pre = this.head 

    while (temp.next) {
        // moves to the one before temp.next, temp moves to next
        pre = temp
        temp = temp.next
    }
    // AFTER WHILE LOOP
    this.tail = pre; 
    // breaks the last of the LL off to set equal to null
    this.tail.next = null;
    this.length--;

    // AFTER decrementing the length, accounts for a LL with a length of 1!
    if (this.length === 0) {
        this.head = null
        this.tail = null 
    }

    // the item that was popped off the LL 
    return temp; 
}


// UNSHIFT METHOD 
// Create a new node, set equal to the head 

unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode; 
    }
    this.length++
    return this;
}

// SHIFT METHOD 
// move head over, and return the removed item 

shift() {
    if (!this.head) return undefined 
        let output = this.head
        this.head = this.head.next
        // set temp var equal to NULL so it doesn't return the list
        output.next = null; 
        this.length--
        // *after* decrementing length, if the LL was already at one, now head.next is null but tail needs to also be set to null
        if (this.length === 0) {
            this.tail = null; 
        }
        return output; 
}

// GET METHOD 

get(index) {
    // anything less than or above the length
    if (index < 0 || index >= this.length) {
        return undefined;
    }
    let temp = this.head
    for (let i = 0; i < index; i++) {
        temp = temp.next 
    }
    return temp; 
}

set(index, value) {
    if (index < 0 || index >= this.length) {
        return undefined; 
    }
    let temp = this.head
    for (let i = 0; i < index; i++) {
        temp = temp.next 
    }
    temp.value = value; 
    return this; 
}
// OR WITH GET METHOD!! Reuse the code.  
set(index, value) { 
    let temp = this.get(index)
    // if the temp is not undefined!
    if (temp) {
      temp.value = value; 
      return true; 
    }
    return false; 
}

insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    let temp = this.get(this.index - 1); 

    // reassign pointers
    newNode = temp.next; 
    temp.next = newNode; 
    this.length++;
    return true; 
}

remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop(); 
    if (index < 0 || index >= this.length) return undefined;

    let before = this.get(index - 1);
    let temp = before.next; 

    before.next = temp.next
    temp.next = null; 
    this.length--; 

    return temp; 
}