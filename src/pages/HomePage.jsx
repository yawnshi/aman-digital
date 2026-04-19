import React, { useState, useEffect } from "react";
import {
  Shield,
  AlertTriangle,
  PhoneCall,
  Link as LinkIcon,
  FileWarning,
  ShoppingCart,
  Key,
  ShieldCheck,
  Lock,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menambahkan efek smooth scroll ke seluruh halaman saat komponen dimuat
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => document.documentElement.classList.remove("scroll-smooth");
  }, []);

  const handleNavClick = (e, targetId) => {
    if (targetId) {
      e.preventDefault(); // Mencegah URL berubah (menghapus #id)
    }

    // Gulir ke bagian spesifik dengan offset
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 64;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setIsMenuOpen(false); // Menutup menu mobile jika sedang terbuka
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-blue-200">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-300" />
              <span className="font-bold text-xl tracking-tight">
                AmanDigital
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#beranda"
                onClick={(e) => handleNavClick(e, "beranda")}
                className="hover:text-blue-300 transition font-medium"
              >
                Beranda
              </a>
              <a
                href="#modus"
                onClick={(e) => handleNavClick(e, "modus")}
                className="hover:text-blue-300 transition font-medium"
              >
                Kenali Modus
              </a>
              <a
                href="#tips"
                onClick={(e) => handleNavClick(e, "tips")}
                className="hover:text-blue-300 transition font-medium"
              >
                Tips Aman
              </a>
              <Link
                to="artikel"
                className="hover:text-blue-300 transition font-medium"
                onClick={(e) => handleNavClick(e)}
              >
                Pusat Edukasi
              </Link>
              <a
                href="#lapor"
                onClick={(e) => handleNavClick(e, "lapor")}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-bold transition"
              >
                Lapor Penipuan
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-blue-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 pb-4 px-4 shadow-inner">
            <div className="flex flex-col space-y-3 pt-2">
              <a
                href="#beranda"
                onClick={(e) => handleNavClick(e, "beranda")}
                className="block py-2 hover:text-blue-300"
              >
                Beranda
              </a>
              <a
                href="#modus"
                onClick={(e) => handleNavClick(e, "modus")}
                className="block py-2 hover:text-blue-300"
              >
                Kenali Modus
              </a>
              <a
                href="#tips"
                onClick={(e) => handleNavClick(e, "tips")}
                className="block py-2 hover:text-blue-300"
              >
                Tips Aman
              </a>
              <Link
                to="artikel"
                className="hover:text-blue-300 transition font-medium"
                onClick={(e) => handleNavClick(e)}
              >
                Artikel Kasus
              </Link>
              <a
                href="#lapor"
                onClick={(e) => handleNavClick(e, "lapor")}
                className="block py-2 text-red-300 font-bold"
              >
                Lapor Penipuan
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="beranda"
        className="bg-linear-to-b from-blue-900 to-blue-800 text-white px-4 min-h-screen flex flex-col justify-center pb-20"
      >
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="inline-flex items-center justify-center p-3 bg-red-600/20 rounded-full mb-6 text-red-200">
            <AlertTriangle className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Waspada Kejahatan Siber
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Jangan Jadi Korban{" "}
            <span className="text-red-400">Selanjutnya!</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Edukasi diri Anda untuk mengenali penipuan digital, melindungi data
            pribadi, dan bertransaksi dengan aman di era digital.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#modus"
              onClick={(e) => handleNavClick(e, "modus")}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center justify-center"
            >
              Pelajari Modus <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#lapor"
              onClick={(e) => handleNavClick(e, "lapor")}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-lg border border-red-500 flex items-center justify-center"
            >
              Lapor Penipuan
            </a>
          </div>
        </div>
      </section>

      {/* Modus Section */}
      <section id="modus" className="py-24 px-4 max-w-7xl mx-auto relative">
        {/* Dekorasi Latar Belakang */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-linear-to-b from-blue-50 to-transparent opacity-50 blur-3xl -z-10"></div>

        <div className="text-center mb-20 relative">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-widest uppercase mb-4 animate-pulse shadow-sm">
            Kenali Ancaman
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text bg-linear-to-r from-blue-900 via-blue-700 to-blue-500 mb-6 pb-2">
            Modus Penipuan Terkini
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Penipu semakin pintar menggunakan teknologi. Kenali ciri-cirinya
            dengan saksama agar Anda dan keluarga tidak mudah tertipu.
          </p>
        </div>

        {/* Diubah menjadi 2 kolom (2x2 grid) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Phishing */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-blue-100"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-inner transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <LinkIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                Phishing (Tautan Palsu)
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-20">
                Penipu mengirim link palsu via SMS/WA yang menyerupai situs
                resmi (Bank/Ekspedisi) untuk mencuri username dan password Anda.
              </p>
              <div className="bg-linear-to-r from-blue-50 to-blue-100/50 p-4 rounded-xl text-sm text-blue-900 border-l-4 border-blue-500">
                <div className="flex items-start">
                  <ShieldCheck className="w-5 h-5 mr-2 text-blue-600 shrink-0" />
                  <div>
                    <strong className="block mb-1 text-blue-800">
                      Pencegahan:
                    </strong>
                    Jangan klik link dari pengirim tak dikenal. Cek URL dengan
                    teliti.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Soceng */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-red-300 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-red-100"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6 shadow-inner transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <PhoneCall className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                Social Engineering
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-20">
                Manipulasi psikologis dengan menelepon korban, membuat panik
                (rekening diblokir) agar korban tanpa sadar memberikan kode OTP.
              </p>
              <div className="bg-linear-to-r from-red-50 to-red-100/50 p-4 rounded-xl text-sm text-red-900 border-l-4 border-red-500">
                <div className="flex items-start">
                  <ShieldCheck className="w-5 h-5 mr-2 text-red-600 shrink-0" />
                  <div>
                    <strong className="block mb-1 text-red-800">
                      Pencegahan:
                    </strong>
                    OTP adalah kunci brankas. JANGAN berikan ke siapapun,
                    termasuk bank!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: APK */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-yellow-100"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 shadow-inner transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <FileWarning className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                Modus File APK
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-20">
                Penipu mengirim file .APK berkedok "Undangan Pernikahan" atau
                "Surat Tilang" untuk meretas HP dan membaca SMS m-banking Anda.
              </p>
              <div className="bg-linear-to-r from-yellow-50 to-yellow-100/50 p-4 rounded-xl text-sm text-yellow-900 border-l-4 border-yellow-500">
                <div className="flex items-start">
                  <ShieldCheck className="w-5 h-5 mr-2 text-yellow-600 shrink-0" />
                  <div>
                    <strong className="block mb-1 text-yellow-800">
                      Pencegahan:
                    </strong>
                    Jangan pernah instal aplikasi dari luar Google Play Store /
                    App Store.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: E-Commerce */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-green-100"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 shadow-inner transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <ShoppingCart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                Penipuan E-Commerce
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-20">
                Toko fiktif di media sosial yang menawarkan barang sangat murah,
                meminta transfer langsung secara pribadi, lalu menghilang.
              </p>
              <div className="bg-linear-to-r from-green-50 to-green-100/50 p-4 rounded-xl text-sm text-green-900 border-l-4 border-green-500">
                <div className="flex items-start">
                  <ShieldCheck className="w-5 h-5 mr-2 text-green-600 shrink-0" />
                  <div>
                    <strong className="block mb-1 text-green-800">
                      Pencegahan:
                    </strong>
                    Gunakan fitur rekber bawaan marketplace. Hindari transfer
                    langsung.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Aman Section */}
      <section
        id="tips"
        className="bg-blue-50 py-24 px-4 border-y border-blue-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
              3 Aturan Emas Keamanan Digital
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Mencegah selalu lebih baik daripada mengobati. Terapkan tiga
              aturan sederhana ini untuk mengamankan aset digital Anda dari
              tangan peretas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Aturan 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <Key className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Rahasiakan Data Pribadi & OTP
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                PIN, Password, CVV kartu kredit, dan kode OTP sifatnya sangat
                rahasia. Pihak instansi resmi tidak akan pernah menanyakan hal
                tersebut.
              </p>
            </div>

            {/* Aturan 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Verifikasi Ganda (2FA)
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Aktifkan otentikasi dua langkah (Two-Factor Authentication) di
                semua aplikasi penting seperti WhatsApp, Email, dan Media Sosial
                Anda.
              </p>
            </div>

            {/* Aturan 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <Lock className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Rutin Ganti Password
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Gunakan kombinasi huruf, angka, dan simbol. Jangan gunakan
                tanggal lahir atau password yang sama untuk semua akun.
              </p>
            </div>
          </div>

          {/* Banner Cek Rekening */}
          <div className="bg-linear-to-r from-blue-900 to-blue-800 rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 rounded-full bg-blue-700 opacity-50 blur-3xl"></div>
              <div className="md:w-2/3 relative z-10 mb-8 md:mb-0 text-white text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Cek Rekening Sebelum Transfer!
                </h3>
                <p className="text-blue-100 text-lg max-w-xl mx-auto md:mx-0">
                  Ragu dengan nomor rekening tujuan? Pastikan rekening tersebut
                  belum pernah dilaporkan terkait penipuan melalui portal resmi
                  Kominfo.
                </p>
              </div>
              <div className="md:w-1/3 relative z-10 w-full flex justify-center md:justify-end">
                <a
                  href="https://cekrekening.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center py-4 px-8 border-2 border-white rounded-xl shadow-lg text-lg font-bold text-blue-900 bg-white hover:bg-blue-50 hover:scale-105 transition-all focus:outline-none"
                >
                  Cek di CekRekening.id{" "}
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lapor Section */}
      <section id="lapor" className="py-20 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sudah Terlanjur Menjadi Korban?
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Jangan panik! Segera lakukan langkah darurat berikut ini untuk
            meminimalisir kerugian dan laporkan kepada pihak berwajib.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
              <div className="font-bold text-red-600 text-lg mb-2">
                1. Hubungi Bank
              </div>
              <p className="text-sm text-gray-600">
                Segera hubungi call center resmi bank Anda untuk memblokir kartu
                ATM, rekening, atau akun m-banking yang diretas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
              <div className="font-bold text-red-600 text-lg mb-2">
                2. Kumpulkan Bukti
              </div>
              <p className="text-sm text-gray-600">
                Screenshot bukti percakapan, bukti transfer, nomor rekening
                pelaku, dan nomor telepon pelaku.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
              <div className="font-bold text-red-600 text-lg mb-2">
                3. Buat Laporan
              </div>
              <p className="text-sm text-gray-600">
                Laporkan ke kantor polisi terdekat (Bareskrim/Siber) dan
                laporkan nomor HP pelaku ke portal Kominfo.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://aduanomor.id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-700 border-2 border-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition flex items-center justify-center"
            >
              Lapor Nomor Penipu <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            <a
              href="https://patrolisiber.id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-md flex items-center justify-center"
            >
              Lapor Patroli Siber <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <Shield className="h-10 w-10 text-gray-600 mb-4" />
          <h3 className="text-white text-xl font-bold mb-2">AmanDigital</h3>
          <p className="mb-6 max-w-md">
            Platform edukasi independen untuk meningkatkan kesadaran keamanan
            siber dan perlindungan konsumen digital di Indonesia.
          </p>
          <div className="border-t border-gray-800 w-full max-w-2xl pt-8">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} AmanDigital. Dibuat untuk
              kepentingan edukasi publik.
            </p>
            <p className="text-xs mt-2 text-gray-500">
              Disclaimer: Situs ini adalah purwarupa edukasi. Untuk laporan
              resmi, harap hubungi otoritas terkait.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
