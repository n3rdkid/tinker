import React from "react";
import axios from "axios";
import Spinner from "../../../UI/Spinner/Spinner";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
let currentValue = "";
class ChallengeLeaderboard extends React.Component {
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
          <tr>
            <td>{index + 1}</td>
            <td>{submission.username}</td>
            <td>{submission.timeTaken} }</td>
            <td>{time[0]}</td>
          </tr>
        );
        leaderboardList.push(item);
      });
    } else {
      leaderboardList = <Spinner />;
    }
    return (
      <>
       <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Time Taken</th>
            <th>Submission Date</th>
          </tr>
        </thead>
        {leaderboardList}
        </table>
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
)(withRouter(ChallengeLeaderboard));
