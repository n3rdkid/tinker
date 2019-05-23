import React from "react";
import axios from "axios";

class Challenge extends React.Component {
  state = {
    hi: ""
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/challenges")
      .then(response => {
        console.log(response);
        console.log(response.data.hi);
        this.setState({ hi: response.data.hi });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Challenges</h1>
        {console.log(this.state.hi)}
        <h3 class="ui header">{this.state.hi}Test</h3>
        <div class="ui section divider" />
        <h3 class="ui header">{this.state.hi}</h3>
        <p>
          Create a function that takes two numbers as arguments and return their
          sum.
          <button class="ui right floated button">Easy</button>
        </p>

        <div class="ui section divider" />
      </div>
    );
  }
}

export default Challenge;
