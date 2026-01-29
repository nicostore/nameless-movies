"use client";
import { useState } from 'react';
import MovieCard from '@/components/MovieCard';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    
    setLoading(true);
    const res = await fetch(`https://zeldvorik.ru/rebahin21/api.php?action=search&q=${query}&page=1`);
    const data = await res.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <main className="min-h-screen pt-24 pb-12 px-4">
      <div className="mx-auto max-w-7xl">
        <form onSubmit={handleSearch} className="mb-12 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <input 
              type="text" 
              placeholder="Cari film atau series..." 
              className="w-full rounded-full bg-zinc-900 border border-zinc-800 py-4 px-6 text-white outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="absolute right-3 top-2 rounded-full bg-cyan-600 px-6 py-2 text-sm font-bold text-white hover:bg-cyan-500">
              Cari
            </button>
          </div>
        </form>

        {loading ? (
          <div className="text-center text-white">Mencari film...</div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {results.map((item) => (
              <MovieCard key={item.slug} movie={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}