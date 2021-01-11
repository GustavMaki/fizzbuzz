
for(var i = 1; i < 21 ; i++){
    
    var fizz = i / 3;
    var buzz = i / 5;

    if(Number.isInteger(fizz) && Number.isInteger(buzz)) console.log("fizzbuzz");

    if(Number.isInteger(fizz)) console.log("fizz");
        else if(Number.isInteger(buzz)) console.log("buzz");
        
    else console.log(i);
}