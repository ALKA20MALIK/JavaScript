function Addition(val, callback){
    return callback(val+5), false;
}
function Subtraction(val, callback){
    return callback(val-5),false;
}
function multiply(val, callback){
    return callback(val*5),false;
}

Addition(5, function(addResult,error){
    if(!error){
        Subtraction(addResult, function(subRes,error){
            if(!error){
                multiply(subRes,function(mulRes,error){
                 if(!error){
                     console.log('result:',mulRes)
                 }
                })
            }
        })
    }
})
