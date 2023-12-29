// is js statically typed?? -> dynamically typed 
// java -> 
// int a;
// let a;

// default of JS -> 
// var a;
// console.log("a", a);
//  default return -> undefined
// function fn() {
// console.log("fn ran");
// }
// var rVal = fn();
// console.log("rVal", rVal);;

//  you acces a value inside an array ouside of it bounds -> undefined
// access a property inside an object -> undefined

// frameworks -> null



// datatypes in JS 

// primitives : 
        // strings, 
        // numbers -> 64 bit floating vals 
        // undefined,
        // null 
        // boolean
// Es6 -> BigInt , Symbols
// let bigNum=123456435678567896789n;
// let anotherbigNum= BigInt(123456734567896789);
// console.log(bigNum / 3);
// let arr=[1,2,3,4];
// let arr2=[1,2,3,4];
// console.log(arr==arr2);
// let str1="I am str";
// let str2="I am str";
// console.log(str1==str2);

// let sym1=Symbol("hi");
// let sym2=Symbol("bye");
// console.log(sym1==sym2);
// console.log(sym1, sym2);
// intended ->  unique value
//  add or remove from this obj ,update any key 
let obj={
        // id: 12345
        // ,message:"non updatable object"
};

let id=Symbol("id");
console.log("desc",id.description);
obj[id]=12345;
let id2=Symbol("id");
obj[id2]=34567;

console.log(obj);







//  weak data hiding 

// non-primitives : arrays, objects ,functions
        // es6 : map , set , weakset ,weakMap
//object -> keys -> number ,string : undefined
        // map keys -> objects also :
        

        
// const wm1 = new WeakMap();
// const o2 = function () { };
// const o1 = {};
// const o3 = global;
// set 
// wm1.set(o1, 37);
// wm1.set(o2, "azerty");
// console.log("wm1", wm1);
// console.log(wm1.get(o1));
// wm1.delete(o1);
// wm1.set(o1,undefined);
// console.log(wm1);
// console.log(wm1.has(o1));

