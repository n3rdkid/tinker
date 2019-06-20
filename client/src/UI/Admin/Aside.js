import React from "react";
import { withRouter } from "react-router";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
class SideNavPage extends React.Component {
  addHandler = () => {
    console.log("add");
    this.props.history.push("/admin/add");
  };
  editHandler = () => {
    console.log("edit");
    this.props.history.push("/admin/edit");
  };
  editTestCases = () => {
    console.log("edit test");
    this.props.history.push("/admin/test");
  };
  manageHandler = () => {
    this.props.history.push("/admin/assignments");
  };
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <SideNav
        style={{ zIndex: "10", position: "fixed", left: "0", top: "80",bottom:"0",background:"black",color:"white" }}
        expanded={true}
    
      >
        {/* <SideNav.Toggle /> */}
        <SideNav.Nav>
        <NavItem eventKey="edit">
            <NavIcon>
              {/* <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} /> */}
            </NavIcon>
            <NavText>
              {/* <div onClick={this.editHandler}>Edit Assignment</div> */}
            </NavText>
          </NavItem>
          <NavItem eventKey="edit">
            <NavIcon>
              {/* <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} /> */}
            </NavIcon>
            <NavText>
              {/* <div onClick={this.editHandler}>Edit Assignment</div> */}
            </NavText>
          </NavItem>
        <NavItem eventKey="manage">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
              <div onClick={this.manageHandler}> Manage Assignment</div>
            </NavText>
          </NavItem>
          <NavItem eventKey="add">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
              <div onClick={this.addHandler}> Add Assignment</div>
            </NavText>
          </NavItem>
          <NavItem eventKey="edit">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
              <div onClick={this.editHandler}>Edit Assignment</div>
            </NavText>
          </NavItem>
          <NavItem eventKey="editTest">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
              <div onClick={this.editTestCases}>Edit TestCases</div>
            </NavText>
          </NavItem>
          <NavItem eventKey="editTest">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
              <div onClick={this.editTestCases}>Go back</div>
            </NavText>
          </NavItem>
          {/* <NavItem eventKey="edit">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>
                <button
                style={{ background: "none", outline: "none", border: "0" }}
                onClick={this.props.editHandler}
              >
                Edit Assignment
              </button>
            </NavText>
            <NavItem eventKey="testcases">
              <NavText>Edit Test cases</NavText>
            </NavItem>
            <NavItem eventKey="barchart">
              <NavText>Edit Qeustions</NavText>
            </NavItem>
          </NavItem> */}
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default withRouter(SideNavPage);
