// all the required code for the Balanced BST

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

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
  search(key) {
    return this.searchNode(this.root, key);
  }
  searchNode(node, key) {
    if (node == null) {
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }
  
  // an example callback function
  // const printNode = (value) => console.log(value);

  // inOrderTraverse will travel the tree in ascending order
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }
  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    if (node == null) {
      return null;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }
      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
}


// converting balance factor numbers into strings
const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5,
  };
  
  
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

//   const avlTree = new AVLTree();
// avlTree.insert(10);
// avlTree.insert(5);
// avlTree.insert(15);
// avlTree.insert(3);
// avlTree.insert(7);
// avlTree.insert(1);
// avlTree.insert(13);
// avlTree.insert(17);
// avlTree.insert(11);
// avlTree.insert(14);
// const printNode = (value) => console.log(value);

// avlTree.inOrderTraverse(printNode);
// console.log("avl tree height: ", avlTree.getNodeHeight(avlTree.root));
// console.log(avlTree.min());
// console.log(avlTree.max());

module.exports = {
  Node,
  BinarySearchTree,
  AVLTree,
};