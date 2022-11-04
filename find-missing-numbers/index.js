/* find the missing numbers in an array, make sure the array is sorted in asceding order */

let arr = [12, 14, 16, 25];
let minValue = arr[0];
let maxValue = arr[arr.length - 1];

let missingIndex = 0;

for (let i = minValue; i <= maxValue; i++) {
  if (!arr.includes(i)) {
    arr.splice(missingIndex, 0, i);
  }

  missingIndex++;
}

console.log(arr);
