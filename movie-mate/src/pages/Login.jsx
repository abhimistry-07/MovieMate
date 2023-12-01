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
    <LoginContainer>
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
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background-color: #f8f9fa;

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    /* color: #4a4a4a; */
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: #4a4a4a;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ced4da;
    font-size: 1rem;
    color: #495057;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 10px;
  }

  button:hover {
    background-color: #0056b3;
  }
`;
