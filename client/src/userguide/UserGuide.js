import React from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment
} from "semantic-ui-react";

class UserGuide extends React.Component {
  render() {
    return (
      <Segment placeholder>
        <Grid columns={3} relaxed="very" textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="bolt" />
              </Header>
              <Button primary>Go to Quiz</Button>
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="chess knight" />
              </Header>
              <Button primary>Go to Challenge</Button>
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="write" />
              </Header>
              <Button primary>Go to Assignment</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
export default UserGuide;
