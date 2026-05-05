console.log('Hello! i m starting the DSA');

let a = [];
let aCopy = new Array(1, 2, 3);
// console.log(typeof a, a, a[0], "console 1", aCopy)
let b = {};
// console.log(typeof b, "console 2");
// console.log(typeof null, typeof undefined, 'console 3');

// Que:1: Why does typeof treat a plain object { } and an array[] the same ?
// Ans: typeof only has a few built‑in types:
//    1. primitives: "number", "string", "boolean", "undefined", "symbol", "bigint", 
//    "null"(bug, returns "object").
//    2. everything else → "object".
//
// Que 2: What is the main difference between a JavaScript array and a JavaScript object?
// Ans: Arrays use numeric indices, while objects use string indices.

// NOTE: Check array with instanceof Array

// push --> Add element at the end
// unShift --> add element at the beginning
// concat --> used for concat the array
// toString --> convert array to string

// ****** Basic Problems ******
// 1 Print Alternates
// 2. Linear Search
// 3. Largest Element
// 4. Second Largest
// 5. Remove Duplicates from Sorted
// 6. Generate all Sub arrays
// 7. Reverse an Array
// 8. Rotate an Array

// Basic problem 1:
// Input: arr[] = [10, 20, 30, 40, 50]
// Output: 10 30 50
// Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).

// Input: arr[] = [-5, 1, 4, 2, 12]
// Output: -5 4 12

function printAlternative(arr) {
   // Approach 1
   const basicArr = [];
   for (i = 0; i < arr.length / 2; i++) {
      basicArr[i] = arr[i * 2];
   }
   // Approach 2
   const basicArray = [];
   for (i = 0; i < arr.length; i += 2) {
      basicArray.push(arr[i]);
   }
   return { "output1": basicArr, "output2": basicArray };
}

const basicArr = [10, 20, 30, 40, 50, 60];
// console.log(printAlternative(basicArr), "Print Alternative");

// Basic problem 2: Linear Search
// Input: arr[] = [1, 2, 3, 4], x = 3
// Output: 2
// Explanation: There is one test case with array as [1, 2, 3 4] and element to be searched 
// as 3. Since 3 is present at index 2, the output is 2.
// Input: arr[] = [10, 8, 30, 4, 5], x = 5
// Output: 4

function linearSearch(arr, ele) {
   for (i = 0; i < arr.length; i++) {
      if (arr[i] == ele) {
         return i;
      }
   }

   return "Element do not exist";
}

const linearSearchArr = [10, 8, 30, 4, 5];
const searchElement = 5;
// console.log(linearSearch(linearSearchArr, searchElement), "<-- Search element Index:");

// Basic problem 3: Largest element in an Array
// Input: arr[] = [10, 20, 4]
// Output: 20
// Explanation: Among 10, 20 and 4, 20 is the largest. 
// 
// Input: arr[] = [20, 10, 20, 4, 100]
// Output: 100

function largest(arr) {
   return arr;
}

function smallest(arr) {
   return arr;
}

const maxAndMinArr = [20, 10, 20, 4, 100];
console.log(largest(maxAndMinArr), smallest(maxAndMinArr), "Largest and smallest value:");