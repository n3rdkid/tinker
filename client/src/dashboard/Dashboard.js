import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ProgressBar from "react-bootstrap/ProgressBar";

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Something</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card border="info" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Due </Card.Title>
                <ProgressBar variant="success" now={60} label={`60%`} />
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-info">Quiz</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card border="info" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Challenge</Card.Title>
                <ProgressBar variant="success" now={60} label={`60%`} />

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-info">Challenge</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Dashboard;
