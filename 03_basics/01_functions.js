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
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 300, 400, 2000));

const user = {
  usersname: "sujal",
  price: 199,
};

function hanleObject(anyobject) {
  console.log(
    `Username is ${anyobject.usersname} and price ${anyobject.price}`
  );
}
// hanleObject(user);
hanleObject({
  usersname: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
