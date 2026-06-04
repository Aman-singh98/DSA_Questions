console.log("Solve sliding window:");
// Question 1: Max Sum Subarray of Size K
// Input:
// nums = [2, 1, 5, 1, 3, 2]
// k = 3
// Output:
// 9
function findTheMaxSum(arr = [2, 1, 5, 1, 3, 2]) {
   let k = 3;
   let windowSum = 0;

   for (let i = 0; i < k; i++) {
      windowSum += arr[i];
   }

   let maxSum = windowSum;

   for (let i = k; i < arr.length; i++) {
      windowSum = windowSum - arr[i - k] + arr[i];
      if (maxSum < windowSum) {
         maxSum = windowSum;
      }
   }
   return maxSum;
}
// console.log(findTheMaxSum(), "findTheMaxSum()");

// 2. Average of Every Subarray of Size K
// Input:
// nums = [1, 3, 2, 6, -1, 4, 1, 8, 2]
// k = 5
// Output:
// [2.2, 2.8, 2.4, 3.6, 2.8]
function avreageofSubArray(arr = [1, 3, 2, 6, -1, 4, 1, 8, 2], k = 5) {
   let sumofWindow = 0;
   let result = [];
   for (let i = 0; i < k; i++) {
      sumofWindow += arr[i];
   }
   let average = sumofWindow / k;
   result.push(average);
   for (let i = k; i < arr.length; i++) {
      sumofWindow = sumofWindow - arr[i - k] + arr[i];
      average = sumofWindow / k;
      result.push(average);
   }
   return result;
}
// console.log(avreageofSubArray(), "avreageofSubArray()");

// 3. First Negative Integer in Every Window of Size K
// Input:
// nums = [12, -1, -7, 8, -15, 30, 16, 28]
// k = 3
// Output:
// [-1, -1, -7, -15, -15, 0]
function firstNegativeNumber(
   arr = [12, -1, -7, 8, -15, 30, 16, 28],
   k = 3
) {
   let result = [];

   for (let i = k - 1; i < arr.length; i++) {
      let windowStart = i - k + 1;
      let firstNegative = 0;

      for (let j = windowStart; j <= i; j++) {
         if (arr[j] < 0) {
            firstNegative = arr[j];
            break;
         }
      }

      result.push(firstNegative);
   }

   return result;
}
// console.log(firstNegativeNumber());

// 4. Longest Substring Without Repeating Characters
// Input:
// s = "abcabcbb"
// Output:
// 3

// 5. Longest Subarray with Sum ≤ K
// Input:
// nums = [1, 2, 1, 0, 1, 1, 0]
// k = 4
// Output:
// 5

// 6. Minimum Window Substring
// Input:
// s = "ADOBECODEBANC"
// t = "ABC"

// Output:
// "BANC"

// 7. Count Subarrays with Product Less Than K
// Input:
// nums = [10, 5, 2, 6]
// k = 100

// Output:
// 8

// 8. Max Consecutive Ones III
// Input:
// nums = [1,1,1,0,0,0,1,1,1,1,0]
// k = 2
// Output:
// 6

// Before solve problem than "What was the state, what entered, and what left?"
// 1. What is my state? 
// Sum?
// HashMap?
// Queue?
// Deque?

// 2. What happens when an element enters?
// sum += x
// freq[x]++
// push negative
// maintain deque

// 3. What happens when an element leaves?
// sum -= x
// freq[x]--
// remove from queue if needed
// pop from deque if needed

// Section 1 Running Sum state
// 1. Maximum Sum Subarray of Size K
// 2. Minimum Sum Subarray of Size K
// 3. Average of Every Window of Size K

// Section 2: Frequency Map Sta
// 4. Count Distinct Elements in Every Window of Size K
// 5. Count Frequency of Each Element in Every Window
// 6. Number of Unique Elements in Every Window

// Section 3: Queue State
// 7. First Negative Number in Every Window of Size K
// 8. First Positive Number in Every Window of Size K (same pattern, reversed thinking)

// Section 4: Deque State (Most Important)
// 9. Maximum Element in Every Window of Size K
// 10. Minimum Element in Every Window of Size K

