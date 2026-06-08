console.log("Sorting Algor")
// 1. Buble sort
function bubbleSort(arr) {
   let n = arr?.length;
   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
         }
      }
   }
   return arr;
}

// console.log(bubbleSort([5, 3, 8, 4]));

function selectionSort(arr) {
   const n = arr?.length;
   for (let i = 0; i < n; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
         if (arr[i] > arr[j]) {
            minIndex = j;
         }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
   }

   return arr;
}
// console.log(selectionSort([64, 25, 12, 22, 11]));

function insertation(arr) {
   const n = arr.length;
   for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
         arr[j + 1] = arr[j];
         j--;
      }
      arr[j + 1] = key;
   }
   return arr;
}
// console.log(insertation([5, 3, 4, 1, 2]));

function merge(left, right) {
   let result = [];
   let i = 0;
   let j = 0;
   while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
         result.push(left[i]);
         i++;
      } else {
         result.push(right[j]);
         j++;
      }
   }

   return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
   const n = arr?.length;
   if (n <= 1) {
      return arr;
   }
   let mid = Math.floor(n / 2);
   let left = mergeSort(arr.slice(0, mid));
   let right = mergeSort(arr.slice(mid));

   return merge(left, right);
}
// console.log(mergeSort([38, 27, 43, 3]));

function quickSort(arr) {
   let n = arr.length;
   if (n <= 1) {
      return arr;
   }

   let pivot = arr[n - 1];

   let left = [];
   let right = [];

   for (let i = 0; i < n-1; i++) {
      if (arr[i] < pivot) {
         left.push(arr[i]);
      } else {
         right.push(arr[i])
      }
   }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([2, 6, 3, 8, 5]), "quick sort");