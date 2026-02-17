// Day 18 — async/await
// Example:
async function f() {
  const value = await new Promise(res => setTimeout(() => res(42), 100));
  return value;
}
f().then(v => console.log('async value:', v));
// Exercise: convert a chain of .then() calls into async/await.
