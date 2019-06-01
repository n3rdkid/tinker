import React from "react";
import axios from "axios";
import Spinner from "../../../UI/Spinner/Spinner";
class AssignmentInstructions extends React.Component {
  state = {
    questionId: this.props.questionId,
    assignmentId:this.props.assignmentId,
    instructions: null
  };
 async componentDidMount() {
  await  axios
      .get(`http://localhost:5000/api/assignments/question/${this.state.questionId}`)
      .then(response => {
        this.setState({ instructions: response.data.question });
      })
      .catch(error => console.log(error));

      console.log("Inside Assignment Instructions",this.state.data)
  }

  render() {
    let instructions;
    if (this.state.instructions) {
      let instuctionInformation = this.state.instructions;
      instructions = (
        <div className="bg-light my-2 p-2">
          <span className="d-block " style={{ fontSize: "28px" }}>
            {instuctionInformation.title}
          </span>
          <span className="badge badge-primary ">
            {instuctionInformation.label}
          </span>
 
            <span className="d-block p-2"
              style={{
                lineHeight: "20px"
              }}>
              {instuctionInformation.instruction}
           </span>
          <pre>
            {" "}
            <code
              className="d-block bg-light py-3 pl-2"
              style={{
                borderLeft: "2px solid #000000"
              }}
            >
              {instuctionInformation.starter}
            </code>
          </pre>
          <p>Notes</p>
          <ul>
            <li>
              Don't forget to{" "}
              <span className="badge badge-light" style={{ fontSize: "16px" }}>
                return
              </span>{" "}
              the result.
            </li>
            <li>
              If you get stuck on a challenge, find help in the <b>Resources</b>{" "}
              tab.
            </li>
          </ul>
        </div>
      );
    } else {
      instructions = <Spinner />;
    }
    return <>{instructions}</>;
  }
}

export default AssignmentInstructions;
