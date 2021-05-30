class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }

  isEmpty() {
    return this.array.length === 0;
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
