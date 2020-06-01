function normalFunc(string){
    console.log('this is normal function ' + string);
    
};
normalFunc('without iife');

//USING IIFE FUNCTION

// IIFE là function khai báo và thực thi dùng để privated data
(function(x){
    console.log('this is iife function '  + x );
})('with iife');

var module = (function(){
    let privated = ' this privated varible';
    function privatedFunc(){
        console.log('this is function private'  + privated);
    }
    var publicFunc = function(){
        privatedFunc();
    }
    return{
        publicData : privated,
        publicFunction : publicFunc
    }
})();

console.log(module.publicData);
module.publicFunction();