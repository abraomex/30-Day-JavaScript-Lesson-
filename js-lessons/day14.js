// Day 14 — Dates & Timers
// Example:
const now = new Date();
console.log('now:', now.toISOString());

setTimeout(() => console.log('timeout after 500ms'), 500);
let count = 0;
const id = setInterval(() => {
  count++;
  console.log('interval tick', count);
  if (count >= 3) clearInterval(id);
}, 300);
// Exercise: implement a simple countdown using setInterval.
