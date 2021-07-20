const promise = new Promise((resolve,reject)=>{
    resolve(5);
    reject(5);
    //
});

promise.then(Addition)
.then(Subtraction)
.then(Multiplication)
.then(result=> console.log('result:',result))
.catch(error=> console.log('error:',error))

function Addition(val){
    return val+5;
}

function Subtraction(val){
    return val-5;
}

function Multiplication(val){
    return val*5;
}