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
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return node;
    }

    let pointer = this.root;
    while (true) {
      if (value === pointer.value) {
        return this;
      }
      if (value > pointer.value) {
        if (!pointer.right) {
          pointer.right = node;
          break;
        } else {
          pointer = pointer.right;
        }
      } else if (value < pointer.value) {
        if (!pointer.left) {
          pointer.left = node;
          break;
        } else {
          pointer = pointer.left;
        }
      }
    }
  }

  lookup(value) {
    let pointer = this.root;
    if (!pointer) {
      return false;
    }

    while (pointer) {
      if (pointer.value === value) {
        return pointer;
      } else if (pointer.value < value) {
        pointer = pointer.right;
      } else if (pointer.value > value) {
        pointer = pointer.left;
      }
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
tree.insert(1);

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

console.log(tree.lookup(1));
