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

// Basic problem 7: Rotate an Array - Clockwise or Right
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
// console.log(arrRotation(rotateThis, 2), "Rotation of Array");

// Easy problem 8: Largest Element in an Array in Javascript
// Input : [10, 15, 38, 20, 13];
// Output: 38
// Here we will see the 38 is the largest elements in the given array
function largestInArr(arr) {
   let largest = -1;
   for (i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
         largest = arr[i];
      }
   }
   return largest;
}
const largestInThis = [10, 15, 38, 20, 13];
// console.log(largestInArr(largestInThis), "Largest element");

// Easy problem 9: Second Largest Element in Array
// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.
function secLargestinArr(arr) {
   let largest = arr[1];
   let secondLargest = arr[2];
   for (i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
         secondLargest = largest;
         largest = a[i];
      }
      if (arr[i] < largest && arr[i] > secondLargest && arr[i] !== largest) {
         secondLargest = arr[i];
      }
   }
   return secondLargest;
}
const findSecondLargestInArr = [12, 35, 1, 10, 34, 1, 76];
// console.log(secLargestinArr(findSecondLargestInArr), "Second largest in array");

// Easy problem 10:Check if array is sorted in Javascript
// Input : const arr = [1, 2, 3, 4, 5]; 
// Output : true
// Input : const arr = [3, 1, 4, 2, 5];
// Output : false
function isArraySorted(arr) {
   for (i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
         return false;
      }
   }
   return true;
}
const array = [1, 2, 3, 4, 5];
// console.log(isArraySorted(array), "Array of the section.");

// Easy problem 11:Reverse an Array in Javascript

// Easy problem 12:Move all zeros to end in Javascript
// Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
// Output : arr[] = {1, 2, 4, 3, 5, 0, 0};
function moveAllZeroToEnd(arr) {
   let i = 0;
   for (j = 0; j < arr.length; j++) {
      if (arr[j] != 0) {
         arr[i] = arr[j];
         i++;
      }
   }
   while (i < arr.length) {
      arr[i] = 0;
      i++;
   }
   return arr;
}
const inputArrForZero = [1, 2, 0, 4, 3, 0, 5, 0];
// console.log(moveAllZeroToEnd(inputArrForZero), "Moves all zeros to end!");

// Easy problem 13:Left Rotate by One in an Array in JavaScript
// Original Array: [ 1, 2, 3, 4, 5 ]
// Array after Left Rotation : [ 2, 3, 4, 5, 1 ]

function leftRotateArrAY(arr, d) {
   const n = arr.length;
   for (i = 0; i < d; i++) {
      let first = arr[0];
      let last = n - 1;
      for (j = 0; j < n - 1; j++) {
         arr[j] = arr[j + 1];
      }
      arr[last] = first;
   }
   return arr;
}
const rotateArr = [1, 2, 3, 4, 5];
// console.log(leftRotateArrAY(rotateArr, 2), "array after rotation")

// Easy problem 14:Leaders in an Array in JS
function leaderArrays(arr) {
   const n = arr.length;
   let arraylEDDER = [arr[n - 1],];
   let max = arr[n - 1];
   for (j = n - 2; j >= 0; j--) {
      if (arr[j] > max) {
         max = arr[j];
         arraylEDDER.push(arr[j]);
      }
   }
   return arraylEDDER;
}
const arrayForLeader = [16, 17, 4, 3, 5, 2];
// console.log('Leeder', leaderArrays(arrayForLeader));

// Easy problem 15:Frequencies in a Sorted array in JS
// Input:
// array = [3, 3, 1, 1, 1, 8, 3, 6, 8, 8] 
// Output:
// [6, 1, 1, 1, 3, 3, 3, 8, 8, 8]
// Explanation:
// Number 6 occurs 1 time
// Number 1 occurs 3 times
// Number 3 occurs 3 times
// Number 8 occurs 3 times
function sortOnFreq(arr) {
   const freqMap = new Map();
   arr.forEach((num) => {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
   });
   return arr.sort((a, b) => {
      if (freqMap.get(a) !== freqMap.get(b)) {
         return freqMap.get(a) - freqMap.get(b);
      } else {
         return a - b;
      }
   })
}
// const inputForFre = [3, 3, 1, 1, 1,1, 8, 3, 6, 8, 8, 9];
// console.log(sortOnFreq(inputForFre), "Sort based upon the frequency!");

// Medium Problems 16: Sort an array of 1 to n
function sortAnArray(arr) {
   const a = [...arr];
   const n = a?.length;
   for (i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (j = i + 1; j < n; j++) {
         if (a[j] < a[minIndex]) {
            minIndex = j;
         }
      }
      if (i !== minIndex) {
         [a[i], a[minIndex]] = [a[minIndex], a[i]];
      }
   }
   return a;
}

