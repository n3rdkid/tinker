import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
class QuizResult extends React.Component {
  render() {
    return (
      <div>
        <h1 align="center">Congratulations</h1>

        <ProgressBar>
          <ProgressBar
            animated
            striped
            variant="success"
            label="CORRECT: 40%"
            now={40}
            key={1}
          />
          <ProgressBar
            animated
            striped
            variant="danger"
            label="WRONG: 60%"
            now={60}
            key={2}
          />
        </ProgressBar>
        <br />
        <ListGroup>
          <ListGroup.Item variant="dark">Questions</ListGroup.Item>
          <br />
          <ListGroup.Item variant="success">Question Random</ListGroup.Item>
          <ListGroup.Item variant="danger">Question Random</ListGroup.Item>
          <ListGroup.Item variant="success">Question Random</ListGroup.Item>
          <ListGroup.Item variant="danger">Question Random</ListGroup.Item>
          <ListGroup.Item variant="danger">Question Random</ListGroup.Item>
          <ListGroup.Item variant="danger">Question Random</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
export default QuizResult;
