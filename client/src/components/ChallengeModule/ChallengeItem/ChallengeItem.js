import React from "react";
import axios from "axios";
import "./ChallengeItem.css";
import Spinner from "../../../UI/Spinner/Spinner";
import { Redirect } from "react-router";
class ChallengeItem extends React.Component {
  state = {
    data: ""
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/challenges")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));
  }
  clickHandler = e => {
    let id = e.target.parentElement.id || e.target.id;
    this.props.history.push(`/challenges/${id}`);
  };

  render() {
    let container;
    if (this.state.data === "") container = <Spinner />;
    else {
      let challengeData = this.state.data;
      let challengeList = [];
      for (let challenge of challengeData) {
        challengeList.push(
          <div
            className="container challengeItem"
            id={challenge.id}
            onClick={this.clickHandler}
          >
            <h4> {challenge.title} </h4>
            <small className="lead">
              {challenge.instruction.substring(0, 300) + "..."}
            </small>
            <br />

            <label className="badge badge-pill badge-primary">
              {challenge.label}
            </label>
          </div>
        );
      }
      container = challengeList;
    }
    return <>{container} </>;
  }
}

export default ChallengeItem;
