// I learn "chai aur code" youtube
const accountId = 1452;
let accountEmail = "xyz@google.com";
var accountPassword = "1254";
accountCity = "surat";
let accountState;

// change Values //
// accountId = 2; // used const not all this not Values changes in const
accountEmail = "abc@google.com";
accountPassword = "5426";
accountCity = "jaipur";

/*
Prefer not to use var
Because of issue in block scope and functional scope 
*/

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

// table //
/* uesd [] and {} 
   uesd [] show index = 01234   Values = same
   uesd {} show index = accountId ...  Values = same
   only index changes
*/
console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
});
