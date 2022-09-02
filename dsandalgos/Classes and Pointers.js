// Classes are like a cookie cutter, always takes a constructor

class Cookie {
    constructor(color) {
        this.color = color; 
    }

    getColor() {
        return this.color; 
    }

    setColor(color) {
        this.color = color;
    }
}

let cookieOne = new Cookie('green'); 
let cookieTwo = new Cookie('blue');

cookieOne.getColor(); //getting color for this cookie
cookieOne.setColor('yellow'); // sets to yellow 

// All Data Structures will use classes!! 

class LinkedList {
    constructor(value) {...}

    push(value) {}
    unshift(value) {}
    insert(index, value) {}
    remove(index) {}
    pop() {}
    shift() {}
}

let myLinkedList = new LinkedList(23); 
myLinkedList.push(7)
myLinkedList.unshift(13)
myLinkedList.insert(1, 11) 
myLinkedList.remove(3) // et cetera! 


// POINTERS 
// obj1 points to this object 

let obj1 = {
    value: 11
}

// make obj2 point to the same object as obj1 in memory
let obj2 = obj1;

let obj3 = {
    value: 57
}

obj2 = obj3; 