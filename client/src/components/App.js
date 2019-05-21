import React from "react";
import NavLink from "./navlink/NavLink";
import SigninForm from "../container/layoutContainer/body/SigninForm";
import SignupForm from "../container/layoutContainer/body/SignupForm";

class App extends React.Component {
  state = {
    fields: {}
  };
  onSubmit = fields => {
    console.log("APp component got :", fields);
  };
  render() {
    return <SignupForm onSubmit={fields => this.onSubmit(fields)} />;
  }
}

export default App;
