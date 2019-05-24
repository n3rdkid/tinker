import React from "react";
import {createStore}from "redux";
import Quiz from "./container/QuizModule/QuizContainer/Quiz";
const store = createStore();

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
