//  redeclare , access it's values before declrataion 
// console.log("a",a);
// var a;
// a=10;
// var a=20;
// console.log("a",a);

// TDZ -> temoral dead zone -> var declared using let and const are inside TDZ
// before the line of declaration  
// console.log("a",a);
// let a;
// a=10;

// let a=20;
// console.log("a",a);

var a = 10;
function fn() {
    console.log("line number 19", a); // udf
    var a = 20;
    a++;
    console.log("line number 22", a); //21
    if (a) {
        var a = 30;
        a++;
        console.log("line number 26", a); //31
    }

    console.log("line number 28", a); //31
}
fn();
// console.log("line number 32", a);

// scope -> function scope

// ec -> 
// var -> function, redeclared


// let a = 10;
// console.log("line number 2", a); // 10
// function fn() {
    // console.log("line number 43", a); 
//     let a = 20;
//     a++;
//     console.log("line number 46", a);
//     if (a) {
//         let a = 30;
//         a++;
//         console.log("line number 50", a);
//     }
//     console.log("line number 52", a);
// }
// fn();
// console.log("line number 55", a);


{}





