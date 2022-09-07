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

    pop() {
        if (this.length === 0) return undefined 
        let temp = this.tail 
        if (this.length === 1) {
            this.head = null
            this.tail = null 
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--        
        return temp 
    }

    unshift(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode 
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode 
        }
        this.length++
        return this; 
    }

    shift() {
        if (this.length === 0) return undefined 
        let temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next 
            this.head.prev = null
            temp.next = null 
        }
        this.length--
        return temp 
    }

    get(index) {
        
    }


}