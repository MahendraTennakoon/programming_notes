class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.top.value;
  }

  push(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.top = node;
      this.bottom = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) return null;

    this.top = this.top.next;
    if (!this.top) {
      this.bottom = null;
    }

    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

// tests
const s = new Stack();
s.push("Discord");
s.push("Udemy");
s.push("Google");

console.log(s.peek());

s.pop();
s.pop();
s.pop();

console.log(s);
