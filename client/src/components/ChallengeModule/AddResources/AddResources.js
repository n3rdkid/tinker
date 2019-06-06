import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
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
    axios
      .post(`http://localhost:5000/api/challenges/resources/`, this.state)
      .then(() => console.log("Resource added sucessfully"))
      .catch(err => console.log(err.response.data));
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="card col-md-6 mx-auto">
              <label>Challenge Id</label>
              <input
                name="challenge_id"
                placeholder="Challenge_id"
                size="150"
                type="text"
                onChange={e => this.changeState(e)}
                value={this.state.challenge_id}
              />
              <label>Title</label>
              <input
                name="title"
                placeholder="Title.."
                size="150"
                type="text"
                onChange={e => this.changeState(e)}
                value={this.state.title}
              />
              <label>Link</label>
              <input
                name="link"
                placeholder="Link.."
                size="150"
                type="text"
                onChange={e => this.changeState(e)}
                value={this.state.link}
              />
              <label>Description</label>
              <input
                name="description"
                placeholder="Description.."
                size="100"
                type="text"
                onChange={e => this.changeState(e)}
                value={this.state.description}
              />
              <button onClick={e => this.onSubmit(e)}>Submit</button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AddResources;
