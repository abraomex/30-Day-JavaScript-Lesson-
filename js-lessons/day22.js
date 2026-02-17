// Day 22 — Prototypes & Inheritance
// Example:
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { console.log(this.name + ' makes a noise.'); };
const a = new Animal('Dog');
a.speak();
// Exercise: create a subtype (e.g., Dog) that overrides speak.
