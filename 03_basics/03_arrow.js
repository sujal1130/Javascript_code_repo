const user = {
  username: "sujal",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     console.log(this);
//   }

// function chai() {
//   let username = "sujal";
//   console.log(this.username);
// }

//arrow function
const chai = () => {
  let username = "sujal";
  console.log(this.username);
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 );

// const addTwo = (num1, num2) => {
//   username: "sujal";
// };

const addTwo = (num1, num2) => ({
  username: "sujal",
});

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
