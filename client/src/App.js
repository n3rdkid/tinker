import React from "react";
import NavLink from "./components/navlink/NavLink";
import SigninForm from "./container/body/SigninForm";
import SignupForm from "./container/body/SignupForm";
import Quiz from "./container/body/Quiz";
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
