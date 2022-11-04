/** add property to prototype in javascript */

Object.defineProperty(Array.prototype, "customSum", {
  value: function () {
    let sum = 0;

    this.forEach((value) => {
      sum += value;
    });

    return sum;
  },
});

let arr = [13, 12, 14, 15];

let arraySum = arr.customSum();

console.log(`Sum of array values is: ${arraySum}`);
