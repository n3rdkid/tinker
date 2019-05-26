import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

import "./App.css";
import Home from "./container/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Quiz from "./container/QuizModule/QuizContainer/Quiz";
import Navigation from "./container/Navigation/Navigation";
import AddChallenge from "./container/ChallengeModule/ChallengeList/AddChallenge";
import ChallengeItem from "./components/ChallengeModule/ChallengeItem/ChallengeItem";
import ChallengeView from "./container/ChallengeModule/ChallengeView/ChallengeView";
import AddResources from "./container/ChallengeModule/AddResources";
import AddAssignment from "./container/AssignmentModule/AddAssignment";
class App extends React.Component {
 
  render() {
    console.log("loading qiz");
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Signin" component={SignIn} />
              <Route path="/Signup" component={SignUp} />
              <Route path="/Quiz" component={Quiz} />
              <Route path="/Challenges" component={ChallengeItem} />
              <Route path="/AddChallenge" component={AddChallenge} />
              <Route path="/challenges/:id" component={ChallengeView} />
              <Route path="/AddResources" component={AddResources} />
              <Route path="/AddAssignment" component={AddAssignment} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
