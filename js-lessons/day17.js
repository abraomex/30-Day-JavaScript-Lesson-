// Day 17 — Promises
// Example:
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 200);
});
p.then(value => console.log('resolved:', value));
// Exercise: create a Promise that rejects and handle it with .catch().
