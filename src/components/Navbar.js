"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    if (query.trim()) {
      router.push(`/search?q=${query}`); // Arahkan ke halaman hasil
    }
  };

  return (
    <>
      {/* CSS MANUAL UNTUK NAVBAR (NETFLIX STYLE) */}
      <style jsx>{`
        .navbar {
          position: fixed; top: 0; width: 100%; height: 70px;
          background: #141414;
          background: linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
          display: flex; align-items: center; padding: 0 4% 0 4%; z-index: 1000;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .nav-left { display: flex; align-items: center; gap: 30px; }
        .nav-logo { font-size: 24px; font-weight: 900; color: #E50914; text-decoration: none; cursor: pointer; letter-spacing: -1px; }
        .nav-links { display: flex; gap: 20px; }
        .nav-item { color: #e5e5e5; font-size: 14px; font-weight: 500; text-decoration: none; transition: 0.3s; }
        .nav-item:hover { color: #fff; }
        
        .nav-right { margin-left: auto; display: flex; align-items: center; }
        .search-form { display: flex; align-items: center; background: rgba(0,0,0,0.7); border: 1px solid #333; border-radius: 4px; padding: 5px 10px; }
        .search-icon { color: #aaa; font-size: 18px; margin-right: 8px; }
        .search-input {
          background: transparent; border: none; color: white;
          outline: none; font-size: 14px; width: 200px;
          transition: width 0.3s;
        }
        .search-input:focus { width: 250px; }
        .search-input::placeholder { color: #888; }

        @media (max-width: 768px) {
          .nav-links { display: none; } /* Sembunyikan menu text di HP */
          .search-input { width: 120px; }
          .search-input:focus { width: 160px; }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-left">
          <Link href="/" className="nav-logo">Nameless Movies</Link>
          <div className="nav-links">
            <Link href="/" className="nav-item">Home</Link>
            <Link href="/series" className="nav-item">Series</Link>
            <Link href="/movies" className="nav-item">Movies</Link>
          </div>
        </div>

        <div className="nav-right">
          <form onSubmit={handleSearch} className="search-form">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Cari film, judul..."
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
      </nav>
    </>
  );
}