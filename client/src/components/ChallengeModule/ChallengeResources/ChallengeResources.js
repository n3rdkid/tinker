import React from "react";
import axios from "axios";
import Spinner from "../../../UI/Spinner/Spinner";
import {withRouter} from "react-router"
class ChallengeResources extends React.Component {
    state={
        questionId :this.props.questionId,
        resources:null
    }
  async componentDidMount() {
    await axios
      .get(
        `http://localhost:5000/api/challenges/resources/${this.state.questionId
        }`
      )
      .then(response => this.setState({ resources: response.data }))
      .catch(error => console.log(error));
  }
  clickHandler=()=>{
    this.props.history.push("/challenges/resource")
  }

  render() {
    let resourcesList = [];
  
    if (this.state.resources) {
      this.state.resources.forEach(resource => {
        let resourceItem = (
          <div className="card my-2 p-2">
              <h6 >{resource.title}</h6>
              <span><a href={resource.link}>{resource.link}</a></span>
              <span className="my-1">{resource.description}</span>
          </div>
         );
         resourcesList.push(resourceItem);
      });
    } else
    {
        resourcesList = <Spinner />;
    }
    if(resourcesList.length==0) {
        resourcesList=<p>Oops No resources!</p>
    }
    return (
      <>
      <div className="d-flex">
      <button className="btn btn-primary my-2 ml-auto" onClick={this.clickHandler}>Add resource</button>
      </div>
        {resourcesList}
      </>
    );
  }
}

export default withRouter(ChallengeResources);
