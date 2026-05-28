console.log("Start pattern questions!");

// 1. Square & Hollow Square Patterns
// 1.1 Print a solid square pattern of size N.
// *****
// *****
// *****
// *****
// *****

function pattern_1(n) {
   for (let i = 1; i < n; i++) {
      let row = "";
      for (let j = 1; j < n; j++) {
         row = row + "*";
      }
      // console.log(row);
   }
}
// console.log(pattern_1(5), "Pattern");

// 1.2 Print a hollow square pattern of size N.
// *****
// *   *
// *   *
// *   *
// *****
function pattern_2(n) {
   for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= n; j++) {
         if (i === 1 || i === 5 || j === 1 || j === 5) {
            row += "+";
         } else {
            row += " ";
         }
         row += " "
      }
      console.log(row);
   }
}
// console.log(pattern_2(5), "Pattern");


// 1.3 Print a square pattern using numbers from 1 to N.
// 1234
// 1234
// 1234
// 1234
function pattern_3(n) {
   for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= n; j++) {
         row += j;
      }
      console.log(row);
   }
}
// console.log(pattern_3(4), "Pattern");

// 1.4 Print an alternating binary square pattern.
// 10101
// 01010
// 10101
// 01010
// 10101
function pattern_4(n) {
   for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= n; j++) {
         if ((i + j) % 2 === 0) {
            row += "1";
         } else {
            row += "0";
         }
         row += " ";
      }
      console.log(row);
   }
}
// console.log(pattern_4(5), "Pattern 5");

// 2. Right Triangle & Inverted Triangle
// 2.1 Print a right-angled star triangle.
// *
// **
// ***
// ****
// *****
function pattern_5(n) {
   for (let i = 1; i <= n; i++) {
      let row = " ";
      for (let j = 1; j <= i; j++) {
         row += "*";
      }
      console.log(row);
   }
}
// console.log(pattern_5(5), "Pattern");

// 2.2 Print an inverted right triangle.
// *****
// ****
// ***
// **
// *
function pattern_6(n) {
   for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = n; j >= i; j--) {
         row += "+";
      }
      console.log(row);
   }
}
// console.log(pattern_6(5), "Pattern 6");

// 2.3 Print a number increasing triangle.
// 1
// 12
// 123
// 1234
// 12345

function pattern_7(n) {
   for (let i = 1; i <= n; i++) {
      let row = " ";
      for (let j = 1; j <= i; j++) {
         row += j;
      }
      console.log(row);
   }
}
// console.log(pattern_7(5), "Pattern 7");

// 2.4 Print an inverted number triangle.
// 12345
// 1234
// 123
// 12
// 1

function pattern_8(n) {
   for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = n; j >= i; j--) {
         row += j + " ";
      }
      console.log(row);
   }
}
// console.log(pattern_8(5), "Pattern");

// 3. Full Pyramid & Inverted Pyramid
// 3.1 Print a full star pyramid.
//     *
//    ***
//   *****
//  *******
// *********
function pattern_9(n) {
   for (let i = 1; i <= n; i++) {
      let row = " ";
      for (let space = 1; space <= n - i; space++) {
         row += " ";
      }
      for (let k = 1; k <= (2 * i - 1); k++) {
         row += "+";
      }
      console.log(row);
   }
}
// console.log(pattern_9(5), "Pattern");

// 3.2 Print an inverted star pyramid.
// *********
//  *******
//   *****
//    ***
//     *
function pattern_10(n) {
   console.log(n, 'Number');
   for (let i = 1; i <= n; i++) {
      let row = "";
      for (let space = 1; space <= i - 1; space++) {
         row += " ";
      }
      for (let k = 1; k <= (2 * (n - i)) + 1; k++) {
         row += "*";
      }
      console.log(row);
   }
}
// console.log(pattern_10(5), "Pattern 10");

