// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.main = new Stack;
    this.other = new Stack;
  }

  add(record) {
    while (this.main.peek()) {
      this.other.push(this.main.pop())
    }
    this.main.push(record);
    while (this.other.peek()) {
      this.main.push(this.other.pop())
    }
  }

  remove() {
    return this.main.pop();
  }

  peek() {
    return this.main.peek();
  }
}

module.exports = Queue;
