import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Quiz from "./container/QuizModule/QuizContainer/Quiz";
import ChallengeItem from "./components/ChallengeModule/ChallengeItem/ChallengeItem";
import Navigation from "./container/Navigation/Navigation";
import AddChallenge from "./container/ChallengeModule/ChallengeList/AddChallenge";
class App extends React.Component {
  render() {
    console.log("loading qiz");
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div>
            <Route path="/" component={SignIn} exact />
            <Route path="/Signup" component={SignUp} />
            <Route path="/Quiz" component={Quiz} />
            <Route path="/Challenge" component={ChallengeItem} />
            <Route path="/AddChallenge" component={AddChallenge} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