// const sortThisArray = [5, 2, 8, 1];
// console.log(sortAnArray(sortThisArray));

// Linear search
function linearSearch(arr, element) {
   for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] === element) {
         return i + 1;
      }
   }
   return -1;
}

// const linearSearchArr1 = [10, 25, 7, 43, 19];
// console.log(linearSearch(linearSearchArr1, 43), "linearSearchArr");

// Bubble sort
function bubbleSortAlg(arr) {
   const a = [...arr];
   const n = arr.length;
   let temp;

   for (i = 0; i < n; i++) {
      for (j = 0; j < n - i - 1; j++) {
         if (a[j] > a[j + 1]) {
            temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
         }
      }
   }
   return [arr, a];
}

// const arrShortWithBubble = [5, 2, 8, 1];
// console.log(bubbleSortAlg(arrShortWithBubble), "Selection Sort this arr");

// Selection sort
function selectionSortAlgo(arr) {
   const a = [...arr];
   const n = arr?.length;
   for (i = 0; i < n; i++) {
      let min = i;
      for (j = i + 1; j < n; j++) {
         if (a[j] < a[min]) {
            min = j;
         }
      }
      if (i !== min) {
         [a[i], a[min]] = [a[min], a[i]]
      }
   }

   return arr;
}

const sortThisArr = [5, 2, 8, 1];
// console.log(selectionSortAlgo(sortThisArr), "Selection Sort tis arr::");

// Medium Problems 17: Reorder according to given indexes
// Medium Problems 18: Minimum Swaps to Sort
// Medium Problems 19: Sort an array of 0s, 1s and 2s
// Medium Problems 20: Merge with O(1) extra space
// Medium Problems 21: Majority Element

/** Phase 2A — Arrays: Traversal Basics */

// # Array Practice Questions with Example Output

// ## 1. Find Maximum & Minimum in Array
// **Problem:**
// Given an array of integers, find the maximum and minimum element.
// ### Example
// Input
// ```text
// arr = [4, 2, 9, 1, 7]
// ```
// Output:
// ```text
// Maximum = 9
// Minimum = 1
// ```
function findMinAndMax(arr) {
   const n = arr?.length;
   const sortedArray = arr?.sort((a, b) => a - b);
   const output_first = {
      min: sortedArray[0],
      max: sortedArray[n - 1]
   }
   return output_first;
}
function findMaxAndMin(arr) {
   const n = arr?.length;
   let min = arr[0];
   let max = arr[0];
   for (let i = 1; i < n; i++) {
      const targetArray = arr[i];
      if (targetArray > max) {
         max = targetArray;
      }
      if (targetArray < min) {
         min = targetArray;
      }
   }
   return { min, max };
}
// console.log(findMinAndMax([4, 2, 9, 1, 7]), "Find Min. And Max.");
// console.log(findMaxAndMin([4, 2, 9, 1, 7]), "Find Max And Min.");

// ## 2. Sum & Average of Array
// **Problem:**
// Find the sum and average of all elements in the array.
// ### Example
// Input:
// ```
// arr = [2, 4, 6, 8]
// ```
// Output:
// ```text
// Sum = 20
// Average = 5
// ```
function sumAndAverage(arr) {
   const n = arr?.length;
   let sum = arr[0];
   for (let i = 1; i < n; i++) {
      sum += arr[i];
   }
   console.log(sum, "total sum");
   const average = Math.floor(sum / n);
   return { Sum: sum, Average: average };
}
// console.log(sumAndAverage([2, 4, 6, 8]), "QUESTION 2");

// ## 3. Reverse Array In-Place
// **Problem:**
// Reverse the given array without using extra space.
// ### Example
// Input:
// ```text
// arr = [1, 2, 3, 4, 5]
// ```
// Output:
// ```text
// Reversed Array = [5, 4, 3, 2, 1]
// ```
function reverseFirst(arr) {
   return arr?.reverse();
}
function reverseSecond(arr) {
   let n = arr?.length;
   let reverseArr = [];
   for (let i = n - 1; i >= 0; i--) {
      reverseArr.push(arr[i]);
   }
   return reverseArr;
}
/** *Note: Two POINTER */
function reverseThird(arr) {
   let n = arr.length;
   let left = 0;
   let right = n - 1;
   while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++;
      right--;
   }
   return arr;
}
// console.log(reverseFirst([1, 2, 3, 4, 5]), "1 1 1 1");
// console.log(reverseSecond([1, 2, 3, 4, 5]), "2 2 2 2");
// console.log(reverseThird([1, 2, 3, 4, 5]), "3 3 3 3");

