/* find the missing numbers in an array, make sure the array is sorted in asceding order */

let arr = [12, 14, 16, 25];
let minValue = arr[0];
let maxValue = arr[arr.length - 1];

let missingValues = [];
let missingIndex = 0;

for (let i = minValue; i <= maxValue; i++) {
  if (!arr.includes(i)) {
    missingValues.push(`${i} is missing at index ${missingIndex}`);
  }

  missingIndex++;
}

console.log(missingValues);
