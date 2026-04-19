import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Shield className="h-8 w-8 text-blue-300" />
            <span className="font-bold text-xl tracking-tight">
              AmanDigital
            </span>
          </Link>
    
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className={`${currentPath === "/" ? "text-blue-300 font-bold" : "hover:text-blue-300 font-medium"} transition`}
            >
              Beranda
            </Link>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "/", "modus")}
              className="hover:text-blue-300 transition font-medium"
            >
              Kenali Modus
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "/", "tips")}
              className="hover:text-blue-300 transition font-medium"
            >
              Tips Aman
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "/artikel")}
              className={`${currentPath.includes("/artikel") ? "text-blue-300 font-bold" : "hover:text-blue-300 font-medium"} transition flex items-center`}
            >
              <BookOpen className="w-4 h-4 mr-1" /> Artikel Kasus
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "/", "lapor")}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-bold transition"
            >
              Lapor Penipuan
            </a>
          </nav>

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

      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 pb-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-3 pt-2">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "/", "beranda")}
              className="block py-2 hover:text-blue-300"
            >
              Beranda
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "/", "modus")}
              className="block py-2 hover:text-blue-300"
            >
              Kenali Modus
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "/", "tips")}
              className="block py-2 hover:text-blue-300"
            >
              Tips Aman
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "/artikel")}
              className="block py-2 hover:text-blue-300"
            >
              Artikel Kasus
            </a>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "/", "lapor")}
              className="block py-2 text-red-300 font-bold"
            >
              Lapor Penipuan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}