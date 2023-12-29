function getFirstName(fName) {
    console.log("gfn exceuted"); //2
    return function getlastName(lastName) {
        console.log("gln exceuted");
        return function printFullName() {
            // this should not work 
            console.log("Hi :) ", fName, lastName)
        }
    }
}
// console.log("before");  //1
// const glnAddr = getFirstName("Jasbir");
// console.log("b/w");  //3
// const pfnAddr = glnAddr("Singh");
// pfnAddr();

// closure a feature  -> inner function will always have parental scope 
    // even if outer fn is removed from the stack