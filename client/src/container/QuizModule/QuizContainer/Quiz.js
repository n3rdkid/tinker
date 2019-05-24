import React from "react";
import axios from "axios";
import QuizQuestion from "../../../components/QuizModule/QuizQuestion/QuizQuestion";

class Quiz extends React.Component {
  state = {
    questions: null
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/quiz/")
      .then(response => {
        this.setState({ questions: response.data.questions });
      })
      .catch(error => console.log(error)); 
  }
  
  render() {
    let display=<p>Add a spinner</p>
    if(this.state.questions!==null)
   display= <QuizQuestion
          questions={this.state.questions}
        />
    return (
      <div className="container">
        {display}
      </div>
    );
  }
}

export default Quiz;
