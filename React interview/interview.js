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
console.log(nonRepeating(inputOfNonRepeating), "fnsnabbdv");

// 2.Count occurrence of characters
// Input → AABBCCCDDD | Output → 2A2B3C3D"
// 3. Implement reduce()
// 4. Implement filter()
// 5. Flatten an array
// 6. What is the output of typeof null?
// 7. What will a for loop with var inside setTimeout print?
// 8. What is the output of 1 + "2" + 3?
// 9. What does [] + [] and [] + {} return?