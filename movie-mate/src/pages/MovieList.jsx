import React, { useState, useEffect } from "react";
import { fetchMovies } from "../utils/api";
import MovieDetails from "./MovieDetails";
import AddToFavourite from "../components/AddToFavourite";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // console.log(movies);

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

  const handleAddToFavorites = (movie) => {
    setFavorites((prevMovies) => [...prevMovies, movie]);
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
      <div>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ width: "12px" }}>
            <div onClick={() => handleMovieClick(movie)}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: "100%" }}
              />
              <p key={movie.imdbID}>{movie.Title}</p>
              <AddToFavourite
                movie={movie}
                onAddToFavorites={handleAddToFavorites}
              />
            </div>
          </div>
        ))}
      </div>
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

// {
//     "Title": "Spider-Man",
//     "Year": "2002",
//     "imdbID": "tt0145487",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
// },

export default MovieList;
