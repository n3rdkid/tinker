import React from "react";
import axios from "axios";
import ButtonToolbar from "react-bootstrap/Button";
class AddChallenge extends React.Component {
  state = {
    instruction: "",
    starter: "",
    label: ""
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    //axios.
    // axios
    //   .post("http://localhost:5000/api/users/signin", this.state)
    //   .then(() => console.log("Signin success"))
    //   .catch(err => console.log(err.response.data));
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          name="instruction"
          placeholder="Instruction.."
          size="150"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.instruction}
        />
        <input
          name="starter"
          placeholder="Starter.."
          size="150"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.starter}
        />
        <input
          name="label"
          placeholder="Label.."
          size="100"
          type="text"
          onChange={e => this.changeState(e)}
          value={this.state.label}
        />
        <br />
        <ButtonToolbar>
          <button variant="primary" onClick={e => this.onSubmit(e)}>
            Submit
          </button>
        </ButtonToolbar>
      </div>
    );
  }
}
export default AddChallenge;
