
function real() {
    console.log("I am real. Always run me");
}
real();
function real() {
    console.log("No I am real one ");
}

function real() {
    console.log("You both are wasted");
}


// code is executed -> bubble ->Excution context  
//  EC is created when your
    // * JS file is executed
    // * function is invoked 
    // JS -> exceuted in 2 phases
    //1. creation :
        //  memory allocation -> hoisting
            // var -> undefined
            //function -> allocating memory
        // global object -> node : global / browser: window
        // this is determined
        // outer scope
    //2. code excution 