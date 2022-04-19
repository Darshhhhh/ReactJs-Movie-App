import "./App.css";
import SearchIcon from "./search.svg";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
// API key = 9bbc2d36
const API_URL = "http://www.omdbapi.com?apikey=9bbc2d36";
// const movie1 = {
//   Title: "Life Undefined",
//   Year: "2020",
//   imdbID: "tt10229024",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMWZmMzY5MjctMWVmMS00OTljLTgxYjgtZDhlNjYwNWJhNzRjXkEyXkFqcGdeQXVyNjExMDY4NTE@._V1_SX300.jpg",
// };
function App() {
  const [movies, SetMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    SetMovies(data.Search);
  };
  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <div className="app">
      <h1>Movie Verse</h1>
      <div className="search">
        <input
          placeholder="Seach For Movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Seacrh"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}
export default App;
