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
console.log(pattern12(5), "Pattern 12");


// function pattern_1(n) {
//    console.log(n, 'Number');
// }
// console.log(pattern_1(5), "Pattern");

// 4. Diamond Pattern
// 4.1 Print a full diamond star pattern.
// 4.2 Print a hollow diamond pattern.
// 4.3 Print a number diamond pattern.
// 4.4 Print a mirrored diamond pattern using alphabets.