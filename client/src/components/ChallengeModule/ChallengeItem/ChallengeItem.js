import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./ChallengeItem.css";
import Col from "react-bootstrap/Col";
import Spinner from "../../../UI/Spinner/Spinner";
import {NavLink} from "react-router-dom";
// import HeatMap from "react-heatmap-grid";
import { Redirect } from "react-router";
// const xLabels = ["15"]
// const yLabels = ["", "", "","June","","",""];
// const data = new Array(yLabels.length)
// .fill(0)
// .map(() =>
// new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 10))
// );
class ChallengeItem extends React.Component {
  state = {
    data: ""
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/challenges")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => console.log(error));
  }
  clickHandler = e => {
    let id = e.target.id || e.target.parentElement.id;
    console.log("Click handler " + id);
    this.props.history.push(`/challenges/${id}`);
  };

  render() {
    let container;
    if (this.state.data === "") container = <Spinner />;
    else {
      let challengeData = this.state.data;
      let challengeList = [];
      for (let challenge of challengeData) {
        challengeList.push(
          <div
            className="challengeItem"
            id={challenge.id}
            onClick={this.clickHandler}
            style={{marginBottom:"10px"}}
          >
            <h4 style={{fontSize:"22px"}}> {challenge.title} </h4>
            <small className="lead" style={{fontSize:"14px"}}>
              {challenge.instruction.substring(0, 300) + "..."}
            </small>
            <br />

            <label className="mt-2 badge badge-pill badge-primary">
              {challenge.label}
            </label>
          </div>
        );
      }
      container = challengeList;
    }
    return (
      <>
        <Container fluid={true} style={{background:"#f5f5f5",paddingTop:"16px",margin:"0"}}>
          {/*Need to add Heatmap ->*/}
          <Row>
            <Col xs={4}>
              <div>
                <Card className="text-center">
                <Card.Header className="text-center">
                      Tip of the Day
                    </Card.Header>
                  <Card.Body>
                  <Card.Title>
                  Avoid polluting the global scope
                  </Card.Title>
                  <p>Declaring variables is a lot of fun. Sometimes, you may declare global variables even if you don't want to...</p>
                  <a class="btn" href="https://code.tutsplus.com/tutorials/24-javascript-best-practices-for-beginners--net-5399" style={{borderRadius:"0",background:"transparent",color:"#FF502F"}}>Read More</a>
                  </Card.Body>
                </Card>
              </div>
              {/* <HeatMap xLabels={xLabels} yLabels={yLabels} data={data} /> */}
            </Col>
            <Col xs={8}> {container}</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ChallengeItem;
