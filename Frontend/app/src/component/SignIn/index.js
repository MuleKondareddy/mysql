import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleFromData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        if (result.data === "User LoggedIn successfully") {
          console.log("User Logged In");
        }
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>SignIn Form</h1>
      <div>
        <form onSubmit={handleFromData}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn bg-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
