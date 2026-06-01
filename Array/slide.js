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