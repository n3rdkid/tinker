import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class Assignment extends React.Component {
  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Score</th>
            <th>EDIT</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>This is the demo questoin</td>
            <td>20</td>
            <td>
              <Button variant="outline-warning">Edit</Button>
            </td>
            <td>
              <Button variant="outline-danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>This is 2nd demo question</td>
            <td>10</td>
            <td>
              <Button variant="outline-warning">Edit</Button>
            </td>
            <td>
              <Button variant="outline-danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>This is demo question</td>
            <td>10</td>
            <td>
              <Button variant="outline-warning">Edit</Button>
            </td>
            <td>
              <Button variant="outline-danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>This is demo question</td>
            <td>10</td>
            <td>
              <Button variant="outline-warning">Edit</Button>
            </td>
            <td>
              <Button variant="outline-danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>This is demo question</td>
            <td>20</td>
            <td>
              <Button variant="outline-warning">Edit</Button>
            </td>
            <td>
              <Button variant="outline-danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <Button variant="success" size="l" block>
                Create a question
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Assignment;
