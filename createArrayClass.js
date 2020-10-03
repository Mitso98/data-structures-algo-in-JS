class Arr {
  constructor(...data) {
    this.length = 0;
    this.data = {};

    let count = -1;
    for (let d of data) {
      count++;
      this.length++;
      this.data[count] = d;
    }
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop(item) {
    for (let i = this.length; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    delete this.data[this.length + 1];
    this.data[0] = item;

    return this.data;
  }
  del(index) {
    this.length--;

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length];

    return this.data;
  }
}

let arr = new Arr("a", "b", "c");
let arr2 = new Arr("x", "y", "z");
console.log(arr);
console.log(arr2);

console.log(arr.push("d"));
console.log(arr.push("e"));
console.log(arr.push("f"));
console.log(arr.get(0));
console.log(arr.del(0));
console.log(arr.pop("a"));
