/**
 * Practicing the use of a doubly linked list to hold objects, and implement a sorting algorithm
 * on the objects.
 * 
 * Stephen Squire
 */

// the internet has many of this problem, and many way to solve it.
// geeksforgeeks.org/insert-value-sorted-way-sorted-doubly-linked-list/
// this solution does not look like Kennedy or our textbook solution
// but thats good, variety is the spice of life

class Node{
    constructor(){
        this.data = 0;
        this.next = null;
        this.prev = null;
    }
}

const getNode = (data) => {
    const newNode = new Node();
    newNode.data = data;
    newNode.prev = null;
    newNode.next = null;
    return newNode;
}

const sortedInsert = (head, newNode) => {
    let current;
    if (head == null) {
        head = newNode;
    } else if (head.data >= newNode.data) {
        newNode.next = head;
        newNode.next.prev = newNode;
        head = newNode;
    } else {
        current = head;
        while (current.next != null && current.next.data < newNode.data) {
            current = current.next
        }
        newNode.next = current.next;
        if (current.next != null) {
            newNode.next.prev = newNode;
        }
        current.next = newNode;
        newNode.prev = current;
    } 
    return head; 
}

const printList = (head) => {
    let current = head;
    while (current != null) {
        console.log(`${current.data} `);
        current = current.next;
    }
}


head = null;
head = sortedInsert(head, getNode(3));
head = sortedInsert(head, getNode(2));
head = sortedInsert(head, getNode(1));
head = sortedInsert(head, getNode(4));
head = sortedInsert(head, getNode(5));

printList(head);