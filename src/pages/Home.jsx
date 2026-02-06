import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_TMDB_API_KEY;
const IMG = "https://image.tmdb.org/t/p/w500";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=tr-TR&page=${page}`
    )
      .then(r => r.json())
      .then(d => {
        setMovies(prev => [...prev, ...(d.results || [])]);
      });
  }, [page]);

  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>🎬 MovieRadar</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))",
        gap: 20
      }}>
        {movies.map(m => (
          <Link
            key={`${m.id}-${Math.random()}`}
            to={`/movie/${m.id}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            <div style={{ background: "#111", borderRadius: 8 }}>
              {m.poster_path && (
                <img src={IMG + m.poster_path} style={{ width: "100%" }} />
              )}
              <div style={{ padding: 10 }}>
                <b>{m.title}</b>
                <div style={{ color: "#e50914" }}>⭐ {m.vote_average}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button
        onClick={() => setPage(p => p + 1)}
        style={{
          marginTop: 40,
          padding: "10px 20px",
          background: "#e50914",
          color: "white",
          border: "none",
          fontSize: 16,
          cursor: "pointer"
        }}
      >
        Daha Fazla Yükle
      </button>
    </div>
  );
}
