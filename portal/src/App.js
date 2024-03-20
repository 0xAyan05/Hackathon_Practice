import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./index.css";

const App = () => {
  return (
    <div className="landscape-container">
      <LoginForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
