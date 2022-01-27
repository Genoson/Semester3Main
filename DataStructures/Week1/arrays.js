// let test = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];
// // An array of type string.
// // While javascript allows mixed types, it is not recommended.

// // Why use arrays?
// // Allows data to be stored in a specific order, and allows for easy access to data in a single location.

// const averageTempJan = -1;
// const averageTempFeb = -2;
// const averageTempMar = 2;
// const averageTempApr = 4;
// const averageTempMay = 11;
// const averageTempJun = 15;
// const averageTempJul = 18;
// const averageTempAug = 20;
// const averageTempSep = 21;
// const averageTempOct = 15;
// const averageTempNov = 9;
// const averageTempDec = 4;

// const averageTemps = [];
// averageTemps[0] = averageTempJan;
// averageTemps[1] = averageTempFeb;
// averageTemps[2] = averageTempMar;
// averageTemps[3] = averageTempApr;
// averageTemps[4] = averageTempMay;
// averageTemps[5] = averageTempJun;
// averageTemps[6] = averageTempJul;
// averageTemps[7] = averageTempAug;
// averageTemps[8] = averageTempSep;
// averageTemps[9] = averageTempOct;
// averageTemps[10] = averageTempNov;
// averageTemps[11] = averageTempDec;

// how to create an array

// let daysOfWeek = new Array();
// daysOfWeek = new Array(7);
// daysOfWeek = new Array("monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday");

// the new keyword is used to create an array. 
// The new keyword is not best practice, but it is used here to create an array.
// the below is the same as the above, without using the new keyword.

let daysOfWeek = [];
daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// console.log(daysOfWeek);
// console.log(daysOfWeek.length);
// length is a property of an array.
// it is accessed as a . (dot) method
// arrays in javascript have many methods by default.

// console.log(daysOfWeek[2]);
// items in the array can be accessed by referencing the index number as above.

// for (let i = 0; i < daysOfWeek.length; i++) {
//   console.log(daysOfWeek[i]);
// }

// fibonacci sequence 
// const fibonacci = [];
// fibonacci[0] = 0;
// fibonacci[1] = 1;
// for (let i = 2; i < 20; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }
// console.log(fibonacci);

let numbers = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8];

numbers[numbers.length] = 9;
// console.log(numbers);

numbers.push(10);
// console.log(numbers);

numbers.push(11, 12, 13);
// console.log(numbers);

numbers.unshift(-1);
numbers.unshift(-3, -2);
// console.log(numbers);

// arrays are a bad choice for data that changes frequently because the copying of the array is expensive.

// an example of coding a method for data insertion into an array from scratch
// this is the same as the unshift method above.
Array.prototype.insertFirstPosition = function (value) {
    for(let i = this.length; i > 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};