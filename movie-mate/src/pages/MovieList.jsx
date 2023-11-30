import React, { useState, useEffect } from "react";
import { fetchMovies } from "../utils/api";
import MovieDetails from "./MovieDetails";
import AddToFavourite from "../components/AddToFavourite";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [sort, setSort] = useState("");

  // console.log(movies);

  useEffect(() => {
    const searchAndSortMovies = async () => {
      const data = await fetchMovies(searchQuery);
      const sortedMovies = sortMovies(data, sort);
      setMovies(sortedMovies);
    };

    searchAndSortMovies();
  }, [searchQuery, sort]);

  const sortMovies = (moviesToSort, criteria) => {
    switch (criteria) {
      case "year":
        return [...moviesToSort].sort((a, b) => a.Year - b.Year);
      case "rating":
        return [...moviesToSort].sort((a, b) => b.imdbRating - a.imdbRating);
      default:
        return moviesToSort;
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
    setSelectedMovie(null);
  };

  const handleAddToFavorites = (movie) => {
    setFavorites((prevMovies) => [...prevMovies, movie]);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  console.log(favorites, "favorites >>>>");

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies"
        value={searchQuery}
        onChange={handleInput}
      />
      {/* <div>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ width: "12px" }}>
            <div onClick={() => handleMovieClick(movie)}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: "100%" }}
              />
              <p key={movie.imdbID}>{movie.Title}</p>
            </div>
            <AddToFavourite
              movie={movie}
              onAddToFavorites={handleAddToFavorites}
            />
          </div>
        ))}
      </div> */}
      <label>
        Sort by:
        <select onChange={handleSortChange} value={sort}>
          <option value="">Select</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>
      </label>
      <ul>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ width: "12px" }}>
            <div onClick={() => handleMovieClick(movie)}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: "100%" }}
              />
              <p key={movie.imdbID}>{movie.Title}</p>
            </div>
            <AddToFavourite
              movie={movie}
              onAddToFavorites={handleAddToFavorites}
            />
          </div>
        ))}
      </ul>
      {/* {selectedMovie == null ? (
        <div>
          {movies.map((movie) => (
            <div onClick={() => handleMovieClick(movie)}>
              <img src={movie.Poster} alt={movie.Title} />
              <p key={movie.imdbID}>{movie.Title}</p>
            </div>
          ))}
        </div>
      ) : (
        <MovieDetails
          movie={selectedMovie}
          onAddToFavorites={handleAddToFavorites}
        />
      )} */}
      {selectedMovie !== null && (
        <MovieDetails
          movie={selectedMovie}
          onAddToFavorites={handleAddToFavorites}
        />
      )}
    </div>
  );
};

export default MovieList;
