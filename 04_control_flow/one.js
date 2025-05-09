//if

const isUserloggedIn = true;
const temperature = 41;

// if (temperature < 40) {
//   console.log("less then 50");
// } else {
//   console.log("temperature is greater then 50");
// }
// console.log("executed");
// >, <, <=, >=, ==, ===, !=

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }
// // console.log(`User power: ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2"); //this is work but not right way

// if (balance < 500) {
//   console.log("lesss than 500");
// } else if (balance < 750) {
//   console.log("lesss than 750");
// } else if (balance < 900) {
//   console.log("lesss than 900");
// } else {
//   console.log("lesss than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
