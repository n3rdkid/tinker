import React from "react";
import { Flag, Grid, Segment } from "semantic-ui-react";
import "./FooterPage.css";
const FooterPage = () => {
  return (
    <div className="footer">
      <Segment color="violet" textAlign="center">
        <Grid>
          <Grid.Row>
            <Grid.Column width={6} />
            <Flag name="nepal" />
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.tinker.com"> TINKER.COM </a>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default FooterPage;
