// Day 23 — Classes (ES6)
// Example:
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  dist() { return Math.hypot(this.x, this.y); }
}
const p = new Point(3, 4);
console.log('distance:', p.dist());
// Exercise: add a method to translate the point by dx/dy.
