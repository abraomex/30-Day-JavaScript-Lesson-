// Day 10 — Object Methods & `this`
// Example:
const person = {
  name: 'Sam',
  greet: function() { console.log('Hi, I am', this.name); }
};
person.greet();

// Bind/call example
function showAge() { console.log(this.age); }
const p2 = { age: 30 };
showAge.call(p2);
// Exercise: create an object with a method that uses `this` and invoke it.
