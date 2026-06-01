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
console.log(intersection([1, 2, 2, 1], [2, 2]));