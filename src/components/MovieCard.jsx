function MovieCard({ movie }) {
  return (
    <div
      style={{
        backgroundColor: "#111",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.title}
        style={{ width: "100%", display: "block" }}
      />

      <div style={{ padding: "10px" }}>
        <h4 style={{ fontSize: "14px", margin: "0 0 6px" }}>
          {movie.title}
        </h4>
        <span style={{ color: "#f5c518", fontSize: "13px" }}>
          ⭐ {movie.vote_average?.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
