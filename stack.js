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
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      console.log(`no more values `);
      return this;
    }
    if (this.top.next === null) {
      this.top = this.top.next;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return this;
  }
  //isEmpty
  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

const myStack = new Stack();

myStack.push("DISCORD");
myStack.push("udemy");
myStack.push("google");
myStack.push("youtube");
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
//Discord
//Udemy
//google

class ArrayStack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
  peek() {
    return this.array[this.array.length - 1];
  }
}

const arrayStack = new ArrayStack();

arrayStack.push("google");
arrayStack.push("udemy");
arrayStack.push("youtube");
arrayStack.pop();
console.log(arrayStack.peek());
console.log(arrayStack);
3;
