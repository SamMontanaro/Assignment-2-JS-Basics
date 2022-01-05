const arr = [1, 2, 3, 4, 5];
const object = { a: 1, b: 2, c: 3 };

console.log("Running forEach");
arr.forEach(e => console.log(e));
console.log("Running map", arr.map(e => e + 5));
console.log("Running some", arr.some(e => e === 5));
console.log("Running every", arr.every(e => e === 5));
console.log("Running reduce", arr.reduce((curr, next) => curr + next));
console.log("Running includes", arr.includes(7));
console.log("Before running push", arr);
arr.push(6);
console.log("After running push", arr);
console.log("Running last index of", arr.lastIndexOf(6));
console.log("Running Object.keys", Object.keys(object));
console.log("Running Object.values", Object.values(object));