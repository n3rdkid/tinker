import React from "react";
<<<<<<< HEAD
import {createStore}from "redux";
import Quiz from "./container/QuizModule/QuizContainer/Quiz";
const store = createStore();

=======
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Quiz from "./container/QuizModule/QuizContainer/Quiz";
import ChallengeItem from "./components/ChallengeModule/ChallengeItem/ChallengeItem";
import Navigation from "./container/Navigation/Navigation";
>>>>>>> 551771f09513e072f825951c780713c29fc1b468
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
