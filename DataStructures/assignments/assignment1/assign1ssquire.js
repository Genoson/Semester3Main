/**
 * Algorithms and Data Structures Assignment 1
 * Stephen Squire      
 * January 19, 2022 
 */

// 1. What is the runtime/Time complexity of the below code?

function factorial(x) {
    // if number is negative
    if (x < 0) { //0(1)
        console.log("Number is negative"); //O(1)
        return -1; // 0(1)
    } 
    // if number is 0 or 1
    if (x === 0 || x === 1) { //0(1)
        return 1; //0(1)
    }
    // if number is greater than 1
    else {
        return x * factorial(x-1); //0(n)
    }
}
// 0(n) + O(1) + O(1) + O(1) + O(1) + O(1) = O(n) + O(1) = O(n)
// total time complexity is O(n), linear

function fibbonacci(n) {
    // if number is negative
    if (n < 0) { //0(1)
        console.log("Number is negative"); //O(1)
        return -1; // 0(1)
    } 
    // if number is 0 or 1
    if (n === 0 || n === 1) { //0(1)
        return 1; //0(1)
    }
    // if number is greater than 1
    else {
        return fibbonacci(n-1) + fibbonacci(n-2); //0(n)
    }
}
// 0(n) + O(1) + O(1) + O(1) + O(1) + O(1) = O(n) + O(1) = O(n)
// total time complexity is O(n), linear


// 2. Computing the time complexity of the code below gives a complexity of O(n^2)-Quadratic. 
//How can you rewrite the algorithm to improve(with respect to time complexity) this code. 
//Please show working of the time complexity.

// Note: If you are not sure of what the code is doing, run this code by passing as arguments, an array and a target sum.
// eg. array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     targetSum = 17

function twoNumberSum(array, targetSum){
    let totalList = [];
    for (let i = 0; i < array.length -1; i++){ //0(n)
        const firstNum = array[i]; //0(1)
        for (let j = i + 1; j < array.length; j++){ //0(n)
            const secondNum = array[j]; //0(1)
            if(firstNum + secondNum === targetSum){ //0(1)
                return [firstNum, secondNum]; //0(1)
            }
        }
    }
    return []; //0(1)
   
}
// 0(n) + O(1) + O(n) + O(1) + O(1) + O(1) + O(1) + O(1) = O(n^2) + O(1) = O(n^2)
// total time complexity is O(n^2), quadratic

const twoNumberSumSimpler = (array, targetSum) => {
    let myMap = new Map(); // O(1)
    for(let i = 0; i < array.length; i++){ // O(n)
        let potentialMatch = targetSum - array[i]; // O(1)
        if(myMap.has(potentialMatch)){ // O(1)
            return [array[i], potentialMatch]; // O(1)
        } else {
            myMap.set(array[i], true); // O(1)
        }
    }
     
}
//  O(n) + O(1) + O(1) + O(1) + O(1) + O(1) + O(1) = O(n) + O(1) = O(n)
// total time complexity is O(n), linear

console.log(twoNumberSumSimpler([1,2,3,4,5,6,7,8,9,10], 11));
   


