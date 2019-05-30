import React from "react";
import axios from "axios";
import Spinner from "../../../UI/Spinner/Spinner";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
let currentValue = "";
class ChallengeResult extends React.Component {
  state = {
    timeTaken: this.props.location.state.timeTaken,
    questionId: this.props.location.state.questionId,
    leaderboard: null
  };

  async componentDidMount() {
    await axios
      .get(
        `http://localhost:5000/api/challenges/leaderboard/${this.state.questionId
        }`
      )
      .then(response => this.setState({ leaderboard: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    let leaderboardList = [];

    if (this.state.leaderboard) {
      this.state.leaderboard.forEach((submission, index) => {
        let time = submission.submisison_date.split("T");
        console.log(time)
        let item = (
          <li>
            ID ::{index + 1} Time Taken:: {submission.timeTaken} Date::{time[0]}
            {/* {formattedDate} */}
          </li>
        );
        leaderboardList.push(item);
      });
    } else {
      leaderboardList = <Spinner />;
    }
    return (
      <>
        <div>You completed in {this.state.timeTaken} ms</div>
        {leaderboardList}
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
