// decimal to binary number converter using a stack

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

const remStack = new Stack();

const decimalToBinary = (decNumber) => {
    while (decNumber > 0) { //0(n)0
        remStack.push(decNumber % 2); // 0(1)
        decNumber = Math.floor(decNumber / 2); // 0(1)
    }
    let binString = ''; // 0(1)
    while (!remStack.isEmpty()) { // 0(n)
        binString += remStack.pop().toString(); // 0(1)
    }
    return binString; // 0(1)
}
// total time complexity: 0(n) + 0(1) + 0(1) + 0(n) + 0(1) + 0(1) + 0(1) = 0(n)
console.log(decimalToBinary(8));

const palindromeStack = new Stack();

const palindromeChecker = (str) => {
    for (let i = 0; i < str.length; i++) {
        palindromeStack.push(str[i]);
    }
    let reversedStr = '';
    while (!palindromeStack.isEmpty()) {
        reversedStr += palindromeStack.pop();
    }
    return reversedStr === str;
}

console.log(palindromeChecker('racecar'));
