// writing a simple queue class along with the textbook

class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = [];
  }
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  size() {
    return this.count - this.lowestCount;
    //return this.items.length;
  }
  clear() {
    this.items = [];
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

// let q = new Queue();
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.dequeue();
// q.dequeue();
// console.log(q.size());

module.exports = {
  Queue,
};
