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
   let max = arr[0];
   for (i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return max;
}

function smallest(arr) {
   let min = arr[0];
   for (i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
         min = arr[i];
      }
   }
   return min;
}

const maxAndMinArr = [20, 10, 20, 4, 100];
// console.log(largest(maxAndMinArr), smallest(maxAndMinArr), "Largest and smallest value:");

// Basic problem 4:Second Largest Element in an Array
// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

// Input: arr[] = [10, 5, 10]
// Output: 5

function secondLargest(arr) {
   let secondLargest = -1;
   let largest = -1;
   for (i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
         secondLargest = largest;
         largest = arr[i];
      }
      if (arr[i] < largest && arr[i] > secondLargest) {
         secondLargest = arr[i];
      }
   }

   return { secondLargest, largest };
}

const secondLargeArr = [12, 30, 35, 10, 34, 1, 70, 71]
// console.log(secondLargest(secondLargeArr), "Second largest");

// Basic problem: Remove duplicates from Sorted Array
// Input: arr[] = [2, 2, 2, 2, 2]
// Output: [2]
// Explanation: All the elements are 2, So only keep one instance of 2.
// Input: arr[] = [1, 2, 2, 3, 4, 4, 4, 5, 5]
// Output: [1, 2, 3, 4, 5]
// Input: arr[] = [1, 2, 3]
// Output: [1, 2, 3]
// Explanation : No change as all elements are distinct.

function removeDuplicates(arr) {
   let n = arr.length;
   if (n <= 0) {
      return 0;
   }
   if (n === 1) return 1;

   let i = 1;
   for (j = 1; j < n; j++) {
      if (arr[j] !== arr[j - 1]) {
         arr[i] = arr[j];
         i++;
      }
   }
   return i;
}

const removeDuplicateArr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const k = removeDuplicates(removeDuplicateArr);
// console.log(removeDuplicates(removeDuplicateArr), "removeDuplicates array");
// console.log(removeDuplicateArr.slice(0, k));

// Basic problem 5: Generating All Sub-arrays
// Input: arr[] = [1, 2, 3]
// Output: [ [1], [1, 2], [2], [1, 2, 3], [2, 3], [3] ]

// Input: arr[] = [1, 2]
// Output: [ [1], [1, 2], [2] ]

function getSubArray(arr) {
   const n = arr.length;
   const subArray = [];
   for (i = 0; i < n; i++) {
      for (j = i + 1; j <= n; j++) {
         console.log(i, j, arr.slice(i, j))
         subArray.push(arr.slice(i, j));
      }
   }
   return subArray;
}

const subArray = [1, 2, 3];
// console.log(getSubArray(subArray), "Sub array");

// Basic problem 6: Array Reverse
// Input: arr[] = [1, 4, 3, 2, 6, 5] 
// Output:  [5, 6, 2, 3, 4, 1]
// Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.

function reverseArray(arr) {
   let reverseArr = [];

   // Simple approach
   // for (i = arr.length - 1; i >= 0; i--) {
   //    console.log(i);
   //    reverseArr.push(arr[i]);
   // }
   // return reverseArr;

   // Using single pointer
   // const n = arr.length;
   // for (i = 0; i < arr.length / 2; i++) {
   //    const temp = arr[i];
   //    arr[i] = arr[n - i - 1];
   //    arr[n - i - 1] = temp;
   // }
   // return arr;

   // Using two pointer
   const n = arr.length;
   let start = 0;
   let end = n - 1;
   while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
   }
   return arr;
}

const arrayReverse = [1, 4, 3, 2, 6, 5];
// console.log(reverseArray(arrayReverse), "Reverse array");

// Basic problem: Rotate an Array - Clockwise or Right
// Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
// Output: {5, 6, 1, 2, 3, 4}
// Explanation: After first right rotation, arr[] becomes {6, 1, 2, 3, 4, 5}
//  and after the second rotation, arr[] becomes {5, 6, 1, 2, 3, 4}

function arrRotation(arr, d) {
   let n = arr.length;
   for (i = 0; i < d; i++) {
      let last = arr[n - 1];
      for (j = n - 1; j > 0; j--) {
         arr[j] = arr[j - 1];
      }
      arr[0] = last;
   }
   return arr;
}

const rotateThis = [1, 2, 3, 4, 5, 6];
console.log(arrRotation(rotateThis, 2), "Rotation of Array");