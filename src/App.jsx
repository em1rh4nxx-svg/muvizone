import { useEffect, useState } from "react";
import Home from "./pages/Home";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=tr-TR`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">
          🎬 muvizone
        </div>
      </header>

      <Home movies={movies} />
    </>
  );
}

export default App;
