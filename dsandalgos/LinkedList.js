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
