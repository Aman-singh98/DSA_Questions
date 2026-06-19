// console.log("Searching Algorithms");

function BinarySearch(arr, target = 9) {
   let n = arr?.length;
   let left = 0;
   let right = n - 1;

   while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
         return mid;
      }

      if (arr[mid] < target) {
         left = mid + 1;
      } else {
         right = mid - 1;
      }
   }
   return -1;
}

console.log(BinarySearch([1, 3, 5, 7, 9, 11, 12]));

