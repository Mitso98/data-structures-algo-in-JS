class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let node = this.root;
    while (true) {
      if (node.value > value) {
        if (node.left === null) {
          node.left = newNode;
          break;
        }
        node = node.left;
      }
      if (node.value < value) {
        if (node.right === null) {
          node.right = newNode;
          break;
        }
        node = node.right;
      }
    }
  }
  lookup(value) {
    let node = this.root;
    while (true) {
      if (node.value === value) {
        return node;
      }
      if (!node.left && !node.right) {
        return "not found";
      }
      if (node.value > value) {
        node = node.left;
        if (node.value === value) {
          return node;
        }
      }
      if (node.value < value) {
        node = node.right;
        if (node.value === value) {
          return node;
        }
      }
    }
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.value === value) {
        // we have a match

        // Option one: no right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            // if parent > current value , make current.left child of parent.left
            if (parentNode.value > currentNode.value) {
              parentNode.left = currentNode.left;
            } else if (parentNode.value < currentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        }
        // Option two: right child which does not have a left child
        if (currentNode.left === null) {
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            if (parentNode.value > currentNode.value) {
              parentNode.left = currentNode.right;
            } else if (parentNode.value < currentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } // Option three: child that has left and right childs
        else {
          // find minimum value in right approach
          let leftMostParent = currentNode.right; // 1- we go right
          let leftMost = currentNode.right.left; // 2- then we go left

          // 3- loop through left direction to get the last value in subtree which is the lowest
          // note: leftMNost will stop at null because if there is no left child for lrftMostParent
          // we will get minimum right child of the currentNode
          while (leftMost.left !== null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          // every thing is ready let's match values
          leftMostParent.left = leftMost.right;
          leftMost.right = currentNode.right;
          leftMost.left = currentNode.left;

          if (parentNode === null) {
            this.root = leftMost;
          } else {
            if (parent.value > currentNode.value) {
              parent.left = leftMost;
            } else if (parent.value < currentNode.value) {
              parent.right = leftMost;
            }
          }
        }
      }
      return true;
    }
    return false;
  }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree);

console.log(tree.lookup(80));
tree.remove(6);

console.log(tree);
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
