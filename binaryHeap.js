class binaryHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
  }
  getLeftChild(i) {
    return this.heap[1 * i + 1];
  }
  getRightChild(i) {
    return this.heap[2 * i + 2];
  }
}

h = new binaryHeap();

h.insert(100);
h.insert(10);
h.insert(20);
h.insert(5);
h.insert(6);

console.log(h);
console.log(h.getLeftChild(1));
console.log(h.getRightChild(1));
