import React from "react";
import axios from "axios";

class Challenge extends React.Component {
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
      <div>
    <h1>Challenges</h1>
      <h3 class="ui header"> {this.state.data[0].id}</h3>
      <div class="ui section divider" />
      <h3 class="ui header">{this.state.data[0].instruction}</h3>
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

export default Challenge;
