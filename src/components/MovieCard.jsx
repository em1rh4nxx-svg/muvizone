import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
      <div style={{ width: "200px", color: "white" }}>
        <img
          src={movie.poster}
          alt={movie.title}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h3>{movie.title}</h3>
        <p>⭐ {movie.rating}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