// ## 4. Second Largest / Second Smallest
// **Problem:**
// Find the second largest and second smallest element in the array.
// ### Example
// Input:
// ```text
// arr = [8, 3, 5, 1, 9]
// ```
// Output:
// ```text
// Second Largest = 8
// Second Smallest = 3
// ```
function secondLargest(arr) {
   const n = arr?.length;
   let largest = -Infinity;
   let secondLargest = -Infinity;
   for (let i = 0; i < n; i++) {
      const targetElement = arr[i];
      if (targetElement > largest) {
         secondLargest = largest;
         largest = targetElement;
      } else if (targetElement > secondLargest && targetElement !== largest) {
         secondLargest = targetElement;
      }
   }
   return secondLargest;

}
// console.log(secondLargest([10, 8, 3, 5, 1, 9]));
function secondSmallest(arr) {
   const n = arr.length;
   let smallest = Infinity;
   let _2smallest = Infinity;
   for (let i = 0; i <= n; i++) {
      let current = arr[i];
      if (current < smallest) {
         _2smallest = smallest;
         smallest = current;
      } else if (current < _2smallest && current !== smallest) {
         _2smallest = current;
      }
   }
   return _2smallest;
}
// console.log(secondSmallest([10, 8, 3, 5, 1, 9, 0]));

// ## 5. Count Frequency of Each Element
// **Problem:**
// Count how many times each element appears in the array.
// ### Example
// Input:
// ```text
// arr = [1, 2, 2, 3, 1, 4]
// ```
// Output:
// ```text
// 1 -> 2 times
// 2 -> 2 times
// 3 -> 1 time
// 4 -> 1 time
// ```
function countFrequency(arr) {
   const createMap = new Map();
   arr.forEach((ele) =>
      createMap.set(ele, (createMap.get(ele) || 0) + 1)
   );
   // for (const element of arr) {
   //    console.log(element, "-->", createMap.get(element) || 0, "times");
   // }
   for (const [key, value] of createMap) {
      console.log(key, "-->", value, "times");
   }
}
// countFrequency([1, 2, 2, 3, 1, 4]);

// ## 6. Move All Zeros to End (In-Place)
// **Problem:**
// Move all zeros to the end while maintaining the order of non-zero elements.
// ### Example
// Input:
// ```text
// arr = [0, 1, 0, 3, 12]
// ```
// Output:
// ```text
// [1, 3, 12, 0, 0]
// ```
function zeroAtLastPlace(arr = [0, 1, 0, 3, 12]) {
   let pointer = 0;
   const n = arr?.length;
   for (let i = 0; i < n; i++) {
      if (arr[i] !== 0) {
         [arr[i], arr[pointer]] = [arr[pointer], arr[i]];
         pointer++;
      }
   }
   return arr;
}
// console.log(zeroAtLastPlace());

// ## 7. Remove Duplicates from Sorted Array
// **Problem:**
// Remove duplicates from a sorted array and return unique elements.
// ### Example
// Input:
// ```text
// arr = [1, 1, 2, 2, 3, 4, 4]
// ```
// Output:
// ```text
// Unique Array = [1, 2, 3, 4]
// ```
function removeDuplicate(arr = [1, 1, 2, 2, 3, 4, 4]) {
   let n = arr?.length;
   let pointer = 1;
   for (let i = 1; i < n; i++) {
      if (arr[i] !== arr[i - 1]) {
         arr[pointer] = arr[i];
         pointer++;
      }
   }
   return arr.slice(0, pointer);
}
// console.log(removeDuplicate());

// ## 8. Rotate Array Left/Right by K Steps
// **Problem:**
// Rotate the array by K positions.
// ### Example (Left Rotation)
// Input:
// ```text
// arr = [1, 2, 3, 4, 5]
// k = 2
// Output:
// ```text
// [3, 4, 5, 1, 2]
// ```
// ### Example (Right Rotation)
// Input:
// ```text
// arr = [1, 2, 3, 4, 5]
// k = 2
// ```
// Output:
// ```text
// [4, 5, 1, 2, 3]
// ```
function leftRotate(arr = [1, 2, 3, 4, 5], k = 2) {
   const n = arr?.length;
   for (d = 0; d < k; d++) {
      let lastElement = arr[n - 1];
      for (let i = n; i > 0; i--) {
         arr[i] = arr[i - 1];
      }
      arr[0] = lastElement;
   }
   return arr;
}

// console.log(leftRotate(), "Haaa");

