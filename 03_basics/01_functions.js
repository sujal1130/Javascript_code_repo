function sayMyName() {
  console.log("S");
  console.log("U");
  console.log("J");
  console.log("A");
  console.log("L");
}

// sayMyName(); //function run

//(number1, number2) this is parameters
// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);

// addTwoNumbers();
// addTwoNumbers(3, 4);
// addTwoNumbers(3, "4");
// addTwoNumbers(3, "a");
// addTwoNumbers(3, null);

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}
const result = addTwoNumbers(3, 5);

// console.log("Result ", result);

// function loginUserMessage(usersname) {
//   if (usersname === undefined) {
//     console.log("Please enter a username");
//     return;
//   }
//   return `${usersname} just logged in`;
// }

// function loginUserMessage(usersname) {
//   if (!usersname) {
//     console.log("Please enter a username");
//     return;
//   }
//   return `${usersname} just logged in`;
// }

// function loginUserMessage(usersname = "princ") {
//   if (!usersname) {
//     console.log("Please enter a username");
//     return;
//   }
//   return `${usersname} just logged in`;
// }

function loginUserMessage(usersname) {
  if (usersname === undefined) {
    console.log("Please enter a username");
  } else {
    return `${usersname} just logged in`;
  }
}

// console.log(loginUserMessage("sujal"));
console.log(loginUserMessage());
