import React from "react";
import NavLink from "./navlink/NavLink";
import SigninForm from "../container/layoutContainer/body/SigninForm";
import SignupForm from "../container/layoutContainer/body/SignupForm";
import Quiz from "../container/layoutContainer/body/Quiz";
import Challenge from "../container/layoutContainer/body/Challenge";
import { checkServerIdentity } from "tls";
class App extends React.Component {
  render() {
    return (
      //BrowserRouter
      <Challenge />
    );
  }
}

export default App;
