// problem with callbacks
//   -> callback hell -> nesting of the callback
//  trust issue

const fs = require("fs");
// console.log("before");
// //  given by your API and your API takes a cb -> only going call it once 
// //  when task is completed 
// // fs.readFile("./f1.txt", cb);

// // function cb(err, data) {
// //     if (err) {
// //         console.log("error", err);
// //     } else {
// //         console.log("data", data);
// //     }
// // }
// console.log("After");

// Promises

// function dashBoard(data, cb) {
// cb();
// cb();
// }
// dashBoard("Hello",chargeCreditCard);



//   Promise -> API in JS language
console.log("Before");
const promise = fs.promises.readFile("./f1.txt");
console.log(promise);
// promise.then(function (value){
//     console.log("data", value);
// })
// promise.catch(function (err) {
//     console.log("err", err);
// })
// console.log("After");
// Advantages of promises: 
// * incentive promise : micro-task queue higher priority then cbs
// * trust issue ->  promise can be resolved or rejected once in there life time
//  async await -> syntax sugar 

// (async function () {
//     try {
//       const value=  await promise;
//       console.log("value"+value);
//     } catch (err) {
//         console.log("Error", err);
//     }
// })()