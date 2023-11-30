import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div>
      <h1>Login</h1>
      <form action="">
        {/* <label htmlFor="">
          Username
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br /> */}
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
