// Contoh di komputer Anda (App.jsx)
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtikelPage from './pages/ArtikelPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
      </Routes>
    </BrowserRouter>
  );
}
