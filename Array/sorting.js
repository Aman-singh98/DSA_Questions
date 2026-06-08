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
console.log(insertation([5, 3, 4, 1, 2]))