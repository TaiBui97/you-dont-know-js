// 1. CHECK PRIME

/* Question: How would you verify a prime number ?

    Answer : a prime number is only divisible by itself and 1. So, i will run a
while loop and increase by 1.(look at the code example.If you dont get it.this is not your cake.do learn javaScript basics and come back.) */
function isPrime(n){
    let divisor = 2;
    while(n > divisor){
        if(n % divisor == 0){
            return false;
        }else{
         divisor++;   
        } 
       
    }
    return true;

}
console.log(isPrime(237))

//try 2

function isPrime_2(n){
    var divisor = 3,
        limit = Math.sqrt(n);
    if(n === 2 || n === 3)
        return true;
    if(n % 2 === 0)
        return false;
    while(divisor <= limit)
    {
        return n % divisor == 0 ? false : divisor+=2;
    }
    return true;

}
console.log(isPrime_2(237))



/* FIND PRIME FACTORS NUMS */

// TIME COMPLEXITY = 0(n)
function primeFatory(n){
    let factors  = [],
        divisor = 2;
    while (n > 2){
        if(n % divisor === 0){
            factors.push(divisor);
            n = n / divisor;
        }
        else{
            divisor++;
        }
    }
    return factors;
}
console.log(primeFatory(69)) // [3,23]
console.log(primeFatory(70)) // [2,5,7]