function sumOfArray(arr = [2, 1, 5, 1, 3, 2], k = 3) {
   let sum = 0;
   for (let i = 0; i < k; i++) {
      sum += arr[i];
   }
   let maxSum = sum;
   for (let i = k; i < arr.length; i++) {
      sum = sum - arr[i - k] + arr[i];
      if (maxSum < sum) {
         maxSum = sum;
      }
   }
   return maxSum;
}
// console.log(sumOfArray());

// 2. Minimum Sum Subarray of Size K
function minSumOfArray(arr = [2, 1, 5, 1, 3, 2], k = 3) {
   let sum = 0;
   for (let i = 0; i < k; i++) {
      sum += arr[i];
   }
   // console.log(sum);
   let minSum = sum;
   for (let i = k; i < arr.length; i++) {
      sum = sum - arr[i - k] + arr[i];
      if (sum < minSum) {
         minSum = sum;
      }
   }
   return minSum;
}
// console.log(minSumOfArray());

// Average of Every Window of Size K
function averageSum(arr = [2, 1, 5, 1, 3, 2], k = 3) {
   let sum = 0;
   let average = [];
   for (let i = 0; i < k; i++) {
      sum += arr[i];
   }
   avg = sum / k;
   average.push(avg);

   for (let i = k; i < arr.length; i++) {
      sum = sum - arr[i - k] + arr[i];
      avg = sum / k;
      average.push(avg);
   }
   return average;
}
// console.log(averageSum());

// Count Distinct Elements in Every Window of Size K
function elementSCount(arr = [1, 2, 1, 3, 4, 2, 3], k = 4) {
   let freq = {};
   let result = [];
   for (let i = 0; i < k; i++) {
      freq[arr[i]] = (freq[arr[i]] || 0) + 1;
   }
   result.push({ ...freq });

   for (i = k; i < arr.length; i++) {
      let add = arr[i];
      let remove = arr[i - k]
      freq[remove]--;
      if (freq[remove] === 0) {
         delete freq[remove];
      }
      freq[add] = (freq[add] || 0) + 1;
      result.push({ ...freq });
   }
   return result;
}
// console.log(elementSCount());

function countDistnictElements(arr = [1, 2, 1, 3, 4, 2, 3], k = 4) {
   let freq = {};
   let result = [];
   for (let i = 0; i < k; i++) {
      freq[arr[i]] = (freq[arr[i]] || 0) + 1;
   }
   result.push(Object.keys(freq).length);
   for (let i = k; i < arr.length; i++) {
      let add = arr[i];
      let remove = arr[i - k];
      freq[remove]--;
      if (freq[remove] === 0) {
         delete freq[remove];
      }
      freq[add] = (freq[add] || 0) + 1;
      result.push(Object.keys(freq).length);
   }
   return result;
}
// console.log(countDistnictElements());

// First Negative Number in Every Window
// arr = [12, -1, -7, 8, -15, 30, 16, 28]
// k = 3
// [-1, -1, -7, -15, -15, 0]
function firstNegativeNumberofEach(arr = [12, -1, -7, 8, -15, 30, 16, 28], k = 3) {
   let negative = [];
   let result = [];
   for (let i = 0; i < k; i++) {
      if (arr[i] < 0) {
         negative.push(arr[i]);
      }
   }

   result.push(negative.length ? negative[0] : 0);

   for (let i = k; i < arr.length; i++) {
      let add = arr[i];
      let remove = arr[i - k];

      if (negative.length && remove === negative[0]) {
         negative.shift();
      }

      if (add < 0) {
         negative.push(add);
      }

      result.push(negative.length ? negative[0] : 0);

   }
   return result;
}
// console.log(firstNegativeNumberofEach());

// Section 4: Deque State (Most Important)
//
// 10. Minimum Element in Every Window of Size K

function maxElement(arr = [1, 3, -1, -3, 5, 3, 6, 7], k = 3) {
   let deque = [];
   let result = [];

   for (let i = 0; i < arr.length; i++) {
      while (deque.length && deque[0] === i - k) {
         deque.shift();
      }

      while (deque.length && arr[deque[deque.length - 1]] < arr[i]) {
         deque.pop();
      }

      deque.push(i);

      if (i >= k - 1) {
         result.push(arr[deque[0]]);
      }
   }
   return result;
}
console.log(maxElement());

