// examples based on big 0 notation

// 1
function increment(num) {
    return num + 1; // O(1)
}
// total big 0 = O(1)

//2
for (let i = 0; i < 10; i++) { // O(n)
    increment(i); // O(1)
}
// total big 0 = O(n) + O(1) = O(n)

// //3
function sum(arr) { 
    let total = 0; // O(1)
    for (let i = 0; i < arr.length; i++) { // O(n)
        total += arr[i]; // O(1)
    }
    return total; // O(1)
}
// total big 0 = O(n) + O(1) + O(1) + 0(1) = O(n) + O(1) = O(n)

//4
class linearTime{
    defaultEquals(a,b){
        return a===b; // O(1)
    }
    sequential(array, value){
        for(let i = 0; i < array.length; i++){ // O(n)
            if(this.defaultEquals(value, array[i])){  // O(1)
                return i; // O(1)
            }
        }
        return -1; // O(1)
    }
}
// total big 0 = O(n) + O(1) + O(1) + O(1) = O(n) + O(1) = O(n)

// const test = new linearTime();
// console.log(test.sequential([1,2,3,4,5,6,7,8,9,10], 5));


//5

function logAll(arr){
    let count = 0; // O(1)
    for(let i = 0; i < arr.length; i++){ // O(n)
        for (let j = 0; j < arr.length; j++){ // O(n)
            count++; // O(1)
            console.log(arr[i], arr[j]); // O(1)

        }
    }
    //console.log(count); // O(1)
    return count; // O(1)
}
// total big 0 = 0(n) * 0(n) + O(1) + O(1) + O(1) + O(1) = O(n) * O(n) + O(1) = O(n^2) + O(1) = O(n^2)

//console.log(logAll([1,2,3,4,5,6,7,8,9,10]));

//6 

function twoNumberSum(array, targetSum){
    let count = 0; // O(1)
    for(let i = 0; i < array.length; i++){ // O(n)
        for(let j = 0; j < array.length; j++){ // O(n)
            count++; // O(1)
            if(array[i] + array[j] === targetSum){ // O(1)
                return [array[i], array[j]]; // O(1)
            }
        }
    }
    //console.log(count); // O(1)
    return count; // O(1)
}
// total big 0 = O(n) * O(n) + O(1) + O(1) + O(1) + O(1) + O(1) = O(n^2) + O(1) = O(n^2)

//7 same as above example but with a map to lower complexity
// could replace the map with an array 

function twoNumSum(arr, targetSum){
    let count = 0; // O(1)
    let myMap = new Map(); // O(1)
    for(let i = 0; i < arr.length; i++){ // O(n)
        let potentialMatch = targetSum - arr[i]; // O(1)
        if(myMap.has(potentialMatch)){ // O(1)
            return [arr[i], potentialMatch]; // O(1)
        } else {
            myMap.set(arr[i], true); // O(1)
        }
    }
    //console.log(count); // O(1)
    return count; // O(1)
}
// total big 0 = O(n) + O(1) + O(1) + O(1) + O(1) + O(1) + O(1) + O(1) = O(n) + O(1) = O(n)

console.log(twoNumSum([1,2,3,4,5,6,7,8,9,10], 11));
