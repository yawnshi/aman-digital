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
  BookOpen,
  ArrowLeft,
  Calendar,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";

// --- DATA DUMMY ---
const artikelData = [
  {
    id: 1,
    kategori: "Phishing",
    judul:
      "Awas! Beredar Pesan Promo Gebyar Undian Berhadiah Mobil, Ternyata Link Phishing",
    tanggal: "14 Apr 2026",
    ringkasan:
      "Sebuah pesan berantai yang menjanjikan hadiah mobil dari bank ternama kembali memakan korban. Jangan pernah klik tautan yang mencurigakan.",
    konten:
      "Telah terjadi peningkatan kasus penipuan dengan modus menyebarkan link palsu melalui grup WhatsApp. Penipu membuat website yang desainnya sangat mirip dengan website resmi bank. Ketika korban memasukkan username dan password, data tersebut langsung terkirim ke server peretas. Pihak bank menegaskan bahwa mereka tidak pernah meminta data rahasia seperti password atau PIN melalui link semacam itu.",
  },
  {
    id: 2,
    kategori: "Social Engineering",
    judul:
      '"Halo, Rekening Bapak Akan Segera Diblokir!" - Modus Klasik yang Masih Ampuh',
    tanggal: "10 Apr 2026",
    ringkasan:
      'Modus telepon dari "Customer Service" palsu yang membuat panik korban untuk mencuri kode OTP.',
    konten:
      'Korban sering kali ditelepon pada jam-jam sibuk atau larut malam. Penelepon berbicara dengan nada profesional dan mendesak, menyatakan ada aktivitas mencurigakan di rekening korban. Untuk "mengamankan" dana, korban diminta menyebutkan kode OTP yang masuk ke SMS. Ingat, OTP adalah kunci akses brankas Anda. Jangan pernah memberikannya kepada siapa pun, bahkan kepada petugas bank sekalipun.',
  },
  {
    id: 3,
    kategori: "File APK",
    judul:
      "Pencurian Saldo M-Banking Bermodalkan File APK Berkedok Undangan Pernikahan",
    tanggal: "05 Apr 2026",
    ringkasan:
      "Modus baru di mana penipu mengirimkan file berformat .APK melalui pesan singkat yang bisa meretas isi HP Anda.",
    konten:
      'Banyak warga terkejut ketika saldo di rekening mereka mendadak ludes. Usut punya usut, mereka sempat mengunduh file berekstensi .APK yang dikirim oleh nomor tak dikenal. File tersebut disamarkan dengan nama "Undangan_Pernikahan.apk" atau "Cek_Resi_Paket.apk". Jika diinstal, aplikasi jahat ini akan diam-diam membaca kotak masuk SMS Anda untuk mencuri kode OTP m-banking.',
  },
  {
    id: 4,
    kategori: "E-Commerce",
    judul: "Tergiur iPhone Murah di Instagram, Jutaan Rupiah Melayang",
    tanggal: "02 Apr 2026",
    ringkasan:
      "Waspada toko online fiktif dengan testimoni palsu yang menawarkan barang elektronik jauh di bawah harga pasar.",
    konten:
      "Promo besar-besaran di media sosial selalu menarik perhatian. Namun, berhati-hatilah jika Anda diminta untuk melakukan transfer langsung ke rekening pribadi alih-alih menggunakan sistem rekening bersama (rekber) dari e-commerce resmi. Banyak toko fiktif memajang foto curian dan testimoni palsu. Setelah uang ditransfer, penjual akan langsung memblokir nomor pembeli.",
  },
];

const handleNavClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleNavClick}
          >
            <Shield className="h-8 w-8 text-blue-300" />
            <span className="font-bold text-xl tracking-tight">
              AmanDigital
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

// --- KOMPONEN FOOTER ---
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 px-4 text-center mt-auto">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <Shield className="h-10 w-10 text-gray-600 mb-4" />
      <h3 className="text-white text-xl font-bold mb-2">AmanDigital</h3>
      <p className="mb-6 max-w-md">
        Platform edukasi independen untuk meningkatkan kesadaran keamanan siber
        dan perlindungan konsumen digital di Indonesia.
      </p>
      <div className="border-t border-gray-800 w-full max-w-2xl pt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AmanDigital. Dibuat untuk
          kepentingan edukasi publik.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Disclaimer: Situs ini adalah purwarupa edukasi. Untuk laporan resmi,
          harap hubungi otoritas terkait.
        </p>
      </div>
    </div>
  </footer>
);

