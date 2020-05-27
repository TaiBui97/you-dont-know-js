
// COmbining multiple objects
// nếu update giá trị mới vào object main thì object clone sẽ không bị ảnh hưởng và thay đỗi.

const obj1 = {
    'a' : 1,
    'b' : 2,
    'c' : 3
}
const obj2 = {
    'd' : 4,
    e : 5
}
const obj3 ={
    firstName : 'age',
    lastName : 'honh'
}
// const objCombine = {...obj1,...obj2,...obj3};
// obj1.a = 2; //update sự thay đỗi
// console.log(obj1); 
// console.log(objCombine);
// console.log(obj1);


// alter we can copies all enumerable own properties  USING Object.assign()
// methods synstax :  Object.assign(target, ...sources);
const returnedTarget = Object.assign(obj1,obj2); //tham khảo asign-deep.js
// //giá trị trong object main và object target sẽ update nếu có sự thay đỗi trong cả 2 object
// console.log(returnedTarget); //{ a: 1, b: 2, c: 3, d: 4, e: 5 }
// console.log(obj1);// { a: 1, b: 2, c: 3, d: 4, e: 5 }
// obj1.a = 2;
// console.log(returnedTarget); //{ a: 2, b: 2, c: 3, d: 4, e: 5 }
// console.log(obj1); //{ a: 2, b: 2, c: 3, d: 4, e: 5 }
// clone an object :
// const copyObject = Object.assign({}, obj1);
// console.log(copyObject);
// console.log(obj2);


// INSERTING VALUE IN BETWEEN AN ARRAY
const arr = [0, 1, 2, 3, 5, 6, 7, 8];
// The syntax of the splice function
// arr.splice(index, itemsToDelete, item1ToAdd, item2ToAdd, ...)

arr.splice(4, 0, 4); //[0, 1, 2, 3, 4, 5, 6, 7, 8]

arr.splice(4, 0, 100, 101, 102); // [0, 1, 2, 3, 100, 101, 102, 4, 5, 6, 7, 8]

// NOTE : Using splice will mutate the original array, not create a new one.

// _____________________________________

// GET THE CURRENT TIMESTAMP
// js provide methods new Date(), u simply need to execute :
const date = new Date();
console.log(date.getTime());
console.log(+new Date()); //shortcup get the current timestamp
console.log(Date.now()); //same methods

// _____________________________________
// CHECK IF AN OBJECT IS AN ARRAY
const obj = {data: 1};
const arrr = [1, 2, 3];
Array.isArray(obj);  // false
Array.isArray(arrr);  // true

// _____________________________________
// OBJECT DESTRUCTURING
const user = {
    name: 'Kunal',
    age: 25,
    profile: 'https://medium.com/@kunaltandon.kt',
    followers: 1000,
    blogs: 57
};
const { name, profile, blogs, followers } = user;
console.log(name);      // Kunal
console.log(profile);   // https://medium.com/@kunaltandon.kt
console.log(blogs);     // 57
console.log(followers); // 1000

// _____________________________________
// REST PARAMETER SYNTAX

function sumNums(...values){
    console.log(values);
}
sumNums(1,2,3,4);

// make it calculate  all the parameters passed to the function 
var sum = (...value) => {
    let sum = 0;
    // for(let i =0; i <value.length ; i++){
    //     sum += value[i];
    // }
    for(let i of value){ //for in trả về index , for of trả về value
        sum +=i;
    }
    return sum;
};
console.log(sum(1,2,3,4));

