import React, { useState, useEffect } from "react";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  console.log(favorites, ">>>>>>>>>");

  const handleRempveFromFav = (movieId) => {
    const updatedFavorites = favorites.filter(
      (movie) => movie.imdbID !== movieId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {favorites.map((favMovie) => (
          <div key={favMovie.imdbID}>
            <h2>{favMovie.Title}</h2>
            <p>Year: {favMovie.Year}</p>
            <p>Type: {favMovie.Type}</p>
            <p>Released: {favMovie.Released}</p>
            <img src={favMovie.Poster} alt={favMovie.Title} />
            <p>{favMovie.Plot}</p>
            <button onClick={() => handleRempveFromFav(favMovie.imdbID)}>
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
