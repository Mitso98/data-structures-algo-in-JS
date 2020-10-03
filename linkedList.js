// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  preAppend(value) {
    const newHead = new Node(value);
    this.head.prev = newHead;
    newHead.next = this.head;
    this.head = newHead;
    this.length++;

    return this;
  }

  printList() {
    const showList = [];
    let next = this.head;
    while (next !== null) {
      showList.push(next.value);
      next = next.next;
    }
    return showList;
  }

  insertProtoType(index, Value) {
    /*
      creat a constant that keeps recording every node at the main object then at a certain point adds the new 
      value then continue adding the rest of the main object, then reassign the main object to the new constant
      
      Note:
        this method is less efficient than the one created at the course,
        regarding time complexity >>> it loops over the entire main object,
        regarding space comp >>> it doubles the data,
        moreover the code is cleaner
        ------------

        the one created at the course:
          loops over the items untill it reaches the leader node before the targted index,
          holds the index at the target
          shift it to the right
          add the targted value between leader and shifted values
    */

    // Note paramter Value is capitalized to differantiate it from the propirty value
    // Check
    if (index < 0 || index > this.length) {
      return "wrong index";
    }

    if (index === 0) {
      return this.printList(this.preAppend(Value));
    }

    let next = this.head;
    let i = 0;
    let collectorObj = new Node(next.value);
    let collectorTail = collectorObj;

    while (next !== null) {
      i++;

      if (i === index) {
        collectorTail.next = new Node(Value);
        // next node
        collectorTail = collectorTail.next;
        this.length++;
      }

      // next node
      next = next.next;

      if (next !== null) {
        collectorTail.next = new Node(next.value);
      }
      // next node
      collectorTail = collectorTail.next;
    }

    this.head = collectorObj;

    return this.printList();
  }

  insertSmart(index, value) {
    // Check
    if (index === this.length) {
      return this.append(value);
    }
    if (index < 0 || index > this.length) {
      return "Wrong Index";
    }
    if (index === 0) {
      return this.preAppend(value);
    }
    // create new node wit the new value
    const newNode = new Node(value);
    // grab the node before the targeted index
    const leader = this.traverseToIndex(index - 1);
    // assign prev properity at the new node
    newNode.prev = leader;
    // assign prev at the value after the leader with the new value
    leader.next.prev = newNode;
    // hold nodes after new values
    const holdingPointer = leader.next;
    // reassign the value after the leader with the new one
    leader.next = newNode;
    // match the rest of the data with the first part and new part
    newNode.next = holdingPointer;
    this.length++;

    return this.printList();
  }

  remove(index) {
    //check
    if (index < 0 || index >= this.length) {
      // if negative number
      return "wrong index";
    }
    if (index === 0) {
      this.head = this.head.next;
      return this.printList();
    }

    const leader = this.traverseToIndex(index - 1);
    const unwatned = leader.next.next;
    leader.next = unwatned;
    this.length--;
    console.log(">>>", this);
    return this.printList();
  }

  traverseToIndex(index) {
    let i = 0;
    let next = this.head;

    while (i !== index) {
      next = next.next;
      i++;
    }
    return next;
  }

  reverse() {
    // [10,20,30,40]
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(14);
myLinkedList.preAppend(99);
console.log(myLinkedList.printList());
//console.log(myLinkedList.insertProtoType(5, 888));
console.log(myLinkedList.insertSmart(3, 1111));
//console.log(myLinkedList.remove(5));

console.log(myLinkedList.reverse());
