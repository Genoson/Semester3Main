// example problem to solve today
// Given a queue which consists of the first n natural numbers, 
// these are in random order
// the task is to check whether the given queue can be sorted into another queue
//  ie: {5, 1, 2, 3, 4 } can be sorted into {1, 2, 3, 4, 5}

class Queue{
    constructor(){
        this.count =0;
        this.lowestCount =0;
        this.items =[];
    }
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    peek(){
        if (this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    isEmpty(){
        return this.count - this.lowestCount === 0;
    }
    size(){
        return this.count - this.lowestCount;
    }
    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = [];
    }
    toString(){
        if (this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}


 class Stack {
      constructor() {
        this.items = [];
        this.count = 0;
      }
      push(element) {
        this.items[this.count] = element;
        this.count++;
      }
      pop() {
        if (this.isEmpty()) {
          return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
      }
      peek() {
        if (this.isEmpty()) {
          return undefined;
        }
        return this.items[this.count - 1];
      }
      isEmpty() {
        return this.count === 0;
      }
      size() {
        return this.count;
      }
      clear() {
        this.items = [];
      }
      toString() {
        if (this.isEmpty()) {
          return "";
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
          objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
      }
    }


const testQ = new Queue();
testQ.enqueue(5);
testQ.enqueue(1);
testQ.enqueue(3);
testQ.enqueue(2);
testQ.enqueue(4);
testQ.enqueue(6);

function sortStack(stack, number){
    if (stack.isEmpty()){
        stack.push(number);
        return;
    } else if (number > stack.peek()) {
        let temp = stack.pop();
        sortStack(stack, number);
        stack.push(temp);
        return;
    } else {
        stack.push(number);
        return;
    }
}

const sortQueue = (queue) => {
    const stack = new Stack();
    stack.push(queue.dequeue());
    console.log(stack.toString());
    while(!queue.isEmpty()){
        if (stack.peek() > queue.peek()){
            stack.push(queue.dequeue());
            console.log(stack.toString());
        } else {
            let temp = queue.dequeue();
            sortStack(stack, temp);
            console.log(stack.toString());
        }    
    }
    while(!stack.isEmpty()){
        queue.enqueue(stack.pop());
        console.log(stack.toString());
    }
    return queue.toString();
}
console.log(testQ.toString());
console.log(sortQueue(testQ));



// kenedy solution

// class checkSortExample {
//     checkSort(queue) {
//         let expected = 1;
//         let stack = new Stack();
//         let frontElement;
//         while (queue.length != 0) {
//             frontElement = queue[0];
//             if (frontElement == expected) {
//                 expected++;
//             } else {
//                 if(stack.length == 0) {
//                     stack.push(frontElement);
                    
//                 } else if (stack.length !=0 && stack[stack.length-1] < frontElement) {
//                     return false 
//                 } else {
//                     stack.push(frontElement);
//                 }
//             }
//             while (stack.length !=0 && stack[stack.length-1] == expected) {
//                 stack.pop();
//                 expected++;
//             }
//         }
//     }
// }
// class Example{
    
//     checkSorted(InputQueue){

//         let st = [];
// 		let expected = 1;
// 		let fnt;
	
// 		// while given Queue
// 		// is not empty.
// 		while (InputQueue.length != 0)
// 		{
// 			fnt = InputQueue[0];
// 			InputQueue.shift();
	
// 			// if front element is
// 			// the expected element
// 			if (fnt == expected)
// 				expected++;
	
// 			else
// 			{
// 				// if stack is empty,
// 				// push the element
// 				if (st.length == 0)
// 				{
// 					st.push(fnt);
// 				}
	
// 				// if top element is less than
// 				// element which need to be
// 				// pushed, then return fasle.
// 				else if (st.length != 0 &&
// 						st[st.length - 1] < fnt)
// 				{
// 					return false;
// 				}
	
// 				// else push into the stack.
// 				else
// 					st.push(fnt);
// 			}
	
// 			// while expected element are
// 			// coming from stack, pop them out.
// 			while (st.length != 0 &&
// 				st[st.length - 1] == expected)
// 			{
// 				st.pop();
// 				expected++;
// 			}
// 		}
		
// 		// if the final expected element
// 		// value is equal to initial Queue
// 		// size and the stack is empty.
// 		if ((expected - 1) == n && st.length == 0)
// 			return true;
	
// 		return false;

//     }

// }