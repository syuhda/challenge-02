function getAngkaTerbesarKedua(dataNumbers) {
  let terbesar = Math.max.apply(Math, dataNumbers);
  let terbesarKedua = 0;

  for (i = 0; i < dataNumbers.length; i++) {
    if (dataNumbers[i] > terbesarKedua && dataNumbers[i] != terbesar) {
      terbesarKedua = dataNumbers[i];
    }
  }
  return terbesarKedua;
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));

console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
