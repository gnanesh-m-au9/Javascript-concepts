// let cap = {
//     name: "Steve",
//     sayHi: function () {
//         console.log(this==global);
//         console.log("Hi from ", this.name);
//     }
// }
// //  method call -> this -> that object
// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// //  function call this -> global Object
// sayHiAdd();

// this is determined on EC creation : 
// Creation
// * hoisting
// * global Object
// * outer scope
// * this is detrmined
// * method call -> this -> that object
//* function call this -> global Object
// Exceution 

// let cap = {
//     name: "Steve",
//     sayHi: function () {
//         console.log(this.name);
//         function fn() {
//             console.log("29",this.name);
//         }
//         // 
//         fn();
//     }
// }
// //  method call -> this -> that object
// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// // //  function call this -> global Object
// sayHiAdd();

// console.log(this); -> {}
this.name="spider Man";
//  arrow -> does not have it's own this -> it takes this from lexical scope

let cap = {
    name: "Steve",
    "sayHi": () => {
        // console.log(this.name);
        const fn = () => {
            console.log("29", this.name);
        }
        // 
        fn();
    } 
}
//   -> this -> that object
cap.sayHi();
