// Day 25 — Browser Storage (localStorage)
// Note: localStorage is available in browsers, not Node.
// Example:
try {
  localStorage.setItem('greet', 'hi');
  console.log('greet from storage:', localStorage.getItem('greet'));
} catch (e) {
  console.log('localStorage not available in this environment');
}
// Exercise: persist an object as JSON and retrieve it.
