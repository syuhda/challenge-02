function isValidPassword(givenPassword) {
  if (typeof givenPassword != "string") {
    throw "ERROR";
  } else {
    let regex = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/);
    output = regex.test(givenPassword);
  }

  return output;
}

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());
