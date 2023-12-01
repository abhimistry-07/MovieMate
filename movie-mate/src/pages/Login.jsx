import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllUsers = JSON.parse(localStorage.getItem("users")) || [];
    setAllUsers(getAllUsers);
  }, []);

  // console.log(allUsers);

  const handleLogin = (e) => {
    try {
      e.preventDefault();

      let userExists = allUsers?.find((user) => {
        return (
          user.email === email &&
          user.password == password &&
          user.username &&
          user.favMovies
        );
      });

      // console.log(userExists, ">> userExists");

      if (userExists) {
        alert("Login successfull!");
        localStorage.setItem("logedInUser", JSON.stringify(userExists));
        navigate("/");
      } else {
        alert("Invalid credentials!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <h1>Login</h1>
        <label htmlFor="">
          Email
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label htmlFor="">
          Password
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
