// coding along to a tutorial or two for async await practice

const fs = require("fs");
const fetch = require("node-fetch");

//first video
// callbacks, promises, async/await

// callbacks

//  setTimeout(() => {
//     console.log('1 second');
//      }, 1000);

// // these can be nested
// setTimeout(() => {
// console.log('2 seconds');
// setTimeout(() => {
//     console.log('1 seconds');
// }, 1000);
//     }  , 1000);

//  //callbacks
// const btn;
// btn.addEventListener('click', () => {
//     console.log('click');
// });

// // error with callbacks

// fs.readFile('./notes.txt', {encoding:'utf-8'}, (err, data) => {
//     if (err) {
//         console.error('error');
//     } else {
//         console.log(data);
//     }
// });

// Promises

// const myPromise = new Promise((resolve, reject) => {
//   const rand = math.floor(math.random() * 2);
//   if (rand === 0) {
//     resolve("success");
//   } else {
//     reject("fail");
//   }
// });

// myPromise.then(() => console.log("success")).catch(() => console.log("fail"));

// fs with promises

// fs.promises.readFile("./notes.txt", { encoding: "utf-8" })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// fetch with promises

// fetch('https://pokeapi.co/api/v2/pokemon/9')
//     .then((data)=>console.log(data))
//     .catch(err => console.log(err));


// async await => probably the best way to do any of these async things

// file with async await
// try and catch for error handiling... python baby
const loadFile = async () => {
    try {
        const data = await fs.promises.readFile("./notes.txt", { encoding: "utf-8" });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

loadFile();

// fetch with async await

const fetchAsync = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data.name);
    } catch (err) {
        console.log(err);
    }
};

fetchAsync(151);

