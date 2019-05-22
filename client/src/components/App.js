import React from "react";
import NavLink from "./navlink/NavLink";
import SigninForm from "../container/layoutContainer/body/SigninForm";
import SignupForm from "../container/layoutContainer/body/SignupForm";
import Quiz from "../container/layoutContainer/body/Quiz";
class App extends React.Component {
  render() {
    return (
      <div>
        <Quiz />
      </div>
    );
  }
}

export default App;
