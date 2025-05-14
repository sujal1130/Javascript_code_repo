const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach((item) => {
  //   console.log(item);
});

coding.forEach(function (item) {
  //   console.log(item);
});

function printMe(item) {
  //   console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myConding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "phthon",
    languageFileName: "py",
  },
];

myConding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
  console.log(item.languageName);
});
