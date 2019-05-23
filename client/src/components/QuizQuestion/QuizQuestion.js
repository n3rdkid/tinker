import React from 'react';
import './QuizQuestion.css'

const quizQuestion = (props)=>{
  const question = props.question;
  const answerList= [];
  for(let answer in question.answers){
     answerList.push(<li id={answer} key={question.id.concat(answer)} onClick={props.clicked} className="list-group-item my-1 p-3">{question.answers[answer]}</li>)
}
return(
    <div className="container">
    <div className="row my-5">
      <div className="col-sm-9">
      <div className="card text-muted py-2">
      <div className="card-header bg-light">
        <h5 className="card-title">Skill Assessment : JavaScript  <small className="ml-5">Approximately 10 Questions Remaining</small></h5>
      </div>
      <div className="card-body">
        <h2 className="text-dark">{question.title}</h2>
        <p className="bg-light py-2">{question.code}</p>
        <div className="answers">
        <ul className="list-group">
        {answerList}
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
          <h2 className="text-center py-3 text-danger">{question.time}</h2>       
      </div>
      </div>
    </div>
   )
  }
export default quizQuestion;
