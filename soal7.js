const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    nnamaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function hitungTotalPenjualan(dataPenjualan) {
  let hitung = 0;
  for (let i = 0; i < dataPenjualan.length; i++) {
    if (Object.hasOwnProperty.call(dataPenjualanPakAldi[i], "totalTerjual")) {
      hitung = hitung + dataPenjualanPakAldi[i].totalTerjual;
    } else {
      break;
    }
  }
  return hitung;
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
