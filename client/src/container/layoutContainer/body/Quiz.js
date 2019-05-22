import React from "react";
import "../../../../node_modules/codemirror/lib/codemirror.css";
import "../../../../node_modules/codemirror/theme/material.css";
import QuizQuestion from "../../../components/Quiz/QuizQuestion";
import CountDownTimer from "../container/CountDownTImer";

let testCases = [
  { no: 1, test: `rot13("SERR PBQR PNZC")`, result: "FREE CODE CAMP" },
  { no: 2, test: `rot13("SERR CVMMN!")`, result: "FREE PIZZA!" },
  { no: 3, test: `rot13("SERR YBIR?")`, result: "FREE LOVE?" }
];

let currentValue = `function rot13(str) { // LBH QVQ VG!
    let temp=str.split("");
    for(let i=0;i<temp.length;i++)
      {
         if(temp[i].charCodeAt(0)>=65 && temp[i].charCodeAt(0)<=91){
         let value=temp[i].charCodeAt(0)-13;
         if(value<65)
         value+=26;
         temp[i]=String.fromCharCode(value);
        }
    
      }
      return temp.join('');}`;
class Quiz extends React.Component {
  state = {
    questionList: [
      {
        id: "#234",
        title: "What primitive type is the variable result ?",
        code: "const result = NaN",
        answers: {
          a: "Symbol",
          b: "String",
          c: "Number",
          d: "Boolean"
        },
        correctAnswer: "c",
        time: 50
      },
      {
        id: "#123",
        title: "Given the following code snippet ?",
        code:
          "let foo =5;function addTwo(){foo=foo+2;}addTwo(foo);console.log(foo)",
        answers: {
          a: "12",
          b: "7",
          c: "5",
          d: "Reference Error"
        },
        correctAnswer: "c",
        time: 60
      }
    ],
    score: 0,
    nextQuestion: 0
  };
  clickHandler = e => {
    let score = this.state.score;
    let nextQuestion = this.state.nextQuestion;
    if (
      e.target.id ===
      this.state.questionList[this.state.nextQuestion].correctAnswer
    ) {
      e.target.classList.add("bg-success", "text-white");
      score += 5;
    } else {
      e.target.classList.add("bg-danger", "text-white");
    }
    nextQuestion++;
    setTimeout(() => {
      this.setState({ score: score, nextQuestion: nextQuestion });
    }, 1000);
  };
  javaScriptHandler() {
    const iframe = document.querySelector("#myFrame");
    let iframe_doc = iframe.contentDocument;
    let temp;
    let result = [];
    for (let i of testCases) {
      temp = eval(currentValue.concat(i.test));
      if (temp === i.result)
        result += `<p>Test ${i.no} pass! Expected : ${
          i.result
        } Outcome : ${temp}</p>`;
      else
        result += `<p>Test ${i.no} fail! Expected : ${
          i.result
        } Outcome : ${temp}</p>`;
    }

    iframe_doc.open();
    iframe_doc.write(result);
    iframe_doc.close();
  }
  render() {
    let quiz;
    if (this.state.nextQuestion < this.state.questionList.length) {
      quiz = (
        <QuizQuestion
          clicked={this.clickHandler}
          question={this.state.questionList[this.state.nextQuestion]}
        />
      );
    } else {
      quiz = (
        <div
          className="container-fluid bg-primary align-items-center"
          style={{ height: "100vh", width: "100vw" }}
        >
          <h1 className="text-center">Thank You for Your Participation</h1>
        </div>
      );
    }
    return (
      <div>
        {" "}
        <CountDownTimer /> {quiz}
      </div>
    );
  }
}

export default Quiz;
