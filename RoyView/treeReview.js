
// implementing a BST 
// this is good enough for the sprint / bare minimum

const treeify = require('treeify');

class BSTNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

}

function BSTNodeHeight(node) {
    if (node === null) {
        return 0;
    }
    return Math.max(BSTNodeHeight(node.left), BSTNodeHeight(node.right)) + 1;
}

function BSTNodeBalanceFactor(node) {
    if (node === null) {
        return 0;
    }
    return BSTNodeHeight(node.right) - BSTNodeHeight(node.left);
}

function BSTNodeRotateLeft(node) {
    let temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
}

function BSTNodeRotateRight(node) {
    let temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
}

class BST{
    constructor(){
        this.root = null;

    }
    // insert(value){
    //     if (this.root === null){
    //         this.root = new BSTNode(value);
    //         return ;
    //     }
    //     const helper = (node) => {
    //         if (node ===null) {

    //         }
    //         if (value === node.value) {
    //             throw new Error('Value already exists');
    //         } else if (value < node.value) {
    //             if (node.left === null) {
    //                 node.left = new BSTNode(value);
    //             } else {
    //                 helper(node.left);
    //             }
    //         } else {
    //             if (node.right === null) {
    //                 node.right = new BSTNode(value);
    //             } else {
    //                 helper(node.right);
    //             }
    //         }
    //     }
    //     helper(this.root);
    // }
    insert(value){
        const helper = (node) => {
            if (node === null) {
                return new BSTNode(value);
            }
            if (value === node.value) {
                throw new Error('Value already exists');
            }
            else if (value < node.value) {
                node.left = helper(node.left);
            } else {
                node.right = helper(node.right);
            }

            if (BSTNodeBalanceFactor(node) < -1) {
                return BSTNodeRotateRight(node);
            } else if (BSTNodeBalanceFactor(node) > 1) {
                return BSTNodeRotateLeft(node);
            }

            return node;
        }
        this.root = helper(this.root);
    }
}

function main() {
    let bst = new BST();
    //console.log(BSTNodeHeight(bst.root));
   // console.log(BSTNodeBalanceFactor(bst.root));
    bst.insert(1);
    //console.log(BSTNodeHeight(bst.root));
    //console.log(BSTNodeBalanceFactor(bst.root));
    bst.insert(2);
    //console.log(BSTNodeHeight(bst.root));
    //console.log(BSTNodeBalanceFactor(bst.root));
    bst.insert(3);
    //console.log(BSTNodeHeight(bst.root));
    //console.log(BSTNodeBalanceFactor(bst.root));
    bst.insert(4);
    //console.log(BSTNodeHeight(bst.root));
    //console.log(BSTNodeBalanceFactor(bst.root));
    bst.insert(5);
    bst.insert(6);
    bst.insert(7);
    bst.insert(8);
    bst.insert(9);
    //console.log(BSTNodeHeight(bst.root));
    console.log(BSTNodeBalanceFactor(bst.root));
    console.log(JSON.stringify(bst, null, 2));
    console.log(treeify.asTree(bst, true));
}

main()
