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

    findLoggedInUserData.favMovies.push(movie);

    localStorage.setItem("users", JSON.stringify(allUsersData));

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

  button:hover {
    background-color: #0056b3;
  }
`;
