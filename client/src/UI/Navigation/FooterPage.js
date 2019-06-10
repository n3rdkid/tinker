import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { Flag, Divider } from "semantic-ui-react";
const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4" style={{ maxHeight: "5vh" }}>
      <Divider />
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <Flag name="nepal" />
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.tinker.com"> tinker.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
