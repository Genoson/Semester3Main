//example recursive method
// the fibonacci numbers as an example

// const fib = (n) => {
//     if (n <= 1) return 1; 
//     return fib(n - 1) + fib(n - 2);
//     }

// for (let i = 0; i < 10; i++) { 
//     console.log(fib(i));
// }

// the general mathematical flow of fibonacci numbers is:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, ...
// f(n) = f(n-1) + f(n-2)

// console.log(fib(8));

// the same as above but an ugly version / easier to read
// const fibonacci = (n) => {
//     if (n < 0) {
//         console.log('invalid input');
//         return;
//     } else if (n <= 1) {
//         return 1;
//     } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// console.log(fibonacci(8));


// const factorial = (n) => {
//     if (n < 0) { 
//         console.log('invalid input'); 
//         return; /
//     } else if (n <= 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(7));

