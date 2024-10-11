// src/MovieDescription.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams(); // Get the movie ID from the URL
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const movie = movies.find((movie) => movie.id === parseInt(id)); // Find the movie by ID

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default MovieDescription;
