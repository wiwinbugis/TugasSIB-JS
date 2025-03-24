// Class untuk merepresentasikan kendaraan
class Kendaraan {
  constructor(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;
  }
}

// Class untuk merepresentasikan pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa = null) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  // Metode untuk mencatat transaksi penyewaan
  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
  }
}

// Class untuk mengelola sistem penyewaan kendaraan
class SistemManajemenTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  // Metode untuk menambahkan pelanggan yang menyewa kendaraan
  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  // Metode untuk menampilkan daftar pelanggan yang sedang menyewa kendaraan
  tampilkanPelangganMenyewa() {
    console.log("Daftar Pelanggan yang Menyewa Kendaraan:");
    this.daftarPelanggan.forEach((pelanggan, index) => {
      if (pelanggan.kendaraanDisewa) {
        console.log(
          `${index + 1}. ${pelanggan.nama} - ${
            pelanggan.nomorTelepon
          } - Kendaraan: ${pelanggan.kendaraanDisewa.nama} (${
            pelanggan.kendaraanDisewa.jenis
          })`
        );
      }
    });
  }
}

// Contoh penggunaan
const sistem = new SistemManajemenTransportasi();

const mobil = new Kendaraan("Toyota Avanza", "Mobil");
const motor = new Kendaraan("Honda Vario", "Motor");

const pelanggan1 = new Pelanggan("Wiwin", "08123456789");
pelanggan1.sewaKendaraan(mobil);

const pelanggan2 = new Pelanggan("Syahputra", "08987654321");
pelanggan2.sewaKendaraan(motor);

const pelanggan3 = new Pelanggan("Nur saida", "08765432100"); // Pelanggan tanpa kendaraan

sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

sistem.tampilkanPelangganMenyewa();
