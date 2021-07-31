const { firstArray, secondArray } = require("./arrays");

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(firstArray.reduce(reducer));
console.log(secondArray.reduce(reducer));
