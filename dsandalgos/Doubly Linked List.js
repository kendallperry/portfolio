// Doubly Linked List

// Only thing that changes for doubly LL is in the Node class.
// The doubly LL has a this.prev in the Node class.  

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            // The one difference from singly LL is connect the prev node
            newNode.prev = this.tail
            this.tail = newNode 
        }
        this.length++
        return this; 
    }
}