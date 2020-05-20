// var, let, const
/**
 * VAR
 */
console.log(`----VAR variable----`);
var a = 1;

function run() {
    console.log(`${a}`)
}
run();
console.log(`${a}`); // 1

/**
 * LET
 */
console.log(`----LET variable----`);

let l = 'let 1';

function run2() {
    l = 'let 2';
    console.log(`${l}`);
}
run2();
console.log(`${l}`);

/**
 * CONST
 */
// console.log(`----CONST variable----`);

// const c = 222;
// function run3() {
//   c = 333;
//   console.log(`${c}`);
// }
// run3();
// console.log(`${c}`);

// LET VS VAR
// 1
var compare1 = 1; {
    var compare1 = 2;
    console.log({ compare1 }) // 2
}
console.log({ compare1 }) // 2

// 2
var compare1 = 1; {
    var compare1 = 2;
    console.log({ compare1 }) // 2
}
console.log({ compare1 }) // 1 => 2

// VD.2: LET VS VAR
// 1
var initLoopVar = 5;
for (var initLoopVar = 0; initLoopVar < 10; initLoopVar++) {
    console.log(`processing loop ${initLoopVar}`)
}
console.log({ initLoopVar })

// 2
let initLoopLet = 5;
for (let initLoopLet = 0; initLoopLet < 10; initLoopLet++) {
    console.log(`processing loop ${initLoopLet}`)
}
console.log({ initLoopLet })

// const
const c = 5;
//c = 6;
console.log({ c })