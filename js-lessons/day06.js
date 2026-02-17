// Day 06 — Arrow Functions & Scope
// Example:
const square = x => x * x;
console.log('square(5)=', square(5));

// lexical `this` note (simple example)
const obj = {
  value: 100,
  method: function() {
    const inner = () => console.log('this.value =', this.value);
    inner();
  }
};
obj.method();
// Exercise: convert a normal function to an arrow function and observe `this`.
