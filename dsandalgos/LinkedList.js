// LINKED LISTS 

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