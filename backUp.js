class o {
  remove(value) {
    return this.directLeader(value);
  }

  traverse(value) {
    let lastNode = this.root;
    let leader = this.root;
    let target = this.root;
    let follower = this.root;

    if (!this.root.right && target === this.root) {
      this.traverseLeftOnly(value);
    } else if (!this.root.left && target === this.root) {
      this.traverseRightOnly(value);
    }

    while (true) {
      //if one of the sides does not exist
      if ((value >= lastNode.value && lastNode.right) || !lastNode.left) {
        //right side
        console.log("traverse if");
        lastNode = lastNode.right;

        if (target.value !== value) {
          target = target.right;
        }
        if (
          leader.right.value !== target.value &&
          leader.value < target.value &&
          leader.left.value !== target.value
        ) {
          leader = leader.right;
        } else if (
          leader.right.value !== target.value &&
          leader.value > target.value &&
          leader.left.value !== target.value
        ) {
          leader = leader.left;
        } else if (
          follower.left.value !== lastNode.value &&
          follower.right.value !== lastNode.value
        ) {
          if (lastNode.value < follower.value) {
            follower = follower.left;
          } else {
            follower = follower.right;
          }
        }
      } else {
        // left side
        console.log("traverse else");
        lastNode = lastNode.left;

        if (target.value !== value) {
          target = target.left;
        }
        if (
          leader.left.value !== target.value &&
          leader.value > target.value &&
          leader.right.value !== target.value
        ) {
          leader = leader.left;
        } else if (
          leader.left.value !== target.value &&
          leader.value < target.value &&
          leader.right.value !== target.value
        ) {
          leader = leader.right;
        } else if (
          follower.left.value !== lastNode.value &&
          follower.right.value !== lastNode.value
        ) {
          if (lastNode.value < follower.value) {
            follower = follower.left;
          } else {
            follower = follower.right;
          }
        }
      }
      // break
      if (!lastNode.left && !lastNode.right) {
        return [leader, target, lastNode, follower];
      }
    }
  }
  traverseLeftOnly(value) {
    let lastNode = this.root;
    let leader = this.root;
    let target = this.root;
    let follower = this.root;

    while (true) {
      // left side
      console.log("traverse else");
      lastNode = lastNode.left;
      if (target.value !== value) {
        target = target.left;
      }
      if (
        leader.left.value !== target.value &&
        leader.value > target.value &&
        leader.right.value !== target.value
      ) {
        leader = leader.left;
      } else if (
        leader.left.value !== target.value &&
        leader.value < target.value &&
        leader.right.value !== target.value
      ) {
        leader = leader.right;
      } else if (
        follower.left.value !== lastNode.value &&
        follower.right.value !== lastNode.value
      ) {
        if (lastNode.value < follower.value) {
          follower = follower.left;
        } else {
          follower = follower.right;
        }
      }
      // break
      if (!lastNode.left && !lastNode.right) {
        return [leader, target, lastNode, follower];
      }
    }
  }

  directLeader(value) {
    const values = this.traverse(value);
    let leader = values[0];
    let target = values[1];
    let lastNode = values[2];
    let follower = values[3];

    console.log(leader.value, target.value, follower.value, lastNode.value);
    // remove first item
    //     9
    //  4     20
    //1  6  15  170
    if (value === this.root.value) {
      let result = lastNode;
      if (follower.right.value === lastNode.value) {
        follower.right = null;
      } else {
        follower.left = null;
      }
      result.left = this.root.left;
      result.right = this.root.right;
      this.root = result;
      return this;
    }

    if (target.value === lastNode.value) {
      // if remove last item
      if (leader.left.value === target.value) {
        leader.left = null;
        return this;
      } else {
        leader.right = null;
        return this;
      }
    }

    if (lastNode.value > leader.value) {
      var direction = "right";
    } else {
      var direction = "left";
    }

    if (target.right.value === lastNode.value) {
      // target.left
      if (target.left.value > lastNode.value) {
        lastNode.right = target.left;
        leader[direction] = lastNode;
      } else {
        lastNode.left = target.left;
        leader[direction] = lastNode;
        console.log(leader[direction]);
      }
    } else if (target.left.value === lastNode.value) {
      // target.right
      if (target.left.value > lastNode.value) {
        lastNode.right = target.right;
        leader[direction] = lastNode;
      } else {
        lastNode.left = target.right;
        leader[direction] = lastNode;
      }
    }
  }
}
