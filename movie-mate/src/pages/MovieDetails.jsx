import React from "react";
import AddToFavourite from "../components/AddToFavourite";

const MovieDetails = ({ movie, onAddToFavorites }) => {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
      <p>Released: {movie.Released}</p>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <AddToFavourite movie={movie} onAddToFavorites={onAddToFavorites} />
    </div>
  );
};

export default MovieDetails;