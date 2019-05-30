import React from "react";
import axios from "axios";
import Spinner from "../../../UI/Spinner/Spinner";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
let currentValue = "";
class ChallengeResult extends React.Component {
  state = {
    timeTaken: this.props.location.state.timeTaken,
    questionId: this.props.location.state.questionId
  };

  componentDidMount() {
    console.log(this.props.location);
    axios
      .get(`http://localhost:5000/api/leaderboard/${this.state.questionId}`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <div>You completed in {this.state.timeTaken} ms</div>
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
)(withRouter(ChallengeResult));
