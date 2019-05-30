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
    leaderboard:null
  };

  componentDidMount() {
    console.log(this.props.location);
    axios
      .get(`http://localhost:5000/api/challenges/leaderboard/${this.state.questionId}`)
      .then(response =>this.setState({leaderboard:response.data}))
      .catch(error => console.log(error));
    console.log(this.state.leaderboard)
    }

  render() {
    let leaderboardList=[]
      
      if(this.state.leaderboard)
      {
         
          this.state.leaderboard.forEach((submission,index)=>
            {
                let item=<li>ID {index+1} Time Taken {submission.timeTaken} Date {submission.submisison_date}</li>
                leaderboardList.push(item)
            })

      }else
      {
        leaderboardList=<Spinner/>
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
