// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0)
  }

  size() {
    let counter = 0
    let node = this.head
    while (node) {
      counter++
      node = node.next
    }
    return counter
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head
    while (node && node.next) {
      node = node.next
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head ? this.head = this.head.next : null
  }

  removeLast() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null
    } else {
      let node = this.head
      while (node.next) {
        node.next.next ? node = node.next : node.next = null
      }
    }
  }

  insertLast(data) {
    const newNode = new Node(data);
    this.head ? this.getLast().next = newNode : this.head = newNode
  }

  getAt(index) {
    if (index < 0 || !this.head) {
      return null
    }
    let node = this.head
    for (let counter = 0; counter < index; counter++) {
      if (!node.next) {
        return null
      } else {
        node = node.next
      }
    }
    return node
  }

  removeAt(index) {
    if (!this.getAt(index)) {
      return null
    } else if (index === 0) {
      this.removeFirst();
    } else {
      const node = this.getAt(index)
      const prevNode = this.getAt(index - 1);
      prevNode.next = node.next;
    }
  }

  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head)
    } else {
      const nextNode = this.getAt(index)
      const prevNode = this.getAt(index - 1)
      if (prevNode) {
        prevNode.next = new Node(data, nextNode)
      } else {
        this.insertLast(data)
      }
    }
  }

  forEach(fn) {
    if (!this.head) {
      return null
    }

    let node = this.head

    while (node) {
      fn(node)
      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while(node) {
      yield node
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
