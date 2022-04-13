// would have to set up to use this and import the code to be tested into this test file

describe("basic tree tests", () => {
    test("able to instance an BST", () => {
        const bst = new BinarySearchTree();
        expect(bst.root).toBe(null);
    })
})