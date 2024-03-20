import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./index.css";

const App = () => {
  return (
    <div>
      <h1>Welcome to DWCL Portal</h1>
      <LoginForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
