import Link from 'next/link';

export default function MovieCard({ movie }) {
  return (
    <Link href={`/detail/${movie.slug}`} className="group relative block w-full">
      {/* Container Poster dengan Rasio Tetap 2:3 */}
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md bg-zinc-800 transition-all duration-300 sm:hover:scale-105 sm:hover:z-10 sm:hover:shadow-xl sm:hover:ring-2 sm:hover:ring-white">
        
        {/* Gambar Poster */}
        <img 
          src={movie.thumbnail} 
          alt={movie.title}
          className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
          loading="lazy"
        />
        
        {/* Badge Rating di Pojok (Opsional) */}
        <div className="absolute top-2 right-2 bg-black/60 px-1.5 py-0.5 text-[10px] font-bold text-[#46d369] backdrop-blur-sm rounded">
          {movie.rating ? `${movie.rating}% Match` : 'New'}
        </div>

        {/* Overlay Judul (Muncul saat Hover di PC) */}
        <div className="absolute inset-0 hidden flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-3 opacity-0 group-hover:flex group-hover:opacity-100 transition-opacity">
          <p className="text-xs font-bold text-white drop-shadow-md">{movie.title}</p>
          <div className="flex gap-2 text-[10px] text-gray-300">
            <span>{movie.year}</span>
            <span className="border border-gray-500 px-1 rounded text-[8px]">{movie.type}</span>
          </div>
        </div>
      </div>

      {/* Judul di Bawah (Khusus Mobile agar terbaca) */}
      <div className="mt-2 block sm:hidden">
        <h3 className="truncate text-xs text-gray-200">{movie.title}</h3>
      </div>
    </Link>
  );
}