// ## 9. Check if Array is Sorted
// **Problem:**
// Check whether the array is sorted in ascending order.
// ### Example
// Input:
// ```text
// arr = [1, 2, 3, 4, 5]
// ```
// Output:
// ```text
// Array is Sorted
// ```
function isArrSorted(arr = [1, 2, 3, 4, 5, 9]) {
   const n = arr?.length;
   for (let i = 1; i < n; i++) {
      if (arr[i] < arr[i - 1]) {
         return false
      }
   }
   return true;
}
// console.log(isArrSorted())

// ## 10. Left Rotate Array by 1
// **Problem:**
// Rotate the array left by one position.
// ### Example
// Input:
// ```text
// arr = [1, 2, 3, 4, 5]
// ```
// Output:
// ```text
// [2, 3, 4, 5, 1]
// ```
function rotateArray1(arr, k) {
   let n = arr?.length;
   for (let d = 0; d < k; d++) {
      let lastElem = arr[n - 1];
      for (let i = n - 1; i > 0; i--) {
         arr[i] = arr[i - 1];
      }
      arr[0] = lastElem;
   }
   return arr;
}
// console.log(rotateArray1([1, 2, 3, 4, 5], 1));

// ## 11. Union & Intersection of Two Arrays
// **Problem:**
// Find the union and intersection of two arrays.
// ### Example
// Input:
// ```text
// arr1 = [1, 2, 3, 4]
// arr2 = [3, 4, 5, 6]
// ```
// Output:
// ```text
// Union = [1, 2, 3, 4, 5, 6]
// Intersection = [3, 4]
// ```

// ## 12. Find Missing Number (1 to N)
// **Problem:**
// Find the missing number from an array containing numbers from 1 to N.
// ### Example
// Input:
// ```text
// arr = [1, 2, 4, 5]
// N = 5
// ```
// Output:
// ```text
// Missing Number = 3
// ```
function findMissingNumber(arr = [1, 2, 4, 5], n = 5) {
   let totalSum = n * (n + 1) / 2;
   let summOFArray = 0;
   for (let i = 0; i < arr.length; i++) {
      summOFArray += arr[i];
   }
   return totalSum - summOFArray;
}
// console.log(findMissingNumber());

// ## 13. Find the Duplicate in Array
// **Problem:**
// Find the duplicate element in the array.
// ### Example
// Input:
// ```text
// arr = [1, 3, 4, 2, 2]
// ```
// Output:
// ```text
// Duplicate Element = 2
// ```
function duplicateArrayof(arr) {
   let visited = {};
   for (let i = 0; i < arr.length; i++) {
      if (visited[arr[i]]) {
         return arr[i];
      }
      visited[arr[i]] = true;
   }
   console.log(visited, "visited");
   return "No duplicate"
}
// console.log(duplicateArrayof([1, 3, 4, 2, 2]));

// ## 14. Longest Subarray with Sum K (Brute Force)
// **Problem:**
// Find the length of the longest subarray having sum equal to K.
// ### Example
// Input:
// ```text
// arr = [1, 2, 3, 1, 1, 1, 1]
// K = 6
// ```
// Output:
// ```text
// Longest Length = 4
// ```
// Explanation:
// ```text
// Subarray = [3,1,1,1]
// ```
function subArrayGen(arr = [1, 2, 3]) {
   for (let i = 0; i < arr.length; i++) {
      let subarray = "";
      for (let j = i; j < arr.length; j++) {
         subarray += arr[j] + " ";
         console.log(subarray);
      }
   }
}
// console.log(subArrayGen(), "Generate sub array");

// Phase 2B — Two Pointer Technique
// 1. Pair Sum in Sorted Array (Easy)
// arr = [1, 2, 4, 6, 8]
// target = 10
// Output: (2, 8) or indices of these elements

// 2. Remove Duplicates from Sorted Array
// Input:  [1,1,2,2,3,4,4]
// Output: [1,2,3,4]
// Length = 4

// 3. Move Zeros to End
// Input:  [0,1,0,3,12]
// Output: [1,3,12,0,0]

// 4. Sorted Squares of Sorted Array
// Input:  [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// 5. Container With Most Water
// height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Area = min(height[left], height[right])
//        × (right - left)

// 6. 3Sum – Find Triplets With Zero Sum
// Input:  [-1,0,1,2,-1,-4]
// Output:
// [-1,-1,2]
// [-1,0,1]

// 7. Check Palindrome Using Two Pointers
// 8. Merge Two Sorted Arrays
// arr1 = [1,3,5]
// arr2 = [2,4,6]
// Output:
// [1,2,3,4,5,6]
