// src/MovieCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleClick = () => {
    navigate(`/movies/${movie.id}`); // Navigate to the movie description page
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <h2>{movie.title}</h2>
    </div>
  );
};

export default MovieCard;
