// Stacks & Queues 

// For this, using LL with Stacks. 
// Use beginning for LL, because both adding and removing are O(1)
// For arrays, always use the end though! 

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    //O(1)
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode 
        } else {
            newNode.next = this.top 
            this.top = newNode; 
        }
        this.length++
        return this; 
    }

    // O(1)
    pop() {
        if (this.length === 0) return undefined
        let temp = this.top
        this.top = this.top.next 
        temp.next = null 

        this.length--; 
        return temp; 
    }
}

// QUEUE!

class QNode {
    constructor(value) {
        this.value = value
        this.next = null 
    }
}

class Queue {
    constructor(value) {
        const newNode = new QNode(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }

    // super similar to the .push() method!!  
    enqueue(value) {
        const newNode = new QNode(value);
        if (this.length === 0) { 
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this; 
    }

    dequeue() {
        if (this.length === 0) return undefined 
        let temp = this.first
        if (this.length === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next 
            temp.next = null
        }
        this.length--
        return temp; 
    }
}