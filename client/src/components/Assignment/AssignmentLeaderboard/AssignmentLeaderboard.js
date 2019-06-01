import React from "react";
import axios from "axios";
import Spinner from "../../../UI/Spinner/Spinner";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class AssignmentLeaderboard extends React.Component {
  state = {
    questionId: this.props.questionId,
    leaderboard: null
  };

  async componentDidMount() {
    console.log("Inside Assignment leaderboard",this.state.data)
    await axios
      .get(
        `http://localhost:5000/api/challenges/leaderboard/${
          this.state.questionId
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
        let seconds=submission.timeTaken/1000;
        let hours = parseInt( seconds / 3600 ); 
        seconds = seconds % 3600;
        let minutes=parseInt( seconds / 60 );
        seconds=(seconds%60).toFixed(0);
        let item = (
          <tr className="">
            <td>{index + 1}</td>
            <td>{submission.username}</td>
            <td>{hours?hours:'00'}<b> : </b>{minutes?minutes:'00'}<b> : </b>{seconds}</td>
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
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Username</th>
              <th scope="col">Time Taken</th>
              <th scope="col">Submission Date</th>
            </tr>
          </thead>
          <tbody className="table-striped">{leaderboardList}</tbody>
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
)(withRouter(AssignmentLeaderboard));
