const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = 0;
  let indexBukuTerlaris = 0;
  let penulisTerlaris = {};
  let namaPenulisTerlaris = "";
  let maxPenulis = 0;
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  for (let i = 0; i < dataPenjualan.length; i++) {
    const buku = dataPenjualan[i];
    // TOTAL KEUNTUNGAN
    totalKeuntungan += (buku.hargaJual - buku.hargaBeli) * buku.totalTerjual;
    // TOTAL MODAL
    totalModal += (buku.totalTerjual + buku.sisaStok) * buku.hargaBeli;
    // PRODUK TERLARIS
    if (produkBukuTerlaris < buku.totalTerjual) {
      produkBukuTerlaris = buku.totalTerjual;
      indexBukuTerlaris = i;
    }
    // PENULIS TERLARIS
    if (buku.penulis in penulisTerlaris) {
      penulisTerlaris[buku.penulis] += 1;
    } else {
      penulisTerlaris[buku.penulis] = 1;
    }
  }

  for (const key in penulisTerlaris) {
    if (Object.hasOwnProperty.call(penulisTerlaris, key)) {
      const element = penulisTerlaris[key];
      if (maxPenulis < element) {
        maxPenulis = element;
        namaPenulisTerlaris = key;
      }
    }
  }

  return {
    totalKeuntungan: formatter.format(totalKeuntungan), // Harus dalam format rupiah
    totalModal: formatter.format(totalModal), // Harus dalam format rupiah
    persentaseKeuntungan:
      Math.round((totalKeuntungan / totalModal) * 100) + "%", // berdasarkan totalModal dan totalJual
    produkBukuTerlaris: dataPenjualan[indexBukuTerlaris].namaProduk, // namaProduct yang paling banyak dijual
    penulisTerlaris: namaPenulisTerlaris, // nam penulis yang bukunya paling banyak dijual
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));
