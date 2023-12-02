import React from "react";
import styled from "styled-components";

const AddToFavourite = ({ movie, onAddToFavorites }) => {
  const handleAddToFavorites = () => {
    onAddToFavorites(movie);

    const logedInUser = JSON.parse(localStorage.getItem("logedInUser")) || [];

    const allUsersData = JSON.parse(localStorage.getItem("users"));

    const findLoggedInUserData = allUsersData?.find(
      (user) => user.email === logedInUser.email
    );

    // let userName = allUsers?.find((user) => user.username == username);
    const isMovieExists = findLoggedInUserData?.favMovies.find(
      (currMovie) => currMovie.imdbID == movie.imdbID
    );

    if (isMovieExists) {
      return alert("Movie already exists in favorites");
    }

    findLoggedInUserData.favMovies.push(movie);

    localStorage.setItem("users", JSON.stringify(allUsersData));

    alert("Movie added to favourites!");
    // console.log(findLoggedInUserData.favMovies, " findLoggedInUserData >>>>>>");
  };

  return (
    <Button onClick={() => handleAddToFavorites(movie)}>
      Add to Favorites
    </Button>
  );
};

export default AddToFavourite;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  width: 100%;

  button:hover {
    background-color: #0056b3;
  }
`;
