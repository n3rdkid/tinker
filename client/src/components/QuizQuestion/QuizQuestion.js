import React from "react";
import "./QuizQuestion.css";
import axios from "axios";

class QuizQuestion extends React.Component {
  // const question = props.question;
  // const answerList= [];
  //   for(let answer in question.answers){
  //      answerList.push(<li id={answer} key={question.id.concat(answer)} onClick={props.clicked} className="list-group-item my-1 p-3">{question.answers[answer]}</li>)
  // }
  state = {
    questions: {}
    // id: "",
    // question: "",
    // timelimit: ""
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/quiz/")
      .then(response => {
        this.setState({ questions: response.data.questions });
        //this.setState({ questions: response.data.questions.map(el => el) });
        // this.setState(prevState => ({
        //   id: [...prevState.id],
        //   question: [...prevState.question],
        //   timelimit: [...prevState.timelimit]
        // }));
        console.log(response.data.questions);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-9">
            <div className="card text-muted py-2">
              <div className="card-header bg-light">
                <h5 className="card-title">
                  Skill Assessment : JavaScript{" "}
                  <small className="ml-5">
                    Approximately 10 Questions Remaining
                  </small>
                </h5>
              </div>
              <div className="card-body">
                <h2 className="text-dark">
                  Question is: {console.log(this.state.questions)}
                </h2>
                <p className="bg-light py-2">{/*question.code*/}</p>
                <div className="answers">
                  <ul className="list-group">
                    {/* {answerList} */}
                    {/* <li className="list-group-item my-1 p-3">Symbol</li>
          <li className="list-group-item my-1 p-3 bg-danger text-white">String</li>
          <li className="list-group-item my-1 p-3  border-success border-3">Number</li>
          <li className="list-group-item my-1 p-3">Boolean</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-3">
            <h2 className="text-center py-3 text-danger">
              {/*question.time*/}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
export default QuizQuestion;
