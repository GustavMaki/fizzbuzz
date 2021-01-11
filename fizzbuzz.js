
for(var i = 1; i < 21 ; i++){

    var res;
    var fizz = i / 3;
    var buzz = i / 5;

    if(Number.isInteger(fizz) && Number.isInteger(buzz)) res = "fizzbuzz";

    else if(Number.isInteger(fizz)) res = "fizz";
        else if(Number.isInteger(buzz)) res = "buzz";
        
    else res = i;

    console.log(res);
}