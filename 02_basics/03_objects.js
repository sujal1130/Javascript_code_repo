// this is array
// myArray = ["s", "u"];
// console.log(myArray[1]);

// singleton
// Object.create

// object litetals
const mySym = Symbol("Key1");

const JsUser = {
  name: "sujal",
  "full name": "Hitesh Choudhary",
  //   mySym: "myKey1", // this is not used Symbol this is used string
  [mySym]: "myKey1",
  age: 20,
  location: "jaipur",
  email: "sujal@google.com",
  isLogggedIn: false,
  lsatLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym); // this is not used Symbol
// console.log(typeof JsUser.mySym); // this is used string
// console.log(JsUser[mySym]);
// console.log(JsUser.full name); // this is not work

JsUser.email = "sujal@chatgpt.com";
// Object.freeze(JsUser); //freeze add karva thi ani nichhe thi code work nokare
JsUser.email = "sujal@microsoft.com";
// console.log(JsUser);

// JsUser.greetting = function () {
//   console.log("Hello JS user");
// };
// console.log(JsUser.greetting);
// console.log(JsUser.greetting());

JsUser.greetting = function () {
  console.log("Hello JS user");
};
JsUser.greettingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};
console.log(JsUser.greetting());
console.log(JsUser.greettingTwo());
