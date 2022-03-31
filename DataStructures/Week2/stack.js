// creating a stack class from scratch in javascript via the textbook
// versions one using an array

// class Stack {
//   constructor() {
//     this.items = [];
//     this.count = 0;
//   }
//   push(element) {
//     this.items[this.count] = element;
//     this.count++;
//   }
//   pop() {
//     if (this.isEmpty()) {
//       return undefined;
//     }
//     this.count--;
//     const result = this.items[this.count];
//     delete this.items[this.count];
//     return result;
//   }
//   peek() {
//     if (this.isEmpty()) {
//       return undefined;
//     }
//     return this.items[this.count - 1];
//   }
//   isEmpty() {
//     return this.count === 0;
//   }
//   size() {
//     return this.count;
//   }
//   clear() {
//     this.items = [];
//   }
//   toString() {
//     if (this.isEmpty()) {
//       return "";
//     }
//     let objString = `${this.items[0]}`;
//     for (let i = 1; i < this.count; i++) {
//       objString = `${objString}, ${this.items[i]}`;
//     }
//     return objString;
//   }
// }

// const stack = new Stack();
// stack.push(1)
// stack.push(2)
// stack.push(3)

// console.log(stack.toString())
// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.size())
// console.log(stack.isEmpty())


// version 2 using objects

class Stack {
    constructor() {
        this.items = {};
        this.count = 0;
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    size() {
        return this.count;
    }
    isEmpty( ) {
        return this.count === 0;
    }
    pop() {
        if (this.isEmpty()) {
            return undefined
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
    clear() {
        this.items = {};
        this.count = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i=1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

// further modification to the above to implement
// a stack with private attributes is possible and even desirable

module.exports = {
    Stack
}
