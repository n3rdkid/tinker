import React from "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact";
const dataTableData = {
  columns: [
    {
      label: "S.No",
      field: "id",
      sort: "asc"
    },
    {
      label: "Test",
      field: "test",
      sort: "asc"
    },
    {
      label: "Result",
      field: "result",
      sort: "asc"
    }
  ],
  rows: []
};
class AddTestCases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question_id: props.question_no,
      test: "",
      result: "",
      testCases: null,
      loading: false,
      flag:0,
      message:""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  async componentDidMount() {
    this.nameInput.focus();
    await axios
      .get(
        `http://localhost:5000/api/admin/testcases/${
          this.state.question_id
        }`
      )
      .then(response => this.setState({ testCases: response.data }))
      .catch(err => console.log("Error Loading Test cases"));
    this.setState({ question_id: this.props.question_no });
    let testData = this.state.testCases;
    dataTableData.rows = [];
    for (let testcase of testData) {
      dataTableData.rows.push({
        id: testcase.id,
        test: testcase.test,
        result: testcase.result
      });
    }
    console.log("DATATABLE", dataTableData.rows);
    this.setState({ loading: false ,flag:1});
  }

  loadTestCases = async () => {
    await axios
      .get(
        `http://localhost:5000/api/admin/testcases/${
          this.state.question_id
        }`
      )
      .then(response => this.setState({ testCases: response.data }))
      .catch(err => console.log("Error Loading Test cases"));
    let testData = this.state.testCases;
    dataTableData.rows = [];
    for (let testcase of testData) {
      dataTableData.rows.push({
        id: testcase.id,
        test: testcase.test,
        result: testcase.result
      });
    }
    console.log("DATATABLE", dataTableData.rows);
    this.setState({ loading: false,flag:3 });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
   let data = {
      ...this.state,
      result:this.state.result
    };
    console.log("Data being submitted is ",data)
    axios
      .post(`http://localhost:5000/api/assignments/testcases`, {
        ...data,
        question_id: "" + this.state.question_id
      })
      .then((res) =>this.setState({message:res.data.message}))
      .catch(err => console.log(err.response.data));
    this.loadTestCases();
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    let table = <p>Sorry No test cases defined yet!</p>;
    if (this.state.loading) table = <p>No test cases Yet</p>;
    else {
      table = <MDBDataTable striped hover data={dataTableData} />;
    }
    return (
      <div class="card mt-3">
        <div class="card-header">Test cases</div>
        <div class="card-body">
          <form>
            <label style={{ fontSize: "20px" }}>Question Id</label>
            <input
              className="form-control"
              name="question_id"
              placeholder="Question No"
              type="text"
              onChange={e => this.changeState(e)}
              value={this.state.question_id}
            />
            <label style={{ fontSize: "20px" }}>Test </label>
            <input
              ref={input => {
                this.nameInput = input;
              }}
              className="form-control"
              name="test"
              placeholder="test.."
              type="text"
              onChange={e => this.changeState(e)}
              value={this.state.test}
            />
            <label style={{ fontSize: "20px" }}>Expected Result </label>
            <input
              className="form-control"
              name="result"
              placeholder="Expected Result"
              type="text"
              onChange={e => this.changeState(e)}
              value={this.state.result}
            />
            <br />
            <button className="btn btn-dark" onClick={e => this.onSubmit(e)}>Submit</button>
              <div>{this.state.message}</div>
          </form>
          {/* {table} */}
        </div>
      </div>
    );
  }
}
export default AddTestCases;
