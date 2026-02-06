import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_TMDB_API_KEY;
const IMG = "https://image.tmdb.org/t/p/w500";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API}&language=tr-TR`)
      .then(r => r.json())
      .then(setMovie);

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API}&language=tr-TR`)
      .then(r => r.json())
      .then(d => {
        const t = d.results?.find(
          v => v.site === "YouTube" && v.type === "Trailer"
        );
        setTrailer(t);
      });
  }, [id]);

  if (!movie) return <div style={{ color: "white", padding: 40 }}>Yükleniyor…</div>;

  return (
    <div style={{ color: "white", padding: 40 }}>
      <Link to="/" style={{ color: "#e50914" }}>⬅ Geri</Link>

      <div style={{ display: "flex", gap: 30, marginTop: 30, flexWrap: "wrap" }}>
        {movie.poster_path && (
          <img src={IMG + movie.poster_path} width={300} />
        )}

        <div style={{ maxWidth: 600 }}>
          <h1>{movie.title}</h1>
          <div style={{ color: "#e50914" }}>⭐ {movie.vote_average}</div>
          <p>{movie.overview}</p>

          {trailer && (
            <>
              <h3 style={{ marginTop: 30 }}>🎞 Fragman</h3>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="YouTube trailer"
                frameBorder="0"
                allowFullScreen
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
