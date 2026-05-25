// REACT INTERVIEW QUESTION

// 1. Find the first non-repeating character in a string:
// Input:  ""aabbcddee""
// Output: ""c"""
function nonRepeating(str) {
   const createMap = new Map();
   for (let char of str) {
      createMap.set(char, (createMap.get(char) || 0) + 1);
   }
   for (let char of str) {
      if (createMap.get(char) === 1) {
         return char;
      }
   }
   return "No single string exist";
}

const inputOfNonRepeating = "aabbcddee";
// console.log(nonRepeating(inputOfNonRepeating), "fnsnabbdv");

// 2.Count occurrence of characters
// Input → AABBCCCDDD | Output → 2A2B3C3D"
function countCharacters(str) {
   let result = "";
   let count = 1;
   const n = str?.length;
   for (let i = 1; i <= n; i++) {
      if (str[i] === str[i + 1]) {
         count++;
      } else {
         result += count + str[i];
         count = 1;
      }
   }
   return result;
}

console.log(countCharacters("AABBCCCDDDE"), 'Check Bro..');

// 5. Flatten an array
const arr = [1, [2, [3, 4]], 5];
console.log(arr.flat(Infinity));
// 6. What is the output of typeof null?
// Ans object
// 7. What will a for loop with var inside setTimeout print?
for (var i = 0; i < 5; i++) {
   setTimeout(() => {
      console.log(i);
   }, 1000);
}
// * Note: If we replace var with let than::: output 0,1,2,3,4,5

// 8. What is the output of 1 + "2" + 3?
// ans: 123
// 9. What does [] + [] and [] + {} return?
// Ans:  [] + [] ==> ""  and  [] + {} = "[object, object]"

const arrForFlat = [1, [2, [3, 4], 5], 6];
console.log(arrForFlat.flat(Infinity), " Flat array output");

// 3. Implement reduce()

// 4. Implement filter()