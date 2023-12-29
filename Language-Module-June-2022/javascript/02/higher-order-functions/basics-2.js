
function createGreeter(timeOfDay) {

  function greet(name) {
    console.log(`Good ${timeOfDay}! ${name}`)
  }

  return greet
}

let g1 = createGreeter('Morning')
let g2 = createGreeter('Afternoon')
let g3 = createGreeter('Evening')

g1('John')
g2('Jane')

// 2 4 5 8 11 12 13 15 16
/*
  2 
  11 4 8 
  12 4 8 
  13 4 8 
  15 5 
  16 5
*/