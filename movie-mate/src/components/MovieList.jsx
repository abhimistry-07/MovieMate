import React, { useState, useEffect } from "react";
import { fetchMovies } from "../utils/api";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  console.log(movies);

  useEffect(() => {
    const searchMovies = async () => {
      const data = await fetchMovies(searchQuery);
      setMovies(data);
    };

    searchMovies();
  }, [searchQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};

// {
//     "Title": "Spider-Man",
//     "Year": "2002",
//     "imdbID": "tt0145487",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
// },

export default MovieList;