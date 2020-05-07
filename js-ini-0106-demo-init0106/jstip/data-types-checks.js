//this is blog annoystick check data type  in js

//checkStrings 
 let isString = value => typeof value === 'string' || value instanceof String;
//checkNumbers 
let isNumber = value => typeof value === 'number' && isFinite(value);
//isFinite this function determines whether the passed value is finite number return value (infinity ||nan || underfind)
        // isFinite(Infinity);  // false
        // isFinite(NaN);       // false
        // isFinite(-Infinity); // false

        // isFinite(0);         // true
        // isFinite(2e64);      // true
        // isFinite(910);       // true

        // isFinite(null);      // true, would've been false with the 
        //                     // more robust Number.isFinite(null)

        // isFinite('0');       // true, would've been false with the 
        //                     // more robust Number.isFinite("0")

//checkArray
 let isArray = value => value  && typeof value === 'object' && value.constructor ===  Array;
    //Array.isArray(value);
 
//checkSymbol
let isSymbol = value => typeof value === 'symbol'; //in es6 the new datatyppes symbol was added

// checkDate
let isDate = value => value instanceof Date;
//check  error object
let isError = value => value instanceof Error && typeof value.message !== 'undefined';
//checkRegexp
let isRegExp = value => value && typeof value === 'object' && value.constructor === RegExp;
// Returns if a value is null
function isNull (value) {
    return value === null;
}
// Returns if a value is undefined
function isUndefined (value) {
    return typeof value === 'undefined';
}


// For booleans typeof is enough since it returns “boolean” for both true and false.

// Returns if a value is a boolean
function isBoolean (value) {
    return typeof value === 'boolean';
}