// 3.3 Print a number pyramid.
//     1
//    121
//   12321
//  1234321
// 123454321
function pattern_11(n) {
   for (let i = 1; i <= n; i++) {
      let row = "";
      for (let k = 1; k <= (n - i); k++) {
         row += " "
      }
      // for (let r = 1; r <= (2 * i - 1); r++) {
      //    row += r;
      // }
      // Increasing numbers
      for (let j = 1; j <= i; j++) {
         row += j;
      }
      // Decreasing numbers
      for (let k = i - 1; k >= 1; k--) {
         row += k;
      }
      console.log(row);
   }
}
// console.log(pattern_11(5), "Pattern 11");

// 3.4 Print an alphabet pyramid.
//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
function pattern12(n) {
   for (let i = 1; i <= n; i++) {
      let row = "";
      // Spaces
      for (let space = 1; space <= n - i; space++) {
         row += " ";
      }
      // Increasing alphabets
      for (let j = 0; j < i; j++) {
         row += String.fromCharCode(65 + j);
      }
      // Decreasing alphabets
      for (let k = i - 2; k >= 0; k--) {
         row += String.fromCharCode(65 + k);
      }

      console.log(row);
   }
}
// console.log(pattern12(5), "Pattern 12");

// 4. Diamond Pattern
// 4.1 Print a full diamond star pattern.
function pattern_13(n) {
   for (let i = 1; i <= n; i++) {
      let row = " ";
      for (let j = 1; j <= (n - i); j++) {
         row += " "
      }
      for (let k = 1; k <= (2 * i - 1); k++) {
         row += "*";
      }
      console.log(row);
   }
   for (let i = 1; i <= n; i++) {
      let row = " ";
      for (let x = 1; x <= (i - 1); x++) {
         row += " ";
      }
      for (let y = 1; y <= 2 * (n - i) + 1; y++) {
         row += "*";
      }
      console.log(row);
   }
}
// console.log(pattern_13(5), "Pattern 13");

// 4.2 Print a hollow diamond pattern.
function pattern_14(n) {
   for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= n - i; j++) {
         row += " ";
      }
      for (let k = 1; k <= (2 * i - 1); k++) {
         if (k === 1 || k === (2 * i - 1)) {
            row += "*";
         } else {
            row += " ";
         }
      }
      console.log(row);
   }
   for (let i = 2; i <= n; i++) {
      let row = " ";
      for (let j = 1; j < i - 1; j++) {
         row += " ";
      }
      for (let z = 1; z <= (2 * (n - i) + 1); z++) {
         if (z === 1 || z === (2 * (n - i) + 1)) {
            row += "*";
         }
         else {
            row += " ";
         }
      }
      console.log(row);
   }
}
// console.log(pattern_14(5), "Pattern 14");

// 4.3 Print a number diamond pattern.
function pattern_15(n) {
   // console.log(n, 'Number');
   for (let i = 1; i < n; i++) {
      let row = "";
      for (let j = 1; j < (n - i); j++) {
         row += " ";
      }
      for (let k = 1; k <= (2 * i - i); k++) {
         row += k;
      }
      for (let k = i - 1; k >= 1; k--) {
         row += k;
      }
      console.log(row);
   }
}
// console.log(pattern_15(5), "Pattern 15");

// 4.4 Print a mirrored diamond pattern using alphabets.

// 5. Butterfly & Hourglass Patterns
// 5.1. Print a butterfly star pattern.

function pattern_17(n) {

   // Upper Half
   for (let i = 1; i <= n; i++) {

      let row = "";

      // Left Stars
      for (let j = 1; j <= i; j++) {
         row += "*";
      }

      // Middle Spaces
      for (let k = 1; k <= 2 * (n - i); k++) {
         row += " ";
      }

      // Right Stars
      for (let l = 1; l <= i; l++) {
         row += "*";
      }

      console.log(row);
   }

   // Lower Half
   for (let i = n; i >= 1; i--) {

      let row = "";

      // Left Stars
      for (let j = 1; j <= i; j++) {
         row += "*";
      }

      // Middle Spaces
      for (let k = 1; k <= 2 * (n - i); k++) {
         row += " ";
      }

      // Right Stars
      for (let l = 1; l <= i; l++) {
         row += "*";
      }

      console.log(row);
   }
}
// console.log(pattern_17(4), "Pattern 17");

