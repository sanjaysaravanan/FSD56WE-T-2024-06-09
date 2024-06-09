// const { add, mul, sub } = require("./utils.js");
// const utils = require("./utils.js");
import utils from "./utils.js";

console.log("Hello FSD56WE-TAMIL");

// cannot use window utils here
// alert("Hello FSD56WE-TAMIL");

// golbal variable
// console.log(global);

// console.log(process); // basic information about nodejs and important computer info

// command line arguments
console.log(process.argv);

function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}

// const num = parseInt(process.argv[2]);
// console.log(fact(num));

const findGreater = (a, b) => {
  if (a > b) return a;
  else return b;
};

console.log(findGreater(parseInt(process.argv[2]), parseInt(process.argv[3])));

console.log("####################");

// console.log(add(2, 3));
// console.log(sub(2, 3));
// console.log(mul(2, 3));

console.log(utils.add(2, 3));
console.log(utils.sub(2, 3));
console.log(utils.mul(2, 3));
