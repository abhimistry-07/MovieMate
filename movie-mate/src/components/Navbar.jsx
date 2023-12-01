import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/Logo.jpg";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getLogedINUser =
      JSON.parse(localStorage.getItem("logedInUser")) || {};

    if (Object.keys(getLogedINUser).length !== 0) {
      setIsLogedIn(true);
    }
  }, [isLogedIn]);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  const handleLogOut = () => {
    localStorage.removeItem("logedInUser");
    setIsLogedIn(false);
    navigate("/login");
  };

  // const handleFavClick = () => {
  //   if (!isLogedIn) {
  //     alert("Login First");
  //     navigate("/login");
  //   }
  // };

  return (
    <div>
      <NAV className="nav">
        <div className="hamburger" onClick={handleClick}>
          <div>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <a href="/" className="logo">
            <img src={logo} alt="" className="logo" />
          </a>
        </div>
        <div className={`nav__link ${isHidden ? "hide" : ""}`}>
          <a href="/" className="logo1">
            <img src={logo} alt="" className="logo1" />
          </a>
          <a href="/">Home</a>
          <a href="/favorites">Favorites</a>
          <a href="/signup">Signup</a>
          <a href="/login" onClick={handleLogOut}>
            {isLogedIn ? "Logout" : "Login"}
          </a>
        </div>
      </NAV>
    </div>
  );
};

export default Navbar;

const NAV = styled.nav`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
    color: #4a4a4a;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    background-color: #f8f9fa;
  }

  .logo {
    font-size: 1.8rem;
    color: #007bff;
    padding-left: 15%;
  }

  .hamburger {
    padding-right: 20px;
    cursor: pointer;
    padding-top: 15px;
  }

  .hamburger {
    display: flex;
    align-items: center;
  }

  .hamburger .line {
    display: block;
    width: 40px;
    height: 5px;
    margin-bottom: 10px;
    background-color: #007bff;
    margin-left: 20px;
  }

  .nav__link {
    position: fixed;
    width: 94%;
    top: 5rem;
    left: 18px;
    background-color: #f8f9fa;
  }

  .nav__link a {
    display: block;
    text-align: center;
    padding: 10px 0;
  }

  .nav__link a:first-child:hover {
    background-color: #ffffff;
  }

  .nav__link a:hover {
    background-color: #007bff;
    color: #fff;
  }

  .hide {
    display: none;
  }

  .logo1 {
    display: none;
  }

  @media screen and (min-width: 600px) {
    .nav__link {
      display: block;
      position: static;
      width: auto;
      /* margin-right: 20px; */
      background: none;
    }

    .nav__link a {
      display: inline-block;
      padding: 15px 20px;
      vertical-align: middle;
    }

    .hamburger {
      display: none;
    }

    .logo1 {
      display: flex;
      vertical-align: middle;
    }
  }
`;
