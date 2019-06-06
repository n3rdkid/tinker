import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
class AddAssignment extends React.Component {
  state = {
    dueDate: ''
  };
  onSubmit = e => {
    e.preventDefault();
    console.log("Sengding")
   let date=new Date(this.state.dueDate).toISOString().slice(0, 19).replace('T', ' ')
    axios
      .post(`http://localhost:5000/api/assignments`,{dueDate:date})
      .then(() => console.log("Assignment added sucessfully"))
      .catch(err => console.log(err.response.data));
  };
  changeState = e => {
    console.log(e.target.name + "+" + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md='6'>
            <div className="card mx-auto">
              <form>
                <input
                  className="form-control"
                  name="dueDate"
                  placeholder="Due Date"
                  min={new Date().getDate()}
                  type="date"
                  onChange={e => this.changeState(e)}
                  value={this.state.dueDate}
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AddAssignment;
