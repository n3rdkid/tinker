import React from "react";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import AddTestCases from "../AddTestCases/AddTestCases";
import { connect } from "react-redux";
import Aside from "../../UI/Admin/Aside";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { MDBDataTable } from "mdbreact";
const dataTableData = {
  columns: [
    {
      label: "S.No",
      field: "question_no",
      sort: "asc"
    },
    {
      label: "Quesiton",
      field: "question",
      sort: "asc"
    },
    {
      label: "Action",
      field: "edit",
      sort: "asc"
    }
  ],
  rows: []
};
class EditAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignment_no: "1",
      loading: true,
      data: ""
    };
  }
  // componentDidMount = async () => {

  //   this.loadQuestions();
  // };
  clickHandler = e => {
    let id = e.target.id;
    this.props.history.push(`/admin/edit/${id}`);
  };
  loadQuestions = async () => {
    console.log("Inside Edit Assignments ", this.props);
    if (this.props.auth.user.role !== "teacher")
      this.props.history.push("/restricted");
    await axios
      .get(
        `http://localhost:5000/api/admin/assignments/${
          this.state.assignment_no
        }`
      )
      .then(response => {
        this.setState({
          ...this.state,
          data: response.data
        });
      })
      .catch(error => console.log(error));
    let questionData = this.state.data;
    dataTableData.rows = [];
    for (let question of questionData) {
      dataTableData.rows.push({
        question_no: question.id,
        question: question.title,
        edit: (
          <button
            id={question.id}
            onClick={this.clickHandler}
            className="ml-auto btn btn-success"
          >
            Edit question
          </button>
        )
      });
    }
    this.setState({ loading: false });
  };

  changeState = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let display = (
      <div className="card offset-xs-1" id="assignment_card">
        <div className="card-header">
          Assignment No :
          <input
            className="form-control"
            name="assignment_no"
            placeholder="{ 1 || 2 || 3||....||n}"
            type="text"
            onChange={e => this.changeState(e)}
            value={this.state.assignment_no}
          />
          <button class="btn btn-primary" onClick={this.loadQuestions}>
            Load
          </button>
        </div>

        <br />
      </div>
    );
    let container, table;
    if (this.state.loading) table = <Spinner />;
    else {
      table = (
        <MDBDataTable striped hover data={dataTableData} searching={true} />
      );
    }
    return (
      <Container fluid style={{ padding: "0" }}>
        <Row>
          <Col xs="3">
            <Aside />
          </Col>
          <Col>
            {" "}
            <Row>
              <Col>{display}</Col>
            </Row>{" "}
            <Row>
              <Col>{table}</Col>
            </Row>
            {/* <Row><Col>{displayTestCases}</Col></Row> */}
          </Col>
        </Row>
      </Container>
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
)(EditAssignment);
