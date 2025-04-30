// Dates

let myDate = new Date();
// console.log(myDate);
// OUTPUT => 2025-04-30T05:11:16.963Z

// console.log(myDate.toString());
// OUTPUT => Wed Apr 30 2025 10:41:16 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString());
// OUTPUT => Wed Apr 30 2025

// console.log(myDate.toISOString());
// OUTPUT => 2025-04-30T05:11:16.963Z

// console.log(myDate.toLocaleDateString());
// OUTPUT => 4/30/2025

// console.log(myDate.toLocaleString());
// OUTPUT => 4/30/2025, 10:41:16 AM

// console.log(myDate.toLocaleTimeString());
// OUTPUT => 10:41:16 AM

// console.log(myDate.toJSON());
// OUTPUT => 2025-04-30T05:11:16.963Z

// console.log(myDate.toUTCString());
// OUTPUT => Wed, 30 Apr 2025 05:11:16 GMT

// console.log(typeof myDate);

// let myCrestedDate = new Date(2025, 4, 30, 5, 3);
// let myCrestedDate = new Date(2025, 0, 30);
// let myCrestedDate = new Date("2025-04-30");
let myCrestedDate = new Date("04-30-2025");
// console.log(myCrestedDate);
// console.log(myCrestedDate.toDateString());
// console.log(myCrestedDate.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCrestedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getMonth() + 1);

// `${newDate.getDay()} and the time `;

newDate.toLocaleString("default", {
  weekday: "long",
});
