import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";

import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Quiz from "./container/QuizModule/QuizContainer/Quiz";
import Navigation from "./container/Navigation/Navigation";
import AddChallenge from "./container/ChallengeModule/ChallengeList/AddChallenge";
import ChallengeItem from "./components/ChallengeModule/ChallengeItem/ChallengeItem";
import ChallengeView from "./container/ChallengeModule/ChallengeView/ChallengeView";
class App extends React.Component {
  render() {
    console.log("loading qiz");
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div>
            <Switch>
              <Route path="/" component={SignIn} exact />
              <Route path="/Signup" component={SignUp} />
              <Route path="/Quiz" component={Quiz} />
              <Route path="/Challenges" component={ChallengeItem} exact />
              <Route path="/AddChallenge" component={AddChallenge} />
              <Route path="/challenges/:id" component={ChallengeView} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
