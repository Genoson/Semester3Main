//extending the binary search tree file into an avl self balancing tree

const { BinarySearchTree } = require("../Week6/trees");

// converting balance factor numbers into strings
const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
  //first we define the necessary functions to handle the balancing
  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }
  getBalanceFactor(node) {
    const heightDifference =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }
  //now we define the insert function
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }
  insertNode(node, key) {
    if (node == null) {
      return new Node(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node;
    }
    // balancing step of insertion now
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        return this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        return this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }
    return node;
  }
  // avl remove function
  removeNode(node, key) {
    node = super.removeNode(node, key);
    if (node == null) {
      return node;
    }
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left);
      if (
        balanceFactorLeft === BalanceFactor.BALANCED ||
        balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationLL(node);
      }
      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right);
      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationRR(node);
      }
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node.right);
      }
    }
    return node;
  }
}

// testing the avl tree

const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(5);
avlTree.insert(15);
avlTree.insert(3);
avlTree.insert(7);
avlTree.insert(1);
avlTree.insert(13);
avlTree.insert(17);
avlTree.insert(11);
avlTree.insert(14);
const printNode = (value) => console.log(value);

avlTree.inOrderTraverse(printNode);
console.log("avl tree height: ", avlTree.getNodeHeight(this.root));
console.log(avlTree.min());
console.log(avlTree.max());

// red black tree, we didnt directly cover this, just copied out the code for understanding.
// needs troubleshooting

// class RedBlackNode extends Node {
//   constructor(key) {
//     super(key);
//     this.key = key;
//     this.color = Colors.RED; // {6}
//     this.parent = null; // {7}
//   }

//   isRed() {
//     return this.color === Colors.RED;
//   }
// }

// class RedBlackTree extends BinarySearchTree {
//   constructor(compareFn = defaultCompare) {
//     super(compareFn);
//     this.compareFn = compareFn;
//     this.root = null;
//   }
//   insert(key) {
//     if (this.root == null) {
//       // {1}
//       this.root = new RedBlackNode(key); // {2}
//       this.root.color = Colors.BLACK; // {3}
//     } else {
//       const newNode = this.insertNode(this.root, key); // {4}
//       this.fixTreeProperties(newNode); // {5}
//     }
//   }
//   insertNode(node, key) {
//     if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
//       if (node.left == null) {
//         node.left = new RedBlackNode(key);
//         node.left.parent = node; // {8}
//         return node.left; // {9}
//       } else {
//         return this.insertNode(node.left, key);
//       }
//     } else if (node.right == null) {
//       node.right = new RedBlackNode(key);
//       node.right.parent = node; // {10}
//       return node.right; // {11}
//     } else {
//       return this.insertNode(node.right, key);
//     }
//   }
//   fixTreeProperties(node) {
//     while (
//       node &&
//       node.parent &&
//       node.parent.color.isRed() && // {1}
//       node.color !== Colors.BLACK
//     ) {
//       // {2}
//       let parent = node.parent; // {3}
//       const grandParent = parent.parent; // {4}
//       // case A: parent is left child
//       if (grandParent && grandParent.left === parent) {
//         // {5}
//         const uncle = grandParent.right; // {6}

//         // case 1A: uncle of node is also red - only recoloring
//         if (uncle && uncle.color === Colors.RED) {
//           // {7}
//           grandParent.color = Colors.RED;
//           parent.color = Colors.BLACK;
//           uncle.color = Colors.BLACK;
//           node = grandParent; // {8}
//         } else {
//           // case 2A: node is right child - left rotate
//           if (node === parent.right) {
//             this.rotationRR(parent); // {12}
//             node = parent; // {13}
//             parent = node.parent; // {14}
//           }

//           // case 3A: node is left child - right rotate
//           this.rotationLL(grandParent); // {15}
//           parent.color = Colors.BLACK; // {16}
//           grandParent.color = Colors.RED; // {17}
//           node = parent; // {18}
//         }
//       } else {
//         // case B: parent is right child
//         const uncle = grandParent.left; // {9}

//         // case 1B: uncle is read - only recoloring
//         if (uncle && uncle.color === Colors.RED) {
//           // {10}
//           grandParent.color = Colors.RED;
//           parent.color = Colors.BLACK;
//           uncle.color = Colors.BLACK;
//           node = grandParent;
//         } else {
//           // case 2B: node is left child - right rotate
//           if (node === parent.left) {
//             this.rotationLL(parent); // {19}
//             node = parent;
//             parent = node.parent;
//           }
//           // case 3B: node is right child - left rotate
//           this.rotationRR(grandParent); // {20}
//           parent.color = Colors.BLACK;
//           grandParent.color = Colors.RED;
//           node = parent;
//         }
//       }
//     }
//     this.root.color = Colors.BLACK; // {11}
//   }
//   rotationLL(node) {
//     const tmp = node.left;
//     node.left = tmp.right;
//     if (tmp.right && tmp.right.key) {
//         tmp.right.parent = node;
//     }
//     tmp.parent = node.parent;
//     if (!node.parent) {
//         this.root = tmp;
//     }
//     else {
//         if (node === node.parent.left) {
//             node.parent.left = tmp;
//         }
//         else {
//             node.parent.right = tmp;
//         }
//     }
//     tmp.right = node;
//     node.parent = tmp;
//   }
//   rotationRR(node) {
//     const tmp = node.right;
//     node.right = tmp.left;
//     if (tmp.left && tmp.left.key) {
//         tmp.left.parent = node;
//     }
//     tmp.parent = node.parent;
//     if (!node.parent) {
//         this.root = tmp;
//     }
//     else {
//         if (node === node.parent.left) {
//             node.parent.left = tmp;
//         }
//         else {
//             node.parent.right = tmp;
//         }
//     }
//     tmp.left = node;
//     node.parent = tmp;
//   }
// }

// // testing the red black tree

// const rbTree = new RedBlackTree();
// rbTree.insert(10);
// rbTree.insert(5);
// rbTree.insert(15);
// rbTree.insert(3);
// rbTree.insert(7);
// rbTree.insert(1);
// rbTree.insert(13);
// rbTree.insert(17);
// rbTree.insert(11);
// rbTree.insert(14);

// rbTree.inOrderTraverse(printNode);