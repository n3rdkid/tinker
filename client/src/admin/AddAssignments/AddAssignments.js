import React from "react";
import axios from "axios";
class AddAssignment extends React.Component {
  state = {
    dueDate:null    
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`http://localhost:5000/api/admin/assignments`, this.state)
      .then(() => console.log("Assignment added sucessfully"))
      .catch(err => console.log(err.response.data));
  };
  changeState = e => {
    console.log(e.target.name + "+" + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div class="card">
        <form>
          <input
            className="form-control"
            name="dueDate"
            placeholder="Due Date"
            min={new Date().getDate}
            type="date"
            onChange={e => this.changeState(e)}
            value={this.state.dueDate}
          />
       <br/>
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddAssignment;
