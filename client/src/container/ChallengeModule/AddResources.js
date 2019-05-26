import React from "react";
import axios from "axios";
class AddResources extends React.Component {
  state = {
    title: "",
    link: "",
    description: "",
    challenge_id: ""
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let id = axios
      .post(`http://localhost:5000/api/challenges/resources/`, this.state)
      .then(() => console.log("Resource added sucessfully"))
      .catch(err => console.log(err.response.data));
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          name="challenge_id"
          placeholder="Challenge_id"
          size="150"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.challenge_id}
        />
        <input
          name="title"
          placeholder="Title.."
          size="150"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.title}
        />
        <input
          name="link"
          placeholder="Link.."
          size="150"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.link}
        />
        <input
          name="description"
          placeholder="Description.."
          size="100"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.description}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </div>
    );
  }
}
export default AddResources;
