import React from "react";
import { Grid, Icon, Step, Image, Row } from "semantic-ui-react";
import step0 from "./img/challenges/step0.jpg";
import step1 from "./img/challenges/step1.jpg";
import step2 from "./img/challenges/step2.jpg";
import step3 from "./img/challenges/step3.jpg";
import step4 from "./img/challenges/step4.jpg";
import step5 from "./img/challenges/step5.jpg";
import step6 from "./img/challenges/step6.jpg";
import "./UserGuide.css";

class ChallengeGuide extends React.Component {
  state = {
    imageSource: step0
  };
  clickedStep1 = event => {
    this.setState({ imageSource: step1 });
    console.log(event.target.step);
  };
  clickedStep2 = event => {
    this.setState({ imageSource: step2 });
    console.log(event.target.step);
  };
  clickedStep3 = () => {
    this.setState({ imageSource: step3 });
  };
  clickedStep4 = () => {
    this.setState({ imageSource: step4 });
  };
  clickedStep5 = () => {
    this.setState({ imageSource: step5 });
  };
  clickedStep6 = () => {
    this.setState({ imageSource: step6 });
  };
  render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid.Column width={5}>
            <Step.Group vertical>
              <Step.Group size="medium">
                <Icon name="angle double down" />
                <Step.Content>
                  <Step>
                    <Step.Title>
                      <Icon
                        size="small"
                        color="green"
                        name="angle double down"
                      />
                      STEPS
                      <Icon
                        size="small"
                        color="green"
                        name="angle double down"
                      />
                    </Step.Title>
                  </Step>
                </Step.Content>
              </Step.Group>
              <div id="step" onClick={this.clickedStep1}>
                <Step>
                  <Icon name="chess" />
                  <Step.Content>
                    <Step.Title>Challenges</Step.Title>
                    <Step.Description>Explore the Challenges></Step.Description>
                  </Step.Content>
                </Step>
              </div>
              <div id="step" onClick={this.clickedStep2}>
                <Step>
                  <Icon name="play" />
                  <Step.Content>
                    <Step.Title>Multiple challenges</Step.Title>
                    <Step.Description>Select one challenge</Step.Description>
                  </Step.Content>
                </Step>
              </div>
              <div id="step" onClick={this.clickedStep3}>
                <Step>
                  <Icon name="book" />
                  <Step.Content>
                    <Step.Title>Instruction</Step.Title>
                    <Step.Description>
                      Carefully read the instruction
                    </Step.Description>
                  </Step.Content>
                </Step>
              </div>
              <div id="step" onClick={this.clickedStep4}>
                <Step>
                  <Icon name="code" />
                  <Step.Content>
                    <Step.Title>Code</Step.Title>
                    <Step.Description>
                      Write a code as per instruciton
                    </Step.Description>
                  </Step.Content>
                </Step>
              </div>
              <div id="step" onClick={this.clickedStep5}>
                <Step>
                  <Icon name="help" />
                  <Step.Content>
                    <Step.Title>Resource</Step.Title>
                    <Step.Description>
                      Stuck at code check resources
                    </Step.Description>
                  </Step.Content>
                </Step>
              </div>
              <div id="step" onClick={this.clickedStep6}>
                <Step>
                  <Icon name="certificate" />
                  <Step.Content>
                    <Step.Title>Leaderboard</Step.Title>
                    <Step.Description>
                      Submit code.Check your time.
                    </Step.Description>
                  </Step.Content>
                </Step>
              </div>
            </Step.Group>
          </Grid.Column>

          <Grid.Column width={11}>
            <Image
              id="stepImage"
              size="massive"
              src={this.state.imageSource}
              alt="step2"
              fluid
            />
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ChallengeGuide;
