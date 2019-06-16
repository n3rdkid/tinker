import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Spinner from "../../UI/Spinner/Spinner";
import "./AssignmentItem.css";
import { MDBDataTable } from "mdbreact";
import Aside from "../../UI/Admin/Aside";
const dataTableData = {
  columns: [
    {
      label: "S.No",
      field: "assignment_id",
      sort: "asc"
    },
    {
      label: "Due Date",
      field: "dueDate",
      sort: "asc"
    },
    {
      label: "Action",
      field: "view",
      sort: "asc"
    }
  ],
  rows: []
};
class AdminAssignmentList extends React.Component {
  state = {
    data: "",
    loading: true
  };

  componentDidMount = async () => {
    console.log("Inside AdminAssignmentsLists ", this.props);
    if (this.props.auth.user.role !== "teacher")
      this.props.history.push("/restricted");
    await axios
      .get("http://localhost:5000/api/admin/assignments")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));

    let assignmentData = this.state.data;
    dataTableData.rows = [];
    for (let assignment of assignmentData) {
      dataTableData.rows.push({
        assignmentId: assignment.id,
        dueDate: assignment.dueDate.split("T")[0],
        view: (
          <button
            id={assignment.id}
            onClick={this.clickHandler}
            className="ml-auto btn btn-success"
          >
            View Submissions
          </button>
        )
      });
    }
    this.setState({ loading: false });
  };

  clickHandler = e => {
    console.log("View id ", e.target.id);
    let id = e.target.id || e.target.parentElement.id;
    this.props.history.push(`/admin/assignments/${id}`);
  };
  

  render() {
    let container = <p>No assignments yet</p>;
    if (this.state.loading) container = <Spinner />;
    else {
      container = (
        <MDBDataTable className="mt-3" striped hover data={dataTableData} searching={true} />
      );
    }
    return (
      <>
          
        <Container fluid style={{paddingLeft:"0"}}>
          {/*Need to add Heatmap ->*/}
         
          <Row>
            <Col>
            <Aside/>
         
          </Col>
            <Col xs={9} className="p-3">{container}</Col>
          </Row>
        </Container>
   </>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  null
)(AdminAssignmentList);
