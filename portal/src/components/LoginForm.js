import React, { useState } from "react";
import RegisterForm from "./RegisterForm";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <p>Using your DWCL Account</p>
      {showRegisterForm ? null : (
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <br />
          <button type="submit">Login</button>
          <div style={{ marginTop: "10px" }}>
            <button type="button" onClick={handleRegisterClick}>
              Register
            </button>

            <div style={{ marginTop: "10px" }}>
              <a href="#old-student">Old Student</a>
              <p>For old students and new students with DWCL siblings</p>
              <a href="#new-applicant">New Applicant and Transferee</a>
              <p>For new students without DWCL siblings</p>
              <a href="#forgot-password">Forgot Password</a>
            </div>
          </div>
        </form>
      )}
      {showRegisterForm && <RegisterForm />}
    </div>
  );
};

export default LoginForm;
