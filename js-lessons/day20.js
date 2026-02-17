// Day 20 — Error Handling (try / catch / finally)
// Example:
try {
  JSON.parse('not-json');
} catch (err) {
  console.log('caught error:', err.message);
} finally {
  console.log('cleanup if needed');
}
// Exercise: throw a custom Error and catch it.
