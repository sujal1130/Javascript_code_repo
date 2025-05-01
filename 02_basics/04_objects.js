// const tinderUser = new Object(); // this is singleton Object
const tinderUser = {}; // this is not singleton Object
tinderUser.id = "123abc";
tinderUser.name = "sujal";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    usefullname: {
      firstname: "prins",
      lastname: "sujal",
    },
  },
};
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.usefullname);
// console.log(regularUser.fullname.usefullname.firstname);
// console.log(regularUser.fullname.usefullname.lastname);
// console.log(regularUser.email);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2, obj4); //this is good for target{}

const obj3 = { ...obj1, ...obj2, ...obj4 }; // this is the best
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
