function checkEmail(email) {
  let regex = new RegExp("[a-z0-9]+@binar+.[a-z]{2,3}");
  if (regex.test(email)) {
    output = "VALID";
  } else {
    output = "INVALID";
  }
  return output;
}

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail());
