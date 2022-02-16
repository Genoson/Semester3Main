/**
 * Using a linked list to remove all even numbers from a linked list
 */

const LinkedList = require('../Week3/linkedList');

let linkedList = new LinkedList.LinkedList();

linkedList.push(9);
linkedList.push(2);
linkedList.push(1);
linkedList.push(4);
linkedList.push(8);
linkedList.push(6);
linkedList.push(3);
linkedList.push(5);

const removeEven = (linkedList) => {
    let current = linkedList.getHead();
    while (current.element != null) {
        if (current.element % 2 == 0) {
            let toDelete = current.element;
            current = current.next;
            linkedList.remove(toDelete);
        } else {
        
        current = current.next;
        if (!current) {
            break;
        }
        }

    }
    console.log(`The solution is: ${linkedList.toString()}`);
    return linkedList;
}

removeEven(linkedList);
// console.log(linkedList.toString());


// Kennedy's code

/*

Program to delete all even nodes from a Singly Linked List

Input: LL = 1 -> 4 -> 3 -> 18 -> 19

Output: 1 -> 3 -> 19

Input: LL = 5 -> 3 -> 6 -> 8 -> 4 -> 1 -> 2 -> 9

Output: 5 -> 3 -> 1 -> 9

*/

// class Node {
//   constructor(element) {
//     this.data = element;

//     this.next = next;
//   }
// }

// class TestClass {
//   push(new_data) {
//     var new_node = new Node(new_data);

//     new_data.next = head;

//     head = new_node;
//   }

//   deleteNode(key) {
//       var temp = head;
//       var prev = null;

//       if ()
//   }

//   deleteEvenNodes() {
//     var ptr = head;

//     //loop to iterate the linked list

//     while (ptr != null) {
//       //if containing element is even

//       if (ptr.data % 2 == 0) {
//         //Delete the node

//         this.deleteNode(ptr.data);
//       }

//       ptr = ptr.next;
//     }
//   }
// }
