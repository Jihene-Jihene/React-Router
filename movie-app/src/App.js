// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDescription from "./MovieDescription";
import { movies } from "./movies"; // Import the movie data
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route
            path="/movies/:id"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
