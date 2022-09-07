// Doubly Linked List

// Only thing that changes for doubly LL is in the Node class.
// The doubly LL has a this.prev in the Node class.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      // The one difference from singly LL is connect the prev node
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  // For get method, have two pointers depending on where index is in the list
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index)

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

    const newNode = new Node(value)
    let before = this.get(index - 1)
    let after = before.next

    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    
    this.length++
    return true; 
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index > this.length) return false; 

    let temp = this.get(index)
    let before = temp.prev
    let after = temp.next 

    // can also do 
    // temp.prev.next = temp.next
    // temp.next.prev = temp.prev

    before.next = after
    after.prev = before
    temp.next = null
    temp.prev = null

    this.length--;

    return temp

  }


}
