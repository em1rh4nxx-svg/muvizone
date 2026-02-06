import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      fetchPopular();
    } else {
      searchMovies();
    }
  }, [query]);

  const fetchPopular = async () => {
    const res = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=tr-TR`
    );
    const data = await res.json();
    setMovies(data.results);
  };

  const searchMovies = async () => {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=tr-TR&query=${query}`
    );
    const data = await res.json();
    setMovies(data.results);
  };

  return (
    <div style={{ backgroundColor: "#0d0d0d", minHeight: "100vh", color: "#fff" }}>
      
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #1f1f1f",
        }}
      >
        <div style={{ fontSize: "28px", fontWeight: "700", color: "#e50914" }}>
          🎬 muvizone
        </div>

        <input
          type="text"
          placeholder="Film ara..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "260px",
            padding: "10px 14px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            backgroundColor: "#1a1a1a",
            color: "#fff",
            fontSize: "14px",
          }}
        />
      </header>

      {/* MOVIES */}
      <div
        style={{
          padding: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "24px",
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
