// Day 26 — Event Loop & Microtasks
// Example:
console.log('script start');
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise resolved'));
console.log('script end');
// Expected order: script start, script end, promise resolved, timeout
// Exercise: experiment with multiple microtasks and macrotasks to observe ordering.
