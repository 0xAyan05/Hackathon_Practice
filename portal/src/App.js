import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/LoginForm";
import "./index.css";

const App = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
