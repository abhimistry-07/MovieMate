import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [signUp, setSignup] = useState(false);

  const navigate = useNavigate();

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
      let userName = allUsers.find((user) => user.username == username);
      let userEmail = allUsers.find((user) => user.email == email);

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
    <div>
      <h1>Signup</h1>
      {signUp ? (
        <p>Signup successful!</p>
      ) : (
        <form action="" onSubmit={handleSignUp}>
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button>Signup</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
