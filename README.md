# Unexpected Behavior with 0 Values in JavaScript Function

This repository showcases a subtle bug in a JavaScript function that involves unexpected behavior when using 0 as an argument. The function is designed to handle null values correctly but exhibits unexpected behavior when 0 is passed as an argument.  The bug and its solution are demonstrated through the included JavaScript files.

## Files

- `bug.js`: Contains the JavaScript code demonstrating the unexpected behavior.
- `bugSolution.js`: Contains the corrected JavaScript code that addresses the issue.

## How to Run

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in a code editor or IDE.
3. Run the JavaScript code in a JavaScript environment (browser's console, Node.js, etc.) to observe the outputs of both files.

## Bug Description

The function `foo` is intended to add two numbers.  It correctly handles null values by returning null. However, when either `a` or `b` is 0,  the function treats 0 as a regular number rather than considering it a case that might require special handling, potentially leading to incorrect results in scenarios where 0 represents a specific state or condition that should not be added arithmetically.