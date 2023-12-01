import React, { useState, useEffect } from "react";
import { fetchMovies } from "../utils/api";
import AddToFavourite from "../components/AddToFavourite";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [selectedMovie, setSelectedMovie] = useState(null);
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

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
    // setSelectedMovie(null);
  };

  const handleAddToFavorites = (movie) => {
    setFavorites((prevMovies) => [...prevMovies, movie]);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  // console.log(favorites, "favorites >>>>");

  return (
    <Container>
      <input
        className="searchBar"
        type="text"
        placeholder="Search for movies"
        value={searchQuery}
        onChange={handleInput}
      />
      <label className="sortLabel">
        Sort by:
        <select onChange={handleSortChange} value={sort}>
          <option value="">Select</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>
      </label>
      <div className="movieGrid">
        {movies.map((movie) => (
          <div className="movieCard" key={movie.imdbID}>
            <Link
              className="link"
              to={{
                pathname: `/movie/${movie.imdbID}`,
                query: handleAddToFavorites,
              }}
            >
              <img src={movie.Poster} alt={movie.Title} />
              <h4 key={movie.imdbID}>{movie.Title}</h4>
            </Link>
            <AddToFavourite
              movie={movie}
              onAddToFavorites={handleAddToFavorites}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MovieList;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  padding: 20px;
  /* background-color: #f8f9fa; */

  .searchBar {
    width: 80%;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
  }

  .sortLabel {
    display: block;
    align-items: center;
    font-size: 16px;
    color: #4a4a4a;
    margin-bottom: 10px;
  }

  select {
    margin-left: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ced4da;
    font-size: 16px;
    color: #495057;
  }

  select:hover {
    border-color: #007bff;
  }

  /* .movieGrid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
  } */

  .movieGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .movieCard {
    display: flex;
    flex-direction: column;
  }

  .movieCard {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .movieCard {
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      height: auto;
    }

    h4 {
      color: black;
      margin: 10px;
      text-align: center;
    }
  }

  .link {
    text-decoration: none;
  }
`;
