// Day 11 — Destructuring & Spread
// Example:
const arr = [1, 2, 3];
const [first, second] = arr;
console.log('first,second:', first, second);

const obj = { x: 10, y: 20 };
const { x, y } = obj;
console.log('x,y:', x, y);

const arr2 = [0, ...arr, 4];
console.log('spread arr2:', arr2);
// Exercise: swap two variables using array destructuring.
