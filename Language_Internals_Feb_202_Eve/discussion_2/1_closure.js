// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     return innerFunction
// }
// const innerFunc = outerFunction(); c=0
// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())

//  Q2 
// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init;
//     }
//     return count
// }
// let c1 = createCounter(10, 5); // [init =10, delta=5]
// let c2 = createCounter(5, 2); // [init =5, delta=2]

// console.log(c1())  //[init =15, delta=5] -> 15
// console.log(c2()) // [init=7 , delta =2]-> 7
// console.log(c1()) // [init =20, delta=5]
// console.log(c2()) // [init =9 , delta =2]

//  inner function forms closure over the variable 
// function fnClosure() {
//     let arr = [];
//     for (var i = 0; i < 3; i++) {
//         const fn = function () {
//             console.log(i);
//         }
//         arr.push(fn);
//     }

    
//     return arr;
// }
// const arr = fnClosure();
// arr[0]();
// arr[1]();
// arr[2]();

function fnClosure() {
    let arr = [];
    for (let i = 0;  i < 3; i++) {
        const fn = function () {
            console.log(i);
        }
        arr.push(fn);
    }
    return arr;
}
const arr = fnClosure();
arr[0]();
arr[1]();
arr[2]();

// var value of i -> closure 