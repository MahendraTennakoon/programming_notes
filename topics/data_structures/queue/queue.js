class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;

    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const queue = new Queue();

queue.enqueue("Joy");
queue.enqueue("Matt");
queue.enqueue("Pavel");
queue.enqueue("Samir");

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);
