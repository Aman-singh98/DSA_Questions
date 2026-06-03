// Plan Monday: Do 20 questions here:
// 1. Prefix Sum	Build prefix sum array
// 2. Prefix Sum	Range sum query in O(1)
// 3. Prefix Sum	Subarray sum equals K (count)
// 4. Prefix Sum	Equilibrium index of array
// 5. Hashing	Two sum — HashMap approach O(n)
// 6. Hashing	Count pairs with given sum
// 7. Hashing	Longest subarray with equal 0s and 1s
// 8. Hashing	Group anagrams together
// 9. Hashing	Longest consecutive sequence
// 10. Hashing	Total problems target
console.log("solve hashing problems");

function countFrequency(arr = [1, 2, 2, 3, 1, 1]) {
   let mp = new Map();
   arr?.forEach((elem) =>
      mp.set(elem, (mp.get(elem) || 0) + 1)
   );
   console.log(Object.fromEntries(mp));
   return mp;
}
// console.log(countFrequency());

function isDuplicate(arr = [1, 2, 3, 1]) {
   let mp = new Map();
   arr.forEach((elem) => mp.set(elem, (mp.get(elem) || 0) + 1));
   console.log(Object.fromEntries(mp));
   for (const [key, value] of mp) {
      if (value > 1) {
         return true;
      }
   }
   return false;
}
// console.log(isDuplicate());

function nonrepatingElemnet(arr = [4, 5, 1, 2, 1, 4]) {
   let mp = new Map();
   arr.forEach((elem) => mp.set(elem, (mp.get(elem) || 0) + 1));
   console.log(Object.fromEntries(mp));
   for (const num of arr) {
      if (mp.get(num) === 1) {
         return num;
      }
   }
   return "NO";
}
// console.log(nonrepatingElemnet())

function twoSum(arr = [2, 7, 11, 15], target = 9) {
   let mp = new Map();
   for (let i = 0; i < arr.length; i++) {
      let need = target - arr[i];
      if (mp.has(need)) {
         return [mp.get(need), i]
      }
      mp.set(arr[i], i);
   }
}
// console.log(twoSum());

function intersection(arr1, arr2) {
   let set1 = new Set(arr1);
   let result = new Set();
   for (const num of arr2) {
      if (set1.has(num)) {
         result.add(num);
      }
   }
   return [...result];
}
// console.log(intersection([1, 2, 2, 1], [2, 2]));

function countNeed(arr = [1, 5, 7, 1], target = 6) {
   let mp = new Map();
   let ans = 0;
   for (let i = 0; i < arr.length; i++) {
      let need = target - arr[i];
      if (mp.has(need)) {
         ans += mp.get(need);
      }
      mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
   }
   return ans;
}
// console.log(countNeed());

// Longest Consecutive Sequence
function longestConf(nums) {
   if (nums.length === 0) return 0;
   const set = new Set(nums);
   let longest = 0;

   for (const num of set) {
      if (!set.has(num - 1)) {
         let current = num;
         let length = 1;

         while (set.has(current + 1)) {
            current++;
            length++;
         }
         longest = Math.max(longest, length)
      }
   }
   return longest;
}
// console.log(longestConf([100, 4, 200, 1, 3, 2])); // 4
// console.log(longestConf([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9

// Group Anagrams Together
function groupAnagrams(strs) {
   const mp = new Map();
   for (const word of strs) {
      const key = word.split('').sort().join('');
      if (!mp.has(key)) {
         mp.set(key, []);
      }
      mp.set(key, [...(mp.get(key) || []), word]);
   }
   return [...mp.values()];
}
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams(["aab", "aba", "baa", "abbccc", "abb"]));

// Longest Subarray with Equal 0s and 1s
function findMaxLength(nums) {
   const mp = new Map();
   let sum = 0;
   let maxLen = 0;
   mp.set(0, -1); // Important
   for (let i = 0; i < nums.length; i++) {
      sum += nums[i] === 0 ? -1 : 1;
      if (mp.has(sum)) {
         maxLen = Math.max(maxLen, i - mp.get(sum));
      } else {
         mp.set(sum, i);
      }
   }
   console.log(mp);
   return maxLen;
}
console.log(findMaxLength([0, 1, 0, 1, 1, 1, 0, 0]), "findMaxLength(nums)");