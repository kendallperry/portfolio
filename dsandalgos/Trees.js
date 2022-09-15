// Trees
// LL is like a tree, but a tree that doesn't fork
// Full -every node points to nothing or two nodes
// Perfect - always be full and complete
// Complete - 
// Nodes that don't have any children are considered "leafs"

// Binary Search Tree
// ** if you have a scenario that might have a duplicate, you can add count to the Node class to increase the amount if you see another node with the same value

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null 
    }
}

// not creating a new node at time to create tree
class BST {
    constructor() {
        this.root = null  
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this 
        }
        let temp = this.root 

        while (true) {
            if (newNode.value === temp.value) return undefined
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                } 
                temp = temp.left 
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }
}
