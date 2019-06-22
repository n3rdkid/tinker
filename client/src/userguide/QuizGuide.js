import React from "react";
import { Grid, Icon, Step, Image, Transition } from "semantic-ui-react";
import step0 from "./img/quiz/step0.jpg";
import step1 from "./img/quiz/step1.png";
import step2 from "./img/quiz/step2.png";
import step3 from "./img/quiz/step3.jpg";

import "./UserGuide.css";

class ChallengeGuide extends React.Component {
  state = {
    imageSource: step0
  };
  clickedStep1 = event => {
    this.setState({ imageSource: step1 });
    console.log(event.target.step1);
  };
  clickedStep2 = event => {
    this.setState({ imageSource: step2 });
    console.log(event.target.step);
  };
  clickedStep3 = () => {
    this.setState({ imageSource: step3 });
  };

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid.Column width={5}>
            <Step.Group vertical>
              <Step.Group size="massive">
                <Icon name="angle double down" />
                <Step.Content>
                  <Step>
                    <Step.Title>
                      <Icon size="big" color="green" name="angle double down" />
                      Steps
                      <Icon size="big" color="green" name="angle double down" />
                    </Step.Title>
                  </Step>
                </Step.Content>
              </Step.Group>
              <div id="step" onClick={this.clickedStep1}>
                <Step>
                  <Icon name="help" />
                  <Step.Content>
                    <Step.Title>Quiz</Step.Title>
                    <Step.Description>Take the Quiz</Step.Description>
                  </Step.Content>
                </Step>
              </div>
              <div id="step" onClick={this.clickedStep2}>
                <Step>
                  <Icon name="play" />
                  <Step.Content>
                    <Step.Title>Play Quiz</Step.Title>
                    <Step.Description>
                      Choose the correct option
                    </Step.Description>
                  </Step.Content>
                </Step>
              </div>
              <div id="step" onClick={this.clickedStep3}>
                <Step>
                  <Icon name="eye" />
                  <Step.Content>
                    <Step.Title>Display Result</Step.Title>
                    <Step.Description>Check Answers</Step.Description>
                  </Step.Content>
                </Step>
              </div>
            </Step.Group>
          </Grid.Column>

          <Grid.Column width={11}>
            <Transition animation="scale" duration={500}>
              <Image
                id="stepImage"
                size="massive"
                src={this.state.imageSource}
                alt="step2"
                fluid
              />
            </Transition>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ChallengeGuide;
