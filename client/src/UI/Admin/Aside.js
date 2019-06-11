import React from "react";
import { Sidebar, Icon, Menu } from "semantic-ui-react";

class DefaultAside  extends React.Component{
  render() {
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        // onHide={this.handleSidebarHide}
        vertical
        visible={true}
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>
    );
  }
}
export default DefaultAside;
