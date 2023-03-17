const checkTypeNumber = (givenNumber) => {
  if (!givenNumber) {
    output = "Bro, where is the parameter";
  } else if (typeof givenNumber !== "number") {
    output = "Error: Invalid data type";
  } else if (givenNumber % 2 == 0) {
    output = "GENAP";
  } else if (givenNumber % 2 == 1) {
    output = "GANJIL";
  }
  return output;
};

// function checkTypeNumber(givenNumber) {
//   return output;
// }

console.log(checkTypeNumber(10)); // OUTPUT yang keluar => "GENAP"
console.log(checkTypeNumber(3)); // OUTPUT yang keluar => "GANJIL"
console.log(checkTypeNumber("3")); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber({})); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber([])); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber()); // OUTPUT yang keluar => "Bro, where is the parameter"
