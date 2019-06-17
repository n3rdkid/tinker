import React from "react";
import { Button, Grid, Header, Icon, Segment, Step } from "semantic-ui-react";

class QuizGuide extends React.Component {
  render() {
    return (
      <Step.Group widths={3}>
        <Step>
          <Icon name="question" />
          <Step.Content>
            <Step.Title>Quiz</Step.Title>
            <Step.Description>Take the Quiz></Step.Description>
          </Step.Content>
        </Step>

        <Step>
          <Icon name="play" />
          <Step.Content>
            <Step.Title>Questions & Answers</Step.Title>
            <Step.Description>Play the Quiz</Step.Description>
          </Step.Content>
        </Step>

        <Step>
          <Icon name="eye" />
          <Step.Content>
            <Step.Title>Result</Step.Title>
            <Step.Description>Check out the result</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    );
  }
}

export default QuizGuide;
