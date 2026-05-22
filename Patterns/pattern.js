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
console.log(patternFloyd(5), "patternFloyd");

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
// 7.2 Print a square spiral pattern using *.
// 7.3 Print a numeric spiral matrix.
// 1  2  3  4
// 12 13 14 5
// 11 16 15 6
// 10 9  8  7