// 5.2. Print a hollow butterfly pattern.
// 5.3. Print an hourglass star pattern.
// 5.4. Print a number hourglass pattern.

// 6. Number Triangle (Floyd's / Pascal's)
// 6.1 Print Floyd’s Triangle.
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function patternFloyd(n) {
   console.log(n, "patternFloyd");
   for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
         row += j + (i - 1) + " ";
      }
      console.log(row);
   }
}
// console.log(patternFloyd(5), "patternFloyd");

// 6.2 Print Pascal’s Triangle.
//         1
//       1   1
//     1   2   1
//   1   3   3   1
// 1   4   6   4   1
function pascalTriangle(n) {
   for (let i = 0; i < n; i++) {
      let row = "";
      // Spaces
      for (let space = 0; space < n - i - 1; space++) {
         row += "  ";
      }

      let number = 1;
      // Pascal Values
      for (let j = 0; j <= i; j++) {
         row += number + "   ";
         number = number * (i - j) / (j + 1);
      }
      console.log(row);
   }
}
// console.log(pascalTriangle(5));

// 6.3 Print a triangle with continuous odd numbers only.
// 1
// 3 5
// 7 9 11
// 13 15 17 19
// 21 23 25 27 29
// 6.4 Print a triangle where each row contains squares of numbers.
// 1
// 4 9
// 16 25 36
function squareNumberTriangle(n) {
   let num = 1;
   for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {

         row += (num * num) + " ";

         num++;
      }
      console.log(row);
   }
}
// console.log(squareNumberTriangle(4));

// 7. Hollow Diamond & Spiral Patterns

// 7.1 Print a hollow diamond star pattern.
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *
function patternOne(n) {
   for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= (n - i); j++) {
         row += " ";
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
         row += k === 1 || k === (2 * i - 1) ? "*" : " ";
      }
      console.log(row);
   }
   return n;
}

// console.log(patternOne(5), "patternOne(n)");
// 7.2 Print a square spiral pattern using *.
// *****
//     *
// *** *
// *   *
// * ***
// *    
// *****
function squareSpiral(n) {
   // Step 1:
   // Create a 2D array filled with spaces
   let arr = Array.from({ length: n }, () =>
      Array(n).fill(" ")
   );

   // Step 2:
   // Define boundaries
   let top = 0;
   let bottom = n - 1;
   let left = 0;
   let right = n - 1;

   // Step 3:
   // Continue until boundaries cross each other
   while (top <= bottom && left <= right) {

      // Step 4:
      // Left → Right
      for (let i = left; i <= right; i++) {
         arr[top][i] = "*";
      }

      // Step 5:
      // Move top boundary downward
      top += 2;

      // Step 6:
      // Top → Bottom
      for (let i = top; i <= bottom; i++) {
         arr[i][right] = "*";
      }

      // Step 7:
      // Move right boundary leftward
      right -= 2;

      // Step 8:
      // Right → Left
      if (top <= bottom) {
         for (let i = right; i >= left; i--) {
            arr[bottom][i] = "*";
         }

         // Step 9:
         // Move bottom boundary upward
         bottom -= 2;
      }

      // Step 10:
      // Bottom → Top
      if (left <= right) {
         for (let i = bottom; i >= top; i--) {
            arr[i][left] = "*";
         }

         // Step 11:
         // Move left boundary rightward
         left += 2;
      }
   }

   // Step 12:
   // Print the array row by row
   for (let row of arr) {
      console.log(row.join(""));
   }
}
// console.log(squareSpiral(5), "squareSpiral(n)");

