import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/LoginForm";

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
