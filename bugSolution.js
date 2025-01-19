function foo(a, b) {
  if (a === null || b === null || a === 0 || b === 0) {
    return 0; // Handle null and 0 values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10

// Correct handling of 0 values:
console.log(foo(0, 5)); // Output: 0
console.log(foo(5, 0)); // Output: 0
console.log(foo(0, 0)); // Output: 0