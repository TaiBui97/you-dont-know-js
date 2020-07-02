// 1. CHECK PRIME

/* Question: How would you verify a prime number ?

    Answer : a prime number is only divisible by itself and 1. So, i will run a
while loop and increase by 1.(look at the code example.If you dont get it.this is not your cake.do learn javaScript basics and come back.) */
function isPrime(n) {
    let divisor = 2;
    while (n > divisor) {
        if (n % divisor == 0) {
            return false;
        } else {
            divisor++;
        }

    }
    return true;

}
console.log(isPrime(237))

//try 2

function isPrime_2(n) {
    var divisor = 3,
        limit = Math.sqrt(n);
    if (n === 2 || n === 3)
        return true;
    if (n % 2 === 0)
        return false;
    while (divisor <= limit) {
        return n % divisor == 0 ? false : divisor += 2;
    }
    return true;

}
console.log(isPrime_2(237))



/* 2. FIND PRIME FACTORS NUMS */

// TIME COMPLEXITY = 0(n)
function primeFatory(n) {
    let factors = [],
        divisor = 2;
    while (n > 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}
console.log(primeFatory(69)) // [3,23]
console.log(primeFatory(70)) // [2,5,7]


/* 3. REMOVE DUPLICATE ELENMENT IN ARRAY */

const _names = ['a', 'b', 'a', 'b', 'd', 'e', 'f', 'e'];
let uniqueName = [];

//modern js es6 work
let _uni = [...new Set(_names)];
let __uni = _names.filter((item, pos) => {
    _names.indexOf(item) == pos;
})

console.log(__uni)

function removeDuplicate(arr) {
    let exits = {},
        outArr = [],
        elm;
    for (let i = 0; i < arr.length; i++) {
        elm = arr[i];
        if (!exits[elm]) {
            outArr.push(elm);
            exits[elm] = true;
        }
    }
    return outArr;
}


// THE BEST FROM TWO WORLDS 
function uniq(a) {
    var prims = {
            "boolean": {},
            "number": {},
            "string": {}
        },
        objs = [];

    return a.filter(function (item) {
        var type = typeof item;
        if (type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}
//HASHTABLE TO THE RESCUE
function uniq(a) {
    var seen = {};
    return a.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

//ES2016
function reserve(str) {
    return str.split("").reduce((rev, char) => char + rev, '')
}
//spread syntax es6 method

// RECURSION

// Palindrome : reads the same backward as forward

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
console.log(palindrome("A man, a plan, a canal. Panama"));
let string = 'abcde';
console.log(reserve(string));
console.log(uniq(_names));
console.log(removeDuplicate(_names));