export default function HandleNavClick(e,  path, section) {
  e.preventDefault(); // Mencegah URL berubah (menghapus #id)

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
  }

  setIsMenuOpen(false); // Menutup menu mobile jika sedang terbuka
}
