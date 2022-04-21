// attempting some testing with jest

const { expect } = require("@jest/globals");
const { AVLTree } = require("./functions/BSTBalanced");


test("insert method", () => {
  let bst = new AVLTree();
  bst.insert(10);
  expect(bst.root.key).toBe(10);
});

test("Balancing Act", () => {
    let bst = new AVLTree();
    bst.insert(10);
    bst.insert(11);
    bst.insert(12);
    bst.insert(13);
    bst.insert(14);
    bst.insert(15);
    expect(bst.root.key).toBe(13);
    expect(bst.getBalanceFactor(bst.root)).toBe(3);
})

test("Balancing Act 2", () => {
    let bst = new AVLTree();
    bst.insert(10);
    bst.insert(11);
    bst.insert(9);
    bst.insert(8);
    bst.insert(12);
    expect(bst.root.key).toBe(10);
    expect(bst.getNodeHeight(bst.root)).toBe(2);
})