export default function Article() {
  const [currentPath, setCurrentPath] = useState("/");
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Fungsi untuk berpindah halaman layaknya Router
  const navigateTo = (path) => {
    setCurrentPath(path);
  };

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    setCurrentPath("/detail");
  };

  // Menambahkan efek smooth scroll
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => document.documentElement.classList.remove("scroll-smooth");
  }, []);

  // Logika Switch untuk merender halaman berdasarkan URL (Path)
  let PageComponent;
  switch (currentPath) {
    case "/":
      PageComponent = (
        <ArtikelPage
          navigateTo={navigateTo}
          onSelectArticle={handleSelectArticle}
        />
      );
      break;
    case "/detail":
      PageComponent = (
        <ArtikelDetailPage article={selectedArticle} navigateTo={navigateTo} />
      );
      break;
    default:
      PageComponent = <HomePage navigateTo={navigateTo} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800 selection:bg-blue-200">
      <Navbar currentPath={currentPath} navigateTo={navigateTo} />

      {/* Container utama untuk halaman */}
      <main className="grow flex flex-col">{PageComponent}</main>

      <Footer />
    </div>
  );
}

// --- HALAMAN DAFTAR ARTIKEL (ARTIKEL PAGE) ---
const ArtikelPage = ({ onSelectArticle }) => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const filterKategori = [
    "Semua",
    "Phishing",
    "Social Engineering",
    "File APK",
    "E-Commerce",
  ];
  const filteredArtikel =
    activeCategory === "Semua"
      ? artikelData
      : artikelData.filter((a) => a.kategori === activeCategory);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto bg-gray-50 grow w-full">
      <div className="text-center mb-12 mt-8">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-widest uppercase mb-4">
          Pusat Edukasi
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          Kumpulan Kasus & Artikel Penipuan
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Pelajari modus terbaru melalui contoh kasus nyata agar Anda dapat
          lebih waspada.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filterKategori.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition ${activeCategory === cat ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {filteredArtikel.map((artikel) => (
          <div
            key={artikel.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full flex items-center">
                <Tag className="w-3 h-3 mr-1" />
                {artikel.kategori}
              </span>
              {/* <span className="text-xs text-gray-400 flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {artikel.tanggal}
              </span> */}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
              {artikel.judul}
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {artikel.ringkasan}
            </p>
            <button
              onClick={() => {
                onSelectArticle(artikel);
                window.scrollTo(0, 0);
              }}
              className="text-blue-600 font-bold text-sm hover:text-blue-800 flex items-center group"
            >
              Baca Selengkapnya{" "}
              <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- HALAMAN DETAIL ARTIKEL ---
const ArtikelDetailPage = ({ article, navigateTo }) => {
  if (!article)
    return <div className="text-center py-20">Artikel tidak ditemukan.</div>;

  return (
    <div className="py-16 px-4 max-w-3xl mx-auto grow w-full">
      <button
        onClick={() => {
          navigateTo("/");
          window.scrollTo(0, 0);
        }}
        className="flex items-center text-gray-500 hover:text-blue-600 transition mb-8 font-medium"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Kembali ke Daftar Artikel
      </button>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {article.kategori}
          </span>
          {/* <span className="text-sm text-gray-400 flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {article.tanggal}
          </span> */}
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
          {article.judul}
        </h1>
        <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-lg font-medium text-gray-600 border-l-4 border-blue-500 pl-4 py-1 bg-blue-50/50">
            {article.ringkasan}
          </p>
          <p className="text-base md:text-lg">{article.konten}</p>

          <div className="mt-8 p-5 bg-red-50 text-red-800 rounded-xl text-sm border border-red-100 flex items-start">
            <AlertTriangle className="w-6 h-6 mr-3 shrink-0 text-red-600 mt-0.5" />
            <div>
              <strong className="block mb-1 text-red-900 text-base">
                Tips Kewaspadaan:
              </strong>
              Selalu verifikasi informasi yang Anda terima. Jangan pernah
              membagikan data rahasia seperti PIN, Password, dan OTP kepada
              siapa pun. Jika ragu, selalu hubungi nomor call center resmi dari
              instansi terkait.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
