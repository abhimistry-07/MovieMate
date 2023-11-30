import React, { useState, useEffect } from "react";
import { fetchMovies } from "../utils/api";
import MovieDetails from "./MovieDetails";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  console.log(movies);

  useEffect(() => {
    const searchMovies = async () => {
      const data = await fetchMovies(searchQuery);
      setMovies(data);
    };

    searchMovies();
  }, [searchQuery]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
    setSelectedMovie(null);
  };

  // console.log(selectedMovie, ">>>>");

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies"
        value={searchQuery}
        onChange={handleInput}
      />
      {selectedMovie == null ? (
        <ul>
          {movies.map((movie) => (
            <li onClick={() => handleMovieClick(movie)} key={movie.imdbID}>
              {movie.Title}
            </li>
          ))}
        </ul>
      ) : (
        <MovieDetails
          movie={selectedMovie}
        />
      )}
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
