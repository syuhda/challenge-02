function checkTypeNumber(givenNumber) {}

console.log(checkTypeNumber(10)); // OUTPUT yang keluar => "GENAP"
console.log(checkTypeNumber(3)); // OUTPUT yang keluar => "GANJIL"
console.log(checkTypeNumber("3")); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber({})); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber([])); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber()); // OUTPUT yang keluar => "Bro, where is the parameter"
