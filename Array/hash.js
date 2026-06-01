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
console.log(isDuplicate());