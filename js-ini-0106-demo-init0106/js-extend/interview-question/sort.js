const arr = [5, 3, 1, 4, 6];

/* Javascript Algorithms — Bubble Sort */
// BUBBLE SORT  TIME COMPLEXITY 0(N^2)
let bubbleSort = (inputArr) => {
    let lengArr = inputArr.length;
    for (let i = 0; i < lengArr; i++) {
        for (let j = 0; j < lengArr; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let temp = inputArr[j + 1];
                inputArr[j + 1] = inputArr[j];
                inputArr[j] = temp;
            }
        }
    }
    return inputArr;
}
/* loop function without two loop arr */
let bubbleSortD = (inputArr) => {
    let lengArr = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < lengArr; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i + 1];
                inputArr[i + 1] = inputArr[i];
                inputArr[i] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
}
/* SELCETION SORT MEDIUM - W3RESOURCE */
// Selection sort with O(n^2) time complexity

let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}
function selectionSort_w3(arr, compare_Func){
    function compare(a,b){
        return a - b; 
    }
    var min = 0;
    var idx = 0;
    var tmp = 0;
    let len = arr.length;
    for(let i = 0; i < len; i++){
        idx = i;
        min = arr[i];
        for(let j = i + 1; j < len; j++){
            if(compare_Func(min,arr[j]) >0){
                min = arr[j];
                idx = j;
            }
        }
        tmp = arr[i];
        arr[i] = min;
        arr[idx] = tmp;
    }
    return arr;
}
let oldValue = 1;
let defaulValue = 3;
var newValue = oldValue || defaulValue;
console.log(newValue);

SELECTION SORT TIME COMPLEXITY :  0(N^2)
function selectionSort_(arr){
    let len = arr.length;
    for(let i =0; i < len; i++){
        let min = i;
        for(let j = i + 1; j < len; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        if(min !== i){
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

console.log(selectionSort_(arr));
// console.log(selectionSort_w3(arr,(a,b) => b - a ));