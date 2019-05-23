import React from "react";
import axios from "axios";

class ChallengeItem extends React.Component {
  state = {
    data: ""
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/challenges")
      .then(response => {
        this.setState({data:response.data});
        console.log(response.data[0]);
      })
      .catch(error => console.log(error));
  }

  render() {
    let container;
    if(this.state.data==="")
      container=<p>No data found</p>
    else
    container=(  
      <div className="container">
      <h3> {this.state.data[0].title}</h3>
      <p className="lead">{this.state.data[0].instruction}</p>
      <p>
        <button class="ui right floated button">Easy</button>
      </p>

      <div class="ui section divider" />
      </div>);
    return (
      
      <div>
      {container}
      </div>
    );
  }
}

export default ChallengeItem;
