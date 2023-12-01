import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import zxcvbn from "zxcvbn";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [signUp, setSignup] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: { warning: "", suggestions: [] },
  });
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const strength = zxcvbn(e.target.value);
    setPasswordStrength(strength);
  };

  const newUser = {
    username,
    email,
    password,
    favMovies: [],
  };

  useEffect(() => {
    const getAllUsers = JSON.parse(localStorage.getItem("users")) || [];
    setAllUsers(getAllUsers);
  }, []);

  //   console.log(allUsers);

  const handleSignUp = (e) => {
    e.preventDefault();
    try {
      let userName = allUsers?.find((user) => user.username == username);
      let userEmail = allUsers?.find((user) => user.email == email);

      if (userName) {
        alert("UserName already exists");
        return;
      }

      if (userEmail) {
        alert("Email already exists, please enter different email address");
        return;
      }

      if (!userName && !userEmail) {
        localStorage.setItem("users", JSON.stringify([...allUsers, newUser]));
        setSignup(true);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignupContainer>
      {signUp ? (
        <p>Signup successful!</p>
      ) : (
        <form action="" onSubmit={handleSignUp}>
          <h1>Signup</h1>
          <label htmlFor="">
            Username
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label htmlFor="">
            Email
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label htmlFor="">
            Password
            <input
              type="password"
              // onChange={(e) => setPassword(e.target.value)}
              onChange={handlePasswordChange}
            />
            <div>
              Strength: {passwordStrength.score} / 4
              {passwordStrength.feedback.warning && (
                <p>{passwordStrength.feedback.warning}</p>
              )}
              {passwordStrength.feedback.suggestions.length > 0 && (
                <ul>
                  {passwordStrength.feedback.suggestions.map(
                    (suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    )
                  )}
                </ul>
              )}
            </div>
          </label>
          <button>Signup</button>
        </form>
      )}
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
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

export default Signup;
