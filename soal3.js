const { checkTypeNumber } = require("./soal2");

function checkEmail(email) {
  let regex = new RegExp("[a-z0-9]+@binar+.[a-z]{2,3}");

  if (typeof email != "string") {
    throw "ERROR";
  } else if (regex.test(email)) {
    output = "VALID";
  } else {
    output = "INVALID";
  }
  // if (regex.test(email)) {
  //   output = "VALID";
  // } else if (!regex.test(email)) {
  //   output = "INVALID";
  // } else {
  //   output = "ERROR";
  // }
  return output;
}

console.log(checkEmail("apranata@binar.co.id")); // "VALID"
console.log(checkEmail("apranata@binar.com")); // "VALID"
console.log(checkEmail("apranata@binar")); // "INVALID"
console.log(checkEmail("apranata")); // "ERROR" karena tidak memenuhi standar email yang sudah diatur pada regex
console.log(checkTypeNumber(checkEmail(3322))); // "ERROR" dikarenakan output data yang dihasilkan harusnya string
console.log(checkEmail()); // "ERROR" dikarenakan tidak terdapat argumen yang diisi/kosong
