import React from "react";
import { Button, Grid, Header, Icon, Segment } from "semantic-ui-react";
import { Row, Col, Image, Container } from "react-bootstrap";

import "./UserGuide.css";

class UserGuide extends React.Component {
  state = {
    quizOpen: false,
    challengeOpen: false,
    assignmentOpen: false
  };
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col mt={5} md={6} lg={12}>
            <Segment placeholder>
              <Grid columns={4} relaxed="very" textAlign="center">
                <Grid.Row verticalAlign="middle">
                  <Grid.Column>
                    <Header icon>
                      <Icon name="bolt" />
                    </Header>
                    <Button primary>View Quiz Guide</Button>
                  </Grid.Column>

                  <Grid.Column>
                    <Header icon>
                      <Icon name="chess knight" />
                    </Header>
                    <Button primary>View Challenge Guide</Button>
                  </Grid.Column>

                  <Grid.Column>
                    <Header icon>
                      <Icon name="write" />
                    </Header>
                    <Button primary>View Assignment Guide</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Col>
        </Row>
        <div class="guide-container">
          <div class="guide-description-quiz">
            <div class="guide-description-quiz_title">
              <h1>Quiz Guide</h1>

              <div class="guide-description-quiz_steps">
                <div class="guide-description-quiz_steps_container">
                  <div class="guide-description-quiz_steps_image" />
                  <div class="guide-description-quiz_steps_description_card">
                    It includes total timer consumed by user to complete the
                    quiz and the language of that particular quiz.
                  </div>
                </div>
                <div class="guide-description-quiz_steps_container">
                  <div class="guide-description-quiz_steps_image1" />
                  <div class="guide-description-quiz_steps_description_card">
                    It includes the number of remaining questions in the quiz.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="guide-image" />
        </div>
      </React.Fragment>
    );
  }
}
export default UserGuide;
