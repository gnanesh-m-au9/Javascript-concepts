// let a = true;
// console.log("Before");
// setTimeout(() => {
//     a = false;
//     console.log("I broke the while loop");
// }, 1000);
// console.log("After");

// while (a) {

// }


//  is js single threaded : yes 
//  is nodejs single threaded : yes 
//  then how you can do multiple tasks at once  -> Asynchronous arc and event loop


//  # facts 
// *  every js code will eventually exceuted on Call stack
// * asynchronous function can only be given by your environement 


// console.log("Before");

// const cb2 = () => {
//     console.log("set timeout 2");
//     while (1) {
//     }
// }
// const cb1 = () => console.log("hello");
// setTimeout(cb2, 1000)
   
// setTimeout(cb1, 2000)

// console.log("After");
// empty
