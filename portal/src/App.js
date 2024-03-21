import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/LoginForm";
import Logo from "./assets/dwcl_logo.png";
import "./index.css";

const App = () => {
  return (
    <div className="landscape-container">
      <img src={Logo} alt="Logo" className="logo" />
      <LoginForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
