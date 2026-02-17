// Day 21 — Closures
// Example:
function makeCounter() {
  let n = 0;
  return function() {
    n += 1;
    return n;
  };
}
const c = makeCounter();
console.log(c());
console.log(c());
// Exercise: create a closure that stores and returns a private value with getters/setters.
