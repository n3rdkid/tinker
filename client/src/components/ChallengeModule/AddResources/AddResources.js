import React from "react";
import axios from "axios";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
class AddResources extends React.Component {
  state = {
    title: "",
    link: "",
    description: "",
    challenge_id: this.props.location.state.questionId
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
    console.log("Props", this.props);
    return (
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md="6">
            <Card>
              <Card.Header> AddResources </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Challenge Id</Form.Label>
                    <Form.Control
                      name="challenge_id"
                      placeholder="Challenge id"
                      size="150"
                      type="text"
                      onChange={e => this.changeState(e)}
                      value={this.state.challenge_id}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      name="title"
                      placeholder="Title.."
                      size="150"
                      type="text"
                      onChange={e => this.changeState(e)}
                      value={this.state.title}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Link</Form.Label>
                    <Form.Control
                      name="link"
                      placeholder="Link.."
                      size="150"
                      type="text"
                      onChange={e => this.changeState(e)}
                      value={this.state.link}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      name="description"
                      placeholder="Description.."
                      size="100"
                      type="text"
                      onChange={e => this.changeState(e)}
                      value={this.state.description}
                    />
                  </Form.Group>
                  <Form.Row>
                    <Col sm="3">
                      <Button
                        type="submit"
                        onClick={e => this.onSubmit(e)}
                        variant="primary"
                        type="submit"
                      >
                        Add
                      </Button>
                    </Col>
                  </Form.Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      // <Container>
      //   <Row>
      //     <Col>
      //       <div className="card col-md-6 mx-auto">

      //         <label>Title</label>
      //         <input

      //         />
      //         <label>Link</label>
      //         <input
      //           name="link"
      //           placeholder="Link.."
      //           size="150"
      //           type="text"
      //           onChange={e => this.changeState(e)}
      //           value={this.state.link}
      //         />
      //         <label>Description</label>
      //         <input
      //           name="description"
      //           placeholder="Description.."
      //           size="100"
      //           type="text"
      //           onChange={e => this.changeState(e)}
      //           value={this.state.description}
      //         />
      //         <button onClick={e => this.onSubmit(e)}>Submit</button>
      //       </div>
      //     </Col>
      //   </Row>
      // </Container>
    );
  }
}
export default AddResources;
