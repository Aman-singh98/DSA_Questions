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

const arrShortWithBubble = [5, 2, 8, 1];
console.log(bubbleSortAlg(arrShortWithBubble), "Selection Sort this arr");

// Selection sort
// function selectionSortAlgo(arr) {
//    return arr;
// }

// const sortThisArr = [5, 2, 8, 1];
// console.log(selectionSortAlgo(arr), "Selection Sort tis arr");

// Insertion sort
// function insertionSortAlgo(arr) {
//    return arr;
// }

// const sortThisArray = [5, 2, 8, 1];
// console.log(insertionSortAlgo(sortThisArray), "insertionSortAlgo(arr)")

// Medium Problems 17: Reorder according to given indexes
// Medium Problems 18: Minimum Swaps to Sort
// Medium Problems 19: Sort an array of 0s, 1s and 2s
// Medium Problems 20: Merge with O(1) extra space
// Medium Problems 21: Majority Element