import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <NAV class="nav">
        <a href="/" class="logo">
          logo
        </a>

        <div className="hamburger" onClick={handleClick}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className={`nav__link ${isHidden ? "hide" : ""}`}>
          <a href="/">Home</a>
          <a href="/favorites">Favorites</a>
          <a href="/signup">Signup</a>
          <a href="/login">Login</a>
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
    padding-left: 20px;
  }

  .hamburger {
    padding-right: 20px;
    cursor: pointer;
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

  .nav__link a:hover {
    background-color: #007bff;
    color: #fff;
  }

  .hide {
    display: none;
  }

  @media screen and (min-width: 600px) {
    .nav__link {
      display: block;
      position: static;
      width: auto;
      margin-right: 20px;
      background: none;
    }

    .nav__link a {
      display: inline-block;
      padding: 15px 20px;
    }

    .hamburger {
      display: none;
    }
  }
`;
