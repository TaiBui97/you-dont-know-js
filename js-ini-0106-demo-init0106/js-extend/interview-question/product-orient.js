
// //QUESTION 1


// var values = [];

// // for(var i = 0; i < 10; i++){
// //     values.push(function(){
// //         console.log(i);
// //     })

// // }
// // console.log(values[0])
// // console.log("------");

// // for(var index = 0; index < 10; index ++){
// //     values[index]();
// //     console.log(values[index]);

// // }
// // //10
// // 10
// // 10
// // 10
// // 10
// // 10
// // 10
// // 10
// // 10
// // 10
// // 10
// // 10
// // 10
// // 10
// // answer : The value 10 is printed ten times as the variable i gets hoisted to the top of the code snippet and the final value of i is 10 after the code gets executed.

// // b/c varible declare in loop is var instead let -> varible hoist javascript

// // USING IIFE instead let :
// for(var i = 0;i< 10 ; i++){
//    (function(val){
//        values.push(function(){
//            console.log(val);
//        })
//    })(i);
// }

// for(var index = 0; index < 10; index ++){
//     values[index]();
// }



// QUESTION 2 
// var arr = [];
// var data = {};
// // declare array & data object
// // for(let i = 0; i <5 ; i++){
// //     let myData = data;
// //     myData.message = `message_${i}`;
// //     myData.code = i;
// //     console.log(myData.message)
// //     arr.push(myData);
// // };
// data.user = 'display';
// data.user = 'display2';

// console.log(data);
// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'; // changed by the "admin" reference

// console.log(user.name)
// console.log(admin.name);



// EXPLAIN : https://javascript.info/object-copy

var x =1; {
    var x =2;
}
console.log(x);
