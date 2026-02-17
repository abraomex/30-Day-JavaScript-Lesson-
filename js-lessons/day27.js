// Day 27 — Memory & Performance Tips
// Example: measure simple loop timing
const big = Array.from({length: 1e6}, (_, i) => i);
console.time('sum');
const total = big.reduce((s, v) => s + v, 0);
console.timeEnd('sum');
console.log('total length', big.length, 'sum sample', total.toString().slice(0,10));
// Exercise: compare two algorithms using console.time/console.timeEnd.
