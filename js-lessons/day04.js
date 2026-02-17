// Day 04 — Loops (for, while, for...of)
// Example:
for (let i = 1; i <= 5; i++) {
  console.log('for i=', i);
}

let j = 0;
while (j < 3) {
  console.log('while j=', j);
  j++;
}

const arr = [10, 20, 30];
for (const v of arr) console.log('value', v);
// Exercise: compute the sum of numbers in an array using a loop.
