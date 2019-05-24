import React from "react";
import axios from "axios";
import "./ChallengeItem.css";

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
        console.log(response.data[0]);
      })
      .catch(error => console.log(error));
  }

  render() {
    let container;
    if (this.state.data === "") container = <p> No data found </p>;
    else
      container = (
        <div className="container challengeItem">
          <h4> {this.state.data[0].title} </h4>
          <small className="lead">
            {this.state.data[0].instruction.substring(0, 300) + "..."}
         </small>
         <br/>

         <label className="badge badge-pill badge-primary">{this.state.data[0].label}</label>
        </div>
      );
    return (<div> {container} </div>);
  }
}

export default ChallengeItem;
