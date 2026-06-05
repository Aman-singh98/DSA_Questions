
// ✅ Longest Substring Without Repeating Characters
// ✅ Fruits Into Baskets
// ✅ Longest Repeating Character Replacement
// ✅ At Most K Distinct Characters
// ✅ Max Consecutive Ones III
// ✅ Many medium-level sliding window problems
// 
// "abcabcbb"
//  longest substring= 3; because abc = 3;
// 
function lengthOfLongEstSubstring(str) {
   let set = new Set();
   let left = 0;
   let maxLen = 0;
   for (let i = 0; i < str.length; i++) {
      let ch = str[i];

      if (set.has(ch)) {
         set.delete(str[left]);
         left++;
      }
      set.add(ch);
      maxLen = Math.max(maxLen, i - left + 1)
   }
   return maxLen;
}
// console.log(lengthOfLongEstSubstring("abcabcbb"));

function totalFruit(fruits) {
   let left = 0;
   let maxLen = 0;
   let mp = new Map();

   for (let i = 0; i < fruits.length; i++) {
      let ch = fruits[i];

      mp.set(ch, (mp.get(ch) || 0) + 1);

      while (mp.size > 2) {
         mp.set(fruits[left], (mp.get(fruits[left]) || 0) - 1);
         if (mp.get(fruits[left]) === 0) {
            mp.delete(fruits[left]);
         }
         left++;
      }
      maxLen = Math.max(maxLen, i - left + 1);
   }
   return maxLen;
}

// console.log(totalFruit([1, 2, 3, 2, 2])); // 4

function longestSubstringKDistinct(str, k) {
   let left = 0;
   let maxLen = 0;
   let mp = new Map();

   for (let i = 0; i < str.length; i++) {
      let ch = str[i];

      // mp.set(ch, (mp.get(ch) || 0) + 1);
      mp.set(ch, (mp.get(ch) || 0) + 1);

      while (mp.size > k) {
         mp.set(str[left], mp.get(str[left]) - 1);

         if (mp.get(str[left]) === 0) {
            mp.delete(str[left]);
         }
         left++;
      }
      maxLen = Math.max(maxLen, i - left + 1);
   }
   return maxLen;
}

// console.log(longestSubstringKDistinct("eceba", 2)); // 3
// console.log(longestSubstringKDistinct("aa", 1));    // 2

// Longest Repeating Character Replacement


function characterReplacement(str, k) {
   let left = 0;
   let maxLen = 0;
   let MaxFreq = 0;
   let freq = {};

   for (let i = 0; i < str.length; i++) {
      let ch = str[i];
      freq[ch] = (freq[ch] || 0) + 1;
      maxFreq = Math.max(MaxFreq, freq[ch]);
      while ((i - left + 1) - maxFreq > k) {
         freq[str[left]]--;
         left++;
      }
      maxLen = Math.max(maxLen, i - left + 1)
   }
   return maxLen;
}

console.log(characterReplacement("AABABBA", 1)); // 4
console.log(characterReplacement("ABAB", 2));    // 4