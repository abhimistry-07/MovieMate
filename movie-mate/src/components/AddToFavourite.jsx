import React, { useEffect } from "react";

const AddToFavourite = ({ movie, onAddToFavorites }) => {
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem("favorites", JSON.stringify(storedFavorites));
  }, []);

  const handleAddToFavorites = () => {
    onAddToFavorites(movie);
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem(
      "favorites",
      JSON.stringify([...storedFavorites, movie])
    );
  };

  return (
    <div>
      <button onClick={() => handleAddToFavorites(movie)}>
        Add to Favorites
      </button>
    </div>
  );
};

export default AddToFavourite;
