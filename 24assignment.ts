//More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, 
//greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array


// Tests for equality and inequality with strings
console.log("Equality and inequality with strings:");
console.log("apple" === "apple"); // true
console.log("orange" === "orange"); // true

console.log("apple" === "apple"); // false

// Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log("HELLO".toLowerCase() === "hello"); // true
console.log("WORLD".toLowerCase() !== "world"); // false

// Numerical tests
console.log("\nNumerical tests:");
console.log(5 > 3); // true
console.log(10 < 5); // false
console.log(7 >= 7); // true
console.log(4 <= 2); // false
console.log(10 === 10); // true


// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false

// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
let fruits1: string[] = ["apple", "banana", "orange"];
console.log(fruits1.includes("apple")); // true
console.log(fruits1.includes("grape")); // false

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(!fruits1.includes("grape")); // true
console.log(!fruits1.includes("apple")); // false

