import React, { useEffect, useState } from "react";
import AddToFavourite from "../components/AddToFavourite";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchMovieData } from "../utils/api";
import styled from "styled-components";

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
    <MovieContainer>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div>
        <h2>{movie.Title}</h2>
        <p>
          <span>Year:</span> {movie.Year}
        </p>
        <p>
          <span>Type:</span> {movie.Type}
        </p>
        <p>
          <span>Runtime:</span> {movie.Runtime}
        </p>
        <p>
          <span>Language:</span> {movie.Language}
        </p>
        <p>
          <span>Released:</span> {movie.Released}
        </p>
        <p>
          <span>Genre:</span> {movie.Genre}
        </p>
        <p>
          <span>Director:</span> {movie.Director}
        </p>
        <p>
          <span>Writer:</span> {movie.Writer}
        </p>
        <p>
          <span>Actors:</span> {movie.Actors}
        </p>
        <p>{movie.Plot}</p>
      </div>
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 20px;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  img {
    width: 300px;
    height: 450px;
    object-fit: cover;
    margin-right: 25px;
    transition: all 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  h2 {
    font-size: 24px;
    color: #000;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #4a4a4a;
    margin-bottom: 10px;
    padding-right: 40px;
  }

  span {
    font-weight: bolder;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 20px;

    img {
      margin-right: 0px;
    }
  }
`;

export default MovieDetails;
