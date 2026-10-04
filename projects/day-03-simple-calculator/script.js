// Day 03 Project: Simple Calculator
// TODO: Print the result of addition, subtraction, multiplication,
//       division, and modulo between numA and numB

// TODO: Print numA raised to the power of numB

// TODO: Use a ternary operator to print whether numA is greater than,
//       less than, or equal to numB


const numA = 12;
const numB = 5;

//!ternary op
const ternarys = numA >= numB ? "great then" : numA <= numB ? "lesser then" :  "same";

//!add
console.log(numA + numB);
//!sub
console.log(numA - numB);
//!multi
console.log(numA * numB);
//!division
console.log(numA / numB);
//!modulo
console.log(numA % numB);
//!exponent
console.log(numA ** numB);

console.log(`numA ${ternarys} numB`);


//!rectangle practise
const width = 12 ;
const height = 5 ;
const area = width * height;
const size = area >= 50 ? "large" : "small";
console.log(size);