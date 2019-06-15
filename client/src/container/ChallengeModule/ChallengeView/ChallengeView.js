import React, { Suspense } from "react";
import Spinner from "../../../UI/Spinner/Spinner";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
const ChallengeInstructions = React.lazy(() =>
  import(
    "../../../components/ChallengeModule/ChallengeInstructions/ChallengeInstructions"
  )
);
const ChallengeCode = React.lazy(() =>
  import("../../../components/ChallengeModule/ChallengeCode/ChallengeCode")
);
const ChallengeResources = React.lazy(() =>
  import(
    "../../../components/ChallengeModule/ChallengeResources/ChallengeResources"
  )
);
const ChallengeLeaderboard = React.lazy(() =>
  import(
    "../../../components/ChallengeModule/ChallengeResult/ChallengeLeaderboard"
  )
);
class ChallengeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: this.props.match.params.id
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
                  <ChallengeInstructions questionId={this.state.questionId} />
                </Suspense>
              </Tab>
              <Tab eventKey="code" title="Code">
                <Suspense fallback={<Spinner />}>
                  <ChallengeCode
                    auth={this.props.auth}
                    questionId={this.state.questionId}
                  />
                </Suspense>
              </Tab>
              <Tab eventKey="resources" title="Resources">
                <Suspense fallback={<Spinner />}>
                  <ChallengeResources questionId={this.state.questionId} />
                </Suspense>
              </Tab>
              <Tab eventKey="leaderboard" title="Leaderboard">
                <Suspense fallback={<Spinner />}>
                  <ChallengeLeaderboard questionId={this.state.questionId} />
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
)(withRouter(ChallengeView));
