function modifier(a, b) {
    //  value of the reference array
    console.log(a, b)
    a = 10
    b = 20
    console.log(a, b) // 10,20
}

let p = [4, 7, 9]
let q = [3, 6, 8]

console.log(p, q)
modifier(p, q)
console.log(p, q) 

// someone asks ->
//  is JS call by value/ call by reference -> it is both -> call by sharing