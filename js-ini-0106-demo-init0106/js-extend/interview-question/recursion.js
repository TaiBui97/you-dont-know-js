//sum & area in array
function Accumulation(...vals) {
    return vals.reduce((t, v) => t + v, 0);
}

function Multiplication(...vals) {
    return vals.reduce((t, v) => t * v, 1);
}
console.log(Accumulation(1, 2, 3, 4, 5)) //15

console.log(Multiplication(1, 2, 3, 4, 5)) //120


/* __________________________________________________________ */

// REDUCE REPLACE REVERSE()
function Reverse(arr) {
    return arr.reduceRight((t, v) => (t.push(v), t), [])
}
console.log(Reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

/* __________________________________________________________ */

// REDUCE REPLACE MAP() OR FILTER()
const arr = [0, 1, 2, 3];

//map: [0, 2, 4, 6]
const a = arr.map(v => v * 2);
const b = arr.reduce((t, v) => [...t, v * 2], []);

//filter: [2, 3]
const c = arr.filter(v => v > 1);
const d = arr.reduce((t, v) => v > 1 ? [...t, v] : t, []);

// reduce chấp cả hai map + fitler
const e = arr.map(v => v * 2).filter(v => v > 2);
const f = arr.reduce((t, v) => v * 2 > 2 ? [...t, v * 2] : t, []);


/* __________________________________________________________ */
//COUNT ELEMENT SAME VALUE IN ARRAY
function Count(arr = []) {
    return arr.reduce((t, v) => (t[v] = (t[v] || 0) + 1, t), {});
};
const arr_ = [0, 1, 1, 3, 0, 2, 3];
console.log(Count(arr_));

/* __________________________________________________________ */
//Tách phần tử trong arrayy theo đúng type of 
function unZip(arr = []) {
    return arr.reduce(
        (t, v) => (v.forEach((w, i) => t[i].push(w)), t),
        Array.from({
            length: Math.max(...arr.map(v => v.length))
        }).map(v => [])
    );
}
const arr__ = [
    ["a", 1, true],
    ["b", 2, false]
];
console.log(unZip(arr__)); // [["a", "b"], [1, 2], [true, false]]

/* __________________________________________________________ */
// REDUCE REPLACE MAX() OR MIN()

function Max(arr = []) {
    return arr.reduce((t, v) => t > v ? t : v);
}

function Min(arr = []) {
    return arr.reduce((t, v) => t < v ? t : v);
}
const arrMin = [12, 45, 21, 65, 38, 76, 108, 43];
console.log(Max(arrMin)); // 108
/* __________________________________________________________ */
// REDUCE REPLACE REVERSE()

function reverseString(arr) {
    return arr.reduceRight((t, v) => (t.push(v), t), [])
    }

    console.log(reverseString(arrMin))