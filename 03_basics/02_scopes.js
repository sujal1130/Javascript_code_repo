// var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
  //   console.log("TNNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "sujal";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);

  two();
}
// one();

if (true) {
  const username = "sujal";
  if (username === "sujal") {
    const website = " youtub";
    // console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

// ++++++++++++++++++++ interesting ++++++++++++++++++++++++++ //

// console.log(addone(5));
function addone(num) {
  return num + 1;
}
// addone(5);

// addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
addTwo(5);
// console.log(addTwo(5));
