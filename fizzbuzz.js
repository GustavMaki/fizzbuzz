for(var i=1; i < 21 ; i++){
    if(Number.isInteger(i/3) && Number.isInteger(i/5)) console.log("fizzbuzz");

    if(Number.isInteger(i/3)) console.log("fizz");

    else if(Number.isInteger(i/5)) console.log("buzz");

    else console.log(i);
}