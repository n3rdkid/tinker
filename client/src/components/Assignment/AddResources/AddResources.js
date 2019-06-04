import React from "react";
import axios from "axios";
class AddResources extends React.Component {
  state = {
    title: "",
    link: "",
    description: "",
    question_id: ""
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`http://localhost:5000/api/assignments/resources/`, this.state)
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
          name="question_id"
          placeholder="Question Id"
          size="150"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.question_id}
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
