
const Tree = require('../Week6/trees');


const example = new Tree.BinarySearchTree();

example.insert(10);
example.insert(5);
example.insert(15);
example.insert(3);
example.insert(7);
example.insert(13);
example.insert(17);

// console.log(example.max());
// console.log(example.min());
const printNode = (value) => console.log(value);
 example.inOrderTraverse(printNode);
// example.insert(4);
// example.insert(6);
// example.insert(8);
// example.inOrderTraverse(printNode);
//console.log(example.search(4));
//console.log(example.max());