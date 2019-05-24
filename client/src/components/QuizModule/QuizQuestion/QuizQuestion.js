import React from "react";
import "./QuizQuestion.css";
import axios from "axios";
const quizQuestion =(props)=> {
 let questions=props.question;
let answers=props.answers;

let answerList=[];

for(let answer of answers){
  answerList.push(<li id={answer.id} key={answer.id+answer.id} onClick={props.clicked} className="list-group-item my-1 p-3">{answer.answer}</li>)
}
return (

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
                <h2 className="text-dark" />
                <p className="bg-light py-2">{questions.question}</p>

                <div className="answers">
                  <ul className="list-group">
                    {answerList}                  </ul>
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
)
}
export default quizQuestion;
