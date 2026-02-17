// Day 15 — Regular Expressions
// Example:
const text = 'Order: 1234, Qty: 9';
const digits = text.match(/\d+/g); // global digits
console.log('digits:', digits);
const email = 'me@example.com';
console.log('is email:', /.+@.+\..+/.test(email));
// Exercise: extract all words from a sentence using regex.
