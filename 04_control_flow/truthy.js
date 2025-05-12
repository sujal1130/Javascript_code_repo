// const userEmail = "s@sujal.ai";
const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// false value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

const emptyobj = {};

if (Object.keys(emptyobj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??)

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
console.log(val1);

// Terniary Operatir

// condition ? true : false

const iceTeaprice = 100;
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80");
