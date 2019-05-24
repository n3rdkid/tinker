import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Quiz from "./container/QuizModule/QuizContainer/Quiz";
import ChallengeItem from "./components/ChallengeModule/ChallengeItem/ChallengeItem";
import Navigation from "./container/Navigation/Navigation";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div>
            <Route path="/" component={SignIn} exact />
            <Route path="/Signup" component={SignUp} />
            <Route path="/Quiz" component={Quiz} />
            <Route path="/Challenge" component={ChallengeItem} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
