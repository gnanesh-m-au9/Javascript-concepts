function wait(num){
    return new Promise((resolve, reject)=>{
        if(num % 2 != 0 ){
            throw new Error('not a even')
        }else{
            setTimeout(resolve, num * 1000)
        }
    })
}
let waiter = wait(2)

let start = Date.now();

setTimeout(()=>{
    waiter.then(()=>{
        console.log(Date.now()-start)
        console.log('Success')
    })
    .catch((err)=>{
        console.error(err)
    })
}, 5000)
