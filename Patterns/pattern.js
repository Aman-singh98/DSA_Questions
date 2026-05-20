console.log("Start pattern questions!");

// function pattern_1(n) {
//    console.log(n, 'Number');
// }
// console.log(pattern_1(n), "Pattern");

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
      console.log(row);
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
console.log(pattern_4(5), "Pattern 5");

// 2. Right Triangle & Inverted Triangle

// 2.1 Print a right-angled star triangle.
// *
// **
// ***
// ****
// *****

// 2.2 Print an inverted right triangle.
// *****
// ****
// ***
// **
// *

// 2.3 Print a number increasing triangle.
// 1
// 12
// 123
// 1234
// 12345

// 2.4 Print an inverted number triangle.
// 12345
// 1234
// 123
// 12
// 1

// 3. Full Pyramid & Inverted Pyramid