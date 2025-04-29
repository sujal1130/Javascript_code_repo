// Primitive

// 7 types : String, Number, Bolearn, null, Undefined, symbol, BigInt

const score = 100; //typeof = Number
const scoreValue = 100.3; // typeof = Number

const isLoggedIn = false; // typeof = boolean
const outsideTemp = null; // typeof = object
let userEmail; // typeof = undefined

const id = Symbol("123"); // typeof = Symbol
const anotherId = Symbol("123"); // typeof = Symbol

// console.log(id === anotherId);

const bigNumber = 1264131814321843n; // typeof = bigint

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // typeof = object

let myObject = {
  name: "sujal",
  age: 20,
}; // typeof = object

const myFunctions = function () {
  console.log("Hello world");
}; // typeof = function

console.log(typeof myFunctions); //typeof show Value datatypes

// https://262.ecma-international.org/5.1/#sec-11.4.3
