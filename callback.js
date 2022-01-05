const arr = [1, 2, 3, 4, 5];

function myEach(callback, arr) {
    for (let i = 0; i < arr.length; i++)
        callback(arr[i]);
}

function printArr(item) {
    console.log(item);
}

console.log("Running myEach");
myEach(printArr, arr);

function myMap(callback, arr) {
    let result = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i]);
    }
    return result;
}

function addFive(item) {
    return item + 5;
}

console.log("Running myMap", myMap(addFive, arr));

function mySome(callback, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]))
            return true;
    }
    return false;
}

function checkIfFive(num) {
    return num === 5;
}

console.log("Running mySome", mySome(checkIfFive, arr));

function myEvery(callback, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i]))
            return false;
    }
    return true;
}

console.log("Running myEvery", myEvery(checkIfFive, arr));

function myReduce(callback, arr) {
    let currentValue = arr[1];
    let previousValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentValue = arr[i];
        previousValue = callback(previousValue, currentValue); 
    }
    return previousValue;
}

function adder(num1, num2) {
    return num1 + num2;
}

console.log("Running myReduce", myReduce(adder, arr));

function myIncludes(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            return true; 
    }
    return false;
}

console.log("Running myIncludes", myIncludes(arr, 7));

function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            return i;
    }
    return -1;
}

function myPush(arr, element) {
    arr[arr.length] = element;
    console.log("After running myPush", arr);
}

console.log("Before running myPush", arr);
myPush(arr, 6);

function myLastIndexOf(arr, target) {
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            result = i;
    }
    return result;
}

console.log("Running myLastIndexOf", myLastIndexOf(arr, 6));

const object = { a: 1, b: 2, c: 3 };

function grabKeys(obj) {
    for (const key in obj) {
        console.log(key);
    }
}

console.log("Running grabKeys", grabKeys(object));

function grabValues(obj) {
    for (const key in obj) {
        console.log(obj[key]);
    }
}

console.log("Running grabValues", grabValues(object));