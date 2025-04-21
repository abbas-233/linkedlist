import Node from "./Node.js";

export default class LinkedList {
  // Constructor initializes the linked list with no head node
  constructor() {
    this.head = null;
  }

  // Appends a new node with the given value to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  // Prepends a new node with the given value to the start of the list
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  // Returns the total number of nodes in the list
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  // Returns the first node in the list
  head() {
    return this.head;
  }

  // Returns the last node in the list
  tail() {
    if (!this.head) return null;
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  // Returns the node at the specified index, or null if not found
  at(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }
    return null;
  }

  // Removes the last node from the list
  pop() {
    if (!this.head) return;
    if (!this.head.nextNode) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  // Checks if the list contains a node with the given value
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  // Finds and returns the index of the node with the given value, or null if not found
  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      index++;
      current = current.nextNode;
    }
    return null;
  }

  // Returns a string representation of the linked list
  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += ` ( ${current.value} ) ->`;
      current = current.nextNode;
    }
    string += " null";
    return string;
  }

  // Inserts a new node with the given value at the specified index
  insertAt(value, index) {
    if (index < 0) return;
    const newNode = new Node(value);
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let count = 0;
    while (current && count < index - 1) {
      current = current.nextNode;
      count++;
    }
    if (current) {
      newNode.nextNode = current.nextNode;
      current.nextNode = newNode;
    }
  }

  // Removes the node at the specified index
  removeAt(index) {
    if (!this.head || index < 0) return;
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    let current = this.head;
    let count = 0;
    while (current.nextNode && count < index - 1) {
      current = current.nextNode;
      count++;
    }
    if (current.nextNode) {
      current.nextNode = current.nextNode.nextNode;
    }
  }
}
