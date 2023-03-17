function isValidPassword(givenPassword) {
  if (typeof givenPassword != "string") {
    throw "ERROR";
  } else {
    let regex = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/);
    output = regex.test(givenPassword);
  }

  return output;
}

console.log(isValidPassword("Meong2021")); // EXPECTED OUTPUT => true
console.log(isValidPassword("meong2021")); // EXPECTED OUTPUT => false
console.log(isValidPassword("@eong")); // EXPECTED OUTPUT => false
console.log(isValidPassword("Meong2")); // EXPECTED OUTPUT => false
console.log(isValidPassword(0)); // EXPECTED OUTPUT => ERROR dikarenakan tidak sesuai aturan regex dan hanya berisi satu digit angka
console.log(isValidPassword()); // EXPECTED OUTPUT => ERROR dikarenakan tidak terdapat argumen yang diisi/kosong
