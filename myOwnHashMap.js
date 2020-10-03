class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = hash + ((key.charCodeAt(i) * i) % this.data.length);
    }
    return hash;
  }

  set(key, value) {
    const adress = this._hash(key);
    if (!this.data[adress]) {
      this.data[adress] = [];
    }
    this.data[adress].push([key, value]);
    return this.data;
  }

  get(key) {
    const adress = this._hash(key);
    const currentBucket = this.data[adress];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
      return undefined;
    }
  }

  keys(keyOrValue = 0) {
    let keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][keyOrValue]);
        }
      }
    }
    return keysArray;
  }

  values() {
    return this.keys(1);
  }
}

const myHashTable = new HashTable(1);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.set("apples", 9));
console.log(myHashTable.get("apples"));
console.log(myHashTable.keys());
console.log(myHashTable.values());
