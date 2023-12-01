import React, { useEffect, useState } from "react";
import AddToFavourite from "../components/AddToFavourite";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchMovieData } from "../utils/api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovieData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await fetchMovieData(id);
      setMovieData(movieData);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  // console.log("MovieDetails State:", movie);

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
      <p>Released: {movie.Released}</p>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      {/* <AddToFavourite movie={movie} onAddToFavorites={onAddToFavorites} /> */}
    </div>
  );
};

export default MovieDetails;
