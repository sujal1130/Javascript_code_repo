const name = "sujal ";
const repoCount = 50;

// console.log(name + repoCount + " Value"); //this is not good this is work but not good

// this is modern day and this is good
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("sujals-su");
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("j"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   sujal   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sujal.com/sujal%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sujal"));
console.log(url.includes("princ"));

console.log(gameName.split("-"));
