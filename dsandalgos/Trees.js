// Trees
// LL is like a tree, but a tree that doesn't fork
// Full -every node points to nothing or two nodes
// Perfect - always be full and complete
// Complete - 
// Nodes that don't have any children are considered "leafs"

// Binary Search Tree

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
}
