import React from "react";
import userguide from "./img/assignment/userguide.jpg";
import { Image, Grid, Container } from "semantic-ui-react";

class UserGuideImage extends React.Component {
  render() {
    return (
      <Container>
        <Grid width={12}>
          <Image src={userguide} fluid />
        </Grid>
      </Container>
    );
  }
}

export default UserGuideImage;