// 7.3 Print a numeric spiral matrix.
// 1  2  3  4
// 12 13 14 5
// 11 16 15 6
// 10 9  8  7
function numericSpiral(n) {

   // Step 1:
   // Create empty n x n matrix
   let matrix = Array.from({ length: n }, () =>
      Array(n).fill(0)
   );

   // Step 2:
   // Define boundaries
   let top = 0;
   let bottom = n - 1;
   let left = 0;
   let right = n - 1;

   // Step 3:
   // Starting number
   let num = 1;

   // Step 4:
   // Continue until boundaries cross
   while (top <= bottom && left <= right) {
      // =========================
      // LEFT → RIGHT
      // =========================
      for (let i = left; i <= right; i++) {
         // Fill current number
         matrix[top][i] = num;
         // Increase number
         num++;
      }
      // Move top boundary downward
      top++;

      // =========================
      // TOP → BOTTOM
      // =========================
      for (let i = top; i <= bottom; i++) {
         // Fill current number
         matrix[i][right] = num;
         // Increase number
         num++;
      }
      // Move right boundary leftward
      right--;

      // =========================
      // RIGHT → LEFT
      // =========================
      if (top <= bottom) {
         for (let i = right; i >= left; i--) {
            // Fill current number
            matrix[bottom][i] = num;

            // Increase number
            num++;
         }
         // Move bottom upward
         bottom--;
      }

      // =========================
      // BOTTOM → TOP
      // =========================
      if (left <= right) {
         for (let i = bottom; i >= top; i--) {
            // Fill current number
            matrix[i][left] = num;

            // Increase number
            num++;
         }
         // Move left boundary rightward
         left++;
      }
   }

   // Step 5:
   // Print matrix row by row
   for (let row of matrix) {
      console.log(row.join(" "));
   }
}

// console.log(numericSpiral(5), "patternThree(n)");

// Reverse a number
// Input: 1234
// Output: 4321

function revererNumber(num) {
   let rev = 0;
   while (num > 0) {
      let digit = num % 10;
      rev = rev * 10 + digit;
      num = Math.floor(num / 10);
   }
   return rev;
}
// console.log(revererNumber(1234));

// Palindrome number check
// original number === reverse number
function palindromeNum(num) {
   const originalNumber = num;
   let rev = 0;
   while (num > 0) {
      const digit = num % 10;
      rev = rev * 10 + digit;
      num = Math.floor(num / 10);
   }
   return originalNumber === rev ? true : false;
}

// console.log(palindromeNum(121), "FINAL Out put");

// Armstrong Number
function armstrongNum(num) {
   const digitCount = num.toString()?.length;
   const originalNum = num;
   let sum = 0;
   while (num > 0) {
      let digit = num % 10;
      sum = sum + digit ** digitCount;
      num = Math.floor(num / 10);
   }

   return originalNum === sum;
}
// console.log(armstrongNum(153));

function isPrime(num) {
   if (num <= 1) {
      return false;
   }

   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         return false;
      }
   }
   return true;
}
// console.log(isPrime(4), "Number is prime")

// Fibonacci Series
function series(num) {
   let first = 0;
   let second = 1;
   for (let i = 0; i < num; i++) {
      console.log(first);
      let next = first + second;
      first = second;
      second = next;
   }
   return true;
}
// console.log(series(7));

// Factorial
function Factorial(num) {
   let result = 1;
   for (let i = 1; i <= num; i++) {
      result = result * i;
   }
   return result;
}
// console.log(Factorial(5));


// Power of A NUMBER
function power(base, expo) {
   let result = 1;
   for (let i = 1; i <= expo; i++) {
      result = result * base;
   }
   return result;
}
// console.log(power(5,3));

function sumOfDigit(num) {
   let sum = 0;
   while (num > 0) {
      let digit = num % 10;
      sum = sum + digit;
      num = Math.floor(num / 10);
   }
   return sum;
}
// console.log(sumOfDigit(1234));

// Happy number
function isHappyNumber(num) {
   let seen = new Set();
   while (num !== 1 && !seen.has(num)) {
      seen.add(num);
      let sum = 0;
      while (num > 0) {
         let digit = num % 10;
         sum += digit * digit;
         num = Math.floor(num / 10);
      }
      num = sum;
   }
   return num === 1;
}

console.log(isHappyNumber(19)); // true
console.log(isHappyNumber(12)); // false
