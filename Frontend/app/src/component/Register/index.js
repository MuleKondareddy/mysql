import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleFromData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((result) => {
        if (result.data === "User Inserted Successfully") {
          console.log("User Sucessfully Inserted");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Register Form</h1>
      <div>
        <form onSubmit={handleFromData}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
