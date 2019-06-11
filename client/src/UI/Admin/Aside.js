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
  render() {
    return (
      <SideNav
        style={{ zIndex: "1000", position: "fixed", left: "0", top: "60px" }}
        expanded={true}
        onSelect={selected => {
          // Add your code here
        }}
      >
        {/* <SideNav.Toggle /> */}
        <SideNav.Nav defaultSelected="add">
          <NavItem eventKey="add">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
            <div onClick={this.addHandler}>  Add Assignment</div>
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
