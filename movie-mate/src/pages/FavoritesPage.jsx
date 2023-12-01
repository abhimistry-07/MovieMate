import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [logedInUser, setLogedInUser] = useState("");
  const [allUsersData, setAllUsersData] = useState([]);

  useEffect(() => {
    const logedInUser = JSON.parse(localStorage.getItem("logedInUser")) || [];

    const allUsersData = JSON.parse(localStorage.getItem("users"));

    const findLoggedInUserData = allUsersData?.find(
      (user) => user.email === logedInUser.email
    );

    setLogedInUser(logedInUser);
    setAllUsersData(allUsersData);
    setFavorites(findLoggedInUserData?.favMovies);
  }, []);

  const handleRemoveFromFav = (movieId) => {
    const findLoggedInUserData = allUsersData?.find(
      (user) => user.email === logedInUser.email
    );

    const updatedFavorites = findLoggedInUserData?.favMovies?.filter(
      (movie) => movie.imdbID !== movieId
    );

    findLoggedInUserData.favMovies = updatedFavorites;

    setFavorites(findLoggedInUserData.favMovies);

    localStorage.setItem("users", JSON.stringify(allUsersData));
  };

  return (
    <FavContainer>
      <h1>Favorites</h1>
      <div className="movieGrid">
        {favorites?.map((favMovie) => (
          <div key={favMovie.imdbID} className="movieCard">
            <Link
              className="link"
              to={{
                pathname: `/movie/${favMovie.imdbID}`,
              }}
            >
              <img src={favMovie.Poster} alt={favMovie.Title} />
              <h4 key={favMovie.imdbID}>{favMovie.Title}</h4>
            </Link>
            <button
              className="removeBtn"
              onClick={() => handleRemoveFromFav(favMovie.imdbID)}
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </FavContainer>
  );
};

const FavContainer = styled.div`
  max-width: 80%;
  margin: auto;
  padding: 20px;

  h1 {
    font-size: 36px;
    color: #000000;
    text-shadow: 2px 2px 4px #000;
  }

  .movieGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
  }

  /* .movieGrid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
  } */

  .movieCard {
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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

  .removeBtn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #f44336;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 10px;
  }

  .removeBtn:hover {
    background-color: #d50000;
    color: #ffffff;
  }

  @media (max-width: 600px) {
    .movieGrid {
      justify-items: center;
      align-items: center;
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    .movieGrid {
      justify-items: center;
      align-items: center;
    }
  }
`;

export default FavoritesPage;
