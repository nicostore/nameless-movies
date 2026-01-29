import { fetchAPI } from '@/lib/api';

async function getData(type) {
  try {
    const res = await fetch(`https://zeldvorik.ru/rebahin21/api.php?action=${type}`, { cache: 'no-store' });
    const json = await res.json();
    if (json.success && json.data) return json.data;
    if (Array.isArray(json)) return json;
    return [];
  } catch (e) { return []; }
}

export default async function HomePage() {
  const trending = await getData('trending');
  const movies = await getData('movies&page=1');

  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        body { background-color: #141414; margin: 0; }
        a { text-decoration: none; color: inherit; }
        
        /* Container digeser ke bawah karena ada Navbar Fixed */
        .main-content { padding: 100px 40px 40px; max-width: 1600px; margin: 0 auto; }
        
        .section-header { font-size: 22px; font-weight: 700; margin-bottom: 20px; border-left: 5px solid #E50914; padding-left: 15px; color: white; }
        .movie-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px; margin-bottom: 50px; }
        .card { position: relative; transition: transform 0.3s; cursor: pointer; background: #1f1f1f; border-radius: 4px; overflow: hidden; }
        .card:hover { transform: scale(1.05); z-index: 10; box-shadow: 0 10px 20px rgba(0,0,0,0.5); }
        .poster-box { width: 100%; aspect-ratio: 2/3; position: relative; }
        .poster-img { width: 100%; height: 100%; object-fit: cover; }
        .rating { position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.8); color: #46d369; padding: 2px 6px; font-size: 11px; font-weight: bold; border: 1px solid #46d369; border-radius: 4px; }
        .info { padding: 10px; }
        .title { font-size: 14px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 5px; color: #fff; }
        .meta { display: flex; justify-content: space-between; font-size: 11px; color: #aaa; }
        
        @media (max-width: 768px) {
          .movie-grid { grid-template-columns: repeat(3, 1fr); gap: 8px; }
          .main-content { padding: 90px 15px 20px; }
        }
      `}</style>

      {/* NAVBAR SUDAH DIHAPUS DARI SINI KARENA ADA DI LAYOUT */}

      <div className="main-content">
        <h2 className="section-header">Lagi Trending</h2>
        <div className="movie-grid">
          {trending.map((item, i) => (
            <a key={i} href={`/detail/${item.slug}`} className="card">
              <div className="poster-box">
                <img src={item.thumbnail} alt={item.title} className="poster-img" loading="lazy" />
                <div className="rating">★ {item.rating}</div>
              </div>
              <div className="info">
                <div className="title">{item.title}</div>
                <div className="meta"><span>{item.year}</span><span>{item.type}</span></div>
              </div>
            </a>
          ))}
        </div>

        <h2 className="section-header">Film Terbaru</h2>
        <div className="movie-grid">
          {movies.map((item, i) => (
            <a key={i} href={`/detail/${item.slug}`} className="card">
              <div className="poster-box">
                <img src={item.thumbnail} alt={item.title} className="poster-img" loading="lazy" />
                <div className="rating">★ {item.rating}</div>
              </div>
              <div className="info">
                <div className="title">{item.title}</div>
                <div className="meta"><span>{item.year}</span><span>{item.type}</span></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}