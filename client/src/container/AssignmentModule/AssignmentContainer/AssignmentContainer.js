import React, { Suspense } from "react";
import Spinner from "../../../UI/Spinner/Spinner";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
const AssignmentInstructions = React.lazy(() =>
  import("../../../components/Assignment/AssignmentInstructions/AssignmentInstructions")
);
const AssignmentCode = React.lazy(() =>
  import("../../../components/Assignment/AssignmentCode/AssignmentCode")
);
const AssignmentResources = React.lazy(() =>
  import("../../../components/Assignment/AssignmentResources/AssignmentResources")
);
const AssignmentLeaderboard = React.lazy(() =>
  import("../../../components/Assignment/AssignmentLeaderboard/AssignmentLeaderboard")
);
class AssignmentContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("props inside Assignment Container",this.props);
    this.state = {
      questionId: this.props.location.state.questionId,
      assignmentId: this.props.location.state.assignmentId
    };
  }
  componentDidMount(){
    this.state = {
      questionId: this.props.location.state.questionId,
      assignmentId: this.props.location.state.assignmentId
    };
  }
  render() {
    return (
      <Container fluid={true} style={{paddingTop:"16px"}}>
        <Row>
          <Col md="8">
            <Tabs defaultActiveKey="instructions" id="uncontrolled-tab-example">
              <Tab eventKey="instructions" title="Instructions">
                <Suspense fallback={<Spinner />}>
                  <AssignmentInstructions assignmentId={this.state.assignmentId} questionId={this.state.questionId} />
                </Suspense>
              </Tab>
              <Tab eventKey="code" title="Code">
                <Suspense fallback={<Spinner />}>
                  <AssignmentCode auth={this.props.auth} questionId={this.state.questionId} />
                </Suspense>
              </Tab>
              <Tab eventKey="resources" title="Resources">
                <Suspense fallback={<Spinner />}>
                  <AssignmentResources questionId={this.state.questionId} />
                </Suspense>
              </Tab>
              <Tab eventKey="leaderboard" title="Leaderboard">
                <Suspense fallback={<Spinner />}>
                  <AssignmentLeaderboard questionId={this.state.questionId} />
                </Suspense>
              </Tab>
            </Tabs>
          </Col>

          <iframe
            className="col-md-4"
            style={{
              minHeight: "70vh",
              marginTop: "50px"
            }}
            title="myFrame"
            id="myFrame"
          />
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
)(withRouter(AssignmentContainer));
