import React from "react";

const AddToFavourite = ({ movie, onAddToFavorites }) => {
  const handleAddToFavorites = () => {
    onAddToFavorites(movie);

    const logedInUser = JSON.parse(localStorage.getItem("logedInUser")) || [];

    const allUsersData = JSON.parse(localStorage.getItem("users"));

    const findLoggedInUserData = allUsersData.find(
      (user) => user.email === logedInUser.email
    );

    findLoggedInUserData.favMovies.push(movie);

    localStorage.setItem("users", JSON.stringify(allUsersData));

    // console.log(findLoggedInUserData.favMovies, " findLoggedInUserData >>>>>>");
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
