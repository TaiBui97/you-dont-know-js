const arr_ = [2, 3, 5, 7, 9, 13, 17, 19, 23, 27, 31, 37, 39, 41, 43, 47];

const arr = [5, 3, 1, 4, 6];
// /* Javascript Algorithms — Bubble Sort */
// // BUBBLE SORT  TIME COMPLEXITY 0(N^2)
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
// /* loop function without two loop arr */
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
                q
            }
        }
    } while (swapped);
    return inputArr;
}
// /* SELCETION SORT MEDIUM - W3RESOURCE */
// // Selection sort with O(n^2) time complexity

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

function selectionSort_w3(arr, compare_Func) {
    function compare(a, b) {
        return a - b;
    }
    var min = 0;
    var idx = 0;
    var tmp = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        idx = i;
        min = arr[i];
        for (let j = i + 1; j < len; j++) {
            if (compare_Func(min, arr[j]) > 0) {
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
// let oldValue = 1;
// let defaulValue = 3;
// var newValue = oldValue || defaulValue;
// console.log(newValue);

// SELECTION SORT TIME COMPLEXITY :  0(N^2)
function selectionSort_(arr) {
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
/* find Fibonacci nuber with recursion  */
function findFibonacci(n) {
    if (n == 1 || n == 2)
        return 1;
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}
// /* find Fibonacci nuber with recursion return arr  */

let finbonacci_serries = function (n) {
    if (n === 1) {
        return [0, 1];
    } else {
        let s = finbonacci_serries(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};


/* LINEAR SEACRH
Time Complexity: O(n) - since in the worst case we're checking each element exactly once.
 */
function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            console.log('elenment found index' + i);
            return x;
        }
    }
    return null;
}
// console.log(linearSearch(arr,3));

function binarySearch(arr, start, end, x) {
    if (start > end) {
        return null;
    }
    let middleNums = Math.floor(start + (end - start) / 2);
    if (arr[middleNums] == x) {
        return middleNums;
    } else if (arr[middleNums] > x) {
        return binarySearch(arr, start, middleNums - 1, x);
    } else {
        return binarySearch(arr, middleNums + 1, end, x);
    }
}

function binarySearch_(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === x) return mid;
        else if (arr[mid] < x) {
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }
    return false;
}

//insert
function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}


function findSumsTwoNums(arr_, target) {
    let low = 0,
        high = arr_.length - 1;
    while (low < high) {
        if (arr_[low] + arr_[high] === target) {
            return [low, high];
        }
        if (arr_[low] + arr_[high] > target) {
            high--;
        } else {
            low++;
        }


    }
    return [];
}

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i - 1;
        let tmp = arr[i];
        while (j >= 0 && arr[j] > tmp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = tmp;
    }
    return arr;

}
console.log(insertionSort(arr));
// console.log(insertionSort(arr));

/* INSERTION SORT TIME COMPLEXITY : 0(N^2) */


/* INSERTION SORT TIMECOMEPLEXY 0(N^2) */


//  console.log(finbonacci_serries(8));
// console.log(selectionSort_(arr));
// console.log(selectionSort_w3(arr,(a,b) => b - a ));
// console.log(binarySearch(arr, 0, arr.length, 27));
// console.log(binarySearch_(arr, 27));
