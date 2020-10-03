class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
      this.length++;
      return this;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return console.log("no more items");
    }
    if (this.first.next) {
      this.first = this.first.next;
      this.length--;
      return this;
    }
    this.first = null;
    this.last = null;
    this.length--;
    return this;
  }
}

const q = new queue();

q.enqueue("one");
q.enqueue("two");
q.enqueue("three");
q.enqueue("four");
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();

console.log(q);
