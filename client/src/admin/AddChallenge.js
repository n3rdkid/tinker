import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
class AddChallenge extends React.Component {
  state = {
    title: "",
    instruction: "",
    starter: "",
    label: ""
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Add Challenge </h1>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Title
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="title"
                type="text"
                onChange={e => this.changeHandler(e)}
                value={this.state.title}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Instruction
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="instruction"
                type="text"
                onChange={e => this.changeHandler(e)}
                value={this.state.instruction}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Starter
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="starter"
                type="text"
                onChange={e => this.changeHandler(e)}
                value={this.state.starter}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Label
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="label"
                type="text"
                onChange={e => this.changeHandler(e)}
                value={this.state.label}
              />
            </Col>
          </Form.Group>
          <Button variant="success" type="submit">
            Add Challenge
          </Button>
        </Form>
      </div>
    );
  }
}
export default AddChallenge;
