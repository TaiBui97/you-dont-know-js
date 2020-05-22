const arrObj = [
    { name: 'a', fullname: 'b', age: '2', gender: 1 },
    { name: 'a2', fullname: 'b2', age: '3', gender: 1 },
    { name: 'a3', fullname: 'b3', age: '4', gender: 1 },
    { name: 'a4', fullname: 'b4', age: '5', gender: 0 }
];
// arrObj.forEach(item => console.log(item))

let objResultFind = arrObj.find(function(user) {
    return user.name === "a2";
});
let arrDemoMap = arrObj.map(function(user) {
    return Math.pow(user.age, 2)
});
let arrDemoFilter = arrObj.filter(function(user) {
    return user.age > 3;
});
let arrDemoSome = arrObj.some(function(user) {
    return user.gender === 1
});
let arrDemoEvery = arrObj.every(function(user) {
    return user.gender === 1
});
// console.log(objResultFind)
// console.log(arrDemoMap)

// --es6--
const statementRs = user => user.name === "a";

//find
let objResult = arrObj.find(statementRs);
// console.log(objResult)

//find index
let indexResult = arrObj.findIndex(statementRs)
    // console.log(indexResult)

//map
let arrDemoMapEs6 = arrObj.map(user => Math.pow(user.age, 2))
    // console.log(arrDemoMapEs6)
    //filter
let arrDemoFilterEs6 = arrObj.filter(user => user.age > 3);

//some
let arrDemoSomeEs6 = arrObj.some(user => user.gender === 1);

//every
let arrDemoEveryEs6 = arrObj.every(user => user.gender === 1);

// some - every return => true/false

//splice
let arrDemoSplice = arrObj.splice(1, 1); // arr bi cat va bi anh huong

//push
let userPush = { name: 'a', fullname: 'b', age: '2', gender: 1 };
var arrDemoPush = arrObj.push(userPush); //push phan tu vao cuoi mang

//pop
var arrDemoPop = arrObj.pop(); // pop : xoa phan tu cuoi mang

//====================--===================//


const arrDemo = [
    { name: 'a', fullname: 'b', age: 2, gender: 1 },
    { name: 'a2', fullname: 'b2', age: 3, gender: 1 },
    { name: 'a3', fullname: 'b3', age: 4, gender: 1 },
    { name: 'a4', fullname: 'b4', age: 5, gender: 0 }
];
//let arrAge = [21, 20, 20, 21];
//console.log(Math.max(...arrAge)) //21

let sumArrAge = arrDemo.reduce(function(previosVal, currentVal) {
    previosVal = previosVal + currentVal.age;
    return previosVal;
}, 0); // gia tri gan dau tien la 0 vao previosVal;

let avgArrAge = arrDemo.reduce((previosVal, currentVal, index) => {
    if (arrDemo.length - 1 === index)
        return (previosVal + currentVal.age) / arrDemo.length;
    return previosVal + currentVal.age
}, 0);

let reduceWithCodition = arrDemo.reduce((previosVal, currentVal) => {
    if (currentVal.age > 3 && Object.is(currentVal.gender, 1)) {
        previosVal.push(currentVal);
    }
    return previosVal;
}, []);

var voters = [
    {name:'Bob' , age: 30, voted: 1},
    {name:'Jake' , age: 32, voted: 1},
    {name:'Kate' , age: 25, voted: 0},
    {name:'Sam' , age: 20, voted: 0},
    {name:'Phil' , age: 21, voted: 1},
    {name:'Ed' , age:55, voted:1},
    {name:'Tami' , age: 54, voted:1},
    {name: 'Mary', age: 31, voted: 0},
    {name: 'Becky', age: 43, voted: 0},
    {name: 'Joey', age: 41, voted: 1},
    {name: 'Jeff', age: 30, voted: 1},
    {name: 'Zack', age: 19, voted: 0}
];

//sum
let reduceSumConditions = voters.reduce((previosVal,currentVal)=>{
    if(Object.is(currentVal['voted'],1)){
        previosVal = previosVal + currentVal.age;
    }
    return previosVal;
},0);
//arr
let votterLengthFalse = voters.filter(voters => voters.voted == 0 && voters).length;
let reduceAvgConditions = voters.reduce((previosVal,currentVal,index)=>{
    if(currentVal.voted === 0){
        if(voters.length -1 === index){
            return (previosVal + currentVal.age) / votterLengthFalse;
        }
        return previosVal + currentVal.age;
    }
    return previosVal + currentVal.age;

},0);

console.log(sumArrAge)
