import React, { useState, useEffect } from "react";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [logedInUser, setLogedInUser] = useState("");
  const [allUsersData, setAllUsersData] = useState([]);

  useEffect(() => {
    const logedInUser = JSON.parse(localStorage.getItem("logedInUser")) || [];

    const allUsersData = JSON.parse(localStorage.getItem("users"));

    const findLoggedInUserData = allUsersData.find(
      (user) => user.email === logedInUser.email
    );

    setLogedInUser(logedInUser);
    setAllUsersData(allUsersData);
    setFavorites(findLoggedInUserData.favMovies);
  }, []);

  const handleRemoveFromFav = (movieId) => {
    const findLoggedInUserData = allUsersData.find(
      (user) => user.email === logedInUser.email
    );

    const updatedFavorites = findLoggedInUserData.favMovies?.filter(
      (movie) => movie.imdbID !== movieId
    );

    findLoggedInUserData.favMovies = updatedFavorites;

    setFavorites(findLoggedInUserData.favMovies);

    localStorage.setItem("users", JSON.stringify(allUsersData));
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
            <button onClick={() => handleRemoveFromFav(favMovie.imdbID)}>
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
